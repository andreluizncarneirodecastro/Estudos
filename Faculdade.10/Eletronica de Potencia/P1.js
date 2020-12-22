console.log('------------------questao 1------------------')

var pi = Math.PI
var sqrt = Math.sqrt
var sen = Math.sin
var cos = Math.cos
var alfa7 = [pi/3, (2*pi)/3]

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


console.log('----------------4------------')

var Vrms = 127
var VfMax = Vrms * sqrt(2)
var Vmedio45
var Vrms45
var Vmedio120
var Vrms120

Vmedio45 = ((3*VfMax)/(2*pi))*(1 + cos(pi/4 + (pi/6)))
console.log('Vmedio45: ' + Vmedio45)

var prod5 = (5/24 - (((2*pi)/3)/(4*pi)) + ((1/(8*pi)) * sen( (pi/3) + 2*(pi/4))))
var prod6 = Math.pow(prod5, 0.5)
Vrms45 = sqrt(3)*VfMax * prod6
console.log('Vrms45: ' + Vrms45 + '\n') 





Vmedio120 = ((3*VfMax)/(2*pi))*(1 + cos(2*pi/3 + (pi/6)))
console.log('Vmedio120: ' + Vmedio120)

var prod3 = (5/24 - (((2*pi)/3)/(4*pi)) + ((1/(8*pi)) * sen(pi/3 + 2*((2*pi)/3))))
var prod4 = Math.pow(prod3, 0.5)
Vrms120 = sqrt(3)*VfMax * prod4
console.log('Vrms120: ' + Vrms120 + '\n') 
