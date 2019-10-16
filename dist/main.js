/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/customize.js":
/*!**************************!*\
  !*** ./src/customize.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("//set button id on click to hide first modal\n$(\"#customizable-holder\").on(\"click\", function () {\n    $(\"#modal1\").modal('show');\n})\n\n$(\"#next\").on(\"click\", function () {\n    $('#modal1').modal('hide');\n});\n//trigger next modal\n$(\"#next\").on(\"click\", function () {\n    $('#modal2').modal('show');\n});\n\n\n\n\n//# sourceURL=webpack:///./src/customize.js?");

/***/ }),

/***/ "./src/exercises.js":
/*!**************************!*\
  !*** ./src/exercises.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Exercises; });\nclass Exercises {\n    constructor(){\n        this.exercisesArray = [];\n        this.options = {\n            'MOUNTAIN CLIMBERS': 'https://s3.amazonaws.com/kajabi-storefronts-production/products/10120/images/6PNsrUzvQYSXjv23Fqo7_mountain-climbers.gif',\n            'CRISS CROSS': 'https://s3.amazonaws.com/kajabi-storefronts-production/products/10120/images/GJW0xPsuRqiKt2gnmJ6I_criss-cross.gif',\n            'WIDE HIGH KNEES': 'https://s3.amazonaws.com/kajabi-storefronts-production/products/10120/images/Zx34kV6gQwu9A54BSRjM_widehighknees.gif',\n            'TRIPLE CRUNCHES': 'https://s3.amazonaws.com/kajabi-storefronts-production/products/10120/images/BaNQDSMdQzONCxYBoE9Q_triple-crunch.gif',\n            'PLANK JACKS': 'https://s3.amazonaws.com/kajabi-storefronts-production/products/10120/images/vww9wzsSRlOcYxxvopyT_plank-jacks.gif',\n            'SEATED WINDMILLS': 'https://s3.amazonaws.com/kajabi-storefronts-production/products/10120/images/5gtalT8xSoGkQBd6ptWR_seated-windmill.gif',\n            'SIDE LUNGE HOPS': 'https://s3.amazonaws.com/kajabi-storefronts-production/products/10120/images/2cjUYpzCSoqHev0EUaVK_Side-lunge-hops.gif',\n        }\n        this.appendAll();\n        this.appendLi = this.appendLi.bind(this);\n        // this.substring = this.substring.bind(this);\n    }\n\n    appendAll(){\n        const optionsKey = Object.keys(this.options);\n        const optionsValue = Object.values(this.options);\n        this.appendLi(optionsKey, optionsValue);\n    }\n\n    appendLi(keys, values) {\n        for (let i = 0; i < keys.length; i++) {\n            const searchResults = document.getElementById('search-results');\n            const li = document.createElement(\"li\");\n            const img = document.createElement(\"img\");\n            const p = document.createElement(\"p\");\n            p.innerHTML = keys[i];\n            img.src = values[i];\n            img.id = keys[i];\n            img.class = \"exercise-img\";\n            li.appendChild(p);\n            li.appendChild(img);\n            searchResults.appendChild(li);\n        }\n    }\n}\n\nconst findMatches = (word, options) => {\n    word = word.split(' ').join().toUpperCase();\n    return options.filter(option => {\n        const regex = new RegExp(word, 'gi');\n        return option.match(regex);\n    })\n}\n\nconst exercises = new Exercises();\nconst searchBar = document.getElementById('search-exercise');\nconst displayMatches = () => {\n    const matchArray = findMatches(searchBar.value, Object.keys(exercises.options));\n    if (matchArray.length === 0){\n        exercises.appendAll();\n    } else {\n        const prevSearchResults = document.getElementById('search-results');\n        while(prevSearchResults.firstChild){\n            prevSearchResults.removeChild(prevSearchResults.firstChild);\n        }\n        const optionsValue = matchArray.map(ele => exercises.options[ele]);\n        exercises.appendLi(matchArray, optionsValue);\n    }\n}\n\nsearchBar.addEventListener('change', displayMatches);\nsearchBar.addEventListener('keyup', displayMatches);\n\n//# sourceURL=webpack:///./src/exercises.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _customize__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./customize */ \"./src/customize.js\");\n/* harmony import */ var _customize__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_customize__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _timer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./timer */ \"./src/timer.js\");\n/* harmony import */ var _exercises__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./exercises */ \"./src/exercises.js\");\n\n\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/timer.js":
