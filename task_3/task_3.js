let positiveCount = 0
let negativeCount = 0
let zeroCount = 0
let evenCount = 0
let oddCount = 0

for (let i = 0; i < 10; i++) {
    let number = +prompt("Введите числа:")
    
    if (number > 0) {
        positiveCount++
    } 
    else if (number < 0) {
        negativeCount++
    } 
    else if (number===0) {
        zeroCount++
    }

    if (number !== 0 && number % 2 === 0) {
        evenCount++
    } 
    else if (number !== 0 && number % 2 !== 0) {
        oddCount++
    }
}

console.log(`Количество положительных чисел: ${positiveCount}`)
console.log(`Количество отрицательных чисел: ${negativeCount}`)
console.log(`Количество нулей: ${zeroCount}`)
console.log(`Количество четных чисел: ${evenCount}`)
console.log(`Количество нечетных чисел: ${oddCount}`)
