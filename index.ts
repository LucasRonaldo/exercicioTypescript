let numero: number = 200;
let SegundoNumero: number = 100;

console.log(numero + SegundoNumero);

let idade: number = 16;
let texto: string = "Minha  idade é: " + idade;

console.log(texto);

let idadeNova: number = 16;
let textoNovo: string = "Minha  idade é: " + idadeNova;

console.log(textoNovo+idadeNova);

let arr: number[] = [1, 2, 3, 4, 50, 60, 70, 80];

console.log(arr);
console.log(arr[5]);
console.log(arr.length);
console.log(arr.indexOf(1))

let n1: number = 8;
if(n1<= arr.length){
    console.log("array disponivel " + arr[n1])
}
else{
    console.log("array indisponivel" );
}

let arrayTexto: Array<string>;
arrayTexto = ['ab', 'bc', 'cd', 'de'];

console.log(arrayTexto);
console.log(arrayTexto.length);
console.log(arrayTexto.indexOf('ab'));


function exibirTexto(){
    console.log('Exibindo meu texto');
}

exibirTexto()

function exibirOutroTexto(){
    return "Exibindo outro texto"
}

console.log(exibirOutroTexto())

function retornaNumero(): number{
    return 10;
}

console.log(retornaNumero());

function soma(a: number, b: number): number {
    return a + b;
}

console.log("o valor da soma é: " + soma(50, 100));




/* EXERCICIOS */


/* Crie uma função do tipo number que retorna o resultado da multiplicação de dois números (A e B) */

function multiplicação(a: number, b: number): number {
    return a * b;
}

console.log("o valor da multiplicação é: " + multiplicação(50, 100));

/* Crie uma função do tipo number que recebe os parametros a, b e c, resolva a formula (a + b) * c  */

function formula(a:number, b: number, c: number): number {
    return (a + b) * c;
}
console.log("o valor da formula é: " + formula(50, 100, 1));

/* Crie uma função do tipo string que recebe dois números (A e B), e retorne o texto */ 

function Etexto(a:number, b: number):string{
    return "O resultado da multiplicação é: " + (a * b);

}
console.log(Etexto(10,10));


