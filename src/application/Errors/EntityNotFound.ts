
export default class EntityNotFoundError extends Error {
    constructor(entityName : string) {
        super(`${entityName} could not be found!`);
    }
}