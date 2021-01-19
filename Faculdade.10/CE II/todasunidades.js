let readlineSync = require('readline-sync')
const expr = readlineSync.question('Qual a Unidade?' + '\n')

switch (expr) {
case '1':

const expr2 = readlineSync.question('Qual ex?' + '\n')
switch (expr2)
{
    case '2':
    console.log(".::::: Estrela-Triangulo ::::::.") 

    console.log("Um circuito trifásico estrela triângulo de sequência positiva possui Van= 200|_0°V e ZDelta = 8|_40°Ohms")
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
        console.log(".::::: Estrela-Estrela ::::::.") 
        console.log("Exemplo 1: Um circuito trifásico estrela-estrela de sequência positiva possui Van = 100|_0° V, ZLT = 1 + j2 Ohms e Zy = 10|_30° Ohms")
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
}

}