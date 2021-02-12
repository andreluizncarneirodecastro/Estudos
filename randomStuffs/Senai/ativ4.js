let readlineSync = require('readline-sync')
 
var nome = "Joao"
console.log(nome)
let date = '01/12/1990'
console.log(date)
let idade = 36
console.log(idade)
let telefone = 992919090
console.log(telefone)
let cpf = '411.250.321-x'
console.log(cpf)
let RG = '4352158111'
console.log(RG)
let endereco = 'av 21 ruas 10 e 11'
console.log(endereco)
let email = 'joao@hotmail.com'
console.log(email)
let sexo = 'm'
console.log(sexo)

let salario = 2500.00

let YES = true;

console.log('Empregado ativo? Y - N')

if(YES)
{
    console.log("O Empregado esta ativo");
}

if(!YES)
{
    console.log("O Empregado esta inativo");
}

let impostoDeRenda = salario*0.15
console.log('O imposto de Renda nesse caso sera de : ' + impostoDeRenda)