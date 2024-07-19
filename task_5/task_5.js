let number = prompt("Введите число:")
let shiftAmount = parseInt(prompt("На сколько цифр его сдвинуть?"))

let numberString = number.toString()

let shiftedNumberString = ""

for (let i = 0; i < numberString.length; i++) {
    let newIndex = (i + shiftAmount) % numberString.length
    shiftedNumberString += numberString[newIndex]
}

alert(`Сдвинутое число: ${shiftedNumberString}`)
