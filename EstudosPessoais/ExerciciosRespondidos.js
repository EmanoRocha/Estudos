// Antes de tudo! Prazer! Meu nome é Emano Rocha, estudante de Engenharia de Software e um grande fã de tecnologia.
// Executei todos os exercícios em JavaScript. 

/*1) Observe o trecho de código abaixo:
Ao final do processamento, qual será o valor da variável SOMA?*/

let INDICE = 13;
let SOMA = 0;
let K = 0;

while (K < INDICE) {
  K = K + 1;
  SOMA = SOMA + K;
}

console.log(SOMA);

// Resultado da Variável é SOMA = (91)
// A cada etapa do Loop ele acrescenta +1 no valor da variável

// --------------------------------------------------------------------------------------------------------------------------------

/*2) Dado a sequência de Fibonacci, onde se inicia por 0 e 1 e o próximo valor sempre será a soma dos 2 valores anteriores (exemplo: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34...), escreva um programa na linguagem que desejar onde, informado um número, ele calcule a sequência de Fibonacci e retorne uma mensagem avisando se o número informado pertence ou não a sequência.
IMPORTANTE:
Esse número pode ser informado através de qualquer entrada de sua preferência ou pode ser previamente definido no código;*/ 

function Fibonacci(numero) {
  let a = 0;
  let b = 1;
  if (numero === a || numero === b) {
      return true;
  }
  let temp;
  while (b <= numero) {
      if (b === numero) {
          return true;
             }
      temp = a + b;
      a = b;
      b = temp;
  }
  return false;
}
// Número a ser verificado na sequência de Fibonacci
let numeroInformado = 3; // Pode ser alterado para qualquer número 

if (Fibonacci(numeroInformado)) {
  console.log(numeroInformado + " pertence à sequência de Fibonacci.");
} else {
  console.log(numeroInformado + " não pertence à sequência de Fibonacci.");
}
// Você pode alterar o valor da variável numeroInformado para verificar outros números. Eu escolhi o 3 que pertence!
//-------------------------------------------------------------------------------------------------------------------------------

/*3) Descubra a lógica e complete o próximo elemento:

a) 1, 3, 5, 7, ___ -> Números ímpares. O próximo número ímpar após 7 é 9.
Resposta: 1, 3, 5, 7, 9

b) 2, 4, 8, 16, 32, 64, ____ -> Cada número é o dobro do anterior. Então, o próximo número é 128.
Resposta: 2, 4, 8, 16, 32, 64, 128

c) 0, 1, 4, 9, 16, 25, 36, ____ Essa é formada pelos quadrados dos números naturais em ordem a partir no 0. O próximo número 
seria 49, quadrado de 7.
Resposta: 0, 1, 4, 9, 16, 25, 36, 49

d) 4, 16, 36, 64, ____ Quadrados dos números pares. O próximo número seria 100.
Resposta: 4, 16, 36, 64, 100

e) 1, 1, 2, 3, 5, 8, ____  Sequência de Fibonacci, onde cada termo é a soma dos dois anteriores. O próximo número seria 13.
Resposta: 1, 1, 2, 3, 5, 8, 13

f) 2,10, 12, 16, 17, 18, 19, ____  Esta sequência não tem uma lógica clara. Não sei a resposta... :( */
//-------------------------------------------------------------------------------------------------------------------------------

/* 4)Você está em uma sala com três interruptores, cada um conectado a uma lâmpada em uma sala diferente. Você não pode ver as lâmpadas da sala em que está, mas pode ligar e desligar os interruptores quantas vezes quiser. Seu objetivo é descobrir qual interruptor controla qual lâmpada.
Como você faria para descobrir, usando apenas duas idas até uma das salas das lâmpadas, qual interruptor controla cada lâmpada?

Resposta -> Primeiro, ligaria um dos interruptores e deixaria alguns minutos ligado, depois ia desligar e ligar o outro interruptor. A lâmpada que estiver acesa é o último interruptor que liguei, enquanto a lâmpada que ainda estiver quente, mas desligada, estará ligada ao interruptor que desliguei primeiro e deixou ligado por um tempo. A lâmpada restante, tá conectada ao interruptor que falta.
*///-------------------------------------------------------------------------------------------------------------------------------

/*5) Escreva um programa que inverta os caracteres de um string.
IMPORTANTE:
a) Essa string pode ser informada através de qualquer entrada de sua preferência ou pode ser previamente definida no código;
b) Evite usar funções prontas, como, por exemplo, reverse*/

function inverterString(str) {
    let resultado = '';
    for (let i = str.length - 1; i >= 0; i--) {
        resultado += str[i];
    }
    return resultado;
}
let minhaString = "VAI SER ESCREVER NA TELA AO CONTRARIO";
let stringInvertida = inverterString(minhaString);
console.log("String original:", minhaString);
console.log("String invertida:", stringInvertida);

// Foi muito bacana resolver os 5 exercícios! Gratidão... Emano.


