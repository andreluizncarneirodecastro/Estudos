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
        
    console.log('SLIDE 1.')
    console.log("Q1) Um circuito estrela-estrela equilibrado possui zy=5|_40° e van 150|_0° com seq positiva. ")
    console.log('Determine as potências ativa, reativa e complexa monofásica e trifásica, além do fator de potência da carga.')

    let van3Modulo = parseFloat(readlineSync.question('vanModulo: '))
    let van3Defasagem = parseFloat(readlineSync.question('vanDefasagem: '))
    let zyModulo3 = parseFloat(readlineSync.question('Zymodulo: '))
    let zyDefasagem3 = parseFloat(readlineSync.question('ZyDefasagem: '))
    
    console.log('\n Ia = van/zy')
    var rmodulo3 = van3Modulo/zyModulo3
    var rDefasagem3 = van3Defasagem - zyDefasagem3
    console.log('Ia = ' + rmodulo3 + "|_" + rDefasagem3)

    console.log('\nA pot complexa monofasica nesta carga eh: ')
    console.log('sa = vp = ip*')
    var sResultado3 = (van3Modulo/Math.sqrt(2)) * (rmodulo3/Math.sqrt(2)) 
    console.log('Sa = ' + sResultado3*2 + "|_" + (zyDefasagem3))
    console.log('Pa = ' + sResultado3*2 * cos(zyDefasagem3) + ' kW')
    console.log('Qa = ' + sResultado3*2 * sen(zyDefasagem3) + ' kVar')
    
    var sResultado4 = sResultado3*2
    var s40 = 3 * sResultado4 
    console.log('\nSa.Trifasico = ' + s40 + "|_" + (zyDefasagem3))
    console.log('Pa.Trifasico = ' + 3*(sResultado3*2 * cos(zyDefasagem3)) + ' kW')
    console.log('Qa.Trifasico = ' + 3*(sResultado3*2 * sen(zyDefasagem3)) + ' kVar')
    
    console.log('O FP eh determinado a partir da razao entre pot. ativa e aparente:')
    var fp = (3*(sResultado3*2 * cos(zyDefasagem3)) / s40)
    console.log('P30/|S30| = ' + fp )
    break;

    case '2':
    console.log('Duas lojas estão instaladas em uma linha de uma concessionária de energia elétrica que funciona')
    console.log('como uma fonte trifásica em estrela de 60 Hz em equilíbrio cuja tensão de fase é Van = 380Vrms.')
    console.log('Supondo que ambas as cargas sejam ligadas em estrela com Z1 = 10 + j16 Ohm por fase e Ptrifasico = 15Kw')
    console.log('com FP 0,7 indutivo, determine as correntes de linha que alimentam as duas lojas e a potência complexa total fornecida.')


    let pottrifasica = parseFloat(readlineSync.question('PotenciaTrifasica: '))
    var van3Modulo1 = parseFloat(readlineSync.question('vanModulo: '))
    var van3Defasagem1 = parseFloat(readlineSync.question('vanDefasagem: '))
    var parteReal = parseFloat(readlineSync.question('z1 Real: '))
    var parteImg = parseFloat(readlineSync.question('z1 Img: '))
    let FP = parseFloat(readlineSync.question('FP: '))


    transformaParaPolar(parteReal, parteImg)
    var il1 = van3Modulo1/m
    var il11 = van3Defasagem1 - f
    console.log('\nSolucao: A corrente de linha da carga 1 eh:')
    console.log('IL1 = ' + il1 + '|_' + il11)

    console.log('\nA corrente da carga 2, pode ser determinada como:')
    var il2 = pottrifasica/(3*van3Modulo1*FP)
    console.log('il2 = ' + il2)

    console.log('\nA fase da corrente eh a fase invertida da impedancia, isto eh: ')
    console.log('il2 = ' + il2 + '|_' + -((Math.acos(FP))*180/Math.PI))

    console.log('\nPortanto a corrente de linha que alimenta ambas as lojas eh, pela LKC:')
    console.log('IL = IL1 + IL2')
    console.log('Insira: ' + il1 + ' ' + il11)
    transformaParaRetangular(il1,il11)
    var xAS = mm
    var xAS2 = nn
    console.log('Insira: ' + il2 + '|_ ' + -((Math.acos(FP))*180/Math.PI))
    transformaParaRetangular(il2,-(Math.acos(FP)))
    var xBS = mm
    var xBS2 = nn
    var xsResults = xAS + xBS
    var xsResults2 = xAS2 + xBS2

    console.log('Insira: ' + xsResults + ' j' + xsResults2)
    transformaParaPolar(xsResults,xsResults2)
    console.log('\nILTotal = ' + m + '|_' +  f)

    console.log('A potencia complexa total fornecida para ambas as lojas eh: ')
    console.log('s30 = ' + 3*van3Modulo1*m + '|_' + -f)


}
