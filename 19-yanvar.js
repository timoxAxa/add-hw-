const generateEmail = (name, surname, age) => {
    let data = [name, surname, age]
    let iteration = data.length - 1

    let email = ""
    let char = "_."
    let num = "0123456789"
    let generate = ""
    let emailChart = (char + num).split("")

    for (let i = 0; i <= iteration; i++) {
        let rnd = Math.floor(Math.random() * 3)

        if (email.includes(data[rnd])) {
            iteration = + 1
        } else {
            email += data[rnd]
            generate += emailChart[
                Math.floor(Math.random() * emailChart.length)
            ]
        }
    }
    return email += generate + "@gmail.com"
}
console.log(generateEmail('Tim', 'Timmik', '20'));

// const check = (num) => {
//     if (num === 0) {
//         return Object.is(num, 0)
//     }
//     if (num < 0) {
//         return false
//     } else {
//         return true
//     }
// }
// console.log(
//     check(0),
//     check(-0)
// );