
console.log('--------------.::LISTA 1::.---------------')
/*  .::EX 1::.
Para o retificador de onda completa em ponte a seguir, determine:
A) A forma de onda da tensão na carga e sua amplitude, 
considerando Vdiodo = 0,7V;
B) A tensão média e eficaz na carga;
C) A corrente média e eficaz na carga;
D) As especificações para os diodos;
*/
console.log('------------------EX 1------------------')
var pi = Math.PI
var alfa = [0, pi/6, pi/4, pi/2, (2*pi)/3]
var sqrt = Math.sqrt
var sen = Math.sin
var cos = Math.cos
var r1 = 10
// A)
var Vp1 = 220*sqrt(2)
var vs1 = 1/10 * Vp1 
var Vrp1 = vs1 - 2*0.7 
console.log('a) A forma de onda na tensão de carga e na amplitude.')
console.log('VRP = ' + Vrp1)

// B)
var Vmedio1 = (2*Vrp1)/pi
var vrms1 = Vrp1/sqrt(2)
console.log('b) A tensao media e eficaz na carga. ')
console.log('Vmedio: ' + Vmedio1 + ', Vrms: ' + vrms1)

//C
var Imedio1 = Vmedio1/r1
var Irms = vrms1/r1 
console.log('A corrente média e eficaz na carga')
console.log('Imedio: ' + Imedio1 + ', Irms: ' + Irms +"\n\n")

//D

/*  .::EX 3::.
Para o retificador controlado a seguir, determine:
a) A forma de onda da tensão na carga, para um ângulo de disparo de 450
b) A tensão média e eficaz na carga para ângulos de disparo de 0° 30° 45° 90° 120°) 
c) A potência na carga para esses ângulos de disparo.
OBS: Queda de tensão do SCR= 1,0V e Vca = 179,6.sen(377t) – Volts
*/
console.log('------------------EX 3------------------')

var Vp = 177.6
var r = 30
var x = alfa.length

for (i=0; i<x; i++){
  var conv = alfa[i] * (180/pi);
  Vmed = (Vp / pi) * (1 + cos(alfa[i]))
  Vrms = (Vp / sqrt(2)) * Math.pow((1 - (alfa[i]/pi) + (sen(2 * alfa[i])/(2*pi))),0.5)
  console.log(Vrms)
  P = (Math.pow(Vrms,2))/r
  console.log('[' +  conv.toFixed(0) + '°]' + '--> Vmedio = ' + Vmed + ', VrmsCarga = ' + Vrms + ", P = " + P)
}

console.log('\n')

/* ..::EX 4::..
Para o retificador controlado a seguir, determine:

A) A forma de onda da tensão na carga, para um ângulo de disparo de 450
B) A tensão média e eficaz na carga para ângulos de disparo de 0°, 45°, 90°, 120°, 170°
C) A potência na carga para esses ângulos de disparo;
D) Qual é o ângulo de disparo que fornece a máxima potência na carga e qual o valor dessa potência?
*/

console.log('------------------EX 4 ------------------')
var alfa2 = [0, pi/6, pi/4, pi/2, (2*pi)/3, (17*pi)/18];;
Vp2 = 89;
r2 = 50;
var x2 = alfa2.length

for (i=0; i<x2; i++){  
  var conv = alfa2[i] * (180/pi);
    Vmed = (Vp2 / (2*pi)) * (1 + cos(alfa2[i]))
    Vrms = (Vp2 / sqrt(2)) * sqrt((1/2) - (alfa2[i]/(2*pi))) + (sen(2 * alfa2[i])/(4*pi))
    P = (Math.pow(Vrms,2)) / r2
    console.log('[' +  conv.toFixed(0) + '°]' + '--> Vmedio = ' + Vmed + ', VrmsCarga = ' + Vrms + ", P = " + P)
}

console.log('\n')



/* lista 2 

Um retificador Trifásico de meia-onda controlado está alimentando um banco
de Resistência cujo valor total é R=100 Ohms.
A fonte C.A fornece 127 V, eficaz por fase. Determine. 

A) A tensão média e RMS na carga para os ângulos de disparo
*/


console.log('--------------.::LISTA 2::.--------------')

