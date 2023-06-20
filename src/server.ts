import express from "express"
import router from "./routes"

const app = express()

const PORT = "3000"
const HOST = "localhost"

app.use(router)

app.listen(PORT, () => {
  console.log(`Server is runing in http://${HOST}:${PORT}`)
})