let num1 = +prompt("Введите первое число")
let num2 = +prompt("Введите второе число")


while (num1 !== num2) {
    if (num1 > num2) {
        num1 -= num2
    } else {
        num2 -= num1
    }
}



alert("Наибольший общий делитель: " + num1)
