// DOM elements 
const time = document.getElementById('time'),
    greeting = document.getElementById('greeting'),
    name = document.getElementById('name'),
    goal = document.getElementById('goal');

// show the time
function showTime() {
    let today = new Date(),
        hour = today.getHours(),
        min = today.getMinutes(),
        sec = today.getSeconds();

    // AM or PM
    const amPm = hour >= 12 ? 'PM' : 'AM'
    const showAmPm = true

    // 12 h format
    hour = hour % 12 || 12

    // output
    time.innerHTML = `${hour} <span>:</span> ${addZero(min)} <span>:</span> ${addZero(sec)} ${showAmPm ? amPm : ''}`
    setTimeout(showTime, 1000)
}

// add zeros to time (secs, mins)
function addZero(n) {
    return (parseInt(n, 10) < 10 ? '0' : '') + n 
}

// set background image and greeting 
function setBg() {
    let today = new Date(),
        hour = today.getHours();
    
    if (hour < 12) {
        document.body.style.backgroundImage = "url(images/morning.jpg)"
        greeting.textContent = "Good Morning"
    } else if (hour < 18) {
        document.body.style.backgroundImage = "url(images/afternoon.jpg)"
        greeting.textContent = "Good Afternoon"
    } else {
        document.body.style.backgroundImage = "url(images/night.jpg)"
        greeting.textContent = "Good Evening"
        document.body.style.color = "white"
    }
}

// get name / goal 
function getName() {
    if (localStorage.getItem('name') === null) {
        name.textContent = '[Enter Name]'
    } else {
        name.textContent = localStorage.getItem('name')
    }
}

function getGoal() {
    if (localStorage.getItem('goal') === null) {
        goal.textContent = '[Enter Goal]'
    } else {
        goal.textContent = localStorage.getItem('goal')
    }
}

// set name / goal
function setName(e) {
    if (e.type === 'keypress') {
        if (e.key == 'Enter') {
            localStorage.setItem('name', e.target.innerText)
            name.blur()
        } 
    } else {
        localStorage.setItem('name', e.target.innerText)
}
}

function setGoal(e) {
    if (e.type === 'keypress') {
        if (e.key == 'Enter') {
            localStorage.setItem('goal', e.target.innerText)
            goal.blur()
        } 
    } else {
        localStorage.setItem('goal', e.target.innerText)
}
}

name.addEventListener('keypress', setName)
name.addEventListener('blur', setName)
goal.addEventListener('keypress', setGoal)
goal.addEventListener('blur', setGoal)

// RUN
showTime()
setBg()
getName()
getGoal()