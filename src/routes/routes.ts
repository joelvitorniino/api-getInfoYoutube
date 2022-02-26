import { Router, Request, Response } from "express";
import GetInfoMusicController from "../controllers/GetInfoMusicController";
import GetInfoVideoController from "../controllers/GetInfoVideoController";

const routes = Router();

routes.get('/video', new GetInfoVideoController().getInfoVideo);
routes.get('/music', new GetInfoMusicController().getInfoMusic);

export default routes;