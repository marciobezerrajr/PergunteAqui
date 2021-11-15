const express = require('express')
const app = express()

const porta = process.env.PORT || 3000


//const connection = require('./database/database')
//models
const Ask = require('./database/models/Ask')
const Answer = require('./database/models/Answer')


app.set('view engine', 'ejs')
//digo ao express que usarei arquivos estaticos na pasta public
app.use(express.static('public'))
app.use(express.urlencoded({ extended: false }))
app.use(express.json())


///////////////////////////////////////////////
//ROTAS PERGUNTAS

//index com todas as perguntas
app.get('/', (req, res) => {
    Ask.findAll({ raw: true, order: [['id', 'DESC']] })
        .then((asks) => {
            res.render('index', { asks })
        })

})
//rota para criar uma nova pergunta
app.get('/ask', (req, res) => {
    res.render('ask')
})

//rota para uma pagina de uma pergunta específica
app.get('/ask/:id', (req, res) => {
    const id = req.params.id
    Ask.findOne({ where: { id: id } })
        .then((ask) => {
            if (ask) {
                Answer.findAll({
                    where: { askID: id }, order: [['id', 'DESC']]
                })
                    .then((answers) => {
                        res.render('askPage', {
                            ask, answers
                        })
                    })

            } else {
                res.redirect('/')
            }
        })
})


//rota POST da pergunta no banco
app.post('/asking', (req, res) => {
    const title = req.body.title;
    const description = req.body.description;

    Ask.create({
        title,
        description
    }).then(() => {
        res.redirect('/')
    }).catch((err) => {
        console.error
    })
})

///////////////////////////////////////////////
//ROTAS RESPOSTA

//rota post da resposta no banco
app.post('/answer', (req, res) => {
    const askID = req.body.askID;
    const body = req.body.bodyText;

    Answer.create({
        askID,
        body
    }).then(() => {
        res.redirect('/ask/' + askID)
    }).catch((err) => {
        console.log(err)
    })
})


app.listen(porta, () => { console.log(`server on em localhost:${porta}`) })