//Aula 3
//CLOSURES
//-------------------------------------------------------------------
// closure é uma função que se "lembra" do ambiente — ou escopo — em que foi criada.** Isso significa que ela carrega consigo, como em uma "mochila", todas as variáveis que estavam ao seu alcance no momento de sua criação, mesmo que ela seja executada em um lugar e momento completamente diferentes.
//-------------------------------------------------------------------

let umaFuncao = function() {
    console.log('Fui armazenada em uma variável')
}
umaFuncao()

function f(funcao) { // Função de mais alta ordem!
    funcao()
}
f(umaFuncao)

//Função de alta ordem -> Recebe outra função como parâmetro ou
//Retorna uma função 
//-------------------------------------------------------------------
// Se declarado: f(umaFuncao()), não funciona! 
// Os () internos são resolvidos primeiro. 
// No exemplo acima esta sendo passado o resultado da funcão "umaFuncao". 
// Ela devolve undefienied. 
// Se não tem return definido, ele está implicito.
//-------------------------------------------------------------------
  
function g(){
    function outraFuncao(){
        console.log('Fui criada por g')
    }
    return outraFuncao() //Executa e retorna o resultado
}
// g()

function g(){
    return function() {
        console.log("Sou de alta ordem porque retorno outra função!")
    }
}
const gResult = g()
// gResult()

f(function() {
    console.log("Sou uma function passada para f")
}) //A impressão ocorre em f(umaFuncao).

f(() => console.log("Sou uma arrow passada para f"))

//-------------------------------------------------------------------
// Exemplos de Funções que recebem outras funções e as executam

// gResult() -> Executa função g()

// g()() -> g() executa g e retorna uma função; g()() executa a função retornada

// f(g) -> passa a função g() como parâmetro para f() 

// f(g()) -> executa g() e o retorno de g() é passado para f() 

// f(g()()) -> executa g() que deve retornar uma função; o () extra executa  afunção retornada; o resultado final vai como argumento para f().

// f(g())() -> executa g(), amda o resultado para f(); f(g())() precisa retornar uma função que é executado no último ()
//-------------------------------------------------------------------

function f(){
    let nome = 'João'
    function g(){
        console.log(nome)
    }
    g()
}
f()

function ola(){
    let nome = 'JOÃO'
    return function (){
        console.log(`Ola, ${nome}`)
    }
}
let olaResult = ola() // Function ola terminou aqui.
olaResult()

function saudacoesFactory(saudacao, nome){
    return function() { 
        console.log(`${saudacao}, ${nome}`)
    }
}
let olaPedro = saudacoesFactory('ola', 'Pedro')
let tchauPedro = saudacoesFactory('tchau', 'Pedro')
olaPedro()
tchauPedro()

  