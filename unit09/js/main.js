function duplicateMenu() {
    // get all of the anchor elements from the top menu
    let topMenu = document.querySelectorAll("ul#primaryNavigation li a")
    // create the new list items for the bottom of the page
    let newList = document.createElement("ul")
  
    topMenu.forEach(menuItem => {
      let bottomMenu = document.querySelector("#smallNavArea")
      let newListItem = document.createElement("li")
      let newLink = document.createElement("a")
      newLink.setAttribute("href", menuItem.getAttribute("href"))
      newLink.textContent = menuItem.textContent
      bottomMenu.appendChild(newList)
      newList.appendChild(newListItem)
      newListItem.appendChild(newLink)
    })
  }
  
  duplicateMenu()