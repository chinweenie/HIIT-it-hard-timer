export default class Customizable {

    constructor(){
        this.workInterval = 50;
        this.restInterval = 10;
        this.rounds = 28;
        this.updateIntervals = this.updateIntervals.bind(this);
    }

    updateIntervals(){
        this.workInterval = Math.floor(workInterval.value * 1);
        this.restInterval = Math.floor(restInterval.value * 1);
        this.rounds = Math.floor(rounds.value * 1);
    }
}



const customizable = new Customizable();
const settingButton = document.getElementById('settings');
const workInterval = document.getElementById('workInterval');
const restInterval = document.getElementById('restInterval');
const rounds = document.getElementById('rounds');
settingButton.addEventListener('click', customizable.updateIntervals)