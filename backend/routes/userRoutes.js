import Express from "express"
import { registerUser } from "../controllers/userControllers.js"

export const userRoutes = Express.Router()
userRoutes.route("/").post(registerUser)
//router.post('/login',authUser)
