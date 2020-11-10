let box = document.querySelector('.box');
let boxText = document.querySelector('#box-text');
const yellowButton = document.querySelector('.Yellow');

boxText.addEventListener('copy', () => {
    if(boxText.innerHTML === 'Blank') {
        alert('You have copied Blank')
    } else {
        console.log('Text copied: ', boxText.innerHTML);
    }
    
});

box.addEventListener('mouseenter', () => {
    console.log('mouse in the box!');
});

box.addEventListener('mouseleave', () => {
    box.style.backgroundColor = 'transparent';
    box.style.color = 'black';
    boxText.innerHTML = 'Blank';
    console.log('mouse left the box!');
});

yellowButton.addEventListener('click', () => {
    box.style.backgroundColor = 'yellow';
    box.style.color = 'brown';
    boxText.innerHTML = 'Yellow';
});

function paintRed() {
    box.style.backgroundColor = 'red';
    box.style.color = 'white';
    boxText.innerHTML = 'Red';
}

function paintGreen() {
    box.style.backgroundColor = 'green';
    box.style.color = 'white';
    boxText.innerHTML = 'Green';
}

function paintBlue() {
    box.style.backgroundColor = 'blue';
    box.style.color = 'white';
    boxText.innerHTML = 'Blue';
}