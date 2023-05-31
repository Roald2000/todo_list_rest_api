
const undefinedRoutes = (req, res, next) => {
    const UndefinedRoute = new Error("Invalid Route");
    UndefinedRoute.status = 404;
    next(UndefinedRoute);
}


const catchThrownErrors = (err, req, res, next) => {
    res.contentType("application/json")
    const errMessage = err.message || "Internal Server Error";
    const errStatus = err.status || 500;
    const response = {
        status: errStatus,
        message: errMessage,
    }
    console.log(response)
    res.status(errStatus).send(response);
}


export {
    undefinedRoutes,
    catchThrownErrors
}