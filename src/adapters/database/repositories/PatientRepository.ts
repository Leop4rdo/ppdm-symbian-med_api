import { ILike, Repository } from 'typeorm'
import Patient from '../../../application/entities/Patient'
import { AppDataSource } from '../data-source'
import { PatientListFilter } from '../Filters/PatientFilter'
import PatientModel from '../models/PatientModel'

export default class PatientRepository {
    private db : Repository<PatientModel>

    constructor() {
        this.db = AppDataSource.getRepository(PatientModel)
    }

    async list(query : PatientListFilter) : Promise<PatientModel[]>  { 
        return await this.db.find({
            where : {
                name : (query.name) ? ILike(`${query.name}%`) : undefined
            },
            take : query.limit,
            skip : query.offset
        }) 
    }

    async findById(id : string) : Promise<PatientModel> { return this.db.findOne({ where : { id } }) }

    async save(patient: Patient) : Promise<PatientModel> { return await this.db.save(patient) }

    async remove(id:string) { return (await this.db.delete({id})) ? true : false }
}
