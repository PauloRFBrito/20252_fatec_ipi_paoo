import express from 'express';
import axios from 'axios';
import { v4 as uuidv4 } from 'uuid';

// const axios = require('axios')
// const { v4 : uuidv4 } = require('uuid')
// const express = require('express')
const app = express()
app.use(express.json())
//Importa o uuid para gerar IDs únicos para as observações.
//Configura o servidor Express.
//uuid: Universally unique identifier

/*
{
  1: [
    {id: 100, texto: 'comprar acucar', lembreteId: 1}
  ],
  2: [
    {id: 1000, texto: 'qq coisa', lembreteId: 2}, 
    {id: 1001, texto: 'outra coisa', lembreteId: 2}
  ],
  3: [
  
  ]
}
*/

const observacoesPorLembrete = {}  
//Aqui ficam guardadas as observações associadas a cada lembrete.
//Formato esperado: 
// {
//   1: [
//       {id: 100, texto: 'comprar acucar', lembreteId: 1}
//   ],
//   2: [
//       {id: 1000, texto: 'qq coisa', lembreteId: 2}, 
//       {id: 1001, texto: 'outra coisa', lembreteId: 2}
//   ],
//}

//POST /lembretes/1/observacoes (req, res) => {}
app.post('/lembretes/:id/observacoes', (req, res) => {
  const idObs = uuidv4() //Gera id para obs cadastrada
  const { texto } = req.body //Extrai textto que user enviou pela req
  const { id: lembreteId } = req.params //Pega id pelo lembrete
  const observacao = {id: idObs, texto, lembreteId, status: 'aguardando'} //Construção do objeto
  const observacoesDoLembrete = observacoesPorLembrete[lembreteId] || [] //Extração da lista
  observacoesDoLembrete.push({observacao}) //Adiçaõ da lista
  observacoesPorLembrete[lembreteId] = observacoesDoLembrete //Ajuste de ponteiro
  axios.post('http://localhost:10000/eventos', {
    type: 'ObservacaoCriada',
    paylaod: observacao
  }) //Emitir evento
  res.status(201).json(observacoesDoLembrete)
})
// Cria uma observação associada a um lembrete específico
// Resposta:
//   [
//   { "observacao": { "id": "uuid-gerado", "texto": "Comprar açúcar", "lembreteId": "1" } }
//   ]

//GET /lembretes/:id/observacoes (req, res) => {}
app.get('/lembretes/:id/observacoes', (req, res) => {
  res.status(200).json(observacoesPorLembrete[req.params.id] || [])
  console.log(req.body)
})
//Devolver a lista de observações do lembrete cujo id faz parte do path
//ou uma lista vazia se ainda não existir. Permite listar todas as observações de um lembrete específico.

app.post('/eventos', (req, res) => {
  const evento = req.body
  console.log(evento)

  res.end() //Sempre preciso responder o fimal de uma  req
})

const port = 5000
app.listen(port, () => console.log(`Observações. Porta ${port}.`))
// Sobe o segundo servidor, agora na porta 5000.