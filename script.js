fetch('data.json').then(function (response) {
    return response.json()
}).then(function (data) {

    const displayTarget = document.querySelector('.target')

    let output = ''

    data.items.forEach(function (project) {
        output += '<div class="project">'
        output += '<h3>' + project.name + '</h3>'
        output += '<a href="' + project.link + '" target="_blank">'
        output += '<img class="thumbnail" src="' + project.image + '" alt="' + project.altText + '"/>'
        output += '</a>'
        output += '<p>' + project.desc + '</p>'
        output += '</div>'
    })
    displayTarget.innerHTML = output
})



// created variable to get button element from DOM
const clickerButton = document.getElementById('clicker')

// creating const to get element that holds border information as want this to change also 
const jumbotronElement = document.getElementById('jumbotron')

// same again for second text box
const secondboxElement = document.getElementById('secondbox')

// listening out for click to then run funtion toggledark
clickerButton.addEventListener('click', toggledark)

// created function to toggle classes to change modes
function toggledark() {
    // variable to target body element of page, classList to amend to 2nd allocated class
    let bodyElement = document.body;
    bodyElement.classList.toggle('darkMode')
    // below is same as above but referencing global variables created above function to toggle modes - setting created in css for other modes
    jumbotronElement.classList.toggle('darkModeSection')
    jumbotronElement.classList.toggle('lightModeSection')
    secondboxElement.classList.toggle('darkModeSection')
    secondboxElement.classList.toggle('lightModeSection')
    // if statement to change text on button when clicked
    if (clickerButton.value == "Light Mode") {
        clickerButton.value = "Dark Mode"
        clickerButton.innerHTML = "Light Mode"
    } else {
        clickerButton.value = "Light Mode"
        clickerButton.innerHTML = "Dark Mode"
    }
}

//  Now all over again for cat mode button toggle
const catModeButton = document.getElementById('catMode')

catModeButton.addEventListener('click', toggleCat)

function toggleCat() {
    let elementBody = document.body;
    elementBody.classList.toggle('catMode')
    if (catModeButton.value == "Normal") {
        catModeButton.value = "What's this?"
        catModeButton.innerHTML = "Cat Mode!"
    } else {
        catModeButton.value = "Normal"
        catModeButton.innerHTML = "What's this?"
    }
}


const contactBtn = document.getElementById('contactMe')

contactBtn.addEventListener('click', emailPopUp)

function emailPopUp() {
    window.open("mailto:dummyemail@gmail.com")
}

