const express = require('express')
const {
  getAccount,
  getAllAccounts,
  createAccount,
  updateAccount,
  deleteAccount
} = require('./controller')

const app = express()
app.locals.dataFilePath = "./data.json"

const port = 3000

app.use(express.json())
app.get('/', (req, res) => res.send('<h1>Hi, Welcome!</h1>'))

app.get("/tasks/:id", getAccount)
app.get("/tasks", getAllAccounts)

app.post("/tasks", createAccount)

app.put("/tasks", updateAccount)

app.delete("/tasks/:id", deleteAccount)

app.listen(port, () => console.log(`Example app listening on port ${port}!`))

exports.app = app
