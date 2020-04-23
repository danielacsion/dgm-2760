function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min; //The maximum is inclusive and the minimum is inclusive
}

function getMonthName(month) {
  let name
  switch (month) {
    case 1:
      name = "January"
      break
    case 2:
      name = "February"
      break
    case 3:
      name = "March"
      break

    case 4:
      name = "April"
      break

    case 5:
      name = "May"
      break

    case 6:
      name = "June"
      break

    case 7:
      name = "July"
      break

    case 8:
      name = "August"
      break

    case 9:
      name = "September"
      break

    case 10:
      name = "October"
      break

    case 11:
      name = "November"
      break

    case 12:
      name = "December"
      break

    default:
      name = "Not a month"
      break
  }
  return name
}

function getFateMessage(fate) {
  let message
  switch (fate) {
    case 1:
      message = "listen to The Beatles all day long."
      break
    case 2:
      message = "eat a whole box of donuts by yourself."
      break
    case 3:
      message = "meet your soulmate in a Target. "
      break

    case 4:
      message = "master the splits."
      break

    case 5:
      message = "break something important."
      break

    default:
      message = "Error"
      break
  }
  return message
}

let fate = getRandomIntInclusive(1, 5)
const fateMessage = getFateMessage(fate)
let day = getRandomIntInclusive(1, 30)
let month = getRandomIntInclusive(1, 12)
const monthName = getMonthName(month)

const fortuneRevealed = `On ${monthName} ${day}, you will ${fateMessage}`

document.querySelector('#fortune').innerText = fortuneRevealed
