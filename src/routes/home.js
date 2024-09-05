import { Router } from "express";
import { getAbout, getContact, getHome } from "../controllers/index.js";

const homeRouter = Router();

// base route: http://localhost:3005
homeRouter.get("/", getHome);
homeRouter.get("/about", getAbout);
homeRouter.get("/contact", getContact);

export { homeRouter };
