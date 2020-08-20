//imports - SERVIDOR
const express = require('express')
const server = express()
const nunjucks = require('nunjucks')

const { pageLanding, pageStudy, pageGiveClasses, saveClasses } = require('./pages')

//configurar nunjucks (template Engine)
nunjucks.configure('src/views', {
    express: server,
    noCache: true,
})

//Inicio e configuracao do servidor
server
//receber os dados do req.body
.use(express.urlencoded({ extend: true }))
//configurar arquivos estáticos  (css, scripts, imagens)
.use(express.static("public"))

//rotas da aplicação
.get("/", pageLanding)
.get("/study", pageStudy)
.get("/give-classes", pageGiveClasses)
.post("/save-classes", saveClasses)
//Start no servidor
.listen(5500)