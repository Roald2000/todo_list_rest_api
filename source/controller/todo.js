import { convertDateFormat, executeQuery, setPlaceHolder, setResponse } from "../utility/utility.js";
import { baseDateFormat } from "../utility/config.js";

const createItem = async (req, res, next) => {
    try {

        const { todo, start_date, due_date, status } = req.body;


        const convertedStartDate = convertDateFormat(start_date, baseDateFormat);
        const convertedDueDate = convertDateFormat(due_date, baseDateFormat);

        const inputParams = [todo, convertedStartDate, convertedDueDate, status];


        const queryPlaceHolder = setPlaceHolder(inputParams.length, "?").toString('text');

        let result = await executeQuery(`INSERT INTO todo_tbl(todo,start_date,due_date,status)  VALUES(${queryPlaceHolder})`, inputParams);

        res.contentType("application/json");
        result && setResponse(res, 201, "Todo Created!");

    } catch (error) {
        next(error);
    }
}

const getList = async (req, res, next) => {
    try {
        let result = await executeQuery("SELECT * FROM todo_view ORDER BY status,dateStarted,dateDue DESC LIMIT 50");

        if (!result || result.length == 0) {
            const ErrorNoResult = new Error("No Todo were Found!");
            ErrorNoResult.status = 404;
            throw ErrorNoResult;
        } else {
            res.contentType("application/json");
            setResponse(res, 200, result);
        }

    } catch (error) {
        next(error);
    }
}

const getItem = async (req, res, next) => {
    try {

        const { item_id } = req.params;

        let result = await executeQuery("SELECT * FROM todo_view WHERE item_id = ? LIMIT 50", item_id);

        if (!result || result.length == 0) {
            const ErrorNoResult = new Error(`No Todo has an id of '${item_id}' was Found!`);
            ErrorNoResult.status = 404;
            throw ErrorNoResult;
        } else {
            res.contentType("application/json");
            setResponse(res, 200, result);
        }

    } catch (error) {
        next(error)
    }
}

const updateItem = async (req, res, next) => {
    try {

        const { item_id, status } = req.params

        let result = await executeQuery("UPDATE todo_tbl SET status = ? WHERE item_id = ?", [status, item_id]);

        res.contentType("application/json");
        result && setResponse(res, 201, "Todo Updated")

    } catch (error) {
        next(error);
    }
}

const deleteItem = async (req, res, next) => {
    try {
        const { item_id } = req.params;
        await executeQuery("DELETE FROM todo_tbl WHERE item_id = ?", item_id);
        setResponse(res, 204)
    } catch (error) {
        next(error);
    }
}

const clearList = async (req, res, next) => {
    try {
        await executeQuery("DELETE FROM todo_tbl") && setResponse(res, 204);
    } catch (error) {
        next(error);
    }
}




export { createItem, getList, getItem, updateItem, deleteItem, clearList }