const cursor = document.querySelector('.cursor');
const holes = [...document.querySelectorAll('.hole')];
const scoreEl = document.querySelector('.score span');
const endBtn = document.querySelector('.end-btn'); // Corrected selector for end button
let score = 0;
let gameActive = true;
let timer = null;

const sound = new Audio("assets/smash.mp3");

function run() {
    if (!gameActive) return;

    const i = Math.floor(Math.random() * holes.length);
    const hole = holes[i];

    const img = document.createElement('img');
    img.classList.add('mole');
    img.src = 'assets/mole.png';

    img.addEventListener('click', () => {
        if (!gameActive) return;

        score++;
        sound.play();
        scoreEl.textContent = score;
        img.src = 'assets/mole-whacked.png';
        img.classList.add('whacked');
        clearTimeout(timer);
        setTimeout(() => {
            hole.removeChild(img);
            run();
        }, 800);
    });

    hole.appendChild(img);

    timer = setTimeout(() => {
        if (hole.contains(img)) {
            hole.removeChild(img);
        }
        run();
    }, 800);
}

function startGame() {
    gameActive = true;
    score = 0;
    scoreEl.textContent = score;
    run();
}

function endGame() {
    gameActive = false;
    alert('Game Over! Your score is ' + score );
    alert('Click the Reload button to Restart game');
    clearTimeout(timer);
}

endBtn.addEventListener('click', () => {
    endGame();
});

window.addEventListener('mousemove', e => {
    cursor.style.top = e.pageY + 'px';
    cursor.style.left = e.pageX + 'px';
});

window.addEventListener('mousedown', () => {
    cursor.classList.add('active');
});

window.addEventListener('mouseup', () => {
    cursor.classList.remove('active');
});

startGame();
