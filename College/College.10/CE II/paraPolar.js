let readlineSync = require('readline-sync')
window.transformaRetparaPolar = function(x,y)
{
    const x = readlineSync.question('Insira o valor real' + '\n')
    const y = readlineSync.question('Insira o valor imaginario' + '\n')
    
    m= Math.sqrt(x*x + pow(y,2));
    f = atan( y/x );
    f= f*180 / Math.PI;

    console.log("Modulo convertido foi: " + m + "|_" + f + "°")
}