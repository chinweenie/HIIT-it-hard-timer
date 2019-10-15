
export default class Timer {
    constructor(){
        this.workInterval = 0;
        this.restInterval = 0;
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
        this.updateIntervals = this.updateIntervals.bind(this)
        this.checkFinish = this.checkFinish.bind(this);
    }

    updateIntervals(){
        const workInterval = document.getElementById('workInterval');
        const restInterval = document.getElementById('restInterval');
        const rounds = document.getElementById('rounds');
        this.workInterval = Math.floor(workInterval.value * 1);
        this.restInterval = Math.floor(restInterval.value * 1);
        this.seconds = this.restInterval;
        this.rounds = Math.floor(rounds.value * 1);
        secondStatus.innerHTML = this.restInterval;
    }

    countDown(){
        this.seconds -= 1;
        secondStatus.innerHTML = this.seconds;
        this.checkStatus();
    }

    checkStatus(){  
        if (this.rest && this.seconds === 0) {
            this.checkFinish();
            this.rest = false;
            this.changeStatus();
        } else if (!this.rest && this.seconds === 0) {
            this.rest = true;
            this.roundCount += 1;
            this.changeStatus();
        }    
    }

    checkFinish(){
        debugger
        if (this.rounds === this.roundCount){
            debugger
            window.clearInterval(this.interval);

            this.interval = undefined;
            this.workInterval = 0;
            this.restInterval = 0;
            this.seconds = 0;
            this.rest = false;
            this.paused = false;
            this.roundCount = 0;
            secondStatus.innerHTML = this.seconds;

            if (!pauseButton.classList.contains('hidden')) {
                pauseButton.classList.add('hidden');
            }
            pauseButton.innerHTML = 'Pause';

            if (startButton.classList.contains('hidden')) {
                startButton.classList.remove('hidden');
            }
            status.innerHTML = 'Congratulations! You have completed your workout today!';
        }
        debugger
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
    }

}
const timer = new Timer();
const settingButton = document.getElementById('settings');
settingButton.addEventListener('click', timer.updateIntervals)
const secondStatus = document.getElementById('secondStatus');
const status = document.getElementById('status');
const startButton = document.getElementById('start-button');
const pauseButton = document.getElementById('pause-button');
const resetButton = document.getElementById('reset-button');
startButton.addEventListener('click', timer.startTimer);
pauseButton.addEventListener('click', timer.pauseTimer);
resetButton.addEventListener('click', timer.resetTimer);
