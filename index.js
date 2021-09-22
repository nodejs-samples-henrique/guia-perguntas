const express = require("express")
const app = express()
const Question = require('./database/Question')

// EJS as View Engine
app.set('view engine', 'ejs')

app.use(express.static('public'))
app.use(express.json())
app.use(express.urlencoded({extended: false}))


app.get("/", (req, res) => {
    res.render("index")
})

app.get("/perguntar", (req, res) => {
    res.render("ask")
})

app.post("/criarpergunta", (req, res) => {
  
    Question.create({ title: req.body.title, desc: req.body.description }).then(() => {
        res.redirect("/")
    })
})

app.listen(8080, () => {
    console.log("App rodando.")
})