var Vrms = 127
var VfMax = Vrms * sqrt(2)
var Vmedio30
var Vrms30
var Vmedio120
var Vrms120

Vmedio30 =  ((3* sqrt(3) *VfMax ) / (2*pi)) * cos(pi/6)
console.log('Vmedio carga 30: ' + Vmedio30.toFixed(2))

var prod1 = (1/6 + (sqrt(3)/(8*pi))* cos(2*(pi/6)))
var prod2 = Math.pow(prod1, 0.5)
Vrms30 = sqrt(3)*VfMax * prod2
console.log('Vrms30: ' + Vrms30 + '\n') 

Vmedio120 = ((3*VfMax)/(2*pi))*(1 + cos(2*pi/3 + (pi/6)))
console.log('Vmedio120: ' + Vmedio120)

var prod3 = (5/24 - (((2*pi)/3)/(4*pi)) + ((1/(8*pi)) * sen(pi/3 + 2*((2*pi)/3))))
var prod4 = Math.pow(prod3, 0.5)
Vrms120 = sqrt(3)*VfMax * prod4
console.log('Vrms120: ' + Vrms120 + '\n') 

console.log('--------------.::LISTA 3::.--------------')
/*Com relação aos semicondutores de potência, os chamados Tiristores constituem o
nome de uma família de componentes de 4 ou 5 camadas. Assim sendo, das
associações de componentes mostrados abaixo, qual apresenta somente componente
da família dos tiristores? */
console.log('1) E. GTO e SCR.')

/* Com relação à eletrônica de potência, o que melhor caracteriza o fato de os
conversores estáticos operarem com alto rendimento? */
console.log('2) B. Utilizam transistores bipolares em alta frequência.')

/* 4) Um conversor CA - CA monofásico é utilizado para o aquecimento de uma
carga resistiva de R= 5Ohm e a tensão de entrada é Vs=127V, 60Hz. A chave com tiristor é
ligada durante n=125 ciclos e desligada durante m=75 ciclos. Determinar: A tensão
eficaz de saída do conversor. */
console.log('4)')
var m = 75
var n = 125
var vs5 = 127
var vrms5 = vs5 * sqrt(n/(m+n))
console.log('Vrms sera de :' + vrms5 + '\n') 

/* 5) Para o circuito conversor CA – CA, monofásico, mostrado abaixo, determine:
A tensão MÉDIA e EFICAZ na carga para ângulo de disparo de 45°, respectivamente. */

console.log('5)')
console.log('A tensão media produzida na carga pelos conversores ca-ca é sempre nula')

var VoEficaz = (180/2)-1
var Vef = 0

Vef = VoEficaz * sqrt(1/2 - (pi/4)/(2*pi) + (sen(90))/(4*pi))
console.log('Medio: 0 e VRMS: ' + Vef + '\n')

/* Um conversor CA - CA, trifásico, de onda completa, alimenta uma carga resistiva
conectada em estrela de R= 10Ohm/fase e a tensão de linha de entrada é de 380V, 60Hz.
O ângulo de disparo é a= pi/3. Determinar: A tensão de fase eficaz (RMS) de saída. */

console.log('6)')

var vs6 = 380/sqrt(3)
var Vrms6 = [(1/pi)*((pi/12) + (3*sen(2*(pi/3)))/16 + (sqrt(3)*cos(2*(pi/3)))/16 )] 
var Vrm62 = Math.pow(Vrms6, 0.5)
var Vrms63 = sqrt(6)*vs6 *  Vrm62

console.log('Vrms = ' + Vrms63)
console.log('\n \n')

console.log('--------------.::LISTA 4::.-------------- ')

/*

--- QUESTÃO 1 - L4 ---

Para o circuito abaixo, determine:
A) A forma de onda da tensão e corrente na carga, para um ângulo de disparo de 45°;
B) A tensão MÉDIA e EFICAZ na carga para ângulos de disparo de 45°, 120°
C) A potência na carga para esses ângulos de disparo

*/
console.log('------------------QUESTAO 1------------------')

console.log('A tensão media produzida na carga pelos conversores ca-ca é sempre nula')

