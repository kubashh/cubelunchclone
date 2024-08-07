const express = require("express")
const app = express()

app.use(express.json())

const port = 8888

// Dodaj nagłówek CORS na serwerze
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', "https://kubashh.github.io") // zezwól na dostęp z dowolnej domeny
  res.header('Access-Control-Allow-Methods', 'GET, POST')
  res.header('Access-Control-Allow-Headers', 'Content-Type')
  next()
})

app.get("/", async (req, res) => {
  console.log(req)
  const answer = JSON.stringify({ data: "odpowiedz" })
  res.send(answer)
})

app.post("/", (req, res) => {
  console.log(req.body)
  res.status(200).end()
})

app.post("/login", (req, res) => {
  let data = JSON.parse(req.body)

  res.status(200).end()
})

app.post("/register", (req, res) => {
  let data = req.body

  if(true) {
    res.status(200).end()
  }

  res.status(400).end()
})

app.listen(port, () => {
  console.log(`Aplikacja wystartowała na porcie ${port}`)
})
