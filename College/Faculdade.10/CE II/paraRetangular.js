let readlineSync = require('readline-sync')
window.transformaPolarparaRetangular = function(x,y)
{
    const x = readlineSync.question('Insira o Modulo: ' + '\n')
    const y = readlineSync.question('Insira a defasagem: ' + '\n')
    
    f= f*Math.PI/180;
    x = m * Math.cos(f);
    y= m *Math.sin(f);

    console.log("Resultado: " + x + " j" + y )
}