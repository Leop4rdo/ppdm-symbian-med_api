import { Timestamp } from "typeorm"
import IPatientProps from "../../../application/entities/interfaces/IPatient"

export default class PatientMinimalOutput {
    id : string
    name : string
    email : string
    createdAt : Timestamp
    updatedAt : Timestamp

    constructor (props : IPatientProps) {
        this.id = props.id
        this.name = props.name
        this.email = props.email
        this.createdAt = props.createdAt
        this.updatedAt = props.updatedAt
    }
}
