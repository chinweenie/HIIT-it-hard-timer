import Draggable from './draggleble';

export default class Exercises {
    constructor(){
        this.rounds = 0;
        this.workInterval = 0;
        this.restInterval = 0;
        this.options = {
            'MOUNTAIN CLIMBERS': 'https://s3.amazonaws.com/kajabi-storefronts-production/products/10120/images/6PNsrUzvQYSXjv23Fqo7_mountain-climbers.gif',
            'CRISS CROSS': 'https://s3.amazonaws.com/kajabi-storefronts-production/products/10120/images/GJW0xPsuRqiKt2gnmJ6I_criss-cross.gif',
            'WIDE HIGH KNEES': 'https://s3.amazonaws.com/kajabi-storefronts-production/products/10120/images/Zx34kV6gQwu9A54BSRjM_widehighknees.gif',
            'TRIPLE CRUNCHES': 'https://s3.amazonaws.com/kajabi-storefronts-production/products/10120/images/BaNQDSMdQzONCxYBoE9Q_triple-crunch.gif',
            'PLANK JACKS': 'https://s3.amazonaws.com/kajabi-storefronts-production/products/10120/images/vww9wzsSRlOcYxxvopyT_plank-jacks.gif',
            'SEATED WINDMILLS': 'https://s3.amazonaws.com/kajabi-storefronts-production/products/10120/images/5gtalT8xSoGkQBd6ptWR_seated-windmill.gif',
            'SIDE LUNGE HOPS': 'https://s3.amazonaws.com/kajabi-storefronts-production/products/10120/images/2cjUYpzCSoqHev0EUaVK_Side-lunge-hops.gif',
            'FAST SQUATS': 'https://s3.amazonaws.com/kajabi-storefronts-production/products/10120/images/iEnyThlnSEyA8MGJwo1C_fast-squats.gif',
            'LONG LUNGE PULSES': 'https://s3.amazonaws.com/kajabi-storefronts-production/products/10120/images/LiEW53YRQiY3toG54VZM_long-lunge-pulses.gif',
            'SINGLE LEG HOPS': 'https://s3.amazonaws.com/kajabi-storefronts-production/products/10120/images/u4zm0jksSyqaUFscOkL7_single-leg-hops.gif',
            'ELEVATED HOT POTATO': 'https://s3.amazonaws.com/kajabi-storefronts-production/products/10120/images/e7vxj2MNTyi8L6GwVrhY_elevated-hot-potato.gif',
            'PLIE HOPS': 'https://s3.amazonaws.com/kajabi-storefronts-production/products/10120/images/MwgZmTAnR1qnoeP379zG_plie-jumps.gif',
            'ELEVATED CLAMS': 'https://s3.amazonaws.com/kajabi-storefronts-production/products/10120/images/lcl4DKpQhSVygdQ2Mc8Q_elevated-clam-shells.gif',
            'FROGGY HOPS': 'https://s3.amazonaws.com/kajabi-storefronts-production/products/10120/images/pgz5sYnNTQKibgRD2GxU_froggy-hops.gif',
            'HIGH KNEES': 'https://s3.amazonaws.com/kajabi-storefronts-production/products/10120/images/CeOpDliQdeijQyKdoCJr_high-knees.gif',
            'HALF COBRA PUSH UPS': 'https://s3.amazonaws.com/kajabi-storefronts-production/products/10120/images/5CzQ7rKHSkKUAa8n8OTH_half-cobra-pushup.gif',
            'ZIG-ZAG JUMPS': 'https://s3.amazonaws.com/kajabi-storefronts-production/products/10120/images/0KB64VV7R4u6cotQ3iLP_zig-zag-jumps.gif',
            'UP UP DOWN DOWN': 'https://s3.amazonaws.com/kajabi-storefronts-production/products/10120/images/vu1LnK5TsakaUifLVjfd_up-up-down-down.gif',
            'SQUAT CLAPS': 'https://s3.amazonaws.com/kajabi-storefronts-production/products/10120/images/B1liKKITQiqXYVkP9v3T_squat-claps.gif',
            'PUSH UP WITH SIDE PLANK': 'https://s3.amazonaws.com/kajabi-storefronts-production/products/10120/images/ePfQvb6RC6ApOLkcvGgK_pushups-to-side-plank.gif',
            'PIKED HOPS': 'https://s3.amazonaws.com/kajabi-storefronts-production/products/10120/images/xKfCSIFnQjCYuioCw5ge_piked-hops.gif',
        };
        this.appendAll();
        this.selected = [];
        this.arranged = [];
        this.appendLi = this.appendLi.bind(this);
        this.findMatches = this.findMatches.bind(this);
        this.displayMatches = this.displayMatches.bind(this);
        this.returnExercise = this.returnExercise.bind(this)
        this.clearSelected = this.clearSelected.bind(this);
        this.updateIntervals = this.updateIntervals.bind(this);
        this.updateSequence = this.updateSequence.bind(this);
        this.checkIfLess = this.checkIfLess.bind(this);
        this.checkPrevSelected = this.checkPrevSelected.bind(this);
    }



