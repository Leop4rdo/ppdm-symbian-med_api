import { Timestamp } from "typeorm"

export default interface IPatientProps {
    id ?: string
    name : string
    phone : string
    cellphone : string
    email : string
    responsibleName : string
    responsiblePhone : string
    createdAt ?: Timestamp
    updatedAt ?: Timestamp
}
