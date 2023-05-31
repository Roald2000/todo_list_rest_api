import { createPool } from "mysql";

const dataPool = createPool({
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: '',
    database: 'todo_list',
    connectionLimit: 20,
});

const allowedMethods = ['GET', 'POST', 'PATCH', 'PUT', 'DELETE'];


const TestPort = 9090;


const baseDateFormat = "YYYY-MM-DD";


export { dataPool, allowedMethods, TestPort, baseDateFormat };



