
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
    console.log('Uma máquina cc de 4 polos, construída com enrolamento imbricado, com 800 condutores ativos')
    console.log('gira a 1800 rpm. O fluxo por polo é 35 mWb. Determine:')

    console.log('\a) A tensão induzida no enrolamento de armadura')
    console.log('Como o enrolamento é imbricado, P = A. A velocidade deve ser convertida de RPM para RAD/S de forma que:')
    console.log('EA = Zo*(n/60)')
    var ncondativos = parseFloat(readlineSync.question('Insira os condutores ativos: '))
    var fluxoporpolo = parseFloat(readlineSync.question('Insira o fluxo por polo: '))
    var rpm2 = parseFloat(readlineSync.question('Insira a rotacao em RPM: '))
    var sResults5 = (ncondativos * (fluxoporpolo*0.001)) * (rpm2/60)
    console.log('EA = ' + sResults5 + ' V')

    console.log('\nb) Se a armadura é projetada para suportar uma corrente de linha máxima de 50 A, qual é a')
    console.log('máxima potência eletromagnética desenvolvida pela armadura?')
    var correnteDeLinhaMax = parseFloat(readlineSync.question('Insira a corrente de Linha maxima: '))
    console.log('PE = Ea*Ia = ' + sResults5*correnteDeLinhaMax)
    console.log('PE = ' +  sResults5*correnteDeLinhaMax + ' kW')

    console.log('\nc) Calcule o torque eletromagnético desenvolvido por esta máquina. ')
    console.log('Pm = Pe -> Twm = EA*IA')
    console.log('T = EA*IA/Wm')
    var sResult6 = sResults5*correnteDeLinhaMax/((rpm2/60)*2*Math.PI)
    console.log('T = ' + sResult6)
    break;

    case '2':
    console.log('Considere um gerador CC em derivação de:')
    console.log('50 kW, Vt =230 V, Rf=58 e RA=0,06')
    console.log('Determina as tensoes induzicas na armadura para condicoes nominais.')
    console.log('\na) Plena carga')

    var Pot6 = parseFloat(readlineSync.question('Insira o valor de potencia em plena carga: '))
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
    
    console.log('\nb) meia-carga --> 25000')
    var Pot7 = parseFloat(readlineSync.question('Insira o valor de potencia em meia carga: '))
    var IL2 = Pot7/Vt
    console.log('IL = ' + IL2)

    console.log('Corrente de campo: If = Vt/Rf')
    var IF2 = Vt/Rf
    console.log('If = ' + IF2)

    console.log('Corrente na armadura: Ia = If+IL')
    var IA2 = IF2+IL2
    console.log('IA = ' + IA2)

    var EA2 = Vt + Ra*IA2
    console.log('EA = ' + EA2)
    break;

    case '3':
    console.log('Um motor CC em derivação de 40 HP, 230 V e 1200 rpm, tem uma corrente nominal de armadura de 150 A e')
    console.log('uma corrente nominal de campo de 5 A. Quando seu rotor é travado, uma tensão de armadura de 10 V (sem as escovas)')
    console.log('produz uma corrente de 150 A e uma tensão de campo de 230 V produz uma corrente de campo')
    console.log('de 5 A. Assume-se que a queda de tensão nas escovas é 1 V. A vazio, com a tensão de terminal igual a 220 V, a')
    console.log('corrente de armadura é igual a 13 A, a corrente de campo é 4,8 A e a velocidade do motor é 1150 rpm.')
    
    console.log('\na)Qual é a potência de saída desse motor em condições nominais')
    var VArm = parseFloat(readlineSync.question('Insira a tensao de armadura: (no caso, 10) : '))
    var IArm = parseFloat(readlineSync.question('Insira a Corrente de armadura: (no caso, 150) : '))
    var sResp1 = VArm/IArm
    console.log(' Resistência da armadura: RA = ' + (sResp1))

    var VCamp = parseFloat(readlineSync.question('Insira a resistencia de campo de campo: (no caso 230) : '))
    var ICamp = parseFloat(readlineSync.question('Insira a corrente de campo: (no caso, 5) : '))
    console.log(' Resistência de campo: Rf = ' + (VCamp/ICamp))

    console.log('\nPerdas a plena carga na armadura: Pa = Ra*Ia²')
    var perdasArmadura = sResp1*(IArm*IArm)
    console.log('PA = ' + perdasArmadura)

    console.log('\nPerdas a plena carga no campo: Pf = Rf*If²')
    var perdasPlenaCarga = (VCamp/ICamp)*(ICamp*ICamp)
    console.log('PA = ' + perdasPlenaCarga)

    console.log('\nPerdas nas escovas: Pescovas = Vescovas*Ia')
    var TPerdasEscovas = parseFloat(readlineSync.question('Insira as perdas de tensao nas escovas: (no caso, 1v) : '))
    var sResults10 = (TPerdasEscovas * IArm)
    console.log('Perdas nas escovas: ' + sResults10)

    console.log('\nPerdas rotacionais = potência de entrada da armadura a vazio:')
    console.log('Prot = Vt*Ia,vazio')
    var tensaoTerminal = parseFloat(readlineSync.question('Insira a tensao terminal: (no caso, 220) : '))
    var correnteTerminal = parseFloat(readlineSync.question('Insira a corrente terminal: (no caso, 13) : '))
    
    var prot = tensaoTerminal*correnteTerminal
    console.log('Perdas rotacionais: ' + prot)

    console.log('\nPotência de entrada (carga nominal): ')
    console.log('Pentrada: Vt*IL ')
    console.log('Pentrada = ' + (VCamp*(IArm+ICamp)))
    //console.log('\Potencia de saida: pSaida = pentrada - pescovas - pcobre - pnucleo - pmec - psuplementares')

}

