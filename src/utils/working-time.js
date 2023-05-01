//Getting the current day
const currentDay = new Date(Date.now())
const day = currentDay.getDate()
const month = currentDay.getMonth()
const year = currentDay.getFullYear()
let days = []
let firstWeek = []
let firstDaysArray = []
let nextWeeks = []
const workingHours = ["9:00", "10:00", "11:00", "12:00", "13:00", "14:00", "15:00", "16:00"]
// function to get days in a month starting from the current day
function getDaysInMonth(month, year) {
    const date = new Date(year, month, day)
    const lastDay = date.getDate() - 1

    while (date.getDate() !== lastDay) {
        firstDaysArray.push(new Date(date))
        date.setDate(date.getDate() + 1)
    }
    firstDaysArray.map((d) => {
        if (d.getDay() <= 5 && d.getDay() !== 0) {
            days.push(d)
          
           
        }


if(days.length !== 0 ) {
if(days[0].toDateString().startsWith('Mon')) {
firstWeek = days.slice(0, 5)
}
if(days[0].toDateString().startsWith('Tue')) {
firstWeek = days.slice(0, 4)
}
if(days[0].toDateString().startsWith('Wed')) {
firstWeek = days.slice(0, 3)
}
if(days[0].toDateString().startsWith('Thu')) {
firstWeek = days.slice(0, 2)
}
if(days[0].toDateString().startsWith('Fri')) {
firstWeek = days.slice(0, 1)
} }


nextWeeks = days.slice(firstWeek.length)

    })

    return days
}






export {nextWeeks, firstWeek, workingHours}
getDaysInMonth(month, year, day)