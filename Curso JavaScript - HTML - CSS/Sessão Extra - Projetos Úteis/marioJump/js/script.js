const pipe = document.querySelector('.pipe');
const mario = document.querySelector('.mario');
const clouds = document.querySelector('.clouds');

const jump = () => {
    mario.classList.add('jump');

    setTimeout(() => {
        mario.classList.remove('jump');
    }, 500)
}

const loop = setInterval(() => {

    // console.log(loop);

    const pipePosition = pipe.offsetLeft;
    const marioPosition = +window.getComputedStyle(mario).bottom.replace('px', '');
    const cloudsPosition = clouds.offsetLeft;

    if (pipePosition <= 120 && pipePosition > 0 && marioPosition < 109) {
        pipe.style.animation = 'none';
        pipe.style.left = `${pipePosition}px`;

        mario.style.animation = 'none';
        mario.style.bottom = `${marioPosition}px`;

        mario.src = 'img/game-over.png';
        mario.style.width = '80px';
        mario.style.marginLeft = '50px';
        
        clouds.style.animation = 'none';
        clouds.style.left = `${cloudsPosition}px`
        
        clearInterval(loop);
        
        setTimeout(() => {
            location.reload(alert('Game Over!!!'));
        }, 100);
        
        // location.reload(alert('Game Over!!!'));
    }

}, 10);

document.addEventListener('keydown', jump);