import express from "express"
// import { login, logout, register} from "../controllers/User.controller.js";
import { isAuthenticated } from "../middlewares/auth.middleware.js";



const route = express.Router();


// Routes for handling login and register of user
route.post("/login", login);
route.post("/register", register);
route.get("/logout", isAuthenticated, logout);













export default route;