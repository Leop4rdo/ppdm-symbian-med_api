import EntityNotFoundError from "../Errors/EntityNotFound"
import PatientRepository from "../../adapters/database/repositories/PatientRepository"
import Patient from "../entities/Patient"
import PatientCreateInput from "../../ports/input/Patient/PatientCreateInput"
import ValidationError from "../Errors/Validation"

export default class PatientService {
    private repo : PatientRepository

    constructor(repo : PatientRepository) {
        this.repo = repo
    }

    async list() : Promise<Patient[]>{
        return await this.repo.list()
    }

    async findById(id : string) : Promise<Patient> {
        const patient = await this.repo.findById(id)

        if (!patient)
            throw new EntityNotFoundError('Patient')

        return patient
    }

    async create(input : PatientCreateInput) : Promise<Patient> {
        input.validate()

        return await this.repo.save(new Patient(input))
    }

    async update(input : PatientCreateInput, id : string) : Promise<Patient> { 
        input.validate()

        const patient = await this.repo.findById(id)
        
        if (!patient)
            throw new EntityNotFoundError('Patient')
        
        Object.assign(patient, input)

        return await this.repo.save(patient)
    }

    async delete(id : string) : Promise<boolean> {
        return await this.repo.remove(id)
    }
}
