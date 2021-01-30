
let readlineSync = require('readline-sync')

function transformaParaPolar(xx,yy)
{
    xx = readlineSync.question('Insira o valor real' + '\n')
    yy = readlineSync.question('Insira o valor imaginario' + '\n')
    
    m= Math.sqrt(xx*xx + Math.pow(yy,2));
    f = Math.atan( yy/xx );
    f= f*180 / Math.PI;

    console.log("Modulo convertido foi: " + m + "|_" + f + "°")
}

function transformaParaRetangular(xxx,yyy)
{
    xxx = readlineSync.question('Insira o Modulo: ' + '\n')
    yyy = readlineSync.question('Insira a defasagem: ' + '\n')
    
    yyy= (yyy*Math.PI)/180;
    mm = xxx * Math.cos(yyy);
    nn = xxx *Math.sin(yyy);

    console.log("Resultado: " + mm + " j" + nn )
}

function toDegrees (angle) {
    return angle * (180 / Math.PI);
  }
  
function cos(degrees) {
  var radians = (degrees * Math.PI) / 180;
  return Math.cos(radians);
}

function sen(degrees) {
    var radians = (degrees * Math.PI) / 180;
    return Math.sin(radians);
  }

const expr2 = readlineSync.question('Qual ex?' + '\n')
switch (expr2)
{
    case '1':

      console.log('SLIDE 1, EX 1')
      console.log('Considere um MI trifásico, 460V, 100 HP, 60 Hz, 4 polos, atendendo carga nominal, com escorregamento de 5%. Calcule')
      console.log('\na) A velocidade síncrona e a velocidade do motor;') 

      console.log('vel. Sincrona:  ns = 120*f/p')
      var freq1 = parseFloat(readlineSync.question('freq: '))
      var numeroDePolos = parseFloat(readlineSync.question('numero de polos: '))
      var ns = (120*freq1)/numeroDePolos
        console.log('Vel Sincrona: ' + ns + ' rpm')

      console.log('vel. do motor: n = ns(1-s)')
      var porcentagem = parseFloat(readlineSync.question('porcentagem? : '))
      var n = ns*(1 - (porcentagem/100)) 
      console.log('vel do motor: ' + n + ' rpm')

      console.log('\nb) A velocidade do campo girante no entreferro;') 
      console.log('ncg = ns = ' + ns + ' rpm')

      console.log('\nc) A frequência do circuito no rotor') 
      var freqInd = freq1 * (porcentagem/100)
      console.log('a freq de circuito no rotor: ' + freqInd + 'hz')

      console.log('\nd) O escorregamento em RPM;') 
      var escorregamento32 = ns - n
      console.log('a freq de circuito no rotor: ' + escorregamento32 + ' rpm') 

      break;

      case '2':
        console.log('SLIDE 1, EX 2')
        console.log('O rotor de um MIT de 4 pólos e 60 Hz absorve 120 kW em 3 Hz. Determine:')
        console.log('\na) A velocidade do rotor') 
        console.log('vel. Sincrona,:  ns = 120*f/p')
        freq1 = parseFloat(readlineSync.question('freq: '))
        numeroDePolos = parseFloat(readlineSync.question('numero de polos: '))
        ns = (120*freq1)/numeroDePolos
        console.log('Vel Sincrona, rotor: ' + ns + ' rpm')

        console.log('Sabendo que a frquencia F2 eh de 3Hz....(nesse caso)')
        var freq2 = parseFloat(readlineSync.question('Digite a freq2: '))
        var sResults = freq2/freq1
        console.log('s = ' + sResults)

        console.log('vel. do motor/rotor: n = ns(1-s)')
        n = ns*(1 - (sResults)) 
        console.log('vel do motor/rotor: ' + n + ' rpm')

        console.log('\nb) as perdas no cobre do rotor;') 
        console.log('Pcu,r = sPg -> Pcu')
        var sAbsorvido = parseFloat(readlineSync.question('Insira quanto ele absorve em kW: '))
        var sResults2 = sResults*sAbsorvido
        console.log('Pcu,r' + sResults2 + ' kW')

        console.log('\nc) Considerando que este motor possui perdas no cobre do estator de 3 kW, perdas mecânicas')
        console.log('de 2 kW e perdas no núcleo do estator de 1,7 kW, calcule a potência de saída do motor..')
        console.log('eficiência deste motor. Despreze as perdas no núcleo do rotor.')

        console.log(' Pcu est = 3 kW , Pmec = 2kW e PC=2 kW')
        console.log('Psaida = Psaida = pg - pcu,r - pmec')
        var pmec = parseFloat(readlineSync.question('Insira as perdas mecanicas: '))
        var sResults3 = sAbsorvido - sResults2 - pmec
        console.log('Psaida: ' + sResults3)

        console.log('\nPentrada = Pg + Pcu,est + Pc')
        var pest = parseFloat(readlineSync.question('Insira as perdas no cobre do estator: '))
        var pestnucleo = parseFloat(readlineSync.question('Insira as perdas no NUCLEO do estator: '))
        var sResults4 = sAbsorvido + pest + pestnucleo
        console.log('Pentrada: ' + sResults4)

        var sRendimento = sResults3/sResults4
        console.log('\nRendimento de: ' +  sRendimento)
        console.log('ou : ' + sRendimento*100 + '%')
        break;

        case '3':
        console.log('SLIDE 1, EX 3')
        console.log('Um MIT de 6 polos e 60 Hz consome 48 kW quando gira a 1140 rpm. As perdas no cobre do estator')
        console.log('são 1,4 kW, perdas no núcleo do estator são 1,6 kW e as perdas mecânicas são 1 kW. Calcule a eficiência deste motor.')

        console.log('\nSolução:')
        freq1 = parseFloat(readlineSync.question('freq: '))
        numeroDePolos = parseFloat(readlineSync.question('numero de polos: '))
        ns = (120*freq1)/numeroDePolos
        console.log('Vel Sincrona, rotor: ' + ns + ' rpm')
        var rotacaoRPM = parseFloat(readlineSync.question('Insira qnt ele gira em rpm: '))
        var sResults = (ns - rotacaoRPM)/ns
        console.log('s(escorregamento) = ' + sResults*100)

        console.log('Potência de entrada: = O quanto ele consome(no caso 48kw)')
        var sPotEntrada = parseFloat(readlineSync.question('\nDigite a pot de entrada(o qnt consome em kW) :'))

        console.log('Pot de entrada: ' + sPotEntrada)
        var sPotResults = (1-sResults)*sPotEntrada
        console.log('Potencia mecanica + perdas: ' + sPotResults)

        console.log('\nPotencia de saida: Psaida = Pmec - PERDASmec')
        var sPERDASmec = parseFloat(readlineSync.question('Insira as perdas mecanicas (no caso eh 1kW):'))
        var sPotSaida = sPotResults - sPERDASmec
        console.log('Potencia de saida: ' + sPotSaida)

        console.log('\nEficiencia: n = psaida/pentrada ->' + (sPotSaida/sPotEntrada))
        console.log('ou : ' + (sPotSaida/sPotEntrada)*100)

  
}

