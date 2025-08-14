//     // Declaração de variáveis

// // const(declara constantes), let(declara variáveis), var.
// // exemplo em java -> String nome = "José"

// const nome = 'Jose'   //strings em js podem ser delimitadas por '', "" ou ``.
// console.log(nome)
// nome = 'José da Silva'

// let a = 2
// let nome = "José"
// console.log(a)
// console.log(nome)
// nome = "José da Silva"
// console.log(nome)

// // O uso de var não é mais indicado em js!
// var c = 2
// var nome = "José"
// nome = "José da Silva"
// console.log(nome)

// var linguagem = "JavaScript" // Uma atribuição em js é uma ordem de execução.
// console.log("Aprendendo " + linguagem)
// var linguagem = "Java"
// console.log("Aprendendo " + linguagem)
// // O principal defeito deste escopo é a declaração de uma mesma variável duas vezes. O código é processado duas vezes, de cima para baixo
// // 1° processamento -> execução das declarações.
// // 2° processamento -> execução das ordens de execução. 


// // Um outro exemplo de var com if
// var idade = 18
// console.log("Oi, " + nome) // por delimitação de escopo, tecnicamente a variável "nome", ainda não existe neste ponto.
// if(idade >= 18){
//     var nome = "João" // Note aqui o porque var não é visto como boa prática de uso em js.
//     console.log("Sim, " + nome + " Você pode dirigir.")
// }
// console.log(`Até mais, ${nome}`) 
// // Perceba agora a diferença com uso de let ao invés de var.
// var idade = 18
// console.log("Oi, " + nome) 
// if(idade >= 18){
//     let nome = "João" 
//     console.log("Sim, " + nome + " Você pode dirigir.")
// }
// console.log(`Até mais, ${nome}`) 

//     // Sistema de tipos

// let idade = 20
// console.log(typeof(idade))
// const nome = "Ana"
// console.log(typeof(nome))
// idade = "vinte"
// console.log(typeof(idade))

//     // Coerção

// const n1 = 2
// const n2 = '3'
// // coerção ímplicita
// const n3 = n1 + n2
// console.log(n3)
// // coerção explícita
// const n4 = n1 + Number(n2)
// console.log(n4)

//     // Comparação

// Operadores == e ===
// console.log(1 == 1)
// console.log(1 == "1")
// console.log(1 === 1)
// console.log(1 === "1")
// console.log(true === 1)
// console.log(true == 1)
// new ArrayList<Object>();
// console.log(1 == [1])
// console.log(1 == [1, 1])
// console.log(1 == [])

// console.log(null == null)
// console.log(null == undefined)

// console.log([] == false)
// console.log([] == [])

// ******************************************AULA 2************************************************** //
// ******************************************13/08/25************************************************ //

//      // FUNÇÕES

//Declaração de uma função em linguagem C.
// int somar(int a, int b) {
//     return a + b;    
// }

// function hello(){
//      console.log('Oi')
// }
// hello()

// function hello(nome) {
//      console.log('Hello, ' + nome)
// }
// hello('Ana')
//1° passagem - O JavaScript sabe que existe uma função chamada hello e o que ela faz.
//2° passagem(execução)  
//- em hello('Ana') a função é chamada passando 'Ana' como argumento.
//- o parâmetro (nome) recebe 'Ana'
//- é executada concatenando os elementos.

// function soma(a, b){
//     return a + b
// }
// const res = soma(2, 3)
// console.log(res)

// FUNÇÕES ANÔNIMAS

// const dobro = function(n){
//     return 2 * n
// }
// console.log(dobro(6))
//
// function(n) { ... } → não tem nome logo após a palavra-chave function.
// Você atribui essa função sem nome à constante dobro.
// O nome dobro não é o nome da função, e sim o nome da variável que armazena essa função.
// Quando executa dobro(6), o JavaScript encontra a constante dobro, vê que ela guarda uma função, e a executa.
//Um outro exemplo:
// const triplo = function(n = 5){
//     return 3 * n
// }
// console.log(triplo())
// console.log(triplo(10))

// ARROW FUNCTIONS
// arrow(seta)
// () => {} 
// ()lista de parametros | =>seta(arrow) | {}corpo

// const hello = () => {       //Acionando a função e a armazenando em uma variável.
//     console.log('Hello')
// }
// hello()
//
//Obersve a mesma coisa abaixo de outra forma
// const hello = () => console.log("Hello")
// hello()
//
//Uma linha produzindo um valor a ser devolvido:
// const dobro = (n) => 2 * n //O return aqui está implícito.
// console.log(dobro(5))
//
// Quando se usa exatamente um parâmetro, os parenteses podem ser omitidos
// const dobro = n => 2 * n
// console.log(dobro(2))


//      // VETORES

// v1 = [] //Alocação de vetor
// console.log(v1.length)
// console.log(v1)
// console.log('-------')

// v1[0] = 3.4 //Acesso a posição e armazenamneto de valor
// console.log(v1.length)
// console.log(v1)
// console.log('-------')

// v1[10] = 2
// console.log('vetor com '+ v1.length + ' elementos')
// console.log(v1)
// console.log('-------')
// v1[7] = "abc"
// console.log(v1)
// console.log('-------')

// v2 = [2, "abc", true]
// console.log('v2-> ' + v2)
// console.log('-------')
// for(let i = 0; i < v2.length; i++) {
//      console.log(v2[i])
//      console.log('-')
// }
// //  EmJavascript, vetores possuem diversos métodos utilitários
// const nomes = ['Ana Maria', 'Antonio', 'Rodrigo', 'Alex', 'Cristina']
// // Mostre nomes que comecem com a letra A:
// const apenasComA = nomes.filter(nome => nome.startsWith('A')) 
// //Recebe uma função como parâmetro e devolve uma coleção(vetor/lista).
// console.log(apenasComA)

// const nomes = ['Ana Maria', 'Antonio', 'Rodrigo', 'Alex', 'Cristina']
// //Mapeamento de uma função para outra ['A', 'A', 'R', 'A', 'C']
// const res = nomes.map(function (nome){return nome[0]}) //function declarada de forma anônima
// console.log(res)

// //Dada a coleção a seguir, usando arrow function e digitando a menor quant de caracteres possível, produzir outra coleção contendo o quadrado de cada número.
// const numeros = [1, 2, 3] //saída esperada -> [1, 4, 9]
// //resolução
// console.log(numeros.map(n => n * n))

// const nomes = ['Ana Maria', 'Antonio', 'Rodrigo', 'Alex', 'Cristina']
// const todosComecamComA = nomes.every(n => n.startsWith('A')) //devolve true/false e não uma coleção
// console.log('->'+todosComecamComA)
// const peloMenosUmComecaComA = nomes.some(n => n.startsWith('A'))
// console.log(peloMenosUmComecaComA)

//Reduzindo a função
const valores = [1, 2, 3, 4] 
const soma = valores.reduce((acumulador, valorVez) => acumulador + valorVez)
console.log(soma)