/*!**********************!*\
  !*** ./src/timer.js ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Timer; });\n\nclass Timer {\n    constructor(){\n        this.workInterval = 0;\n        this.restInterval = 0;\n        this.rounds = 0;\n        this.rest = false;\n        this.roundCount = 0;\n        this.interval;\n        this.paused = false;\n        this.seconds = this.restInterval;\n\n        this.countDown = this.countDown.bind(this);\n        this.checkStatus = this.checkStatus.bind(this);\n        this.changeStatus = this.changeStatus.bind(this);\n        this.startTimer = this.startTimer.bind(this);\n        this.pauseTimer = this.pauseTimer.bind(this);\n        this.resetTimer = this.resetTimer.bind(this);\n        this.updateIntervals = this.updateIntervals.bind(this)\n        this.checkFinish = this.checkFinish.bind(this);\n    }\n\n    updateIntervals(){\n        const workInterval = document.getElementById('workInterval');\n        const restInterval = document.getElementById('restInterval');\n        const rounds = document.getElementById('rounds');\n        this.workInterval = Math.floor(workInterval.value * 1);\n        this.restInterval = Math.floor(restInterval.value * 1);\n        this.seconds = this.restInterval;\n        this.rounds = Math.floor(rounds.value * 1);\n        secondStatus.innerHTML = this.restInterval;\n    }\n\n    countDown(){\n        this.seconds -= 1;\n        secondStatus.innerHTML = this.seconds;\n        this.checkStatus();\n    }\n\n    checkStatus(){  \n        if (this.rest && this.seconds === 0) {\n            this.checkFinish();\n            this.rest = false;\n            this.changeStatus();\n        } else if (!this.rest && this.seconds === 0) {\n            this.rest = true;\n            this.roundCount += 1;\n            this.changeStatus();\n        }    \n    }\n\n    checkFinish(){\n        debugger\n        if (this.rounds === this.roundCount){\n            debugger\n            window.clearInterval(this.interval);\n\n            this.interval = undefined;\n            this.workInterval = 0;\n            this.restInterval = 0;\n            this.seconds = 0;\n            this.rest = false;\n            this.paused = false;\n            this.roundCount = 0;\n            secondStatus.innerHTML = this.seconds;\n\n            if (!pauseButton.classList.contains('hidden')) {\n                pauseButton.classList.add('hidden');\n            }\n            pauseButton.innerHTML = 'Pause';\n\n            if (startButton.classList.contains('hidden')) {\n                startButton.classList.remove('hidden');\n            }\n            status.innerHTML = 'Congratulations! You have completed your workout today!';\n        }\n        debugger\n    }\n\n    changeStatus(){\n        if (status.innerHTML === 'Rest'){\n            this.seconds = this.workInterval + 1;\n            status.innerHTML = 'Work';\n        } else {\n            this.seconds = this.restInterval + 1;\n            status.innerHTML = 'Rest';\n        };\n    }; \n\n    pauseTimer(e) {\n        // to resume the timer\n        if (this.paused){\n            this.interval = window.setInterval(this.countDown, 1000);\n            e.target.innerHTML = 'Pause'\n            this.paused = false;\n        } else {\n            // to pause the timer\n            window.clearInterval(this.interval);\n            e.target.innerHTML = 'Resume';\n            this.paused = true;\n        }\n    }\n\n    startTimer(e){\n        this.interval = window.setInterval(this.countDown, 1000);\n        if (pauseButton.classList.contains('hidden')){\n            pauseButton.classList.remove('hidden');\n        }\n        startButton.classList.add('hidden');\n    }\n\n    resetTimer(e){\n        window.clearInterval(this.interval);\n\n        this.interval = undefined;\n        this.workInterval = 0;\n        this.restInterval = 0;\n        this.seconds = 0;\n        this.rest = false;\n        this.paused = false;\n        this.roundCount = 0;\n        secondStatus.innerHTML = this.seconds;\n        status.innerHTML = 'Rest';\n\n        if (!pauseButton.classList.contains('hidden')){\n            pauseButton.classList.add('hidden');\n        }\n        pauseButton.innerHTML = 'Pause';\n        \n        if (startButton.classList.contains('hidden')){\n            startButton.classList.remove('hidden');\n        }\n    }\n\n}\nconst timer = new Timer();\nconst settingButton = document.getElementById('next');\nsettingButton.addEventListener('click', timer.updateIntervals)\nconst secondStatus = document.getElementById('secondStatus');\nconst status = document.getElementById('status');\nconst startButton = document.getElementById('start-button');\nconst pauseButton = document.getElementById('pause-button');\nconst resetButton = document.getElementById('reset-button');\nstartButton.addEventListener('click', timer.startTimer);\npauseButton.addEventListener('click', timer.pauseTimer);\nresetButton.addEventListener('click', timer.resetTimer);\n\n\n//# sourceURL=webpack:///./src/timer.js?");

/***/ })

/******/ });