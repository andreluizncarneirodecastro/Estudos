///////// -- SISTEMAS TRIFÁSICOS -- EX 1 ////////
let readlineSync = require('readline-sync')
console.log("Modulo 1 - Sistemas Trifásicos" + "\n")
console.log("1. Estrela-Estrela")
console.log("2. Estrela-Triangulo")
console.log("3. Triangulo-Triangulo")
const expr = readlineSync.question('Qual a ligacao do sistema trifasico?' + '\n')

switch (expr) {
  case '1':
  console.log('\n')
  console.log(".::::: Estrela-Estrela :::::.") 
  console.log("a. Mais comum, ZY POLAR.")
  console.log("b. Igual video 11")
  console.log("c. Mais comum, ZY RET.")
  const expr1 = readlineSync.question('Selecione o tipo de Ex.' + '\n')
  switch (expr1) {
      case 'a':
console.log("Exemplo 1: Um circuito trifásico estrela-estrela de sequência positiva possui Van = 50|_0° V, ZLT = 1 + j3 Ohms e Zy = 10|_45° Ohms")
console.log("Determine as correntes de linha e as tensões nas cargas de todas as fases além da corrente no neutro. " + "\n")
console.log("Solução: A partir do EQUIVALENTE MONOFASICO da fase A, temos que a corrente de linha será:")

let van1 = parseFloat(readlineSync.question('Modulo de Van: ')) //módulo
let vanDefasagem1 = parseFloat(readlineSync.question('Valor da defasagem de Van: '))  //fase

//////////////////////////////////////////////////////////
console.log("\n")
let zltReal1 = parseFloat(readlineSync.question('Valor real de zlt: ')) // parte real
let zltImaginaria1 = parseFloat(readlineSync.question('Valor imaginaria de zlt: '))// parte imaginária

console.log("\n")
let zyModulo1 = parseFloat(readlineSync.question('Modulo de zy: '))//módulo
let zyDefasagem = parseFloat(readlineSync.question('Fase de zy: ')) //Defasagem
//////////////////////////////////////////////////////////
console.log("Por não conseguir fazer divisão com o denominador sendo POLAR transformamos Zy")
let defasagemZy = (zyDefasagem * Math.PI)/180

let x = zyModulo1 * Math.cos(defasagemZy)
let y = zyModulo1 * Math.sin(defasagemZy)

console.log("zy Transformado em RETANGULAR = " + x + " + j" + y + "\n")
//////////////////////////////////////////////////////////

/* Transformando de Retangular Para POLAR*/
zltReal1 = zltReal1 + x
zltImaginaria1 = zltImaginaria1 + y

let modulo = Math.sqrt(zltReal1*zltReal1 + Math.pow(zltImaginaria1,2))
let defasagem = Math.atan(zltImaginaria1/zltReal1);
defasagem = (defasagem*180) / Math.PI;

console.log("Ia = van1 / " + modulo + "|_ " + defasagem +"°")

iaModulo1 = van1/modulo
iaDefasagem1 = vanDefasagem1 - defasagem

//////////////////////////////////////////////////////////
console.log("\n" + "Lei de ohm, tensão na carga A eh: ")
console.log("Vza = " + "zy: " + zyModulo1 + "|_" + zyDefasagem + " * ia: " + iaModulo1 + "|_" + iaDefasagem1) 
console.log('\n')
let vzaModulo = (zyModulo1 * iaModulo1)
let vzaDef = (iaDefasagem1+zyDefasagem)
console.log("Vza = " + vzaModulo + "|_ " + vzaDef)
console.log("Ia = " + iaModulo1 + "|_ " + iaDefasagem1)

console.log("\n" + "Vzb = " + vzaModulo + "|_ " + (vzaDef-120))
console.log("Ib = " + iaModulo1 + "|_ " + (iaDefasagem1-120))

console.log("\n" + "Vzc = " + vzaModulo + "|_ " + (vzaDef+120))
console.log("Ic = " + iaModulo1 + "|_ " + (iaDefasagem1+120))

console.log("\n")

ibDefasagem = (iaDefasagem1-120)
icDefasagem = (iaDefasagem1+120)


ibModulo1 = iaModulo1
icModulo1 = iaModulo1

console.log("A corrente do neutro sera a soma das correntes em cada fase:")
console.log("In = Ia + Ib + Ic.")

let defasagemIa = (iaDefasagem1 * Math.PI)/180
let defasagemIb = (ibDefasagem * Math.PI)/180
let defasagemIc = (icDefasagem * Math.PI)/180

let xIa = iaModulo1 * Math.cos(defasagemIa)
let yIa = iaModulo1 * Math.sin(defasagemIa)
let xIb = ibModulo1 * Math.cos(defasagemIb)
let yIb = ibModulo1 * Math.sin(defasagemIb)
let xIc = icModulo1 * Math.cos(defasagemIc)
let yIc = icModulo1 * Math.sin(defasagemIc)

console.log("Modulo Ia convertido para retangular: " + xIa + " j" + yIa)
console.log("Modulo Ib convertido para retangular: " + xIb + " j" + yIb)
console.log("Modulo Ic convertido para retangular: " + xIc + " j" + yIc)

console.log("\n "+ " Somando-os e dando 0, o circuito é equilibrado")
break;

    case 'b':
    console.log("Video 11. Um gerador possui resistencia interna zi = 0,2 + j0,5 ohm. Tensão A vazio v = 120 V/Por fase. ")
    console.log("A carga ligada eh de z = 39 + j28 ohm/porFase.")
    console.log("A linha que liga o gerador a carga possui impedancia de 0,8 + j1,5 ohm/porFase \n")
    
    
  let van3 = parseFloat(readlineSync.question('\nModulo de Va: ')) //módulo
  let vanDefasagem3 = parseFloat(readlineSync.question('Defasagem de Va: '))  //fase
  let ZiReal1 = parseFloat(readlineSync.question('\nInsira o valor REAL de Zi: '))
  let ZiImg1 = parseFloat(readlineSync.question('Insira o valor IMAGINARIO de Zi: '))
  let zCargaReal1 = parseFloat(readlineSync.question('\nInsira o valor REAL de Z na carga: '))
  let zCargaImg1 = parseFloat(readlineSync.question('Insira o valor IMAGINARIO de Z na carga:'))
  let zImpedanciaReal1 = parseFloat(readlineSync.question('\nInsira o valor REAL na impedancia: '))
  let zImpedanciaImg1 = parseFloat(readlineSync.question('Insira o valor IMAGINARIO na impedancia: '))

  let zEqReal1 = ZiReal1 + zCargaReal1 + zImpedanciaReal1
  let zEqImg1 = ZiImg1 + zCargaImg1 + zImpedanciaImg1

  //Transforma de Ret. pra polar

  var iaReal1 = 0
  var iaImg1 = 0

  let modulo3 = Math.sqrt(zEqReal1*zEqReal1 + Math.pow(zEqImg1,2))
  let defasagem3 = Math.atan(zEqImg1/zEqReal1);
  defasagem3 = (defasagem3*180) / Math.PI;
  console.log("Ia = van1 / " + modulo3 + "|_ " + defasagem3 +"°")
  iaReal1 = van3 / modulo3
  iaImg1 = vanDefasagem3 - defasagem3
  console.log("IA: " + iaReal1 + "|_" + iaImg1)
  console.log("IB: " + iaReal1 + "|_" + (iaImg1-120))
  console.log("IC: " + iaReal1 + "|_" + (iaImg1+120))
  
    break;

    case 'c':
    
    let van5 = parseFloat(readlineSync.question('Modulo de Van: ')) //módulo
    let vanDefasagem5 = parseFloat(readlineSync.question('Valor da defasagem de Van: '))  //fase

  //////////////////////////////////////////////////////////
  console.log("\n")
  let zltReal2 = parseFloat(readlineSync.question('Valor real de zlt: ')) // parte real
  let zltImaginaria2 = parseFloat(readlineSync.question('Valor imaginaria de zlt: '))// parte imaginária

  console.log("\n")
  let zyReal1 = parseFloat(readlineSync.question('Valor real de zy: '))//real
  let zyImg1 = parseFloat(readlineSync.question('Valor imaginaria de zy: ')) //img

  let zEqReal2 =  zltReal2 + zyReal1
  let zEqImg2 =  zltImaginaria2 + zyImg1

  console.log('soma do Zeq: ' + zEqReal2 + "j " + zEqImg2)
  
  let modulo4 = Math.sqrt(zEqReal2*zEqReal2 + Math.pow(zEqImg2,2))
  let defasagem4 = Math.atan(zEqImg2/zEqReal2);
  defasagem4 = (defasagem4*180) / Math.PI;
  console.log("Ia = van1 / " + modulo4 + "|_ " + defasagem4 +"°")
  iaReal2 = van5 / modulo4
  iaImg2 = vanDefasagem5 - defasagem4
  console.log('correntes de Linha:')
  console.log('\nIa: ' + iaReal2 + "|_" + iaImg2 + "°")
  console.log('Ib: ' + iaReal2 + "|_" + (iaImg2-120) + "°")
  console.log('Ic: ' + iaReal2 + "|_" + (iaImg2+120) + "°")

  console.log('\nTensões de fase:')
  console.log('Van= ' +  van5 + "|_ "+ vanDefasagem5)
  console.log('Vbn= ' +  van5 + "|_ "+ (vanDefasagem5-120))
  console.log('Vcn= ' +  van5 + "|_ "+ (vanDefasagem5+120))

  let moduloZy = Math.sqrt(zyReal1*zyReal1 + Math.pow(zyImg1,2))
  let defasagemZy1 = Math.atan(zyImg1/zyReal1);
  defasagemZy1 = (defasagemZy1*180) / Math.PI;
  console.log("Ia = van1 / " + moduloZy + "|_ " + defasagemZy1 +"°")
  
  console.log('\nTensões na carga:')
  console.log('Va = Ia*Zl')
  let ia1 = iaReal2 * moduloZy
  let ia2 = iaImg2 + defasagemZy1  

  console.log('Va= ' + ia1 + "|_" + ia2 + "°")
  console.log('Vb= ' + ia1 + "|_" + (ia2-120) + "°")
  console.log('Vc= ' + ia1 + "|_" + (ia2+120) + "°")

  
  
  //////////////////////////////////////////////////////////
    break;
}
break;

case '2':
  console.log(".::::: Estrela-Triangulo ::::::.") 

  console.log("Um circuito trifásico estrela triângulo de sequência positiva possui Van= 220|_0°V e ZDelta =9|_20°Ohms")
  console.log("Determine as correntes de fase, as correntes de linha e as tensões de linha de todas as cargas \n")

  let van2 = parseFloat(readlineSync.question('Modulo de Van: ')) //módulo
  let vanDefasagem2 = parseFloat(readlineSync.question('Valor da defasagem de Van: '))  //fase

  let vabModulo2 = Math.sqrt(3)*van2
  let vabDefasagem2 = vanDefasagem2 + 30
  console.log("Vab: " + vabModulo2 + "|_" + vabDefasagem2)
  console.log('\n')

  let zDeltaModulo = parseFloat(readlineSync.question('Modulo de zDelta: ')) //módulo
  let zDeltaDefasagem = parseFloat(readlineSync.question('Valor da defasagem de zDelta: '))  //fase
  console.log('\n')
  let iabModulo2 = vabModulo2/zDeltaModulo
  let iabDefasagem2 = vabDefasagem2 - zDeltaDefasagem
  console.log("Iab: " + iabModulo2 + "|_" + iabDefasagem2 + "A")

  let iaModulo = Math.sqrt(3) * iabModulo2
  let iaDefasagem = iabDefasagem2 - 30
  console.log("Corrente de linha, Ia. Modulo: " + iaModulo + " iaDefasagem: " + iaDefasagem)
  console.log('\n')
  console.log("Tensoes de fase: ")
  console.log("Vab: " + vabModulo2 + "|_" + vabDefasagem2)
  console.log("Vbc: " + vabModulo2 + "|_" + (vabDefasagem2 - 120))
  console.log("Vca: " + vabModulo2 + "|_" + (vabDefasagem2 + 120))
  
  console.log("\nCorrentes de fase:")
  console.log("Iab: " + iabModulo2 + "|_" + iabDefasagem2)
  console.log("Ibc: " + iabModulo2 + "|_" + (iabDefasagem2 - 120))
  console.log("Ica: " + iabModulo2 + "|_" + (iabDefasagem2 + 120))

  console.log("\nCorrentes de linha:")
  console.log("Ia: " + iaModulo + "|_" + iaDefasagem)
  console.log("Ib: " + iaModulo + "|_" + (iaDefasagem - 120))
  console.log("Ic: " + iaModulo + "|_" + (iaDefasagem + 120))
    break;

    case '3':
    console.log(".::::: Triangulo-Triangulo ::::::.") 
    let van4 = parseFloat(readlineSync.question('Modulo de Van: ')) //módulo
    let vanDefasagem4 = parseFloat(readlineSync.question('Valor da defasagem de Van: '))  //fase
    let zImpedanciaReal2 = parseFloat(readlineSync.question('\nInsira o valor REAL de Z: '))
    let zImpedanciaImg2 = parseFloat(readlineSync.question('Insira o valor IMG de Z: '))

    let modulo4 = Math.sqrt(zImpedanciaReal2*zImpedanciaReal2 + Math.pow(zImpedanciaImg2,2))
    let defasagem4 = Math.atan(zImpedanciaImg2/zImpedanciaReal2);
    defasagem4 = (defasagem4*180) / Math.PI;

    console.log("Ia = van1 / " + modulo4 + "|_ " + defasagem4 +"°")
    iaModulo4 = van4/modulo4
    iaDefasagem4 = vanDefasagem4 - defasagem4

    console.log('\niab: ' + iaModulo4 + "|_" + (iaDefasagem4))
    console.log('ibc ' + iaModulo4 + "|_" + (iaDefasagem4-120))
    console.log('ica: ' + iaModulo4 + "|_" + (iaDefasagem4+120))

    //falta terminar2
}
