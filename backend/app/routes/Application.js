import express from "express";
import ApplicationController from "../controllers/ApplicationController.js";

const ApplicationRouter = express.Router();

ApplicationRouter.get("/", ApplicationController.get);
ApplicationRouter.post("/", ApplicationController.post);

export default ApplicationRouter;
