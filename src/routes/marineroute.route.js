import express from 'express';
import { validateCoordinates } from "../middlewares/validateCoordinates.middleware.js";
import { getRoute } from "../controllers/getRoute.controller.js";

const router = express.Router();

// router.get("/");
// router.get("/status");
router.post("/get-route",[validateCoordinates],getRoute);

export default router