async function getHotelData() {
  try {
    const response = await fetch('./hotel.json')
    return await response.json() // return JSON object
  } catch (error) {
    console.error(error)
  }
}

let hotelData = {}
getHotelData().then(data => hotelData = data) // can write like this as well

// getHotelData().then(function(data) {
//   hotelData = data
//   console.log(hotelData)
// })

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
  let hotelImage = document.querySelector('#picture')
  hotelImage.src = `${hotelChoice.picture}`
  hotelImage.setAttribute('width', '500')
  hotelImage.setAttribute('height', '300')
}

let hotelList = document.querySelectorAll('a')

hotelList.forEach(hotelItem => {
  hotelItem.addEventListener('click', hotelInfo)
})