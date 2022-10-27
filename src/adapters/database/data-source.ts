import "reflect-metadata"
import { DataSource } from "typeorm"
import PatientModel from "./models/PatientModel"

export const AppDataSource = new DataSource({
    type: "mysql",
    host: "localhost",
    port: 3306,
    username: "root",
    password: "12345678",
    database: "symbian_med_db",
    synchronize: true,
    logging: ["error", "info"],
    entities: [PatientModel],
    migrations: [],
    subscribers: [],
})
