import Exercises from './exercises';
import Draggable from './draggleble';

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
        secondStatus.innerHTML = this.restInterval;
    }

    countDown(){
        this.seconds -= 1;
        secondStatus.innerHTML = this.seconds;
        this.checkStatus();
    }

    checkStatus(){  
        if (this.rest && this.seconds === 0) {
            if (!this.checkFinish()){
                this.rest = false;
                this.changeStatus();
            };
        } else if (!this.rest && this.seconds === 0) {
            this.rest = true;
            this.roundCount += 1;
            this.changeStatus();
        }    
    }

    checkFinish(){
        if (this.rounds === this.roundCount){            
            // window.clearInterval(this.interval);

            // this.interval = undefined;
            // this.workInterval = 0;
            // this.restInterval = 0;
            // this.seconds = 0;
            // this.rest = false;
            // this.paused = false;
            // this.roundCount = 0;
            // secondStatus.innerHTML = this.seconds;

            // if (!pauseButton.classList.contains('hidden')) {
            //     pauseButton.classList.add('hidden');
            // }
            // pauseButton.innerHTML = 'Pause';
            // if (startButton.classList.contains('hidden')) {
            //     startButton.classList.remove('hidden');
            // }
            // status.innerHTML = 'Congratulations! You have completed your workout today!';
            // const imgHolder = document.getElementById('img-holder');
            // while (imgHolder.firstChild) {
            //     debugger
            //     imgHolder.removeChild(imgHolder.firstChild);
            // }
            this.resetTimer();
            status.innerHTML = 'Congratulations! You have completed your workout today!';
            return true;
        }
        return false;
    }

    changeStatus(){
        if (status.innerHTML === 'Rest'){
            this.seconds = this.workInterval + 1;
            status.innerHTML = 'Work';
        } else {
           
            this.seconds = this.restInterval + 1;
            status.innerHTML = 'Rest';
            const imgHolder = document.getElementById('img-holder');
            while(imgHolder.firstChild){
                imgHolder.removeChild(imgHolder.firstChild);
            }
            const img = document.createElement("img");
            const p = document.createElement("p");
            p.innerHTML = Object.keys(this.selected[this.roundCount]);
            img.src = Object.values(this.selected[this.roundCount]);
            imgHolder.appendChild(img);
        };
    }; 

    pauseTimer(e) {
        // to resume the timer
        if (this.paused){
            this.interval = window.setInterval(this.countDown, 1000);
            e.target.innerHTML = 'Pause'
            this.paused = false;
        } else {
            // to pause the timer
            window.clearInterval(this.interval);
            e.target.innerHTML = 'Resume';
            this.paused = true;
        }
    }

    startTimer(e){
        if (this.restInterval <= 0 || this.workInterval <= 0){
            alert("Invalid intervals!");
            return;
        }
        this.interval = window.setInterval(this.countDown, 1000);
        if (pauseButton.classList.contains('hidden')){
            pauseButton.classList.remove('hidden');
        }
        startButton.classList.add('hidden');

        const imgHolder = document.getElementById('img-holder');
        while (imgHolder.firstChild) {
            imgHolder.removeChild(imgHolder.firstChild);
        }
        const img = document.createElement("img");
        const p = document.createElement("p");
        p.innerHTML = Object.keys(this.selected[this.roundCount]);
        img.src = Object.values(this.selected[this.roundCount]);
        imgHolder.appendChild(img);
    }

    resetTimer(e){
        window.clearInterval(this.interval);
        this.selected = [];
        this.interval = undefined;
        this.workInterval = 0;
        this.restInterval = 0;
        this.seconds = 0;
        this.rest = false;
        this.paused = false;
        this.roundCount = 0;
        secondStatus.innerHTML = this.seconds;
        status.innerHTML = 'Rest';
        
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
    }

}


// customize timer and exercises
const exercises = new Exercises();
const timer = new Timer();
const next = document.getElementById('next');
const searchBar = document.getElementById('search-exercise');
const save = document.getElementById('save');
const rearrange = document.getElementById('rearrange');
const closeButtons = Array.from(document.getElementsByClassName("close-modal"));
const cols = document.querySelectorAll('#columns .column');
const secondStatus = document.getElementById('secondStatus');
const status = document.getElementById('status');
const startButton = document.getElementById('start-button');
const pauseButton = document.getElementById('pause-button');
const resetButton = document.getElementById('reset-button');

next.addEventListener('click', exercises.updateIntervals);

closeButtons.forEach(button => {
    button.addEventListener("click", exercises.clearSelected);
    button.addEventListener("click", timer.resetTimer);
});

searchBar.addEventListener('change', exercises.displayMatches);
searchBar.addEventListener('keyup', exercises.displayMatches);

rearrange.addEventListener('click', () => {
    exercises.displaySelected(new Draggable());
});

save.addEventListener('click', () => {
    exercises.updateSequence();
    // reupdate the sequence of workout in exercises instance
    timer.update(exercises.returnExercise());
    exercises.clearSelected();
});


startButton.addEventListener('click', timer.startTimer);

pauseButton.addEventListener('click', timer.pauseTimer);

resetButton.addEventListener('click', timer.resetTimer);