function duplicateMenu() {
    // get all of the anchor elements from the top menu
    let topList = document.querySelectorAll('ul#primaryNavigation li a')

    // create the new list items for the bottom of the page
    let newList = document.createElement('ul')

    // let copyText = document.getElementById('primaryNavigation').textContent

    let bottomMenu = document.getElementById('smallNavArea')

    topList.forEach(menuItem => {
        let newListItem = document.createElement('li')
        let newLink = document.createElement('a')
        // let copyText = document.getElementById('primaryNavigation').textContent
        newLink.setAttribute('href', menuItem.getAttribute('href'))
        // newLink.textContent = copyText // 'copy' the textContent from upper menu to new menu
        newLink.setAttribute('a', menuItem.textContent)
        newListItem.appendChild(newLink)
        newList.appendChild(newListItem)
        console.log(newList)
    })
    bottomMenu.appendChild(newList) // append children to make them appear in the DOM
    console.log(bottomMenu)
}

duplicateMenu()