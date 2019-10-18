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

eval("//set button id on click to hide first modal\n$(\"#customizable-holder\").on(\"click\", function () {\n    $(\"#modal1\").modal('show');\n})\n\n$(\"#next\").on(\"click\", function () {\n    $('#modal1').modal('hide');\n});\n//trigger next modal\n$(\"#next\").on(\"click\", function () {\n    $('#modal2').modal('show');\n});\n\n$(\"#rearrange\").on(\"click\", function () {\n    $(\"#modal2\").modal('hide');\n})\n\n$(\"#rearrange\").on(\"click\", function () {\n    $(\"#modal3\").modal('show');\n})\n\n$(\".close-modal\").on(\"click\", function () {\n    $(\"#search-exercise\").val(\"\");\n    $(\"#rounds\").val(0);\n    $(\".exercise-img\").attr(\"class\", \"exercise-img\"); \n    $(\"#rearrange\").attr(\"class\", \"btn btn-primary hidden\");\n});\n\n$(\"#save\").on(\"click\", function () {\n    $(\"#search-exercise\").val(\"\");\n    $(\"#rounds\").val(0);\n    $(\".exercise-img\").attr(\"class\", \"exercise-img\");\n    $(\"#rearrange\").attr(\"class\", \"btn btn-primary hidden\");\n})\n\n\n\n\n\n\n//# sourceURL=webpack:///./src/customize.js?");

/***/ }),

/***/ "./src/draggleble.js":
/*!***************************!*\
  !*** ./src/draggleble.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Draggable; });\nclass Draggable {\n    constructor(){\n        this.dragSrcEl = null;\n        this.checkTarget = this.checkTarget.bind(this);\n        this.handleDragOver = this.handleDragOver.bind(this);\n        this.handleDragEnter = this.handleDragEnter.bind(this);\n        this.handleDragLeave = this.handleDragLeave.bind(this);\n        this.handleDrop = this.handleDrop.bind(this);\n        this.handleDragEnd = this.handleDragEnd.bind(this);\n        this.addDnDHandlers = this.addDnDHandlers.bind(this);\n    }\n\n    checkTarget(input){\n        let target;\n        if (input.tagName !== \"LI\"){\n            target = input.parentNode;\n        } else {\n            target = input;\n        }\n        return target\n    }\n    \n    handleDragStart(e){\n        const target = this.checkTarget(e.target);\n        this.dragSrcEl = target;\n        e.dataTransfer.effectAllowed = 'move';\n        e.dataTransfer.setData('text/html', target.outerHTML);\n\n        target.classList.add('dragElem');\n    }\n\n    handleDragOver(e){\n        if(e.preventDefault) {\n            e.preventDefault(); // Necessary. Allows us to drop.\n        }\n        const target = this.checkTarget(e.target);\n        target.classList.add(\"over\");\n        e.dataTransfer.dropEffect = 'move';  // See the section on the DataTransfer object.\n\n        return false;\n    }\n\n    handleDragEnter(e) {\n    // this / e.target is the current hover target.\n    }\n\n    handleDragLeave(e){\n        const target = this.checkTarget(e.target);\n        target.classList.remove(\"over\");\n    }\n\n    handleDrop(e){\n        if (e.stopPropagation) {\n            e.stopPropagation(); // Stops some browsers from redirecting.\n        }\n        const target = this.checkTarget(e.target);\n        // Don't do anything if dropping the same column we're dragging.\n        if (this.dragSrcEl != target) {\n            // Set the source column's HTML to the HTML of the column we dropped on.\n            //alert(this.outerHTML);\n            //dragSrcEl.innerHTML = this.innerHTML;\n            //this.innerHTML = e.dataTransfer.getData('text/html');\n            target.parentNode.removeChild(this.dragSrcEl);\n            const dropHTML = e.dataTransfer.getData('text/html');\n            target.insertAdjacentHTML('beforebegin', dropHTML);\n            const dropElem = target.previousSibling;\n            this.addDnDHandlers(dropElem);\n        }\n        target.classList.remove('over');\n        return false;\n    }\n\n    handleDragEnd(e){\n        const target = this.checkTarget(e.target);\n        target.classList.remove('over');\n        target.classList.remove('dragElem');\n    }\n\n    addDnDHandlers(elem) {\n        elem.addEventListener('dragstart', (e) => this.handleDragStart(e), false);\n        elem.addEventListener('dragenter', (e) => this.handleDragEnter(e), false)\n        elem.addEventListener('dragover', (e) => this.handleDragOver(e), false);\n        elem.addEventListener('dragleave', (e) => this.handleDragLeave(e), false);\n        elem.addEventListener('drop', (e) => this.handleDrop(e), false);\n        elem.addEventListener('dragend', (e) => this.handleDragEnd(e), false);\n    }\n}\n\n// var dragSrcEl = null;\n\n// function handleDragStart(e) {\n//     // Target (this) element is the source node.\n//     dragSrcEl = this;\n\n//     e.dataTransfer.effectAllowed = 'move';\n//     e.dataTransfer.setData('text/html', this.outerHTML);\n\n//     this.classList.add('dragElem');\n// }\n\n// function handleDragOver(e) {\n//     if (e.preventDefault) {\n//         e.preventDefault(); // Necessary. Allows us to drop.\n//     }\n//     this.classList.add('over');\n\n//     e.dataTransfer.dropEffect = 'move';  // See the section on the DataTransfer object.\n\n//     return false;\n// }\n\n// function handleDragEnter(e) {\n//     // this / e.target is the current hover target.\n// }\n\n// function handleDragLeave(e) {\n//     this.classList.remove('over');  // this / e.target is previous target element.\n// }\n\n// function handleDrop(e) {\n//     // this/e.target is current target element.\n\n//     if (e.stopPropagation) {\n//         e.stopPropagation(); // Stops some browsers from redirecting.\n//     }\n\n//     // Don't do anything if dropping the same column we're dragging.\n//     if (dragSrcEl != this) {\n//         // Set the source column's HTML to the HTML of the column we dropped on.\n//         //alert(this.outerHTML);\n//         //dragSrcEl.innerHTML = this.innerHTML;\n//         //this.innerHTML = e.dataTransfer.getData('text/html');\n//         this.parentNode.removeChild(dragSrcEl);\n//         var dropHTML = e.dataTransfer.getData('text/html');\n//         this.insertAdjacentHTML('beforebegin', dropHTML);\n//         var dropElem = this.previousSibling;\n//         addDnDHandlers(dropElem);\n\n//     }\n//     this.classList.remove('over');\n//     return false;\n// }\n\n// function handleDragEnd(e) {\n//     // this/e.target is the source node.\n//     this.classList.remove('over');\n\n//     /*[].forEach.call(cols, function (col) {\n//       col.classList.remove('over');\n//     });*/\n// }\n\n// function addDnDHandlers(elem) {\n//     elem.addEventListener('dragstart', handleDragStart, false);\n//     elem.addEventListener('dragenter', handleDragEnter, false)\n//     elem.addEventListener('dragover', handleDragOver, false);\n//     elem.addEventListener('dragleave', handleDragLeave, false);\n//     elem.addEventListener('drop', handleDrop, false);\n//     elem.addEventListener('dragend', handleDragEnd, false);\n\n// }\n\n// var cols = document.querySelectorAll('#columns .column');\n// [].forEach.call(cols, addDnDHandlers);\n\n\n\n//# sourceURL=webpack:///./src/draggleble.js?");

