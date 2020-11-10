let firstBox = document.querySelector('.first');
let secondBox = document.querySelector('.second');
let thirdBox = document.querySelector('.third');

firstBox.addEventListener('mouseenter', (event) => {
    event.target.style.backgroundColor = 'red'
    secondBox.style.background = 'grey'
    thirdBox.style.background = 'grey'
});

secondBox.addEventListener('mouseenter', (event) => {
    event.target.style.backgroundColor = 'yellow'
    firstBox.style.background = 'grey'
    thirdBox.style.background = 'grey'
});

thirdBox.addEventListener('mouseenter', (event) => {
    event.target.style.backgroundColor = 'green'
    firstBox.style.background = 'grey'
    secondBox.style.background = 'grey'
});