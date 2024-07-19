let min = 1
let max = 100

while (true) {
    let guess = Math.floor((min + max) / 2);
    let ask = prompt(`Загаданное число больше, меньше или равно ${guess}? (Введите больше, меньше или равно)`)
    
    if (ask === 'равно') {
        alert(`Загаданное число - ${guess}`)
        break
    } else if (ask.toLowerCase() === 'больше') {
        min = guess + 1
    } else if (ask.toLowerCase() === 'меньше') {
        max = guess - 1
    }
}


