/*

    10.08
--------------------------------------------------------------------------------------------------------------------------
Com relação à eletronica de potencia, qual o modo de operação dos transistsores e o que isto acarreta para o conversor Estático

(C) Opera no modo chaveado(para aumentar o rendimento) mas tem a redução das perdas no chaveamento.


    1.5 Retificadores monofásicos não controlados

    1. Para o circuito retificador de meia onda mostrado abaixo, determine:

a) tensão média na carga
b) a corrente media na carga
c) a corrente eficaz na carga
d) a potência transferida ao resistor

*/
console.log('\n\n---------------------EX1----------------------')
var sen = Math.sin
var sqrt = Math.sqrt
var pi = Math.PI
var r1 = 100

var vrms = 127
var vPico = 127*(sqrt(2))

console.log('---A---')
var VmediaCarga = vPico/pi 
console.log('Tensao media na carga: ' + VmediaCarga)

console.log('---B---')
var ImediaCarga = VmediaCarga/r1
console.log('Corrente media na carga: ' + ImediaCarga)

console.log('---C---')
VrmsCarga = (vPico/2)
IrmsCarga = VrmsCarga/r1
console.log('A corrente eficaz na carga: ' + IrmsCarga)

console.log('---D---')
Pmedia = (VrmsCarga*IrmsCarga)
console.log('A potencia transferida ao resistor ' + Pmedia)

/*  
                     17/08 
    1.5 Retificadores monofásicos não controlados 
    Ex2. 
 Para o retificador de onda completa em ponte a seguir, considerando os diodos ideais,
 determine a tensão e corrente média na carga, respectivamente:

*/

console.log('\n\n---------------------EX2---------------------')


console.log('---A---')
var Vrms2 = 220
var vPico2  
vPico2 = Vrms2*sqrt(2)
var r2 = 10
console.log('Tensão de Pico será: ' + vPico2)

console.log('---C---')
vs = (1/10)*vPico2
console.log('Tensão de Pico no secundário será: ' + vs)

console.log('---D---')
var VmediaCarga2 = (2*vs)/pi
var VrmsCarga = vs/sqrt(2)
console.log('O Vmedio na carga sera: ' + VmediaCarga2 + ', Vrms: ' + VrmsCarga)
console.log('SEMPRE VRMS > VmedioCarga')

console.log('---E---')
var Imedia = VmediaCarga2/r2
var Irms = VrmsCarga/r2
console.log('Corrente Media: ' + Imedia + ', Irms: ' + Irms) 

/* EX 3 */

console.log('\n\n---------------------EX3---------------------')
/*com relação aos retificadores monofásicos não controlados,
qual das alternativas abaixo, mostra os fatores para determinação da tensão
média e RMS em circuitos retificadores de onda completa, respectivamente? */


//para diodos IDEAIS
Vrms3 = 1/sqrt(2)
Vmedia3 = 2/pi
console.log('Vmedia3: ' + Vmedia3 + ', Vrms3: ' + Vrms3)

console.log('\n\n---------------------EX4---------------------')
/* Com relação à eletronica de potencia, o que melhor caracteriza
o fato de os conversores estáticos operarem com alto rendimento? */
console.log('Utilizam transistores especiais operando como chave eletronica (ligado/desligado)')


/*
                    aula 24-08

1) Um retificador trifásico de meia-onda não controlado, está alimentando
um banco de resistencia cujo valor total é R=10Ohm. A fonte c.a fornece 
127V eficaz por fase.
Determine

A) A tensão media e a corrente média na carga

B) As especificações de tensao e correntes para os diodos
*/


console.log('\n\n---------------------EX5---------------------')
//tensao de faze 179.6
VLinha = 179.6*sqrt(3)
r5 = 10
console.log(VLinha)
vmediaCarga5 = (3*VLinha)/(2*pi) 
console.log('A) A tensão media e a corrente média na carga: ' + vmediaCarga5)

//corrente media
Imedia5 = vmediaCarga5/r5
console.log('A corrente media na carga eh de: ' + Imedia5)

/*
Um retrificador trifásico em ponte, não controlado, está ligado a uma fonte
conectada em estrela que fornece 220V R.M.S entre linhas. Esse mesmo retificador
alimenta uma carga resistiva ue consome uma corrente média de 20A.
Determine:

A) A tensão média na saída do retificador

B) As espeficicações para os diodos da ponte retificadora
*/
console.log('\n\n---------------------EX6---------------------')
//Conexão em Estrela = Y | VL = 220V | IMediaCarga  
imediaCarga6 = 10
//Não controlado (=Diodo)
//ELE DEU EM VRMS, transformar VRMS para de Linha
vrms6 = 220
VfaseMax6 = (220/sqrt(3))*sqrt(2)
VmedioCarga6 = (3*sqrt(3)*VfaseMax6)/pi
console.log('O valor medio da carga sera de : ' + VmedioCarga6)


/*

Para o retificador monofásico, controlado em ponte a seguir, determine a tensão média e eficaz na carga,
respectivamente, para o angulo de disparo de 90°

Queda de tensão de SCR = 1V
Vca = 179.6           sen(377.t) 
Relação de 3:1

*/
console.log('------------------EX 7------------------')

var alfa7 = [0, pi/6, pi/4, pi/2, (2*pi)/3]
var cos = Math.cos

console.log('\n ')

var Vp = (179.6/3)-2
var r = 30
var x = alfa7.length

for (i=0; i<x; i++){
  var conv = alfa7[i] * (180/pi);
  Vmed = (Vp / pi) * (1 + cos(alfa7[i]))
  Vrms = (Vp / sqrt(2)) * sqrt(1 - (alfa7[i]/pi) + (sen(2 * alfa7[i])/(2*pi)))
   P = (Math.pow(Vrms,2))/r
  console.log('[' +  conv.toFixed(0) + '°]' + '--> Vmedio = ' + Vmed + ', VrmsCarga = ' + Vrms + ", P = " + P)
}

console.log('Quando é 0° seria a potencia MAX.')
console.log('\n')

