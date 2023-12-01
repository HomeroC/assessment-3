
let color = document.querySelector('#color')
let place = document.querySelector('#place')
let ritual = document.querySelector('#ritual')

const colorBtn = () => {
    alert('My favorite color is grey!')
}

const placeBtn = () => {
    alert('My favorite place is Starbucks!')
}

const ritualBtn = () => {
    alert('My favorite ritual is listening to music!')
}

color.addEventListener('click', colorBtn)
place.addEventListener('click', placeBtn)
ritual.addEventListener('click', ritualBtn)