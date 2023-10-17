// created variable to get button element from DOM
const clickerButton = document.getElementById('clicker')

// creating const to get element that holds border information as want this to change also 
const jumbotronElement = document.getElementById('jumbotron')

// same again for second text box
const secondboxElement = document.getElementById('secondbox')

// listening out for click to then run funtion toggledark
clickerButton.addEventListener('click', toggledark)


function toggledark () {
    let element = document.body;
    element.classList.toggle('darkMode')
    jumbotronElement.classList.toggle('darkModeSection')
    jumbotronElement.classList.toggle('lightModeSection')
    secondboxElement.classList.toggle('darkModeSection')
    secondboxElement.classList.toggle('lightModeSection')
}

// also want text on button to change when clicked and create a 3rd toggle option
// needs some logic!

