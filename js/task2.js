let firstBox = document.querySelector('.first');
let secondBox = document.querySelector('.second');

firstBox.addEventListener('mouseenter', (event) => {
    event.target.style.backgroundColor = 'red'
    secondBox.style.background = 'grey'
    console.log('mouse in the box!');
});

secondBox.addEventListener('mouseenter', (event) => {
    event.target.style.backgroundColor = 'red'
    firstBox.style.background = 'grey'
    console.log('mouse in the box!');
});