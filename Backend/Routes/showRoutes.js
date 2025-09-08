import express from "express";
import {
  addShow,
  getNowPlayingMovies,
  getShow,
  getShows,
} from "../controller/showsControllers.js";
import { protectAdmin } from "../middleware/auth.js";

const showRouter = express.Router();

showRouter.get("/now-playing", protectAdmin, getNowPlayingMovies);
showRouter.post("/add", protectAdmin, addShow);
showRouter.get("/all", getShows);
showRouter.get("/:movieId", getShow);

export default showRouter;

// /api/show/now-playing
// /api/show/add
// /api/show/all
// /api/show/:movieId
