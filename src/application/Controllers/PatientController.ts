
import {Router, Request, Response} from 'express'
import PatientRepository from '../../adapters/database/repositories/PatientRepository'
import PatientCreateInput from '../../ports/input/Patient/PatientCreateInput'
import PatientMinimalOutput from '../../ports/output/patient/PatientMinimalOutput'
import PatientOutput from '../../ports/output/patient/PatientOutput'
import IPatientProps from '../entities/interfaces/IPatient'
import { handleErrors } from '../Errors'
import PatientService from '../services/PatientService'

const PatientController = Router()
const repository = new PatientRepository()
const service = new PatientService(repository)


PatientController.get('/patients', async (req : Request, res : Response) => {
    service.list().then((patients) => {
        const mapped = patients.map((p) => new PatientMinimalOutput(p))

        res.json({ status : 200, data : mapped }).status(200)

    }).catch((err) => handleErrors(err, res))
})

PatientController.get('/patients/:id', async (req : Request, res : Response) => {
    service.findById(req.params.id).then((patient) => {
        const mapped = new PatientOutput(patient)

        res.json({ status : 200, data : mapped }).status(200)
        
    }).catch((err) => handleErrors(err, res))
})

PatientController.post('/patients', async (req : Request, res : Response) => {
    service.create(new PatientCreateInput(req.body)).then((patient) => {
        const mapped = new PatientOutput(patient)

        res.json({ status : 201, data : mapped }).status(201)
    }).catch((err) => handleErrors(err, res))
})

PatientController.put('/patients/:id', async (req : Request, res : Response) => {
    service.update(new PatientCreateInput(req.body), req.params.id).then((patient) => {
        const mapped = new PatientOutput(patient)

        res.json({ status : 200, data : mapped }).status(201)
    }).catch((err) => handleErrors(err, res))
})

PatientController.delete('/patients/:id', async (req : Request, res : Response) => {
    service.delete(req.params.id).then((_) => {
        res.json({ status : 200, message : 'Successfully deleted patient' }).status(201)
    }).catch((err) => handleErrors(err, res))
})

export default PatientController