import { Router } from "express";

import { checkDatabaseConnection } from '../middelwares/routerMiddleware.js';

import { clearList, createItem, deleteItem, getItem, getList, updateItem } from "../controller/todo.js";
import { executeQuery } from "../utility/utility.js";

const todoRouter = Router();

//* Create/Insert new item
todoRouter.use('/api/todo/create', checkDatabaseConnection, createItem);

//* Fetches/Selects all the list items
todoRouter.get('/api/todo/get_list', checkDatabaseConnection, getList)

//* Fetches/Selects an item by its id
todoRouter.get('/api/todo/get_item/:item_id', checkDatabaseConnection, getItem)

todoRouter.patch('/api/todo/update_status/:item_id/:status', checkDatabaseConnection, updateItem);

//* Deletes an item by its id
todoRouter.delete('/api/todo/delete_item/:item_id', checkDatabaseConnection, async (req, res, next) => {
    try {
        const { item_id } = req.params;

        let result = await executeQuery("SELECT item_id FROM todo_tbl WHERE item_id = ? LIMIT 1", item_id);

        if (result.length !== 0) {
            next();
        } else {
            const ErrorNoResult = new Error(`No Todo has an id of '${item_id}' was Found! Delete Failed`);
            ErrorNoResult.status = 404;
            throw ErrorNoResult;
        }

    } catch (error) {
        next(error);
    }
}, deleteItem)

//* Clears Todo List
todoRouter.delete('/api/todo/clear', clearList)

export { todoRouter };