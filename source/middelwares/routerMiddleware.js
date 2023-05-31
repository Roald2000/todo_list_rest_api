import { dataPool } from "../utility/config.js";

const checkDatabaseConnection = (req, res, next) => {
    try {
        dataPool.getConnection((error, connection) => {
            if (error) {
                const DatabaseConnectionError = new Error(error.message);
                DatabaseConnectionError.status = error.errno;
                throw DatabaseConnectionError;
            } else {
                connection.release();
                next();
            }
        })
    } catch (error) {
        next(error);
    }
}


export {
    checkDatabaseConnection,
}