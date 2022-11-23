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


let isPaused = true;
const money = () => {
    // score.innerText++;
    
    if(rock.style.animation == "" && isPaused) {
        rock.style.animation = "rock 2s infinite";
        document.getElementById("playGame").innerText = "Pause";
        isPaused = false;
    } else if(isPaused == false) {
        rock.style.animation = ""
        document.getElementById("playGame").innerText = "Play"
        isPaused = true;
    }
    
    const dinoTop = parseInt(window.getComputedStyle(dino).getPropertyValue('top'));
    const rockLeft = parseInt(window.getComputedStyle(rock).getPropertyValue('left'));

    if (rockLeft < 0) {
        rock.style.display = 'none';
    } else {
        rock.style.display = '';
    }

    if (rockLeft < 50 && rockLeft > 0 && dinoTop > 150) { 
        console.log("Your Score:" + score.innerText + "\n\nPlay Again?");
        // location.reload();
    }

    const drake = dino.getBoundingClientRect().x;
    // const rocks = rocks.getBoundingClientRect().x;
    if(drake == rockLeft) {
        console.log("Didn't jump fast enough")
    }
    console.log(rockLeft)
}

const playButton = document.getElementById("playGame")
playButton.addEventListener("click", ()=> {
    money();
});


//below is for is home legend
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry)
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        } else {
            entry.target.classList.remove('show');
        }
    })
})

const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((el) => observer.observe(el));
