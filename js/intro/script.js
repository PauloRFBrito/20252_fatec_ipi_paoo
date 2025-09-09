         // **********  AULA 3  ********** //
        // ********** 20/08/25 ********** //
        
                    //CLOSURES        
// //------------------------------------------------------
// // closure é uma função que se "lembra" do ambiente — ou escopo — em que foi criada.** Isso significa que ela carrega consigo, como em uma "mochila", todas as variáveis que estavam ao seu alcance no momento de sua criação, mesmo que ela seja executada em um lugar e momento completamente diferentes.
// //-------------------------------------------------------------------

// let umaFuncao = function() {
//     console.log('Fui armazenada em uma variável')
// }
// umaFuncao()

// function f(funcao) { // Função de mais alta ordem!
//     funcao()
// }
// f(umaFuncao)

// //Função de alta ordem -> Recebe outra função como parâmetro ou
// //Retorna uma função 
// //-------------------------------------------------------------------
// // Se declarado: f(umaFuncao()), não funciona! 
// // Os () internos são resolvidos primeiro. 
// // No exemplo acima esta sendo passado o resultado da funcão "umaFuncao". 
// // Ela devolve undefienied. 
// // Se não tem return definido, ele está implicito.
// //-------------------------------------------------------------------
  
// function g(){
//     function outraFuncao(){
//         console.log('Fui criada por g')
//     }
//     return outraFuncao() //Executa e retorna o resultado
// }
// // g()

// function g(){
//     return function() {
//         console.log("Sou de alta ordem porque retorno outra função!")
//     }
// }
// const gResult = g()
// // gResult()

// f(function() {
//     console.log("Sou uma function passada para f")
// }) //A impressão ocorre em f(umaFuncao).

// f(() => console.log("Sou uma arrow passada para f"))

// //-------------------------------------------------------------------
// // Exemplos de Funções que recebem outras funções e as executam

// // gResult() -> Executa função g()

// // g()() -> g() executa g e retorna uma função; g()() executa a função retornada

// // f(g) -> passa a função g() como parâmetro para f() 

// // f(g()) -> executa g() e o retorno de g() é passado para f() 

// // f(g()()) -> executa g() que deve retornar uma função; o () extra executa  afunção retornada; o resultado final vai como argumento para f().

// // f(g())() -> executa g(), amda o resultado para f(); f(g())() precisa retornar uma função que é executado no último ()
// //-------------------------------------------------------------------

// function f(){
//     let nome = 'João'
//     function g(){
//         console.log(nome)
//     }
//     g()
// }
// f()

// function ola(){
//     let nome = 'JOÃO'
//     return function (){
//         console.log(`Ola, ${nome}`)
//     }
// }
// let olaResult = ola() // Function ola terminou aqui.
// olaResult()

// function saudacoesFactory(saudacao, nome){
//     return function() { 
//         console.log(`${saudacao}, ${nome}`)
//     }
// }
// let olaPedro = saudacoesFactory('ola', 'Pedro')
// let tchauPedro = saudacoesFactory('tchau', 'Pedro')
// olaPedro()
// tchauPedro()

                // OBJETOS JavaScript

// Anotação {} -> uma pessoa se chama João e tem 17 anos
// Coleção de pares chave-valores

// let pessoa = {
//     nome: 'João', // Um par de chave-valor, é separado por vírgulas.
//     idade: 17
// }
// console.log('Me chamo ' + pessoa.nome)
// console.log('Minha idade é ' + pessoa['idade'])

  
// Objeto JavaScript não é sinonimo de obejto JSON(Java Script Object Notation), mas são parecidos.

// uma pessoa de chama Maria, tem 21 anos e mora na rua B, número 121

// let pessoa2 = {
//     nome: 'Maria',
//     idade: 21,
//     endereco: {
//         logradouro: 'Rua B',
//         numero: 121
//     }
// }
// console.log('Me chamo ' + pessoa2.nome)
// console.log('tenho ' + pessoa2.idade + ' anos')
// console.log('Resido na ' + pessoa2.endereco.logradouro + '-' 
//                          + pessoa2.endereco.numero)

                    //AULA 3 (continuação)

/*Representando uma concessionária com CNPJ, endereço, numero, e bairro (pensar na estrutura que um bairro pode ter). Esta concessionária tem uma estoque (coleção) de veículos, cada um tem: marca, 
modelo 
e ano de fabricação. 
Pensar que o número de veículos qua a concessionária possui pode variar ao longo do tempo, 
pode estar vazio, 
pode ter 15 veículos, 
pode ter 502 e assim por diante.
*/

// const concessionaria = {
//     cnpj: '123456',

//     endereco: {
//         logradouro: 'Rua A',
//         numero: 100,
//         bairro : {
//             nome: 'Jardim Ipiranga',
//             cidade: 'São Paulo',
//             zona: 'Sul',
//             cep: '01234-56'
//         }
//     },
                                                           
