/*For dino interaction*/
/*For dino interaction*/
const dino = document.getElementById('dino');
const rock = document.getElementById('rock');
const score = document.getElementById('score');

function jump() {
    dino.classList.add('jump-animation');
    setTimeout(() =>{
        dino.classList.remove('jump-animation');
    }, 500)
}

/*How to use dino*/
document.addEventListener('keypress', () => {
    if(!dino.classList.contains('jump-animation'))
    jump();
});

/*To detect if rock hits dino*/
setInterval(()=> {
    score.innerText++
    const dinoTop = parseInt(window.getComputedStyle(dino) 
    .getPropertyValue('top'));
    const rockLeft = parseInt(window.getComputedStyle(rock) 
    .getPropertyValue('left'));

    if (rockLeft < 0) {
        rock.style.display = 'none';
    } else {
        rock.style.display = '';
    }

    if (rockLeft < 50 && rockLeft > 0 && dinoTop > 150) { 
        alert("Your Score:" + score.innerText + "\n\nPlay Again?") 10s;
        location.reload();
    }
}, 50);


/*Below is for the second game play2*/
/*Below is for the second game play2*/
const WORLD_WIDTH = 100
const WORLD_HEIGHT = 30
const worldElem = document.querySelector('[data-world]')

setPixelToWorldScale()
window.addEventListener("resize", setPixelToWorldScale)

function setPixelToWorldScale() {
    let worldToPixelScale
    if (window.innerWidth / window.innerHeight < WORLD_WIDTH / WORLD_HEIGHT)
    {
        worldToPixelScale = window.innerWidth / WORLD_WIDTH
    } else {
        worldToPixelScale = window.innerHeight / WORLD_HEIGHT
    }
    worldElem.style.width = `${WORLD_WIDTH * worldToPixelScale}px`
    worldElem.style.height = `${WORLD_HEIGHT * worldToPixelScale}px`
}