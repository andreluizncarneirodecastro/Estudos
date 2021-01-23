let readlineSync = require('readline-sync')
const expr = readlineSync.question('Qual a Unidade?' + '\n')

function transformaParaPolar(xx,yy)
{
    xx = readlineSync.question('Insira o valor real' + '\n')
    yy = readlineSync.question('Insira o valor imaginario' + '\n')
    
    m= Math.sqrt(xx*xx + Math.pow(yy,2));
    f = Math.atan( yy/xx );
    f= f*180 / Math.PI;

    console.log("Modulo convertido foi: " + m + "|_" + f + "°")
}

/*
function transformaParaRetangular = function(x,y)
{
    const x = readlineSync.question('Insira o Modulo: ' + '\n')
    const y = readlineSync.question('Insira a defasagem: ' + '\n')
    
    f= f*Math.PI/180;
    x = m * Math.cos(f);
    y= m *Math.sin(f);

    console.log("Resultado: " + x + " j" + y )
}
*/

function cos(degrees) {
  var radians = (degrees * Math.PI) / 180;
  return Math.cos(radians);
}


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
        break;
}

case '2':
const expr3 = readlineSync.question('Qual ex?' + '\n')
switch (expr3)
{
    case '1':
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
    let vrms3 = parseFloat(readlineSync.question('vrms: ')) 
    let fp1 = parseFloat(readlineSync.question('fp: ')) 
    let moduloCorrente = 0
    moduloCorrente = p3/(3*vrms3*cos(20))
    console.log(moduloCorrente)
    console.log('ip = p30/3*vp*cos(fi) ' + '\n III) VERDADEIRA, Ip = ' + moduloCorrente)
    break;
      case '2':
    console.log("Q2) Um motor de indução trifásico pode ser modelado como uma carga conectada em estrela equilibrada")
    console.log("Determine o FP de um motor de indução de 1KW, 220Vrms e Il = 4Arms")
    let fp2 = parseFloat(readlineSync.question('FP: '))
    let vrms2 = parseFloat(readlineSync.question('VRMS: '))
    let IL2 = parseFloat(readlineSync.question('I linha: '))

    console.log('calculando a pot aparente: ')
    var s = Math.sqrt(3)*(vrms2)*IL2
    console.log('S = raizDe3 * Vrms * iL')
    console.log('S = ' + s)

    console.log('Pot real eh: P = S * COS(fi)')
    console.log('P = S*Cos(fi) = ' + fp2)
    console.log('O fator de potencia sera: ')
    console.log("FP = cos(fi) = P/S = " + (fp2/s))
    break;

     case '3':
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
    var sResultado3 = (van3Modulo/Math.sqrt(2)) * (rmodulo3/Math.sqrt(2)) 
    console.log(sResultado3 + "|_" + (-zyDefasagem3))

    console.log('/\ /\ /\ slide multiply this value for 2, but in result in ATIVITY is !=')

    console.log('s30 = 3 * sa')
    var s30 = 3 * sResultado3
    console.log(s30)
    break;
  }