/***/ }),

/***/ "./src/exercises.js":
/*!**************************!*\
  !*** ./src/exercises.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Exercises; });\n/* harmony import */ var _draggleble__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./draggleble */ \"./src/draggleble.js\");\n\n\nclass Exercises {\n    constructor(){\n        this.rounds = 0;\n        this.workInterval = 0;\n        this.restInterval = 0;\n        this.options = {\n            'MOUNTAIN CLIMBERS': 'https://s3.amazonaws.com/kajabi-storefronts-production/products/10120/images/6PNsrUzvQYSXjv23Fqo7_mountain-climbers.gif',\n            'CRISS CROSS': 'https://s3.amazonaws.com/kajabi-storefronts-production/products/10120/images/GJW0xPsuRqiKt2gnmJ6I_criss-cross.gif',\n            'WIDE HIGH KNEES': 'https://s3.amazonaws.com/kajabi-storefronts-production/products/10120/images/Zx34kV6gQwu9A54BSRjM_widehighknees.gif',\n            'TRIPLE CRUNCHES': 'https://s3.amazonaws.com/kajabi-storefronts-production/products/10120/images/BaNQDSMdQzONCxYBoE9Q_triple-crunch.gif',\n            'PLANK JACKS': 'https://s3.amazonaws.com/kajabi-storefronts-production/products/10120/images/vww9wzsSRlOcYxxvopyT_plank-jacks.gif',\n            'SEATED WINDMILLS': 'https://s3.amazonaws.com/kajabi-storefronts-production/products/10120/images/5gtalT8xSoGkQBd6ptWR_seated-windmill.gif',\n            'SIDE LUNGE HOPS': 'https://s3.amazonaws.com/kajabi-storefronts-production/products/10120/images/2cjUYpzCSoqHev0EUaVK_Side-lunge-hops.gif',\n        }\n        this.appendAll();\n        this.selected = [];\n        this.arranged = [];\n        this.appendLi = this.appendLi.bind(this);\n        this.findMatches = this.findMatches.bind(this);\n        this.displayMatches = this.displayMatches.bind(this);\n        this.returnExercise = this.returnExercise.bind(this)\n        this.clearSelected = this.clearSelected.bind(this);\n        this.updateIntervals = this.updateIntervals.bind(this);\n        this.updateSequence = this.updateSequence.bind(this);\n        this.checkIfLess = this.checkIfLess.bind(this);\n        this.checkPrevSelected = this.checkPrevSelected.bind(this);\n    }\n\n\n\n    updateIntervals() {\n        const workInterval = document.getElementById('workInterval');\n        const restInterval = document.getElementById('restInterval');\n        const rounds = document.getElementById('rounds');\n        this.workInterval = Math.floor(workInterval.value * 1);\n        this.restInterval = Math.floor(restInterval.value * 1);\n        this.seconds = this.restInterval;\n        this.rounds = Math.floor(rounds.value * 1);\n    }\n\n    appendAll(){\n        const optionsKey = Object.keys(this.options);\n        const optionsValue = Object.values(this.options);\n        this.appendLi(optionsKey, optionsValue);\n    }\n\n    appendLi(keys, values) {\n        for (let i = 0; i < keys.length; i++) {\n            const searchResults = document.getElementById('search-results');\n            const li = document.createElement(\"li\");\n            const img = document.createElement(\"img\");\n            const p = document.createElement(\"p\");\n            p.innerHTML = keys[i];\n            img.src = values[i];\n            img.id = keys[i];\n            img.setAttribute(\"class\", \"exercise-img\");\n            img.addEventListener('click', (e) => {\n                e.preventDefault();\n                \n                if (e.target.classList.contains(\"selected\")){\n                    // remove from this.selected\n                    const key = e.target.id;\n                    for (let i = 0; i < this.selected.length; i++){\n                        if (Object.keys(this.selected[i])[0] === key){\n                            this.selected.splice(i, 1);\n                        }\n                    }\n                    e.target.classList.toggle(\"selected\");\n\n                } else {\n                    // check if number of workout has exceeded\n                    if (this.rounds === this.selected.length){\n                        alert(\"You've selected enough exercises!\");\n                        return;\n                    }\n                    // add into this.selected\n                    this.selected.push({\n                        [e.target.id]: this.options[e.target.id]\n                    })\n                    e.target.classList.toggle(\"selected\");\n                    this.checkIfLess();\n                }\n            });\n            li.appendChild(p);\n            li.appendChild(img);\n            searchResults.appendChild(li);\n        }\n    }\n    \n    findMatches(word, options){\n        word = word.split(' ').join().toUpperCase();\n        return options.filter(option => {\n            const regex = new RegExp(word, 'gi');\n            return option.match(regex);\n        })\n    }\n    \n    checkPrevSelected(searchResults){\n        const liArray = Array.from(searchResults.childNodes);\n        const selectedExercises = this.selected.map(ele => Object.keys(ele)[0]);\n        liArray.forEach(li => {\n            if (selectedExercises.includes(li.childNodes[0].innerHTML)){\n                li.childNodes[1].classList.toggle(\"selected\");\n            }\n        })\n    }\n    \n    \n    displayMatches () {\n        const searchBar = document.getElementById('search-exercise');\n        const matchArray = this.findMatches(searchBar.value, Object.keys(this.options));\n        if (matchArray.length === 0){\n            this.appendAll();\n        } else {\n            const prevSearchResults = document.getElementById('search-results');\n            while(prevSearchResults.firstChild){\n                prevSearchResults.removeChild(prevSearchResults.firstChild);\n            }\n            const optionsValue = matchArray.map(ele => this.options[ele]);\n            this.appendLi(matchArray, optionsValue);\n        }\n        const searchResults = document.getElementById('search-results');\n        this.checkPrevSelected(searchResults);\n    }\n\n    displaySelected(draggable){\n        const columns = document.getElementById('columns');\n        for (let i = 0; i < this.selected.length; i++){\n            const li = document.createElement(\"li\"); \n            li.setAttribute(\"class\", \"column\");\n            li.setAttribute(\"draggable\", true);\n            const key = Object.keys(this.selected[i])[0];\n            const header = document.createElement(\"header\"); \n            header.innerHTML = key;   \n            li.appendChild(header);\n            draggable.addDnDHandlers(li);\n            columns.appendChild(li);\n        }\n    }\n\n    checkIfLess(){\n        if (this.selected.length === this.rounds) {\n            const rearrange = document.getElementById('rearrange');\n            rearrange.classList.toggle(\"hidden\");\n            rearrange.addEventListener('click', () => {\n                this.displaySelected(new _draggleble__WEBPACK_IMPORTED_MODULE_0__[\"default\"]());\n            });\n        }\n        return false;\n    }\n\n    clearSelected(){\n        const workInterval = document.getElementById('workInterval');\n        const restInterval = document.getElementById('restInterval');\n        const rounds = document.getElementById('rounds');\n        const exerciseImg = Array.from(document.getElementsByClassName('exercise-img'));\n        exerciseImg.forEach(img => {\n            if (img.classList.contains(\"selected\")){\n                img.classList.remove(\"selected\");\n            }\n        });\n\n        const displaySelected = document.getElementById('columns');\n        while(displaySelected.firstChild){\n            debugger\n            displaySelected.removeChild(displaySelected.firstChild);\n        };\n        this.selected = [];\n        this.arranged = [];\n        this.workInterval = 0;\n        this.restInterval = 0;\n        this.rounds = 0;\n        workInterval.value = 0;\n        restInterval.value = 0;\n        rounds.value = 0;\n    }\n\n    updateSequence(){\n        const cols = Array.from(document.querySelectorAll('#columns .column'));\n        cols.forEach(col => {\n            const key = col.firstElementChild.innerHTML;\n            this.arranged.push({\n                [key]: this.options[key]\n            });\n        });\n        console.log(this.arranged);\n    }\n\n    returnExercise(){\n        return {\n            workInterval: this.workInterval,\n            restInterval: this.restInterval,\n            rounds: this.rounds,\n            arranged: this.arranged\n        };\n    }\n}\n\n\n\n//# sourceURL=webpack:///./src/exercises.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _customize__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./customize */ \"./src/customize.js\");\n/* harmony import */ var _customize__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_customize__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _timer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./timer */ \"./src/timer.js\");\n/* harmony import */ var _exercises__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./exercises */ \"./src/exercises.js\");\n/* harmony import */ var _draggleble__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./draggleble */ \"./src/draggleble.js\");\n\n\n\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/timer.js":
