import express from 'express';
import { todoRouter } from './routes/todo_routes.js';
import { TestPort } from './utility/config.js';
import { catchThrownErrors, undefinedRoutes } from './middelwares/afterMiddleware.js';
import { checkAllowedMethods, corsConfig, jsonExpressConfig } from './middelwares/beforeMiddleware.js';


const app = express();
// Before
app.use(corsConfig);
app.use(jsonExpressConfig);
app.use(checkAllowedMethods);

// Routes
app.use(todoRouter);


// After
app.use(undefinedRoutes);
app.use(catchThrownErrors);

app.listen(TestPort, () => {
    console.log(`Todo REST API Serving @ http://localhost:${TestPort}`);
})