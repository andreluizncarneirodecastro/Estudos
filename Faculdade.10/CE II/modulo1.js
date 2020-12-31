///////// -- SISTEMAS TRIFÁSICOS -- EX 1 ////////
let readlineSync = require('readline-sync')
const expr = readlineSync.question('Qual a ligação do sistema trifásico?' + '\n')
switch (expr) {
  case 'estrela-estrela':

console.log("Modulo 1 - Sistemas Trifásicos" + "\n")

console.log("-- estrela-estrela: Fazer Equivalente Monofásico --") 
console.log("Exemplo 1: Um circuito trifásico estrela-estrela de sequência positiva possui Van = 50|_0° V, ZLT = 1 + j3 Ohms e Zy = 10|_45° Ohms")
console.log("Determine as correntes de linha e as tensões nas cargas de todas as fases além da corrente no neutro. " + "\n")
console.log("Solução: A partir do EQUIVALENTE MONOFASICO da fase A, temos que a corrente de linha será:")

let van1 = parseFloat(readlineSync.question('Modulo de Van: ')) //módulo
let vanDefasagem1 = parseFloat(readlineSync.question('Valor da defasagem de Van: '))  //fase

//////////////////////////////////////////////////////////
let zltReal1 = parseFloat(readlineSync.question('Valor real de zlt: ')) // parte real
let zltImaginaria1 = parseFloat(readlineSync.question('Valor imaginaria de zlt: '))// parte imaginária

let zyModulo1 = parseFloat(readlineSync.question('Modulo de zy: '))//módulo
let zyFase = parseFloat(readlineSync.question('Fase de zy: ')) //fase
//////////////////////////////////////////////////////////
console.log("Por não conseguir fazer divisão com o denominador sendo Pol & Ret. transformamos Zy")
let defasagemZy = (zyFase * Math.PI)/180

let x = zyModulo1 * Math.cos(defasagemZy)
let y = zyModulo1 * Math.sin(defasagemZy)

console.log("zy Transformado = " + x + " + j" + y + "\n")
//////////////////////////////////////////////////////////

zltReal1 = zltReal1 + x
zltImaginaria1 = zltImaginaria1 + y

let modulo = Math.sqrt(zltReal1*zltReal1 + Math.pow(zltImaginaria1,2))
let defasagem = Math.atan(zltImaginaria1/zltReal1);
defasagem = (defasagem*180) / Math.PI;

console.log("Ia = van1 / " + modulo + "|_ " + defasagem +"°")

iaModulo1 = van1/modulo
iaDefasagem1 = vanDefasagem1 - defasagem

console.log("Ia = " + iaModulo1 + "|_ " + iaDefasagem1)
//////////////////////////////////////////////////////////
console.log("\n" + "Lei de ohm, tensão na carga A eh: ")
let vzaModulo = (zyModulo1 * iaModulo1)
let vzaDef = (iaDefasagem1+zyFase)
console.log("Vza = " + vzaModulo + "|_ " + vzaDef)
console.log("Ia = " + iaModulo1 + "|_ " + iaDefasagem1)

console.log("\n" + "Vzb = " + vzaModulo + "|_ " + (vzaDef-120))
console.log("Ib = " + iaModulo1 + "|_ " + (iaDefasagem1-120))

console.log("\n" + "Vzc = " + vzaModulo + "|_ " + (vzaDef+120))
console.log("Ib = " + iaModulo1 + "|_ " + (iaDefasagem1+120))

break;

case 'TESTE':
    console.log('TESTE')
    break;
}