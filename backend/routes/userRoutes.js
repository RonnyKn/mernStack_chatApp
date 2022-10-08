import Express from "express"
import { authUser, registerUser } from "../controllers/userControllers.js"

export const userRoutes = Express.Router()
userRoutes.route("/").post(registerUser)
userRoutes.post("/login", authUser)
