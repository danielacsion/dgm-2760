const question = {
    stem: "Who is buried at Monticello?",
    option1: "Thomas Jefferson",
    option2: "Thomas Jefferson, his wife, daughters, and son in-law",
    option3: "Sally Hemings",
    option4: "Nobody",
    close: 1,
    correct: 2,
    funny: 3,
    dumb: 4,
    display: () => {
        document.querySelector('#stem').textContent = question.stem
        document.querySelector('#answer1').textContent = question.option1
        document.querySelector('#answer2').textContent = question.option2
        document.querySelector('#answer3').textContent = question.option3
        document.querySelector('#answer4').textContent = question.option4
    },
    check: (userChoice) => {
        if (userChoice === question.close) {
            document.querySelector('.feedback').textContent = 'Close, but you are missing a few people. The correct answer was option 2!'
        } else if (userChoice === question.correct) {
            document.querySelector('.feedback').textContent = 'You are correct! Did you Google the answer?'
        } else if (userChoice === question.funny) {
            document.querySelector('.feedback').textContent = 'You have a good sense of humor to think that she would have gotten that out of Jefferson\'s estate! The correct answer was option 2.'
        } else {
            document.querySelector('.feedback').textContent = 'Really, really wrong. It may have been a plantation, but it also serves as the burial site of option 2!'
        }
    }
}

document.querySelector('#answer1').addEventListener('click', () => question.check(1))
document.querySelector('#answer2').addEventListener('click', () => question.check(2))
document.querySelector('#answer3').addEventListener('click', () => question.check(3))
document.querySelector('#answer4').addEventListener('click', () => question.check(4))

question.display()