let continueCalculation = true

while (continueCalculation) {
    let number1 = +prompt("Введите первое число:")
    let operator = prompt("Введите знак операции (+, -, *, /):")
    let number2 = +prompt("Введите второе число:")

    let result

    switch (operator) {
        case "+":
            result = number1 + number2
            break
        case "-":
            result = number1 - number2
            break
        case "*":
            result = number1 * number2
            break
        case "/":
            result = number1 / number2
            break
        default:
            console.log("Некорректный знак операции.")
            continue
    }

    alert(`Результат: ${result}`)

    let answer = prompt("Хотите решить еще один пример? (да/нет)")
    if (answer=== "да" || answer === "Да") {
        continueCalculation = true
    }
    else if (answer ==="нет" || answer === "Нет"){
        continueCalculation = false
    }
    else{
        alert("Неккоректный выбор!")
        answer = prompt("Хотите решить еще один пример? (да/нет)")
    }
}


