// game variables
const game = document.getElementById('game');
const character = document.getElementById('character');
const block = document.getElementById('block');

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