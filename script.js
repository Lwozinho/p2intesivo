alert("Hello World!")

let firstNumber = prompt("Digite um número")
let secondNumber = prompt("Digite um número")
firstNumber = Number(firstNumber)
secondNumber = Number(secondNumber)


const sum = firstNumber + secondNumber
alert('Soma:' + sum)

const isNumber = 10

if (typeof isNumber == 'number') {
  alert('é um número')
} else {
  alert('Não é um número')
}

const isString = "é uma string"

if(typeof isString == 'string') {
  alert('é uma string')
} else {
  alert('Não é uma string')
}

const isBoolean = true

if (typeof isBoolean == 'boolean') {
  alert('é um booleano')
} else {
  alert('não é um booleano')
}

const sub = firstNumber - secondNumber

alert(sub)

const mult = firstNumber * secondNumber

alert(mult)

const div = firstNumber / secondNumber 

alert(div)

const isEvenNumber = 4

if (isEvenNumber % 2 == 0) {
  alert('É um número par')
} else {
  alert ('Não é um número par')
}

const isOddNumber = 5

if (isOddNumber % 2 != 0) {
  alert('É um número ímpar')
} else {
  alert('Não é um número ímpar')
}