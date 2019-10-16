export default class Exercises {
    constructor(){
        this.exercisesArray = [];
        this.options = {
            'MOUNTAIN CLIMBERS': 'https://s3.amazonaws.com/kajabi-storefronts-production/products/10120/images/6PNsrUzvQYSXjv23Fqo7_mountain-climbers.gif',
            'CRISS CROSS': 'https://s3.amazonaws.com/kajabi-storefronts-production/products/10120/images/GJW0xPsuRqiKt2gnmJ6I_criss-cross.gif',
            'WIDE HIGH KNEES': 'https://s3.amazonaws.com/kajabi-storefronts-production/products/10120/images/Zx34kV6gQwu9A54BSRjM_widehighknees.gif',
            'TRIPLE CRUNCHES': 'https://s3.amazonaws.com/kajabi-storefronts-production/products/10120/images/BaNQDSMdQzONCxYBoE9Q_triple-crunch.gif',
            'PLANK JACKS': 'https://s3.amazonaws.com/kajabi-storefronts-production/products/10120/images/vww9wzsSRlOcYxxvopyT_plank-jacks.gif',
            'SEATED WINDMILLS': 'https://s3.amazonaws.com/kajabi-storefronts-production/products/10120/images/5gtalT8xSoGkQBd6ptWR_seated-windmill.gif',
            'SIDE LUNGE HOPS': 'https://s3.amazonaws.com/kajabi-storefronts-production/products/10120/images/2cjUYpzCSoqHev0EUaVK_Side-lunge-hops.gif',
        }
        this.appendAll();
        this.appendLi = this.appendLi.bind(this);
        // this.substring = this.substring.bind(this);
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
            img.class = "exercise-img";
            li.appendChild(p);
            li.appendChild(img);
            searchResults.appendChild(li);
        }
    }
}

const findMatches = (word, options) => {
    word = word.split(' ').join().toUpperCase();
    return options.filter(option => {
        const regex = new RegExp(word, 'gi');
        return option.match(regex);
    })
}

const exercises = new Exercises();
const searchBar = document.getElementById('search-exercise');
const displayMatches = () => {
    const matchArray = findMatches(searchBar.value, Object.keys(exercises.options));
    if (matchArray.length === 0){
        exercises.appendAll();
    } else {
        const prevSearchResults = document.getElementById('search-results');
        while(prevSearchResults.firstChild){
            prevSearchResults.removeChild(prevSearchResults.firstChild);
        }
        const optionsValue = matchArray.map(ele => exercises.options[ele]);
        exercises.appendLi(matchArray, optionsValue);
    }
}

searchBar.addEventListener('change', displayMatches);
searchBar.addEventListener('keyup', displayMatches);