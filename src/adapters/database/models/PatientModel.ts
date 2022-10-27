import {Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, Timestamp, UpdateDateColumn} from "typeorm";

@Entity('patients')
export default class PatientModel {
    @PrimaryGeneratedColumn('uuid')
    id : string

    @Column()
    name : string

    @Column()
    phone : string

    @Column()
    cellphone : string

    @Column()
    email : string

    @Column({ name : 'responsible_name', nullable : true })
    responsibleName : string

    @Column({ name : 'responsible_phone', nullable : true })
    responsiblePhone : string

    @CreateDateColumn({ name : 'created_at' })
    createdAt : Timestamp

    @UpdateDateColumn({ name : 'updated_at' })
    updatedAt : Timestamp
}
