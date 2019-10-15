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
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Customizable; });\nclass Customizable {\n\n    constructor(){\n        this.workInterval = 50;\n        this.restInterval = 10;\n        this.rounds = 28;\n        this.updateIntervals = this.updateIntervals.bind(this);\n    }\n\n    updateIntervals(){\n        this.workInterval = Math.floor(workInterval.value * 1);\n        this.restInterval = Math.floor(restInterval.value * 1);\n        this.rounds = Math.floor(rounds.value * 1);\n    }\n}\n\n\n\nconst customizable = new Customizable();\nconst settingButton = document.getElementById('settings');\nconst workInterval = document.getElementById('workInterval');\nconst restInterval = document.getElementById('restInterval');\nconst rounds = document.getElementById('rounds');\nsettingButton.addEventListener('click', customizable.updateIntervals)\n\n//# sourceURL=webpack:///./src/customize.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _src_customize__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../src/customize */ \"./src/customize.js\");\n/* harmony import */ var _timer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./timer */ \"./src/timer.js\");\n\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/timer.js":
/*!**********************!*\
  !*** ./src/timer.js ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Timer; });\n/* harmony import */ var _customize__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./customize */ \"./src/customize.js\");\n\nclass Timer {\n    constructor(workInterval, restInterval, rounds){\n        this.workInterval = workInterval;\n        this.restInterval = restInterval;\n        this.rounds = rounds;\n        this.rest = false;\n        this.interval;\n        this.paused = false;\n        this.seconds = this.restInterval;\n        this.countDown = this.countDown.bind(this);\n        this.checkStatus = this.checkStatus.bind(this);\n        this.changeStatus = this.changeStatus.bind(this);\n        this.startTimer = this.startTimer.bind(this);\n        this.pauseTimer = this.pauseTimer.bind(this);\n        this.resetTimer = this.resetTimer.bind(this);\n    }\n\n    countDown(){\n        this.seconds -= 1;\n        secondStatus.innerHTML = this.seconds;\n        this.checkStatus();\n    }\n\n    checkStatus(){\n        if (this.rest && this.seconds === 0){\n            this.rest = false;\n            this.changeStatus();\n        } else if (!this.rest && this.seconds === 0){\n            this.rest = true;\n            this.changeStatus();\n        }\n    }\n\n    changeStatus(){\n        if (status.innerHTML === 'Rest'){\n            this.seconds = this.workInterval + 1;\n            status.innerHTML = 'Work';\n        } else {\n            this.seconds = this.restInterval + 1;\n            status.innerHTML = 'Rest';\n        };\n    }; \n\n    pauseTimer(e) {\n        // to resume the timer\n        if (this.paused){\n            this.interval = window.setInterval(this.countDown, 1000);\n            e.target.innerHTML = 'Pause'\n            this.paused = false;\n        } else {\n            // to pause the timer\n            window.clearInterval(this.interval);\n            e.target.innerHTML = 'Resume';\n            this.paused = true;\n        }\n    }\n\n    startTimer(e){\n        this.interval = window.setInterval(this.countDown, 1000);\n        if (pauseButton.classList.contains('hidden')){\n            pauseButton.classList.remove('hidden');\n        }\n        startButton.classList.add('hidden');\n    }\n\n    resetTimer(e){\n        window.clearInterval(this.interval);\n\n        this.interval = undefined;\n        this.seconds = this.restInterval;\n        this.rest = false;\n        this.paused = false;\n\n        secondStatus.innerHTML = this.seconds;\n        status.innerHTML = 'Rest';\n\n        if (!pauseButton.classList.contains('hidden')){\n            pauseButton.classList.add('hidden');\n        }\n        pauseButton.innerHTML = 'Pause';\n        \n        if (startButton.classList.contains('hidden')){\n            startButton.classList.remove('hidden');\n        }\n    }\n\n}\n\nconst secondStatus = document.getElementById('secondStatus');\nconst timer = new Timer(10,10,2);\nconst status = document.getElementById('status');\nconst startButton = document.getElementById('start-button');\nconst pauseButton = document.getElementById('pause-button');\nconst resetButton = document.getElementById('reset-button');\nstartButton.addEventListener('click', timer.startTimer);\npauseButton.addEventListener('click', timer.pauseTimer);\nresetButton.addEventListener('click', timer.resetTimer);\n\n\n//# sourceURL=webpack:///./src/timer.js?");

/***/ })

/******/ });