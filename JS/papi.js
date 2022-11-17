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
        // alert("Your Score:" + score.innerText + "\n\nPlay Again?");
        location.reload();
    }
}, 50);
