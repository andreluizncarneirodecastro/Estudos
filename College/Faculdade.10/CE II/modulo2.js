///////// -- POTENCIA EM SISTEMAS TRIFÁSICOS -- MODULO 2////////
function transformaRetparaPolar(x1,y1)
{
    m= Math.sqrt(x1*x1 + Math.pow(y1,2));
    f = Math.tan( y1/x1 );
    f= (f*180) / Math.PI;

    console.log("Modulo convertido foi: " + m + "|_" + f + "°")
}

let readlineSync = require('readline-sync')
console.log("Modulo 2 - Potencia em Sistemas Trifásicos" + "\n")
console.log("1. TRI21.Exemplo 1")
console.log("2. ")
console.log("3. ")
const expr = readlineSync.question('Qual eh o tipo de ex?' + '\n')

switch (expr) 
{
    case '1':
        console.log('temos uma fonte, com valor de 208Vnom')
        console.log('CARGA EM DELTA, com valor de z = 12 + j9')
        console.log('\nPede-se: Vl, Vfi, Il, Ifi, Cosfi, P, Q, S')
        
        let vFase1 = parseFloat(readlineSync.question('Modulo de Van: ')) //módulo
        let vFaseDefasagem1 = parseFloat(readlineSync.question('Valor da defasagem de Van: '))  //fase
    
        let ptReal1 = parseFloat(readlineSync.question('\nParte real na carga: ')) //módulo
        let ptImg1 = parseFloat(readlineSync.question('Parte img na carga: '))  //fase
    
        let vLinha1 = vFase1
        let vLinhaDefasagem1 = vFaseDefasagem1 
        console.log('Vf = Vl = ' + vFase1) 
 
        //let iFDefasagem1 = vLinhaDefasagem1;
        console.log(transformaRetparaPolar (ptReal1,ptImg1))

        //let iFFase1 = vLinha1/ptReal1


}
