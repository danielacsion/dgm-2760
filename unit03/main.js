let correctNumber = Math.floor(Math.random() * 15)

console.log(`The correct number is ${correctNumber}`)


let guessed = false
let totalGuesses = 0
let gamerGuess = 0
correctNumber += 1


function evalGuess() {
  totalGuesses += 1 //totalGuesses = totalGuesses +1
  gamerGuess = document.querySelector('#guess').value
  // console.log(totalGuesses, gamerGuess)
  const feedback = document.querySelector('#feedback')

  if (gamerGuess == correctNumber) {
    console.log(`gamerGuess is equal to correctNumber`)
    feedback.innerText = 'You win!'
    giveAward()
  } else if (gamerGuess > correctNumber && gamerGuess < 16) {
    feedback.innerText = 'Too high, try again.'
  } else if (gamerGuess < correctNumber && gamerGuess > 0) {
    feedback.innerText = 'Too low, try again.'
  } else {
    feedback.innerText = 'Please choose a number between 1 and 15 and try again.'
    totalGuesses -= 1
  }

  document.querySelector('#attempts').innerText = totalGuesses

}

function giveAward() {
  console.log('Congratulations!')
  let imagePath = '#'

  switch (totalGuesses) {
    case 1:
    case 2:
    case 3:
      imagePath = 'images/blue.png'
      break;
    case 4:
    case 5:
    case 6:
      imagePath = 'images/red.png'
      break;
    case 7:
    case 8:
    case 9:
    case 10:
    case 11:
    case 12:
    case 13:
    case 14:
    case 15:
      imagePath = 'images/yellow.jpg'
      break;
  }
  const awardImage = document.createElement('img') //this creates an <img> element
  awardImage.setAttribute('src', imagePath)
  const ribbon = document.querySelector('#ribbon')

  ribbon.appendChild(awardImage)
}
