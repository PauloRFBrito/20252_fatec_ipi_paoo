import 'dotenv/config'
import axios from 'axios'
import express from 'express'

const app = express()
app.use(express.json())
//Importa o Express e cria a aplicação.
//O express.json() serve para que o servidor entenda o corpo das requisições JSON e te entregue ele pronto em req.body.

//GET serve para obter coisas do servidor
//POST serve para cadastrar itens novos
//PUT serve para atualizar itens existentes
//DELETE serve para apagar itens existentes

// Um lembrete: {id: 1, texto: 'Fazer café'}
/*
  lembretes:
  {
    1: {id: 1, texto: 'Fazer café'},
    2: {id: 2, texto: 'Ir à feira'} 
  }
*/

let id = 0
const lembretes = {}
//Aqui é onde os dados ficam guardados em memória.
//Cada lembrete é um objeto: { id, texto }.


//Definindo um endpoint que permite que lembretes sejam cadastrados
//POST /lembretes (req, res) => {}  
// app.post('/lembretes', async function(req, res){
//   id++
//   const texto = req.body.texto
//   // const lembrete = { id: id, texto: texto}
//   const lembrete = { id, texto }
//   lembretes[id] = lembrete
//   console.log(`[LEMBRETE] criado #${id} - "${texto}"`)
//   await axios.post('http://localhost:10000/eventos', {
//     type: 'LembreteCriado',
//     payload: lembrete //carga util
//   })
//   res.status(201).json(lembrete)
// })
app.post('/lembretes', async function(req, res) {
  id++
  const texto = req.body.texto
  const lembrete = { id, texto }
  lembretes[id] = lembrete
  console.log('[LEMBRETE] criado #'+id+' - "'+texto+'"')
  console.log('Estado atual dos lembretes:', lembretes)

  try {
    await axios.post('http://localhost:10000/eventos', {
      type: 'LembreteCriado',
      payload: lembrete
    })
  } catch (err) {
    console.log('[ERRO AO ENVIAR PARA O BARRAMENTO]', err.message)
    // NÃO dá throw aqui. Se der, você derruba o serviço de novo.
  }

  res.status(201).json(lembrete)
})

//Quando alguém faz um POST em /lembretes, o servidor cria um novo lembrete com ID automático.

//Definindo um endpoint que permite que a coleção de lembretes seja obtida
//GET /lembretes (req, res) => {}
app.get('/lembretes', (req, res) => {
  console.log('GET /lembretes -> lembretes =', lembretes)
  res.json(lembretes)
})
//Retorna todos os lembretes cadastrados.

const port = 4000
app.listen(4000, () => console.log(`Lembretes. Porta ${port}.`))
//Inicia o servidor na porta 4000.
//Se estiver tudo certo, aparecerá no terminal: Lembretes. Porta 4000.

//Endpoint relacionado a eventos
app.post('/eventos', (req, res) => {
  const evento = req.body
  console.log(evento)
  res.end()
})