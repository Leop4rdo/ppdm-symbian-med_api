import EntityNotFoundError from "./EntityNotFound"
import { Response } from 'express'
import { error } from "console"

export const handleErrors = (err : any, res : Response) => {
    console.log(err.resolve)

    const resolved = {
        status : err.status || 400,
        errors : err.errors || undefined,
        message : err.message
    }

    res.json(resolved).status(resolved)
}