const userField = document.getElementById('userField')
const userDisplay = document.getElementById('userDisplay')
const computerField = document.getElementById('computerField')
const computerDisplay = document.getElementById('computerDisplay')
const title = document.getElementById('title')
const main = document.querySelector('main')
const hero = document.querySelector('#hero')

const allOptions = ['ROCK', 'PAPER', 'SCISSORS']
const optionField = document.getElementById('optionField')

function createBtnOptions() {
    for (let i = 0; i < allOptions.length; i++) {
        const btnOptions = document.createElement('button')
        btnOptions.setAttribute('id', i)
        const btnOptionsId = btnOptions.getAttribute('id')
        btnOptions.textContent = allOptions[btnOptionsId]
        optionField.append(btnOptions)

        btnOptions.addEventListener('click', () => {
            const btnId = btnOptions.textContent
            userDisplay.textContent = btnId
            generateRandomOption()
            resultCheck()
        })
    }
}
createBtnOptions()

function generateRandomOption() {
    const random = Math.floor(Math.random() * allOptions.length)
    console.log(random)
    computerDisplay.textContent = allOptions[random]
}

function resultCheck() {
    if(userDisplay.textContent === computerDisplay.textContent){
        title.textContent = 'IT IS A DRAW !'
        main.style.backgroundColor = '#697391 '
    }

    if(userDisplay.textContent === allOptions[0] && computerDisplay.textContent === allOptions[1]){
        title.textContent = 'YOU LOSE !'
        main.style.backgroundColor = 'tomato'
    }
    if(userDisplay.textContent === allOptions[1] && computerDisplay.textContent === allOptions[2]){
        title.textContent = 'YOU LOSE !'
        main.style.backgroundColor = 'tomato'
    }
    if(userDisplay.textContent === allOptions[2] && computerDisplay.textContent === allOptions[0]){
        title.textContent = 'YOU LOSE !'
        main.style.backgroundColor = 'tomato'
    }

    if(userDisplay.textContent === allOptions[0] && computerDisplay.textContent === allOptions[2]){
        title.textContent = 'YOU WIN !'
        main.style.backgroundColor = 'seagreen'
    }
    if(userDisplay.textContent === allOptions[1] && computerDisplay.textContent === allOptions[0]){
        title.textContent = 'YOU WIN !'
        main.style.backgroundColor = 'seagreen'
    }
    if(userDisplay.textContent === allOptions[2] && computerDisplay.textContent === allOptions[1]){
        title.textContent = 'YOU WIN !'
        main.style.backgroundColor = 'seagreen'
    }
}