//     estoque: [{
//         marca: 'Fiat',
//         modelo: 'Palio',
//         anoFabricacao: 2012
//     },
//     {
//         marca: 'Chevrolet',
//         modelo: 'Tracker',
//         anoFabricacao: 2020
//     },
//     {
//         marca: 'Chevrolet',
//         modelo: 'Astra',
//         anoFabricacao: 2010
//     },
//     {
//         marca: 'Chevrolet',
//         modelo: 'Celta',
//         anoFabricacao: 2013
//     },
    
//     ],
// }

// console.log("Veículos no estoque: ", concessionaria.estoque.length)
// console.log(concessionaria.estoque)

// console.log('----------------------------')
// concessionaria.estoque.push({
//         marca: 'Byd',
//         modelo: 'Dolphin',
//         anoFabricacao: 2024
// })

// console.log("Veículos no estoque: ", concessionaria.estoque.length)
// console.log(concessionaria.estoque)

// console.log('----------------------------')
//Iterar sobre todos os veículos Chevrolet:

// const carrosChevrolet = concessionaria.estoque.filter(
//     carro => carro.marca == 'Chevrolet'
// )
// for(let carro of carrosChevrolet) {
//     console.log(carro.modelo, carro.anoFabricacao)
// }

// console.log('----------------------------')
/* Crie um for que, internamente, 
itera sobre cada possível marca,
para cada marca mostrar o modelo do veículo.
*/

// const estoqueGeral = concessionaria.estoque.filter(
//     veiculo => veiculo.marca 
// )
// for(let veiculo of estoqueGeral) {
//     console.log(veiculo.modelo)
// }

// console.log('----------------------------')
/* Dado dois valores:
Aplicar todas operações da calcualdora sobre eles,
usando função "values" ao invés de "keys".
Antes de exibir o resultado:
mostrar o nome da operação,
interpolando em um único console.log "${}"
*/

// let calculadora = {
//     soma: (a, b) => a + b,
//     subtracao: function(a, b) {
//         return a -b
//     }
// }

// let x = 2
// let y = 3

// let calculadora = {
//     soma: (a, b) => a + b,
//     subtracao: (a, b) => a - b,
//     divisao: (a, b) => a / b,
//     multiplicacao: (a, b) => a * b,
// }

// console.log(Object.values(calculadora))

// console.log('----------------------------')
// for(let operacao of Object.values(calculadora)) {
//     console.log(`${operacao.name}: ${operacao(x, y)}`)
// }
// console.log('----------------------------')

                    //PROCESSAMENTO SÍNCRONO E ASSÍNCRONO

//Exemplo de processamento síncrono ou bloqueante ou sequencial:

// console.log('Eu primeiro...')
// console.log('Agora eu...')
// console.log('Sempre o último...')

// console.log('----------------------------')
//Note este outro exemplo que resulta em um número:

// const a = 2 + 7
// const b = 5
// console.log(a + b)
/* Barreira - a linha acima possui uma dependência das linhas anteriores.
Note que a e b não possuem dependência entre si!   
*/

//Exemplo: Uma função que demora para terminar

//Pegar a data atual do SO e desloca-lo 2 seg a frente com um loop

// function demorada() {
// const atualMais2Segundos = new Date().getTime() + 2000
//         while(new Date().getTime() <= atualMais2Segundos);
//             const d = 8 + 4
//             return d
// }
// a demorada(), trava o js por 2 seg, while é bloqueante.
// Após os 2seg retorna d = 12.

// const a = 2 + 6
// const b = 5 + 9
// Execuções síncronas,

// setTimeout(() => {
//     const tempo = 2000
//     const d = demorada(tempo)
//     console.log(`d(${tempo}): ${d}`)
// }, 0)
/*
Esse setTimeout é assíncrono;
colocado na fila de eventos,
só roda depos que toda parte síncrona terminar.
*/

// const d = demorada() // Trava por 2 seg e retorna d=12
// const e = 2 + a + b 
// console.log(`e: ${e}`) // Ocorre após a execução da demorada().


// setTimeout(() => {
//     const d = demorada()
//     console.log(`d: ${d}`)
// }, 0)
/* Esse callback é executado após todas execuções
síncronas.
Dentro dele, a demorada(), trava mais 2seg antes de imprimir.
*/

/* Ordem dos eventos:
1 - calcula a e b
2 - Agenda a execução dos dois setTimeout
3 - Chama demorada() -> trava 2seg -> imprime e: 24
4 - Callback do primeiro setTimeout 
5 - Callback do segundo setTimeout chama demorada() -> trava mais 2seg -> imprime d: 12
 */
// console.log('----------------------------')

            // INFERNO DE CALLBACKS (calllback hell)
// Operações I/O bound, execução + demorada que a RAM.
    
// Criando uma arquivo txt
// const fs = require('fs')
// fs (file system)->módulo nativo js que tem funções de CRUD  

// const abriArquivo = function(nomeArquivo) {
   
