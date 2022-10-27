import Patient from '../../../application/entities/Patient'
import { AppDataSource } from '../data-source'
import PatientModel from '../models/PatientModel'

export default class PatientRepository {
    private db : any

    constructor() {
        this.db = AppDataSource.getRepository(PatientModel)
    }

    async list() : Promise<PatientModel[]>  { return await this.db.find() }

    async findById(id : string) : Promise<PatientModel> { return this.db.findOne({ where : { id } }) }

    async save(patient: Patient) : Promise<PatientModel> { return await this.db.save(patient) }

    async remove(id:string) { return (await this.db.delete({id})) ? true : false }
}
