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
    console.log('Um alimentador deve abastecer os seguintes motores trifásicos e suas distâncias em relação ao quadro de distribuicao')

    console.log('elevador social -  – 10 cv (4 polos), cos(fi) = 0,81 , n = 90%, FS = 1,25 e 25m')
    console.log('elevador de serviço – 7,5 cv (4 polos) , cos(fi)= 0,85 , n = 88%, FS = 1,25 e 15 m;')
    console.log('5 e 15 m; bomba-d’água – 5 cv (2 polos), cos(fi) = 0,8 , n = 90%, FS = 1 e 10 m')

    console.log('Todos os motores são de indução trifásicos, com rotor em gaiola e partida direta, tensão 220 volts – 60Hz')
    console.log('Assuma que os condutores serão de cobre com isolação PVC 70°𝐶 e instalados no método B1 para dimensionar os cabos deste circuito')

    var nCv = parseFloat(readlineSync.question('Insira o numero de CV: '))
    var nVolts = parseFloat(readlineSync.question('Insira o numero de V: '))
    var icosfi1 = parseFloat(readlineSync.question('Insira o cos(fi) 1: '))
    var iN1 = parseFloat(readlineSync.question('Insira o n1: '))
    var iFS = parseFloat(readlineSync.question('Insira o FS: '))

    var iSoc = (nCv*736)/(Math.sqrt(3)*nVolts*icosfi1*(iN1/100))
    console.log('Isoc: ' + iSoc + ' A')

    var nCv2 = parseFloat(readlineSync.question('\nInsira o numero de CV: '))
    var nVolts2 = parseFloat(readlineSync.question('Insira o numero de V: '))
    var icosfi12 = parseFloat(readlineSync.question('Insira o cos(fi) 1: '))
    var iN12 = parseFloat(readlineSync.question('Insira o n1: '))
    var iFS2 = parseFloat(readlineSync.question('Insira o FS: '))

    var iSoc2 = (nCv2*736)/(Math.sqrt(3)*nVolts2*icosfi12*(iN12/100))
    console.log('Iserv: ' + iSoc2 + ' A')

    var nCv3 = parseFloat(readlineSync.question('\nInsira o numero de CV: '))
    var nVolts3 = parseFloat(readlineSync.question('Insira o numero de V: '))
    var icosfi13 = parseFloat(readlineSync.question('Insira o cos(fi) 1: '))
    var iN13 = parseFloat(readlineSync.question('Insira o n1: '))
    var iFS3 = parseFloat(readlineSync.question('Insira o FS: '))

    var iSoc3 = (nCv3*736)/(Math.sqrt(3)*nVolts3*icosfi13*(iN13/100))
    console.log('Ibomba: ' + iSoc3 + ' A')

    console.log('I Alimentador: ' + ((iSoc*iFS)+(iSoc2*iFS2)+(iSoc3*iFS3)))

    console.log('\nTabela de ampacidade (B1 com 3 condutores carregados): cabo de 25 mm2')

    console.log('Projetando o condutor para 2% de queda de tensão:')
    var iFSFinal = parseFloat(readlineSync.question('Insira o FS Final 1: '))
    var iFSFinal2 = parseFloat(readlineSync.question('Insira o FS Final 2: '))
    var iFSFinal3 = parseFloat(readlineSync.question('Insira o FS Final 3: '))
    
    var sResultado = (Math.sqrt(3)*((iSoc*iFSFinal)+(iSoc2*iFSFinal2)+((iSoc3*iFSFinal3))))/(58*nVolts2*0.02)
    console.log('s = ' + sResultado)

    console.log('\nSerá usado o cabo de 25 mm² determinado a partir do critério da capacidade de corrente, por ser de maior bitola')
    console.log('Queda de tensão real usando o cabo de 25 mm²:')
    var sResultado = (Math.sqrt(3)*((iSoc*iFSFinal)+(iSoc2*iFSFinal2)+((iSoc3*iFSFinal3))))/(58*nVolts2*25)
    console.log('s = ' + (sResultado*100))

        




}
