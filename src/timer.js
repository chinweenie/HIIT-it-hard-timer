import customizable from './customize';
export default class Timer {
    constructor(workInterval, restInterval, rounds){
        this.workInterval = workInterval;
        this.restInterval = restInterval;
        this.rounds = rounds;
        this.rest = false;
        this.interval;
        this.paused = false;
        this.seconds = this.restInterval;
        this.countDown = this.countDown.bind(this);
        this.checkStatus = this.checkStatus.bind(this);
        this.changeStatus = this.changeStatus.bind(this);
        this.startTimer = this.startTimer.bind(this);
        this.pauseTimer = this.pauseTimer.bind(this);
        this.resetTimer = this.resetTimer.bind(this);
    }

    countDown(){
        this.seconds -= 1;
        secondStatus.innerHTML = this.seconds;
        this.checkStatus();
    }

    checkStatus(){
        if (this.rest && this.seconds === 0){
            this.rest = false;
            this.changeStatus();
        } else if (!this.rest && this.seconds === 0){
            this.rest = true;
            this.changeStatus();
        }
    }

    changeStatus(){
        if (status.innerHTML === 'Rest'){
            this.seconds = this.workInterval + 1;
            status.innerHTML = 'Work';
        } else {
            this.seconds = this.restInterval + 1;
            status.innerHTML = 'Rest';
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
        this.interval = window.setInterval(this.countDown, 1000);
        if (pauseButton.classList.contains('hidden')){
            pauseButton.classList.remove('hidden');
        }
        startButton.classList.add('hidden');
    }

    resetTimer(e){
        window.clearInterval(this.interval);

        this.interval = undefined;
        this.seconds = this.restInterval;
        this.rest = false;
        this.paused = false;

        secondStatus.innerHTML = this.seconds;
        status.innerHTML = 'Rest';

        if (!pauseButton.classList.contains('hidden')){
            pauseButton.classList.add('hidden');
        }
        pauseButton.innerHTML = 'Pause';
        
        if (startButton.classList.contains('hidden')){
            startButton.classList.remove('hidden');
        }
    }

}

const secondStatus = document.getElementById('secondStatus');
const timer = new Timer(10,10,2);
const status = document.getElementById('status');
const startButton = document.getElementById('start-button');
const pauseButton = document.getElementById('pause-button');
const resetButton = document.getElementById('reset-button');
startButton.addEventListener('click', timer.startTimer);
pauseButton.addEventListener('click', timer.pauseTimer);
resetButton.addEventListener('click', timer.resetTimer);
