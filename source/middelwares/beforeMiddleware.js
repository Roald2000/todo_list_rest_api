import express from 'express';
import cors from 'cors';
import { allowedMethods } from '../utility/config.js';


let corsConfig = cors({ allowedMethods: allowedMethods.join(",") });

const jsonExpressConfig = express.json();

const checkAllowedMethods = (req, res, next) => {
    try {
        if (!allowedMethods.includes(req.method)) {
            const NotAllwedMethod = new Error("Method not allowed");
            NotAllwedMethod.status = 401;
            throw NotAllwedMethod;
        } else {
            next()
        }
    } catch (error) {
        next(error);
    }
}


export {
    jsonExpressConfig,
    corsConfig,
    checkAllowedMethods,
}