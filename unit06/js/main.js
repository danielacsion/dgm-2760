function createStory() {

  const nounString = document.querySelector('#nouns').value
  const nounLower = nounString.toLowerCase()
  const nounArray = nounLower.split(/\s+/)

  const adjString = document.querySelector('#adjectives').value
  const adjLower = adjString.toLowerCase()
  const adjArray = adjLower.split(/\s+/)

  const verbString = document.querySelector('#verbs').value
  const verbLower = verbString.toLowerCase()
  const verbArray = verbLower.split(/\s+/)

  const myStory = `In the beginning, there were only four ${adjArray[0]} ${nounArray[0]}s named Perrywinkle, Libronius, Harriet, and Bulwart. In simpler times, they loved to ${verbArray[0]}. They were called upon to take up a ${adjArray[1]} quest - the quest for ${nounArray[1]}. For this quest they would need some ${adjArray[2]} ${nounArray[2]}, and would need to learn to ${verbArray[1]}. There would almost certainly be some ${verbArray[2]}ing involved. TO BE CONTINUED...`

  document.querySelector('#story').innerText = myStory
}
