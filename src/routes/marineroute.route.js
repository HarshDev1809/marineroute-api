import express from 'express';
import { validateCoordinates } from "../middlewares/validateCoordinates.middleware.js";
import { getRoute } from "../controllers/getRoute.controller.js";
import { getStatus } from '../controllers/getStatus.controller.js';

const router = express.Router();

router.get("/",getStatus);
router.get("/status",getStatus);
router.post("/get-route",[validateCoordinates],getRoute);

export default router