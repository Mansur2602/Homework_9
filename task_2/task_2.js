let number = parseInt(prompt("Введите число: "), 10)


if (number < 0) {
    number = -number
}

if (number === 0) {
    alert("Количество цифр в числе: 1")
} else {
    let count = 0
    while (number > 0) {
        number = (number - (number % 10)) / 10
        count++
    }
    alert(`Количество цифр в числе: ${count}`)
}