case '3':
  const expr4 = readlineSync.question('Qual ex?' + '\n')
  switch (expr4)
  {
    case '2':
    console.log("TRANSFORMADORES")

    console.log('Determine as correntes do primário e do secundário deste circuito e assinale a alternativa com os valores corretos')
    console.log('Do ex, padrao: Van 20|_0° , R1 = 10, C1 = -5, R2 = 2, I1 = 3')
    var vanModulo4 = parseFloat(readlineSync.question('vanModulo: '))
    var vanDef4 = parseFloat(readlineSync.question('vanDefasagem: '))
    var R14 = parseFloat(readlineSync.question('Resistor 1: '))
    var C14 = parseFloat(readlineSync.question('Capacitor: '))
    var R24 = parseFloat(readlineSync.question('Resistor 2: '))
    var I14 = parseFloat(readlineSync.question('Indutor 1: '))

    var un1 =  parseFloat(readlineSync.question('\nTem uma relacao de Quanto? :'))
    var un2 =  parseFloat(readlineSync.question('por? :'))
    console.log(un1 + ' : ' + un2)

    console.log('\nSolução:')
    var a = un1/un2
    console.log('a = ' + a)
    var z2Img = (a*a) * (I14)
    var z2Real = (a*a) * (R24)
    console.log(a + '² *' + z2Real + '+ j' + z2Img)    

    console.log('z2 = ' +  z2Real + '+ j' + z2Img)

    console.log('imp. equivalente no primário: ')
    console.log('Zeq = r1 + c1 + z2"')
    console.log(R14 + ' + j' + C14 + ' + ' + z2Real + ' + j' + z2Img)
    var sum1 = R14 + z2Real
    var sum2 = C14 + z2Img
    console.log('Zeq = ' + sum1 + '+ j' + sum2)
    console.log('\n.:::Transformando para polar Para obter o Zeq:::.')

    transformaParaPolar(sum1,sum2)
    console.log('Convertido para polar Zeq, temos: ' + m + '|_' + f)

    console.log('\nCorrente no primario: ')
    console.log('I1 = Van/Zeq')
    var I1Modulo4 = vanModulo4/m
    var I1Def4 = vanDef4 - f
    console.log('I1 = ' + I1Modulo4 + '|_ ' + -f)

    //converter pra polar
    console.log('Insira o valor de: ' + z2Real + '+ j' + z2Img)

    transformaParaPolar(z2Real,z2Img)

    console.log('\nV1 = I1*Z2"')
    var results4 = I1Modulo4 * m
    var results5 = I1Def4 + f
    console.log('V1 = ' + results4 + '|_ ' + results5 + ' °')

    console.log('\nTensao no secundario: ')
    var v22 = 1/a * results4
    console.log('vSecundario = ' + v22 + '|_ ' + results5 + '°')
    
    console.log('I Secundario: ')
    var I22 = a * I1Modulo4
    console.log('I Secundario: ' + I22 + '|_' + I1Def4 + '°')
    break;
////////////////////////////////////
    case '3':
    console.log('Calcule a tensão na resistência de 5 ohms do secundário e assinale a alternativa correta.')
    console.log('Padrão: van = 100|_0 , r1 = 20, c1 = -5, r2 = 5, c1 = 5')
    console.log('Nesse consta: Divisor de Tensao..')

    vanModulo4 = parseFloat(readlineSync.question('vanModulo: '))
    vanDef4 = parseFloat(readlineSync.question('vanDefasagem: '))
    R14 = parseFloat(readlineSync.question('Resistor 1: '))
    C14 = parseFloat(readlineSync.question('Capacitor: '))
    R24 = parseFloat(readlineSync.question('Resistor 2: '))
    I14 = parseFloat(readlineSync.question('Indutor 1: '))

    un1 =  parseFloat(readlineSync.question('\nTem uma relacao de Quanto? :'))
    un2 =  parseFloat(readlineSync.question('por? :'))
    console.log(un1 + ' : ' + un2)

    console.log('\nSolução:')
    a = un1/un2
    console.log('a = ' + a)
    z2Img = (a*a) * (I14)
    z2Real = (a*a) * (R24)
    console.log(a + '² *' + z2Real + '+ j' + z2Img)    

    console.log('z2 = ' +  z2Real + '+ j' + z2Img)

    console.log('imp. equivalente no primário: ')
    console.log('Zeq = r1 + c1 + z2"')
    console.log(R14 + ' + j' + C14 + ' + ' + z2Real + ' + j' + z2Img)
    sum1 = R14 + z2Real
    sum2 = C14 + z2Img
    console.log('Zeq = ' + sum1 + '+ j' + sum2)
    console.log('\n.:::Transformando para polar Para obter o Zeq:::.')

    transformaParaPolar(sum1,sum2)
    console.log('Convertido para polar Zeq, temos: ' + m + '|_' + f)

    console.log('\nCorrente no primario: ')
    console.log('I1 = Van/Zeq')
    I1Modulo4 = vanModulo4/m
    I1Def4 = vanDef4 - f
    console.log('I1 = ' + I1Modulo4 + '|_ ' + -f)

    //converter pra polar
    console.log('Insira o valor de: ' + z2Real + '+ j' + z2Img)

    transformaParaPolar(z2Real,z2Img)

    console.log('\nV1 = I1*Z2"')
    results4 = I1Modulo4 * m
    results5 = I1Def4 + f
    console.log('V1 = ' + results4 + '|_ ' + results5 + ' °')

    console.log('\nTensao no secundario: ')
    v22 = 1/a * results4
    console.log('vSecundario = ' + v22 + '|_ ' + results5 + '°')

    console.log('Aplicando o divisor de Tensao para calcular a TENSAO na RESISTENCIA de: ' + R24)

    console.log('V5ohm = R2/R1+R2 * V1')
    console.log('Insira o valor de: ' + R24 + '+ j' + I14)
    transformaParaPolar(R24,I14)
    console.log('V5ohms = R2/R1+R2')
    var results6 = R24/m
    var results7 = -f
    console.log(results6 + '|_' + results7 + '°')
    var results8 = results6*results4 + '|_' + (results7+results5) + ' °'
    console.log('V5ohm = ' + results8 + ' * ' + '1/a')
    var resultsFinal = (results6*results4) * (1/a)
    console.log('v5Ohm: ' + resultsFinal + '|_' + (results7+results5) + '°')
    break;
  }

  case '4':
    const expr5 = readlineSync.question('Qual ex?' + '\n')
    switch (expr5)
    {
      case '1':
      console.log('Um motor de indução trifásico de 220 V e 60Hz possui 4 polos. Se o escorregamento deste motor é de 2%')
      console.log('calcule a velocidade de rotação em rpm e assinale a alternativa correta.') 

      console.log('vel. Sincrona:  ns = 120*f/p')
      console.log('Escorregamento: s = ns-n/ns')
      console.log('vel. do rotor: n = ns(1-s)')
      console.log('freq. da corrente induzida no rotor: f2 = p(ns-n)/120 = sf1')
      var freq1 = parseFloat(readlineSync.question('freq: '))
      var numeroDePolos = parseFloat(readlineSync.question('numero de polos: '))
      var porcentagem = parseFloat(readlineSync.question('Insira a % do escorregamento: '))

      var ns = (120*freq1)/numeroDePolos
      var n = ns*(1 - (porcentagem/100)) 
      console.log('n: ' + n + ' rpm')
      break;

      case '3':
      console.log('Um MIT de 4 polos e 60 Hz consome 50 kW quando gira a 1700 rpm.')
      console.log('As perdas no cobre do estator são 2 kW, perdas no núcleo do estator são 2,5 kW')
      console.log('e as perdas mecânicas são 1,5 kW. Calcule a eficiência deste motor e assinale a alternativa correta.')
      
      numeroDePolos = parseFloat(readlineSync.question('numero de polos: '))
      freq1 = parseFloat(readlineSync.question('freq: '))
      var pEntrada = parseFloat(readlineSync.question('Potencia de entrada:'))
      var pc1 = parseFloat(readlineSync.question('Perdas no Cobre, Pc: '))
      var pcuest = parseFloat(readlineSync.question('Perdas no nucleo do estator, Pcu,est: '))
      var pmec = parseFloat(readlineSync.question('Perdas mecanicas são, Pmec: '))
      var n3 = parseFloat(readlineSync.question('n: '))

      var ns = (120*freq1)/numeroDePolos
      console.log('\nS= ns-n/ns')
      var s33 = (ns - n3)/ns
      console.log('Pentrada = ' + pEntrada)
      console.log('\nPot. mecânica + perdas:')
      var pmec3 = (1 - s33)*pEntrada

      console.log('\nPot Saida:')
      console.log('Pmec - PerdasMec: ')
      var potSaida = pmec3 - pmec
      var eficiencia = potSaida/pEntrada
      console.log('Eficiencia de: ' + eficiencia*100 + (' %'))
    }

    case '5':
      const expr6 = readlineSync.question('Qual ex?' + '\n')
      switch (expr6)
      {
        case '1':
        console.log("Considere um motor de inducao trifasico de 10Hp, 220V, cos(fi) = 0,87 e n = 85%")
        console.log('Calcule a corrente deste motor')
        var hp1 =  parseFloat(readlineSync.question('Insira o valor em hp: '))
        var v133 =  parseFloat(readlineSync.question('Insira o valor de V: '))
        var x33 = parseFloat(readlineSync.question('Insira o valor do cos de fi: '))
        var n =  parseFloat(readlineSync.question('Insira o valor de n: '))
        
        console.log(n/100)
        var i6 = (hp1 * 746)/((Math.sqrt(3))*v133*x33*(n/100))
        console.log('\nI = ' + i6)

        break;

        case '3':
        console.log('Um motor de inducao trifasico de 4 polos, 60hz e 10 cv possui os seguintes dados da placa:')
        console.log('Tensao nominal: 220/380 V')
        console.log('corrente nominal: 25,6/14,8 A')
        console.log('ip/in = 8,2')
        console.log('Fs = 1,2 (20%)')
        console.log('\nDetermine a CORRENTE DE PARTIDA e a CORRENTE MÁXIMA que o motor pode consumir sem ser danificado')
        console.log('SE este motor for ligado em 220V.')
        var v11 = parseFloat(readlineSync.question('Insira o valor de V1 em: V1/V2: '))
        var v11 = parseFloat(readlineSync.question('Insira o valor de V2 em: V1/V2: '))
        var i11 = parseFloat(readlineSync.question('Insira o valor de I1 em: I1/I2: '))
        var i22 = parseFloat(readlineSync.question('Insira o valor de I2 em: I1/I2: '))
        
        var ipIn =  parseFloat(readlineSync.question('Insira o valor de IP/IN: '))
        var FS =  parseFloat(readlineSync.question('Insira o valor de fs: '))
        
        var ip380 = ipIn*i22
        var in380 = i22*FS

        console.log('\nIp(380) = ip/in * i2  -->' + ip380)
        console.log('In(380) = i2 * fs -->' + in380)
        break;
      }
      case '6':
        const expr7 = readlineSync.question('Qual ex?' + '\n')
        switch (expr7)
        {
          case '1':
            console.log('Uma máquina C de 4 polos, construída com enrolamento imbricado')
            console.log(' com 600 condutores ativos gira a 1800 rpm. O fluxo por polo é 40 mWb e armadura foi projetada para suportar uma corrente máxima de 80 A. ')
            console.log('Calcule a tensão induzida no enrolamento de armadura, torque eletromagnético desenvolvido por esta máquina e, em seguida, assinale a alternativa correta.')
            var condAtivos = parseFloat(readlineSync.question('Insira o valor de condutores ativos: '))
            var fluxoPolo = parseFloat(readlineSync.question('Insira o fluxo por Polo: '))
            var Rpm2 = parseFloat(readlineSync.question('gira a quantos RPM ? '))

            console.log('ea = kfi*wm = zp/z*pi*a * fi * (n/60*2*pi')
            console.log('ea = Zfi * n / 60')

            var sResults = condAtivos * fluxoPolo * (Rpm2/60)
            console.log('EA = ' + sResults)

            var IMaximo = parseFloat(readlineSync.question('\nCorrente maxima de ? '))
            console.log('Pe = Ea * Ia')
            var PEMax = sResults * IMaximo
            console.log('Pe = ' + PEMax)

            console.log('Torque eletromag: T = Ea*Ia/Wm')
            var sTorque = PEMax/( (Rpm2/60) * 2*Math.PI)
            console.log('Torque = ' + sTorque)
            break;
            
        
        case '2':
          console.log('Uma máquina CC de 4 polos, construída com enrolamento ondulado, com 600 condutores ativos gira a 1800 rpm. O fluxo por polo é 40')
          console.log('mWb e armadura foi projetada para suportar uma corrente máxima de 80 A. Calcule a tensão induzida no enrolamento de armadura, torque')
          console.log('eletromagnético desenvolvido por esta máquina e, em seguida, assinale a alternativa correta.')
          console.log('\nEA = P*ZA / 60*A')
          var P6 = parseFloat(readlineSync.question('Insira o numero de polos: '))
          var condAtivos22 = parseFloat(readlineSync.question('Insira o numero de condutores ativos: '))
          var a66 = parseFloat(readlineSync.question('Insira o valor de a: '))
          var IMax3 = parseFloat(readlineSync.question('Insira o valor de Imax: '))
          Rpm2 = parseFloat(readlineSync.question('gira a quantos RPM ? '))
          fluxoPolo = parseFloat(readlineSync.question('Insira o fluxo por Polo: '))

          var Ea = ((P6 * condAtivos22)/(60*a66))*fluxoPolo*Rpm2
          console.log('\nEa= ' + Ea)
          var PE6666 = Ea * IMax3
          console.log('Pe = Ea * Ia')
          console.log('Pe = ' + PE6666)

          console.log('PM = PE -> Twm = Ea * Ia' )
          console.log('T = Ea*Ia/Wm')
          var results10 = PE6666 / ((Rpm2/60) * 2*Math.PI)
          console.log('T = ' + results10 + 'N.m')
          break;

          case '3':
          console.log('Considere um gerador CC em derivação de:')
          console.log('40 kW, Vt =220 V, Rf=60 e RA=0,06')
          console.log('Determina as tensoes induzicas na armadura para condicoes nominais.')
          console.log('\nPlena carga')

          var Pot6 = parseFloat(readlineSync.question('Insira o valor de potencia: '))
          var Vt = parseFloat(readlineSync.question('Insira o valor de Vt: '))
          var Rf = parseFloat(readlineSync.question('Insira o valor de Rf: '))
          var Ra = parseFloat(readlineSync.question('Insira o valor de Ra: '))
          console.log('Corrente na carga: Il = P/Vt')
          var IL1 = Pot6/Vt
          console.log('IL = ' + IL1)

          console.log('Corrente de campo: If = Vt/Rf')
          var IF1 = Vt/Rf
          console.log('If = ' + IF1)

          console.log('Corrente na armadura: Ia = If+IL')
          var IA1 = IF1+IL1
          console.log('IA = ' + IA1)

          var EA1 = Vt + Ra*IA1
          console.log('EA = ' + EA1)
          break;
          
        }
}