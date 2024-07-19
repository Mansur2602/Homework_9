let dayIndex = 0
let daysOfWeek = ["Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота", "Воскресенье"]

while (true) {
    let userResponse = confirm(daysOfWeek[dayIndex] + ". Хотите увидеть следующий день?")
    if (userResponse) {
        dayIndex = (dayIndex + 1) % 7
    } 
    else {
        break
    }
}


