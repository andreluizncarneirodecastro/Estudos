let n = require('prompt-sync')();
let m = require('prompt-sync')();
let soma = 0
let soma2 = 0
console.log('-------- 1. Defina o que é exatidao -------- ')
console.log('Exatidão: refere-se ao grau de concordância de uma medida com seu valor verdadeiro, ou seja, quanto mais próximo do valor verdadeiro correspondente, mais exata é a medida \n')

console.log('-------- 2. Defina o que é precisao -------- ')
console.log('Exatidão: refere-se ao grau de concordância de uma medida com seu valor verdadeiro, ou seja, quanto mais próximo do valor verdadeiro correspondente, mais exata é a medida. Ambas as figuras mostradas demonstram ser precisas, alvo marcado muito próximo um do outro \n')

console.log('As vezes o instrumento pode ser preciso e nao exato, ou exato e nao preciso \n')

console.log('-------- 3. Define as três categorias de erros -------- ')

console.log('Grosseiro, sistemático, aleatórios ou acidentais \n')
console.log('Grosseiros sao aqueles cometidos por falha humana. É mais difcil de evitar, por falta de prática, não conhecer o instrumento, é mais dificil de evitar, mas temos que procurar sempre eliminar os erros existentes. Recomenda-se também, que sempre tenha repetições das medições exercidas. Executar ao menos 3 vezes uma mesma medição, pra evitar o erro grosseiro, evitar estar destraido, ver a escala, pontos corretos. \n')
console.log('Sistemático (Ocorrido por problemas externos).  A questão da temperatura influencia de mais também diretamente. A questão do instrumento também, se esta calibrado indevidamente. \n')
console.log('Aleatorios, mais referentes a fonte de ruido, uma falha do observador, mas não uma falha que ele provocou. Um exemplo, o operador esta fazendo a medição e tem um problema de visão que ele não saiba, ou problema de audição no caso. São problemas ai que não estão inerentes a uma falha direta do operador. As vezes nem o operador tenha ciencia da falha que esta ocasionando, por isso, considerada uma falha aleatória \n')

console.log('-------- 4. Dois procedimentos experimentais foram realizados para medir a mesma grandeza física, com o procedimento A, foram obtidos os resultados: 300, 307, 305 e 297. Com o procedimento B, obtivemos: 300, 325, 345 e 273. Entao podemos concluir que o primeiro procedimento é mais exato que o segundo? -------- \n')
b = [300, 307, 305, 297]
for(i=0; i<4; i++){
    soma += b[i]
}
console.log(soma/4)

c = [300, 325, 345, 273]
for(i=0; i<4; i++){
    soma2 += c[i]
}
console.log(soma2/4)

console.log('-------- 5 -------')
console.log('Para um sensor de temperatura com range de 20 a 270° C o calor medido 120°C, determine o intervalo provavel do valor real para as seguintes condicoes. Exatidao 1% span  \n')
let valorReal
let valorReal2
let valorMedido = 120
let span = 270-20
valorReal = valorMedido + (1/100 * span)
valorReal2 = valorMedido - (1/100 * span)
console.log('Intervalo: ' +  valorReal2 + ' <- ' + valorMedido +  ' -> ' + valorReal + '\n')

console.log('-------- 6 -------')
console.log('Uma malha de instrumentação é composta pelos seguintes equipamentos \n')
console.log('Termopar = precisao de +-0.4% do valor medido. Valor medido = 400°C')
console.log('Fio de extensao = precisao de +- 1°C')
console.log('Registrador = precisao de +- 0.7°C ')
console.log('Qual faixa de leitura para esta malha?')

console.log('Considerando cada um dos equipamentos...')
sqrt = Math.sqrt
pow = Math.pow
let t = (0.4/100)*400
let f = 1
let r = 0.7
let pm = sqrt((t*t) + (f*f) + (r*r))

console.log(pm)

console.log('Faixa: ' + (400-pm) + ' <- 400 -> ' + (400+pm))

console.log('-------- 7 -------')
console.log('Um equipamento de pressao possui um range de 7 a 20 psi, sendo que possui um sistema de comunicação que fornece uma saída de corrente com um range de 4 a 20mA. Se a leitura do equipamento mostrador esta recebendo a informacao de 8MA, qual deve ser o valor de pressao correspondente para esta situação? ')
console.log('regrinha de 3')

