import { Router, Request, Response } from "express";
import GetInfoMusicController from "../controllers/GetInfoMusicController";
import GetInfoVideoController from "../controllers/GetInfoVideoController";

const routes = Router();

routes.get('/api/v1/video', new GetInfoVideoController().getInfoVideo);
routes.get('/api/v1/music', new GetInfoMusicController().getInfoMusic);

export default routes;