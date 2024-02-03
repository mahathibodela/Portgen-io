import CustomError from "./custom-api";
import { StatusCodes } from "http-status-codes";

class UnauthorizedError extends CustomError{
    constructor(message){
        super(message);
        this.statusCode = StatusCodes.FORBIDDEN;
    }
}

module.exports = UnauthorizedError;