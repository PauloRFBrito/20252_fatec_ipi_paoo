//Fazer imports
import express from 'express';
import axios from 'axios';
const app = express()
//Aplicar eventuais middlewares
app.use(express.json()) //Transforma JSON em objeto

//Colocar o mss para funcionar na porta 7000
const port = 7000
app.listen(port, () => {
    console.log(`Classificação. Porta ${port}.`)
})
