import Express from "express"
import dotenv from "dotenv"
import { connection } from "../backend/config/db.js"
import colors from "colors"

dotenv.config()
const app = Express()
const port = process.env.PORT || 8800
connection()

app.get("/", (req, res) => {
  res.send("API running successfully")
})

// app.get("/api/chat", (req, res) => {
//   res.send(chats)
// })

app.listen(
  port,
  console.log(`server up and running on port ${port}`.yellow.bold)
)
