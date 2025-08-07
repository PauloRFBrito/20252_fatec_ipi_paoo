    // Declaração de variáveis

// const(declara constantes), let(declara variáveis), var.
// exemplo em java -> String nome = "José"

const nome = 'Jose'   //strings em js podem ser delimitadas por '', "" ou ``.
console.log(nome)
nome = 'José da Silva'

let a = 2
let nome = "José"
console.log(a)
console.log(nome)
nome = "José da Silva"
console.log(nome)

// O uso de var não é mais indicado em js!
var c = 2
var nome = "José"
nome = "José da Silva"
console.log(nome)

var linguagem = "JavaScript" // Uma atribuição em js é uma ordem de execução.
console.log("Aprendendo " + linguagem)
var linguagem = "Java"
console.log("Aprendendo " + linguagem)
// O principal defeito deste escopo é a declaração de uma mesma variável duas vezes. O código é processado duas vezes, de cima para baixo
// 1° processamento -> execução das declarações.
// 2° processamento -> execução das ordens de execução. 


// Um outro exemplo de var com if
var idade = 18
console.log("Oi, " + nome) // por delimitação de escopo, tecnicamente a variável "nome", ainda não existe neste ponto.
if(idade >= 18){
    var nome = "João" // Note aqui o porque var não é visto como boa prática de uso em js.
    console.log("Sim, " + nome + " Você pode dirigir.")
}
console.log(`Até mais, ${nome}`) 
// Perceba agora a diferença com uso de let ao invés de var.
var idade = 18
console.log("Oi, " + nome) 
if(idade >= 18){
    let nome = "João" 
    console.log("Sim, " + nome + " Você pode dirigir.")
}
console.log(`Até mais, ${nome}`) 

    // Sistema de tipos

let idade = 20
console.log(typeof(idade))
const nome = "Ana"
console.log(typeof(nome))
idade = "vinte"
console.log(typeof(idade))

    // Coerção

const n1 = 2
const n2 = '3'
// coerção ímplicita
const n3 = n1 + n2
console.log(n3)
// coerção explícita
const n4 = n1 + Number(n2)
console.log(n4)

    // Comparação

Operadores == e ===
console.log(1 == 1)
console.log(1 == "1")
console.log(1 === 1)
console.log(1 === "1")
console.log(true === 1)
console.log(true == 1)
new ArrayList<Object>();
console.log(1 == [1])
console.log(1 == [1, 1])
console.log(1 == [])

console.log(null == null)
console.log(null == undefined)

console.log([] == false)
console.log([] == [])