    updateIntervals() {
        const workInterval = document.getElementById('workInterval');
        const restInterval = document.getElementById('restInterval');
        const rounds = document.getElementById('rounds');
        this.workInterval = Math.floor(workInterval.value * 1);
        this.restInterval = Math.floor(restInterval.value * 1);
        this.seconds = this.restInterval;
        this.rounds = Math.floor(rounds.value * 1);
    }

    appendAll(){
        const optionsKey = Object.keys(this.options);
        const optionsValue = Object.values(this.options);
        this.appendLi(optionsKey, optionsValue);
    }

    appendLi(keys, values) {
        for (let i = 0; i < keys.length; i++) {
            const searchResults = document.getElementById('search-results');
            const li = document.createElement("li");
            const img = document.createElement("img");
            const p = document.createElement("p");
            p.innerHTML = keys[i];
            img.src = values[i];
            img.id = keys[i];
            img.setAttribute("class", "exercise-img");
            img.addEventListener('click', (e) => {
                e.preventDefault();
                
                if (e.target.classList.contains("selected")){
                    // remove from this.selected
                    const key = e.target.id;
                    for (let i = 0; i < this.selected.length; i++){
                        if (Object.keys(this.selected[i])[0] === key){
                            this.selected.splice(i, 1);
                        }
                    }
                    e.target.classList.toggle("selected");

                } else {
                    // check if number of workout has exceeded
                    if (this.rounds === this.selected.length){
                        alert("You've selected enough exercises!");
                        return;
                    }
                    // add into this.selected
                    this.selected.push({
                        [e.target.id]: this.options[e.target.id]
                    })
                    e.target.classList.toggle("selected");
                    this.checkIfLess();
                }
            });
            li.appendChild(p);
            li.appendChild(img);
            searchResults.appendChild(li);
        }
    }
    
    findMatches(word, options){
        word = word.split(' ').join().toUpperCase();
        return options.filter(option => {
            const regex = new RegExp(word, 'gi');
            return option.match(regex);
        })
    }
    
    checkPrevSelected(searchResults){
        const liArray = Array.from(searchResults.childNodes);
        const selectedExercises = this.selected.map(ele => Object.keys(ele)[0]);
        liArray.forEach(li => {
            if (selectedExercises.includes(li.childNodes[0].innerHTML)){
                li.childNodes[1].classList.toggle("selected");
            }
        })
    }
    
    
    displayMatches () {
        const searchBar = document.getElementById('search-exercise');
        const matchArray = this.findMatches(searchBar.value, Object.keys(this.options));
        if (matchArray.length === 0){
            this.appendAll();
        } else {
            const prevSearchResults = document.getElementById('search-results');
            while(prevSearchResults.firstChild){
                prevSearchResults.removeChild(prevSearchResults.firstChild);
            }
            const optionsValue = matchArray.map(ele => this.options[ele]);
            this.appendLi(matchArray, optionsValue);
        }
        const searchResults = document.getElementById('search-results');
        this.checkPrevSelected(searchResults);
    }

    displaySelected(draggable){
        const columns = document.getElementById('columns');
        while (columns.firstChild) {
            columns.removeChild(columns.firstChild);
        };
        for (let i = 0; i < this.selected.length; i++){
            const li = document.createElement("li"); 
            li.setAttribute("class", "column");
            li.setAttribute("draggable", true);
            const key = Object.keys(this.selected[i])[0];
            const header = document.createElement("header"); 
            header.innerHTML = key;   
            li.appendChild(header);
            draggable.addDnDHandlers(li);
            columns.appendChild(li);
        }
    }

    checkIfLess(){
        if (this.selected.length === this.rounds) {
            const rearrange = document.getElementById('rearrange');
            rearrange.classList.toggle("hidden");
            rearrange.addEventListener('click', () => {
                this.displaySelected(new Draggable());
            });
        }
        return false;
    }

    clearSelected(){
        const workInterval = document.getElementById('workInterval');
        const restInterval = document.getElementById('restInterval');
        const rounds = document.getElementById('rounds');
        const exerciseImg = Array.from(document.getElementsByClassName('exercise-img'));
        exerciseImg.forEach(img => {
            if (img.classList.contains("selected")){
                img.classList.remove("selected");
            }
        });

        const displaySelected = document.getElementById('columns');
        while(displaySelected.firstChild){
            displaySelected.removeChild(displaySelected.firstChild);
        };
        this.selected = [];
        this.arranged = [];
        this.workInterval = 0;
        this.restInterval = 0;
        this.rounds = 0;
        workInterval.value = 0;
        restInterval.value = 0;
        rounds.value = 0;
    }

    updateSequence(){
        const cols = Array.from(document.querySelectorAll('#columns .column'));
        cols.forEach(col => {
            const key = col.firstElementChild.innerHTML;
            this.arranged.push({
                [key]: this.options[key]
            });
        });
        console.log(this.arranged);
    }

    returnExercise(){
        return {
            workInterval: this.workInterval,
            restInterval: this.restInterval,
            rounds: this.rounds,
            arranged: this.arranged
        };
    }
}

