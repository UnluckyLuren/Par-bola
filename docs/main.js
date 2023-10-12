/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (() => {

eval("// Código background\n\nready(function() {\n    initializeBackground();\n  });\n  \n  var resizeTimeout;\n  var resizeCooldown = 500;\n  var lastResizeTime = Date.now();\n  function initializeBackground() {\n    canvas = document.getElementById(\"stars\");\n    canvas.width = window.innerWidth;\n    canvas.height = window.innerHeight;\n    window.addEventListener(\"resize\", function() {\n      if (Date.now() - lastResizeTime < resizeCooldown && resizeTimeout) {\n        clearTimeout(resizeTimeout);\n        delete resizeTimeout;\n      }\n  \n      lastResizeTime = Date.now();\n      canvas.style.display = \"none\";\n      resizeTimeout = setTimeout(function() {\n        fadeIn(canvas, 500);\n        initializeStars();\n      }, 500);\n      canvas.width = window.innerWidth;\n      canvas.height = window.innerHeight;\n    });\n    initializeStars();\n    (window.requestAnimationFrame && requestAnimationFrame(paintLoop)) ||\n      setTimeout(paintLoop, ms);\n  }\n  \n  var canvas;\n  var stars = [];\n  \n  function rand(max) {\n    return Math.random() * max;\n  }\n  \n  function Star(canvas, size, speed) {\n    this.ctx = canvas.getContext(\"2d\");\n    this.size = size;\n    this.speed = speed;\n    this.x = rand(window.innerWidth);\n    this.y = rand(window.innerHeight);\n  }\n  \n  Star.prototype.animate = function(delta) {\n    this.x += this.speed * delta;\n    this.y -= this.speed * delta;\n    if (this.y < 0) {\n      this.y = window.innerHeight;\n    }\n    if (this.x > window.innerWidth) {\n      this.x = 0;\n    }\n    this.ctx.fillStyle = \"#ffffff\";\n    this.ctx.fillRect(this.x, this.y, this.size, this.size);\n  };\n  \n  function initializeStars() {\n    var winArea = window.innerWidth * window.innerHeight;\n    var smallStarsDensity = 0.0001;\n    var mediumStarsDensity = 0.00005;\n    var largeStarsDensity = 0.00002;\n    var smallStarsCount = winArea * smallStarsDensity;\n    var mediumStarsCount = winArea * mediumStarsDensity;\n    var largeStarsCount = winArea * largeStarsDensity;\n    stars = [];\n    for (var i = 0; i < smallStarsCount; i++) {\n      stars.push(new Star(canvas, 1, 30));\n    }\n  \n    for (var i = 0; i < mediumStarsCount; i++) {\n      stars.push(new Star(canvas, 2, 20));\n    }\n  \n    for (var i = 0; i < largeStarsCount; i++) {\n      stars.push(new Star(canvas, 3, 10));\n    }\n  }\n  \n  function drawStars(delta) {\n    for (var i = 0; i < stars.length; i++) {\n      stars[i].animate(delta);\n    }\n  }\n  \n  var ms = 16;\n  var lastPaintTime = 0;\n  function paintLoop(timestamp) {\n    canvas.getContext(\"2d\").clearRect(0, 0, canvas.width, canvas.height);\n    var delta =\n      (window.requestAnimationFrame ? timestamp - lastPaintTime : ms) / 1000;\n    if(delta > 0.05){\n      delta = 0.05;\n    }\n    drawStars(delta);\n    (window.requestAnimationFrame && requestAnimationFrame(paintLoop)) ||\n      setTimeout(paintLoop, ms);\n    lastPaintTime = timestamp;\n  }\n  \n  function fadeIn(element, duration, callback) {\n    element.style.opacity = 0;\n    element.style.display = \"block\";\n  \n    var startTime = Date.now();\n    var tick = function() {\n      var newOpacity = (Date.now() - startTime) / duration;\n      if (newOpacity > 1) {\n        newOpacity = 1;\n        callback && callback();\n      } else {\n        (window.requestAnimationFrame && requestAnimationFrame(tick)) ||\n          setTimeout(tick, 16);\n      }\n  \n      element.style.opacity = newOpacity;\n    };\n    tick();\n  }\n  \n  //http://youmightnotneedjquery.com/\n  function ready(fn) {\n    if (\n      document.attachEvent\n        ? document.readyState === \"complete\"\n        : document.readyState !== \"loading\"\n    ) {\n      fn();\n    } else {\n      document.addEventListener(\"DOMContentLoaded\", fn);\n    }\n  }\n  \n\n\n\n//# sourceURL=webpack://03-webpack-inicial/./src/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/index.js"]();
/******/ 	
/******/ })()
;