import express from "express";
import {getPlayerTower} from "../controller/tower/towerController";

const towerRouter = express.Router();

towerRouter.get("/getplayertower", getPlayerTower);

export default towerRouter;