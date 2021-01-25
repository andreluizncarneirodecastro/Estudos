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
        
    console.log('Daniel, vídeo sobre transformadores.')
    console.log('Quando TEM inversao de POLARIDADE.')

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
    var sF = -f
    //converter pra polar
    console.log('Insira o valor de: ' + z2Real + '+ j' + z2Img)

    transformaParaPolar(z2Real,z2Img)

    console.log('\nV1 = I1*Z2"')
    results4 = I1Modulo4 * m
    results5 = I1Def4 + f
    console.log('V1 = ' + results4 + '|_ ' + results5 + ' °')

    console.log('\nTensao no secundario: ')
    v22 = 1/a * results4
    console.log('vSecundario = ' + v22 + '|_ ' + ((results5)+180) + '°')

    console.log('I Secundario: ')
    var I22 = -a * I1Modulo4
    console.log(sF)
    console.log('I Secundario: ' + I22 + '|_' + ((sF)+180) + '°')
    break;

    case '2':
    console.log('Diferenciado Aula Daniel; EX3:')
    console.log('a)A corrente fornecida pela fonte')
    console.log('b)A tensao de saida Vo')
    console.log('c)A corrente fornecida pela fonte')
    
    vanModulo4 = parseFloat(readlineSync.question('vanModulo: '))
    vanDef4 = parseFloat(readlineSync.question('vanDefasagem: '))
    R14 = parseFloat(readlineSync.question('Resistor 1: '))
    C14 = parseFloat(readlineSync.question('Capacitor: '))
    I14 = parseFloat(readlineSync.question('Indutor 1: '))
    un1 =  parseFloat(readlineSync.question('\nTem uma relacao de Quanto? :'))
    un2 =  parseFloat(readlineSync.question('por? :'))
    console.log(un1 + ' : ' + un2)
    console.log('\nSolução:')
    a = un1/un2
    console.log('a = ' + a)
    z2Img = 0
    z2Real = (a*a) * (I14)
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
    var sF = -f
    //converter pra polar
    console.log('Insira o valor de: ' + z2Real + '+ j' + z2Img)

    transformaParaPolar(z2Real,z2Img)

    console.log('\nV1 = I1*Z2"')
    results4 = I1Modulo4 * m
    results5 = I1Def4 + f
    console.log('V1 = ' + results4 + '|_ ' + results5 + ' °')

    console.log('\nTensao no secundario: ')
    v22 = 1/a * results4
    console.log('vSecundario = ' + v22 + '|_ ' + ((results5)-180) + '°')

    console.log('I Secundario: ')
    var I22 = a * I1Modulo4
    console.log(sF)
    console.log('I Secundario: ' + I22 + '|_' + ((sF)-180) + '°')
    console.log('\nA tensao de saida v0')
    var v0 = I14 * I22 
    console.log('Vo = ' + v0 + '|_ ' +((sF)-180))

    console.log('\nA potencia complexa fornecida na fonte')
    var sS = vanModulo4 * I1Modulo4
    console.log('S = ' + sS + '|_' + -sF) 
}