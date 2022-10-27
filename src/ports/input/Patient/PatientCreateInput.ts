
import IPatientProps from "../../../application/entities/interfaces/IPatient";
import ValidationError from "../../../application/Errors/Validation";
import IInputPort from "../IInputPort";

export default class PatientCreateInput implements IInputPort {
    name : string
    phone : string
    cellphone : string
    email : string
    responsibleName : string
    responsiblePhone : string

    constructor(props : IPatientProps) {
        this.name = props.name
        this.phone = props.phone
        this.cellphone = props.cellphone
        this.email = props.email
        this.responsibleName = props.responsibleName
        this.responsiblePhone = props.responsiblePhone
    }
    
    validate() {
        const errors = []

        if (!this.name) 
            errors.push('Patient name must be provided')

        if (!this.phone) 
            errors.push('Patient phone must be provided')
        
        if (!this.cellphone) 
            errors.push('Patient cellphone must be provided')
        
        if (!this.email) 
            errors.push('Patient email must be provided')

        if (errors.length > 0)
            throw new ValidationError(errors)
    };
}