import { error } from "console";

export default class ValidationError extends Error {
    errors: string[];

    constructor(errors : string[]) {
        super(`Invalid input!`)
        this.errors = errors
    }
}