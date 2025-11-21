// Para criar a estrtura básica do node:
// - npm init 
// - npm install 
// - npm i dotenv
// - npm run dev

import 'dotenv/config'
import axios from 'axios'
import express from 'express'

const app=express()
app.use(express.json())

/*
{
    1: {
    id: 1,
    texto: "oi"
    observacoes: [{id: 1000, texto: abc, lembreteId: 1}]
    },
    2: {
        id: 2,
        texto: "oi2",
    }
}

[]
*/
const baseConsolidada = {}

//Mapa de funções
const funcoes = {
    // A função deve receber um lembrete e cadastrá-lo na base consolidada 
    LembreteCriado: (lembrete) => {
        baseConsolidada[lembrete.id] = lembrete
    },

    // id, texto, lembreteId
    ObservacaoCriada: (obervacao) => {
        const observacoes = baseConsolidada[observacao.lembreteId]['observacoes']  || []
        observacoes.push(observacao)
        baseConsolidada[observacao.lembreteId]['observacoes']
    },

    ObservacaoAtualizada: (observacao) => {
        //Encontrar por id e substituir
        const observacoes = baseConsolidada[observacao.lembreteId]['observacoes']
        const indice = observacoes.findIndex(o => id === observacao.id)
        observacoes[indice] = observacao
    }
}

//Disponibiliza a base consolidada
app.get('/lembretes', (req, res) => {
    //Devolver a base consolidada como um json
    res.json(baseConsolidada)
})

//Recebe eventos, viabilizando a atualização da base
app.post('/eventos', (req, res) => {
    //Try/Catch para evitar problemas de tempo de execução
    try{
        //Pegar o evento do corpo da requisição e ajustar para que o ponteiro aponte para ele
        const evento = req.body
        //Desestruturar o evento, criando vars type e payload
        // const type: evento.type
        // const payload: evento.payload
        const { type, payload } = evento
        // console.log(`type: ${type}`)
        // console.log(`payload: ${payload}`)
        //Tratamento do evento -> Acessar o mapa de funções na pos type e chamar a func resultante entregando a ela, como parametro, o payload
        funcoes[type](payload)
    }
    catch(e){}
})


const port=6000
app.listen(port, () => { console.log
(`Consultas. Porta ${port}.`)})