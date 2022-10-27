import express from 'express'
import * as bodyParser from "body-parser"
import { AppDataSource } from "./adapters/database/data-source"
import router from "./routes"

const bootstrap = () => {
    const app = express()
    
    app.use(bodyParser.json())

    app.use('/api/v1', router)

    app.listen(8080, () => console.log('Symbian Med API is runnin on port 8080'))
}

AppDataSource
    .initialize()
    .then(bootstrap)
    .catch(error => console.log(error))
