const fs = require("fs")

const {
  asyncReadFile,
  asyncWriteFile
} = require('./dao')

exports.getTask = async (req, res) => {
  const id = req.params.id
  const file = await asyncReadFile(req.app.locals.dataFilePath)
  const tasks = JSON.parse(file).filter(v => v.id === Number(id))
  tasks.length == 0 ? res.status(404).send() : res.send(tasks[0])
}

exports.getAllTasks = (req, res) => fs.readFile(req.app.locals.dataFilePath, "utf-8", (err, data) => {
  if (err) {
    return res.status(500).send()
  }
  res.send(JSON.parse(data))
})

exports.createTask = async (req, res) => {
  const newAccount = req.body
  const file = await asyncReadFile(req.app.locals.dataFilePath)
  const tasks = JSON.parse(file)
  if (tasks.filter(v => v.id === Number(newAccount.id)).length != 0) {
    res.status(400).send("ID EXISTS")
  } else {
    tasks.push(newAccount)
    await asyncWriteFile(JSON.stringify(tasks), req.app.locals.dataFilePath)
    res.status(201).send(tasks)
  }
}

exports.updateTask = async (req, res) => {
  const put = req.body
  const file = await asyncReadFile(req.app.locals.dataFilePath)
  const tasks = JSON.parse(file)
  const candidates = tasks.filter(v => v.email === put.email)
  if (candidates.length === 0) {
    this.createTask(req, res)
  } else {
    tasks.forEach((value, index, array) => {
      if (value.email === put.email) {
        array[index] = {
          ...value,
          ...put
        }
      }
    })
    await asyncWriteFile(JSON.stringify(tasks), req.app.locals.dataFilePath)
    res.status(200).send()
  }
}

exports.deleteTask = async (req, res) => {
  const id = req.params.id
  const file = await asyncReadFile(req.app.locals.dataFilePath)
  const tasks = JSON.parse(file)
  const newAccounts = tasks.filter(v => v.id !== Number(id))
  if (newAccounts.length === tasks.length) {
    res.status(404).send()
  } else {
    await asyncWriteFile(JSON.stringify(newAccounts), req.app.locals.dataFilePath)
    res.status(204).send()
  }

}
