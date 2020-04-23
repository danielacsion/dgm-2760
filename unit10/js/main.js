async function getHotelData() {
  try {
    const response = await fetch('http://127.0.0.1:5500/unit%2010/hotel.json')
    return await response.json() // return JSON object
  } catch (error) {
    console.error(error)
  }
}

let hotelData = {}
// getHotelData().then(data => hotelData = data)

getHotelData().then(function(data) {
  hotelData = data
  console.log(hotelData)
})

// store in a variable document.querySelectorAll('a')
// use that var to loop over each element and addEventListener to each one
// Use forEach loop
let hotelList = document.querySelectorAll('a')

hotelList.forEach(hotelItem => {
  hotelItem.addEventListener('click', hotelInfo)
  
})

// topList.forEach(menuItem => {
//     let newListItem = document.createElement('li')
//     let newLink = document.createElement('a')
//     newLink.setAttribute('href', menuItem.getAttribute('href'))
//     // 'copy' the textContent from upper menu to new menu
//     // append children to make them appear in the DOM
//     let copyText = document.getElementById
// })

document.querySelector('#marriott').addEventListener('click', hotelInfo)

function hotelInfo(event) {
  console.log(event)
  let hotelChoice = hotelData.hotels.find(hotel => {
    return event.target.id === hotel.name.toLowerCase()
  })

  document.querySelector('#hotelName').textContent = `${hotelChoice.name} Hotel`
  document.querySelector('#address').textContent = `${hotelChoice.address}`
  document.querySelector('#rooms').textContent = `${hotelChoice.rooms}`
  document.querySelector('#gym').textContent = `${hotelChoice.gym}`
  document.querySelector('#type').textContent = `${hotelChoice.roomTypes}`
  siteImage = document.querySelector('#picture')
}

function createImage() {
  var image = document.createElement('IMG')
  image.setAttribute("src", "#picture");
  image.setAttribute("width", "304");
  image.setAttribute("height", "228");
  document.body.appendChild(image)
}