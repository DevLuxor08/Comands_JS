// - - - COMANDO BASICOS DO JS - - -

//Document -> se refere ao documento HTML
//Window -> se refere a janela do navegador
//Typeoff -> Identifica o tipo da variavel 
//InnerHTML -> Pegar a informação dentro da TAG




            /* STRINGS */
//Lengt -> Retorna o tamanho da frase
//toUpperCase() -> Deixa em Maiusculo a frase
//toLowerCase() -> Deixa a frase em Minusculo
//charAt() -> Retorna a posição de uma Caracter
//IndexOff() -> Retorna a posição de uma frase
//includes() -> Retorna se determinada palavra esta dentro da frase
//substring() -> Pega parte da frase e traz ela de acordo com a posição dos caracteres
//slice() -> Aceita valores negativo
//replace()-> Substitui determinada palavra
//replaceAll() -> Muda o caracter por outro e toda a frase
//split() -> Dividir por espaços
//startwitch() -> Verifica se a frase termina com determinado caracter
//concat() -> Concatena duas Strings
//trim() -> Tira os espaçoes em branco

            /* NUMEROS */






// - - - DICAS | * IMPORTANTE * - - -
// Sempre coloque ponto e virgula no final de frase (;)
// Usar crase (``) quando for definir uma frase como variavel



/* ---------------------------------------------------------------------------------------------------*/

// - - - VARIAVEIS - - -
var idade = 19; //NUMBER
var IdadeStr = '' //STRING
var peso = [1,2,3,4,5] // ARRAY | VETOR (LISTA)
var pessoa = {
    nome: 'Lucas',
    Idade: 19,
    Altura: 1.75
} //JSON | Representa um Objeto | Orientado a Objeto
var isMestre = true; //BOOLEAN (TRUE | FALSE)

// - - - TIPOS DE VARIAVEIS - - -
var name = "lucas" // VAR | variavel mutavel

let numero = 10; // LET | Acessivel dentro do Bloco de Codigo, nome reservado

const _pi = 3.14; // CONST | Valor que nunca muda e nome reservado

// - - - TESTES - - -
/* Identificando o Tipo das Variaveis*/ 
console.log(typeof idade);
console.log(typeof IdadeStr);
console.log(typeof peso);
console.log(typeof pessoa);
console.log(typeof isMestre);

console.log(Array.isArray(peso)) 
idade = 'minha idade';
console.log(typeof idade)
numero = 'meu numero';
console.log(numero)


/* ---------------------------------------------------------------------------------------------------*/
// MANIPULAÇÃO DE STRING
let frase = 'Aprender JS com o Adolfo é deveras interessante';
console.log('Frase Original', frase);

//Length
console.log('Tamanho da Frase:', frase.length);

//toUppercase
console.log('Maiusculo:', frase.toUpperCase());

//toLowercase
console.log('Minusculo:', frase.toLowerCase());

//charAt
console.log('Caracter e sua posições(9):', frase.charAt(9));

//IndexOff
console.log('Posição de uma Frase:', frase.indexOf('Adolfo'));

//includes
console.log('Verifica se determinada palavra esta na frase:', frase.includes('lux'));

//substring
console.log('Pega parte da frase e traz ela de acordo com a posição dos caracteres:', frase.substring(9,19));

//slice
console.log('Aceita valores negativo:', frase.slice(-11,-1));

//replace
console.log('Substitui as palavras:', frase.replace('JS', 'PY'));

//replaceAll
console.log('Muda determinado caracter para outro em todos', frase.replaceAll('o', 'a'));

//split
console.log('Dividir por espaços', frase.split(" "));

//startwitch
console.log('veerificar se termina com determinado caracter', frase.startsWith('!'));

//concat
console.log('', frase.concat(' Vamos continuar'))

//trim
console.log('', frase.trim())

/* TEMPLATE */

let saudacao = `Ola, meu nome é ${name} e tenho ${idade} anos.`;
console.log('Template String', saudacao)

let poema = `Perdida daqui a pouca vai ficar,
E sua emoção voce vai ter que segurar.`
console.log(poema)

/* ---------------------------------------------------------------------------------------------------*/

//MANIPULAÇÃO DE NUMBERS

let meuNumero = 123.45678;
console.log('Numero Original', meuNumero);

//TOFIXED
console.log('Duas casas decimais', meuNumero.toFixed(2));

//TOPRECISION
console.log('Formata o numero com um total de numero significativos', meuNumero.toPrecision(5));

//ParseInt
// console.log('Converte o numero por inteiro', meuNumero.parseInt('10'));

// //parseFloat
// console.log('', meuNumero.parseFloat('10.22'));

//toString
console.log('', numero.toString())

//radom
console.log('Numero aleatório entre 0 e 1:', Math.random())

//
console.log('Aleatório de 1 a 10:', Math.floor(Math.random() * (10 - 1 + 1)) + 1 )

/* ---------------------------------------------------------------------------------------------------*/

let title = document.getElementById('titulo')
// window.alert(title.innerHTML)
console.log(title)
let novotitulo = 'I love JS <3'
title.innerHTML = novotitulo;

function handleChangeUser(event){
    console.log(event.target.value)
}