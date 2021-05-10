const express = require ("express")
const app = express()
//estou dizendo para o express usar o ejs como view engine
app.set('view engine','ejs')

app.get("/",(req, res) =>{
    var nome = "Julio"
    var lang = "Javascript"
    res.render("index",{

        nome,
        lang,
        empresa:"Guia de perguntas",
        inscritos: 8000

    })
})
app.listen(8000,()=>{console.log("app rodando!")})