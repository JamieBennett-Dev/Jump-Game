// game variables
const game = document.getElementById('game');
const character = document.getElementById('character');
const block = document.getElementById('block');
let counter = 0;

// gif variable
const gifs = [
    'assets/gifs/IdleDino.gif',
    'assets/gifs/WalkingDino - left.gif',
    'assets/gifs/WalkingDino-right.gif',
    'assets/gifs/IdleDinoRotate.gif'
];

// jump animation function
function jump() {
    if (!character.classList.contains('animate')) {
        character.classList.add('animate');
        setTimeout(() => {
            character.classList.remove('animate');
        }, 500); // once animation is done, removes animation class
    }
}
game.addEventListener('click', jump); // once the game is clicked, the jump function occurs

// check if dead
const checkDead = setInterval(function() {
    const characterTop = parseInt(window.getComputedStyle(character).getPropertyValue('top'));
    const blockLeft = parseInt(window.getComputedStyle(block).getPropertyValue('left'));

    if (blockLeft < 20 && blockLeft > 0 && characterTop > 100) { // if you hit the block
        block.style.animation = 'none';
        alert('YOU LOSE! score: '+Math.floor(counter/100));
        counter = 0;
        block.style.animation = 'block 1s infinite linear'
    } else { // else you DON'T hit the block score increases
        counter++;
        document.getElementById('scoreSpan').innerHTML = Math.floor(counter/100);
    }
},10);
