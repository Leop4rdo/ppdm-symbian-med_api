import "reflect-metadata"
import { DataSource } from "typeorm"
import PatientModel from "./models/PatientModel"
import { readFileSync } from "fs"

export const AppDataSource = new DataSource({
    type: "mysql",
    host: "symbian-database-test-2022.mysql.database.azure.com",
    port: 3306,
    username: "symbian_adm",
    password: "S1m3d@2022!",
    database: "symbian_med_db",
    ssl: {
        ca : readFileSync('src/adapters/database/security/CA.crt.pem').toString()
    },
    synchronize: true,
    logging: ["error", "info"],
    entities: [PatientModel],
    migrations: [],
    subscribers: [],
})
