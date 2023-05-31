import moment from "moment";
import { dataPool } from "./config.js";


const setPlaceHolder = (length, placeholder) => {
    let data = [];
    for (let index = 0; index < length; index++) {
        data.push(placeholder);
    }
    return data.join(",");
};

const setResponse = (res, statusCode, responseData) => {
    
    if (!responseData) {
        return res.sendStatus(statusCode);
    } else {
        return res.status(statusCode).send({
            status: statusCode,
            data: responseData
        })
    }
}

function convertDateFormat(dateString, formatString) {
    try {

        const date = moment(dateString, ['MM/DD/YYYY', 'DD/MM/YYYY', 'YYYY-MM-DD', 'MMMM DD, YYYY'], true);

        if (!date.isValid()) {
            throw new Error("Invalid date!");
        }

        const formattedDate = date.format(formatString);
        return formattedDate;
    } catch (error) {
        return "Error: " + error.message;
    }
}



const executeQuery = (query, params) => new Promise((resolve, reject) => {
    if (!Array.isArray(params)) {
        params = [params];
    }
    dataPool.query(query, params, (error, result) => {
        if (error) {
            reject(error);
        } else {
            resolve(result);
        }
    });
})


export { setPlaceHolder, setResponse, convertDateFormat, executeQuery };