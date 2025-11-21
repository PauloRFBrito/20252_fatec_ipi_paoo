//Fazer imports
import express from 'express';
import axios from 'axios';
const app = express()

//Aplicar eventuais middlewares
app.use(express.json()) //Transforma JSON em objeto

//Definindo mapa de funções
const funcoes = {
    ObservacaoCriada: (observacao) => {
        //Trocar o status da observação. Se contiver a palavra importante, o status fica sendo importante, caso contrário, fica sendo comum
        if(observacao.texto.includes(palavraChave))
            observacao.status = 'importante'
        else
            observacao.status = 'comum'
    
    axios.post('http://localhost:10000/eventos', {
    type: 'ObservacaoClassificada',
    payload: observacao
    })
    }
}

app.post('/eventos', (req, res) => {
  try{
    const evento = req.body
    console.log(evento)
    funcoes[evento.type](evento.payload)
    res.end()
  }
  catch(e){}
})

//Colocar o mss para funcionar na porta 7000
const port = 7000
app.listen(port, () => {
    console.log(`Classificação. Porta ${port}.`)
})