console.log('-------- 8 -------')
console.log('Qual o medidor de temperatura trabalha com dois diferentes tipos de metais e tem como uma de suas principais vantagens uma grande faixa de medição? \n')
console.log('Bimetálico')

console.log('-------- 9 -------')
console.log('dentre os medidores de temperatura em especial o RTD, qual o material mais comum em sua construção? \n')
console.log('Platina ')

console.log('-------- 10 -------')
console.log('Qual o medidor de temperatura trabalha com dois diferentes tipos de metais e apresenta como característica de medição a ddp entre esses dois materiais? \n')
console.log('Termopar, principio de funcionamento é a ddp entre dois materiais')

console.log('-------- 11 -------')
console.log('Entre os medidores de vazão qual o tipo mais utilizado para esta funcao? \n')
console.log('Medidor por perda de carga. Os que utilizam perda de carga são mais utilizados pra medir vazão. (Tubo e placa de orificio)')

console.log('-------- 12 -------')
console.log('Em relação a resposta anterior, qual medidor é mais comum de ser aplicado na industria? \n')
console.log('Placa de Oríficio, por ele ser robusco e simples de utilização e instalação, ele é o mais comum!')

console.log('-------- 13 -------')
console.log('Quais as possibilidades de orificios utilizados nos medidores? \n')
console.log('Temos 3: Concentrico, Excentrico e Segmental. Quando utiliza placa de orificio, temos que pensar qual é o mais recomendado pra cada tipo de situacao. CONCENTRICO, n tem solido em suspensao. EXCENTRICO, pode possuir solido de suspensao. SEGMENTAL, pode ter solidos em suspensao em especial, grande quantidade de solidos.')

console.log('-------- 14 -------')
console.log('Qual medidor de vazão utiliza como principio de medição a F.E.M? \n')
console.log('Medidor Eletromagnetico, que funciona pela força eletromotriz.')

console.log('-------- 15 -------')
console.log('Conforme estudado na aula prática de medicao de temperatura, qual a necessidade de realização do primeiro teste demonstrado em aula? \n')
console.log('Ele serve para verificarmos se o sensor esta funcionando, se esta realmente calibrado. Fazendo esse teste temos que ter como resposta uma variação entre a leitura de MIN e MAX. Tendo essa variação o nosso sensor esta funcionando corretamente.')

console.log('-------- 16 -------')
console.log('QL a necessidade de utilização dos LEDS? \n')
console.log('Indicações de valores das temperaturas. Cada escala pré definida pelo programador ou solicitada pelo cliente que fossem definidas para cada uma das cores. Também poderia ser um LCD, um acionamento de um ventilador, ou de um outro equipamento para resfriar ou esquentar. Podemos substituir esses leds por outros equipamentos que indiquem valores de temperatura pre definido')

console.log('-------- 17 -------')
console.log('Conforme estudado na aula prática de medição de vazão, qual a utilização de um PID e qual o significado das letras? \n')
console.log('Proporcional - Integral - Derivativo, sistema utilizado para controle, que tras uma resposta mais eficiente mais utilizado para malhas fechadas, de quando tinha um ruido no caso, ela conseguia responder de acordo com o valor previsto pra aquela programação especifica. Então temos que conhecer a linha que vai ser inserida o medidor de vazão e ai sim adequarmos a programação em malha fechada para o sistema da resposta satisfatória em um periodo de tempo mt curto')

console.log('-------- 18 -------')
console.log('Quais os possíveis disturbios que podem ser inseridos no sistema que foram demonstrados em aula? \n')
console.log('Ruido de medição e Disturbios aleatórios. Não conseguimos inserir ruidos externos utilizando um simulador, ja no simulador de vazão que é um mais real conseguiamos colocar uns disturbios que poderiam aparecer realmente numa linha de produção mais convencional. ENTÃO, dava a possibilidade de colocar um RUIDO que poderia ter um ERRO no equipamento de MEDIÇÃO. E também dava a possibilidade de colocar disturbios aleatórios, que são questões externas que podem surgir durante o dia a dia')