/*!**********************!*\
  !*** ./src/timer.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _exercises__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./exercises */ \"./src/exercises.js\");\n\n\nclass Timer {\n    constructor(){\n        this.workInterval = 0;\n        this.restInterval = 0;\n        this.arranged = [];\n        this.rounds = 0;\n        this.rest = false;\n        this.roundCount = 0;\n        this.interval;\n        this.paused = false;\n        this.seconds = this.restInterval;\n\n        this.countDown = this.countDown.bind(this);\n        this.checkStatus = this.checkStatus.bind(this);\n        this.changeStatus = this.changeStatus.bind(this);\n        this.startTimer = this.startTimer.bind(this);\n        this.pauseTimer = this.pauseTimer.bind(this);\n        this.resetTimer = this.resetTimer.bind(this);\n        this.update = this.update.bind(this)\n        this.checkFinish = this.checkFinish.bind(this);\n    }\n\n    update({workInterval, restInterval, rounds, arranged}){\n        this.workInterval = workInterval;\n        this.restInterval = restInterval;\n        this.seconds = this.restInterval;\n        this.arranged = arranged;\n        this.rounds = rounds;\n        secondStatus.innerHTML = this.restInterval;\n        document.getElementById(\"countdown-number\").textContent = this.restInterval;\n        debugger\n    }\n\n    countDown(){\n        this.seconds -= 1;\n        secondStatus.innerHTML = this.seconds;\n        document.getElementById(\"countdown-number\").textContent = this.seconds;\n        this.checkStatus();\n    }\n    checkStatus(){  \n        if (this.rest && this.seconds === 0) {\n            if (!this.checkFinish()){\n                this.rest = false;\n                this.changeStatus();\n            };\n        } else if (!this.rest && this.seconds === 0) {\n            this.rest = true;\n            this.roundCount += 1;\n            this.changeStatus();\n        }    \n    }\n\n    checkFinish(){\n        if (this.rounds === this.roundCount){            \n            this.resetTimer();\n            status.innerHTML = 'Congratulations! You have completed your workout today!';\n            document.getElementsByTagName(\"circle\")[0].style.animation = \"\";\n            return true;\n        }\n        return false;\n    }\n\n    changeStatus(){\n        if (status.innerHTML === 'Rest'){\n            this.seconds = this.workInterval + 1;\n            status.innerHTML = 'Work';\n            document.getElementsByTagName(\"circle\")[0].style.animation = `countdown ${this.workInterval}s linear infinite forwards`\n\n        } else {\n           \n            this.seconds = this.restInterval + 1;\n            status.innerHTML = 'Rest';\n            const imgHolder = document.getElementById('img-holder');\n            while(imgHolder.firstChild){\n                imgHolder.removeChild(imgHolder.firstChild);\n            }\n            const img = document.createElement(\"img\");\n            const p = document.createElement(\"p\");\n            p.innerHTML = Object.keys(this.arranged[this.roundCount]);\n            img.src = Object.values(this.arranged[this.roundCount]);\n            imgHolder.appendChild(img);\n            document.getElementsByTagName(\"circle\")[0].style.animation = `countdown ${this.restInterval}s linear infinite forwards`\n\n        };\n    }; \n\n    pauseTimer(e) {\n        // to resume the timer\n        if (this.paused){\n            this.interval = window.setInterval(this.countDown, 1000);\n            e.target.innerHTML = 'Pause'\n            this.paused = false;\n        } else {\n            // to pause the timer\n            window.clearInterval(this.interval);\n            e.target.innerHTML = 'Resume';\n            this.paused = true;\n        }\n    }\n\n    startTimer(e){\n        if (this.restInterval <= 0 || this.workInterval <= 0){\n            alert(\"Invalid intervals!\");\n            return;\n        }\n        this.interval = window.setInterval(this.countDown, 1000);\n        document.getElementsByTagName(\"circle\")[0].style.animation = `countdown ${this.restInterval}s linear infinite forwards`\n        if (pauseButton.classList.contains('hidden')){\n            pauseButton.classList.remove('hidden');\n        }\n        startButton.classList.add('hidden');\n\n        const imgHolder = document.getElementById('img-holder');\n        while (imgHolder.firstChild) {\n            imgHolder.removeChild(imgHolder.firstChild);\n        }\n        const img = document.createElement(\"img\");\n        const p = document.createElement(\"p\");\n        p.innerHTML = Object.keys(this.arranged[this.roundCount]);\n        img.src = Object.values(this.arranged[this.roundCount]);\n        imgHolder.appendChild(img);\n    }\n\n    resetTimer(e){\n        window.clearInterval(this.interval);\n        this.arranged = [];\n        this.interval = undefined;\n        this.workInterval = 0;\n        this.restInterval = 0;\n        this.seconds = 0;\n        this.rest = false;\n        this.paused = false;\n        this.roundCount = 0;\n        secondStatus.innerHTML = this.seconds;\n        document.getElementById(\"countdown-number\").textContent = this.seconds;\n        status.innerHTML = 'Rest';\n        \n        if (!pauseButton.classList.contains('hidden')){\n            pauseButton.classList.add('hidden');\n        }\n        pauseButton.innerHTML = 'Pause';\n        \n        if (startButton.classList.contains('hidden')){\n            startButton.classList.remove('hidden');\n        }\n\n        const imgHolder = document.getElementById('img-holder');\n        while (imgHolder.firstChild) {\n            imgHolder.removeChild(imgHolder.firstChild);\n        }\n    }\n\n}\n\n\n// customize timer and exercises\nconst exercises = new _exercises__WEBPACK_IMPORTED_MODULE_0__[\"default\"]();\nconst timer = new Timer();\nconst next = document.getElementById('next');\nconst searchBar = document.getElementById('search-exercise');\nconst save = document.getElementById('save');\nconst closeButtons = Array.from(document.getElementsByClassName(\"close-modal\"));\nconst secondStatus = document.getElementById('secondStatus');\nconst status = document.getElementById('status');\nconst startButton = document.getElementById('start-button');\nconst pauseButton = document.getElementById('pause-button');\nconst resetButton = document.getElementById('reset-button');\n\nnext.addEventListener('click', exercises.updateIntervals);\n\ncloseButtons.forEach(button => {\n    button.addEventListener(\"click\", exercises.clearSelected);\n    button.addEventListener(\"click\", timer.resetTimer);\n});\n\nsearchBar.addEventListener('change', exercises.displayMatches);\nsearchBar.addEventListener('keyup', exercises.displayMatches);\n\n\n\n\nsave.addEventListener('click', () => {\n    exercises.updateSequence();\n    timer.update(exercises.returnExercise());\n    exercises.clearSelected();\n});\n\n\nstartButton.addEventListener('click', timer.startTimer);\n\npauseButton.addEventListener('click', timer.pauseTimer);\n\nresetButton.addEventListener('click', timer.resetTimer);\n\n//# sourceURL=webpack:///./src/timer.js?");

/***/ })

/******/ });