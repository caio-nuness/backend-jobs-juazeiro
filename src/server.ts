import express from "express"

const app = express()

const PORT = "3000"
const HOST = "localhost"

app.get("", (req,res) => {
  res.send("pagina inicial")
})

app.listen(PORT, () => {
  console.log(`Server is runing in http://${HOST}:${PORT}`)
})