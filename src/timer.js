import Exercises from './exercises';

class Timer {
    constructor(){
        this.workInterval = 0;
        this.restInterval = 0;
        this.arranged = [];
        this.rounds = 0;
        this.rest = false;
        this.roundCount = 0;
        this.interval;
        this.paused = false;
        this.seconds = this.restInterval;
        this.alarm = new Audio('dist/Bleep-SoundBible.com-1927126940.mp3')
        this.countDown = this.countDown.bind(this);
        this.checkStatus = this.checkStatus.bind(this);
        this.changeStatus = this.changeStatus.bind(this);
        this.startTimer = this.startTimer.bind(this);
        this.pauseTimer = this.pauseTimer.bind(this);
        this.resetTimer = this.resetTimer.bind(this);
        this.update = this.update.bind(this)
        this.checkFinish = this.checkFinish.bind(this);
    }

    update({workInterval, restInterval, rounds, arranged}){
        this.workInterval = workInterval;
        this.restInterval = restInterval;
        this.seconds = this.restInterval;
        this.arranged = arranged;
        this.rounds = rounds;
        document.getElementById("countdown-number").textContent = this.restInterval;
    }

    countDown(){
        this.seconds -= 1;
        document.getElementById("countdown-number").textContent = this.seconds;
        this.checkStatus();
    }

    checkStatus(){  
        if (this.rest && this.seconds === 0) {
            this.alarm.play();
            if (!this.checkFinish()){
                this.rest = false;
                this.changeStatus();
            };
        } else if (!this.rest && this.seconds === 0) {
            this.alarm.play();
            this.rest = true;
            this.roundCount += 1;
            this.changeStatus();
        }    
    }

    checkFinish(){
        if (this.rounds === this.roundCount){            
            this.resetTimer();
            status.innerHTML = 'Congratulations! You have completed your workout today!';
            document.getElementsByTagName("circle")[0].style.animation = null;
            document.getElementById("timer").style.opacity = "1";
            return true;
        }
        return false;
    }

    changeStatus(){
        if (status.innerHTML === 'Rest'){
            this.seconds = this.workInterval + 1;
            status.innerHTML = 'Work!';
            document.getElementsByTagName("circle")[0].style.animation = null;
            document.getElementsByTagName("circle")[0].style.animation = `countdown ${this.workInterval}s 1s linear infinite forwards`
            body.style.background = "salmon";
            document.getElementById("timer").style.opacity = "1";

        } else {
            
            this.seconds = this.restInterval + 1;
            status.innerHTML = 'Rest';
            body.style.background = "cyan";
            document.getElementById("timer").style.opacity = "0.5";
            document.getElementsByTagName("circle")[0].style.animation = null;

            const imgHolder = document.getElementById('img-holder');
            while(imgHolder.firstChild){
                imgHolder.removeChild(imgHolder.firstChild);
            }
            const img = document.createElement("img");
            const p = document.createElement("p");
            p.innerHTML = Object.keys(this.arranged[this.roundCount]);
            img.src = Object.values(this.arranged[this.roundCount]);
            imgHolder.appendChild(p);
            imgHolder.appendChild(img);

        };
    }; 

    pauseTimer(e) {
        // to resume the timer
        if (this.paused){
            this.interval = window.setInterval(this.countDown, 1000);
            e.target.innerHTML = 'Pause'
            this.paused = false;
            document.getElementsByTagName("circle")[0].style.animationPlayState = "running";

        } else {
            // to pause the timer
            window.clearInterval(this.interval);
            e.target.innerHTML = 'Resume';
            this.paused = true;
            document.getElementsByTagName("circle")[0].style.animationPlayState = "paused";
        }
    }

    startTimer(e){
        if (this.restInterval <= 0 || this.workInterval <= 0){
            alert("Invalid intervals!");
            return;
        }

        if (status.innerHTML === 'Congratulations! You have completed your workout today!'){
            status.innerHTML = 'Rest';
        }

        this.interval = window.setInterval(this.countDown, 1000);
        if (pauseButton.classList.contains('hidden')){
            pauseButton.classList.remove('hidden');
        }
        startButton.classList.add('hidden');
        customize.classList.add('hidden');
        document.getElementById("timer").style.opacity = "0.5";
        const imgHolder = document.getElementById('img-holder');
        while (imgHolder.firstChild) {
            imgHolder.removeChild(imgHolder.firstChild);
        }
        const img = document.createElement("img");
        const p = document.createElement("p");
        p.innerHTML = Object.keys(this.arranged[this.roundCount]);
        img.src = Object.values(this.arranged[this.roundCount]);
        imgHolder.appendChild(p);
        imgHolder.appendChild(img);
    }

    resetTimer(e){
        window.clearInterval(this.interval);
        this.arranged = [];
        this.interval = undefined;
        this.workInterval = 0;
        this.restInterval = 0;
        this.seconds = 0;
        this.rest = false;
        this.paused = false;
        this.roundCount = 0;
        status.innerHTML = 'Rest';
        document.getElementsByTagName("circle")[0].style.animation = null;
        document.getElementById("countdown-number").textContent = 0;
        document.getElementById("timer").style.opacity = "1";
        if (!pauseButton.classList.contains('hidden')){
            pauseButton.classList.add('hidden');
        }
        pauseButton.innerHTML = 'Pause';
        
        if (startButton.classList.contains('hidden')){
            startButton.classList.remove('hidden');
        }

        const imgHolder = document.getElementById('img-holder');
        while (imgHolder.firstChild) {
            imgHolder.removeChild(imgHolder.firstChild);
        }
        customize.classList.remove('hidden');
       
    }

}


// customize timer and exercises
const exercises = new Exercises();
const timer = new Timer();
const next = document.getElementById('next');
const searchBar = document.getElementById('search-exercise');
const save = document.getElementById('save');
const closeButtons = Array.from(document.getElementsByClassName("close-modal"));
const status = document.getElementById('status');
const startButton = document.getElementById('start-button');
const pauseButton = document.getElementById('pause-button');
const resetButton = document.getElementById('reset-button');
const customize = document.getElementById('customizable-holder');
const body = document.getElementsByTagName("body")[0];

next.addEventListener('click', exercises.updateIntervals);

closeButtons.forEach(button => {
    button.addEventListener("click", exercises.clearSelected);
    button.addEventListener("click", timer.resetTimer);
});

searchBar.addEventListener('change', exercises.displayMatches);
searchBar.addEventListener('keyup', exercises.displayMatches);

save.addEventListener('click', () => {
    exercises.updateSequence();
    timer.update(exercises.returnExercise());
    exercises.clearSelected();
    document.getElementsByClassName("title")[0].classList.toggle("hidden");
    document.getElementsByClassName("timer-holder")[0].classList.toggle("hidden");
    body.style.background = "cyan";
});


startButton.addEventListener('click', timer.startTimer);

pauseButton.addEventListener('click', timer.pauseTimer);

resetButton.addEventListener('click', () => {
    timer.resetTimer();
    document.getElementsByClassName("title")[0].classList.toggle("hidden");
    document.getElementsByClassName("timer-holder")[0].classList.toggle("hidden");
    body.style.background = "#333";
});