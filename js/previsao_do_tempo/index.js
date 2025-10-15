require('dotenv').config()
// trazebdo o pct dotenv, para usar as vars de ambiente

const axios = require('axios')

const {
    PROTOCOL, //tipo de protocolo que será utilizado
    BASE_URL, 
    APPID, //NUNCA subir a chave no controle de versão!
    UNITS,
    Q, //Q, represetna query
    IDIOM: LANG,
    CNT
} = process.env
//Todos as vars de ambiente acima, tem a mesma conotação de: process.env.itemAcima

console.log(process.env.LANG)

/*
api.openweathermap.org/data/2.5/forecast?lat={lat}&lon={lon}&appid={API key}
A URL é dividida em duas partes principais:
? -> Separador. Marca o fim do endereço do recurso.
& -> Separador de múltiplos paramêtros, cada novo paramêtro precisa ser separado 
*/

    //CRIAÇÃO DO PACOTE .env

// Onde será feita a definição/parametrização da vars de ambiente

    //MONTANDO A URL

const URL = `${PROTOCOL}://${BASE_URL}?appid=${APPID}&units${UNITS}&q=${Q}&lang=${LANG}&cnt=${CNT}`

console.log(URL)

    //DISPARANDOA REQUISIÇÃO HTTP
const promiseResultante = axios.get(URL)

promiseResultante
.then((resposta) => {
    // console.log(resposta)
    const list = resposta.data.list
    console.log(list)
    return list
})
.then((resposta) => {
    //exibir temp min e max da primeria previsão
    console.log(resposta)
})

.catch((erro) => {
    console.log(`Erro: ${erro}`)
})

console.log('Terminando...')

/* 
Antes de rodar:
    Alterar em 'package.json' a linha: "test": "echo \"Error: no test specified\" && exit 1"
    Para:
    "start": "node --watch index.js",
    "dev": "node index.js"
*/

        //EXECUTAR A APLICAÇÃO
//npm run dev
//ou
//npm start

        //RELEMBRANDO COMANDOS DE COMMIT

//git add.
//git status -s
//git log --oneline
//git commit       
//git push origin main