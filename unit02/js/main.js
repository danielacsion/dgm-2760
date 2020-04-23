document.querySelector('header > h1').innerText = "Inspector Clouseau"
document.querySelector('header > h2').innerText = "This is the Inspector Clouseau Assignment"
document.querySelector('main > p').innerText = "The URL for this page is: http://127.0.0.1:5500/index.html "

function reDisplay() {

let windowSizes = `Window size is ${window.innerWidth} pixels wide by ${window.innerHeight} pixels tall.`
let offset = `Window offset is ${window.screenX} from the left edge and ${window.screenY} pixels from the top of the display.`
let myWindow = document.querySelector('#myWindow').innerText = windowSizes + '\n' + offset
let myDocument = document.querySelector('#myDocument').innerText = document.title; // document.write("Title:" + myDocument)

let date = document.lastModified; document.write("Last Modified: "+date);
// let myDocumentdate = document.querySelector('#myDocument').innerText= document.lastModified; document.write("Last Modified: "+date);
}

reDisplay()