//     const exibirConteudo = function(erro, conteudo) { //6. callback exibirConteudo dispara
//         if(erro) { // Caso o arq não exista!
//             console.log(`Arquivo inexistente, criando agora! ${erro}`)
//             fs.writeFile(nomeArquivo, //callback de escrita 
//                 'Arquivo incializado!',
//                 function(erro) {
//                     if(erro) {
//                         console.log(`Deu erro: ${erro}`)
//                     }
//                     else { 
//                         console.log('Arquivo criado com sucesso!')
//                     }
//                 })
//         } 
//         else {
//             console.log(`Conteudo lido: ${conteudo}`)
//             fs.writeFile(nomeArquivo, conteudo + //callback
//                 '\nNova linha adicionada!', 
//                 function(erro) {
//                     if(erro) {
//                         console.log(`Deu erro: ${erro}`)
//                     } 
//                      else {
//                         console.log(`Arquivo atualizado!`)
//                     }
//                 })
//         }
//     }
//     fs.readFile(nomeArquivo, 'utf8', exibirConteudo) //3. oper assínc iniciada
//     console.log('Fim da abrirArquivo!') //4. exec imediata //5. node continua exec eventos assínc
// }
// abriArquivo('arquivo.txt') //1. func chamada
//2. DEFINE func exibirConteudo


            // **********  AULA 4  ********** //
            // ********** 27/08/25 ********** //
        
//git status -s
//git log --oneline

                    //PROMISES       
//------------------------------------------------------
//  PROMISE -> objeto que tem associado uma computação demorada.
// Uma Promise é um objeto por meio do qual uma função pode propagar um resultado ou um erro em algum momento no futuro. Sempre que tenho uma promise, tenho um processamenteo demorado.
// Um objeto que representa a eventual conclusão (ou falha) de uma operação assíncrona.

// Estados de uma promise: 
// - Pending(computando a ação);
// - Fullfilled; 
// - Rejected
//-------------------------------------------------------------------

// console.log('Começando...') //1° execução

// function calculoDemorado(n) { //Promise criada e imediatamente executada.
//     let p = new Promise(function (resolve, rejected){ 
//         //É passado um único paramêtro para uma promise. 
//         // Se terminar com sucesso -> funcao resolve, 
//         // Se terminar com erro -> funcao reject
//         let res = 0 
//         for(let i = 1; i <= n; i++){
//             res = res + i;
//             // console.log(res)
//         }
//         resolve(res) //O valor de 'res' é enviado para o '.then()'
//     }) 
//     return p //A função retorna a Promise no estado 'pending'
// }
// //2° chamada da função minhaPromise
// let minhaPromise = calculoDemorado(10) //calculoDemorado -> apenas constroi e retorna de imediato a promise. 

// //3° then/catch - ficam aguardando a Promise mudar de estado
// minhaPromise
// .then((somatorio) => { //Esta função é executado quando 'resolve' for chamado
//     console.log(`Somatório: ${somatorio}`) //O valor passso no 'resolve(res)' aqui é o paramêtro 'somatorio'
// })
// .catch((erro) => {  //Esta função seria executa se 'reject' fosse chamado
//     console.log(`Erro: ${erro}.`)
// })
// //4° a execução do script principal continua
// console.log('Terminando o Script principal...') //Note que ele é exibido antes do somatório.

// console.log('Começando...')

// function calculoRapidinho(n){
//     return n >= 0 ? 
//     Promise.resolve((n/2) * (n+1)) : Promise.reject('Somente positivos!') //Método da classe. Cria uma Promise que já nasce resolved ou reject.
// }

// let minhaPromise = calculoRapidinho(10)

// minhaPromise
// .then((res) => {
//     console.log(`Resultado: ${res}`)
// })
// .catch((erro) => {
//     console.log(`Erro: ${erro}`)
// })
// console.log('Processos assíncronos acontecem antes do .then((res))')

// let minhaPromise2 = calculoRapidinho(1)
// .then(res => {
//     console.log(`Resultado: ${res}`)
// })
// .catch(erro => console.log(`Errp: ${erro}`))
// console.log('Terminando...')

// function f(a) {
//     console.log(a)
// }
// const a = 2
// f(a)

// const a = 2 + 2

// function f(){
//     return () => 2
// }

// const b = f()() //resulta na arrow function que produz 2

            //CRIANDO UMA API
/*
Visitar openweathermap.org.api

Utilizar a API ->  5 Day/3 Hour forecast data
Fazer uso de promises para conversar com os paramêtros de previsões.
-Será necessário uma chave API,fazer registro no site.
-Guarde sua chave API 'My API keys'
-Crie um novo folder chamado intro dentro da raiz 'js' e concentre todos os arquivos lá.
-Crie um novo folder chamado 'previsao_do_tempo' (projeto node)
-Entre no novo folder no terminal

1° passso  - Criar o arquivo package JSON
    npm init -y (o y é de yes)
    criado o arquivo json 'package.json'

2° criar arquivo index.js
    baixar bliblitoeca axios através da linha de comando
    npm i axios

3° criar na raiz 'PAOO' o .gitignore afim de filtrar o controle de versão

Continua no arquivo 'index.js'
*/