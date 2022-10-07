import Express from "express"
import dotenv from "dotenv"
import { connection } from "../backend/config/db.js"
import { userRoutes } from "./routes/userRoutes.js"
import colors from "colors"

dotenv.config()

connection()
const app = Express()
const port = process.env.PORT || 8800

app.use(Express.json()) //to accept json data

app.use("/api/user", userRoutes)

app.get("/", (req, res) => {
  res.send("API running successfully")
})

app.listen(
  port,
  console.log(`server up and running on port ${port}`.yellow.bold)
)
