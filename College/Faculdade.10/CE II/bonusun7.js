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
    console.log('Um conjunto de 20 lampadas de 100w e 127 cada, deve ser instalado em um circ. com 20m de comprimento')
    console.log('A menor seção dos cabos isolados com PVC 70°C que podem ser usados nessa instalação deve garantir Q.T de 2% e 3%')

    var nLampadas = parseFloat(readlineSync.question('Insira o numero de lampadas: '))
    var nPotencia = parseFloat(readlineSync.question('Insira a potencia em Watts: '))
    var nVoltagem = parseFloat(readlineSync.question('Insira a Voltagem: '))
    var nComprimento = parseFloat(readlineSync.question('Insira o comprimento do Local: '))
    var nporcentagem1 = parseFloat(readlineSync.question('Insira a primeira porcentagem: '))
    var nporcentagem2 = parseFloat(readlineSync.question('Insira a segunda porcentagem: '))

    var nResultado = 2*(1/58)*(1/((nporcentagem1/100)*(nVoltagem*nVoltagem)))*(nLampadas*nPotencia*nComprimento)
    console.log('Resultado para :' + (nporcentagem1/100) + 'eh de :' + nResultado + 'mm²')

    var nResultado2 = 2*(1/58)*(1/((nporcentagem2/100)*(nVoltagem*nVoltagem)))*(nLampadas*nPotencia*nComprimento)
    console.log('Resultado para :' + (nporcentagem2/100) + 'eh de :' + nResultado2 + 'mm²')

    case '3':
    console.log('Analise a tabela a seguir que apresenta as cargas de um circuito de iluminação e suas respectivas distâncias até o quadro de distribuição. ')
    console.log('Carga (W): 200, 600, 800, 500')
    console.log('d(m): 10, 20, 30, 50')
    console.log('Determine a menor seção transversal do cabo BT (PVC de 70°C) para alimentar este conjunto de carga de forma que a queda de tensão seja inferior à 3%. ')
    console.log('Todas as cargas são monofásicas de 127 V e os cabos serão instalados em eletroduto embutido em alvenaria.')

    var ncarga1 = parseFloat(readlineSync.question('Insira a carga 1 em Watts: '))
    var nComprimento1 = parseFloat(readlineSync.question('Insira o comprimento do 1: '))
    var ncarga2 = parseFloat(readlineSync.question('Insira a carga 2  em Watts: '))
    var nComprimento2 = parseFloat(readlineSync.question('Insira o comprimento do 2: '))
    var ncarga3 = parseFloat(readlineSync.question('Insira a carga 3  em Watts: '))
    var nComprimento3 = parseFloat(readlineSync.question('Insira o comprimento do 3: '))
    var ncarga4 = parseFloat(readlineSync.question('Insira a carga 4  em Watts: '))
    var nComprimento4 = parseFloat(readlineSync.question('Insira o comprimento do 4: '))
    var nVoltagem2 = parseFloat(readlineSync.question('Insira a Voltagem: '))
    var nporcentagem1 = parseFloat(readlineSync.question('Insira a porcentagem desejada: '))


    var nResultado = 2*(1/58)*(1/((nporcentagem1/100)*(nVoltagem2*nVoltagem2)))*((ncarga1*nComprimento1)+(ncarga2*nComprimento2)+(ncarga3*nComprimento3)+(ncarga4*nComprimento4))
    console.log('Resultado para :' + (nporcentagem1/100) + 'eh de :' + nResultado + 'mm²')


}
