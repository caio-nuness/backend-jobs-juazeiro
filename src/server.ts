import express from "express"
import router from "./routes"


const app = express()

const PORT = "9090"
const HOST = "localhost"

app.use(router)

app.listen(PORT, () => {
  console.log(`Server runing in http://${HOST}:${PORT}`)
})