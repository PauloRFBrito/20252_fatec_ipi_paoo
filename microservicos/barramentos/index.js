// npm init -y 
// 	criação de 
// npm i express axios
// 	express - recebe requisições http
// 	axios - envia requisições http

import express from 'express';
import axios from 'axios';
const app = express()
app.use(express.json()) //Pega o corpo da requisição e converte para obj JavScript

    //Definição de Endpoints

//POST /eventos
app.post('/eventos', (req, res) => {
    const evento = req.body
    console.log(evento)
    axios.post('http://localhost:4000/eventos', evento) //Uso do pacote axios. 4000 - porta de lembretes
    axios.post('http://localhost:5000/eventos', evento)
    axios.post('http://localhosta:6000/eventos', evento)
    console.log(req.body)
    res.end()
})

const port = 10000 //Porta escolhida livremente

app.listen(port, () => {
    console.log(`Barramento. Porta ${port}.`)
})

//npm run dev.Script editado criado em package.json