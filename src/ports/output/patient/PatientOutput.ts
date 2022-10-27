import { Timestamp } from "typeorm"
import IPatientProps from "../../../application/entities/interfaces/IPatient"

export default class PatientOutput {
    id : string
    name : string
    phone : string
    cellphone : string
    email : string
    responsibleName : string
    responsiblePhone : string
    createdAt : Timestamp
    updatedAt : Timestamp

    constructor (props : IPatientProps) {
        Object.assign(this, props)
    }
}