var VoEficaz = (180/2)-1
var Vef1 = 0
var Vef2 = 0

Vef1 = VoEficaz * sqrt(1/2 - (pi/4)/(2*pi) + (sen(90))/(4*pi))
console.log('Medio: 0 e VRMS: ' + Vef1)
Vef2 = VoEficaz * sqrt(1/2 - (((2*pi)/3)/(2*pi) + (sen(240))/(4*pi)))
console.log('Medio: 0 e VRMS: ' + Vef2)
 
P = (Math.pow(Vef1,2)) / 50
console.log('A potencia para 90 sera de ' + P)
P2 = (Math.pow(Vef2,2)) / 50
console.log('A potencia para 120 sera de ' + P2)

console.log('\n')


/*
  --- Questao 2 L4 ---
Um conversor ca-ca monofásico serve para controlar a temperatura da água de um chuveiro de
resistência interna R=10 Ohm e com alimentação monofásica de 127V(RMS), 60Hz. Sabendo-se que
para cada 100W a temperatura da água aumenta de 100C além da temperatura natural (250C),
Determine:
A) O ciclo de trabalho K para que a água atinja 600C;

B) Se fosse utilizado um circuito bidirecional com controle de fase, qual o ângulo  a ser
usado, para que a água atinja os mesmos 600C.

*/

console.log('------------------QUESTAO 2------------------')

console.log('Começando pelo B')

Pq2 = (10*60-250)
VrmsQ2 = sqrt(Pq2*10)
console.log('b) Vrms = ' + VrmsQ2)

kQ2 = Math.pow((VrmsQ2/127),2)
console.log('a) Valor de k: ' + kQ2 + ' ou ' + kQ2*100 + '%')


console.log('------------------QUESTAO 4------------------')
/* 4) Um conversor CA - CA monofásico é utilizado para o aquecimento de uma
carga resistiva de R= 5Ohm e a tensão de entrada é Vs=127V, 60Hz. A chave com tiristor é
ligada durante n=125 ciclos e desligada durante m=75 ciclos. Determinar: A tensão
eficaz de saída do conversor. */
console.log('4)')
var mQ4 = 75
var nQ4 = 125
var vs5Q4 = 127
var vrms5Q4 = vs5Q4 * sqrt(nQ4/(mQ4+nQ4))
console.log('Vrms sera de :' + vrms5Q4 + '\n') 


console.log('------------------QUESTAO 3/6------------------')
/*

                  Questao 3/6
Um controlador de tensão CA, trifásico, bidirecional, alimenta uma carga resistiva conectada em
estrela de R= 10 e a tensão de linha de entrada é de 380V, 60Hz. O ângulo de disparo é a= pi/3.
Determinar: A tensão de fase eficaz de saída
*/

anguloQ3 = pi/3
RQ3 = 10
VLQ3 = 380
VSQ3 = VLQ3/sqrt(3)

reQ3 = ((1/pi)*(pi/12 + ((3*sen(2*anguloQ3)/16) + (sqrt(3)*cos(2*anguloQ3)/16))))
console.log(reQ3)
reQ32 = Math.pow(reQ3,0.5)
reQ32 = reQ32 *sqrt(6)*220,0.5
console.log('a) A tensão de fase eficaz de saída, sera:' + reQ32)

potQ3 = Math.pow(reQ32,2)
potQ3 = potQ3 / RQ3 
console.log('b) A potência desenvolvida na carga: ' + potQ3 + ' Watts' )

/*
Um engenheiro foi encarregado de projetar uma "soft-starter" para alimentar um motor CA
assíncrono de 7,46 kW – trifásico de 1800 r.p.m. nominal. A tensão eficaz de linha é 220V,
60Hz. A impedância por fase é Z= 3600 . Os requisitos de projeto são: a) Redução das
harmônicas de ordem "3n" que circulam pela linha; b) Usar S.C.R.; c) A máquina deverá
acelerar segundo a equação = (14,736 x VRMS na carga.) r.p.m. Determine:
A) A topologia de conversor CA-CA a ser empregado;
B) O valor de  que produza 50% da potência nominal na máquina e logo a seguir
a velocidade que a máquina atingirá para essa potência.
*/

