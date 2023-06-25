import express from "express";
import {getGreeting} from "../controller/mainpage/mainPageController";

const mainPageRouter = express.Router();

mainPageRouter.get("/", getGreeting);

export default mainPageRouter;