let readlineSync = require('readline-sync')
const expr = readlineSync.question('Qual a Unidade?' + '\n')

switch (expr) {
case '1':

const expr2 = readlineSync.question('Qual ex?' + '\n')
switch (expr2)
{
    case '2':
    console.log(".::::: Estrela-Triangulo ::::::.") 

    console.log("Q2) Um circuito trifásico estrela triângulo de sequência positiva possui Van= 200|_0°V e ZDelta = 8|_40°Ohms")
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
        console.log("Q3) Um circuito trifásico estrela-estrela de sequência positiva possui Van = 100|_0° V, ZLT = 1 + j2 Ohms e Zy = 10|_30° Ohms")
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

case '2':
  const expr2 = readlineSync.question('Qual ex?' + '\n')
  switch (expr2)
  {
    case 1:
    console.log("Q1) Uma carga trifasica ligada em delta, possui ")
    console.log("P30 = 1500w e é ligada em fonte trifásica com 220Vrms de tensõa de linha.")
    console.log("O Fp da carga por 20° atrasado.")
    console.log("I) A potencia ativa por fase é 500w?")
    console.log("II) A Carga tem caracteristicas capacitivas?")
    console.log("III) O Modulo da corrente na carga Delta eh 2,42 Arms? \n")
    
    console.log('I)')
    let p3 = parseFloat(readlineSync.question('potencia trifasica: ')) 
    var rp3 = p3/3
    console.log(p3 + "/" + 3 + "\n I) VERDADEIRA, p30 = " + rp3 + "\n")

    console.log('III)')
    let vrms1 = parseFloat(readlineSync.question('vrms: ')) 
    let fp1 = parseFloat(readlineSync.question('fp: ')) 
    var moduloCorrente = p3/ (3*vrms1*Math.cos(fp1))
    console.log('ip = p30/3*vp*cos(fi) ' + '\n III) VERDADEIRA, Ip = ' + moduloCorrente)

    case 2:
    console.log("Q2) Um motor de indução trifásico pode ser modelado como uma carga conectada em estrela equilibrada")
    console.log("Determine o FP de um motor de indução de 1KW, 220Vrms e Il = 4Arms")
    let fp2 = parseFloat(readlineSync.question('FP: '))
    let vrms2 = parseFloat(readlineSync.question('VRMS: '))
    let IL2 = parseFloat(readlineSync.question('I linha: '))

    console.log('calculando a pot aparente: ')
    var s = Math.sqrt*(vrms2)*IL2
    console.log('S = raizDe3 * Vrms * iL')
    console.log('S = ' + s)

    console.log('Pot real eh: P = S * COS(fi)')
    console.log('P = S*Cos(fi) = ' + fp2)
    console.log('O fator de potencia sera: ')
    console.log("FP = cos(fi) = P/S = " + (fp2/s))

    case 3:
    console.log("Q3) Um circuito estrela-estrela equilibrado possui zy=10|_45° e van 220|_0° com seq positiva. ")
    console.log('Determinar a potencia complexa NA CARGA')

    let van3Modulo = parseFloat(readlineSync.question('vanModulo: '))
    let van3Defasagem = parseFloat(readlineSync.question('vanDefasagem: '))
    let zyModulo3 = parseFloat(readlineSync.question('Zymodulo: '))
    let zyDefasagem3 = parseFloat(readlineSync.question('ZyDefasagem: '))
    
    console.log('\n Ia = van/zy')
    var rmodulo3 = van3Modulo/zyModulo3
    var rDefasagem3 = van3Defasagem/zyDefasagem3
    console.log('Ia = ' + rmodulo3 + "|_" + rDefasagem3)

    console.log('A pot complexa monofasica nesta carga eh: ')
    console.log('sa = vp = ip*')
    var sResultado3 = (van3Modulo/Math.sqrt(2)) * (zyModulo3/Math.sqrt(2)) 
    console.log(sResultado3 + "|_" + (-zyDefasagem3))

    console.log('/\ /\ /\ slide multiply this value for 2, but in result in ATIVITY is !=')

    console.log('s30 = 3 * sa')
    var s30 = 3 * sResultado3
    console.log(s30)

     
  }
}