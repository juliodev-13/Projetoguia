const express = require ("express")
const app = express()
//estou dizendo para o express usar o ejs como view engine
app.set('view engine','ejs')

app.get("/",(req, res) =>{
    var nome = "Julio"
    var lang = "Javascript"
    res.render("index.ejs")
        nome = nome,
        lang = lang
})
app.listen(8000,()=>{console.log("app rodando!")})