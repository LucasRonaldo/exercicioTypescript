"use strict";
let numero = 200;
let SegundoNumero = 100;
console.log(numero + SegundoNumero);
let idade = 16;
let texto = "Minha  idade é: " + idade;
console.log(texto);
let idadeNova = 16;
let textoNovo = "Minha  idade é: " + idadeNova;
console.log(textoNovo + idadeNova);
let arr = [1, 2, 3, 4, 50, 60, 70, 80];
console.log(arr);
console.log(arr[5]);
console.log(arr.length);
console.log(arr.indexOf(1));
let n1 = 8;
if (n1 <= arr.length) {
    console.log("array disponivel " + arr[n1]);
}
else {
    console.log("array indisponivel");
}
let arrayTexto;
arrayTexto = ['ab', 'bc', 'cd', 'de'];
console.log(arrayTexto);
console.log(arrayTexto.length);
console.log(arrayTexto.indexOf('ab'));
function exibirTexto() {
    console.log('Exibindo meu texto');
}
exibirTexto();
function exibirOutroTexto() {
    return "Exibindo outro texto";
}
console.log(exibirOutroTexto());
function retornaNumero() {
    return 10;
}
console.log(retornaNumero());
function soma(a, b) {
    return a + b;
}
console.log("o valor da soma é: " + soma(50, 100));
/* EXERCICIOS */
/* Crie uma função do tipo number que retorna o resultado da multiplicação de dois números (A e B) */
function multiplicação(a, b) {
    return a * b;
}
console.log("o valor da multiplicação é: " + multiplicação(50, 100));
/* Crie uma função do tipo number que recebe os parametros a, b e c, resolva a formula (a + b) * c  */
function formula(a, b, c) {
    return (a + b) * c;
}
console.log("o valor da formula é: " + formula(50, 100, 1));
/* Crie uma função do tipo string que recebe dois números (A e B), e retorne o texto */
function Etexto(a, b) {
    return "O resultado da multiplicação é: " + (a * b);
}
console.log(Etexto(10, 10));
