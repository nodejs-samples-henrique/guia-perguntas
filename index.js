const express = require("express")
const app = express()
const Question = require('./database/Question')
const Answer = require('./database/Answer')

// EJS as View Engine
app.set('view engine', 'ejs')

app.use(express.static('public'))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.get("/", (req, res) => {
    Question.findAll({
        raw: true, order: [
            ['id', 'DESC']
        ]
    }).then((questions) => {
        res.render("index", {
            questions: questions
        })
    })
})

app.get("/perguntar", (req, res) => {
    res.render("ask")
})

app.get("/pergunta/:id", (req, res) => {
    Question.findOne({
        where: { id: req.params.id }
    }).then((question) => {
        if (question != undefined) {
            res.render("question", {
                question: question
            })
        } else {
            res.redirect("/")
        }
    })
})

app.post("/postanswer", (req, res) => {
    console.log(req.body.questionId)
    Answer.create({ body: req.body.body, questionId: req.body.question }).then(() => {
        res.redirect("/pergunta/" + req.body.question)
    })
})

app.post("/criarpergunta", (req, res) => {

    Question.create({ title: req.body.title, desc: req.body.description }).then(() => {
        res.redirect("/")
    })
})

app.listen(8080, () => {
    console.log("App rodando.")
})