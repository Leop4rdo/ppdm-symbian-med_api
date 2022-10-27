import IPatientProps from './interfaces/IPatient'

export default  class Patient implements IPatientProps {
    id : string
    name : string
    phone : string
    cellphone : string
    email : string
    responsibleName : string
    responsiblePhone : string

    constructor (props : IPatientProps) {
        Object.assign(this, props)
    }
}
