const express = require ("express")
const app = express()
//estou dizendo para o express usar o ejs como view engine
app.set('view engine','ejs')
app.use(express.static('public'))

app.get("/:nome/:lang",(req, res) =>{
    var nome = req.params.nome
    var lang = req.params.lang
    var exibirMsg = true
    
    var produtos = [
        {nome: "Doritos R$", preço : 6.49},
        {nome: "Coca-cola R$", preço : 5.47 },
        {nome: "Leite R$", preço : 3.89},
        {nome: "Carne kg R$", preço : 32.45},
        {nome: "Redbull R$", preço : 15.00},
        {nome: "Nescau R$", preço : 7.99}
    ]
    
    
    res.render("index",{

        nome,
        lang,
        empresa:"Guia de perguntas",
        inscritos: 8000,
        Msg: exibirMsg,
        produtos

    })
})
app.listen(8000,()=>{console.log("app rodando!")})