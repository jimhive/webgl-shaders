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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = isFunction

var toString = Object.prototype.toString

function isFunction (fn) {
  var string = toString.call(fn)
  return string === '[object Function]' ||
    (typeof fn === 'function' && string !== '[object RegExp]') ||
    (typeof window !== 'undefined' &&
     // IE8 and below
     (fn === window.setTimeout ||
      fn === window.alert ||
      fn === window.confirm ||
      fn === window.prompt))
};


/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = isCanvasVisible;
/* harmony export (immutable) */ __webpack_exports__["c"] = isPowerOf2;
/* harmony export (immutable) */ __webpack_exports__["d"] = isSafari;
/* unused harmony export nextHighestPowerOfTwo */
/* unused harmony export FormatNumberLength */
/* unused harmony export getMousePos */
/* harmony export (immutable) */ __webpack_exports__["b"] = isDiff;
/* unused harmony export subscribeMixin */
function isCanvasVisible(canvas) {
    return	((canvas.getBoundingClientRect().top + canvas.height) > 0) &&
        (canvas.getBoundingClientRect().top < (window.innerHeight || document.documentElement.clientHeight));
}

function isPowerOf2(value) {
    return (value & (value - 1)) === 0;
}

function isSafari () {
    return /^((?!chrome|android).)*safari/i.test(navigator.userAgent);
};

function nextHighestPowerOfTwo(x) {
    --x;
    for (let i = 1; i < 32; i <<= 1) {
        x = x | x >> i;
    }
    return x + 1;
}

function FormatNumberLength(num, length) {
    let r = num.toString();
    while (r.length < length) {
        r = '0' + r;
    }
    return r;
}

function getMousePos(canvas, evt) {
    let rect = canvas.getBoundingClientRect();
    return {
        x: evt.clientX - rect.left,
        y: evt.clientY - rect.top
    };
}

function isDiff(a, b) {
    if (a && b) {
        return a.toString() !== b.toString();
    }
    return false;
}

function subscribeMixin (target) {
    var listeners = new Set();

    return Object.assign(target, {

        subscribe(listener) {
            listeners.add(listener);
        },

        on(type, f) {
            let listener = {};
            listener[type] = f;
            listeners.add(listener);
        },

        unsubscribe(listener) {
            listeners.delete(listener);
        },

        unsubscribeAll() {
            listeners.clear();
        },

        trigger(event, ...data) {
            for (var listener of listeners) {
                if (typeof listener[event] === 'function') {
                    listener[event](...data);
                }
            }
        }
    });
}


/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = subscribeMixin;
function subscribeMixin (target) {
    var listeners = new Set();

    return Object.assign(target, {

        on(type, f) {
            let listener = {};
            listener[type] = f;
            listeners.add(listener);
        },

        off(type, f) {
            if (f) {
                let listener = {};
                listener[type] = f;
                listeners.delete(listener);
            }
            else {
                for (let item of listeners) {
                    for (let key of Object.keys(item)) {
                        if (key === type) {
                            listeners.delete(item);
                            return;
                        }
                    }
                }
            }
        },

        listSubscriptions() {
            for (let item of listeners) {
                console.log(item);
            }
        },

        subscribe(listener) {
            listeners.add(listener);
        },

        unsubscribe(listener) {
            listeners.delete(listener);
        },

        unsubscribeAll() {
            listeners.clear();
        },

        trigger(event, ...data) {
            for (var listener of listeners) {
                if (typeof listener[event] === 'function') {
                    listener[event](...data);
                }
            }
        }
    });
}


/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _GlslCanvas = __webpack_require__(4);

var _GlslCanvas2 = _interopRequireDefault(_GlslCanvas);

var _shaders = __webpack_require__(14);

var _shaders2 = _interopRequireDefault(_shaders);

var _styles = __webpack_require__(17);

var _styles2 = _interopRequireDefault(_styles);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var defaultShader = Object.keys(_shaders2.default)[0];

(function () {

  document.documentElement.style.backgroundColor = "black";

  var canvas = document.createElement("canvas");
  document.documentElement.appendChild(canvas);
  canvas.width = 800;
  canvas.height = 800;

  canvas.style.display = "block";
  canvas.style.position = "absolute";
  canvas.style.margin = "auto auto auto auto";
  canvas.style.top = "50%";
  canvas.style.left = "50%";
  canvas.style.transform = "translate(-50%,-50%)";

  var label = document.createElement("label");
  label.innerText = "Select a shader to load ";
  document.documentElement.appendChild(label);

  var dropdown = document.createElement("select");

  var pleaseSelect = document.createElement("option");
  pleaseSelect.innerText = "Select a shader to load...";
  dropdown.appendChild(pleaseSelect);

  Object.keys(_shaders2.default).map(function (shader) {
    var option = document.createElement("option");
    option.innerText = shader;
    option.value = shader;
    return option;
  }).forEach(function (option) {
    return dropdown.appendChild(option);
  });

  document.documentElement.appendChild(dropdown);

  var sandbox = void 0;

  function loadShader(shader) {

    if (dropdown.value !== shader) {
      dropdown.value = shader;
    }

    if (sandbox) sandbox.destroy();
    sandbox = undefined;

    sandbox = new _GlslCanvas2.default(canvas);

    sandbox.setUniform('u_resolution', canvas.width, canvas.height);
    sandbox.load(_shaders2.default[shader]);
  }

  dropdown.addEventListener("change", function (e) {
    loadShader(dropdown.value);
  });

  loadShader(defaultShader);
})();

/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_xhr__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_xhr___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_xhr__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__gl_gl__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__gl_Texture__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__tools_common__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__tools_mixin__ = __webpack_require__(2);
/*
The MIT License (MIT)

Copyright (c) 2015 Patricio Gonzalez Vivo ( http://www.patriciogonzalezvivo.com )

Permission is hereby granted, free of charge, to any person obtaining a copy of
this software and associated documentation files (the 'Software'), to deal in
the Software without restriction, including without limitation the rights to
use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of
the Software, and to permit persons to whom the Software is furnished to do so,
subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED 'AS IS', WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS
FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR
COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER
IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN
CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/









class GlslCanvas {
    constructor(canvas, options) {
        Object(__WEBPACK_IMPORTED_MODULE_4__tools_mixin__["a" /* subscribeMixin */])(this);

        options = options || {};

        this.width = canvas.clientWidth;
        this.height = canvas.clientHeight;

        this.canvas = canvas;
        this.gl = undefined;
        this.program = undefined;
        this.textures = {};
        this.uniforms = {};
        this.vbo = {};
        this.isValid = false;

        this.vertexString = options.vertexString || `
#ifdef GL_ES
precision mediump float;
#endif

attribute vec2 a_position;
attribute vec2 a_texcoord;

varying vec2 v_texcoord;

void main() {
    gl_Position = vec4(a_position, 0.0, 1.0);
    v_texcoord = a_texcoord;
}
`;
        this.fragmentString = options.fragmentString || `
#ifdef GL_ES
precision mediump float;
#endif

varying vec2 v_texcoord;

void main(){
    gl_FragColor = vec4(0.0);
}
`;

        // GL Context
        let gl = Object(__WEBPACK_IMPORTED_MODULE_1__gl_gl__["d" /* setupWebGL */])(canvas, options);
        if (!gl) {
            return;
        }
        this.gl = gl;
        this.timeLoad = this.timePrev = performance.now();
        this.timeDelta = 0.;
        this.forceRender = true;
        this.paused = false;

        // Allow alpha
        canvas.style.backgroundColor = options.backgroundColor || 'rgba(1,1,1,0)';

        // Load shader
        if (canvas.hasAttribute('data-fragment')) {
            this.fragmentString = canvas.getAttribute('data-fragment');
        }
        else if (canvas.hasAttribute('data-fragment-url')) {
            let source = canvas.getAttribute('data-fragment-url');
            __WEBPACK_IMPORTED_MODULE_0_xhr___default.a.get(source, (error, response, body) => {
                this.load(body, this.vertexString);
            });
        }

        // Load shader
        if (canvas.hasAttribute('data-vertex')) {
            this.vertexString = canvas.getAttribute('data-vertex');
        }
        else if (canvas.hasAttribute('data-vertex-url')) {
            let source = canvas.getAttribute('data-vertex-url');
            __WEBPACK_IMPORTED_MODULE_0_xhr___default.a.get(source, (error, response, body) => {
                this.load(this.fragmentString, body);
            });
        }

        this.load();

        if (!this.program) {
            return;
        }

        // Define Vertex buffer
        let texCoordsLoc = gl.getAttribLocation(this.program, 'a_texcoord');
        this.vbo.texCoords = gl.createBuffer();
        this.gl.bindBuffer(gl.ARRAY_BUFFER, this.vbo.texCoords);
        this.gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([0.0, 0.0, 1.0, 0.0, 0.0, 1.0, 0.0, 1.0, 1.0, 0.0, 1.0, 1.0]), gl.STATIC_DRAW);
        this.gl.enableVertexAttribArray(texCoordsLoc);
        this.gl.vertexAttribPointer(texCoordsLoc, 2, gl.FLOAT, false, 0, 0);

        let verticesLoc = gl.getAttribLocation(this.program, 'a_position');
        this.vbo.vertices = gl.createBuffer();
        this.gl.bindBuffer(gl.ARRAY_BUFFER, this.vbo.vertices);
        this.gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-1.0, -1.0, 1.0, -1.0, -1.0, 1.0, -1.0, 1.0, 1.0, -1.0, 1.0, 1.0]), gl.STATIC_DRAW);
        this.gl.enableVertexAttribArray(verticesLoc);
        this.gl.vertexAttribPointer(verticesLoc, 2, gl.FLOAT, false, 0, 0);

        // load TEXTURES
        if (canvas.hasAttribute('data-textures')) {
            let imgList = canvas.getAttribute('data-textures').split(',');
            for (let nImg in imgList) {
                this.setUniform('u_tex' + nImg, imgList[nImg]);
            }
        }

        // ========================== EVENTS
        let mouse = {
            x: 0,
            y: 0
        };
        document.addEventListener('mousemove', (e) => {
            mouse.x = e.clientX || e.pageX;
            mouse.y = e.clientY || e.pageY;
        }, false);

        let sandbox = this;
        function RenderLoop() {
            if (sandbox.nMouse > 1) {
                sandbox.setMouse(mouse);
            }
            sandbox.render();
            sandbox.forceRender = sandbox.resize();
            window.requestAnimationFrame(RenderLoop);
        }

        // Start
        this.setMouse({ x: 0, y: 0 });
        RenderLoop();
        return this;
    }

    destroy() {
        this.animated = false;
        this.isValid = false;
        for (let tex in this.textures) {
            this.gl.deleteTexture(tex);
        }
        this.textures = {};
        for (let att in this.attribs) {
            this.gl.deleteBuffer(this.attribs[att]);
        }
        this.gl.useProgram(null);
        this.gl.deleteProgram(this.program);
        this.program = null;
        this.gl = null;
    }

    load (fragString, vertString) {
        // Load vertex shader if there is one
        if (vertString) {
            this.vertexString = vertString;
        }

        // Load fragment shader if there is one
        if (fragString) {
            this.fragmentString = fragString;
        }

        this.animated = false;
        this.nDelta = (this.fragmentString.match(/u_delta/g) || []).length;
        this.nTime = (this.fragmentString.match(/u_time/g) || []).length;
        this.nDate = (this.fragmentString.match(/u_date/g) || []).length;
        this.nMouse = (this.fragmentString.match(/u_mouse/g) || []).length;
        this.animated = this.nDate > 1 || this.nTime > 1 || this.nMouse > 1;

        let nTextures = this.fragmentString.search(/sampler2D/g);
        if (nTextures) {
            let lines = this.fragmentString.split('\n');
            for (let i = 0; i < lines.length; i++) {
                let match = lines[i].match(/uniform\s*sampler2D\s*([\w]*);\s*\/\/\s*([\w|\:\/\/|\.|\-|\_]*)/i);
                if (match) {
                    let ext = match[2].split('.').pop().toLowerCase();
                    if (match[1] &&  match[2] && 
                        (ext === 'jpg' || ext === 'jpeg' || ext === 'png' || 
                         ext === 'ogv' || ext === 'webm' || ext === 'mp4')) {
                        this.setUniform(match[1], match[2]);
                    }
                }
                let main = lines[i].match(/\s*void\s*main\s*/g);
                if (main) {
                    break;
                }
            }
        }

        let vertexShader = Object(__WEBPACK_IMPORTED_MODULE_1__gl_gl__["b" /* createShader */])(this, this.vertexString, this.gl.VERTEX_SHADER);
        let fragmentShader = Object(__WEBPACK_IMPORTED_MODULE_1__gl_gl__["b" /* createShader */])(this, this.fragmentString, this.gl.FRAGMENT_SHADER);

        // If Fragment shader fails load a empty one to sign the error
        if (!fragmentShader) {
            fragmentShader = Object(__WEBPACK_IMPORTED_MODULE_1__gl_gl__["b" /* createShader */])(this, 'void main(){\n\tgl_FragColor = vec4(1.0);\n}', this.gl.FRAGMENT_SHADER);
            this.isValid = false;
        }
        else {
            this.isValid = true;
        }

        // Create and use program
        let program = Object(__WEBPACK_IMPORTED_MODULE_1__gl_gl__["a" /* createProgram */])(this, [vertexShader, fragmentShader]);//, [0,1],['a_texcoord','a_position']);
        this.gl.useProgram(program);

        // Delete shaders
        // this.gl.detachShader(program, vertexShader);
        // this.gl.detachShader(program, fragmentShader);
        this.gl.deleteShader(vertexShader);
        this.gl.deleteShader(fragmentShader);

        this.program = program;
        this.change = true;

        // Trigger event
        this.trigger('load', {});

        this.forceRender = true;
    }

    test (callback, fragString, vertString) {
        // Thanks to @thespite for the help here
        // https://www.khronos.org/registry/webgl/extensions/EXT_disjoint_timer_query/
        let pre_test_vert = this.vertexString;
        let pre_test_frag = this.fragmentString;
        let pre_test_paused = this.paused;

        let ext = this.gl.getExtension('EXT_disjoint_timer_query');
        let query = ext.createQueryEXT();
        let wasValid = this.isValid;

        if (fragString || vertString) {
            this.load(fragString, vertString);
            wasValid = this.isValid;
            this.forceRender = true;
            this.render();
        }

        this.paused = true;
        ext.beginQueryEXT(ext.TIME_ELAPSED_EXT, query);
        this.forceRender = true;
        this.render();
        ext.endQueryEXT(ext.TIME_ELAPSED_EXT);

        let sandbox = this;
        function finishTest() {
            // Revert changes... go back to normal
            sandbox.paused = pre_test_paused;
            if (fragString || vertString) {
                sandbox.load(pre_test_frag, pre_test_vert);
            }
        }
        function waitForTest() {
            sandbox.forceRender = true;
            sandbox.render();
            let available = ext.getQueryObjectEXT(query, ext.QUERY_RESULT_AVAILABLE_EXT);
            let disjoint = sandbox.gl.getParameter(ext.GPU_DISJOINT_EXT);
            if (available && !disjoint) {
                let ret = {
                    wasValid: wasValid,
                    frag: fragString || sandbox.fragmentString,
                    vert: vertString || sandbox.vertexString,
                    timeElapsedMs: ext.getQueryObjectEXT(query, ext.QUERY_RESULT_EXT)/1000000.0
                };
                finishTest();
                callback(ret);
            } else {
                window.requestAnimationFrame(waitForTest);
            }
        }
        waitForTest();
    }

    loadTexture (name, urlElementOrData, options) {
        if (!options) {
            options = {};
        }

        if (typeof urlElementOrData === 'string') {
            options.url = urlElementOrData;
        }
        else if (typeof urlElementOrData === 'object' && urlElementOrData.data && urlElementOrData.width && urlElementOrData.height) {
            options.data = urlElementOrData.data;
            options.width = urlElementOrData.width;
            options.height = urlElementOrData.height;
        }
        else if (typeof urlElementOrData === 'object') {
            options.element = urlElementOrData;
        }

        if (this.textures[name]) {
            if (this.textures[name]) {
                this.textures[name].load(options);
                this.textures[name].on('loaded', (args) => {
                    this.forceRender = true;
                });
            }
        }
        else {
            this.textures[name] = new __WEBPACK_IMPORTED_MODULE_2__gl_Texture__["a" /* default */](this.gl, name, options);
            this.textures[name].on('loaded', (args) => {
                this.forceRender = true;
            });
        }
        
    }

    refreshUniforms() {
        this.uniforms = {};
    }

    setUniform(name, ...value) {
        let u = {};
        u[name] = value;
        this.setUniforms(u);
    }

    setUniforms(uniforms) {
        let parsed = Object(__WEBPACK_IMPORTED_MODULE_1__gl_gl__["c" /* parseUniforms */])(uniforms);
        // Set each uniform
        for (let u in parsed) {
            if (parsed[u].type === 'sampler2D') {
                // For textures, we need to track texture units, so we have a special setter
                // this.uniformTexture(parsed[u].name, parsed[u].value[0]);
                this.loadTexture(parsed[u].name, parsed[u].value[0]);
            }
            else {
                this.uniform(parsed[u].method, parsed[u].type, parsed[u].name, parsed[u].value);
                this.forceRender = true;
            }
        }
    }

    setMouse(mouse) {
        // set the mouse uniform
        let rect = this.canvas.getBoundingClientRect();
        if (mouse &&
            mouse.x && mouse.x >= rect.left && mouse.x <= rect.right &&
            mouse.y && mouse.y >= rect.top && mouse.y <= rect.bottom) {
            this.uniform('2f', 'vec2', 'u_mouse', mouse.x - rect.left, this.canvas.height - (mouse.y - rect.top));
        }
    }

	// ex: program.uniform('3f', 'position', x, y, z);
    uniform (method, type, name, ...value) { // 'value' is a method-appropriate arguments list
        this.uniforms[name] = this.uniforms[name] || {};
        let uniform = this.uniforms[name];
        let change = Object(__WEBPACK_IMPORTED_MODULE_3__tools_common__["b" /* isDiff */])(uniform.value, value);
        if (change || this.change || uniform.location === undefined || uniform.value === undefined) {
            uniform.name = name;
            uniform.value = value;
            uniform.type = type;
            uniform.method = 'uniform' + method;
            uniform.location = this.gl.getUniformLocation(this.program, name);

            this.gl[uniform.method].apply(this.gl, [uniform.location].concat(uniform.value));
        }
    }

    uniformTexture(name, texture, options) {
        if (this.textures[name] === undefined) {
            this.loadTexture(name, texture, options);
        }
        else {
            this.uniform('1i', 'sampler2D', name, this.texureIndex);
            this.textures[name].bind(this.texureIndex);
            this.uniform('2f', 'vec2', name + 'Resolution', this.textures[name].width, this.textures[name].height);
            this.texureIndex++;
        }
    }

    resize() {
        if (this.width !== this.canvas.clientWidth ||
            this.height !== this.canvas.clientHeight) {
            let realToCSSPixels = window.devicePixelRatio || 1;

            // Lookup the size the browser is displaying the canvas in CSS pixels
            // and compute a size needed to make our drawingbuffer match it in
            // device pixels.
            let displayWidth = Math.floor(this.gl.canvas.clientWidth * realToCSSPixels);
            let displayHeight = Math.floor(this.gl.canvas.clientHeight * realToCSSPixels);

            // Check if the canvas is not the same size.
            if (this.gl.canvas.width !== displayWidth ||
                this.gl.canvas.height !== displayHeight) {
                // Make the canvas the same size
                this.gl.canvas.width = displayWidth;
                this.gl.canvas.height = displayHeight;
                // Set the viewport to match
                this.gl.viewport(0, 0, this.gl.canvas.width, this.gl.canvas.height);
                // this.gl.viewport(0, 0, this.gl.drawingBufferWidth, this.gl.drawingBufferHeight);
            }
            this.width = this.canvas.clientWidth;
            this.height = this.canvas.clientHeight;
            return true;
        }
        else {
            return false;
        }
    }

    render () {
        this.visible = Object(__WEBPACK_IMPORTED_MODULE_3__tools_common__["a" /* isCanvasVisible */])(this.canvas);
        if (this.forceRender ||
            (this.animated && this.visible && ! this.paused)) {

            let date = new Date();
            let now = performance.now();
            this.timeDelta =  (now - this.timePrev) / 1000.0;
            this.timePrev = now;
            if (this.nDelta > 1) {
                // set the delta time uniform
                this.uniform('1f', 'float', 'u_delta', this.timeDelta);
            }

            if (this.nTime > 1 ) {
                // set the elapsed time uniform
                this.uniform('1f', 'float', 'u_time', (now - this.timeLoad) / 1000.0);
            }

            if (this.nDate) {
                // Set date uniform: year/month/day/time_in_sec
                this.uniform('4f', 'float', 'u_date', date.getFullYear(), date.getMonth(), date.getDate(), date.getHours()*3600 + date.getMinutes()*60 + date.getSeconds() + date.getMilliseconds() * 0.001 );
            }

            // set the resolution uniform
            this.uniform('2f', 'vec2', 'u_resolution', this.canvas.width, this.canvas.height);

            this.texureIndex = 0;
            for (let tex in this.textures) {
                this.uniformTexture(tex);
            }

            // Draw the rectangle.
            this.gl.drawArrays(this.gl.TRIANGLES, 0, 6);

            // Trigger event
            this.trigger('render', {});

            this.change = false;
            this.forceRender = false;
        }
    }

    pause () {
        this.paused = true;
    }

    play () {
        this.paused = false;
    }

    version() {
        return '0.0.25';
    }
}
/* harmony export (immutable) */ __webpack_exports__["default"] = GlslCanvas;


window.GlslCanvas = GlslCanvas;

function loadAllGlslCanvas() {
    var list = document.getElementsByClassName('glslCanvas');
    if (list.length > 0) {
        window.glslCanvases = [];
        for (var i = 0; i < list.length; i++) {
            var sandbox = new GlslCanvas(list[i]);
            if (sandbox.isValid) {
                window.glslCanvases.push(sandbox);
            }
        }
    }
}

window.addEventListener('load', function () {
    loadAllGlslCanvas();
});


/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var window = __webpack_require__(6)
var isFunction = __webpack_require__(0)
var parseHeaders = __webpack_require__(8)
var xtend = __webpack_require__(11)

module.exports = createXHR
createXHR.XMLHttpRequest = window.XMLHttpRequest || noop
createXHR.XDomainRequest = "withCredentials" in (new createXHR.XMLHttpRequest()) ? createXHR.XMLHttpRequest : window.XDomainRequest

forEachArray(["get", "put", "post", "patch", "head", "delete"], function(method) {
    createXHR[method === "delete" ? "del" : method] = function(uri, options, callback) {
        options = initParams(uri, options, callback)
        options.method = method.toUpperCase()
        return _createXHR(options)
    }
})

function forEachArray(array, iterator) {
    for (var i = 0; i < array.length; i++) {
        iterator(array[i])
    }
}

function isEmpty(obj){
    for(var i in obj){
        if(obj.hasOwnProperty(i)) return false
    }
    return true
}

function initParams(uri, options, callback) {
    var params = uri

    if (isFunction(options)) {
        callback = options
        if (typeof uri === "string") {
            params = {uri:uri}
        }
    } else {
        params = xtend(options, {uri: uri})
    }

    params.callback = callback
    return params
}

function createXHR(uri, options, callback) {
    options = initParams(uri, options, callback)
    return _createXHR(options)
}

function _createXHR(options) {
    if(typeof options.callback === "undefined"){
        throw new Error("callback argument missing")
    }

    var called = false
    var callback = function cbOnce(err, response, body){
        if(!called){
            called = true
            options.callback(err, response, body)
        }
    }

    function readystatechange() {
        if (xhr.readyState === 4) {
            setTimeout(loadFunc, 0)
        }
    }

    function getBody() {
        // Chrome with requestType=blob throws errors arround when even testing access to responseText
        var body = undefined

        if (xhr.response) {
            body = xhr.response
        } else {
            body = xhr.responseText || getXml(xhr)
        }

        if (isJson) {
            try {
                body = JSON.parse(body)
            } catch (e) {}
        }

        return body
    }

    function errorFunc(evt) {
        clearTimeout(timeoutTimer)
        if(!(evt instanceof Error)){
            evt = new Error("" + (evt || "Unknown XMLHttpRequest Error") )
        }
        evt.statusCode = 0
        return callback(evt, failureResponse)
    }

    // will load the data & process the response in a special response object
    function loadFunc() {
        if (aborted) return
        var status
        clearTimeout(timeoutTimer)
        if(options.useXDR && xhr.status===undefined) {
            //IE8 CORS GET successful response doesn't have a status field, but body is fine
            status = 200
        } else {
            status = (xhr.status === 1223 ? 204 : xhr.status)
        }
        var response = failureResponse
        var err = null

        if (status !== 0){
            response = {
                body: getBody(),
                statusCode: status,
                method: method,
                headers: {},
                url: uri,
                rawRequest: xhr
            }
            if(xhr.getAllResponseHeaders){ //remember xhr can in fact be XDR for CORS in IE
                response.headers = parseHeaders(xhr.getAllResponseHeaders())
            }
        } else {
            err = new Error("Internal XMLHttpRequest Error")
        }
        return callback(err, response, response.body)
    }

    var xhr = options.xhr || null

    if (!xhr) {
        if (options.cors || options.useXDR) {
            xhr = new createXHR.XDomainRequest()
        }else{
            xhr = new createXHR.XMLHttpRequest()
        }
    }

    var key
    var aborted
    var uri = xhr.url = options.uri || options.url
    var method = xhr.method = options.method || "GET"
    var body = options.body || options.data
    var headers = xhr.headers = options.headers || {}
    var sync = !!options.sync
    var isJson = false
    var timeoutTimer
    var failureResponse = {
        body: undefined,
        headers: {},
        statusCode: 0,
        method: method,
        url: uri,
        rawRequest: xhr
    }

    if ("json" in options && options.json !== false) {
        isJson = true
        headers["accept"] || headers["Accept"] || (headers["Accept"] = "application/json") //Don't override existing accept header declared by user
        if (method !== "GET" && method !== "HEAD") {
            headers["content-type"] || headers["Content-Type"] || (headers["Content-Type"] = "application/json") //Don't override existing accept header declared by user
            body = JSON.stringify(options.json === true ? body : options.json)
        }
    }

    xhr.onreadystatechange = readystatechange
    xhr.onload = loadFunc
    xhr.onerror = errorFunc
    // IE9 must have onprogress be set to a unique function.
    xhr.onprogress = function () {
        // IE must die
    }
    xhr.onabort = function(){
        aborted = true;
    }
    xhr.ontimeout = errorFunc
    xhr.open(method, uri, !sync, options.username, options.password)
    //has to be after open
    if(!sync) {
        xhr.withCredentials = !!options.withCredentials
    }
    // Cannot set timeout with sync request
    // not setting timeout on the xhr object, because of old webkits etc. not handling that correctly
    // both npm's request and jquery 1.x use this kind of timeout, so this is being consistent
    if (!sync && options.timeout > 0 ) {
        timeoutTimer = setTimeout(function(){
            if (aborted) return
            aborted = true//IE9 may still call readystatechange
            xhr.abort("timeout")
            var e = new Error("XMLHttpRequest timeout")
            e.code = "ETIMEDOUT"
            errorFunc(e)
        }, options.timeout )
    }

    if (xhr.setRequestHeader) {
        for(key in headers){
            if(headers.hasOwnProperty(key)){
                xhr.setRequestHeader(key, headers[key])
            }
        }
    } else if (options.headers && !isEmpty(options.headers)) {
        throw new Error("Headers cannot be set on an XDomainRequest object")
    }

    if ("responseType" in options) {
        xhr.responseType = options.responseType
    }

    if ("beforeSend" in options &&
        typeof options.beforeSend === "function"
    ) {
        options.beforeSend(xhr)
    }

    // Microsoft Edge browser sends "undefined" when send is called with undefined value.
    // XMLHttpRequest spec says to pass null as body to indicate no body
    // See https://github.com/naugtur/xhr/issues/100.
    xhr.send(body || null)

    return xhr


}

function getXml(xhr) {
    if (xhr.responseType === "document") {
        return xhr.responseXML
    }
    var firefoxBugTakenEffect = xhr.responseXML && xhr.responseXML.documentElement.nodeName === "parsererror"
    if (xhr.responseType === "" && !firefoxBugTakenEffect) {
        return xhr.responseXML
    }

    return null
}

function noop() {}


/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {var win;

if (typeof window !== "undefined") {
    win = window;
} else if (typeof global !== "undefined") {
    win = global;
} else if (typeof self !== "undefined"){
    win = self;
} else {
    win = {};
}

module.exports = win;

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(7)))

/***/ }),
/* 7 */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || Function("return this")() || (1,eval)("this");
} catch(e) {
	// This works if the window reference is available
	if(typeof window === "object")
		g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

var trim = __webpack_require__(9)
  , forEach = __webpack_require__(10)
  , isArray = function(arg) {
      return Object.prototype.toString.call(arg) === '[object Array]';
    }

module.exports = function (headers) {
  if (!headers)
    return {}

  var result = {}

  forEach(
      trim(headers).split('\n')
    , function (row) {
        var index = row.indexOf(':')
          , key = trim(row.slice(0, index)).toLowerCase()
          , value = trim(row.slice(index + 1))

        if (typeof(result[key]) === 'undefined') {
          result[key] = value
        } else if (isArray(result[key])) {
          result[key].push(value)
        } else {
          result[key] = [ result[key], value ]
        }
      }
  )

  return result
}

/***/ }),
/* 9 */
/***/ (function(module, exports) {


exports = module.exports = trim;

function trim(str){
  return str.replace(/^\s*|\s*$/g, '');
}

exports.left = function(str){
  return str.replace(/^\s*/, '');
};

exports.right = function(str){
  return str.replace(/\s*$/, '');
};


/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

var isFunction = __webpack_require__(0)

module.exports = forEach

var toString = Object.prototype.toString
var hasOwnProperty = Object.prototype.hasOwnProperty

function forEach(list, iterator, context) {
    if (!isFunction(iterator)) {
        throw new TypeError('iterator must be a function')
    }

    if (arguments.length < 3) {
        context = this
    }
    
    if (toString.call(list) === '[object Array]')
        forEachArray(list, iterator, context)
    else if (typeof list === 'string')
        forEachString(list, iterator, context)
    else
        forEachObject(list, iterator, context)
}

function forEachArray(array, iterator, context) {
    for (var i = 0, len = array.length; i < len; i++) {
        if (hasOwnProperty.call(array, i)) {
            iterator.call(context, array[i], i, array)
        }
    }
}

function forEachString(string, iterator, context) {
    for (var i = 0, len = string.length; i < len; i++) {
        // no such thing as a sparse string.
        iterator.call(context, string.charAt(i), i, string)
    }
}

function forEachObject(object, iterator, context) {
    for (var k in object) {
        if (hasOwnProperty.call(object, k)) {
            iterator.call(context, object[k], k, object)
        }
    }
}


/***/ }),
/* 11 */
/***/ (function(module, exports) {

module.exports = extend

var hasOwnProperty = Object.prototype.hasOwnProperty;

function extend() {
    var target = {}

    for (var i = 0; i < arguments.length; i++) {
        var source = arguments[i]

        for (var key in source) {
            if (hasOwnProperty.call(source, key)) {
                target[key] = source[key]
            }
        }
    }

    return target
}


/***/ }),
/* 12 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["d"] = setupWebGL;
/* unused harmony export create3DContext */
/* harmony export (immutable) */ __webpack_exports__["b"] = createShader;
/* harmony export (immutable) */ __webpack_exports__["a"] = createProgram;
/* harmony export (immutable) */ __webpack_exports__["c"] = parseUniforms;
let lastError = '';

/**
 * Creates the HTLM for a failure message
 * @param {string} canvasContainerId id of container of th
 *        canvas.
 * @return {string} The html.
 */
function makeFailHTML(msg) {
    return `
<table style="background-color: #8CE; width: 100%; height: 100%;"><tr>
<td align="center">
<div style="display: table-cell; vertical-align: middle;">
<div style="">` + msg + `</div>
</div>
</td></tr></table>
`;
}

/**
 * Mesasge for getting a webgl browser
 * @type {string}
 */
let GET_A_WEBGL_BROWSER = `
	This page requires a browser that supports WebGL.<br/>
	<a href="http://get.webgl.org">Click here to upgrade your browser.</a>
`;

/**
 * Mesasge for need better hardware
 * @type {string}
 */
let OTHER_PROBLEM = `
	It does not appear your computer can support WebGL.<br/>
	<a href="http://get.webgl.org/troubleshooting/">Click here for more information.</a>
`;

/**
 * Creates a webgl context. If creation fails it will
 * change the contents of the container of the <canvas>
 * tag to an error message with the correct links for WebGL.
 * @param {Element} canvas. The canvas element to create a
 *     context from.
 * @param {WebGLContextCreationAttirbutes} optAttribs Any
 *     creation attributes you want to pass in.
 * @return {WebGLRenderingContext} The created context.
 */
function setupWebGL (canvas, optAttribs) {
    function showLink(str) {
        let container = canvas.parentNode;
        if (container) {
            container.innerHTML = makeFailHTML(str);
        }
    }

    if (!window.WebGLRenderingContext) {
        showLink(GET_A_WEBGL_BROWSER);
        return null;
    }

    let context = create3DContext(canvas, optAttribs);
    if (!context) {
        showLink(OTHER_PROBLEM);
    }
    context.getExtension('OES_standard_derivatives');
    return context;
}

/**
 * Creates a webgl context.
 * @param {!Canvas} canvas The canvas tag to get context
 *     from. If one is not passed in one will be created.
 * @return {!WebGLContext} The created context.
 */
function create3DContext(canvas, optAttribs) {
    let names = ['webgl', 'experimental-webgl'];
    let context = null;
    for (var ii = 0; ii < names.length; ++ii) {
        try {
            context = canvas.getContext(names[ii], optAttribs);
        } catch(e) {
            if (context) {
                break;
            }
        }
    }
    return context;
}

/*
 *	Create a Vertex of a specific type (gl.VERTEX_SHADER/)
 */
function createShader(main, source, type) {
    let gl = main.gl;

    let shader = gl.createShader(type);
    gl.shaderSource(shader, source);
    gl.compileShader(shader);

    let compiled = gl.getShaderParameter(shader, gl.COMPILE_STATUS);

    if (!compiled) {
        // Something went wrong during compilation; get the error
        lastError = gl.getShaderInfoLog(shader);
        console.error('*** Error compiling shader ' + shader + ':' + lastError);
        main.trigger('error', { shader: shader, source: source, type: type, error: lastError });
        gl.deleteShader(shader);
        return null;
    }

    return shader;
}

/**
 * Loads a shader.
 * @param {!WebGLContext} gl The WebGLContext to use.
 * @param {string} shaderSource The shader source.
 * @param {number} shaderType The type of shader.
 * @param {function(string): void) opt_errorCallback callback for errors.
 * @return {!WebGLShader} The created shader.
 */
function createProgram(main, shaders, optAttribs, optLocations) {
    let gl = main.gl;

    let program = gl.createProgram();
    for (let ii = 0; ii < shaders.length; ++ii) {
        gl.attachShader(program, shaders[ii]);
    }
    if (optAttribs) {
        for (let ii = 0; ii < optAttribs.length; ++ii) {
            gl.bindAttribLocation(
            program,
            optLocations ? optLocations[ii] : ii,
            optAttribs[ii]);
        }
    }
    gl.linkProgram(program);

    // Check the link status
    let linked = gl.getProgramParameter(program, gl.LINK_STATUS);
    if (!linked) {
        // something went wrong with the link
        lastError = gl.getProgramInfoLog(program);
        console.log('Error in program linking:' + lastError);
        gl.deleteProgram(program);
        return null;
    }
    return program;
}

// By Brett Camber on
// https://github.com/tangrams/tangram/blob/master/src/gl/glsl.js
function parseUniforms(uniforms, prefix = null) {
    let parsed = [];

    for (let name in uniforms) {
        let uniform = uniforms[name];
        let u;

        if (prefix) {
            name = prefix + '.' + name;
        }

        // Single float
        if (typeof uniform === 'number') {
            parsed.push({
                type: 'float',
                method: '1f',
                name,
                value: uniform
            });
        }
        // Array: vector, array of floats, array of textures, or array of structs
        else if (Array.isArray(uniform)) {
            // Numeric values
            if (typeof uniform[0] === 'number') {
                // float vectors (vec2, vec3, vec4)
                if (uniform.length === 1) {
                    parsed.push({
                        type: 'float',
                        method: '1f',
                        name,
                        value: uniform
                    });
                }
                // float vectors (vec2, vec3, vec4)
                else if (uniform.length >= 2 && uniform.length <= 4) {
                    parsed.push({
                        type: 'vec' + uniform.length,
                        method: uniform.length + 'fv',
                        name,
                        value: uniform
                    });
                }
                // float array
                else if (uniform.length > 4) {
                    parsed.push({
                        type: 'float[]',
                        method: '1fv',
                        name: name + '[0]',
                        value: uniform
                    });
                }
                // TODO: assume matrix for (typeof == Float32Array && length == 16)?
            }
            // Array of textures
            else if (typeof uniform[0] === 'string') {
                parsed.push({
                    type: 'sampler2D',
                    method: '1i',
                    name: name,
                    value: uniform
                });
            }
            // Array of arrays - but only arrays of vectors are allowed in this case
            else if (Array.isArray(uniform[0]) && typeof uniform[0][0] === 'number') {
                // float vectors (vec2, vec3, vec4)
                if (uniform[0].length >= 2 && uniform[0].length <= 4) {
                    // Set each vector in the array
                    for (u = 0; u < uniform.length; u++) {
                        parsed.push({
                            type: 'vec' + uniform[0].length,
                            method: uniform[u].length + 'fv',
                            name: name + '[' + u + ']',
                            value: uniform[u]
                        });
                    }
                }
                // else error?
            }
            // Array of structures
            else if (typeof uniform[0] === 'object') {
                for (u = 0; u < uniform.length; u++) {
                    // Set each struct in the array
                    parsed.push(...parseUniforms(uniform[u], name + '[' + u + ']'));
                }
            }
        }
        // Boolean
        else if (typeof uniform === 'boolean') {
            parsed.push({
                type: 'bool',
                method: '1i',
                name,
                value: uniform
            });
        }
        // Texture
        else if (typeof uniform === 'string') {
            parsed.push({
                type: 'sampler2D',
                method: '1i',
                name,
                value: uniform
            });
        }
        // Structure
        else if (typeof uniform === 'object') {
            // Set each field in the struct
            parsed.push(...parseUniforms(uniform, name));
        }
        // TODO: support other non-float types? (int, etc.)
    }
    return parsed;
}


/***/ }),
/* 13 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__tools_common__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__tools_mixin__ = __webpack_require__(2);
// Texture management



// GL texture wrapper object for keeping track of a global set of textures, keyed by a unique user-defined name
class Texture {
    constructor(gl, name, options = {}) {
        Object(__WEBPACK_IMPORTED_MODULE_1__tools_mixin__["a" /* subscribeMixin */])(this);

        this.gl = gl;
        this.texture = gl.createTexture();
        if (this.texture) {
            this.valid = true;
        }
        this.bind();

        this.name = name;
        this.source = null;
        this.sourceType = null;
        this.loading = null; // a Promise object to track the loading state of this texture

        // Default to a 1-pixel black texture so we can safely render while we wait for an image to load
        // See: http://stackoverflow.com/questions/19722247/webgl-wait-for-texture-to-load
        this.setData(1, 1, new Uint8Array([0, 0, 0, 255]), { filtering: 'linear' });
        this.setFiltering(options.filtering);

        this.load(options);
    }

    // Destroy a single texture instance
    destroy() {
        if (!this.valid) {
            return;
        }
        this.gl.deleteTexture(this.texture);
        this.texture = null;
        delete this.data;
        this.data = null;
        this.valid = false;
    }

    bind(unit) {
        if (!this.valid) {
            return;
        }
        if (typeof unit === 'number') {
            if (Texture.activeUnit !== unit) {
                this.gl.activeTexture(this.gl.TEXTURE0 + unit);
                Texture.activeUnit = unit;
            }
        }
        if (Texture.activeTexture !== this.texture) {
            this.gl.bindTexture(this.gl.TEXTURE_2D, this.texture);
            Texture.activeTexture = this.texture;
        }
    }

    load(options = {}) {
        this.loading = null;

        if (typeof options.url === 'string') {
            if (this.url === undefined || options.url !== this.url) {
                this.setUrl(options.url, options);
            }
        }
        else if (options.element) {
            this.setElement(options.element, options);
        }
        else if (options.data && options.width && options.height) {
            this.setData(options.width, options.height, options.data, options);
        }
    }

    // Sets texture from an url
    setUrl(url, options = {}) {
        if (!this.valid) {
            return;
        }

        this.url = url; // save URL reference (will be overwritten when element is loaded below)
        this.source = this.url;
        this.sourceType = 'url';

        this.loading = new Promise((resolve, reject) => {
            let ext = url.split('.').pop().toLowerCase();
            let isVideo = (ext === 'ogv' || ext === 'webm' || ext === 'mp4');

            let element = undefined
            if (isVideo) {
                element = document.createElement('video');
                element.autoplay = true;
                options.filtering = 'nearest';
                // element.preload = 'auto';
                // element.style.display = 'none';
                // document.body.appendChild(element);
            } else {
                element = new Image();
            }

            element.onload = () => {
                try {
                    this.setElement(element, options);
                }
                catch (e) {
                    console.log(`Texture '${this.name}': failed to load url: '${this.source}'`, e, options);
                }
                resolve(this);
            };
            element.onerror = e => {
                // Warn and resolve on error
                console.log(`Texture '${this.name}': failed to load url: '${this.source}'`, e, options);
                resolve(this);
            };

            // Safari has a bug loading data-URL elements with CORS enabled, so it must be disabled in that case
            // https://bugs.webkit.org/show_bug.cgi?id=123978
            if (!(Object(__WEBPACK_IMPORTED_MODULE_0__tools_common__["d" /* isSafari */])() && this.source.slice(0, 5) === 'data:')) {
                element.crossOrigin = 'anonymous';
            }

            element.src = this.source;
            if (isVideo) {
                this.setElement(element, options);
            }
        });
        return this.loading;
    }

    // Sets texture to a raw image buffer
    setData(width, height, data, options = {}) {
        this.width = width;
        this.height = height;

        this.source = data;
        this.sourceType = 'data';

        this.update(options);
        this.setFiltering(options);

        this.loading = Promise.resolve(this);
        return this.loading;
    }

    // Sets the texture to track a element (canvas/image)
    setElement(element, options) {
        let el = element;

        // a string element is interpeted as a CSS selector
        if (typeof element === 'string') {
            element = document.querySelector(element);
        }

        if (element instanceof HTMLCanvasElement ||
            element instanceof HTMLImageElement ||
            element instanceof HTMLVideoElement) {
            this.source = element;
            this.sourceType = 'element';

            if (element instanceof HTMLVideoElement) {
                element.addEventListener('canplaythrough', () => {
                    this.intervalID = setInterval(()=>{
                        this.update(options);
                    }, 15);
                }, true);
                element.addEventListener('ended', () => {
                    element.currentTime = 0;
                    element.play();
                }, true);
            } else {
                this.update(options);
            }            
            this.setFiltering(options);
        }
        else {
            let msg = `the 'element' parameter (\`element: ${JSON.stringify(el)}\`) must be a CSS `;
            msg += `selector string, or a <canvas>, <image> or <video> object`;
            console.log(`Texture '${this.name}': ${msg}`, options);
        }

        this.loading = Promise.resolve(this);
        return this.loading;
    }

    // Uploads current image or buffer to the GPU (can be used to update animated textures on the fly)
    update(options = {}) {
        if (!this.valid) {
            return;
        }

        this.bind();
        this.gl.pixelStorei(this.gl.UNPACK_FLIP_Y_WEBGL, (options.UNPACK_FLIP_Y_WEBGL === false ? false : true));
        this.gl.pixelStorei(this.gl.UNPACK_PREMULTIPLY_ALPHA_WEBGL, options.UNPACK_PREMULTIPLY_ALPHA_WEBGL || false);

        // Image or Canvas element
        if (this.sourceType === 'element' &&
            ((this.source instanceof HTMLCanvasElement) || 
             (this.source instanceof HTMLVideoElement) ||
             (this.source instanceof HTMLImageElement && this.source.complete))) {
            if (this.source instanceof HTMLVideoElement) {
                this.width = this.source.videoWidth;
                this.height = this.source.videoHeight;
            } else {
                this.width = this.source.width;
                this.height = this.source.height;
            }
            this.gl.texImage2D(this.gl.TEXTURE_2D, 0, this.gl.RGBA, this.gl.RGBA, this.gl.UNSIGNED_BYTE, this.source);
        }
        // Raw image buffer
        else if (this.sourceType === 'data') {
            this.gl.texImage2D(this.gl.TEXTURE_2D, 0, this.gl.RGBA, this.width, this.height, 0, this.gl.RGBA, this.gl.UNSIGNED_BYTE, this.source);
        }
        this.trigger('loaded', this);
    }

    // Determines appropriate filtering mode
    setFiltering (options = {}) {
        if (!this.valid) {
            return;
        }

        this.powerOf2 = Object(__WEBPACK_IMPORTED_MODULE_0__tools_common__["c" /* isPowerOf2 */])(this.width) && Object(__WEBPACK_IMPORTED_MODULE_0__tools_common__["c" /* isPowerOf2 */])(this.height);
        let defualtFilter = (this.powerOf2 ? 'mipmap' : 'linear');
        this.filtering = options.filtering || defualtFilter;

        var gl = this.gl;
        this.bind();

        // For power-of-2 textures, the following presets are available:
        // mipmap: linear blend from nearest mip
        // linear: linear blend from original image (no mips)
        // nearest: nearest pixel from original image (no mips, 'blocky' look)
        if (this.powerOf2) {
            gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, options.TEXTURE_WRAP_S || (options.repeat && gl.REPEAT) || gl.CLAMP_TO_EDGE);
            gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, options.TEXTURE_WRAP_T || (options.repeat && gl.REPEAT) || gl.CLAMP_TO_EDGE);

            if (this.filtering === 'mipmap') {
                gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR_MIPMAP_LINEAR); // TODO: use trilinear filtering by defualt instead?
                gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.LINEAR);
                gl.generateMipmap(gl.TEXTURE_2D);
            }
            else if (this.filtering === 'linear') {
                gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR);
                gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.LINEAR);
            }
            else if (this.filtering === 'nearest') {
                gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.NEAREST);
                gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.NEAREST);
            }
        }
        else {
            // WebGL has strict requirements on non-power-of-2 textures:
            // No mipmaps and must clamp to edge
            gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
            gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);

            if (this.filtering === 'mipmap') {
                this.filtering = 'linear';
            }

            if (this.filtering === 'nearest') {
                gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.NEAREST);
                gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.NEAREST);
            }
            else { // default to linear for non-power-of-2 textures
                gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR);
                gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.LINEAR);
            }
        }
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = Texture;


// Report max texture size for a GL context
Texture.getMaxTextureSize = function (gl) {
    return gl.getParameter(gl.MAX_TEXTURE_SIZE);
};

// Global set of textures, by name
Texture.activeUnit = -1;


/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _fbm = __webpack_require__(15);

var _fbm2 = _interopRequireDefault(_fbm);

var _fire = __webpack_require__(16);

var _fire2 = _interopRequireDefault(_fire);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  fbm: _fbm2.default,
  fire: _fire2.default

};

/***/ }),
/* 15 */
/***/ (function(module, exports) {

module.exports = "#ifdef GL_ES\nprecision mediump float;\n#endif\n\n\nconst float PI = 3.1415926535897932384626433832795;\nconst float PI2 = 6.28318530718;\n\nfloat almostIdentity( float x, float m, float n )\n{\n    if( x>m ) return x;\n\n    float a = 2.0*n - m;\n    float b = 2.0*m - 3.0*n;\n    float t = x/m;\n\n    return (a*t + b)*t*t + n;\n}\n\n\nfloat impulse( float k, float x )\n{\n    float h = k*x;\n    return h*exp(1.0-h);\n}\n\nfloat cubicPulse( float c, float w, float x )\n{\n    x = abs(x - c);\n    if( x>w ) return 0.0;\n    x /= w;\n    return 1.0 - x*x*(3.0-2.0*x);\n}\n\nfloat expStep( float x, float k, float n )\n{\n    return exp( -k*pow(x,n) );\n}\n\n\nfloat gain(float x, float k)\n{\n    float a = 0.5*pow(2.0*((x<0.5)?x:1.0-x), k);\n    return (x<0.5)?a:1.0-a;\n}\n\n\nfloat parabola( float x, float k )\n{\n    return pow( 4.0*x*(1.0-x), k );\n}\n\nfloat pcurve( float x, float a, float b )\n{\n    float k = pow(a+b,a+b) / (pow(a,a)*pow(b,b));\n    return k * pow( x, a ) * pow( 1.0-x, b );\n}\n\nvec3 rgb2hsb( in vec3 c ){\n    vec4 K = vec4(0.0, -1.0 / 3.0, 2.0 / 3.0, -1.0);\n    vec4 p = mix(vec4(c.bg, K.wz),\n                 vec4(c.gb, K.xy),\n                 step(c.b, c.g));\n    vec4 q = mix(vec4(p.xyw, c.r),\n                 vec4(c.r, p.yzx),\n                 step(p.x, c.r));\n    float d = q.x - min(q.w, q.y);\n    float e = 1.0e-10;\n    return vec3(abs(q.z + (q.w - q.y) / (6.0 * d + e)),\n                d / (q.x + e),\n                q.x);\n}\n\n//  Function from Iñigo Quiles\n//  https://www.shadertoy.com/view/MsS3Wc\nvec3 hsb2rgb( in vec3 c ){\n    vec3 rgb = clamp(abs(mod(c.x*6.0+vec3(0.0,4.0,2.0),\n                             6.0)-3.0)-1.0,\n                     0.0,\n                     1.0 );\n    rgb = rgb*rgb*(3.0-2.0*rgb);\n    return c.z * mix(vec3(1.0), rgb, c.y);\n}\n\nfloat rectangle(vec2 st,vec2 bl, vec2 tr) {\n    vec2 blv = step(bl, st);\n    vec2 trv = step(vec2(1.0)-tr, 1.0-st);\n    return blv.x*blv.y * trv.x*trv.y;\n}\n\nfloat smoothRectangle(vec2 st,vec2 bl, vec2 tr, float w) {\n    vec2 blv = smoothstep(bl, bl+vec2(w), st);\n    vec2 trv = smoothstep(vec2(1.0)-tr, vec2(1.0)-tr+vec2(w), 1.0-st);\n    return blv.x*blv.y * trv.x*trv.y;\n}\n\nfloat smoothCircle(vec2 st, vec2 c, float r, float w) {\n    float d = length(st - c);\n    return smoothstep(r+w,r-w,d);\n}\n\nfloat polygon(vec2 st, vec2 c, float r, int N) {\n   \tfloat a = atan(st.y,st.x);\n   \tfloat s = PI*2.0/float(N);\n   \tfloat d =  cos(floor(.5+a/s) * s - a) * distance(st,c) * 2.0;\n    return 1.0-smoothstep(r-0.01,r,d);\n}\n\nmat2 rotate2d(float a) {\n    return mat2(cos(a), -sin(a), sin(a), cos(a));\n}\n\nvec2 random2(vec2 st){\n    st = vec2( dot(st,vec2(127.1,311.7)), dot(st,vec2(269.5,183.3)) );\n    return fract(sin(st)*43758.5453123);\n}\n\nfloat random2f(vec2 st){\n    float v = dot( dot(st,vec2(127.1,311.7)), dot(st,vec2(269.5,183.3)) );\n    return fract(sin(v)*43758.5453123);\n}\n\nvec2 random2a(vec2 st){\n    st = vec2( dot(st,vec2(127.1,311.7)),\n              dot(st,vec2(269.5,183.3)) );\n    return -1.0 + 2.0*fract(sin(st)*43758.5453123);\n}\n\nvec3 random3a(vec3 st){\n    st = vec3( dot(st,vec3(127.1,311.7,123.6)),\n               dot(st,vec3(269.5,183.3,97.1)),\n                dot(st,vec3(146.87,245.12,48.7))\n                );\n    return -1.0 + 2.0*fract(sin(st)*43758.5453123);\n}\n\nfloat noise(in vec2 p) {\n\n    vec2 i = floor(p);\n    vec2 f = fract(p);\n\n    vec2 u = f*f*(3.0-2.0*f);\n\n    return mix( mix( dot( random2a(i + vec2(0.0,0.0) ), f - vec2(0.0,0.0) ),\n                     dot( random2a(i + vec2(1.0,0.0) ), f - vec2(1.0,0.0) ), u.x),\n                mix( dot( random2a(i + vec2(0.0,1.0) ), f - vec2(0.0,1.0) ),\n                     dot( random2a(i + vec2(1.0,1.0) ), f - vec2(1.0,1.0) ), u.x), u.y);\n\n\n}\n\nfloat noise(in vec3 p) {\n\n    vec3 i = floor(p);\n    vec3 f = fract(p);\n\n    vec3 u = f*f*(3.0-2.0*f);\n\n        return mix(\n                mix(\n                    mix(\n                        dot( random3a(i + vec3(0.0,0.0,0.0) ), f - vec3(0.0,0.0,0.0) ),\n                        dot( random3a(i + vec3(1.0,0.0,0.0) ), f - vec3(1.0,0.0,0.0) ),\n                        u.x),\n                    mix(\n                        dot( random3a(i + vec3(0.0,1.0,0.0) ), f - vec3(0.0,1.0,0.0) ),\n                        dot( random3a(i + vec3(1.0,1.0,0.0) ), f - vec3(1.0,1.0,0.0) ),\n                        u.x),\n                    u.y),\n                mix(\n                    mix(\n                        dot( random3a(i + vec3(0.0,0.0,1.0) ), f - vec3(0.0,0.0,1.0) ),\n                        dot( random3a(i + vec3(1.0,0.0,1.0) ), f - vec3(1.0,0.0,1.0) ),\n                        u.x),\n                    mix(\n                        dot( random3a(i + vec3(0.0,1.0,1.0) ), f - vec3(0.0,1.0,1.0) ),\n                        dot( random3a(i + vec3(1.0,1.0,1.0) ), f - vec3(1.0,1.0,1.0) ),\n                        u.x),\n                    u.y),\n                u.z\n               );\n}\n\nfloat usnoise(vec3 p) {\n    return (noise(p) + 1.0) /2.0;\n}\n\nfloat cellNoise(vec2 p) {\n    vec2 i = floor(p);\n    vec2 f = fract(p);\n\n    float m_dist = 1.0;\n\n    for(int y=-1; y<=1; y++) {\n        for(int x=-1; x<=1; x++) {\n            vec2 neighbour=vec2(float(x), float(y));\n            vec2 point = random2(i + neighbour);\n\n            vec2 diff= neighbour + point - f;\n            float dist = length(diff);\n            m_dist = min(m_dist,dist);\n        }\n    }\n\n    return m_dist;\n}\n\n\nvec3 veroniNoise(vec2 st) {\n    vec2 p = floor(st);\n    vec2 f = fract(st);\n\n    float res = 2.0;\n    vec2 m_point=vec2(1.0, 1.0),\n        mr=vec2(0,0),\n        mb = vec2(0,0);\n\n    for(int j=-1; j<=1; j++) {\n        for(int i=-1; i<=1; i++) {\n            vec2 b=vec2(float(i), float(j));\n            vec2 point = p + b;\n            vec2 r = b + random2(point) - f;\n\n            float d = dot(r,r);\n            if (d < res) {\n                res = d;\n                m_point = point;\n                mr=r;\n                mb=b;\n            }\n        }\n    }\n\n    res = 8.0;\n    for(int j=-2; j<=2; ++j) {\n        for(int i=-2; i<=2; ++i) {\n\n            vec2 b = mb + vec2(float(i),float(j));\n\n            vec2 r = b + random2(p + b) - f;\n\n            float d = dot(0.5 * (mr+r), normalize(r - mr));\n\n            res = min(res, d);\n\n        }\n    }\n\n    return vec3(m_point.xy, res);\n}\n\nconst int octaves = 4;\n\nfloat fbm(vec2 p, float H, float lacunarity) {\n    float value, frequency;\n    float exponent;\n\n    value = 0.0;\n    frequency = 1.0;\n\n    for(int i=0; i<octaves; ++i) {\n\n        exponent = pow(frequency, -H);\n\n        value=value + (noise(p) * exponent);\n\n        p=p*lacunarity;\n\n        frequency=frequency * lacunarity;\n    }\n\n    return value;\n}\n\nfloat fbm(vec3 p, float H, float lacunarity) {\n    float value, frequency;\n    float exponent;\n\n    value = 0.0;\n    frequency = 1.0;\n\n    for(int i=0; i<octaves; ++i) {\n\n        exponent = pow(frequency, -H);\n\n        value=value + (noise(p) * exponent);\n\n        p=p*lacunarity;\n\n        frequency=frequency * lacunarity;\n    }\n\n    return value;\n}\n\nfloat ridgedMultifractal(vec3 p, float H, float lacunarity, float offset) {\n    float result, frequency, remainder;\n    float weight, signal, exponent;\n\n    float gain = 2.0;\n\n    result = 1.0;\n    frequency = 1.0;\n\n    signal = noise(p);\n    if (signal < 0.0) signal = -signal;\n    signal = offset-signal;\n    signal *=signal;\n    result = signal;\n    weight = 1.0;\n\n\n    for(int i=1; i<octaves; ++i) {\n        frequency=frequency*lacunarity;\n        p=p*lacunarity;\n\n        weight = signal * gain;\n        if (weight>1.0) weight=1.0;\n        if (weight < 0.0 ) weight= 0.0;\n\n        signal = noise(p);\n\n        if (signal <0.0) signal = -signal;\n        signal = offset - signal;\n        signal *=signal;\n        signal *=weight;\n        result += signal * pow(frequency,-H);\n\n    }\n\n    return result;\n}\n\nuniform vec2 u_resolution;\nuniform vec2 u_mouse;\nuniform float u_time;\n\n\n\nvoid function1(){\n\tvec2 st = gl_FragCoord.xy/u_resolution;\n\n\tvec2 off=vec2(0.5)-st;\n\tfloat angle = atan(off.y,off.x);\n\n\tfloat d2 = off.x*off.x+off.y*off.y;\n\tfloat d = length(off) * 2.0;\n\n\tfloat offset = 0.2 + (cos(u_time * 1.0) / 8.0);\n    vec3 r =  cubicPulse(offset,0.5,d) * hsb2rgb(vec3((angle/PI2)+0.5, d, 1.0));\n\n    float offset2 = 0.2 + (cos(u_time * 1.1) / 8.0);\n    vec3 g =  cubicPulse(offset2,0.5,d) * hsb2rgb(vec3((angle/PI2)+0.15, d, 1.0));\n\n    float offset3 = 0.2 + (cos(u_time * 0.9) / 8.0);\n    vec3 b =  cubicPulse(offset3,0.5,d) * hsb2rgb(vec3((angle/PI2)+0.65, d, 1.0));\n\n    vec3 color = r + g+ + b;//vec3(0,0,0);\n\n\n\tgl_FragColor = vec4(color,1.0);\n}\n\n\nvec3 function2(vec2 st) {\n\tst=vec2(0.5) - st;\n\t//float rot = u_time / 2.5;\n\tvec2 st2 = rotate2d(-u_time / 2.5) * st;\n\n   \tfloat a = atan(st2.y,st2.x);\n   \tfloat d = length(st);\n\n   \tvec3 rgb =  hsb2rgb(vec3((a*3.0/PI2)+0.15, d, 1.0));\n\n   \t//float cycles = (sin(d*100.0) + 1.0) /2.0;\n\n   \t//float rings = 1.0-smoothstep(0.99,1.0,d);\n\n    float triangle = polygon(st2, vec2(0,0), 0.5, 3);\n\n    vec3 color =\n            vec3(1) * triangle * rgb\n         ;\n        ;;+(vec3(smoothRectangle(st2, vec2(-0.9,-0.5), vec2(-0.6, -0.2), 0.0025) ) )\n        ;\n\n    return color;\n\n}\n\nvec3 function3(vec2 st) {\n\n\t//vec2 fst = fract(st * 2.0);\n\n\tvec3 color=vec3(0);\n\n    int N = 8;\n   \tfloat a = atan(st.y,st.x);\n   \tfloat s = PI*2.0/float(N);\n\n\tfloat n=noise(vec2(a*10.0,a+10.0) * 10.0) / 10.0;\n\n   \tfloat d =  cos(floor(.5+a/s) * s - a) * distance(st,vec2(0,0))  * 4.0  + n;\n    float polygon = 1.0-smoothstep(0.99, 1.0, d);\n\n\tcolor=vec3(1.0,1.0,1.0) * polygon;\n\n\n\n\n\n\n\n\treturn color;\n}\n\n\nvec3 noiseTest(vec2 st) {\n\n    float distance = length(st);\n\n    //st.x += cos(u_time/1.0) / 10.0;\n    //st.y += sin(u_time/1.0) / 10.0;\n\n    st=st*10.0;\n\n\n//    st = vec2(1.0, 1.0) - length(st) * st;\n\n\n\n    vec3 n = veroniNoise(st);\n\n    vec2 p = n.xy;\n    float dist = n.z;\n\n    float d = abs(cos(dist * 50.0)) * dist;\n\n    float a = atan(p.y,p.x);\n\n\n    vec3 color = hsb2rgb(vec3(a / 6.0 , 1.0, 1.0));\n\n    //color=color * (1.0-smoothstep(0.025, 0.075, dist));\n    //color=color * ((smoothstep(0.975, 0.95, 1.0-dist)));\n    //color=color + (vec3(.7,0.7,.3) * (1.0-smoothstep(0.985, 0.975, 1.0-dist)));\n\n\n\n    return color;\n\n}\n\nvec3 fbmTest(vec2 p) {\n\n    float v = fbm(vec3(p, u_time/2.0), 1.0, 2.0);\n\n    v=(v+1.0) / 2.0;\n    vec3 color = vec3(v,v,v);\n\n    return color;\n\n}\n\nvec3 ridgedTest(vec2 p) {\n\n    float v;\n\n    float vscale = p.y+1.0;\n    vscale=vscale*vscale;\n\n    vec3 pp = vec3(p*5.0, u_time/0.75);\n    pp.y = pp.y + u_time * 2.0;\n\n    v= ridgedMultifractal(pp, 0.25, 2.1, 0.7)\n        * vscale\n        + (p.y / 1.0);\n\n    vec3 color;\n\n    color =\n        (smoothstep(0.0, 0.3, v) * vec3(1,0,0))\n        + (smoothstep(0.3, 0.6, v) * vec3(1,0,0))\n        + (smoothstep(0.6, 1.0, v) * vec3(0,1,0))\n        ;\n\n\n    return color;\n\n}\n\nvoid main() {\n\tvec2 st = gl_FragCoord.xy/u_resolution;\n\n\tst=vec2(0.5) - st;\n\n\t//st = rotate2d(-u_time / 2.5) * st;\n\n    gl_FragColor=vec4(fbmTest(st), 0);\n\n}"

/***/ }),
/* 16 */
/***/ (function(module, exports) {

module.exports = "#ifdef GL_ES\nprecision mediump float;\n#endif\n\n\nconst float PI = 3.1415926535897932384626433832795;\nconst float PI2 = 6.28318530718;\n\nfloat almostIdentity( float x, float m, float n )\n{\n    if( x>m ) return x;\n\n    float a = 2.0*n - m;\n    float b = 2.0*m - 3.0*n;\n    float t = x/m;\n\n    return (a*t + b)*t*t + n;\n}\n\n\nfloat impulse( float k, float x )\n{\n    float h = k*x;\n    return h*exp(1.0-h);\n}\n\nfloat cubicPulse( float c, float w, float x )\n{\n    x = abs(x - c);\n    if( x>w ) return 0.0;\n    x /= w;\n    return 1.0 - x*x*(3.0-2.0*x);\n}\n\nfloat expStep( float x, float k, float n )\n{\n    return exp( -k*pow(x,n) );\n}\n\n\nfloat gain(float x, float k)\n{\n    float a = 0.5*pow(2.0*((x<0.5)?x:1.0-x), k);\n    return (x<0.5)?a:1.0-a;\n}\n\n\nfloat parabola( float x, float k )\n{\n    return pow( 4.0*x*(1.0-x), k );\n}\n\nfloat pcurve( float x, float a, float b )\n{\n    float k = pow(a+b,a+b) / (pow(a,a)*pow(b,b));\n    return k * pow( x, a ) * pow( 1.0-x, b );\n}\n\nvec3 rgb2hsb( in vec3 c ){\n    vec4 K = vec4(0.0, -1.0 / 3.0, 2.0 / 3.0, -1.0);\n    vec4 p = mix(vec4(c.bg, K.wz),\n                 vec4(c.gb, K.xy),\n                 step(c.b, c.g));\n    vec4 q = mix(vec4(p.xyw, c.r),\n                 vec4(c.r, p.yzx),\n                 step(p.x, c.r));\n    float d = q.x - min(q.w, q.y);\n    float e = 1.0e-10;\n    return vec3(abs(q.z + (q.w - q.y) / (6.0 * d + e)),\n                d / (q.x + e),\n                q.x);\n}\n\n//  Function from Iñigo Quiles\n//  https://www.shadertoy.com/view/MsS3Wc\nvec3 hsb2rgb( in vec3 c ){\n    vec3 rgb = clamp(abs(mod(c.x*6.0+vec3(0.0,4.0,2.0),\n                             6.0)-3.0)-1.0,\n                     0.0,\n                     1.0 );\n    rgb = rgb*rgb*(3.0-2.0*rgb);\n    return c.z * mix(vec3(1.0), rgb, c.y);\n}\n\nfloat rectangle(vec2 st,vec2 bl, vec2 tr) {\n    vec2 blv = step(bl, st);\n    vec2 trv = step(vec2(1.0)-tr, 1.0-st);\n    return blv.x*blv.y * trv.x*trv.y;\n}\n\nfloat smoothRectangle(vec2 st,vec2 bl, vec2 tr, float w) {\n    vec2 blv = smoothstep(bl, bl+vec2(w), st);\n    vec2 trv = smoothstep(vec2(1.0)-tr, vec2(1.0)-tr+vec2(w), 1.0-st);\n    return blv.x*blv.y * trv.x*trv.y;\n}\n\nfloat smoothCircle(vec2 st, vec2 c, float r, float w) {\n    float d = length(st - c);\n    return smoothstep(r+w,r-w,d);\n}\n\nfloat polygon(vec2 st, vec2 c, float r, int N) {\n   \tfloat a = atan(st.y,st.x);\n   \tfloat s = PI*2.0/float(N);\n   \tfloat d =  cos(floor(.5+a/s) * s - a) * distance(st,c) * 2.0;\n    return 1.0-smoothstep(r-0.01,r,d);\n}\n\nmat2 rotate2d(float a) {\n    return mat2(cos(a), -sin(a), sin(a), cos(a));\n}\n\nvec2 random2(vec2 st){\n    st = vec2( dot(st,vec2(127.1,311.7)), dot(st,vec2(269.5,183.3)) );\n    return fract(sin(st)*43758.5453123);\n}\n\nfloat random2f(vec2 st){\n    float v = dot( dot(st,vec2(127.1,311.7)), dot(st,vec2(269.5,183.3)) );\n    return fract(sin(v)*43758.5453123);\n}\n\nvec2 random2a(vec2 st){\n    st = vec2( dot(st,vec2(127.1,311.7)),\n              dot(st,vec2(269.5,183.3)) );\n    return -1.0 + 2.0*fract(sin(st)*43758.5453123);\n}\n\nvec3 random3a(vec3 st){\n    st = vec3( dot(st,vec3(127.1,311.7,123.6)),\n               dot(st,vec3(269.5,183.3,97.1)),\n                dot(st,vec3(146.87,245.12,48.7))\n                );\n    return -1.0 + 2.0*fract(sin(st)*43758.5453123);\n}\n\nfloat noise(in vec2 p) {\n\n    vec2 i = floor(p);\n    vec2 f = fract(p);\n\n    vec2 u = f*f*(3.0-2.0*f);\n\n    return mix( mix( dot( random2a(i + vec2(0.0,0.0) ), f - vec2(0.0,0.0) ),\n                     dot( random2a(i + vec2(1.0,0.0) ), f - vec2(1.0,0.0) ), u.x),\n                mix( dot( random2a(i + vec2(0.0,1.0) ), f - vec2(0.0,1.0) ),\n                     dot( random2a(i + vec2(1.0,1.0) ), f - vec2(1.0,1.0) ), u.x), u.y);\n\n\n}\n\nfloat noise(in vec3 p) {\n\n    vec3 i = floor(p);\n    vec3 f = fract(p);\n\n    vec3 u = f*f*(3.0-2.0*f);\n\n        return mix(\n                mix(\n                    mix(\n                        dot( random3a(i + vec3(0.0,0.0,0.0) ), f - vec3(0.0,0.0,0.0) ),\n                        dot( random3a(i + vec3(1.0,0.0,0.0) ), f - vec3(1.0,0.0,0.0) ),\n                        u.x),\n                    mix(\n                        dot( random3a(i + vec3(0.0,1.0,0.0) ), f - vec3(0.0,1.0,0.0) ),\n                        dot( random3a(i + vec3(1.0,1.0,0.0) ), f - vec3(1.0,1.0,0.0) ),\n                        u.x),\n                    u.y),\n                mix(\n                    mix(\n                        dot( random3a(i + vec3(0.0,0.0,1.0) ), f - vec3(0.0,0.0,1.0) ),\n                        dot( random3a(i + vec3(1.0,0.0,1.0) ), f - vec3(1.0,0.0,1.0) ),\n                        u.x),\n                    mix(\n                        dot( random3a(i + vec3(0.0,1.0,1.0) ), f - vec3(0.0,1.0,1.0) ),\n                        dot( random3a(i + vec3(1.0,1.0,1.0) ), f - vec3(1.0,1.0,1.0) ),\n                        u.x),\n                    u.y),\n                u.z\n               );\n}\n\nfloat usnoise(vec3 p) {\n    return (noise(p) + 1.0) /2.0;\n}\n\nfloat cellNoise(vec2 p) {\n    vec2 i = floor(p);\n    vec2 f = fract(p);\n\n    float m_dist = 1.0;\n\n    for(int y=-1; y<=1; y++) {\n        for(int x=-1; x<=1; x++) {\n            vec2 neighbour=vec2(float(x), float(y));\n            vec2 point = random2(i + neighbour);\n\n            vec2 diff= neighbour + point - f;\n            float dist = length(diff);\n            m_dist = min(m_dist,dist);\n        }\n    }\n\n    return m_dist;\n}\n\n\nvec3 veroniNoise(vec2 st) {\n    vec2 p = floor(st);\n    vec2 f = fract(st);\n\n    float res = 2.0;\n    vec2 m_point=vec2(1.0, 1.0),\n        mr=vec2(0,0),\n        mb = vec2(0,0);\n\n    for(int j=-1; j<=1; j++) {\n        for(int i=-1; i<=1; i++) {\n            vec2 b=vec2(float(i), float(j));\n            vec2 point = p + b;\n            vec2 r = b + random2(point) - f;\n\n            float d = dot(r,r);\n            if (d < res) {\n                res = d;\n                m_point = point;\n                mr=r;\n                mb=b;\n            }\n        }\n    }\n\n    res = 8.0;\n    for(int j=-2; j<=2; ++j) {\n        for(int i=-2; i<=2; ++i) {\n\n            vec2 b = mb + vec2(float(i),float(j));\n\n            vec2 r = b + random2(p + b) - f;\n\n            float d = dot(0.5 * (mr+r), normalize(r - mr));\n\n            res = min(res, d);\n\n        }\n    }\n\n    return vec3(m_point.xy, res);\n}\n\nconst int octaves = 4;\n\nfloat fbm(vec2 p, float H, float lacunarity) {\n    float value, frequency;\n    float exponent;\n\n    value = 0.0;\n    frequency = 1.0;\n\n    for(int i=0; i<octaves; ++i) {\n\n        exponent = pow(frequency, -H);\n\n        value=value + (noise(p) * exponent);\n\n        p=p*lacunarity;\n\n        frequency=frequency * lacunarity;\n    }\n\n    return value;\n}\n\nfloat fbm(vec3 p, float H, float lacunarity) {\n    float value, frequency;\n    float exponent;\n\n    value = 0.0;\n    frequency = 1.0;\n\n    for(int i=0; i<octaves; ++i) {\n\n        exponent = pow(frequency, -H);\n\n        value=value + (noise(p) * exponent);\n\n        p=p*lacunarity;\n\n        frequency=frequency * lacunarity;\n    }\n\n    return value;\n}\n\nfloat ridgedMultifractal(vec3 p, float H, float lacunarity, float offset) {\n    float result, frequency, remainder;\n    float weight, signal, exponent;\n\n    float gain = 2.0;\n\n    result = 1.0;\n    frequency = 1.0;\n\n    signal = noise(p);\n    if (signal < 0.0) signal = -signal;\n    signal = offset-signal;\n    signal *=signal;\n    result = signal;\n    weight = 1.0;\n\n\n    for(int i=1; i<octaves; ++i) {\n        frequency=frequency*lacunarity;\n        p=p*lacunarity;\n\n        weight = signal * gain;\n        if (weight>1.0) weight=1.0;\n        if (weight < 0.0 ) weight= 0.0;\n\n        signal = noise(p);\n\n        if (signal <0.0) signal = -signal;\n        signal = offset - signal;\n        signal *=signal;\n        signal *=weight;\n        result += signal * pow(frequency,-H);\n\n    }\n\n    return result;\n}\n\nuniform vec2 u_resolution;\nuniform vec2 u_mouse;\nuniform float u_time;\n\n\nvec3 fire(vec2 p) {\n\n    float v;\n\n    float vscale = p.y+1.0;\n    vscale=vscale*vscale;\n\n    vec3 pp = vec3(p*5.0, u_time/0.75);\n    pp.y = pp.y + u_time * 2.0;\n\n    v= ridgedMultifractal(pp, 0.25, 2.1, 0.7)\n        * vscale\n        + (p.y / 1.0);\n\n    vec3 color;\n\n    color =\n        (smoothstep(0.0, 0.3, v) * vec3(1,0,0))\n        + (smoothstep(0.3, 0.6, v) * vec3(1,0,0))\n        + (smoothstep(0.6, 1.0, v) * vec3(0,1,0))\n        ;\n\n\n    return color;\n\n}\n\nvoid main() {\n\tvec2 st = gl_FragCoord.xy/u_resolution;\n\n\tst=vec2(0.5) - st;\n\n    gl_FragColor=vec4(fire(st), 0);\n\n}"

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(18);
if(typeof content === 'string') content = [[module.i, content, '']];
// Prepare cssTransformation
var transform;

var options = {"hmr":true}
options.transform = transform
// add the styles to the DOM
var update = __webpack_require__(20)(content, options);
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!../node_modules/css-loader/index.js!./styles.css", function() {
			var newContent = require("!!../node_modules/css-loader/index.js!./styles.css");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(19)(undefined);
// imports


// module
exports.push([module.i, "\nhtml {\n    color: white;\n}", ""]);

// exports


/***/ }),
/* 19 */
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function(useSourceMap) {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		return this.map(function (item) {
			var content = cssWithMappingToString(item, useSourceMap);
			if(item[2]) {
				return "@media " + item[2] + "{" + content + "}";
			} else {
				return content;
			}
		}).join("");
	};

	// import a list of modules into the list
	list.i = function(modules, mediaQuery) {
		if(typeof modules === "string")
			modules = [[null, modules, ""]];
		var alreadyImportedModules = {};
		for(var i = 0; i < this.length; i++) {
			var id = this[i][0];
			if(typeof id === "number")
				alreadyImportedModules[id] = true;
		}
		for(i = 0; i < modules.length; i++) {
			var item = modules[i];
			// skip already imported module
			// this implementation is not 100% perfect for weird media query combinations
			//  when a module is imported multiple times with different media queries.
			//  I hope this will never occur (Hey this way we have smaller bundles)
			if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
				if(mediaQuery && !item[2]) {
					item[2] = mediaQuery;
				} else if(mediaQuery) {
					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
				}
				list.push(item);
			}
		}
	};
	return list;
};

function cssWithMappingToString(item, useSourceMap) {
	var content = item[1] || '';
	var cssMapping = item[3];
	if (!cssMapping) {
		return content;
	}

	if (useSourceMap && typeof btoa === 'function') {
		var sourceMapping = toComment(cssMapping);
		var sourceURLs = cssMapping.sources.map(function (source) {
			return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */'
		});

		return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
	}

	return [content].join('\n');
}

// Adapted from convert-source-map (MIT)
function toComment(sourceMap) {
	// eslint-disable-next-line no-undef
	var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
	var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;

	return '/*# ' + data + ' */';
}


/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

var stylesInDom = {};

var	memoize = function (fn) {
	var memo;

	return function () {
		if (typeof memo === "undefined") memo = fn.apply(this, arguments);
		return memo;
	};
};

var isOldIE = memoize(function () {
	// Test for IE <= 9 as proposed by Browserhacks
	// @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
	// Tests for existence of standard globals is to allow style-loader
	// to operate correctly into non-standard environments
	// @see https://github.com/webpack-contrib/style-loader/issues/177
	return window && document && document.all && !window.atob;
});

var getElement = (function (fn) {
	var memo = {};

	return function(selector) {
		if (typeof memo[selector] === "undefined") {
			var styleTarget = fn.call(this, selector);
			// Special case to return head of iframe instead of iframe itself
			if (styleTarget instanceof window.HTMLIFrameElement) {
				try {
					// This will throw an exception if access to iframe is blocked
					// due to cross-origin restrictions
					styleTarget = styleTarget.contentDocument.head;
				} catch(e) {
					styleTarget = null;
				}
			}
			memo[selector] = styleTarget;
		}
		return memo[selector]
	};
})(function (target) {
	return document.querySelector(target)
});

var singleton = null;
var	singletonCounter = 0;
var	stylesInsertedAtTop = [];

var	fixUrls = __webpack_require__(21);

module.exports = function(list, options) {
	if (typeof DEBUG !== "undefined" && DEBUG) {
		if (typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};

	options.attrs = typeof options.attrs === "object" ? options.attrs : {};

	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (!options.singleton && typeof options.singleton !== "boolean") options.singleton = isOldIE();

	// By default, add <style> tags to the <head> element
	if (!options.insertInto) options.insertInto = "head";

	// By default, add <style> tags to the bottom of the target
	if (!options.insertAt) options.insertAt = "bottom";

	var styles = listToStyles(list, options);

	addStylesToDom(styles, options);

	return function update (newList) {
		var mayRemove = [];

		for (var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];

			domStyle.refs--;
			mayRemove.push(domStyle);
		}

		if(newList) {
			var newStyles = listToStyles(newList, options);
			addStylesToDom(newStyles, options);
		}

		for (var i = 0; i < mayRemove.length; i++) {
			var domStyle = mayRemove[i];

			if(domStyle.refs === 0) {
				for (var j = 0; j < domStyle.parts.length; j++) domStyle.parts[j]();

				delete stylesInDom[domStyle.id];
			}
		}
	};
};

function addStylesToDom (styles, options) {
	for (var i = 0; i < styles.length; i++) {
		var item = styles[i];
		var domStyle = stylesInDom[item.id];

		if(domStyle) {
			domStyle.refs++;

			for(var j = 0; j < domStyle.parts.length; j++) {
				domStyle.parts[j](item.parts[j]);
			}

			for(; j < item.parts.length; j++) {
				domStyle.parts.push(addStyle(item.parts[j], options));
			}
		} else {
			var parts = [];

			for(var j = 0; j < item.parts.length; j++) {
				parts.push(addStyle(item.parts[j], options));
			}

			stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
		}
	}
}

function listToStyles (list, options) {
	var styles = [];
	var newStyles = {};

	for (var i = 0; i < list.length; i++) {
		var item = list[i];
		var id = options.base ? item[0] + options.base : item[0];
		var css = item[1];
		var media = item[2];
		var sourceMap = item[3];
		var part = {css: css, media: media, sourceMap: sourceMap};

		if(!newStyles[id]) styles.push(newStyles[id] = {id: id, parts: [part]});
		else newStyles[id].parts.push(part);
	}

	return styles;
}

function insertStyleElement (options, style) {
	var target = getElement(options.insertInto)

	if (!target) {
		throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
	}

	var lastStyleElementInsertedAtTop = stylesInsertedAtTop[stylesInsertedAtTop.length - 1];

	if (options.insertAt === "top") {
		if (!lastStyleElementInsertedAtTop) {
			target.insertBefore(style, target.firstChild);
		} else if (lastStyleElementInsertedAtTop.nextSibling) {
			target.insertBefore(style, lastStyleElementInsertedAtTop.nextSibling);
		} else {
			target.appendChild(style);
		}
		stylesInsertedAtTop.push(style);
	} else if (options.insertAt === "bottom") {
		target.appendChild(style);
	} else if (typeof options.insertAt === "object" && options.insertAt.before) {
		var nextSibling = getElement(options.insertInto + " " + options.insertAt.before);
		target.insertBefore(style, nextSibling);
	} else {
		throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");
	}
}

function removeStyleElement (style) {
	if (style.parentNode === null) return false;
	style.parentNode.removeChild(style);

	var idx = stylesInsertedAtTop.indexOf(style);
	if(idx >= 0) {
		stylesInsertedAtTop.splice(idx, 1);
	}
}

function createStyleElement (options) {
	var style = document.createElement("style");

	options.attrs.type = "text/css";

	addAttrs(style, options.attrs);
	insertStyleElement(options, style);

	return style;
}

function createLinkElement (options) {
	var link = document.createElement("link");

	options.attrs.type = "text/css";
	options.attrs.rel = "stylesheet";

	addAttrs(link, options.attrs);
	insertStyleElement(options, link);

	return link;
}

function addAttrs (el, attrs) {
	Object.keys(attrs).forEach(function (key) {
		el.setAttribute(key, attrs[key]);
	});
}

function addStyle (obj, options) {
	var style, update, remove, result;

	// If a transform function was defined, run it on the css
	if (options.transform && obj.css) {
	    result = options.transform(obj.css);

	    if (result) {
	    	// If transform returns a value, use that instead of the original css.
	    	// This allows running runtime transformations on the css.
	    	obj.css = result;
	    } else {
	    	// If the transform function returns a falsy value, don't add this css.
	    	// This allows conditional loading of css
	    	return function() {
	    		// noop
	    	};
	    }
	}

	if (options.singleton) {
		var styleIndex = singletonCounter++;

		style = singleton || (singleton = createStyleElement(options));

		update = applyToSingletonTag.bind(null, style, styleIndex, false);
		remove = applyToSingletonTag.bind(null, style, styleIndex, true);

	} else if (
		obj.sourceMap &&
		typeof URL === "function" &&
		typeof URL.createObjectURL === "function" &&
		typeof URL.revokeObjectURL === "function" &&
		typeof Blob === "function" &&
		typeof btoa === "function"
	) {
		style = createLinkElement(options);
		update = updateLink.bind(null, style, options);
		remove = function () {
			removeStyleElement(style);

			if(style.href) URL.revokeObjectURL(style.href);
		};
	} else {
		style = createStyleElement(options);
		update = applyToTag.bind(null, style);
		remove = function () {
			removeStyleElement(style);
		};
	}

	update(obj);

	return function updateStyle (newObj) {
		if (newObj) {
			if (
				newObj.css === obj.css &&
				newObj.media === obj.media &&
				newObj.sourceMap === obj.sourceMap
			) {
				return;
			}

			update(obj = newObj);
		} else {
			remove();
		}
	};
}

var replaceText = (function () {
	var textStore = [];

	return function (index, replacement) {
		textStore[index] = replacement;

		return textStore.filter(Boolean).join('\n');
	};
})();

function applyToSingletonTag (style, index, remove, obj) {
	var css = remove ? "" : obj.css;

	if (style.styleSheet) {
		style.styleSheet.cssText = replaceText(index, css);
	} else {
		var cssNode = document.createTextNode(css);
		var childNodes = style.childNodes;

		if (childNodes[index]) style.removeChild(childNodes[index]);

		if (childNodes.length) {
			style.insertBefore(cssNode, childNodes[index]);
		} else {
			style.appendChild(cssNode);
		}
	}
}

function applyToTag (style, obj) {
	var css = obj.css;
	var media = obj.media;

	if(media) {
		style.setAttribute("media", media)
	}

	if(style.styleSheet) {
		style.styleSheet.cssText = css;
	} else {
		while(style.firstChild) {
			style.removeChild(style.firstChild);
		}

		style.appendChild(document.createTextNode(css));
	}
}

function updateLink (link, options, obj) {
	var css = obj.css;
	var sourceMap = obj.sourceMap;

	/*
		If convertToAbsoluteUrls isn't defined, but sourcemaps are enabled
		and there is no publicPath defined then lets turn convertToAbsoluteUrls
		on by default.  Otherwise default to the convertToAbsoluteUrls option
		directly
	*/
	var autoFixUrls = options.convertToAbsoluteUrls === undefined && sourceMap;

	if (options.convertToAbsoluteUrls || autoFixUrls) {
		css = fixUrls(css);
	}

	if (sourceMap) {
		// http://stackoverflow.com/a/26603875
		css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
	}

	var blob = new Blob([css], { type: "text/css" });

	var oldSrc = link.href;

	link.href = URL.createObjectURL(blob);

	if(oldSrc) URL.revokeObjectURL(oldSrc);
}


/***/ }),
/* 21 */
/***/ (function(module, exports) {


/**
 * When source maps are enabled, `style-loader` uses a link element with a data-uri to
 * embed the css on the page. This breaks all relative urls because now they are relative to a
 * bundle instead of the current page.
 *
 * One solution is to only use full urls, but that may be impossible.
 *
 * Instead, this function "fixes" the relative urls to be absolute according to the current page location.
 *
 * A rudimentary test suite is located at `test/fixUrls.js` and can be run via the `npm test` command.
 *
 */

module.exports = function (css) {
  // get current location
  var location = typeof window !== "undefined" && window.location;

  if (!location) {
    throw new Error("fixUrls requires window.location");
  }

	// blank or null?
	if (!css || typeof css !== "string") {
	  return css;
  }

  var baseUrl = location.protocol + "//" + location.host;
  var currentDir = baseUrl + location.pathname.replace(/\/[^\/]*$/, "/");

	// convert each url(...)
	/*
	This regular expression is just a way to recursively match brackets within
	a string.

	 /url\s*\(  = Match on the word "url" with any whitespace after it and then a parens
	   (  = Start a capturing group
	     (?:  = Start a non-capturing group
	         [^)(]  = Match anything that isn't a parentheses
	         |  = OR
	         \(  = Match a start parentheses
	             (?:  = Start another non-capturing groups
	                 [^)(]+  = Match anything that isn't a parentheses
	                 |  = OR
	                 \(  = Match a start parentheses
	                     [^)(]*  = Match anything that isn't a parentheses
	                 \)  = Match a end parentheses
	             )  = End Group
              *\) = Match anything and then a close parens
          )  = Close non-capturing group
          *  = Match anything
       )  = Close capturing group
	 \)  = Match a close parens

	 /gi  = Get all matches, not the first.  Be case insensitive.
	 */
	var fixedCss = css.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function(fullMatch, origUrl) {
		// strip quotes (if they exist)
		var unquotedOrigUrl = origUrl
			.trim()
			.replace(/^"(.*)"$/, function(o, $1){ return $1; })
			.replace(/^'(.*)'$/, function(o, $1){ return $1; });

		// already a full url? no change
		if (/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/)/i.test(unquotedOrigUrl)) {
		  return fullMatch;
		}

		// convert the url to a full url
		var newUrl;

		if (unquotedOrigUrl.indexOf("//") === 0) {
		  	//TODO: should we add protocol?
			newUrl = unquotedOrigUrl;
		} else if (unquotedOrigUrl.indexOf("/") === 0) {
			// path should be relative to the base url
			newUrl = baseUrl + unquotedOrigUrl; // already starts with '/'
		} else {
			// path should be relative to current directory
			newUrl = currentDir + unquotedOrigUrl.replace(/^\.\//, ""); // Strip leading './'
		}

		// send back the fixed url(...)
		return "url(" + JSON.stringify(newUrl) + ")";
	});

	// send back the fixed css
	return fixedCss;
};


/***/ })
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgNDY5NjJiNTU1MGU0MDY3NzNmYWYiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2lzLWZ1bmN0aW9uL2luZGV4LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9nbHNsQ2FudmFzL3NyYy90b29scy9jb21tb24uanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2dsc2xDYW52YXMvc3JjL3Rvb2xzL21peGluLmpzIiwid2VicGFjazovLy8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZ2xzbENhbnZhcy9zcmMvR2xzbENhbnZhcy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMveGhyL2luZGV4LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9nbG9iYWwvd2luZG93LmpzIiwid2VicGFjazovLy8od2VicGFjaykvYnVpbGRpbi9nbG9iYWwuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3BhcnNlLWhlYWRlcnMvcGFyc2UtaGVhZGVycy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvdHJpbS9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZm9yLWVhY2gvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3h0ZW5kL2ltbXV0YWJsZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZ2xzbENhbnZhcy9zcmMvZ2wvZ2wuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2dsc2xDYW52YXMvc3JjL2dsL1RleHR1cmUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NoYWRlcnMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NoYWRlcnMvZmJtLmdsc2wiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NoYWRlcnMvZmlyZS5nbHNsIiwid2VicGFjazovLy8uL3NyYy9zdHlsZXMuY3NzPzI5ODMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0eWxlcy5jc3MiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvbGliL2FkZFN0eWxlcy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2xpYi91cmxzLmpzIl0sIm5hbWVzIjpbImRlZmF1bHRTaGFkZXIiLCJPYmplY3QiLCJrZXlzIiwiZG9jdW1lbnQiLCJkb2N1bWVudEVsZW1lbnQiLCJzdHlsZSIsImJhY2tncm91bmRDb2xvciIsImNhbnZhcyIsImNyZWF0ZUVsZW1lbnQiLCJhcHBlbmRDaGlsZCIsIndpZHRoIiwiaGVpZ2h0IiwiZGlzcGxheSIsInBvc2l0aW9uIiwibWFyZ2luIiwidG9wIiwibGVmdCIsInRyYW5zZm9ybSIsImxhYmVsIiwiaW5uZXJUZXh0IiwiZHJvcGRvd24iLCJwbGVhc2VTZWxlY3QiLCJtYXAiLCJvcHRpb24iLCJzaGFkZXIiLCJ2YWx1ZSIsImZvckVhY2giLCJzYW5kYm94IiwibG9hZFNoYWRlciIsImRlc3Ryb3kiLCJ1bmRlZmluZWQiLCJzZXRVbmlmb3JtIiwibG9hZCIsImFkZEV2ZW50TGlzdGVuZXIiLCJlIiwiZmJtIiwiZmlyZSJdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBMkIsMEJBQTBCLEVBQUU7QUFDdkQseUNBQWlDLGVBQWU7QUFDaEQ7QUFDQTtBQUNBOztBQUVBO0FBQ0EsOERBQXNELCtEQUErRDs7QUFFckg7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7O0FDN0RBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7QUNkQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxtQkFBbUIsUUFBUTtBQUMzQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0EsU0FBUzs7QUFFVDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7O0FBRVQ7QUFDQTtBQUNBLFNBQVM7O0FBRVQ7QUFDQTtBQUNBLFNBQVM7O0FBRVQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7Ozs7Ozs7OztBQzNFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUzs7QUFFVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7O0FBRVQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTOztBQUVUO0FBQ0E7QUFDQSxTQUFTOztBQUVUO0FBQ0E7QUFDQSxTQUFTOztBQUVUO0FBQ0E7QUFDQSxTQUFTOztBQUVUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOzs7Ozs7OztBQ3ZEQTs7QUFDQTs7OztBQUVBOzs7O0FBRUE7Ozs7OztBQUVBLElBQUlBLGdCQUFnQkMsT0FBT0MsSUFBUCxvQkFBcUIsQ0FBckIsQ0FBcEI7O0FBRUEsQ0FBQyxZQUFNOztBQUVMQyxXQUFTQyxlQUFULENBQXlCQyxLQUF6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QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsNENBQTRDO0FBQzVDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBLHFDQUFxQzs7QUFFckM7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1QkFBdUIsaUJBQWlCO0FBQ3hDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxDQUFDOzs7Ozs7OztBQ3pmRDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0EsbUJBQW1CLGtCQUFrQjtBQUNyQztBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0Esc0JBQXNCO0FBQ3RCO0FBQ0EsS0FBSztBQUNMLGlDQUFpQyxTQUFTO0FBQzFDOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyQkFBMkI7QUFDM0I7QUFDQTtBQUNBO0FBQ0EsMENBQTBDO0FBQzFDO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CO0FBQ25CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7OztBQUdBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7Ozs7OztBQ2hQQTs7QUFFQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0EsQ0FBQztBQUNEO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7O0FBRUE7Ozs7Ozs7O0FDWkE7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLDRDQUE0Qzs7QUFFNUM7Ozs7Ozs7QUNwQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxDOzs7Ozs7O0FDN0JBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNB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QUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSx1REFBdUQ7QUFDdkQ7O0FBRUEsNkJBQTZCLG1CQUFtQjs7QUFFaEQ7O0FBRUE7O0FBRUE7QUFDQTs7Ozs7Ozs7QUM1V0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0NBQXdDLFdBQVcsRUFBRTtBQUNyRCx3Q0FBd0MsV0FBVyxFQUFFOztBQUVyRDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBLHNDQUFzQztBQUN0QyxHQUFHO0FBQ0g7QUFDQSw4REFBOEQ7QUFDOUQ7O0FBRUE7QUFDQTtBQUNBLEVBQUU7O0FBRUY7QUFDQTtBQUNBIiwiZmlsZSI6ImJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwge1xuIFx0XHRcdFx0Y29uZmlndXJhYmxlOiBmYWxzZSxcbiBcdFx0XHRcdGVudW1lcmFibGU6IHRydWUsXG4gXHRcdFx0XHRnZXQ6IGdldHRlclxuIFx0XHRcdH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDMpO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2svYm9vdHN0cmFwIDQ2OTYyYjU1NTBlNDA2NzczZmFmIiwibW9kdWxlLmV4cG9ydHMgPSBpc0Z1bmN0aW9uXG5cbnZhciB0b1N0cmluZyA9IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmdcblxuZnVuY3Rpb24gaXNGdW5jdGlvbiAoZm4pIHtcbiAgdmFyIHN0cmluZyA9IHRvU3RyaW5nLmNhbGwoZm4pXG4gIHJldHVybiBzdHJpbmcgPT09ICdbb2JqZWN0IEZ1bmN0aW9uXScgfHxcbiAgICAodHlwZW9mIGZuID09PSAnZnVuY3Rpb24nICYmIHN0cmluZyAhPT0gJ1tvYmplY3QgUmVnRXhwXScpIHx8XG4gICAgKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnICYmXG4gICAgIC8vIElFOCBhbmQgYmVsb3dcbiAgICAgKGZuID09PSB3aW5kb3cuc2V0VGltZW91dCB8fFxuICAgICAgZm4gPT09IHdpbmRvdy5hbGVydCB8fFxuICAgICAgZm4gPT09IHdpbmRvdy5jb25maXJtIHx8XG4gICAgICBmbiA9PT0gd2luZG93LnByb21wdCkpXG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvaXMtZnVuY3Rpb24vaW5kZXguanNcbi8vIG1vZHVsZSBpZCA9IDBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiZXhwb3J0IGZ1bmN0aW9uIGlzQ2FudmFzVmlzaWJsZShjYW52YXMpIHtcbiAgICByZXR1cm5cdCgoY2FudmFzLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLnRvcCArIGNhbnZhcy5oZWlnaHQpID4gMCkgJiZcbiAgICAgICAgKGNhbnZhcy5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS50b3AgPCAod2luZG93LmlubmVySGVpZ2h0IHx8IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGllbnRIZWlnaHQpKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGlzUG93ZXJPZjIodmFsdWUpIHtcbiAgICByZXR1cm4gKHZhbHVlICYgKHZhbHVlIC0gMSkpID09PSAwO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaXNTYWZhcmkgKCkge1xuICAgIHJldHVybiAvXigoPyFjaHJvbWV8YW5kcm9pZCkuKSpzYWZhcmkvaS50ZXN0KG5hdmlnYXRvci51c2VyQWdlbnQpO1xufTtcblxuZXhwb3J0IGZ1bmN0aW9uIG5leHRIaWdoZXN0UG93ZXJPZlR3byh4KSB7XG4gICAgLS14O1xuICAgIGZvciAobGV0IGkgPSAxOyBpIDwgMzI7IGkgPDw9IDEpIHtcbiAgICAgICAgeCA9IHggfCB4ID4+IGk7XG4gICAgfVxuICAgIHJldHVybiB4ICsgMTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIEZvcm1hdE51bWJlckxlbmd0aChudW0sIGxlbmd0aCkge1xuICAgIGxldCByID0gbnVtLnRvU3RyaW5nKCk7XG4gICAgd2hpbGUgKHIubGVuZ3RoIDwgbGVuZ3RoKSB7XG4gICAgICAgIHIgPSAnMCcgKyByO1xuICAgIH1cbiAgICByZXR1cm4gcjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldE1vdXNlUG9zKGNhbnZhcywgZXZ0KSB7XG4gICAgbGV0IHJlY3QgPSBjYW52YXMuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgeDogZXZ0LmNsaWVudFggLSByZWN0LmxlZnQsXG4gICAgICAgIHk6IGV2dC5jbGllbnRZIC0gcmVjdC50b3BcbiAgICB9O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaXNEaWZmKGEsIGIpIHtcbiAgICBpZiAoYSAmJiBiKSB7XG4gICAgICAgIHJldHVybiBhLnRvU3RyaW5nKCkgIT09IGIudG9TdHJpbmcoKTtcbiAgICB9XG4gICAgcmV0dXJuIGZhbHNlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc3Vic2NyaWJlTWl4aW4gKHRhcmdldCkge1xuICAgIHZhciBsaXN0ZW5lcnMgPSBuZXcgU2V0KCk7XG5cbiAgICByZXR1cm4gT2JqZWN0LmFzc2lnbih0YXJnZXQsIHtcblxuICAgICAgICBzdWJzY3JpYmUobGlzdGVuZXIpIHtcbiAgICAgICAgICAgIGxpc3RlbmVycy5hZGQobGlzdGVuZXIpO1xuICAgICAgICB9LFxuXG4gICAgICAgIG9uKHR5cGUsIGYpIHtcbiAgICAgICAgICAgIGxldCBsaXN0ZW5lciA9IHt9O1xuICAgICAgICAgICAgbGlzdGVuZXJbdHlwZV0gPSBmO1xuICAgICAgICAgICAgbGlzdGVuZXJzLmFkZChsaXN0ZW5lcik7XG4gICAgICAgIH0sXG5cbiAgICAgICAgdW5zdWJzY3JpYmUobGlzdGVuZXIpIHtcbiAgICAgICAgICAgIGxpc3RlbmVycy5kZWxldGUobGlzdGVuZXIpO1xuICAgICAgICB9LFxuXG4gICAgICAgIHVuc3Vic2NyaWJlQWxsKCkge1xuICAgICAgICAgICAgbGlzdGVuZXJzLmNsZWFyKCk7XG4gICAgICAgIH0sXG5cbiAgICAgICAgdHJpZ2dlcihldmVudCwgLi4uZGF0YSkge1xuICAgICAgICAgICAgZm9yICh2YXIgbGlzdGVuZXIgb2YgbGlzdGVuZXJzKSB7XG4gICAgICAgICAgICAgICAgaWYgKHR5cGVvZiBsaXN0ZW5lcltldmVudF0gPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgICAgICAgICAgbGlzdGVuZXJbZXZlbnRdKC4uLmRhdGEpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0pO1xufVxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvZ2xzbENhbnZhcy9zcmMvdG9vbHMvY29tbW9uLmpzXG4vLyBtb2R1bGUgaWQgPSAxXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImV4cG9ydCBmdW5jdGlvbiBzdWJzY3JpYmVNaXhpbiAodGFyZ2V0KSB7XG4gICAgdmFyIGxpc3RlbmVycyA9IG5ldyBTZXQoKTtcblxuICAgIHJldHVybiBPYmplY3QuYXNzaWduKHRhcmdldCwge1xuXG4gICAgICAgIG9uKHR5cGUsIGYpIHtcbiAgICAgICAgICAgIGxldCBsaXN0ZW5lciA9IHt9O1xuICAgICAgICAgICAgbGlzdGVuZXJbdHlwZV0gPSBmO1xuICAgICAgICAgICAgbGlzdGVuZXJzLmFkZChsaXN0ZW5lcik7XG4gICAgICAgIH0sXG5cbiAgICAgICAgb2ZmKHR5cGUsIGYpIHtcbiAgICAgICAgICAgIGlmIChmKSB7XG4gICAgICAgICAgICAgICAgbGV0IGxpc3RlbmVyID0ge307XG4gICAgICAgICAgICAgICAgbGlzdGVuZXJbdHlwZV0gPSBmO1xuICAgICAgICAgICAgICAgIGxpc3RlbmVycy5kZWxldGUobGlzdGVuZXIpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgZm9yIChsZXQgaXRlbSBvZiBsaXN0ZW5lcnMpIHtcbiAgICAgICAgICAgICAgICAgICAgZm9yIChsZXQga2V5IG9mIE9iamVjdC5rZXlzKGl0ZW0pKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoa2V5ID09PSB0eXBlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGlzdGVuZXJzLmRlbGV0ZShpdGVtKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG5cbiAgICAgICAgbGlzdFN1YnNjcmlwdGlvbnMoKSB7XG4gICAgICAgICAgICBmb3IgKGxldCBpdGVtIG9mIGxpc3RlbmVycykge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGl0ZW0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuXG4gICAgICAgIHN1YnNjcmliZShsaXN0ZW5lcikge1xuICAgICAgICAgICAgbGlzdGVuZXJzLmFkZChsaXN0ZW5lcik7XG4gICAgICAgIH0sXG5cbiAgICAgICAgdW5zdWJzY3JpYmUobGlzdGVuZXIpIHtcbiAgICAgICAgICAgIGxpc3RlbmVycy5kZWxldGUobGlzdGVuZXIpO1xuICAgICAgICB9LFxuXG4gICAgICAgIHVuc3Vic2NyaWJlQWxsKCkge1xuICAgICAgICAgICAgbGlzdGVuZXJzLmNsZWFyKCk7XG4gICAgICAgIH0sXG5cbiAgICAgICAgdHJpZ2dlcihldmVudCwgLi4uZGF0YSkge1xuICAgICAgICAgICAgZm9yICh2YXIgbGlzdGVuZXIgb2YgbGlzdGVuZXJzKSB7XG4gICAgICAgICAgICAgICAgaWYgKHR5cGVvZiBsaXN0ZW5lcltldmVudF0gPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgICAgICAgICAgbGlzdGVuZXJbZXZlbnRdKC4uLmRhdGEpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0pO1xufVxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvZ2xzbENhbnZhcy9zcmMvdG9vbHMvbWl4aW4uanNcbi8vIG1vZHVsZSBpZCA9IDJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiXCJ1c2Ugc3RyaWN0XCI7XG5pbXBvcnQgR2xzbENhbnZhcyBmcm9tIFwiZ2xzbENhbnZhcy9zcmMvR2xzbENhbnZhc1wiO1xuXG5pbXBvcnQgc2hhZGVycyBmcm9tICcuL3NoYWRlcnMnO1xuXG5pbXBvcnQgY3NzIGZyb20gJy4vc3R5bGVzLmNzcyc7XG5cbmxldCBkZWZhdWx0U2hhZGVyID0gT2JqZWN0LmtleXMoc2hhZGVycylbMF07XG5cbigoKSA9PiB7XG4gIFxuICBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gXCJibGFja1wiO1xuICBcbiAgbGV0IGNhbnZhcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJjYW52YXNcIik7XG4gIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5hcHBlbmRDaGlsZChjYW52YXMpO1xuICBjYW52YXMud2lkdGggPSA4MDA7XG4gIGNhbnZhcy5oZWlnaHQgPSA4MDA7XG4gIFxuICBjYW52YXMuc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIjtcbiAgY2FudmFzLnN0eWxlLnBvc2l0aW9uID0gXCJhYnNvbHV0ZVwiO1xuICBjYW52YXMuc3R5bGUubWFyZ2luID0gXCJhdXRvIGF1dG8gYXV0byBhdXRvXCI7XG4gIGNhbnZhcy5zdHlsZS50b3AgPSBcIjUwJVwiO1xuICBjYW52YXMuc3R5bGUubGVmdCA9IFwiNTAlXCI7XG4gIGNhbnZhcy5zdHlsZS50cmFuc2Zvcm0gPSBcInRyYW5zbGF0ZSgtNTAlLC01MCUpXCI7XG4gIFxuICBsZXQgbGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGFiZWxcIik7XG4gIGxhYmVsLmlubmVyVGV4dD1cIlNlbGVjdCBhIHNoYWRlciB0byBsb2FkIFwiO1xuICBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuYXBwZW5kQ2hpbGQobGFiZWwpO1xuICBcbiAgbGV0IGRyb3Bkb3duID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNlbGVjdFwiKTtcbiAgXG4gIGxldCBwbGVhc2VTZWxlY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwib3B0aW9uXCIpO1xuICBwbGVhc2VTZWxlY3QuaW5uZXJUZXh0ID0gXCJTZWxlY3QgYSBzaGFkZXIgdG8gbG9hZC4uLlwiO1xuICBkcm9wZG93bi5hcHBlbmRDaGlsZChwbGVhc2VTZWxlY3QpO1xuICBcbiAgXG4gIE9iamVjdC5rZXlzKHNoYWRlcnMpLm1hcChzaGFkZXIgPT4ge1xuICAgIGxldCBvcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwib3B0aW9uXCIpO1xuICAgIG9wdGlvbi5pbm5lclRleHQgPSBzaGFkZXI7XG4gICAgb3B0aW9uLnZhbHVlID0gc2hhZGVyO1xuICAgIHJldHVybiBvcHRpb247XG4gIH0pLmZvckVhY2gob3B0aW9uID0+IGRyb3Bkb3duLmFwcGVuZENoaWxkKG9wdGlvbikpO1xuICBcbiAgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmFwcGVuZENoaWxkKGRyb3Bkb3duKTtcblxuICBsZXQgc2FuZGJveDtcblxuICBmdW5jdGlvbiBsb2FkU2hhZGVyKHNoYWRlcikge1xuICAgIFxuICAgIGlmIChkcm9wZG93bi52YWx1ZSAhPT0gc2hhZGVyKSB7XG4gICAgICBkcm9wZG93bi52YWx1ZSA9IHNoYWRlcjtcbiAgICB9XG4gICAgXG4gICAgaWYgKHNhbmRib3gpIHNhbmRib3guZGVzdHJveSgpO1xuICAgIHNhbmRib3ggPSB1bmRlZmluZWQ7XG4gICAgXG4gICAgc2FuZGJveCA9IG5ldyBHbHNsQ2FudmFzKGNhbnZhcyk7XG4gIFxuICAgIHNhbmRib3guc2V0VW5pZm9ybSgndV9yZXNvbHV0aW9uJywgY2FudmFzLndpZHRoLCBjYW52YXMuaGVpZ2h0KTtcbiAgICBzYW5kYm94LmxvYWQoc2hhZGVyc1tzaGFkZXJdKTtcbiAgfVxuICBcbiAgXG4gIGRyb3Bkb3duLmFkZEV2ZW50TGlzdGVuZXIoXCJjaGFuZ2VcIiwgKGUpID0+IHtcbiAgICBsb2FkU2hhZGVyKGRyb3Bkb3duLnZhbHVlKTtcbiAgfSk7XG4gIFxuICBsb2FkU2hhZGVyKGRlZmF1bHRTaGFkZXIpO1xuICBcbiAgXG4gIFxuICBcbiAgXG4gIFxufSkoKTtcblxuXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvaW5kZXguanMiLCIvKlxuVGhlIE1JVCBMaWNlbnNlIChNSVQpXG5cbkNvcHlyaWdodCAoYykgMjAxNSBQYXRyaWNpbyBHb256YWxleiBWaXZvICggaHR0cDovL3d3dy5wYXRyaWNpb2dvbnphbGV6dml2by5jb20gKVxuXG5QZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5IG9mXG50aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSAnU29mdHdhcmUnKSwgdG8gZGVhbCBpblxudGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0cyB0b1xudXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbCBjb3BpZXMgb2ZcbnRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzIGZ1cm5pc2hlZCB0byBkbyBzbyxcbnN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuXG5UaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpbiBhbGxcbmNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG5cblRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCAnQVMgSVMnLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXG5JTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSwgRklUTkVTU1xuRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRSBBVVRIT1JTIE9SXG5DT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUiBMSUFCSUxJVFksIFdIRVRIRVJcbklOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSwgT1VUIE9GIE9SIElOXG5DT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU4gVEhFIFNPRlRXQVJFLlxuKi9cblxuaW1wb3J0IHhociBmcm9tICd4aHInO1xuXG5pbXBvcnQgeyBzZXR1cFdlYkdMLCBjcmVhdGVTaGFkZXIsIGNyZWF0ZVByb2dyYW0sIHBhcnNlVW5pZm9ybXMsIGxvYWRUZXh0dXJlIH0gZnJvbSAnLi9nbC9nbCc7XG5pbXBvcnQgVGV4dHVyZSBmcm9tICcuL2dsL1RleHR1cmUnO1xuXG5pbXBvcnQgeyBpc0NhbnZhc1Zpc2libGUsIGlzRGlmZiB9IGZyb20gJy4vdG9vbHMvY29tbW9uJztcbmltcG9ydCB7IHN1YnNjcmliZU1peGluIH0gZnJvbSAnLi90b29scy9taXhpbic7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEdsc2xDYW52YXMge1xuICAgIGNvbnN0cnVjdG9yKGNhbnZhcywgb3B0aW9ucykge1xuICAgICAgICBzdWJzY3JpYmVNaXhpbih0aGlzKTtcblxuICAgICAgICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcblxuICAgICAgICB0aGlzLndpZHRoID0gY2FudmFzLmNsaWVudFdpZHRoO1xuICAgICAgICB0aGlzLmhlaWdodCA9IGNhbnZhcy5jbGllbnRIZWlnaHQ7XG5cbiAgICAgICAgdGhpcy5jYW52YXMgPSBjYW52YXM7XG4gICAgICAgIHRoaXMuZ2wgPSB1bmRlZmluZWQ7XG4gICAgICAgIHRoaXMucHJvZ3JhbSA9IHVuZGVmaW5lZDtcbiAgICAgICAgdGhpcy50ZXh0dXJlcyA9IHt9O1xuICAgICAgICB0aGlzLnVuaWZvcm1zID0ge307XG4gICAgICAgIHRoaXMudmJvID0ge307XG4gICAgICAgIHRoaXMuaXNWYWxpZCA9IGZhbHNlO1xuXG4gICAgICAgIHRoaXMudmVydGV4U3RyaW5nID0gb3B0aW9ucy52ZXJ0ZXhTdHJpbmcgfHwgYFxuI2lmZGVmIEdMX0VTXG5wcmVjaXNpb24gbWVkaXVtcCBmbG9hdDtcbiNlbmRpZlxuXG5hdHRyaWJ1dGUgdmVjMiBhX3Bvc2l0aW9uO1xuYXR0cmlidXRlIHZlYzIgYV90ZXhjb29yZDtcblxudmFyeWluZyB2ZWMyIHZfdGV4Y29vcmQ7XG5cbnZvaWQgbWFpbigpIHtcbiAgICBnbF9Qb3NpdGlvbiA9IHZlYzQoYV9wb3NpdGlvbiwgMC4wLCAxLjApO1xuICAgIHZfdGV4Y29vcmQgPSBhX3RleGNvb3JkO1xufVxuYDtcbiAgICAgICAgdGhpcy5mcmFnbWVudFN0cmluZyA9IG9wdGlvbnMuZnJhZ21lbnRTdHJpbmcgfHwgYFxuI2lmZGVmIEdMX0VTXG5wcmVjaXNpb24gbWVkaXVtcCBmbG9hdDtcbiNlbmRpZlxuXG52YXJ5aW5nIHZlYzIgdl90ZXhjb29yZDtcblxudm9pZCBtYWluKCl7XG4gICAgZ2xfRnJhZ0NvbG9yID0gdmVjNCgwLjApO1xufVxuYDtcblxuICAgICAgICAvLyBHTCBDb250ZXh0XG4gICAgICAgIGxldCBnbCA9IHNldHVwV2ViR0woY2FudmFzLCBvcHRpb25zKTtcbiAgICAgICAgaWYgKCFnbCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuZ2wgPSBnbDtcbiAgICAgICAgdGhpcy50aW1lTG9hZCA9IHRoaXMudGltZVByZXYgPSBwZXJmb3JtYW5jZS5ub3coKTtcbiAgICAgICAgdGhpcy50aW1lRGVsdGEgPSAwLjtcbiAgICAgICAgdGhpcy5mb3JjZVJlbmRlciA9IHRydWU7XG4gICAgICAgIHRoaXMucGF1c2VkID0gZmFsc2U7XG5cbiAgICAgICAgLy8gQWxsb3cgYWxwaGFcbiAgICAgICAgY2FudmFzLnN0eWxlLmJhY2tncm91bmRDb2xvciA9IG9wdGlvbnMuYmFja2dyb3VuZENvbG9yIHx8ICdyZ2JhKDEsMSwxLDApJztcblxuICAgICAgICAvLyBMb2FkIHNoYWRlclxuICAgICAgICBpZiAoY2FudmFzLmhhc0F0dHJpYnV0ZSgnZGF0YS1mcmFnbWVudCcpKSB7XG4gICAgICAgICAgICB0aGlzLmZyYWdtZW50U3RyaW5nID0gY2FudmFzLmdldEF0dHJpYnV0ZSgnZGF0YS1mcmFnbWVudCcpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKGNhbnZhcy5oYXNBdHRyaWJ1dGUoJ2RhdGEtZnJhZ21lbnQtdXJsJykpIHtcbiAgICAgICAgICAgIGxldCBzb3VyY2UgPSBjYW52YXMuZ2V0QXR0cmlidXRlKCdkYXRhLWZyYWdtZW50LXVybCcpO1xuICAgICAgICAgICAgeGhyLmdldChzb3VyY2UsIChlcnJvciwgcmVzcG9uc2UsIGJvZHkpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLmxvYWQoYm9keSwgdGhpcy52ZXJ0ZXhTdHJpbmcpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBMb2FkIHNoYWRlclxuICAgICAgICBpZiAoY2FudmFzLmhhc0F0dHJpYnV0ZSgnZGF0YS12ZXJ0ZXgnKSkge1xuICAgICAgICAgICAgdGhpcy52ZXJ0ZXhTdHJpbmcgPSBjYW52YXMuZ2V0QXR0cmlidXRlKCdkYXRhLXZlcnRleCcpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKGNhbnZhcy5oYXNBdHRyaWJ1dGUoJ2RhdGEtdmVydGV4LXVybCcpKSB7XG4gICAgICAgICAgICBsZXQgc291cmNlID0gY2FudmFzLmdldEF0dHJpYnV0ZSgnZGF0YS12ZXJ0ZXgtdXJsJyk7XG4gICAgICAgICAgICB4aHIuZ2V0KHNvdXJjZSwgKGVycm9yLCByZXNwb25zZSwgYm9keSkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMubG9hZCh0aGlzLmZyYWdtZW50U3RyaW5nLCBib2R5KTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5sb2FkKCk7XG5cbiAgICAgICAgaWYgKCF0aGlzLnByb2dyYW0pIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIERlZmluZSBWZXJ0ZXggYnVmZmVyXG4gICAgICAgIGxldCB0ZXhDb29yZHNMb2MgPSBnbC5nZXRBdHRyaWJMb2NhdGlvbih0aGlzLnByb2dyYW0sICdhX3RleGNvb3JkJyk7XG4gICAgICAgIHRoaXMudmJvLnRleENvb3JkcyA9IGdsLmNyZWF0ZUJ1ZmZlcigpO1xuICAgICAgICB0aGlzLmdsLmJpbmRCdWZmZXIoZ2wuQVJSQVlfQlVGRkVSLCB0aGlzLnZiby50ZXhDb29yZHMpO1xuICAgICAgICB0aGlzLmdsLmJ1ZmZlckRhdGEoZ2wuQVJSQVlfQlVGRkVSLCBuZXcgRmxvYXQzMkFycmF5KFswLjAsIDAuMCwgMS4wLCAwLjAsIDAuMCwgMS4wLCAwLjAsIDEuMCwgMS4wLCAwLjAsIDEuMCwgMS4wXSksIGdsLlNUQVRJQ19EUkFXKTtcbiAgICAgICAgdGhpcy5nbC5lbmFibGVWZXJ0ZXhBdHRyaWJBcnJheSh0ZXhDb29yZHNMb2MpO1xuICAgICAgICB0aGlzLmdsLnZlcnRleEF0dHJpYlBvaW50ZXIodGV4Q29vcmRzTG9jLCAyLCBnbC5GTE9BVCwgZmFsc2UsIDAsIDApO1xuXG4gICAgICAgIGxldCB2ZXJ0aWNlc0xvYyA9IGdsLmdldEF0dHJpYkxvY2F0aW9uKHRoaXMucHJvZ3JhbSwgJ2FfcG9zaXRpb24nKTtcbiAgICAgICAgdGhpcy52Ym8udmVydGljZXMgPSBnbC5jcmVhdGVCdWZmZXIoKTtcbiAgICAgICAgdGhpcy5nbC5iaW5kQnVmZmVyKGdsLkFSUkFZX0JVRkZFUiwgdGhpcy52Ym8udmVydGljZXMpO1xuICAgICAgICB0aGlzLmdsLmJ1ZmZlckRhdGEoZ2wuQVJSQVlfQlVGRkVSLCBuZXcgRmxvYXQzMkFycmF5KFstMS4wLCAtMS4wLCAxLjAsIC0xLjAsIC0xLjAsIDEuMCwgLTEuMCwgMS4wLCAxLjAsIC0xLjAsIDEuMCwgMS4wXSksIGdsLlNUQVRJQ19EUkFXKTtcbiAgICAgICAgdGhpcy5nbC5lbmFibGVWZXJ0ZXhBdHRyaWJBcnJheSh2ZXJ0aWNlc0xvYyk7XG4gICAgICAgIHRoaXMuZ2wudmVydGV4QXR0cmliUG9pbnRlcih2ZXJ0aWNlc0xvYywgMiwgZ2wuRkxPQVQsIGZhbHNlLCAwLCAwKTtcblxuICAgICAgICAvLyBsb2FkIFRFWFRVUkVTXG4gICAgICAgIGlmIChjYW52YXMuaGFzQXR0cmlidXRlKCdkYXRhLXRleHR1cmVzJykpIHtcbiAgICAgICAgICAgIGxldCBpbWdMaXN0ID0gY2FudmFzLmdldEF0dHJpYnV0ZSgnZGF0YS10ZXh0dXJlcycpLnNwbGl0KCcsJyk7XG4gICAgICAgICAgICBmb3IgKGxldCBuSW1nIGluIGltZ0xpc3QpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnNldFVuaWZvcm0oJ3VfdGV4JyArIG5JbWcsIGltZ0xpc3RbbkltZ10pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT0gRVZFTlRTXG4gICAgICAgIGxldCBtb3VzZSA9IHtcbiAgICAgICAgICAgIHg6IDAsXG4gICAgICAgICAgICB5OiAwXG4gICAgICAgIH07XG4gICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlbW92ZScsIChlKSA9PiB7XG4gICAgICAgICAgICBtb3VzZS54ID0gZS5jbGllbnRYIHx8IGUucGFnZVg7XG4gICAgICAgICAgICBtb3VzZS55ID0gZS5jbGllbnRZIHx8IGUucGFnZVk7XG4gICAgICAgIH0sIGZhbHNlKTtcblxuICAgICAgICBsZXQgc2FuZGJveCA9IHRoaXM7XG4gICAgICAgIGZ1bmN0aW9uIFJlbmRlckxvb3AoKSB7XG4gICAgICAgICAgICBpZiAoc2FuZGJveC5uTW91c2UgPiAxKSB7XG4gICAgICAgICAgICAgICAgc2FuZGJveC5zZXRNb3VzZShtb3VzZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBzYW5kYm94LnJlbmRlcigpO1xuICAgICAgICAgICAgc2FuZGJveC5mb3JjZVJlbmRlciA9IHNhbmRib3gucmVzaXplKCk7XG4gICAgICAgICAgICB3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lKFJlbmRlckxvb3ApO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gU3RhcnRcbiAgICAgICAgdGhpcy5zZXRNb3VzZSh7IHg6IDAsIHk6IDAgfSk7XG4gICAgICAgIFJlbmRlckxvb3AoKTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgZGVzdHJveSgpIHtcbiAgICAgICAgdGhpcy5hbmltYXRlZCA9IGZhbHNlO1xuICAgICAgICB0aGlzLmlzVmFsaWQgPSBmYWxzZTtcbiAgICAgICAgZm9yIChsZXQgdGV4IGluIHRoaXMudGV4dHVyZXMpIHtcbiAgICAgICAgICAgIHRoaXMuZ2wuZGVsZXRlVGV4dHVyZSh0ZXgpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMudGV4dHVyZXMgPSB7fTtcbiAgICAgICAgZm9yIChsZXQgYXR0IGluIHRoaXMuYXR0cmlicykge1xuICAgICAgICAgICAgdGhpcy5nbC5kZWxldGVCdWZmZXIodGhpcy5hdHRyaWJzW2F0dF0pO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuZ2wudXNlUHJvZ3JhbShudWxsKTtcbiAgICAgICAgdGhpcy5nbC5kZWxldGVQcm9ncmFtKHRoaXMucHJvZ3JhbSk7XG4gICAgICAgIHRoaXMucHJvZ3JhbSA9IG51bGw7XG4gICAgICAgIHRoaXMuZ2wgPSBudWxsO1xuICAgIH1cblxuICAgIGxvYWQgKGZyYWdTdHJpbmcsIHZlcnRTdHJpbmcpIHtcbiAgICAgICAgLy8gTG9hZCB2ZXJ0ZXggc2hhZGVyIGlmIHRoZXJlIGlzIG9uZVxuICAgICAgICBpZiAodmVydFN0cmluZykge1xuICAgICAgICAgICAgdGhpcy52ZXJ0ZXhTdHJpbmcgPSB2ZXJ0U3RyaW5nO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gTG9hZCBmcmFnbWVudCBzaGFkZXIgaWYgdGhlcmUgaXMgb25lXG4gICAgICAgIGlmIChmcmFnU3RyaW5nKSB7XG4gICAgICAgICAgICB0aGlzLmZyYWdtZW50U3RyaW5nID0gZnJhZ1N0cmluZztcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuYW5pbWF0ZWQgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5uRGVsdGEgPSAodGhpcy5mcmFnbWVudFN0cmluZy5tYXRjaCgvdV9kZWx0YS9nKSB8fCBbXSkubGVuZ3RoO1xuICAgICAgICB0aGlzLm5UaW1lID0gKHRoaXMuZnJhZ21lbnRTdHJpbmcubWF0Y2goL3VfdGltZS9nKSB8fCBbXSkubGVuZ3RoO1xuICAgICAgICB0aGlzLm5EYXRlID0gKHRoaXMuZnJhZ21lbnRTdHJpbmcubWF0Y2goL3VfZGF0ZS9nKSB8fCBbXSkubGVuZ3RoO1xuICAgICAgICB0aGlzLm5Nb3VzZSA9ICh0aGlzLmZyYWdtZW50U3RyaW5nLm1hdGNoKC91X21vdXNlL2cpIHx8IFtdKS5sZW5ndGg7XG4gICAgICAgIHRoaXMuYW5pbWF0ZWQgPSB0aGlzLm5EYXRlID4gMSB8fCB0aGlzLm5UaW1lID4gMSB8fCB0aGlzLm5Nb3VzZSA+IDE7XG5cbiAgICAgICAgbGV0IG5UZXh0dXJlcyA9IHRoaXMuZnJhZ21lbnRTdHJpbmcuc2VhcmNoKC9zYW1wbGVyMkQvZyk7XG4gICAgICAgIGlmIChuVGV4dHVyZXMpIHtcbiAgICAgICAgICAgIGxldCBsaW5lcyA9IHRoaXMuZnJhZ21lbnRTdHJpbmcuc3BsaXQoJ1xcbicpO1xuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsaW5lcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgIGxldCBtYXRjaCA9IGxpbmVzW2ldLm1hdGNoKC91bmlmb3JtXFxzKnNhbXBsZXIyRFxccyooW1xcd10qKTtcXHMqXFwvXFwvXFxzKihbXFx3fFxcOlxcL1xcL3xcXC58XFwtfFxcX10qKS9pKTtcbiAgICAgICAgICAgICAgICBpZiAobWF0Y2gpIHtcbiAgICAgICAgICAgICAgICAgICAgbGV0IGV4dCA9IG1hdGNoWzJdLnNwbGl0KCcuJykucG9wKCkudG9Mb3dlckNhc2UoKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKG1hdGNoWzFdICYmICBtYXRjaFsyXSAmJiBcbiAgICAgICAgICAgICAgICAgICAgICAgIChleHQgPT09ICdqcGcnIHx8IGV4dCA9PT0gJ2pwZWcnIHx8IGV4dCA9PT0gJ3BuZycgfHwgXG4gICAgICAgICAgICAgICAgICAgICAgICAgZXh0ID09PSAnb2d2JyB8fCBleHQgPT09ICd3ZWJtJyB8fCBleHQgPT09ICdtcDQnKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRVbmlmb3JtKG1hdGNoWzFdLCBtYXRjaFsyXSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgbGV0IG1haW4gPSBsaW5lc1tpXS5tYXRjaCgvXFxzKnZvaWRcXHMqbWFpblxccyovZyk7XG4gICAgICAgICAgICAgICAgaWYgKG1haW4pIHtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgbGV0IHZlcnRleFNoYWRlciA9IGNyZWF0ZVNoYWRlcih0aGlzLCB0aGlzLnZlcnRleFN0cmluZywgdGhpcy5nbC5WRVJURVhfU0hBREVSKTtcbiAgICAgICAgbGV0IGZyYWdtZW50U2hhZGVyID0gY3JlYXRlU2hhZGVyKHRoaXMsIHRoaXMuZnJhZ21lbnRTdHJpbmcsIHRoaXMuZ2wuRlJBR01FTlRfU0hBREVSKTtcblxuICAgICAgICAvLyBJZiBGcmFnbWVudCBzaGFkZXIgZmFpbHMgbG9hZCBhIGVtcHR5IG9uZSB0byBzaWduIHRoZSBlcnJvclxuICAgICAgICBpZiAoIWZyYWdtZW50U2hhZGVyKSB7XG4gICAgICAgICAgICBmcmFnbWVudFNoYWRlciA9IGNyZWF0ZVNoYWRlcih0aGlzLCAndm9pZCBtYWluKCl7XFxuXFx0Z2xfRnJhZ0NvbG9yID0gdmVjNCgxLjApO1xcbn0nLCB0aGlzLmdsLkZSQUdNRU5UX1NIQURFUik7XG4gICAgICAgICAgICB0aGlzLmlzVmFsaWQgPSBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuaXNWYWxpZCA9IHRydWU7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBDcmVhdGUgYW5kIHVzZSBwcm9ncmFtXG4gICAgICAgIGxldCBwcm9ncmFtID0gY3JlYXRlUHJvZ3JhbSh0aGlzLCBbdmVydGV4U2hhZGVyLCBmcmFnbWVudFNoYWRlcl0pOy8vLCBbMCwxXSxbJ2FfdGV4Y29vcmQnLCdhX3Bvc2l0aW9uJ10pO1xuICAgICAgICB0aGlzLmdsLnVzZVByb2dyYW0ocHJvZ3JhbSk7XG5cbiAgICAgICAgLy8gRGVsZXRlIHNoYWRlcnNcbiAgICAgICAgLy8gdGhpcy5nbC5kZXRhY2hTaGFkZXIocHJvZ3JhbSwgdmVydGV4U2hhZGVyKTtcbiAgICAgICAgLy8gdGhpcy5nbC5kZXRhY2hTaGFkZXIocHJvZ3JhbSwgZnJhZ21lbnRTaGFkZXIpO1xuICAgICAgICB0aGlzLmdsLmRlbGV0ZVNoYWRlcih2ZXJ0ZXhTaGFkZXIpO1xuICAgICAgICB0aGlzLmdsLmRlbGV0ZVNoYWRlcihmcmFnbWVudFNoYWRlcik7XG5cbiAgICAgICAgdGhpcy5wcm9ncmFtID0gcHJvZ3JhbTtcbiAgICAgICAgdGhpcy5jaGFuZ2UgPSB0cnVlO1xuXG4gICAgICAgIC8vIFRyaWdnZXIgZXZlbnRcbiAgICAgICAgdGhpcy50cmlnZ2VyKCdsb2FkJywge30pO1xuXG4gICAgICAgIHRoaXMuZm9yY2VSZW5kZXIgPSB0cnVlO1xuICAgIH1cblxuICAgIHRlc3QgKGNhbGxiYWNrLCBmcmFnU3RyaW5nLCB2ZXJ0U3RyaW5nKSB7XG4gICAgICAgIC8vIFRoYW5rcyB0byBAdGhlc3BpdGUgZm9yIHRoZSBoZWxwIGhlcmVcbiAgICAgICAgLy8gaHR0cHM6Ly93d3cua2hyb25vcy5vcmcvcmVnaXN0cnkvd2ViZ2wvZXh0ZW5zaW9ucy9FWFRfZGlzam9pbnRfdGltZXJfcXVlcnkvXG4gICAgICAgIGxldCBwcmVfdGVzdF92ZXJ0ID0gdGhpcy52ZXJ0ZXhTdHJpbmc7XG4gICAgICAgIGxldCBwcmVfdGVzdF9mcmFnID0gdGhpcy5mcmFnbWVudFN0cmluZztcbiAgICAgICAgbGV0IHByZV90ZXN0X3BhdXNlZCA9IHRoaXMucGF1c2VkO1xuXG4gICAgICAgIGxldCBleHQgPSB0aGlzLmdsLmdldEV4dGVuc2lvbignRVhUX2Rpc2pvaW50X3RpbWVyX3F1ZXJ5Jyk7XG4gICAgICAgIGxldCBxdWVyeSA9IGV4dC5jcmVhdGVRdWVyeUVYVCgpO1xuICAgICAgICBsZXQgd2FzVmFsaWQgPSB0aGlzLmlzVmFsaWQ7XG5cbiAgICAgICAgaWYgKGZyYWdTdHJpbmcgfHwgdmVydFN0cmluZykge1xuICAgICAgICAgICAgdGhpcy5sb2FkKGZyYWdTdHJpbmcsIHZlcnRTdHJpbmcpO1xuICAgICAgICAgICAgd2FzVmFsaWQgPSB0aGlzLmlzVmFsaWQ7XG4gICAgICAgICAgICB0aGlzLmZvcmNlUmVuZGVyID0gdHJ1ZTtcbiAgICAgICAgICAgIHRoaXMucmVuZGVyKCk7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLnBhdXNlZCA9IHRydWU7XG4gICAgICAgIGV4dC5iZWdpblF1ZXJ5RVhUKGV4dC5USU1FX0VMQVBTRURfRVhULCBxdWVyeSk7XG4gICAgICAgIHRoaXMuZm9yY2VSZW5kZXIgPSB0cnVlO1xuICAgICAgICB0aGlzLnJlbmRlcigpO1xuICAgICAgICBleHQuZW5kUXVlcnlFWFQoZXh0LlRJTUVfRUxBUFNFRF9FWFQpO1xuXG4gICAgICAgIGxldCBzYW5kYm94ID0gdGhpcztcbiAgICAgICAgZnVuY3Rpb24gZmluaXNoVGVzdCgpIHtcbiAgICAgICAgICAgIC8vIFJldmVydCBjaGFuZ2VzLi4uIGdvIGJhY2sgdG8gbm9ybWFsXG4gICAgICAgICAgICBzYW5kYm94LnBhdXNlZCA9IHByZV90ZXN0X3BhdXNlZDtcbiAgICAgICAgICAgIGlmIChmcmFnU3RyaW5nIHx8IHZlcnRTdHJpbmcpIHtcbiAgICAgICAgICAgICAgICBzYW5kYm94LmxvYWQocHJlX3Rlc3RfZnJhZywgcHJlX3Rlc3RfdmVydCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZnVuY3Rpb24gd2FpdEZvclRlc3QoKSB7XG4gICAgICAgICAgICBzYW5kYm94LmZvcmNlUmVuZGVyID0gdHJ1ZTtcbiAgICAgICAgICAgIHNhbmRib3gucmVuZGVyKCk7XG4gICAgICAgICAgICBsZXQgYXZhaWxhYmxlID0gZXh0LmdldFF1ZXJ5T2JqZWN0RVhUKHF1ZXJ5LCBleHQuUVVFUllfUkVTVUxUX0FWQUlMQUJMRV9FWFQpO1xuICAgICAgICAgICAgbGV0IGRpc2pvaW50ID0gc2FuZGJveC5nbC5nZXRQYXJhbWV0ZXIoZXh0LkdQVV9ESVNKT0lOVF9FWFQpO1xuICAgICAgICAgICAgaWYgKGF2YWlsYWJsZSAmJiAhZGlzam9pbnQpIHtcbiAgICAgICAgICAgICAgICBsZXQgcmV0ID0ge1xuICAgICAgICAgICAgICAgICAgICB3YXNWYWxpZDogd2FzVmFsaWQsXG4gICAgICAgICAgICAgICAgICAgIGZyYWc6IGZyYWdTdHJpbmcgfHwgc2FuZGJveC5mcmFnbWVudFN0cmluZyxcbiAgICAgICAgICAgICAgICAgICAgdmVydDogdmVydFN0cmluZyB8fCBzYW5kYm94LnZlcnRleFN0cmluZyxcbiAgICAgICAgICAgICAgICAgICAgdGltZUVsYXBzZWRNczogZXh0LmdldFF1ZXJ5T2JqZWN0RVhUKHF1ZXJ5LCBleHQuUVVFUllfUkVTVUxUX0VYVCkvMTAwMDAwMC4wXG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICBmaW5pc2hUZXN0KCk7XG4gICAgICAgICAgICAgICAgY2FsbGJhY2socmV0KTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZSh3YWl0Rm9yVGVzdCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgd2FpdEZvclRlc3QoKTtcbiAgICB9XG5cbiAgICBsb2FkVGV4dHVyZSAobmFtZSwgdXJsRWxlbWVudE9yRGF0YSwgb3B0aW9ucykge1xuICAgICAgICBpZiAoIW9wdGlvbnMpIHtcbiAgICAgICAgICAgIG9wdGlvbnMgPSB7fTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0eXBlb2YgdXJsRWxlbWVudE9yRGF0YSA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgIG9wdGlvbnMudXJsID0gdXJsRWxlbWVudE9yRGF0YTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmICh0eXBlb2YgdXJsRWxlbWVudE9yRGF0YSA9PT0gJ29iamVjdCcgJiYgdXJsRWxlbWVudE9yRGF0YS5kYXRhICYmIHVybEVsZW1lbnRPckRhdGEud2lkdGggJiYgdXJsRWxlbWVudE9yRGF0YS5oZWlnaHQpIHtcbiAgICAgICAgICAgIG9wdGlvbnMuZGF0YSA9IHVybEVsZW1lbnRPckRhdGEuZGF0YTtcbiAgICAgICAgICAgIG9wdGlvbnMud2lkdGggPSB1cmxFbGVtZW50T3JEYXRhLndpZHRoO1xuICAgICAgICAgICAgb3B0aW9ucy5oZWlnaHQgPSB1cmxFbGVtZW50T3JEYXRhLmhlaWdodDtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmICh0eXBlb2YgdXJsRWxlbWVudE9yRGF0YSA9PT0gJ29iamVjdCcpIHtcbiAgICAgICAgICAgIG9wdGlvbnMuZWxlbWVudCA9IHVybEVsZW1lbnRPckRhdGE7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodGhpcy50ZXh0dXJlc1tuYW1lXSkge1xuICAgICAgICAgICAgaWYgKHRoaXMudGV4dHVyZXNbbmFtZV0pIHtcbiAgICAgICAgICAgICAgICB0aGlzLnRleHR1cmVzW25hbWVdLmxvYWQob3B0aW9ucyk7XG4gICAgICAgICAgICAgICAgdGhpcy50ZXh0dXJlc1tuYW1lXS5vbignbG9hZGVkJywgKGFyZ3MpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5mb3JjZVJlbmRlciA9IHRydWU7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB0aGlzLnRleHR1cmVzW25hbWVdID0gbmV3IFRleHR1cmUodGhpcy5nbCwgbmFtZSwgb3B0aW9ucyk7XG4gICAgICAgICAgICB0aGlzLnRleHR1cmVzW25hbWVdLm9uKCdsb2FkZWQnLCAoYXJncykgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMuZm9yY2VSZW5kZXIgPSB0cnVlO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgfVxuXG4gICAgcmVmcmVzaFVuaWZvcm1zKCkge1xuICAgICAgICB0aGlzLnVuaWZvcm1zID0ge307XG4gICAgfVxuXG4gICAgc2V0VW5pZm9ybShuYW1lLCAuLi52YWx1ZSkge1xuICAgICAgICBsZXQgdSA9IHt9O1xuICAgICAgICB1W25hbWVdID0gdmFsdWU7XG4gICAgICAgIHRoaXMuc2V0VW5pZm9ybXModSk7XG4gICAgfVxuXG4gICAgc2V0VW5pZm9ybXModW5pZm9ybXMpIHtcbiAgICAgICAgbGV0IHBhcnNlZCA9IHBhcnNlVW5pZm9ybXModW5pZm9ybXMpO1xuICAgICAgICAvLyBTZXQgZWFjaCB1bmlmb3JtXG4gICAgICAgIGZvciAobGV0IHUgaW4gcGFyc2VkKSB7XG4gICAgICAgICAgICBpZiAocGFyc2VkW3VdLnR5cGUgPT09ICdzYW1wbGVyMkQnKSB7XG4gICAgICAgICAgICAgICAgLy8gRm9yIHRleHR1cmVzLCB3ZSBuZWVkIHRvIHRyYWNrIHRleHR1cmUgdW5pdHMsIHNvIHdlIGhhdmUgYSBzcGVjaWFsIHNldHRlclxuICAgICAgICAgICAgICAgIC8vIHRoaXMudW5pZm9ybVRleHR1cmUocGFyc2VkW3VdLm5hbWUsIHBhcnNlZFt1XS52YWx1ZVswXSk7XG4gICAgICAgICAgICAgICAgdGhpcy5sb2FkVGV4dHVyZShwYXJzZWRbdV0ubmFtZSwgcGFyc2VkW3VdLnZhbHVlWzBdKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHRoaXMudW5pZm9ybShwYXJzZWRbdV0ubWV0aG9kLCBwYXJzZWRbdV0udHlwZSwgcGFyc2VkW3VdLm5hbWUsIHBhcnNlZFt1XS52YWx1ZSk7XG4gICAgICAgICAgICAgICAgdGhpcy5mb3JjZVJlbmRlciA9IHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBzZXRNb3VzZShtb3VzZSkge1xuICAgICAgICAvLyBzZXQgdGhlIG1vdXNlIHVuaWZvcm1cbiAgICAgICAgbGV0IHJlY3QgPSB0aGlzLmNhbnZhcy5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgICAgICAgaWYgKG1vdXNlICYmXG4gICAgICAgICAgICBtb3VzZS54ICYmIG1vdXNlLnggPj0gcmVjdC5sZWZ0ICYmIG1vdXNlLnggPD0gcmVjdC5yaWdodCAmJlxuICAgICAgICAgICAgbW91c2UueSAmJiBtb3VzZS55ID49IHJlY3QudG9wICYmIG1vdXNlLnkgPD0gcmVjdC5ib3R0b20pIHtcbiAgICAgICAgICAgIHRoaXMudW5pZm9ybSgnMmYnLCAndmVjMicsICd1X21vdXNlJywgbW91c2UueCAtIHJlY3QubGVmdCwgdGhpcy5jYW52YXMuaGVpZ2h0IC0gKG1vdXNlLnkgLSByZWN0LnRvcCkpO1xuICAgICAgICB9XG4gICAgfVxuXG5cdC8vIGV4OiBwcm9ncmFtLnVuaWZvcm0oJzNmJywgJ3Bvc2l0aW9uJywgeCwgeSwgeik7XG4gICAgdW5pZm9ybSAobWV0aG9kLCB0eXBlLCBuYW1lLCAuLi52YWx1ZSkgeyAvLyAndmFsdWUnIGlzIGEgbWV0aG9kLWFwcHJvcHJpYXRlIGFyZ3VtZW50cyBsaXN0XG4gICAgICAgIHRoaXMudW5pZm9ybXNbbmFtZV0gPSB0aGlzLnVuaWZvcm1zW25hbWVdIHx8IHt9O1xuICAgICAgICBsZXQgdW5pZm9ybSA9IHRoaXMudW5pZm9ybXNbbmFtZV07XG4gICAgICAgIGxldCBjaGFuZ2UgPSBpc0RpZmYodW5pZm9ybS52YWx1ZSwgdmFsdWUpO1xuICAgICAgICBpZiAoY2hhbmdlIHx8IHRoaXMuY2hhbmdlIHx8IHVuaWZvcm0ubG9jYXRpb24gPT09IHVuZGVmaW5lZCB8fCB1bmlmb3JtLnZhbHVlID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIHVuaWZvcm0ubmFtZSA9IG5hbWU7XG4gICAgICAgICAgICB1bmlmb3JtLnZhbHVlID0gdmFsdWU7XG4gICAgICAgICAgICB1bmlmb3JtLnR5cGUgPSB0eXBlO1xuICAgICAgICAgICAgdW5pZm9ybS5tZXRob2QgPSAndW5pZm9ybScgKyBtZXRob2Q7XG4gICAgICAgICAgICB1bmlmb3JtLmxvY2F0aW9uID0gdGhpcy5nbC5nZXRVbmlmb3JtTG9jYXRpb24odGhpcy5wcm9ncmFtLCBuYW1lKTtcblxuICAgICAgICAgICAgdGhpcy5nbFt1bmlmb3JtLm1ldGhvZF0uYXBwbHkodGhpcy5nbCwgW3VuaWZvcm0ubG9jYXRpb25dLmNvbmNhdCh1bmlmb3JtLnZhbHVlKSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICB1bmlmb3JtVGV4dHVyZShuYW1lLCB0ZXh0dXJlLCBvcHRpb25zKSB7XG4gICAgICAgIGlmICh0aGlzLnRleHR1cmVzW25hbWVdID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIHRoaXMubG9hZFRleHR1cmUobmFtZSwgdGV4dHVyZSwgb3B0aW9ucyk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB0aGlzLnVuaWZvcm0oJzFpJywgJ3NhbXBsZXIyRCcsIG5hbWUsIHRoaXMudGV4dXJlSW5kZXgpO1xuICAgICAgICAgICAgdGhpcy50ZXh0dXJlc1tuYW1lXS5iaW5kKHRoaXMudGV4dXJlSW5kZXgpO1xuICAgICAgICAgICAgdGhpcy51bmlmb3JtKCcyZicsICd2ZWMyJywgbmFtZSArICdSZXNvbHV0aW9uJywgdGhpcy50ZXh0dXJlc1tuYW1lXS53aWR0aCwgdGhpcy50ZXh0dXJlc1tuYW1lXS5oZWlnaHQpO1xuICAgICAgICAgICAgdGhpcy50ZXh1cmVJbmRleCsrO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmVzaXplKCkge1xuICAgICAgICBpZiAodGhpcy53aWR0aCAhPT0gdGhpcy5jYW52YXMuY2xpZW50V2lkdGggfHxcbiAgICAgICAgICAgIHRoaXMuaGVpZ2h0ICE9PSB0aGlzLmNhbnZhcy5jbGllbnRIZWlnaHQpIHtcbiAgICAgICAgICAgIGxldCByZWFsVG9DU1NQaXhlbHMgPSB3aW5kb3cuZGV2aWNlUGl4ZWxSYXRpbyB8fCAxO1xuXG4gICAgICAgICAgICAvLyBMb29rdXAgdGhlIHNpemUgdGhlIGJyb3dzZXIgaXMgZGlzcGxheWluZyB0aGUgY2FudmFzIGluIENTUyBwaXhlbHNcbiAgICAgICAgICAgIC8vIGFuZCBjb21wdXRlIGEgc2l6ZSBuZWVkZWQgdG8gbWFrZSBvdXIgZHJhd2luZ2J1ZmZlciBtYXRjaCBpdCBpblxuICAgICAgICAgICAgLy8gZGV2aWNlIHBpeGVscy5cbiAgICAgICAgICAgIGxldCBkaXNwbGF5V2lkdGggPSBNYXRoLmZsb29yKHRoaXMuZ2wuY2FudmFzLmNsaWVudFdpZHRoICogcmVhbFRvQ1NTUGl4ZWxzKTtcbiAgICAgICAgICAgIGxldCBkaXNwbGF5SGVpZ2h0ID0gTWF0aC5mbG9vcih0aGlzLmdsLmNhbnZhcy5jbGllbnRIZWlnaHQgKiByZWFsVG9DU1NQaXhlbHMpO1xuXG4gICAgICAgICAgICAvLyBDaGVjayBpZiB0aGUgY2FudmFzIGlzIG5vdCB0aGUgc2FtZSBzaXplLlxuICAgICAgICAgICAgaWYgKHRoaXMuZ2wuY2FudmFzLndpZHRoICE9PSBkaXNwbGF5V2lkdGggfHxcbiAgICAgICAgICAgICAgICB0aGlzLmdsLmNhbnZhcy5oZWlnaHQgIT09IGRpc3BsYXlIZWlnaHQpIHtcbiAgICAgICAgICAgICAgICAvLyBNYWtlIHRoZSBjYW52YXMgdGhlIHNhbWUgc2l6ZVxuICAgICAgICAgICAgICAgIHRoaXMuZ2wuY2FudmFzLndpZHRoID0gZGlzcGxheVdpZHRoO1xuICAgICAgICAgICAgICAgIHRoaXMuZ2wuY2FudmFzLmhlaWdodCA9IGRpc3BsYXlIZWlnaHQ7XG4gICAgICAgICAgICAgICAgLy8gU2V0IHRoZSB2aWV3cG9ydCB0byBtYXRjaFxuICAgICAgICAgICAgICAgIHRoaXMuZ2wudmlld3BvcnQoMCwgMCwgdGhpcy5nbC5jYW52YXMud2lkdGgsIHRoaXMuZ2wuY2FudmFzLmhlaWdodCk7XG4gICAgICAgICAgICAgICAgLy8gdGhpcy5nbC52aWV3cG9ydCgwLCAwLCB0aGlzLmdsLmRyYXdpbmdCdWZmZXJXaWR0aCwgdGhpcy5nbC5kcmF3aW5nQnVmZmVySGVpZ2h0KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMud2lkdGggPSB0aGlzLmNhbnZhcy5jbGllbnRXaWR0aDtcbiAgICAgICAgICAgIHRoaXMuaGVpZ2h0ID0gdGhpcy5jYW52YXMuY2xpZW50SGVpZ2h0O1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZW5kZXIgKCkge1xuICAgICAgICB0aGlzLnZpc2libGUgPSBpc0NhbnZhc1Zpc2libGUodGhpcy5jYW52YXMpO1xuICAgICAgICBpZiAodGhpcy5mb3JjZVJlbmRlciB8fFxuICAgICAgICAgICAgKHRoaXMuYW5pbWF0ZWQgJiYgdGhpcy52aXNpYmxlICYmICEgdGhpcy5wYXVzZWQpKSB7XG5cbiAgICAgICAgICAgIGxldCBkYXRlID0gbmV3IERhdGUoKTtcbiAgICAgICAgICAgIGxldCBub3cgPSBwZXJmb3JtYW5jZS5ub3coKTtcbiAgICAgICAgICAgIHRoaXMudGltZURlbHRhID0gIChub3cgLSB0aGlzLnRpbWVQcmV2KSAvIDEwMDAuMDtcbiAgICAgICAgICAgIHRoaXMudGltZVByZXYgPSBub3c7XG4gICAgICAgICAgICBpZiAodGhpcy5uRGVsdGEgPiAxKSB7XG4gICAgICAgICAgICAgICAgLy8gc2V0IHRoZSBkZWx0YSB0aW1lIHVuaWZvcm1cbiAgICAgICAgICAgICAgICB0aGlzLnVuaWZvcm0oJzFmJywgJ2Zsb2F0JywgJ3VfZGVsdGEnLCB0aGlzLnRpbWVEZWx0YSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmICh0aGlzLm5UaW1lID4gMSApIHtcbiAgICAgICAgICAgICAgICAvLyBzZXQgdGhlIGVsYXBzZWQgdGltZSB1bmlmb3JtXG4gICAgICAgICAgICAgICAgdGhpcy51bmlmb3JtKCcxZicsICdmbG9hdCcsICd1X3RpbWUnLCAobm93IC0gdGhpcy50aW1lTG9hZCkgLyAxMDAwLjApO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAodGhpcy5uRGF0ZSkge1xuICAgICAgICAgICAgICAgIC8vIFNldCBkYXRlIHVuaWZvcm06IHllYXIvbW9udGgvZGF5L3RpbWVfaW5fc2VjXG4gICAgICAgICAgICAgICAgdGhpcy51bmlmb3JtKCc0ZicsICdmbG9hdCcsICd1X2RhdGUnLCBkYXRlLmdldEZ1bGxZZWFyKCksIGRhdGUuZ2V0TW9udGgoKSwgZGF0ZS5nZXREYXRlKCksIGRhdGUuZ2V0SG91cnMoKSozNjAwICsgZGF0ZS5nZXRNaW51dGVzKCkqNjAgKyBkYXRlLmdldFNlY29uZHMoKSArIGRhdGUuZ2V0TWlsbGlzZWNvbmRzKCkgKiAwLjAwMSApO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyBzZXQgdGhlIHJlc29sdXRpb24gdW5pZm9ybVxuICAgICAgICAgICAgdGhpcy51bmlmb3JtKCcyZicsICd2ZWMyJywgJ3VfcmVzb2x1dGlvbicsIHRoaXMuY2FudmFzLndpZHRoLCB0aGlzLmNhbnZhcy5oZWlnaHQpO1xuXG4gICAgICAgICAgICB0aGlzLnRleHVyZUluZGV4ID0gMDtcbiAgICAgICAgICAgIGZvciAobGV0IHRleCBpbiB0aGlzLnRleHR1cmVzKSB7XG4gICAgICAgICAgICAgICAgdGhpcy51bmlmb3JtVGV4dHVyZSh0ZXgpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyBEcmF3IHRoZSByZWN0YW5nbGUuXG4gICAgICAgICAgICB0aGlzLmdsLmRyYXdBcnJheXModGhpcy5nbC5UUklBTkdMRVMsIDAsIDYpO1xuXG4gICAgICAgICAgICAvLyBUcmlnZ2VyIGV2ZW50XG4gICAgICAgICAgICB0aGlzLnRyaWdnZXIoJ3JlbmRlcicsIHt9KTtcblxuICAgICAgICAgICAgdGhpcy5jaGFuZ2UgPSBmYWxzZTtcbiAgICAgICAgICAgIHRoaXMuZm9yY2VSZW5kZXIgPSBmYWxzZTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHBhdXNlICgpIHtcbiAgICAgICAgdGhpcy5wYXVzZWQgPSB0cnVlO1xuICAgIH1cblxuICAgIHBsYXkgKCkge1xuICAgICAgICB0aGlzLnBhdXNlZCA9IGZhbHNlO1xuICAgIH1cblxuICAgIHZlcnNpb24oKSB7XG4gICAgICAgIHJldHVybiAnMC4wLjI1JztcbiAgICB9XG59XG5cbndpbmRvdy5HbHNsQ2FudmFzID0gR2xzbENhbnZhcztcblxuZnVuY3Rpb24gbG9hZEFsbEdsc2xDYW52YXMoKSB7XG4gICAgdmFyIGxpc3QgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdnbHNsQ2FudmFzJyk7XG4gICAgaWYgKGxpc3QubGVuZ3RoID4gMCkge1xuICAgICAgICB3aW5kb3cuZ2xzbENhbnZhc2VzID0gW107XG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgdmFyIHNhbmRib3ggPSBuZXcgR2xzbENhbnZhcyhsaXN0W2ldKTtcbiAgICAgICAgICAgIGlmIChzYW5kYm94LmlzVmFsaWQpIHtcbiAgICAgICAgICAgICAgICB3aW5kb3cuZ2xzbENhbnZhc2VzLnB1c2goc2FuZGJveCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59XG5cbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdsb2FkJywgZnVuY3Rpb24gKCkge1xuICAgIGxvYWRBbGxHbHNsQ2FudmFzKCk7XG59KTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2dsc2xDYW52YXMvc3JjL0dsc2xDYW52YXMuanNcbi8vIG1vZHVsZSBpZCA9IDRcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiXCJ1c2Ugc3RyaWN0XCI7XG52YXIgd2luZG93ID0gcmVxdWlyZShcImdsb2JhbC93aW5kb3dcIilcbnZhciBpc0Z1bmN0aW9uID0gcmVxdWlyZShcImlzLWZ1bmN0aW9uXCIpXG52YXIgcGFyc2VIZWFkZXJzID0gcmVxdWlyZShcInBhcnNlLWhlYWRlcnNcIilcbnZhciB4dGVuZCA9IHJlcXVpcmUoXCJ4dGVuZFwiKVxuXG5tb2R1bGUuZXhwb3J0cyA9IGNyZWF0ZVhIUlxuY3JlYXRlWEhSLlhNTEh0dHBSZXF1ZXN0ID0gd2luZG93LlhNTEh0dHBSZXF1ZXN0IHx8IG5vb3BcbmNyZWF0ZVhIUi5YRG9tYWluUmVxdWVzdCA9IFwid2l0aENyZWRlbnRpYWxzXCIgaW4gKG5ldyBjcmVhdGVYSFIuWE1MSHR0cFJlcXVlc3QoKSkgPyBjcmVhdGVYSFIuWE1MSHR0cFJlcXVlc3QgOiB3aW5kb3cuWERvbWFpblJlcXVlc3RcblxuZm9yRWFjaEFycmF5KFtcImdldFwiLCBcInB1dFwiLCBcInBvc3RcIiwgXCJwYXRjaFwiLCBcImhlYWRcIiwgXCJkZWxldGVcIl0sIGZ1bmN0aW9uKG1ldGhvZCkge1xuICAgIGNyZWF0ZVhIUlttZXRob2QgPT09IFwiZGVsZXRlXCIgPyBcImRlbFwiIDogbWV0aG9kXSA9IGZ1bmN0aW9uKHVyaSwgb3B0aW9ucywgY2FsbGJhY2spIHtcbiAgICAgICAgb3B0aW9ucyA9IGluaXRQYXJhbXModXJpLCBvcHRpb25zLCBjYWxsYmFjaylcbiAgICAgICAgb3B0aW9ucy5tZXRob2QgPSBtZXRob2QudG9VcHBlckNhc2UoKVxuICAgICAgICByZXR1cm4gX2NyZWF0ZVhIUihvcHRpb25zKVxuICAgIH1cbn0pXG5cbmZ1bmN0aW9uIGZvckVhY2hBcnJheShhcnJheSwgaXRlcmF0b3IpIHtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGFycmF5Lmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGl0ZXJhdG9yKGFycmF5W2ldKVxuICAgIH1cbn1cblxuZnVuY3Rpb24gaXNFbXB0eShvYmope1xuICAgIGZvcih2YXIgaSBpbiBvYmope1xuICAgICAgICBpZihvYmouaGFzT3duUHJvcGVydHkoaSkpIHJldHVybiBmYWxzZVxuICAgIH1cbiAgICByZXR1cm4gdHJ1ZVxufVxuXG5mdW5jdGlvbiBpbml0UGFyYW1zKHVyaSwgb3B0aW9ucywgY2FsbGJhY2spIHtcbiAgICB2YXIgcGFyYW1zID0gdXJpXG5cbiAgICBpZiAoaXNGdW5jdGlvbihvcHRpb25zKSkge1xuICAgICAgICBjYWxsYmFjayA9IG9wdGlvbnNcbiAgICAgICAgaWYgKHR5cGVvZiB1cmkgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgICAgICAgIHBhcmFtcyA9IHt1cmk6dXJpfVxuICAgICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgICAgcGFyYW1zID0geHRlbmQob3B0aW9ucywge3VyaTogdXJpfSlcbiAgICB9XG5cbiAgICBwYXJhbXMuY2FsbGJhY2sgPSBjYWxsYmFja1xuICAgIHJldHVybiBwYXJhbXNcbn1cblxuZnVuY3Rpb24gY3JlYXRlWEhSKHVyaSwgb3B0aW9ucywgY2FsbGJhY2spIHtcbiAgICBvcHRpb25zID0gaW5pdFBhcmFtcyh1cmksIG9wdGlvbnMsIGNhbGxiYWNrKVxuICAgIHJldHVybiBfY3JlYXRlWEhSKG9wdGlvbnMpXG59XG5cbmZ1bmN0aW9uIF9jcmVhdGVYSFIob3B0aW9ucykge1xuICAgIGlmKHR5cGVvZiBvcHRpb25zLmNhbGxiYWNrID09PSBcInVuZGVmaW5lZFwiKXtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiY2FsbGJhY2sgYXJndW1lbnQgbWlzc2luZ1wiKVxuICAgIH1cblxuICAgIHZhciBjYWxsZWQgPSBmYWxzZVxuICAgIHZhciBjYWxsYmFjayA9IGZ1bmN0aW9uIGNiT25jZShlcnIsIHJlc3BvbnNlLCBib2R5KXtcbiAgICAgICAgaWYoIWNhbGxlZCl7XG4gICAgICAgICAgICBjYWxsZWQgPSB0cnVlXG4gICAgICAgICAgICBvcHRpb25zLmNhbGxiYWNrKGVyciwgcmVzcG9uc2UsIGJvZHkpXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiByZWFkeXN0YXRlY2hhbmdlKCkge1xuICAgICAgICBpZiAoeGhyLnJlYWR5U3RhdGUgPT09IDQpIHtcbiAgICAgICAgICAgIHNldFRpbWVvdXQobG9hZEZ1bmMsIDApXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBnZXRCb2R5KCkge1xuICAgICAgICAvLyBDaHJvbWUgd2l0aCByZXF1ZXN0VHlwZT1ibG9iIHRocm93cyBlcnJvcnMgYXJyb3VuZCB3aGVuIGV2ZW4gdGVzdGluZyBhY2Nlc3MgdG8gcmVzcG9uc2VUZXh0XG4gICAgICAgIHZhciBib2R5ID0gdW5kZWZpbmVkXG5cbiAgICAgICAgaWYgKHhoci5yZXNwb25zZSkge1xuICAgICAgICAgICAgYm9keSA9IHhoci5yZXNwb25zZVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgYm9keSA9IHhoci5yZXNwb25zZVRleHQgfHwgZ2V0WG1sKHhocilcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChpc0pzb24pIHtcbiAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgYm9keSA9IEpTT04ucGFyc2UoYm9keSlcbiAgICAgICAgICAgIH0gY2F0Y2ggKGUpIHt9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gYm9keVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGVycm9yRnVuYyhldnQpIHtcbiAgICAgICAgY2xlYXJUaW1lb3V0KHRpbWVvdXRUaW1lcilcbiAgICAgICAgaWYoIShldnQgaW5zdGFuY2VvZiBFcnJvcikpe1xuICAgICAgICAgICAgZXZ0ID0gbmV3IEVycm9yKFwiXCIgKyAoZXZ0IHx8IFwiVW5rbm93biBYTUxIdHRwUmVxdWVzdCBFcnJvclwiKSApXG4gICAgICAgIH1cbiAgICAgICAgZXZ0LnN0YXR1c0NvZGUgPSAwXG4gICAgICAgIHJldHVybiBjYWxsYmFjayhldnQsIGZhaWx1cmVSZXNwb25zZSlcbiAgICB9XG5cbiAgICAvLyB3aWxsIGxvYWQgdGhlIGRhdGEgJiBwcm9jZXNzIHRoZSByZXNwb25zZSBpbiBhIHNwZWNpYWwgcmVzcG9uc2Ugb2JqZWN0XG4gICAgZnVuY3Rpb24gbG9hZEZ1bmMoKSB7XG4gICAgICAgIGlmIChhYm9ydGVkKSByZXR1cm5cbiAgICAgICAgdmFyIHN0YXR1c1xuICAgICAgICBjbGVhclRpbWVvdXQodGltZW91dFRpbWVyKVxuICAgICAgICBpZihvcHRpb25zLnVzZVhEUiAmJiB4aHIuc3RhdHVzPT09dW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAvL0lFOCBDT1JTIEdFVCBzdWNjZXNzZnVsIHJlc3BvbnNlIGRvZXNuJ3QgaGF2ZSBhIHN0YXR1cyBmaWVsZCwgYnV0IGJvZHkgaXMgZmluZVxuICAgICAgICAgICAgc3RhdHVzID0gMjAwXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBzdGF0dXMgPSAoeGhyLnN0YXR1cyA9PT0gMTIyMyA/IDIwNCA6IHhoci5zdGF0dXMpXG4gICAgICAgIH1cbiAgICAgICAgdmFyIHJlc3BvbnNlID0gZmFpbHVyZVJlc3BvbnNlXG4gICAgICAgIHZhciBlcnIgPSBudWxsXG5cbiAgICAgICAgaWYgKHN0YXR1cyAhPT0gMCl7XG4gICAgICAgICAgICByZXNwb25zZSA9IHtcbiAgICAgICAgICAgICAgICBib2R5OiBnZXRCb2R5KCksXG4gICAgICAgICAgICAgICAgc3RhdHVzQ29kZTogc3RhdHVzLFxuICAgICAgICAgICAgICAgIG1ldGhvZDogbWV0aG9kLFxuICAgICAgICAgICAgICAgIGhlYWRlcnM6IHt9LFxuICAgICAgICAgICAgICAgIHVybDogdXJpLFxuICAgICAgICAgICAgICAgIHJhd1JlcXVlc3Q6IHhoclxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYoeGhyLmdldEFsbFJlc3BvbnNlSGVhZGVycyl7IC8vcmVtZW1iZXIgeGhyIGNhbiBpbiBmYWN0IGJlIFhEUiBmb3IgQ09SUyBpbiBJRVxuICAgICAgICAgICAgICAgIHJlc3BvbnNlLmhlYWRlcnMgPSBwYXJzZUhlYWRlcnMoeGhyLmdldEFsbFJlc3BvbnNlSGVhZGVycygpKVxuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgZXJyID0gbmV3IEVycm9yKFwiSW50ZXJuYWwgWE1MSHR0cFJlcXVlc3QgRXJyb3JcIilcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gY2FsbGJhY2soZXJyLCByZXNwb25zZSwgcmVzcG9uc2UuYm9keSlcbiAgICB9XG5cbiAgICB2YXIgeGhyID0gb3B0aW9ucy54aHIgfHwgbnVsbFxuXG4gICAgaWYgKCF4aHIpIHtcbiAgICAgICAgaWYgKG9wdGlvbnMuY29ycyB8fCBvcHRpb25zLnVzZVhEUikge1xuICAgICAgICAgICAgeGhyID0gbmV3IGNyZWF0ZVhIUi5YRG9tYWluUmVxdWVzdCgpXG4gICAgICAgIH1lbHNle1xuICAgICAgICAgICAgeGhyID0gbmV3IGNyZWF0ZVhIUi5YTUxIdHRwUmVxdWVzdCgpXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICB2YXIga2V5XG4gICAgdmFyIGFib3J0ZWRcbiAgICB2YXIgdXJpID0geGhyLnVybCA9IG9wdGlvbnMudXJpIHx8IG9wdGlvbnMudXJsXG4gICAgdmFyIG1ldGhvZCA9IHhoci5tZXRob2QgPSBvcHRpb25zLm1ldGhvZCB8fCBcIkdFVFwiXG4gICAgdmFyIGJvZHkgPSBvcHRpb25zLmJvZHkgfHwgb3B0aW9ucy5kYXRhXG4gICAgdmFyIGhlYWRlcnMgPSB4aHIuaGVhZGVycyA9IG9wdGlvbnMuaGVhZGVycyB8fCB7fVxuICAgIHZhciBzeW5jID0gISFvcHRpb25zLnN5bmNcbiAgICB2YXIgaXNKc29uID0gZmFsc2VcbiAgICB2YXIgdGltZW91dFRpbWVyXG4gICAgdmFyIGZhaWx1cmVSZXNwb25zZSA9IHtcbiAgICAgICAgYm9keTogdW5kZWZpbmVkLFxuICAgICAgICBoZWFkZXJzOiB7fSxcbiAgICAgICAgc3RhdHVzQ29kZTogMCxcbiAgICAgICAgbWV0aG9kOiBtZXRob2QsXG4gICAgICAgIHVybDogdXJpLFxuICAgICAgICByYXdSZXF1ZXN0OiB4aHJcbiAgICB9XG5cbiAgICBpZiAoXCJqc29uXCIgaW4gb3B0aW9ucyAmJiBvcHRpb25zLmpzb24gIT09IGZhbHNlKSB7XG4gICAgICAgIGlzSnNvbiA9IHRydWVcbiAgICAgICAgaGVhZGVyc1tcImFjY2VwdFwiXSB8fCBoZWFkZXJzW1wiQWNjZXB0XCJdIHx8IChoZWFkZXJzW1wiQWNjZXB0XCJdID0gXCJhcHBsaWNhdGlvbi9qc29uXCIpIC8vRG9uJ3Qgb3ZlcnJpZGUgZXhpc3RpbmcgYWNjZXB0IGhlYWRlciBkZWNsYXJlZCBieSB1c2VyXG4gICAgICAgIGlmIChtZXRob2QgIT09IFwiR0VUXCIgJiYgbWV0aG9kICE9PSBcIkhFQURcIikge1xuICAgICAgICAgICAgaGVhZGVyc1tcImNvbnRlbnQtdHlwZVwiXSB8fCBoZWFkZXJzW1wiQ29udGVudC1UeXBlXCJdIHx8IChoZWFkZXJzW1wiQ29udGVudC1UeXBlXCJdID0gXCJhcHBsaWNhdGlvbi9qc29uXCIpIC8vRG9uJ3Qgb3ZlcnJpZGUgZXhpc3RpbmcgYWNjZXB0IGhlYWRlciBkZWNsYXJlZCBieSB1c2VyXG4gICAgICAgICAgICBib2R5ID0gSlNPTi5zdHJpbmdpZnkob3B0aW9ucy5qc29uID09PSB0cnVlID8gYm9keSA6IG9wdGlvbnMuanNvbilcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHhoci5vbnJlYWR5c3RhdGVjaGFuZ2UgPSByZWFkeXN0YXRlY2hhbmdlXG4gICAgeGhyLm9ubG9hZCA9IGxvYWRGdW5jXG4gICAgeGhyLm9uZXJyb3IgPSBlcnJvckZ1bmNcbiAgICAvLyBJRTkgbXVzdCBoYXZlIG9ucHJvZ3Jlc3MgYmUgc2V0IHRvIGEgdW5pcXVlIGZ1bmN0aW9uLlxuICAgIHhoci5vbnByb2dyZXNzID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAvLyBJRSBtdXN0IGRpZVxuICAgIH1cbiAgICB4aHIub25hYm9ydCA9IGZ1bmN0aW9uKCl7XG4gICAgICAgIGFib3J0ZWQgPSB0cnVlO1xuICAgIH1cbiAgICB4aHIub250aW1lb3V0ID0gZXJyb3JGdW5jXG4gICAgeGhyLm9wZW4obWV0aG9kLCB1cmksICFzeW5jLCBvcHRpb25zLnVzZXJuYW1lLCBvcHRpb25zLnBhc3N3b3JkKVxuICAgIC8vaGFzIHRvIGJlIGFmdGVyIG9wZW5cbiAgICBpZighc3luYykge1xuICAgICAgICB4aHIud2l0aENyZWRlbnRpYWxzID0gISFvcHRpb25zLndpdGhDcmVkZW50aWFsc1xuICAgIH1cbiAgICAvLyBDYW5ub3Qgc2V0IHRpbWVvdXQgd2l0aCBzeW5jIHJlcXVlc3RcbiAgICAvLyBub3Qgc2V0dGluZyB0aW1lb3V0IG9uIHRoZSB4aHIgb2JqZWN0LCBiZWNhdXNlIG9mIG9sZCB3ZWJraXRzIGV0Yy4gbm90IGhhbmRsaW5nIHRoYXQgY29ycmVjdGx5XG4gICAgLy8gYm90aCBucG0ncyByZXF1ZXN0IGFuZCBqcXVlcnkgMS54IHVzZSB0aGlzIGtpbmQgb2YgdGltZW91dCwgc28gdGhpcyBpcyBiZWluZyBjb25zaXN0ZW50XG4gICAgaWYgKCFzeW5jICYmIG9wdGlvbnMudGltZW91dCA+IDAgKSB7XG4gICAgICAgIHRpbWVvdXRUaW1lciA9IHNldFRpbWVvdXQoZnVuY3Rpb24oKXtcbiAgICAgICAgICAgIGlmIChhYm9ydGVkKSByZXR1cm5cbiAgICAgICAgICAgIGFib3J0ZWQgPSB0cnVlLy9JRTkgbWF5IHN0aWxsIGNhbGwgcmVhZHlzdGF0ZWNoYW5nZVxuICAgICAgICAgICAgeGhyLmFib3J0KFwidGltZW91dFwiKVxuICAgICAgICAgICAgdmFyIGUgPSBuZXcgRXJyb3IoXCJYTUxIdHRwUmVxdWVzdCB0aW1lb3V0XCIpXG4gICAgICAgICAgICBlLmNvZGUgPSBcIkVUSU1FRE9VVFwiXG4gICAgICAgICAgICBlcnJvckZ1bmMoZSlcbiAgICAgICAgfSwgb3B0aW9ucy50aW1lb3V0IClcbiAgICB9XG5cbiAgICBpZiAoeGhyLnNldFJlcXVlc3RIZWFkZXIpIHtcbiAgICAgICAgZm9yKGtleSBpbiBoZWFkZXJzKXtcbiAgICAgICAgICAgIGlmKGhlYWRlcnMuaGFzT3duUHJvcGVydHkoa2V5KSl7XG4gICAgICAgICAgICAgICAgeGhyLnNldFJlcXVlc3RIZWFkZXIoa2V5LCBoZWFkZXJzW2tleV0pXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9IGVsc2UgaWYgKG9wdGlvbnMuaGVhZGVycyAmJiAhaXNFbXB0eShvcHRpb25zLmhlYWRlcnMpKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcIkhlYWRlcnMgY2Fubm90IGJlIHNldCBvbiBhbiBYRG9tYWluUmVxdWVzdCBvYmplY3RcIilcbiAgICB9XG5cbiAgICBpZiAoXCJyZXNwb25zZVR5cGVcIiBpbiBvcHRpb25zKSB7XG4gICAgICAgIHhoci5yZXNwb25zZVR5cGUgPSBvcHRpb25zLnJlc3BvbnNlVHlwZVxuICAgIH1cblxuICAgIGlmIChcImJlZm9yZVNlbmRcIiBpbiBvcHRpb25zICYmXG4gICAgICAgIHR5cGVvZiBvcHRpb25zLmJlZm9yZVNlbmQgPT09IFwiZnVuY3Rpb25cIlxuICAgICkge1xuICAgICAgICBvcHRpb25zLmJlZm9yZVNlbmQoeGhyKVxuICAgIH1cblxuICAgIC8vIE1pY3Jvc29mdCBFZGdlIGJyb3dzZXIgc2VuZHMgXCJ1bmRlZmluZWRcIiB3aGVuIHNlbmQgaXMgY2FsbGVkIHdpdGggdW5kZWZpbmVkIHZhbHVlLlxuICAgIC8vIFhNTEh0dHBSZXF1ZXN0IHNwZWMgc2F5cyB0byBwYXNzIG51bGwgYXMgYm9keSB0byBpbmRpY2F0ZSBubyBib2R5XG4gICAgLy8gU2VlIGh0dHBzOi8vZ2l0aHViLmNvbS9uYXVndHVyL3hoci9pc3N1ZXMvMTAwLlxuICAgIHhoci5zZW5kKGJvZHkgfHwgbnVsbClcblxuICAgIHJldHVybiB4aHJcblxuXG59XG5cbmZ1bmN0aW9uIGdldFhtbCh4aHIpIHtcbiAgICBpZiAoeGhyLnJlc3BvbnNlVHlwZSA9PT0gXCJkb2N1bWVudFwiKSB7XG4gICAgICAgIHJldHVybiB4aHIucmVzcG9uc2VYTUxcbiAgICB9XG4gICAgdmFyIGZpcmVmb3hCdWdUYWtlbkVmZmVjdCA9IHhoci5yZXNwb25zZVhNTCAmJiB4aHIucmVzcG9uc2VYTUwuZG9jdW1lbnRFbGVtZW50Lm5vZGVOYW1lID09PSBcInBhcnNlcmVycm9yXCJcbiAgICBpZiAoeGhyLnJlc3BvbnNlVHlwZSA9PT0gXCJcIiAmJiAhZmlyZWZveEJ1Z1Rha2VuRWZmZWN0KSB7XG4gICAgICAgIHJldHVybiB4aHIucmVzcG9uc2VYTUxcbiAgICB9XG5cbiAgICByZXR1cm4gbnVsbFxufVxuXG5mdW5jdGlvbiBub29wKCkge31cblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL3hoci9pbmRleC5qc1xuLy8gbW9kdWxlIGlkID0gNVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgd2luO1xuXG5pZiAodHlwZW9mIHdpbmRvdyAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHdpbiA9IHdpbmRvdztcbn0gZWxzZSBpZiAodHlwZW9mIGdsb2JhbCAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHdpbiA9IGdsb2JhbDtcbn0gZWxzZSBpZiAodHlwZW9mIHNlbGYgIT09IFwidW5kZWZpbmVkXCIpe1xuICAgIHdpbiA9IHNlbGY7XG59IGVsc2Uge1xuICAgIHdpbiA9IHt9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHdpbjtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2dsb2JhbC93aW5kb3cuanNcbi8vIG1vZHVsZSBpZCA9IDZcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIGc7XHJcblxyXG4vLyBUaGlzIHdvcmtzIGluIG5vbi1zdHJpY3QgbW9kZVxyXG5nID0gKGZ1bmN0aW9uKCkge1xyXG5cdHJldHVybiB0aGlzO1xyXG59KSgpO1xyXG5cclxudHJ5IHtcclxuXHQvLyBUaGlzIHdvcmtzIGlmIGV2YWwgaXMgYWxsb3dlZCAoc2VlIENTUClcclxuXHRnID0gZyB8fCBGdW5jdGlvbihcInJldHVybiB0aGlzXCIpKCkgfHwgKDEsZXZhbCkoXCJ0aGlzXCIpO1xyXG59IGNhdGNoKGUpIHtcclxuXHQvLyBUaGlzIHdvcmtzIGlmIHRoZSB3aW5kb3cgcmVmZXJlbmNlIGlzIGF2YWlsYWJsZVxyXG5cdGlmKHR5cGVvZiB3aW5kb3cgPT09IFwib2JqZWN0XCIpXHJcblx0XHRnID0gd2luZG93O1xyXG59XHJcblxyXG4vLyBnIGNhbiBzdGlsbCBiZSB1bmRlZmluZWQsIGJ1dCBub3RoaW5nIHRvIGRvIGFib3V0IGl0Li4uXHJcbi8vIFdlIHJldHVybiB1bmRlZmluZWQsIGluc3RlYWQgb2Ygbm90aGluZyBoZXJlLCBzbyBpdCdzXHJcbi8vIGVhc2llciB0byBoYW5kbGUgdGhpcyBjYXNlLiBpZighZ2xvYmFsKSB7IC4uLn1cclxuXHJcbm1vZHVsZS5leHBvcnRzID0gZztcclxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gKHdlYnBhY2spL2J1aWxkaW4vZ2xvYmFsLmpzXG4vLyBtb2R1bGUgaWQgPSA3XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciB0cmltID0gcmVxdWlyZSgndHJpbScpXG4gICwgZm9yRWFjaCA9IHJlcXVpcmUoJ2Zvci1lYWNoJylcbiAgLCBpc0FycmF5ID0gZnVuY3Rpb24oYXJnKSB7XG4gICAgICByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKGFyZykgPT09ICdbb2JqZWN0IEFycmF5XSc7XG4gICAgfVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChoZWFkZXJzKSB7XG4gIGlmICghaGVhZGVycylcbiAgICByZXR1cm4ge31cblxuICB2YXIgcmVzdWx0ID0ge31cblxuICBmb3JFYWNoKFxuICAgICAgdHJpbShoZWFkZXJzKS5zcGxpdCgnXFxuJylcbiAgICAsIGZ1bmN0aW9uIChyb3cpIHtcbiAgICAgICAgdmFyIGluZGV4ID0gcm93LmluZGV4T2YoJzonKVxuICAgICAgICAgICwga2V5ID0gdHJpbShyb3cuc2xpY2UoMCwgaW5kZXgpKS50b0xvd2VyQ2FzZSgpXG4gICAgICAgICAgLCB2YWx1ZSA9IHRyaW0ocm93LnNsaWNlKGluZGV4ICsgMSkpXG5cbiAgICAgICAgaWYgKHR5cGVvZihyZXN1bHRba2V5XSkgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgcmVzdWx0W2tleV0gPSB2YWx1ZVxuICAgICAgICB9IGVsc2UgaWYgKGlzQXJyYXkocmVzdWx0W2tleV0pKSB7XG4gICAgICAgICAgcmVzdWx0W2tleV0ucHVzaCh2YWx1ZSlcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXN1bHRba2V5XSA9IFsgcmVzdWx0W2tleV0sIHZhbHVlIF1cbiAgICAgICAgfVxuICAgICAgfVxuICApXG5cbiAgcmV0dXJuIHJlc3VsdFxufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL3BhcnNlLWhlYWRlcnMvcGFyc2UtaGVhZGVycy5qc1xuLy8gbW9kdWxlIGlkID0gOFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJcbmV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHRyaW07XG5cbmZ1bmN0aW9uIHRyaW0oc3RyKXtcbiAgcmV0dXJuIHN0ci5yZXBsYWNlKC9eXFxzKnxcXHMqJC9nLCAnJyk7XG59XG5cbmV4cG9ydHMubGVmdCA9IGZ1bmN0aW9uKHN0cil7XG4gIHJldHVybiBzdHIucmVwbGFjZSgvXlxccyovLCAnJyk7XG59O1xuXG5leHBvcnRzLnJpZ2h0ID0gZnVuY3Rpb24oc3RyKXtcbiAgcmV0dXJuIHN0ci5yZXBsYWNlKC9cXHMqJC8sICcnKTtcbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy90cmltL2luZGV4LmpzXG4vLyBtb2R1bGUgaWQgPSA5XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciBpc0Z1bmN0aW9uID0gcmVxdWlyZSgnaXMtZnVuY3Rpb24nKVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZvckVhY2hcblxudmFyIHRvU3RyaW5nID0gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZ1xudmFyIGhhc093blByb3BlcnR5ID0gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eVxuXG5mdW5jdGlvbiBmb3JFYWNoKGxpc3QsIGl0ZXJhdG9yLCBjb250ZXh0KSB7XG4gICAgaWYgKCFpc0Z1bmN0aW9uKGl0ZXJhdG9yKSkge1xuICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdpdGVyYXRvciBtdXN0IGJlIGEgZnVuY3Rpb24nKVxuICAgIH1cblxuICAgIGlmIChhcmd1bWVudHMubGVuZ3RoIDwgMykge1xuICAgICAgICBjb250ZXh0ID0gdGhpc1xuICAgIH1cbiAgICBcbiAgICBpZiAodG9TdHJpbmcuY2FsbChsaXN0KSA9PT0gJ1tvYmplY3QgQXJyYXldJylcbiAgICAgICAgZm9yRWFjaEFycmF5KGxpc3QsIGl0ZXJhdG9yLCBjb250ZXh0KVxuICAgIGVsc2UgaWYgKHR5cGVvZiBsaXN0ID09PSAnc3RyaW5nJylcbiAgICAgICAgZm9yRWFjaFN0cmluZyhsaXN0LCBpdGVyYXRvciwgY29udGV4dClcbiAgICBlbHNlXG4gICAgICAgIGZvckVhY2hPYmplY3QobGlzdCwgaXRlcmF0b3IsIGNvbnRleHQpXG59XG5cbmZ1bmN0aW9uIGZvckVhY2hBcnJheShhcnJheSwgaXRlcmF0b3IsIGNvbnRleHQpIHtcbiAgICBmb3IgKHZhciBpID0gMCwgbGVuID0gYXJyYXkubGVuZ3RoOyBpIDwgbGVuOyBpKyspIHtcbiAgICAgICAgaWYgKGhhc093blByb3BlcnR5LmNhbGwoYXJyYXksIGkpKSB7XG4gICAgICAgICAgICBpdGVyYXRvci5jYWxsKGNvbnRleHQsIGFycmF5W2ldLCBpLCBhcnJheSlcbiAgICAgICAgfVxuICAgIH1cbn1cblxuZnVuY3Rpb24gZm9yRWFjaFN0cmluZyhzdHJpbmcsIGl0ZXJhdG9yLCBjb250ZXh0KSB7XG4gICAgZm9yICh2YXIgaSA9IDAsIGxlbiA9IHN0cmluZy5sZW5ndGg7IGkgPCBsZW47IGkrKykge1xuICAgICAgICAvLyBubyBzdWNoIHRoaW5nIGFzIGEgc3BhcnNlIHN0cmluZy5cbiAgICAgICAgaXRlcmF0b3IuY2FsbChjb250ZXh0LCBzdHJpbmcuY2hhckF0KGkpLCBpLCBzdHJpbmcpXG4gICAgfVxufVxuXG5mdW5jdGlvbiBmb3JFYWNoT2JqZWN0KG9iamVjdCwgaXRlcmF0b3IsIGNvbnRleHQpIHtcbiAgICBmb3IgKHZhciBrIGluIG9iamVjdCkge1xuICAgICAgICBpZiAoaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIGspKSB7XG4gICAgICAgICAgICBpdGVyYXRvci5jYWxsKGNvbnRleHQsIG9iamVjdFtrXSwgaywgb2JqZWN0KVxuICAgICAgICB9XG4gICAgfVxufVxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvZm9yLWVhY2gvaW5kZXguanNcbi8vIG1vZHVsZSBpZCA9IDEwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gZXh0ZW5kXG5cbnZhciBoYXNPd25Qcm9wZXJ0eSA9IE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHk7XG5cbmZ1bmN0aW9uIGV4dGVuZCgpIHtcbiAgICB2YXIgdGFyZ2V0ID0ge31cblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV1cblxuICAgICAgICBmb3IgKHZhciBrZXkgaW4gc291cmNlKSB7XG4gICAgICAgICAgICBpZiAoaGFzT3duUHJvcGVydHkuY2FsbChzb3VyY2UsIGtleSkpIHtcbiAgICAgICAgICAgICAgICB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gdGFyZ2V0XG59XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy94dGVuZC9pbW11dGFibGUuanNcbi8vIG1vZHVsZSBpZCA9IDExXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImxldCBsYXN0RXJyb3IgPSAnJztcblxuLyoqXG4gKiBDcmVhdGVzIHRoZSBIVExNIGZvciBhIGZhaWx1cmUgbWVzc2FnZVxuICogQHBhcmFtIHtzdHJpbmd9IGNhbnZhc0NvbnRhaW5lcklkIGlkIG9mIGNvbnRhaW5lciBvZiB0aFxuICogICAgICAgIGNhbnZhcy5cbiAqIEByZXR1cm4ge3N0cmluZ30gVGhlIGh0bWwuXG4gKi9cbmZ1bmN0aW9uIG1ha2VGYWlsSFRNTChtc2cpIHtcbiAgICByZXR1cm4gYFxuPHRhYmxlIHN0eWxlPVwiYmFja2dyb3VuZC1jb2xvcjogIzhDRTsgd2lkdGg6IDEwMCU7IGhlaWdodDogMTAwJTtcIj48dHI+XG48dGQgYWxpZ249XCJjZW50ZXJcIj5cbjxkaXYgc3R5bGU9XCJkaXNwbGF5OiB0YWJsZS1jZWxsOyB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1wiPlxuPGRpdiBzdHlsZT1cIlwiPmAgKyBtc2cgKyBgPC9kaXY+XG48L2Rpdj5cbjwvdGQ+PC90cj48L3RhYmxlPlxuYDtcbn1cblxuLyoqXG4gKiBNZXNhc2dlIGZvciBnZXR0aW5nIGEgd2ViZ2wgYnJvd3NlclxuICogQHR5cGUge3N0cmluZ31cbiAqL1xubGV0IEdFVF9BX1dFQkdMX0JST1dTRVIgPSBgXG5cdFRoaXMgcGFnZSByZXF1aXJlcyBhIGJyb3dzZXIgdGhhdCBzdXBwb3J0cyBXZWJHTC48YnIvPlxuXHQ8YSBocmVmPVwiaHR0cDovL2dldC53ZWJnbC5vcmdcIj5DbGljayBoZXJlIHRvIHVwZ3JhZGUgeW91ciBicm93c2VyLjwvYT5cbmA7XG5cbi8qKlxuICogTWVzYXNnZSBmb3IgbmVlZCBiZXR0ZXIgaGFyZHdhcmVcbiAqIEB0eXBlIHtzdHJpbmd9XG4gKi9cbmxldCBPVEhFUl9QUk9CTEVNID0gYFxuXHRJdCBkb2VzIG5vdCBhcHBlYXIgeW91ciBjb21wdXRlciBjYW4gc3VwcG9ydCBXZWJHTC48YnIvPlxuXHQ8YSBocmVmPVwiaHR0cDovL2dldC53ZWJnbC5vcmcvdHJvdWJsZXNob290aW5nL1wiPkNsaWNrIGhlcmUgZm9yIG1vcmUgaW5mb3JtYXRpb24uPC9hPlxuYDtcblxuLyoqXG4gKiBDcmVhdGVzIGEgd2ViZ2wgY29udGV4dC4gSWYgY3JlYXRpb24gZmFpbHMgaXQgd2lsbFxuICogY2hhbmdlIHRoZSBjb250ZW50cyBvZiB0aGUgY29udGFpbmVyIG9mIHRoZSA8Y2FudmFzPlxuICogdGFnIHRvIGFuIGVycm9yIG1lc3NhZ2Ugd2l0aCB0aGUgY29ycmVjdCBsaW5rcyBmb3IgV2ViR0wuXG4gKiBAcGFyYW0ge0VsZW1lbnR9IGNhbnZhcy4gVGhlIGNhbnZhcyBlbGVtZW50IHRvIGNyZWF0ZSBhXG4gKiAgICAgY29udGV4dCBmcm9tLlxuICogQHBhcmFtIHtXZWJHTENvbnRleHRDcmVhdGlvbkF0dGlyYnV0ZXN9IG9wdEF0dHJpYnMgQW55XG4gKiAgICAgY3JlYXRpb24gYXR0cmlidXRlcyB5b3Ugd2FudCB0byBwYXNzIGluLlxuICogQHJldHVybiB7V2ViR0xSZW5kZXJpbmdDb250ZXh0fSBUaGUgY3JlYXRlZCBjb250ZXh0LlxuICovXG5leHBvcnQgZnVuY3Rpb24gc2V0dXBXZWJHTCAoY2FudmFzLCBvcHRBdHRyaWJzKSB7XG4gICAgZnVuY3Rpb24gc2hvd0xpbmsoc3RyKSB7XG4gICAgICAgIGxldCBjb250YWluZXIgPSBjYW52YXMucGFyZW50Tm9kZTtcbiAgICAgICAgaWYgKGNvbnRhaW5lcikge1xuICAgICAgICAgICAgY29udGFpbmVyLmlubmVySFRNTCA9IG1ha2VGYWlsSFRNTChzdHIpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgaWYgKCF3aW5kb3cuV2ViR0xSZW5kZXJpbmdDb250ZXh0KSB7XG4gICAgICAgIHNob3dMaW5rKEdFVF9BX1dFQkdMX0JST1dTRVIpO1xuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICBsZXQgY29udGV4dCA9IGNyZWF0ZTNEQ29udGV4dChjYW52YXMsIG9wdEF0dHJpYnMpO1xuICAgIGlmICghY29udGV4dCkge1xuICAgICAgICBzaG93TGluayhPVEhFUl9QUk9CTEVNKTtcbiAgICB9XG4gICAgY29udGV4dC5nZXRFeHRlbnNpb24oJ09FU19zdGFuZGFyZF9kZXJpdmF0aXZlcycpO1xuICAgIHJldHVybiBjb250ZXh0O1xufVxuXG4vKipcbiAqIENyZWF0ZXMgYSB3ZWJnbCBjb250ZXh0LlxuICogQHBhcmFtIHshQ2FudmFzfSBjYW52YXMgVGhlIGNhbnZhcyB0YWcgdG8gZ2V0IGNvbnRleHRcbiAqICAgICBmcm9tLiBJZiBvbmUgaXMgbm90IHBhc3NlZCBpbiBvbmUgd2lsbCBiZSBjcmVhdGVkLlxuICogQHJldHVybiB7IVdlYkdMQ29udGV4dH0gVGhlIGNyZWF0ZWQgY29udGV4dC5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZTNEQ29udGV4dChjYW52YXMsIG9wdEF0dHJpYnMpIHtcbiAgICBsZXQgbmFtZXMgPSBbJ3dlYmdsJywgJ2V4cGVyaW1lbnRhbC13ZWJnbCddO1xuICAgIGxldCBjb250ZXh0ID0gbnVsbDtcbiAgICBmb3IgKHZhciBpaSA9IDA7IGlpIDwgbmFtZXMubGVuZ3RoOyArK2lpKSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBjb250ZXh0ID0gY2FudmFzLmdldENvbnRleHQobmFtZXNbaWldLCBvcHRBdHRyaWJzKTtcbiAgICAgICAgfSBjYXRjaChlKSB7XG4gICAgICAgICAgICBpZiAoY29udGV4dCkge1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiBjb250ZXh0O1xufVxuXG4vKlxuICpcdENyZWF0ZSBhIFZlcnRleCBvZiBhIHNwZWNpZmljIHR5cGUgKGdsLlZFUlRFWF9TSEFERVIvKVxuICovXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlU2hhZGVyKG1haW4sIHNvdXJjZSwgdHlwZSkge1xuICAgIGxldCBnbCA9IG1haW4uZ2w7XG5cbiAgICBsZXQgc2hhZGVyID0gZ2wuY3JlYXRlU2hhZGVyKHR5cGUpO1xuICAgIGdsLnNoYWRlclNvdXJjZShzaGFkZXIsIHNvdXJjZSk7XG4gICAgZ2wuY29tcGlsZVNoYWRlcihzaGFkZXIpO1xuXG4gICAgbGV0IGNvbXBpbGVkID0gZ2wuZ2V0U2hhZGVyUGFyYW1ldGVyKHNoYWRlciwgZ2wuQ09NUElMRV9TVEFUVVMpO1xuXG4gICAgaWYgKCFjb21waWxlZCkge1xuICAgICAgICAvLyBTb21ldGhpbmcgd2VudCB3cm9uZyBkdXJpbmcgY29tcGlsYXRpb247IGdldCB0aGUgZXJyb3JcbiAgICAgICAgbGFzdEVycm9yID0gZ2wuZ2V0U2hhZGVySW5mb0xvZyhzaGFkZXIpO1xuICAgICAgICBjb25zb2xlLmVycm9yKCcqKiogRXJyb3IgY29tcGlsaW5nIHNoYWRlciAnICsgc2hhZGVyICsgJzonICsgbGFzdEVycm9yKTtcbiAgICAgICAgbWFpbi50cmlnZ2VyKCdlcnJvcicsIHsgc2hhZGVyOiBzaGFkZXIsIHNvdXJjZTogc291cmNlLCB0eXBlOiB0eXBlLCBlcnJvcjogbGFzdEVycm9yIH0pO1xuICAgICAgICBnbC5kZWxldGVTaGFkZXIoc2hhZGVyKTtcbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG4gICAgcmV0dXJuIHNoYWRlcjtcbn1cblxuLyoqXG4gKiBMb2FkcyBhIHNoYWRlci5cbiAqIEBwYXJhbSB7IVdlYkdMQ29udGV4dH0gZ2wgVGhlIFdlYkdMQ29udGV4dCB0byB1c2UuXG4gKiBAcGFyYW0ge3N0cmluZ30gc2hhZGVyU291cmNlIFRoZSBzaGFkZXIgc291cmNlLlxuICogQHBhcmFtIHtudW1iZXJ9IHNoYWRlclR5cGUgVGhlIHR5cGUgb2Ygc2hhZGVyLlxuICogQHBhcmFtIHtmdW5jdGlvbihzdHJpbmcpOiB2b2lkKSBvcHRfZXJyb3JDYWxsYmFjayBjYWxsYmFjayBmb3IgZXJyb3JzLlxuICogQHJldHVybiB7IVdlYkdMU2hhZGVyfSBUaGUgY3JlYXRlZCBzaGFkZXIuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVQcm9ncmFtKG1haW4sIHNoYWRlcnMsIG9wdEF0dHJpYnMsIG9wdExvY2F0aW9ucykge1xuICAgIGxldCBnbCA9IG1haW4uZ2w7XG5cbiAgICBsZXQgcHJvZ3JhbSA9IGdsLmNyZWF0ZVByb2dyYW0oKTtcbiAgICBmb3IgKGxldCBpaSA9IDA7IGlpIDwgc2hhZGVycy5sZW5ndGg7ICsraWkpIHtcbiAgICAgICAgZ2wuYXR0YWNoU2hhZGVyKHByb2dyYW0sIHNoYWRlcnNbaWldKTtcbiAgICB9XG4gICAgaWYgKG9wdEF0dHJpYnMpIHtcbiAgICAgICAgZm9yIChsZXQgaWkgPSAwOyBpaSA8IG9wdEF0dHJpYnMubGVuZ3RoOyArK2lpKSB7XG4gICAgICAgICAgICBnbC5iaW5kQXR0cmliTG9jYXRpb24oXG4gICAgICAgICAgICBwcm9ncmFtLFxuICAgICAgICAgICAgb3B0TG9jYXRpb25zID8gb3B0TG9jYXRpb25zW2lpXSA6IGlpLFxuICAgICAgICAgICAgb3B0QXR0cmlic1tpaV0pO1xuICAgICAgICB9XG4gICAgfVxuICAgIGdsLmxpbmtQcm9ncmFtKHByb2dyYW0pO1xuXG4gICAgLy8gQ2hlY2sgdGhlIGxpbmsgc3RhdHVzXG4gICAgbGV0IGxpbmtlZCA9IGdsLmdldFByb2dyYW1QYXJhbWV0ZXIocHJvZ3JhbSwgZ2wuTElOS19TVEFUVVMpO1xuICAgIGlmICghbGlua2VkKSB7XG4gICAgICAgIC8vIHNvbWV0aGluZyB3ZW50IHdyb25nIHdpdGggdGhlIGxpbmtcbiAgICAgICAgbGFzdEVycm9yID0gZ2wuZ2V0UHJvZ3JhbUluZm9Mb2cocHJvZ3JhbSk7XG4gICAgICAgIGNvbnNvbGUubG9nKCdFcnJvciBpbiBwcm9ncmFtIGxpbmtpbmc6JyArIGxhc3RFcnJvcik7XG4gICAgICAgIGdsLmRlbGV0ZVByb2dyYW0ocHJvZ3JhbSk7XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgICByZXR1cm4gcHJvZ3JhbTtcbn1cblxuLy8gQnkgQnJldHQgQ2FtYmVyIG9uXG4vLyBodHRwczovL2dpdGh1Yi5jb20vdGFuZ3JhbXMvdGFuZ3JhbS9ibG9iL21hc3Rlci9zcmMvZ2wvZ2xzbC5qc1xuZXhwb3J0IGZ1bmN0aW9uIHBhcnNlVW5pZm9ybXModW5pZm9ybXMsIHByZWZpeCA9IG51bGwpIHtcbiAgICBsZXQgcGFyc2VkID0gW107XG5cbiAgICBmb3IgKGxldCBuYW1lIGluIHVuaWZvcm1zKSB7XG4gICAgICAgIGxldCB1bmlmb3JtID0gdW5pZm9ybXNbbmFtZV07XG4gICAgICAgIGxldCB1O1xuXG4gICAgICAgIGlmIChwcmVmaXgpIHtcbiAgICAgICAgICAgIG5hbWUgPSBwcmVmaXggKyAnLicgKyBuYW1lO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gU2luZ2xlIGZsb2F0XG4gICAgICAgIGlmICh0eXBlb2YgdW5pZm9ybSA9PT0gJ251bWJlcicpIHtcbiAgICAgICAgICAgIHBhcnNlZC5wdXNoKHtcbiAgICAgICAgICAgICAgICB0eXBlOiAnZmxvYXQnLFxuICAgICAgICAgICAgICAgIG1ldGhvZDogJzFmJyxcbiAgICAgICAgICAgICAgICBuYW1lLFxuICAgICAgICAgICAgICAgIHZhbHVlOiB1bmlmb3JtXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICAvLyBBcnJheTogdmVjdG9yLCBhcnJheSBvZiBmbG9hdHMsIGFycmF5IG9mIHRleHR1cmVzLCBvciBhcnJheSBvZiBzdHJ1Y3RzXG4gICAgICAgIGVsc2UgaWYgKEFycmF5LmlzQXJyYXkodW5pZm9ybSkpIHtcbiAgICAgICAgICAgIC8vIE51bWVyaWMgdmFsdWVzXG4gICAgICAgICAgICBpZiAodHlwZW9mIHVuaWZvcm1bMF0gPT09ICdudW1iZXInKSB7XG4gICAgICAgICAgICAgICAgLy8gZmxvYXQgdmVjdG9ycyAodmVjMiwgdmVjMywgdmVjNClcbiAgICAgICAgICAgICAgICBpZiAodW5pZm9ybS5sZW5ndGggPT09IDEpIHtcbiAgICAgICAgICAgICAgICAgICAgcGFyc2VkLnB1c2goe1xuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogJ2Zsb2F0JyxcbiAgICAgICAgICAgICAgICAgICAgICAgIG1ldGhvZDogJzFmJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWUsXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogdW5pZm9ybVxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLy8gZmxvYXQgdmVjdG9ycyAodmVjMiwgdmVjMywgdmVjNClcbiAgICAgICAgICAgICAgICBlbHNlIGlmICh1bmlmb3JtLmxlbmd0aCA+PSAyICYmIHVuaWZvcm0ubGVuZ3RoIDw9IDQpIHtcbiAgICAgICAgICAgICAgICAgICAgcGFyc2VkLnB1c2goe1xuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogJ3ZlYycgKyB1bmlmb3JtLmxlbmd0aCxcbiAgICAgICAgICAgICAgICAgICAgICAgIG1ldGhvZDogdW5pZm9ybS5sZW5ndGggKyAnZnYnLFxuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiB1bmlmb3JtXG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAvLyBmbG9hdCBhcnJheVxuICAgICAgICAgICAgICAgIGVsc2UgaWYgKHVuaWZvcm0ubGVuZ3RoID4gNCkge1xuICAgICAgICAgICAgICAgICAgICBwYXJzZWQucHVzaCh7XG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiAnZmxvYXRbXScsXG4gICAgICAgICAgICAgICAgICAgICAgICBtZXRob2Q6ICcxZnYnLFxuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogbmFtZSArICdbMF0nLFxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IHVuaWZvcm1cbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC8vIFRPRE86IGFzc3VtZSBtYXRyaXggZm9yICh0eXBlb2YgPT0gRmxvYXQzMkFycmF5ICYmIGxlbmd0aCA9PSAxNik/XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBBcnJheSBvZiB0ZXh0dXJlc1xuICAgICAgICAgICAgZWxzZSBpZiAodHlwZW9mIHVuaWZvcm1bMF0gPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICAgICAgcGFyc2VkLnB1c2goe1xuICAgICAgICAgICAgICAgICAgICB0eXBlOiAnc2FtcGxlcjJEJyxcbiAgICAgICAgICAgICAgICAgICAgbWV0aG9kOiAnMWknLFxuICAgICAgICAgICAgICAgICAgICBuYW1lOiBuYW1lLFxuICAgICAgICAgICAgICAgICAgICB2YWx1ZTogdW5pZm9ybVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gQXJyYXkgb2YgYXJyYXlzIC0gYnV0IG9ubHkgYXJyYXlzIG9mIHZlY3RvcnMgYXJlIGFsbG93ZWQgaW4gdGhpcyBjYXNlXG4gICAgICAgICAgICBlbHNlIGlmIChBcnJheS5pc0FycmF5KHVuaWZvcm1bMF0pICYmIHR5cGVvZiB1bmlmb3JtWzBdWzBdID09PSAnbnVtYmVyJykge1xuICAgICAgICAgICAgICAgIC8vIGZsb2F0IHZlY3RvcnMgKHZlYzIsIHZlYzMsIHZlYzQpXG4gICAgICAgICAgICAgICAgaWYgKHVuaWZvcm1bMF0ubGVuZ3RoID49IDIgJiYgdW5pZm9ybVswXS5sZW5ndGggPD0gNCkge1xuICAgICAgICAgICAgICAgICAgICAvLyBTZXQgZWFjaCB2ZWN0b3IgaW4gdGhlIGFycmF5XG4gICAgICAgICAgICAgICAgICAgIGZvciAodSA9IDA7IHUgPCB1bmlmb3JtLmxlbmd0aDsgdSsrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBwYXJzZWQucHVzaCh7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogJ3ZlYycgKyB1bmlmb3JtWzBdLmxlbmd0aCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtZXRob2Q6IHVuaWZvcm1bdV0ubGVuZ3RoICsgJ2Z2JyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBuYW1lICsgJ1snICsgdSArICddJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogdW5pZm9ybVt1XVxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLy8gZWxzZSBlcnJvcj9cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIEFycmF5IG9mIHN0cnVjdHVyZXNcbiAgICAgICAgICAgIGVsc2UgaWYgKHR5cGVvZiB1bmlmb3JtWzBdID09PSAnb2JqZWN0Jykge1xuICAgICAgICAgICAgICAgIGZvciAodSA9IDA7IHUgPCB1bmlmb3JtLmxlbmd0aDsgdSsrKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIFNldCBlYWNoIHN0cnVjdCBpbiB0aGUgYXJyYXlcbiAgICAgICAgICAgICAgICAgICAgcGFyc2VkLnB1c2goLi4ucGFyc2VVbmlmb3Jtcyh1bmlmb3JtW3VdLCBuYW1lICsgJ1snICsgdSArICddJykpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICAvLyBCb29sZWFuXG4gICAgICAgIGVsc2UgaWYgKHR5cGVvZiB1bmlmb3JtID09PSAnYm9vbGVhbicpIHtcbiAgICAgICAgICAgIHBhcnNlZC5wdXNoKHtcbiAgICAgICAgICAgICAgICB0eXBlOiAnYm9vbCcsXG4gICAgICAgICAgICAgICAgbWV0aG9kOiAnMWknLFxuICAgICAgICAgICAgICAgIG5hbWUsXG4gICAgICAgICAgICAgICAgdmFsdWU6IHVuaWZvcm1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIC8vIFRleHR1cmVcbiAgICAgICAgZWxzZSBpZiAodHlwZW9mIHVuaWZvcm0gPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICBwYXJzZWQucHVzaCh7XG4gICAgICAgICAgICAgICAgdHlwZTogJ3NhbXBsZXIyRCcsXG4gICAgICAgICAgICAgICAgbWV0aG9kOiAnMWknLFxuICAgICAgICAgICAgICAgIG5hbWUsXG4gICAgICAgICAgICAgICAgdmFsdWU6IHVuaWZvcm1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIC8vIFN0cnVjdHVyZVxuICAgICAgICBlbHNlIGlmICh0eXBlb2YgdW5pZm9ybSA9PT0gJ29iamVjdCcpIHtcbiAgICAgICAgICAgIC8vIFNldCBlYWNoIGZpZWxkIGluIHRoZSBzdHJ1Y3RcbiAgICAgICAgICAgIHBhcnNlZC5wdXNoKC4uLnBhcnNlVW5pZm9ybXModW5pZm9ybSwgbmFtZSkpO1xuICAgICAgICB9XG4gICAgICAgIC8vIFRPRE86IHN1cHBvcnQgb3RoZXIgbm9uLWZsb2F0IHR5cGVzPyAoaW50LCBldGMuKVxuICAgIH1cbiAgICByZXR1cm4gcGFyc2VkO1xufVxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvZ2xzbENhbnZhcy9zcmMvZ2wvZ2wuanNcbi8vIG1vZHVsZSBpZCA9IDEyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8vIFRleHR1cmUgbWFuYWdlbWVudFxuaW1wb3J0IHsgaXNQb3dlck9mMiwgaXNTYWZhcmkgfSBmcm9tICcuLi90b29scy9jb21tb24nO1xuaW1wb3J0IHsgc3Vic2NyaWJlTWl4aW4gfSBmcm9tICcuLi90b29scy9taXhpbic7XG5cbi8vIEdMIHRleHR1cmUgd3JhcHBlciBvYmplY3QgZm9yIGtlZXBpbmcgdHJhY2sgb2YgYSBnbG9iYWwgc2V0IG9mIHRleHR1cmVzLCBrZXllZCBieSBhIHVuaXF1ZSB1c2VyLWRlZmluZWQgbmFtZVxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVGV4dHVyZSB7XG4gICAgY29uc3RydWN0b3IoZ2wsIG5hbWUsIG9wdGlvbnMgPSB7fSkge1xuICAgICAgICBzdWJzY3JpYmVNaXhpbih0aGlzKTtcblxuICAgICAgICB0aGlzLmdsID0gZ2w7XG4gICAgICAgIHRoaXMudGV4dHVyZSA9IGdsLmNyZWF0ZVRleHR1cmUoKTtcbiAgICAgICAgaWYgKHRoaXMudGV4dHVyZSkge1xuICAgICAgICAgICAgdGhpcy52YWxpZCA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5iaW5kKCk7XG5cbiAgICAgICAgdGhpcy5uYW1lID0gbmFtZTtcbiAgICAgICAgdGhpcy5zb3VyY2UgPSBudWxsO1xuICAgICAgICB0aGlzLnNvdXJjZVR5cGUgPSBudWxsO1xuICAgICAgICB0aGlzLmxvYWRpbmcgPSBudWxsOyAvLyBhIFByb21pc2Ugb2JqZWN0IHRvIHRyYWNrIHRoZSBsb2FkaW5nIHN0YXRlIG9mIHRoaXMgdGV4dHVyZVxuXG4gICAgICAgIC8vIERlZmF1bHQgdG8gYSAxLXBpeGVsIGJsYWNrIHRleHR1cmUgc28gd2UgY2FuIHNhZmVseSByZW5kZXIgd2hpbGUgd2Ugd2FpdCBmb3IgYW4gaW1hZ2UgdG8gbG9hZFxuICAgICAgICAvLyBTZWU6IGh0dHA6Ly9zdGFja292ZXJmbG93LmNvbS9xdWVzdGlvbnMvMTk3MjIyNDcvd2ViZ2wtd2FpdC1mb3ItdGV4dHVyZS10by1sb2FkXG4gICAgICAgIHRoaXMuc2V0RGF0YSgxLCAxLCBuZXcgVWludDhBcnJheShbMCwgMCwgMCwgMjU1XSksIHsgZmlsdGVyaW5nOiAnbGluZWFyJyB9KTtcbiAgICAgICAgdGhpcy5zZXRGaWx0ZXJpbmcob3B0aW9ucy5maWx0ZXJpbmcpO1xuXG4gICAgICAgIHRoaXMubG9hZChvcHRpb25zKTtcbiAgICB9XG5cbiAgICAvLyBEZXN0cm95IGEgc2luZ2xlIHRleHR1cmUgaW5zdGFuY2VcbiAgICBkZXN0cm95KCkge1xuICAgICAgICBpZiAoIXRoaXMudmFsaWQpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmdsLmRlbGV0ZVRleHR1cmUodGhpcy50ZXh0dXJlKTtcbiAgICAgICAgdGhpcy50ZXh0dXJlID0gbnVsbDtcbiAgICAgICAgZGVsZXRlIHRoaXMuZGF0YTtcbiAgICAgICAgdGhpcy5kYXRhID0gbnVsbDtcbiAgICAgICAgdGhpcy52YWxpZCA9IGZhbHNlO1xuICAgIH1cblxuICAgIGJpbmQodW5pdCkge1xuICAgICAgICBpZiAoIXRoaXMudmFsaWQpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBpZiAodHlwZW9mIHVuaXQgPT09ICdudW1iZXInKSB7XG4gICAgICAgICAgICBpZiAoVGV4dHVyZS5hY3RpdmVVbml0ICE9PSB1bml0KSB7XG4gICAgICAgICAgICAgICAgdGhpcy5nbC5hY3RpdmVUZXh0dXJlKHRoaXMuZ2wuVEVYVFVSRTAgKyB1bml0KTtcbiAgICAgICAgICAgICAgICBUZXh0dXJlLmFjdGl2ZVVuaXQgPSB1bml0O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlmIChUZXh0dXJlLmFjdGl2ZVRleHR1cmUgIT09IHRoaXMudGV4dHVyZSkge1xuICAgICAgICAgICAgdGhpcy5nbC5iaW5kVGV4dHVyZSh0aGlzLmdsLlRFWFRVUkVfMkQsIHRoaXMudGV4dHVyZSk7XG4gICAgICAgICAgICBUZXh0dXJlLmFjdGl2ZVRleHR1cmUgPSB0aGlzLnRleHR1cmU7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBsb2FkKG9wdGlvbnMgPSB7fSkge1xuICAgICAgICB0aGlzLmxvYWRpbmcgPSBudWxsO1xuXG4gICAgICAgIGlmICh0eXBlb2Ygb3B0aW9ucy51cmwgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICBpZiAodGhpcy51cmwgPT09IHVuZGVmaW5lZCB8fCBvcHRpb25zLnVybCAhPT0gdGhpcy51cmwpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnNldFVybChvcHRpb25zLnVybCwgb3B0aW9ucyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAob3B0aW9ucy5lbGVtZW50KSB7XG4gICAgICAgICAgICB0aGlzLnNldEVsZW1lbnQob3B0aW9ucy5lbGVtZW50LCBvcHRpb25zKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChvcHRpb25zLmRhdGEgJiYgb3B0aW9ucy53aWR0aCAmJiBvcHRpb25zLmhlaWdodCkge1xuICAgICAgICAgICAgdGhpcy5zZXREYXRhKG9wdGlvbnMud2lkdGgsIG9wdGlvbnMuaGVpZ2h0LCBvcHRpb25zLmRhdGEsIG9wdGlvbnMpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLy8gU2V0cyB0ZXh0dXJlIGZyb20gYW4gdXJsXG4gICAgc2V0VXJsKHVybCwgb3B0aW9ucyA9IHt9KSB7XG4gICAgICAgIGlmICghdGhpcy52YWxpZCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy51cmwgPSB1cmw7IC8vIHNhdmUgVVJMIHJlZmVyZW5jZSAod2lsbCBiZSBvdmVyd3JpdHRlbiB3aGVuIGVsZW1lbnQgaXMgbG9hZGVkIGJlbG93KVxuICAgICAgICB0aGlzLnNvdXJjZSA9IHRoaXMudXJsO1xuICAgICAgICB0aGlzLnNvdXJjZVR5cGUgPSAndXJsJztcblxuICAgICAgICB0aGlzLmxvYWRpbmcgPSBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICAgICAgICBsZXQgZXh0ID0gdXJsLnNwbGl0KCcuJykucG9wKCkudG9Mb3dlckNhc2UoKTtcbiAgICAgICAgICAgIGxldCBpc1ZpZGVvID0gKGV4dCA9PT0gJ29ndicgfHwgZXh0ID09PSAnd2VibScgfHwgZXh0ID09PSAnbXA0Jyk7XG5cbiAgICAgICAgICAgIGxldCBlbGVtZW50ID0gdW5kZWZpbmVkXG4gICAgICAgICAgICBpZiAoaXNWaWRlbykge1xuICAgICAgICAgICAgICAgIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd2aWRlbycpO1xuICAgICAgICAgICAgICAgIGVsZW1lbnQuYXV0b3BsYXkgPSB0cnVlO1xuICAgICAgICAgICAgICAgIG9wdGlvbnMuZmlsdGVyaW5nID0gJ25lYXJlc3QnO1xuICAgICAgICAgICAgICAgIC8vIGVsZW1lbnQucHJlbG9hZCA9ICdhdXRvJztcbiAgICAgICAgICAgICAgICAvLyBlbGVtZW50LnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgICAgICAgICAgICAgLy8gZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChlbGVtZW50KTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgZWxlbWVudCA9IG5ldyBJbWFnZSgpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBlbGVtZW50Lm9ubG9hZCA9ICgpID0+IHtcbiAgICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnNldEVsZW1lbnQoZWxlbWVudCwgb3B0aW9ucyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGNhdGNoIChlKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGBUZXh0dXJlICcke3RoaXMubmFtZX0nOiBmYWlsZWQgdG8gbG9hZCB1cmw6ICcke3RoaXMuc291cmNlfSdgLCBlLCBvcHRpb25zKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmVzb2x2ZSh0aGlzKTtcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICBlbGVtZW50Lm9uZXJyb3IgPSBlID0+IHtcbiAgICAgICAgICAgICAgICAvLyBXYXJuIGFuZCByZXNvbHZlIG9uIGVycm9yXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coYFRleHR1cmUgJyR7dGhpcy5uYW1lfSc6IGZhaWxlZCB0byBsb2FkIHVybDogJyR7dGhpcy5zb3VyY2V9J2AsIGUsIG9wdGlvbnMpO1xuICAgICAgICAgICAgICAgIHJlc29sdmUodGhpcyk7XG4gICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICAvLyBTYWZhcmkgaGFzIGEgYnVnIGxvYWRpbmcgZGF0YS1VUkwgZWxlbWVudHMgd2l0aCBDT1JTIGVuYWJsZWQsIHNvIGl0IG11c3QgYmUgZGlzYWJsZWQgaW4gdGhhdCBjYXNlXG4gICAgICAgICAgICAvLyBodHRwczovL2J1Z3Mud2Via2l0Lm9yZy9zaG93X2J1Zy5jZ2k/aWQ9MTIzOTc4XG4gICAgICAgICAgICBpZiAoIShpc1NhZmFyaSgpICYmIHRoaXMuc291cmNlLnNsaWNlKDAsIDUpID09PSAnZGF0YTonKSkge1xuICAgICAgICAgICAgICAgIGVsZW1lbnQuY3Jvc3NPcmlnaW4gPSAnYW5vbnltb3VzJztcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgZWxlbWVudC5zcmMgPSB0aGlzLnNvdXJjZTtcbiAgICAgICAgICAgIGlmIChpc1ZpZGVvKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5zZXRFbGVtZW50KGVsZW1lbnQsIG9wdGlvbnMpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIHRoaXMubG9hZGluZztcbiAgICB9XG5cbiAgICAvLyBTZXRzIHRleHR1cmUgdG8gYSByYXcgaW1hZ2UgYnVmZmVyXG4gICAgc2V0RGF0YSh3aWR0aCwgaGVpZ2h0LCBkYXRhLCBvcHRpb25zID0ge30pIHtcbiAgICAgICAgdGhpcy53aWR0aCA9IHdpZHRoO1xuICAgICAgICB0aGlzLmhlaWdodCA9IGhlaWdodDtcblxuICAgICAgICB0aGlzLnNvdXJjZSA9IGRhdGE7XG4gICAgICAgIHRoaXMuc291cmNlVHlwZSA9ICdkYXRhJztcblxuICAgICAgICB0aGlzLnVwZGF0ZShvcHRpb25zKTtcbiAgICAgICAgdGhpcy5zZXRGaWx0ZXJpbmcob3B0aW9ucyk7XG5cbiAgICAgICAgdGhpcy5sb2FkaW5nID0gUHJvbWlzZS5yZXNvbHZlKHRoaXMpO1xuICAgICAgICByZXR1cm4gdGhpcy5sb2FkaW5nO1xuICAgIH1cblxuICAgIC8vIFNldHMgdGhlIHRleHR1cmUgdG8gdHJhY2sgYSBlbGVtZW50IChjYW52YXMvaW1hZ2UpXG4gICAgc2V0RWxlbWVudChlbGVtZW50LCBvcHRpb25zKSB7XG4gICAgICAgIGxldCBlbCA9IGVsZW1lbnQ7XG5cbiAgICAgICAgLy8gYSBzdHJpbmcgZWxlbWVudCBpcyBpbnRlcnBldGVkIGFzIGEgQ1NTIHNlbGVjdG9yXG4gICAgICAgIGlmICh0eXBlb2YgZWxlbWVudCA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgIGVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGVsZW1lbnQpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGVsZW1lbnQgaW5zdGFuY2VvZiBIVE1MQ2FudmFzRWxlbWVudCB8fFxuICAgICAgICAgICAgZWxlbWVudCBpbnN0YW5jZW9mIEhUTUxJbWFnZUVsZW1lbnQgfHxcbiAgICAgICAgICAgIGVsZW1lbnQgaW5zdGFuY2VvZiBIVE1MVmlkZW9FbGVtZW50KSB7XG4gICAgICAgICAgICB0aGlzLnNvdXJjZSA9IGVsZW1lbnQ7XG4gICAgICAgICAgICB0aGlzLnNvdXJjZVR5cGUgPSAnZWxlbWVudCc7XG5cbiAgICAgICAgICAgIGlmIChlbGVtZW50IGluc3RhbmNlb2YgSFRNTFZpZGVvRWxlbWVudCkge1xuICAgICAgICAgICAgICAgIGVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2FucGxheXRocm91Z2gnLCAoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuaW50ZXJ2YWxJRCA9IHNldEludGVydmFsKCgpPT57XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnVwZGF0ZShvcHRpb25zKTtcbiAgICAgICAgICAgICAgICAgICAgfSwgMTUpO1xuICAgICAgICAgICAgICAgIH0sIHRydWUpO1xuICAgICAgICAgICAgICAgIGVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignZW5kZWQnLCAoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGVsZW1lbnQuY3VycmVudFRpbWUgPSAwO1xuICAgICAgICAgICAgICAgICAgICBlbGVtZW50LnBsYXkoKTtcbiAgICAgICAgICAgICAgICB9LCB0cnVlKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhpcy51cGRhdGUob3B0aW9ucyk7XG4gICAgICAgICAgICB9ICAgICAgICAgICAgXG4gICAgICAgICAgICB0aGlzLnNldEZpbHRlcmluZyhvcHRpb25zKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGxldCBtc2cgPSBgdGhlICdlbGVtZW50JyBwYXJhbWV0ZXIgKFxcYGVsZW1lbnQ6ICR7SlNPTi5zdHJpbmdpZnkoZWwpfVxcYCkgbXVzdCBiZSBhIENTUyBgO1xuICAgICAgICAgICAgbXNnICs9IGBzZWxlY3RvciBzdHJpbmcsIG9yIGEgPGNhbnZhcz4sIDxpbWFnZT4gb3IgPHZpZGVvPiBvYmplY3RgO1xuICAgICAgICAgICAgY29uc29sZS5sb2coYFRleHR1cmUgJyR7dGhpcy5uYW1lfSc6ICR7bXNnfWAsIG9wdGlvbnMpO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5sb2FkaW5nID0gUHJvbWlzZS5yZXNvbHZlKHRoaXMpO1xuICAgICAgICByZXR1cm4gdGhpcy5sb2FkaW5nO1xuICAgIH1cblxuICAgIC8vIFVwbG9hZHMgY3VycmVudCBpbWFnZSBvciBidWZmZXIgdG8gdGhlIEdQVSAoY2FuIGJlIHVzZWQgdG8gdXBkYXRlIGFuaW1hdGVkIHRleHR1cmVzIG9uIHRoZSBmbHkpXG4gICAgdXBkYXRlKG9wdGlvbnMgPSB7fSkge1xuICAgICAgICBpZiAoIXRoaXMudmFsaWQpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuYmluZCgpO1xuICAgICAgICB0aGlzLmdsLnBpeGVsU3RvcmVpKHRoaXMuZ2wuVU5QQUNLX0ZMSVBfWV9XRUJHTCwgKG9wdGlvbnMuVU5QQUNLX0ZMSVBfWV9XRUJHTCA9PT0gZmFsc2UgPyBmYWxzZSA6IHRydWUpKTtcbiAgICAgICAgdGhpcy5nbC5waXhlbFN0b3JlaSh0aGlzLmdsLlVOUEFDS19QUkVNVUxUSVBMWV9BTFBIQV9XRUJHTCwgb3B0aW9ucy5VTlBBQ0tfUFJFTVVMVElQTFlfQUxQSEFfV0VCR0wgfHwgZmFsc2UpO1xuXG4gICAgICAgIC8vIEltYWdlIG9yIENhbnZhcyBlbGVtZW50XG4gICAgICAgIGlmICh0aGlzLnNvdXJjZVR5cGUgPT09ICdlbGVtZW50JyAmJlxuICAgICAgICAgICAgKCh0aGlzLnNvdXJjZSBpbnN0YW5jZW9mIEhUTUxDYW52YXNFbGVtZW50KSB8fCBcbiAgICAgICAgICAgICAodGhpcy5zb3VyY2UgaW5zdGFuY2VvZiBIVE1MVmlkZW9FbGVtZW50KSB8fFxuICAgICAgICAgICAgICh0aGlzLnNvdXJjZSBpbnN0YW5jZW9mIEhUTUxJbWFnZUVsZW1lbnQgJiYgdGhpcy5zb3VyY2UuY29tcGxldGUpKSkge1xuICAgICAgICAgICAgaWYgKHRoaXMuc291cmNlIGluc3RhbmNlb2YgSFRNTFZpZGVvRWxlbWVudCkge1xuICAgICAgICAgICAgICAgIHRoaXMud2lkdGggPSB0aGlzLnNvdXJjZS52aWRlb1dpZHRoO1xuICAgICAgICAgICAgICAgIHRoaXMuaGVpZ2h0ID0gdGhpcy5zb3VyY2UudmlkZW9IZWlnaHQ7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHRoaXMud2lkdGggPSB0aGlzLnNvdXJjZS53aWR0aDtcbiAgICAgICAgICAgICAgICB0aGlzLmhlaWdodCA9IHRoaXMuc291cmNlLmhlaWdodDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMuZ2wudGV4SW1hZ2UyRCh0aGlzLmdsLlRFWFRVUkVfMkQsIDAsIHRoaXMuZ2wuUkdCQSwgdGhpcy5nbC5SR0JBLCB0aGlzLmdsLlVOU0lHTkVEX0JZVEUsIHRoaXMuc291cmNlKTtcbiAgICAgICAgfVxuICAgICAgICAvLyBSYXcgaW1hZ2UgYnVmZmVyXG4gICAgICAgIGVsc2UgaWYgKHRoaXMuc291cmNlVHlwZSA9PT0gJ2RhdGEnKSB7XG4gICAgICAgICAgICB0aGlzLmdsLnRleEltYWdlMkQodGhpcy5nbC5URVhUVVJFXzJELCAwLCB0aGlzLmdsLlJHQkEsIHRoaXMud2lkdGgsIHRoaXMuaGVpZ2h0LCAwLCB0aGlzLmdsLlJHQkEsIHRoaXMuZ2wuVU5TSUdORURfQllURSwgdGhpcy5zb3VyY2UpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMudHJpZ2dlcignbG9hZGVkJywgdGhpcyk7XG4gICAgfVxuXG4gICAgLy8gRGV0ZXJtaW5lcyBhcHByb3ByaWF0ZSBmaWx0ZXJpbmcgbW9kZVxuICAgIHNldEZpbHRlcmluZyAob3B0aW9ucyA9IHt9KSB7XG4gICAgICAgIGlmICghdGhpcy52YWxpZCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5wb3dlck9mMiA9IGlzUG93ZXJPZjIodGhpcy53aWR0aCkgJiYgaXNQb3dlck9mMih0aGlzLmhlaWdodCk7XG4gICAgICAgIGxldCBkZWZ1YWx0RmlsdGVyID0gKHRoaXMucG93ZXJPZjIgPyAnbWlwbWFwJyA6ICdsaW5lYXInKTtcbiAgICAgICAgdGhpcy5maWx0ZXJpbmcgPSBvcHRpb25zLmZpbHRlcmluZyB8fCBkZWZ1YWx0RmlsdGVyO1xuXG4gICAgICAgIHZhciBnbCA9IHRoaXMuZ2w7XG4gICAgICAgIHRoaXMuYmluZCgpO1xuXG4gICAgICAgIC8vIEZvciBwb3dlci1vZi0yIHRleHR1cmVzLCB0aGUgZm9sbG93aW5nIHByZXNldHMgYXJlIGF2YWlsYWJsZTpcbiAgICAgICAgLy8gbWlwbWFwOiBsaW5lYXIgYmxlbmQgZnJvbSBuZWFyZXN0IG1pcFxuICAgICAgICAvLyBsaW5lYXI6IGxpbmVhciBibGVuZCBmcm9tIG9yaWdpbmFsIGltYWdlIChubyBtaXBzKVxuICAgICAgICAvLyBuZWFyZXN0OiBuZWFyZXN0IHBpeGVsIGZyb20gb3JpZ2luYWwgaW1hZ2UgKG5vIG1pcHMsICdibG9ja3knIGxvb2spXG4gICAgICAgIGlmICh0aGlzLnBvd2VyT2YyKSB7XG4gICAgICAgICAgICBnbC50ZXhQYXJhbWV0ZXJpKGdsLlRFWFRVUkVfMkQsIGdsLlRFWFRVUkVfV1JBUF9TLCBvcHRpb25zLlRFWFRVUkVfV1JBUF9TIHx8IChvcHRpb25zLnJlcGVhdCAmJiBnbC5SRVBFQVQpIHx8IGdsLkNMQU1QX1RPX0VER0UpO1xuICAgICAgICAgICAgZ2wudGV4UGFyYW1ldGVyaShnbC5URVhUVVJFXzJELCBnbC5URVhUVVJFX1dSQVBfVCwgb3B0aW9ucy5URVhUVVJFX1dSQVBfVCB8fCAob3B0aW9ucy5yZXBlYXQgJiYgZ2wuUkVQRUFUKSB8fCBnbC5DTEFNUF9UT19FREdFKTtcblxuICAgICAgICAgICAgaWYgKHRoaXMuZmlsdGVyaW5nID09PSAnbWlwbWFwJykge1xuICAgICAgICAgICAgICAgIGdsLnRleFBhcmFtZXRlcmkoZ2wuVEVYVFVSRV8yRCwgZ2wuVEVYVFVSRV9NSU5fRklMVEVSLCBnbC5MSU5FQVJfTUlQTUFQX0xJTkVBUik7IC8vIFRPRE86IHVzZSB0cmlsaW5lYXIgZmlsdGVyaW5nIGJ5IGRlZnVhbHQgaW5zdGVhZD9cbiAgICAgICAgICAgICAgICBnbC50ZXhQYXJhbWV0ZXJpKGdsLlRFWFRVUkVfMkQsIGdsLlRFWFRVUkVfTUFHX0ZJTFRFUiwgZ2wuTElORUFSKTtcbiAgICAgICAgICAgICAgICBnbC5nZW5lcmF0ZU1pcG1hcChnbC5URVhUVVJFXzJEKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKHRoaXMuZmlsdGVyaW5nID09PSAnbGluZWFyJykge1xuICAgICAgICAgICAgICAgIGdsLnRleFBhcmFtZXRlcmkoZ2wuVEVYVFVSRV8yRCwgZ2wuVEVYVFVSRV9NSU5fRklMVEVSLCBnbC5MSU5FQVIpO1xuICAgICAgICAgICAgICAgIGdsLnRleFBhcmFtZXRlcmkoZ2wuVEVYVFVSRV8yRCwgZ2wuVEVYVFVSRV9NQUdfRklMVEVSLCBnbC5MSU5FQVIpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAodGhpcy5maWx0ZXJpbmcgPT09ICduZWFyZXN0Jykge1xuICAgICAgICAgICAgICAgIGdsLnRleFBhcmFtZXRlcmkoZ2wuVEVYVFVSRV8yRCwgZ2wuVEVYVFVSRV9NSU5fRklMVEVSLCBnbC5ORUFSRVNUKTtcbiAgICAgICAgICAgICAgICBnbC50ZXhQYXJhbWV0ZXJpKGdsLlRFWFRVUkVfMkQsIGdsLlRFWFRVUkVfTUFHX0ZJTFRFUiwgZ2wuTkVBUkVTVCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAvLyBXZWJHTCBoYXMgc3RyaWN0IHJlcXVpcmVtZW50cyBvbiBub24tcG93ZXItb2YtMiB0ZXh0dXJlczpcbiAgICAgICAgICAgIC8vIE5vIG1pcG1hcHMgYW5kIG11c3QgY2xhbXAgdG8gZWRnZVxuICAgICAgICAgICAgZ2wudGV4UGFyYW1ldGVyaShnbC5URVhUVVJFXzJELCBnbC5URVhUVVJFX1dSQVBfUywgZ2wuQ0xBTVBfVE9fRURHRSk7XG4gICAgICAgICAgICBnbC50ZXhQYXJhbWV0ZXJpKGdsLlRFWFRVUkVfMkQsIGdsLlRFWFRVUkVfV1JBUF9ULCBnbC5DTEFNUF9UT19FREdFKTtcblxuICAgICAgICAgICAgaWYgKHRoaXMuZmlsdGVyaW5nID09PSAnbWlwbWFwJykge1xuICAgICAgICAgICAgICAgIHRoaXMuZmlsdGVyaW5nID0gJ2xpbmVhcic7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmICh0aGlzLmZpbHRlcmluZyA9PT0gJ25lYXJlc3QnKSB7XG4gICAgICAgICAgICAgICAgZ2wudGV4UGFyYW1ldGVyaShnbC5URVhUVVJFXzJELCBnbC5URVhUVVJFX01JTl9GSUxURVIsIGdsLk5FQVJFU1QpO1xuICAgICAgICAgICAgICAgIGdsLnRleFBhcmFtZXRlcmkoZ2wuVEVYVFVSRV8yRCwgZ2wuVEVYVFVSRV9NQUdfRklMVEVSLCBnbC5ORUFSRVNUKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgeyAvLyBkZWZhdWx0IHRvIGxpbmVhciBmb3Igbm9uLXBvd2VyLW9mLTIgdGV4dHVyZXNcbiAgICAgICAgICAgICAgICBnbC50ZXhQYXJhbWV0ZXJpKGdsLlRFWFRVUkVfMkQsIGdsLlRFWFRVUkVfTUlOX0ZJTFRFUiwgZ2wuTElORUFSKTtcbiAgICAgICAgICAgICAgICBnbC50ZXhQYXJhbWV0ZXJpKGdsLlRFWFRVUkVfMkQsIGdsLlRFWFRVUkVfTUFHX0ZJTFRFUiwgZ2wuTElORUFSKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn1cblxuLy8gUmVwb3J0IG1heCB0ZXh0dXJlIHNpemUgZm9yIGEgR0wgY29udGV4dFxuVGV4dHVyZS5nZXRNYXhUZXh0dXJlU2l6ZSA9IGZ1bmN0aW9uIChnbCkge1xuICAgIHJldHVybiBnbC5nZXRQYXJhbWV0ZXIoZ2wuTUFYX1RFWFRVUkVfU0laRSk7XG59O1xuXG4vLyBHbG9iYWwgc2V0IG9mIHRleHR1cmVzLCBieSBuYW1lXG5UZXh0dXJlLmFjdGl2ZVVuaXQgPSAtMTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2dsc2xDYW52YXMvc3JjL2dsL1RleHR1cmUuanNcbi8vIG1vZHVsZSBpZCA9IDEzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIlxuXG5pbXBvcnQgZmJtIGZyb20gJy4vZmJtLmdsc2wnO1xuaW1wb3J0IGZpcmUgZnJvbSAnLi9maXJlLmdsc2wnO1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gIGZibSxcbiAgZmlyZVxuICBcbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvc2hhZGVycy9pbmRleC5qcyIsIm1vZHVsZS5leHBvcnRzID0gXCIjaWZkZWYgR0xfRVNcXG5wcmVjaXNpb24gbWVkaXVtcCBmbG9hdDtcXG4jZW5kaWZcXG5cXG5cXG5jb25zdCBmbG9hdCBQSSA9IDMuMTQxNTkyNjUzNTg5NzkzMjM4NDYyNjQzMzgzMjc5NTtcXG5jb25zdCBmbG9hdCBQSTIgPSA2LjI4MzE4NTMwNzE4O1xcblxcbmZsb2F0IGFsbW9zdElkZW50aXR5KCBmbG9hdCB4LCBmbG9hdCBtLCBmbG9hdCBuIClcXG57XFxuICAgIGlmKCB4Pm0gKSByZXR1cm4geDtcXG5cXG4gICAgZmxvYXQgYSA9IDIuMCpuIC0gbTtcXG4gICAgZmxvYXQgYiA9IDIuMCptIC0gMy4wKm47XFxuICAgIGZsb2F0IHQgPSB4L207XFxuXFxuICAgIHJldHVybiAoYSp0ICsgYikqdCp0ICsgbjtcXG59XFxuXFxuXFxuZmxvYXQgaW1wdWxzZSggZmxvYXQgaywgZmxvYXQgeCApXFxue1xcbiAgICBmbG9hdCBoID0gayp4O1xcbiAgICByZXR1cm4gaCpleHAoMS4wLWgpO1xcbn1cXG5cXG5mbG9hdCBjdWJpY1B1bHNlKCBmbG9hdCBjLCBmbG9hdCB3LCBmbG9hdCB4IClcXG57XFxuICAgIHggPSBhYnMoeCAtIGMpO1xcbiAgICBpZiggeD53ICkgcmV0dXJuIDAuMDtcXG4gICAgeCAvPSB3O1xcbiAgICByZXR1cm4gMS4wIC0geCp4KigzLjAtMi4wKngpO1xcbn1cXG5cXG5mbG9hdCBleHBTdGVwKCBmbG9hdCB4LCBmbG9hdCBrLCBmbG9hdCBuIClcXG57XFxuICAgIHJldHVybiBleHAoIC1rKnBvdyh4LG4pICk7XFxufVxcblxcblxcbmZsb2F0IGdhaW4oZmxvYXQgeCwgZmxvYXQgaylcXG57XFxuICAgIGZsb2F0IGEgPSAwLjUqcG93KDIuMCooKHg8MC41KT94OjEuMC14KSwgayk7XFxuICAgIHJldHVybiAoeDwwLjUpP2E6MS4wLWE7XFxufVxcblxcblxcbmZsb2F0IHBhcmFib2xhKCBmbG9hdCB4LCBmbG9hdCBrIClcXG57XFxuICAgIHJldHVybiBwb3coIDQuMCp4KigxLjAteCksIGsgKTtcXG59XFxuXFxuZmxvYXQgcGN1cnZlKCBmbG9hdCB4LCBmbG9hdCBhLCBmbG9hdCBiIClcXG57XFxuICAgIGZsb2F0IGsgPSBwb3coYStiLGErYikgLyAocG93KGEsYSkqcG93KGIsYikpO1xcbiAgICByZXR1cm4gayAqIHBvdyggeCwgYSApICogcG93KCAxLjAteCwgYiApO1xcbn1cXG5cXG52ZWMzIHJnYjJoc2IoIGluIHZlYzMgYyApe1xcbiAgICB2ZWM0IEsgPSB2ZWM0KDAuMCwgLTEuMCAvIDMuMCwgMi4wIC8gMy4wLCAtMS4wKTtcXG4gICAgdmVjNCBwID0gbWl4KHZlYzQoYy5iZywgSy53eiksXFxuICAgICAgICAgICAgICAgICB2ZWM0KGMuZ2IsIEsueHkpLFxcbiAgICAgICAgICAgICAgICAgc3RlcChjLmIsIGMuZykpO1xcbiAgICB2ZWM0IHEgPSBtaXgodmVjNChwLnh5dywgYy5yKSxcXG4gICAgICAgICAgICAgICAgIHZlYzQoYy5yLCBwLnl6eCksXFxuICAgICAgICAgICAgICAgICBzdGVwKHAueCwgYy5yKSk7XFxuICAgIGZsb2F0IGQgPSBxLnggLSBtaW4ocS53LCBxLnkpO1xcbiAgICBmbG9hdCBlID0gMS4wZS0xMDtcXG4gICAgcmV0dXJuIHZlYzMoYWJzKHEueiArIChxLncgLSBxLnkpIC8gKDYuMCAqIGQgKyBlKSksXFxuICAgICAgICAgICAgICAgIGQgLyAocS54ICsgZSksXFxuICAgICAgICAgICAgICAgIHEueCk7XFxufVxcblxcbi8vICBGdW5jdGlvbiBmcm9tIEnDsWlnbyBRdWlsZXNcXG4vLyAgaHR0cHM6Ly93d3cuc2hhZGVydG95LmNvbS92aWV3L01zUzNXY1xcbnZlYzMgaHNiMnJnYiggaW4gdmVjMyBjICl7XFxuICAgIHZlYzMgcmdiID0gY2xhbXAoYWJzKG1vZChjLngqNi4wK3ZlYzMoMC4wLDQuMCwyLjApLFxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgNi4wKS0zLjApLTEuMCxcXG4gICAgICAgICAgICAgICAgICAgICAwLjAsXFxuICAgICAgICAgICAgICAgICAgICAgMS4wICk7XFxuICAgIHJnYiA9IHJnYipyZ2IqKDMuMC0yLjAqcmdiKTtcXG4gICAgcmV0dXJuIGMueiAqIG1peCh2ZWMzKDEuMCksIHJnYiwgYy55KTtcXG59XFxuXFxuZmxvYXQgcmVjdGFuZ2xlKHZlYzIgc3QsdmVjMiBibCwgdmVjMiB0cikge1xcbiAgICB2ZWMyIGJsdiA9IHN0ZXAoYmwsIHN0KTtcXG4gICAgdmVjMiB0cnYgPSBzdGVwKHZlYzIoMS4wKS10ciwgMS4wLXN0KTtcXG4gICAgcmV0dXJuIGJsdi54KmJsdi55ICogdHJ2LngqdHJ2Lnk7XFxufVxcblxcbmZsb2F0IHNtb290aFJlY3RhbmdsZSh2ZWMyIHN0LHZlYzIgYmwsIHZlYzIgdHIsIGZsb2F0IHcpIHtcXG4gICAgdmVjMiBibHYgPSBzbW9vdGhzdGVwKGJsLCBibCt2ZWMyKHcpLCBzdCk7XFxuICAgIHZlYzIgdHJ2ID0gc21vb3Roc3RlcCh2ZWMyKDEuMCktdHIsIHZlYzIoMS4wKS10cit2ZWMyKHcpLCAxLjAtc3QpO1xcbiAgICByZXR1cm4gYmx2LngqYmx2LnkgKiB0cnYueCp0cnYueTtcXG59XFxuXFxuZmxvYXQgc21vb3RoQ2lyY2xlKHZlYzIgc3QsIHZlYzIgYywgZmxvYXQgciwgZmxvYXQgdykge1xcbiAgICBmbG9hdCBkID0gbGVuZ3RoKHN0IC0gYyk7XFxuICAgIHJldHVybiBzbW9vdGhzdGVwKHIrdyxyLXcsZCk7XFxufVxcblxcbmZsb2F0IHBvbHlnb24odmVjMiBzdCwgdmVjMiBjLCBmbG9hdCByLCBpbnQgTikge1xcbiAgIFxcdGZsb2F0IGEgPSBhdGFuKHN0Lnksc3QueCk7XFxuICAgXFx0ZmxvYXQgcyA9IFBJKjIuMC9mbG9hdChOKTtcXG4gICBcXHRmbG9hdCBkID0gIGNvcyhmbG9vciguNSthL3MpICogcyAtIGEpICogZGlzdGFuY2Uoc3QsYykgKiAyLjA7XFxuICAgIHJldHVybiAxLjAtc21vb3Roc3RlcChyLTAuMDEscixkKTtcXG59XFxuXFxubWF0MiByb3RhdGUyZChmbG9hdCBhKSB7XFxuICAgIHJldHVybiBtYXQyKGNvcyhhKSwgLXNpbihhKSwgc2luKGEpLCBjb3MoYSkpO1xcbn1cXG5cXG52ZWMyIHJhbmRvbTIodmVjMiBzdCl7XFxuICAgIHN0ID0gdmVjMiggZG90KHN0LHZlYzIoMTI3LjEsMzExLjcpKSwgZG90KHN0LHZlYzIoMjY5LjUsMTgzLjMpKSApO1xcbiAgICByZXR1cm4gZnJhY3Qoc2luKHN0KSo0Mzc1OC41NDUzMTIzKTtcXG59XFxuXFxuZmxvYXQgcmFuZG9tMmYodmVjMiBzdCl7XFxuICAgIGZsb2F0IHYgPSBkb3QoIGRvdChzdCx2ZWMyKDEyNy4xLDMxMS43KSksIGRvdChzdCx2ZWMyKDI2OS41LDE4My4zKSkgKTtcXG4gICAgcmV0dXJuIGZyYWN0KHNpbih2KSo0Mzc1OC41NDUzMTIzKTtcXG59XFxuXFxudmVjMiByYW5kb20yYSh2ZWMyIHN0KXtcXG4gICAgc3QgPSB2ZWMyKCBkb3Qoc3QsdmVjMigxMjcuMSwzMTEuNykpLFxcbiAgICAgICAgICAgICAgZG90KHN0LHZlYzIoMjY5LjUsMTgzLjMpKSApO1xcbiAgICByZXR1cm4gLTEuMCArIDIuMCpmcmFjdChzaW4oc3QpKjQzNzU4LjU0NTMxMjMpO1xcbn1cXG5cXG52ZWMzIHJhbmRvbTNhKHZlYzMgc3Qpe1xcbiAgICBzdCA9IHZlYzMoIGRvdChzdCx2ZWMzKDEyNy4xLDMxMS43LDEyMy42KSksXFxuICAgICAgICAgICAgICAgZG90KHN0LHZlYzMoMjY5LjUsMTgzLjMsOTcuMSkpLFxcbiAgICAgICAgICAgICAgICBkb3Qoc3QsdmVjMygxNDYuODcsMjQ1LjEyLDQ4LjcpKVxcbiAgICAgICAgICAgICAgICApO1xcbiAgICByZXR1cm4gLTEuMCArIDIuMCpmcmFjdChzaW4oc3QpKjQzNzU4LjU0NTMxMjMpO1xcbn1cXG5cXG5mbG9hdCBub2lzZShpbiB2ZWMyIHApIHtcXG5cXG4gICAgdmVjMiBpID0gZmxvb3IocCk7XFxuICAgIHZlYzIgZiA9IGZyYWN0KHApO1xcblxcbiAgICB2ZWMyIHUgPSBmKmYqKDMuMC0yLjAqZik7XFxuXFxuICAgIHJldHVybiBtaXgoIG1peCggZG90KCByYW5kb20yYShpICsgdmVjMigwLjAsMC4wKSApLCBmIC0gdmVjMigwLjAsMC4wKSApLFxcbiAgICAgICAgICAgICAgICAgICAgIGRvdCggcmFuZG9tMmEoaSArIHZlYzIoMS4wLDAuMCkgKSwgZiAtIHZlYzIoMS4wLDAuMCkgKSwgdS54KSxcXG4gICAgICAgICAgICAgICAgbWl4KCBkb3QoIHJhbmRvbTJhKGkgKyB2ZWMyKDAuMCwxLjApICksIGYgLSB2ZWMyKDAuMCwxLjApICksXFxuICAgICAgICAgICAgICAgICAgICAgZG90KCByYW5kb20yYShpICsgdmVjMigxLjAsMS4wKSApLCBmIC0gdmVjMigxLjAsMS4wKSApLCB1LngpLCB1LnkpO1xcblxcblxcbn1cXG5cXG5mbG9hdCBub2lzZShpbiB2ZWMzIHApIHtcXG5cXG4gICAgdmVjMyBpID0gZmxvb3IocCk7XFxuICAgIHZlYzMgZiA9IGZyYWN0KHApO1xcblxcbiAgICB2ZWMzIHUgPSBmKmYqKDMuMC0yLjAqZik7XFxuXFxuICAgICAgICByZXR1cm4gbWl4KFxcbiAgICAgICAgICAgICAgICBtaXgoXFxuICAgICAgICAgICAgICAgICAgICBtaXgoXFxuICAgICAgICAgICAgICAgICAgICAgICAgZG90KCByYW5kb20zYShpICsgdmVjMygwLjAsMC4wLDAuMCkgKSwgZiAtIHZlYzMoMC4wLDAuMCwwLjApICksXFxuICAgICAgICAgICAgICAgICAgICAgICAgZG90KCByYW5kb20zYShpICsgdmVjMygxLjAsMC4wLDAuMCkgKSwgZiAtIHZlYzMoMS4wLDAuMCwwLjApICksXFxuICAgICAgICAgICAgICAgICAgICAgICAgdS54KSxcXG4gICAgICAgICAgICAgICAgICAgIG1peChcXG4gICAgICAgICAgICAgICAgICAgICAgICBkb3QoIHJhbmRvbTNhKGkgKyB2ZWMzKDAuMCwxLjAsMC4wKSApLCBmIC0gdmVjMygwLjAsMS4wLDAuMCkgKSxcXG4gICAgICAgICAgICAgICAgICAgICAgICBkb3QoIHJhbmRvbTNhKGkgKyB2ZWMzKDEuMCwxLjAsMC4wKSApLCBmIC0gdmVjMygxLjAsMS4wLDAuMCkgKSxcXG4gICAgICAgICAgICAgICAgICAgICAgICB1LngpLFxcbiAgICAgICAgICAgICAgICAgICAgdS55KSxcXG4gICAgICAgICAgICAgICAgbWl4KFxcbiAgICAgICAgICAgICAgICAgICAgbWl4KFxcbiAgICAgICAgICAgICAgICAgICAgICAgIGRvdCggcmFuZG9tM2EoaSArIHZlYzMoMC4wLDAuMCwxLjApICksIGYgLSB2ZWMzKDAuMCwwLjAsMS4wKSApLFxcbiAgICAgICAgICAgICAgICAgICAgICAgIGRvdCggcmFuZG9tM2EoaSArIHZlYzMoMS4wLDAuMCwxLjApICksIGYgLSB2ZWMzKDEuMCwwLjAsMS4wKSApLFxcbiAgICAgICAgICAgICAgICAgICAgICAgIHUueCksXFxuICAgICAgICAgICAgICAgICAgICBtaXgoXFxuICAgICAgICAgICAgICAgICAgICAgICAgZG90KCByYW5kb20zYShpICsgdmVjMygwLjAsMS4wLDEuMCkgKSwgZiAtIHZlYzMoMC4wLDEuMCwxLjApICksXFxuICAgICAgICAgICAgICAgICAgICAgICAgZG90KCByYW5kb20zYShpICsgdmVjMygxLjAsMS4wLDEuMCkgKSwgZiAtIHZlYzMoMS4wLDEuMCwxLjApICksXFxuICAgICAgICAgICAgICAgICAgICAgICAgdS54KSxcXG4gICAgICAgICAgICAgICAgICAgIHUueSksXFxuICAgICAgICAgICAgICAgIHUuelxcbiAgICAgICAgICAgICAgICk7XFxufVxcblxcbmZsb2F0IHVzbm9pc2UodmVjMyBwKSB7XFxuICAgIHJldHVybiAobm9pc2UocCkgKyAxLjApIC8yLjA7XFxufVxcblxcbmZsb2F0IGNlbGxOb2lzZSh2ZWMyIHApIHtcXG4gICAgdmVjMiBpID0gZmxvb3IocCk7XFxuICAgIHZlYzIgZiA9IGZyYWN0KHApO1xcblxcbiAgICBmbG9hdCBtX2Rpc3QgPSAxLjA7XFxuXFxuICAgIGZvcihpbnQgeT0tMTsgeTw9MTsgeSsrKSB7XFxuICAgICAgICBmb3IoaW50IHg9LTE7IHg8PTE7IHgrKykge1xcbiAgICAgICAgICAgIHZlYzIgbmVpZ2hib3VyPXZlYzIoZmxvYXQoeCksIGZsb2F0KHkpKTtcXG4gICAgICAgICAgICB2ZWMyIHBvaW50ID0gcmFuZG9tMihpICsgbmVpZ2hib3VyKTtcXG5cXG4gICAgICAgICAgICB2ZWMyIGRpZmY9IG5laWdoYm91ciArIHBvaW50IC0gZjtcXG4gICAgICAgICAgICBmbG9hdCBkaXN0ID0gbGVuZ3RoKGRpZmYpO1xcbiAgICAgICAgICAgIG1fZGlzdCA9IG1pbihtX2Rpc3QsZGlzdCk7XFxuICAgICAgICB9XFxuICAgIH1cXG5cXG4gICAgcmV0dXJuIG1fZGlzdDtcXG59XFxuXFxuXFxudmVjMyB2ZXJvbmlOb2lzZSh2ZWMyIHN0KSB7XFxuICAgIHZlYzIgcCA9IGZsb29yKHN0KTtcXG4gICAgdmVjMiBmID0gZnJhY3Qoc3QpO1xcblxcbiAgICBmbG9hdCByZXMgPSAyLjA7XFxuICAgIHZlYzIgbV9wb2ludD12ZWMyKDEuMCwgMS4wKSxcXG4gICAgICAgIG1yPXZlYzIoMCwwKSxcXG4gICAgICAgIG1iID0gdmVjMigwLDApO1xcblxcbiAgICBmb3IoaW50IGo9LTE7IGo8PTE7IGorKykge1xcbiAgICAgICAgZm9yKGludCBpPS0xOyBpPD0xOyBpKyspIHtcXG4gICAgICAgICAgICB2ZWMyIGI9dmVjMihmbG9hdChpKSwgZmxvYXQoaikpO1xcbiAgICAgICAgICAgIHZlYzIgcG9pbnQgPSBwICsgYjtcXG4gICAgICAgICAgICB2ZWMyIHIgPSBiICsgcmFuZG9tMihwb2ludCkgLSBmO1xcblxcbiAgICAgICAgICAgIGZsb2F0IGQgPSBkb3QocixyKTtcXG4gICAgICAgICAgICBpZiAoZCA8IHJlcykge1xcbiAgICAgICAgICAgICAgICByZXMgPSBkO1xcbiAgICAgICAgICAgICAgICBtX3BvaW50ID0gcG9pbnQ7XFxuICAgICAgICAgICAgICAgIG1yPXI7XFxuICAgICAgICAgICAgICAgIG1iPWI7XFxuICAgICAgICAgICAgfVxcbiAgICAgICAgfVxcbiAgICB9XFxuXFxuICAgIHJlcyA9IDguMDtcXG4gICAgZm9yKGludCBqPS0yOyBqPD0yOyArK2opIHtcXG4gICAgICAgIGZvcihpbnQgaT0tMjsgaTw9MjsgKytpKSB7XFxuXFxuICAgICAgICAgICAgdmVjMiBiID0gbWIgKyB2ZWMyKGZsb2F0KGkpLGZsb2F0KGopKTtcXG5cXG4gICAgICAgICAgICB2ZWMyIHIgPSBiICsgcmFuZG9tMihwICsgYikgLSBmO1xcblxcbiAgICAgICAgICAgIGZsb2F0IGQgPSBkb3QoMC41ICogKG1yK3IpLCBub3JtYWxpemUociAtIG1yKSk7XFxuXFxuICAgICAgICAgICAgcmVzID0gbWluKHJlcywgZCk7XFxuXFxuICAgICAgICB9XFxuICAgIH1cXG5cXG4gICAgcmV0dXJuIHZlYzMobV9wb2ludC54eSwgcmVzKTtcXG59XFxuXFxuY29uc3QgaW50IG9jdGF2ZXMgPSA0O1xcblxcbmZsb2F0IGZibSh2ZWMyIHAsIGZsb2F0IEgsIGZsb2F0IGxhY3VuYXJpdHkpIHtcXG4gICAgZmxvYXQgdmFsdWUsIGZyZXF1ZW5jeTtcXG4gICAgZmxvYXQgZXhwb25lbnQ7XFxuXFxuICAgIHZhbHVlID0gMC4wO1xcbiAgICBmcmVxdWVuY3kgPSAxLjA7XFxuXFxuICAgIGZvcihpbnQgaT0wOyBpPG9jdGF2ZXM7ICsraSkge1xcblxcbiAgICAgICAgZXhwb25lbnQgPSBwb3coZnJlcXVlbmN5LCAtSCk7XFxuXFxuICAgICAgICB2YWx1ZT12YWx1ZSArIChub2lzZShwKSAqIGV4cG9uZW50KTtcXG5cXG4gICAgICAgIHA9cCpsYWN1bmFyaXR5O1xcblxcbiAgICAgICAgZnJlcXVlbmN5PWZyZXF1ZW5jeSAqIGxhY3VuYXJpdHk7XFxuICAgIH1cXG5cXG4gICAgcmV0dXJuIHZhbHVlO1xcbn1cXG5cXG5mbG9hdCBmYm0odmVjMyBwLCBmbG9hdCBILCBmbG9hdCBsYWN1bmFyaXR5KSB7XFxuICAgIGZsb2F0IHZhbHVlLCBmcmVxdWVuY3k7XFxuICAgIGZsb2F0IGV4cG9uZW50O1xcblxcbiAgICB2YWx1ZSA9IDAuMDtcXG4gICAgZnJlcXVlbmN5ID0gMS4wO1xcblxcbiAgICBmb3IoaW50IGk9MDsgaTxvY3RhdmVzOyArK2kpIHtcXG5cXG4gICAgICAgIGV4cG9uZW50ID0gcG93KGZyZXF1ZW5jeSwgLUgpO1xcblxcbiAgICAgICAgdmFsdWU9dmFsdWUgKyAobm9pc2UocCkgKiBleHBvbmVudCk7XFxuXFxuICAgICAgICBwPXAqbGFjdW5hcml0eTtcXG5cXG4gICAgICAgIGZyZXF1ZW5jeT1mcmVxdWVuY3kgKiBsYWN1bmFyaXR5O1xcbiAgICB9XFxuXFxuICAgIHJldHVybiB2YWx1ZTtcXG59XFxuXFxuZmxvYXQgcmlkZ2VkTXVsdGlmcmFjdGFsKHZlYzMgcCwgZmxvYXQgSCwgZmxvYXQgbGFjdW5hcml0eSwgZmxvYXQgb2Zmc2V0KSB7XFxuICAgIGZsb2F0IHJlc3VsdCwgZnJlcXVlbmN5LCByZW1haW5kZXI7XFxuICAgIGZsb2F0IHdlaWdodCwgc2lnbmFsLCBleHBvbmVudDtcXG5cXG4gICAgZmxvYXQgZ2FpbiA9IDIuMDtcXG5cXG4gICAgcmVzdWx0ID0gMS4wO1xcbiAgICBmcmVxdWVuY3kgPSAxLjA7XFxuXFxuICAgIHNpZ25hbCA9IG5vaXNlKHApO1xcbiAgICBpZiAoc2lnbmFsIDwgMC4wKSBzaWduYWwgPSAtc2lnbmFsO1xcbiAgICBzaWduYWwgPSBvZmZzZXQtc2lnbmFsO1xcbiAgICBzaWduYWwgKj1zaWduYWw7XFxuICAgIHJlc3VsdCA9IHNpZ25hbDtcXG4gICAgd2VpZ2h0ID0gMS4wO1xcblxcblxcbiAgICBmb3IoaW50IGk9MTsgaTxvY3RhdmVzOyArK2kpIHtcXG4gICAgICAgIGZyZXF1ZW5jeT1mcmVxdWVuY3kqbGFjdW5hcml0eTtcXG4gICAgICAgIHA9cCpsYWN1bmFyaXR5O1xcblxcbiAgICAgICAgd2VpZ2h0ID0gc2lnbmFsICogZ2FpbjtcXG4gICAgICAgIGlmICh3ZWlnaHQ+MS4wKSB3ZWlnaHQ9MS4wO1xcbiAgICAgICAgaWYgKHdlaWdodCA8IDAuMCApIHdlaWdodD0gMC4wO1xcblxcbiAgICAgICAgc2lnbmFsID0gbm9pc2UocCk7XFxuXFxuICAgICAgICBpZiAoc2lnbmFsIDwwLjApIHNpZ25hbCA9IC1zaWduYWw7XFxuICAgICAgICBzaWduYWwgPSBvZmZzZXQgLSBzaWduYWw7XFxuICAgICAgICBzaWduYWwgKj1zaWduYWw7XFxuICAgICAgICBzaWduYWwgKj13ZWlnaHQ7XFxuICAgICAgICByZXN1bHQgKz0gc2lnbmFsICogcG93KGZyZXF1ZW5jeSwtSCk7XFxuXFxuICAgIH1cXG5cXG4gICAgcmV0dXJuIHJlc3VsdDtcXG59XFxuXFxudW5pZm9ybSB2ZWMyIHVfcmVzb2x1dGlvbjtcXG51bmlmb3JtIHZlYzIgdV9tb3VzZTtcXG51bmlmb3JtIGZsb2F0IHVfdGltZTtcXG5cXG5cXG5cXG52b2lkIGZ1bmN0aW9uMSgpe1xcblxcdHZlYzIgc3QgPSBnbF9GcmFnQ29vcmQueHkvdV9yZXNvbHV0aW9uO1xcblxcblxcdHZlYzIgb2ZmPXZlYzIoMC41KS1zdDtcXG5cXHRmbG9hdCBhbmdsZSA9IGF0YW4ob2ZmLnksb2ZmLngpO1xcblxcblxcdGZsb2F0IGQyID0gb2ZmLngqb2ZmLngrb2ZmLnkqb2ZmLnk7XFxuXFx0ZmxvYXQgZCA9IGxlbmd0aChvZmYpICogMi4wO1xcblxcblxcdGZsb2F0IG9mZnNldCA9IDAuMiArIChjb3ModV90aW1lICogMS4wKSAvIDguMCk7XFxuICAgIHZlYzMgciA9ICBjdWJpY1B1bHNlKG9mZnNldCwwLjUsZCkgKiBoc2IycmdiKHZlYzMoKGFuZ2xlL1BJMikrMC41LCBkLCAxLjApKTtcXG5cXG4gICAgZmxvYXQgb2Zmc2V0MiA9IDAuMiArIChjb3ModV90aW1lICogMS4xKSAvIDguMCk7XFxuICAgIHZlYzMgZyA9ICBjdWJpY1B1bHNlKG9mZnNldDIsMC41LGQpICogaHNiMnJnYih2ZWMzKChhbmdsZS9QSTIpKzAuMTUsIGQsIDEuMCkpO1xcblxcbiAgICBmbG9hdCBvZmZzZXQzID0gMC4yICsgKGNvcyh1X3RpbWUgKiAwLjkpIC8gOC4wKTtcXG4gICAgdmVjMyBiID0gIGN1YmljUHVsc2Uob2Zmc2V0MywwLjUsZCkgKiBoc2IycmdiKHZlYzMoKGFuZ2xlL1BJMikrMC42NSwgZCwgMS4wKSk7XFxuXFxuICAgIHZlYzMgY29sb3IgPSByICsgZysgKyBiOy8vdmVjMygwLDAsMCk7XFxuXFxuXFxuXFx0Z2xfRnJhZ0NvbG9yID0gdmVjNChjb2xvciwxLjApO1xcbn1cXG5cXG5cXG52ZWMzIGZ1bmN0aW9uMih2ZWMyIHN0KSB7XFxuXFx0c3Q9dmVjMigwLjUpIC0gc3Q7XFxuXFx0Ly9mbG9hdCByb3QgPSB1X3RpbWUgLyAyLjU7XFxuXFx0dmVjMiBzdDIgPSByb3RhdGUyZCgtdV90aW1lIC8gMi41KSAqIHN0O1xcblxcbiAgIFxcdGZsb2F0IGEgPSBhdGFuKHN0Mi55LHN0Mi54KTtcXG4gICBcXHRmbG9hdCBkID0gbGVuZ3RoKHN0KTtcXG5cXG4gICBcXHR2ZWMzIHJnYiA9ICBoc2IycmdiKHZlYzMoKGEqMy4wL1BJMikrMC4xNSwgZCwgMS4wKSk7XFxuXFxuICAgXFx0Ly9mbG9hdCBjeWNsZXMgPSAoc2luKGQqMTAwLjApICsgMS4wKSAvMi4wO1xcblxcbiAgIFxcdC8vZmxvYXQgcmluZ3MgPSAxLjAtc21vb3Roc3RlcCgwLjk5LDEuMCxkKTtcXG5cXG4gICAgZmxvYXQgdHJpYW5nbGUgPSBwb2x5Z29uKHN0MiwgdmVjMigwLDApLCAwLjUsIDMpO1xcblxcbiAgICB2ZWMzIGNvbG9yID1cXG4gICAgICAgICAgICB2ZWMzKDEpICogdHJpYW5nbGUgKiByZ2JcXG4gICAgICAgICA7XFxuICAgICAgICA7OysodmVjMyhzbW9vdGhSZWN0YW5nbGUoc3QyLCB2ZWMyKC0wLjksLTAuNSksIHZlYzIoLTAuNiwgLTAuMiksIDAuMDAyNSkgKSApXFxuICAgICAgICA7XFxuXFxuICAgIHJldHVybiBjb2xvcjtcXG5cXG59XFxuXFxudmVjMyBmdW5jdGlvbjModmVjMiBzdCkge1xcblxcblxcdC8vdmVjMiBmc3QgPSBmcmFjdChzdCAqIDIuMCk7XFxuXFxuXFx0dmVjMyBjb2xvcj12ZWMzKDApO1xcblxcbiAgICBpbnQgTiA9IDg7XFxuICAgXFx0ZmxvYXQgYSA9IGF0YW4oc3QueSxzdC54KTtcXG4gICBcXHRmbG9hdCBzID0gUEkqMi4wL2Zsb2F0KE4pO1xcblxcblxcdGZsb2F0IG49bm9pc2UodmVjMihhKjEwLjAsYSsxMC4wKSAqIDEwLjApIC8gMTAuMDtcXG5cXG4gICBcXHRmbG9hdCBkID0gIGNvcyhmbG9vciguNSthL3MpICogcyAtIGEpICogZGlzdGFuY2Uoc3QsdmVjMigwLDApKSAgKiA0LjAgICsgbjtcXG4gICAgZmxvYXQgcG9seWdvbiA9IDEuMC1zbW9vdGhzdGVwKDAuOTksIDEuMCwgZCk7XFxuXFxuXFx0Y29sb3I9dmVjMygxLjAsMS4wLDEuMCkgKiBwb2x5Z29uO1xcblxcblxcblxcblxcblxcblxcblxcblxcdHJldHVybiBjb2xvcjtcXG59XFxuXFxuXFxudmVjMyBub2lzZVRlc3QodmVjMiBzdCkge1xcblxcbiAgICBmbG9hdCBkaXN0YW5jZSA9IGxlbmd0aChzdCk7XFxuXFxuICAgIC8vc3QueCArPSBjb3ModV90aW1lLzEuMCkgLyAxMC4wO1xcbiAgICAvL3N0LnkgKz0gc2luKHVfdGltZS8xLjApIC8gMTAuMDtcXG5cXG4gICAgc3Q9c3QqMTAuMDtcXG5cXG5cXG4vLyAgICBzdCA9IHZlYzIoMS4wLCAxLjApIC0gbGVuZ3RoKHN0KSAqIHN0O1xcblxcblxcblxcbiAgICB2ZWMzIG4gPSB2ZXJvbmlOb2lzZShzdCk7XFxuXFxuICAgIHZlYzIgcCA9IG4ueHk7XFxuICAgIGZsb2F0IGRpc3QgPSBuLno7XFxuXFxuICAgIGZsb2F0IGQgPSBhYnMoY29zKGRpc3QgKiA1MC4wKSkgKiBkaXN0O1xcblxcbiAgICBmbG9hdCBhID0gYXRhbihwLnkscC54KTtcXG5cXG5cXG4gICAgdmVjMyBjb2xvciA9IGhzYjJyZ2IodmVjMyhhIC8gNi4wICwgMS4wLCAxLjApKTtcXG5cXG4gICAgLy9jb2xvcj1jb2xvciAqICgxLjAtc21vb3Roc3RlcCgwLjAyNSwgMC4wNzUsIGRpc3QpKTtcXG4gICAgLy9jb2xvcj1jb2xvciAqICgoc21vb3Roc3RlcCgwLjk3NSwgMC45NSwgMS4wLWRpc3QpKSk7XFxuICAgIC8vY29sb3I9Y29sb3IgKyAodmVjMyguNywwLjcsLjMpICogKDEuMC1zbW9vdGhzdGVwKDAuOTg1LCAwLjk3NSwgMS4wLWRpc3QpKSk7XFxuXFxuXFxuXFxuICAgIHJldHVybiBjb2xvcjtcXG5cXG59XFxuXFxudmVjMyBmYm1UZXN0KHZlYzIgcCkge1xcblxcbiAgICBmbG9hdCB2ID0gZmJtKHZlYzMocCwgdV90aW1lLzIuMCksIDEuMCwgMi4wKTtcXG5cXG4gICAgdj0odisxLjApIC8gMi4wO1xcbiAgICB2ZWMzIGNvbG9yID0gdmVjMyh2LHYsdik7XFxuXFxuICAgIHJldHVybiBjb2xvcjtcXG5cXG59XFxuXFxudmVjMyByaWRnZWRUZXN0KHZlYzIgcCkge1xcblxcbiAgICBmbG9hdCB2O1xcblxcbiAgICBmbG9hdCB2c2NhbGUgPSBwLnkrMS4wO1xcbiAgICB2c2NhbGU9dnNjYWxlKnZzY2FsZTtcXG5cXG4gICAgdmVjMyBwcCA9IHZlYzMocCo1LjAsIHVfdGltZS8wLjc1KTtcXG4gICAgcHAueSA9IHBwLnkgKyB1X3RpbWUgKiAyLjA7XFxuXFxuICAgIHY9IHJpZGdlZE11bHRpZnJhY3RhbChwcCwgMC4yNSwgMi4xLCAwLjcpXFxuICAgICAgICAqIHZzY2FsZVxcbiAgICAgICAgKyAocC55IC8gMS4wKTtcXG5cXG4gICAgdmVjMyBjb2xvcjtcXG5cXG4gICAgY29sb3IgPVxcbiAgICAgICAgKHNtb290aHN0ZXAoMC4wLCAwLjMsIHYpICogdmVjMygxLDAsMCkpXFxuICAgICAgICArIChzbW9vdGhzdGVwKDAuMywgMC42LCB2KSAqIHZlYzMoMSwwLDApKVxcbiAgICAgICAgKyAoc21vb3Roc3RlcCgwLjYsIDEuMCwgdikgKiB2ZWMzKDAsMSwwKSlcXG4gICAgICAgIDtcXG5cXG5cXG4gICAgcmV0dXJuIGNvbG9yO1xcblxcbn1cXG5cXG52b2lkIG1haW4oKSB7XFxuXFx0dmVjMiBzdCA9IGdsX0ZyYWdDb29yZC54eS91X3Jlc29sdXRpb247XFxuXFxuXFx0c3Q9dmVjMigwLjUpIC0gc3Q7XFxuXFxuXFx0Ly9zdCA9IHJvdGF0ZTJkKC11X3RpbWUgLyAyLjUpICogc3Q7XFxuXFxuICAgIGdsX0ZyYWdDb2xvcj12ZWM0KGZibVRlc3Qoc3QpLCAwKTtcXG5cXG59XCJcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9zaGFkZXJzL2ZibS5nbHNsXG4vLyBtb2R1bGUgaWQgPSAxNVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IFwiI2lmZGVmIEdMX0VTXFxucHJlY2lzaW9uIG1lZGl1bXAgZmxvYXQ7XFxuI2VuZGlmXFxuXFxuXFxuY29uc3QgZmxvYXQgUEkgPSAzLjE0MTU5MjY1MzU4OTc5MzIzODQ2MjY0MzM4MzI3OTU7XFxuY29uc3QgZmxvYXQgUEkyID0gNi4yODMxODUzMDcxODtcXG5cXG5mbG9hdCBhbG1vc3RJZGVudGl0eSggZmxvYXQgeCwgZmxvYXQgbSwgZmxvYXQgbiApXFxue1xcbiAgICBpZiggeD5tICkgcmV0dXJuIHg7XFxuXFxuICAgIGZsb2F0IGEgPSAyLjAqbiAtIG07XFxuICAgIGZsb2F0IGIgPSAyLjAqbSAtIDMuMCpuO1xcbiAgICBmbG9hdCB0ID0geC9tO1xcblxcbiAgICByZXR1cm4gKGEqdCArIGIpKnQqdCArIG47XFxufVxcblxcblxcbmZsb2F0IGltcHVsc2UoIGZsb2F0IGssIGZsb2F0IHggKVxcbntcXG4gICAgZmxvYXQgaCA9IGsqeDtcXG4gICAgcmV0dXJuIGgqZXhwKDEuMC1oKTtcXG59XFxuXFxuZmxvYXQgY3ViaWNQdWxzZSggZmxvYXQgYywgZmxvYXQgdywgZmxvYXQgeCApXFxue1xcbiAgICB4ID0gYWJzKHggLSBjKTtcXG4gICAgaWYoIHg+dyApIHJldHVybiAwLjA7XFxuICAgIHggLz0gdztcXG4gICAgcmV0dXJuIDEuMCAtIHgqeCooMy4wLTIuMCp4KTtcXG59XFxuXFxuZmxvYXQgZXhwU3RlcCggZmxvYXQgeCwgZmxvYXQgaywgZmxvYXQgbiApXFxue1xcbiAgICByZXR1cm4gZXhwKCAtaypwb3coeCxuKSApO1xcbn1cXG5cXG5cXG5mbG9hdCBnYWluKGZsb2F0IHgsIGZsb2F0IGspXFxue1xcbiAgICBmbG9hdCBhID0gMC41KnBvdygyLjAqKCh4PDAuNSk/eDoxLjAteCksIGspO1xcbiAgICByZXR1cm4gKHg8MC41KT9hOjEuMC1hO1xcbn1cXG5cXG5cXG5mbG9hdCBwYXJhYm9sYSggZmxvYXQgeCwgZmxvYXQgayApXFxue1xcbiAgICByZXR1cm4gcG93KCA0LjAqeCooMS4wLXgpLCBrICk7XFxufVxcblxcbmZsb2F0IHBjdXJ2ZSggZmxvYXQgeCwgZmxvYXQgYSwgZmxvYXQgYiApXFxue1xcbiAgICBmbG9hdCBrID0gcG93KGErYixhK2IpIC8gKHBvdyhhLGEpKnBvdyhiLGIpKTtcXG4gICAgcmV0dXJuIGsgKiBwb3coIHgsIGEgKSAqIHBvdyggMS4wLXgsIGIgKTtcXG59XFxuXFxudmVjMyByZ2IyaHNiKCBpbiB2ZWMzIGMgKXtcXG4gICAgdmVjNCBLID0gdmVjNCgwLjAsIC0xLjAgLyAzLjAsIDIuMCAvIDMuMCwgLTEuMCk7XFxuICAgIHZlYzQgcCA9IG1peCh2ZWM0KGMuYmcsIEsud3opLFxcbiAgICAgICAgICAgICAgICAgdmVjNChjLmdiLCBLLnh5KSxcXG4gICAgICAgICAgICAgICAgIHN0ZXAoYy5iLCBjLmcpKTtcXG4gICAgdmVjNCBxID0gbWl4KHZlYzQocC54eXcsIGMuciksXFxuICAgICAgICAgICAgICAgICB2ZWM0KGMuciwgcC55engpLFxcbiAgICAgICAgICAgICAgICAgc3RlcChwLngsIGMucikpO1xcbiAgICBmbG9hdCBkID0gcS54IC0gbWluKHEudywgcS55KTtcXG4gICAgZmxvYXQgZSA9IDEuMGUtMTA7XFxuICAgIHJldHVybiB2ZWMzKGFicyhxLnogKyAocS53IC0gcS55KSAvICg2LjAgKiBkICsgZSkpLFxcbiAgICAgICAgICAgICAgICBkIC8gKHEueCArIGUpLFxcbiAgICAgICAgICAgICAgICBxLngpO1xcbn1cXG5cXG4vLyAgRnVuY3Rpb24gZnJvbSBJw7FpZ28gUXVpbGVzXFxuLy8gIGh0dHBzOi8vd3d3LnNoYWRlcnRveS5jb20vdmlldy9Nc1MzV2NcXG52ZWMzIGhzYjJyZ2IoIGluIHZlYzMgYyApe1xcbiAgICB2ZWMzIHJnYiA9IGNsYW1wKGFicyhtb2QoYy54KjYuMCt2ZWMzKDAuMCw0LjAsMi4wKSxcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIDYuMCktMy4wKS0xLjAsXFxuICAgICAgICAgICAgICAgICAgICAgMC4wLFxcbiAgICAgICAgICAgICAgICAgICAgIDEuMCApO1xcbiAgICByZ2IgPSByZ2IqcmdiKigzLjAtMi4wKnJnYik7XFxuICAgIHJldHVybiBjLnogKiBtaXgodmVjMygxLjApLCByZ2IsIGMueSk7XFxufVxcblxcbmZsb2F0IHJlY3RhbmdsZSh2ZWMyIHN0LHZlYzIgYmwsIHZlYzIgdHIpIHtcXG4gICAgdmVjMiBibHYgPSBzdGVwKGJsLCBzdCk7XFxuICAgIHZlYzIgdHJ2ID0gc3RlcCh2ZWMyKDEuMCktdHIsIDEuMC1zdCk7XFxuICAgIHJldHVybiBibHYueCpibHYueSAqIHRydi54KnRydi55O1xcbn1cXG5cXG5mbG9hdCBzbW9vdGhSZWN0YW5nbGUodmVjMiBzdCx2ZWMyIGJsLCB2ZWMyIHRyLCBmbG9hdCB3KSB7XFxuICAgIHZlYzIgYmx2ID0gc21vb3Roc3RlcChibCwgYmwrdmVjMih3KSwgc3QpO1xcbiAgICB2ZWMyIHRydiA9IHNtb290aHN0ZXAodmVjMigxLjApLXRyLCB2ZWMyKDEuMCktdHIrdmVjMih3KSwgMS4wLXN0KTtcXG4gICAgcmV0dXJuIGJsdi54KmJsdi55ICogdHJ2LngqdHJ2Lnk7XFxufVxcblxcbmZsb2F0IHNtb290aENpcmNsZSh2ZWMyIHN0LCB2ZWMyIGMsIGZsb2F0IHIsIGZsb2F0IHcpIHtcXG4gICAgZmxvYXQgZCA9IGxlbmd0aChzdCAtIGMpO1xcbiAgICByZXR1cm4gc21vb3Roc3RlcChyK3csci13LGQpO1xcbn1cXG5cXG5mbG9hdCBwb2x5Z29uKHZlYzIgc3QsIHZlYzIgYywgZmxvYXQgciwgaW50IE4pIHtcXG4gICBcXHRmbG9hdCBhID0gYXRhbihzdC55LHN0LngpO1xcbiAgIFxcdGZsb2F0IHMgPSBQSSoyLjAvZmxvYXQoTik7XFxuICAgXFx0ZmxvYXQgZCA9ICBjb3MoZmxvb3IoLjUrYS9zKSAqIHMgLSBhKSAqIGRpc3RhbmNlKHN0LGMpICogMi4wO1xcbiAgICByZXR1cm4gMS4wLXNtb290aHN0ZXAoci0wLjAxLHIsZCk7XFxufVxcblxcbm1hdDIgcm90YXRlMmQoZmxvYXQgYSkge1xcbiAgICByZXR1cm4gbWF0Mihjb3MoYSksIC1zaW4oYSksIHNpbihhKSwgY29zKGEpKTtcXG59XFxuXFxudmVjMiByYW5kb20yKHZlYzIgc3Qpe1xcbiAgICBzdCA9IHZlYzIoIGRvdChzdCx2ZWMyKDEyNy4xLDMxMS43KSksIGRvdChzdCx2ZWMyKDI2OS41LDE4My4zKSkgKTtcXG4gICAgcmV0dXJuIGZyYWN0KHNpbihzdCkqNDM3NTguNTQ1MzEyMyk7XFxufVxcblxcbmZsb2F0IHJhbmRvbTJmKHZlYzIgc3Qpe1xcbiAgICBmbG9hdCB2ID0gZG90KCBkb3Qoc3QsdmVjMigxMjcuMSwzMTEuNykpLCBkb3Qoc3QsdmVjMigyNjkuNSwxODMuMykpICk7XFxuICAgIHJldHVybiBmcmFjdChzaW4odikqNDM3NTguNTQ1MzEyMyk7XFxufVxcblxcbnZlYzIgcmFuZG9tMmEodmVjMiBzdCl7XFxuICAgIHN0ID0gdmVjMiggZG90KHN0LHZlYzIoMTI3LjEsMzExLjcpKSxcXG4gICAgICAgICAgICAgIGRvdChzdCx2ZWMyKDI2OS41LDE4My4zKSkgKTtcXG4gICAgcmV0dXJuIC0xLjAgKyAyLjAqZnJhY3Qoc2luKHN0KSo0Mzc1OC41NDUzMTIzKTtcXG59XFxuXFxudmVjMyByYW5kb20zYSh2ZWMzIHN0KXtcXG4gICAgc3QgPSB2ZWMzKCBkb3Qoc3QsdmVjMygxMjcuMSwzMTEuNywxMjMuNikpLFxcbiAgICAgICAgICAgICAgIGRvdChzdCx2ZWMzKDI2OS41LDE4My4zLDk3LjEpKSxcXG4gICAgICAgICAgICAgICAgZG90KHN0LHZlYzMoMTQ2Ljg3LDI0NS4xMiw0OC43KSlcXG4gICAgICAgICAgICAgICAgKTtcXG4gICAgcmV0dXJuIC0xLjAgKyAyLjAqZnJhY3Qoc2luKHN0KSo0Mzc1OC41NDUzMTIzKTtcXG59XFxuXFxuZmxvYXQgbm9pc2UoaW4gdmVjMiBwKSB7XFxuXFxuICAgIHZlYzIgaSA9IGZsb29yKHApO1xcbiAgICB2ZWMyIGYgPSBmcmFjdChwKTtcXG5cXG4gICAgdmVjMiB1ID0gZipmKigzLjAtMi4wKmYpO1xcblxcbiAgICByZXR1cm4gbWl4KCBtaXgoIGRvdCggcmFuZG9tMmEoaSArIHZlYzIoMC4wLDAuMCkgKSwgZiAtIHZlYzIoMC4wLDAuMCkgKSxcXG4gICAgICAgICAgICAgICAgICAgICBkb3QoIHJhbmRvbTJhKGkgKyB2ZWMyKDEuMCwwLjApICksIGYgLSB2ZWMyKDEuMCwwLjApICksIHUueCksXFxuICAgICAgICAgICAgICAgIG1peCggZG90KCByYW5kb20yYShpICsgdmVjMigwLjAsMS4wKSApLCBmIC0gdmVjMigwLjAsMS4wKSApLFxcbiAgICAgICAgICAgICAgICAgICAgIGRvdCggcmFuZG9tMmEoaSArIHZlYzIoMS4wLDEuMCkgKSwgZiAtIHZlYzIoMS4wLDEuMCkgKSwgdS54KSwgdS55KTtcXG5cXG5cXG59XFxuXFxuZmxvYXQgbm9pc2UoaW4gdmVjMyBwKSB7XFxuXFxuICAgIHZlYzMgaSA9IGZsb29yKHApO1xcbiAgICB2ZWMzIGYgPSBmcmFjdChwKTtcXG5cXG4gICAgdmVjMyB1ID0gZipmKigzLjAtMi4wKmYpO1xcblxcbiAgICAgICAgcmV0dXJuIG1peChcXG4gICAgICAgICAgICAgICAgbWl4KFxcbiAgICAgICAgICAgICAgICAgICAgbWl4KFxcbiAgICAgICAgICAgICAgICAgICAgICAgIGRvdCggcmFuZG9tM2EoaSArIHZlYzMoMC4wLDAuMCwwLjApICksIGYgLSB2ZWMzKDAuMCwwLjAsMC4wKSApLFxcbiAgICAgICAgICAgICAgICAgICAgICAgIGRvdCggcmFuZG9tM2EoaSArIHZlYzMoMS4wLDAuMCwwLjApICksIGYgLSB2ZWMzKDEuMCwwLjAsMC4wKSApLFxcbiAgICAgICAgICAgICAgICAgICAgICAgIHUueCksXFxuICAgICAgICAgICAgICAgICAgICBtaXgoXFxuICAgICAgICAgICAgICAgICAgICAgICAgZG90KCByYW5kb20zYShpICsgdmVjMygwLjAsMS4wLDAuMCkgKSwgZiAtIHZlYzMoMC4wLDEuMCwwLjApICksXFxuICAgICAgICAgICAgICAgICAgICAgICAgZG90KCByYW5kb20zYShpICsgdmVjMygxLjAsMS4wLDAuMCkgKSwgZiAtIHZlYzMoMS4wLDEuMCwwLjApICksXFxuICAgICAgICAgICAgICAgICAgICAgICAgdS54KSxcXG4gICAgICAgICAgICAgICAgICAgIHUueSksXFxuICAgICAgICAgICAgICAgIG1peChcXG4gICAgICAgICAgICAgICAgICAgIG1peChcXG4gICAgICAgICAgICAgICAgICAgICAgICBkb3QoIHJhbmRvbTNhKGkgKyB2ZWMzKDAuMCwwLjAsMS4wKSApLCBmIC0gdmVjMygwLjAsMC4wLDEuMCkgKSxcXG4gICAgICAgICAgICAgICAgICAgICAgICBkb3QoIHJhbmRvbTNhKGkgKyB2ZWMzKDEuMCwwLjAsMS4wKSApLCBmIC0gdmVjMygxLjAsMC4wLDEuMCkgKSxcXG4gICAgICAgICAgICAgICAgICAgICAgICB1LngpLFxcbiAgICAgICAgICAgICAgICAgICAgbWl4KFxcbiAgICAgICAgICAgICAgICAgICAgICAgIGRvdCggcmFuZG9tM2EoaSArIHZlYzMoMC4wLDEuMCwxLjApICksIGYgLSB2ZWMzKDAuMCwxLjAsMS4wKSApLFxcbiAgICAgICAgICAgICAgICAgICAgICAgIGRvdCggcmFuZG9tM2EoaSArIHZlYzMoMS4wLDEuMCwxLjApICksIGYgLSB2ZWMzKDEuMCwxLjAsMS4wKSApLFxcbiAgICAgICAgICAgICAgICAgICAgICAgIHUueCksXFxuICAgICAgICAgICAgICAgICAgICB1LnkpLFxcbiAgICAgICAgICAgICAgICB1LnpcXG4gICAgICAgICAgICAgICApO1xcbn1cXG5cXG5mbG9hdCB1c25vaXNlKHZlYzMgcCkge1xcbiAgICByZXR1cm4gKG5vaXNlKHApICsgMS4wKSAvMi4wO1xcbn1cXG5cXG5mbG9hdCBjZWxsTm9pc2UodmVjMiBwKSB7XFxuICAgIHZlYzIgaSA9IGZsb29yKHApO1xcbiAgICB2ZWMyIGYgPSBmcmFjdChwKTtcXG5cXG4gICAgZmxvYXQgbV9kaXN0ID0gMS4wO1xcblxcbiAgICBmb3IoaW50IHk9LTE7IHk8PTE7IHkrKykge1xcbiAgICAgICAgZm9yKGludCB4PS0xOyB4PD0xOyB4KyspIHtcXG4gICAgICAgICAgICB2ZWMyIG5laWdoYm91cj12ZWMyKGZsb2F0KHgpLCBmbG9hdCh5KSk7XFxuICAgICAgICAgICAgdmVjMiBwb2ludCA9IHJhbmRvbTIoaSArIG5laWdoYm91cik7XFxuXFxuICAgICAgICAgICAgdmVjMiBkaWZmPSBuZWlnaGJvdXIgKyBwb2ludCAtIGY7XFxuICAgICAgICAgICAgZmxvYXQgZGlzdCA9IGxlbmd0aChkaWZmKTtcXG4gICAgICAgICAgICBtX2Rpc3QgPSBtaW4obV9kaXN0LGRpc3QpO1xcbiAgICAgICAgfVxcbiAgICB9XFxuXFxuICAgIHJldHVybiBtX2Rpc3Q7XFxufVxcblxcblxcbnZlYzMgdmVyb25pTm9pc2UodmVjMiBzdCkge1xcbiAgICB2ZWMyIHAgPSBmbG9vcihzdCk7XFxuICAgIHZlYzIgZiA9IGZyYWN0KHN0KTtcXG5cXG4gICAgZmxvYXQgcmVzID0gMi4wO1xcbiAgICB2ZWMyIG1fcG9pbnQ9dmVjMigxLjAsIDEuMCksXFxuICAgICAgICBtcj12ZWMyKDAsMCksXFxuICAgICAgICBtYiA9IHZlYzIoMCwwKTtcXG5cXG4gICAgZm9yKGludCBqPS0xOyBqPD0xOyBqKyspIHtcXG4gICAgICAgIGZvcihpbnQgaT0tMTsgaTw9MTsgaSsrKSB7XFxuICAgICAgICAgICAgdmVjMiBiPXZlYzIoZmxvYXQoaSksIGZsb2F0KGopKTtcXG4gICAgICAgICAgICB2ZWMyIHBvaW50ID0gcCArIGI7XFxuICAgICAgICAgICAgdmVjMiByID0gYiArIHJhbmRvbTIocG9pbnQpIC0gZjtcXG5cXG4gICAgICAgICAgICBmbG9hdCBkID0gZG90KHIscik7XFxuICAgICAgICAgICAgaWYgKGQgPCByZXMpIHtcXG4gICAgICAgICAgICAgICAgcmVzID0gZDtcXG4gICAgICAgICAgICAgICAgbV9wb2ludCA9IHBvaW50O1xcbiAgICAgICAgICAgICAgICBtcj1yO1xcbiAgICAgICAgICAgICAgICBtYj1iO1xcbiAgICAgICAgICAgIH1cXG4gICAgICAgIH1cXG4gICAgfVxcblxcbiAgICByZXMgPSA4LjA7XFxuICAgIGZvcihpbnQgaj0tMjsgajw9MjsgKytqKSB7XFxuICAgICAgICBmb3IoaW50IGk9LTI7IGk8PTI7ICsraSkge1xcblxcbiAgICAgICAgICAgIHZlYzIgYiA9IG1iICsgdmVjMihmbG9hdChpKSxmbG9hdChqKSk7XFxuXFxuICAgICAgICAgICAgdmVjMiByID0gYiArIHJhbmRvbTIocCArIGIpIC0gZjtcXG5cXG4gICAgICAgICAgICBmbG9hdCBkID0gZG90KDAuNSAqIChtcityKSwgbm9ybWFsaXplKHIgLSBtcikpO1xcblxcbiAgICAgICAgICAgIHJlcyA9IG1pbihyZXMsIGQpO1xcblxcbiAgICAgICAgfVxcbiAgICB9XFxuXFxuICAgIHJldHVybiB2ZWMzKG1fcG9pbnQueHksIHJlcyk7XFxufVxcblxcbmNvbnN0IGludCBvY3RhdmVzID0gNDtcXG5cXG5mbG9hdCBmYm0odmVjMiBwLCBmbG9hdCBILCBmbG9hdCBsYWN1bmFyaXR5KSB7XFxuICAgIGZsb2F0IHZhbHVlLCBmcmVxdWVuY3k7XFxuICAgIGZsb2F0IGV4cG9uZW50O1xcblxcbiAgICB2YWx1ZSA9IDAuMDtcXG4gICAgZnJlcXVlbmN5ID0gMS4wO1xcblxcbiAgICBmb3IoaW50IGk9MDsgaTxvY3RhdmVzOyArK2kpIHtcXG5cXG4gICAgICAgIGV4cG9uZW50ID0gcG93KGZyZXF1ZW5jeSwgLUgpO1xcblxcbiAgICAgICAgdmFsdWU9dmFsdWUgKyAobm9pc2UocCkgKiBleHBvbmVudCk7XFxuXFxuICAgICAgICBwPXAqbGFjdW5hcml0eTtcXG5cXG4gICAgICAgIGZyZXF1ZW5jeT1mcmVxdWVuY3kgKiBsYWN1bmFyaXR5O1xcbiAgICB9XFxuXFxuICAgIHJldHVybiB2YWx1ZTtcXG59XFxuXFxuZmxvYXQgZmJtKHZlYzMgcCwgZmxvYXQgSCwgZmxvYXQgbGFjdW5hcml0eSkge1xcbiAgICBmbG9hdCB2YWx1ZSwgZnJlcXVlbmN5O1xcbiAgICBmbG9hdCBleHBvbmVudDtcXG5cXG4gICAgdmFsdWUgPSAwLjA7XFxuICAgIGZyZXF1ZW5jeSA9IDEuMDtcXG5cXG4gICAgZm9yKGludCBpPTA7IGk8b2N0YXZlczsgKytpKSB7XFxuXFxuICAgICAgICBleHBvbmVudCA9IHBvdyhmcmVxdWVuY3ksIC1IKTtcXG5cXG4gICAgICAgIHZhbHVlPXZhbHVlICsgKG5vaXNlKHApICogZXhwb25lbnQpO1xcblxcbiAgICAgICAgcD1wKmxhY3VuYXJpdHk7XFxuXFxuICAgICAgICBmcmVxdWVuY3k9ZnJlcXVlbmN5ICogbGFjdW5hcml0eTtcXG4gICAgfVxcblxcbiAgICByZXR1cm4gdmFsdWU7XFxufVxcblxcbmZsb2F0IHJpZGdlZE11bHRpZnJhY3RhbCh2ZWMzIHAsIGZsb2F0IEgsIGZsb2F0IGxhY3VuYXJpdHksIGZsb2F0IG9mZnNldCkge1xcbiAgICBmbG9hdCByZXN1bHQsIGZyZXF1ZW5jeSwgcmVtYWluZGVyO1xcbiAgICBmbG9hdCB3ZWlnaHQsIHNpZ25hbCwgZXhwb25lbnQ7XFxuXFxuICAgIGZsb2F0IGdhaW4gPSAyLjA7XFxuXFxuICAgIHJlc3VsdCA9IDEuMDtcXG4gICAgZnJlcXVlbmN5ID0gMS4wO1xcblxcbiAgICBzaWduYWwgPSBub2lzZShwKTtcXG4gICAgaWYgKHNpZ25hbCA8IDAuMCkgc2lnbmFsID0gLXNpZ25hbDtcXG4gICAgc2lnbmFsID0gb2Zmc2V0LXNpZ25hbDtcXG4gICAgc2lnbmFsICo9c2lnbmFsO1xcbiAgICByZXN1bHQgPSBzaWduYWw7XFxuICAgIHdlaWdodCA9IDEuMDtcXG5cXG5cXG4gICAgZm9yKGludCBpPTE7IGk8b2N0YXZlczsgKytpKSB7XFxuICAgICAgICBmcmVxdWVuY3k9ZnJlcXVlbmN5KmxhY3VuYXJpdHk7XFxuICAgICAgICBwPXAqbGFjdW5hcml0eTtcXG5cXG4gICAgICAgIHdlaWdodCA9IHNpZ25hbCAqIGdhaW47XFxuICAgICAgICBpZiAod2VpZ2h0PjEuMCkgd2VpZ2h0PTEuMDtcXG4gICAgICAgIGlmICh3ZWlnaHQgPCAwLjAgKSB3ZWlnaHQ9IDAuMDtcXG5cXG4gICAgICAgIHNpZ25hbCA9IG5vaXNlKHApO1xcblxcbiAgICAgICAgaWYgKHNpZ25hbCA8MC4wKSBzaWduYWwgPSAtc2lnbmFsO1xcbiAgICAgICAgc2lnbmFsID0gb2Zmc2V0IC0gc2lnbmFsO1xcbiAgICAgICAgc2lnbmFsICo9c2lnbmFsO1xcbiAgICAgICAgc2lnbmFsICo9d2VpZ2h0O1xcbiAgICAgICAgcmVzdWx0ICs9IHNpZ25hbCAqIHBvdyhmcmVxdWVuY3ksLUgpO1xcblxcbiAgICB9XFxuXFxuICAgIHJldHVybiByZXN1bHQ7XFxufVxcblxcbnVuaWZvcm0gdmVjMiB1X3Jlc29sdXRpb247XFxudW5pZm9ybSB2ZWMyIHVfbW91c2U7XFxudW5pZm9ybSBmbG9hdCB1X3RpbWU7XFxuXFxuXFxudmVjMyBmaXJlKHZlYzIgcCkge1xcblxcbiAgICBmbG9hdCB2O1xcblxcbiAgICBmbG9hdCB2c2NhbGUgPSBwLnkrMS4wO1xcbiAgICB2c2NhbGU9dnNjYWxlKnZzY2FsZTtcXG5cXG4gICAgdmVjMyBwcCA9IHZlYzMocCo1LjAsIHVfdGltZS8wLjc1KTtcXG4gICAgcHAueSA9IHBwLnkgKyB1X3RpbWUgKiAyLjA7XFxuXFxuICAgIHY9IHJpZGdlZE11bHRpZnJhY3RhbChwcCwgMC4yNSwgMi4xLCAwLjcpXFxuICAgICAgICAqIHZzY2FsZVxcbiAgICAgICAgKyAocC55IC8gMS4wKTtcXG5cXG4gICAgdmVjMyBjb2xvcjtcXG5cXG4gICAgY29sb3IgPVxcbiAgICAgICAgKHNtb290aHN0ZXAoMC4wLCAwLjMsIHYpICogdmVjMygxLDAsMCkpXFxuICAgICAgICArIChzbW9vdGhzdGVwKDAuMywgMC42LCB2KSAqIHZlYzMoMSwwLDApKVxcbiAgICAgICAgKyAoc21vb3Roc3RlcCgwLjYsIDEuMCwgdikgKiB2ZWMzKDAsMSwwKSlcXG4gICAgICAgIDtcXG5cXG5cXG4gICAgcmV0dXJuIGNvbG9yO1xcblxcbn1cXG5cXG52b2lkIG1haW4oKSB7XFxuXFx0dmVjMiBzdCA9IGdsX0ZyYWdDb29yZC54eS91X3Jlc29sdXRpb247XFxuXFxuXFx0c3Q9dmVjMigwLjUpIC0gc3Q7XFxuXFxuICAgIGdsX0ZyYWdDb2xvcj12ZWM0KGZpcmUoc3QpLCAwKTtcXG5cXG59XCJcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9zaGFkZXJzL2ZpcmUuZ2xzbFxuLy8gbW9kdWxlIGlkID0gMTZcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLy8gc3R5bGUtbG9hZGVyOiBBZGRzIHNvbWUgY3NzIHRvIHRoZSBET00gYnkgYWRkaW5nIGEgPHN0eWxlPiB0YWdcblxuLy8gbG9hZCB0aGUgc3R5bGVzXG52YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzIS4vc3R5bGVzLmNzc1wiKTtcbmlmKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuLy8gUHJlcGFyZSBjc3NUcmFuc2Zvcm1hdGlvblxudmFyIHRyYW5zZm9ybTtcblxudmFyIG9wdGlvbnMgPSB7XCJobXJcIjp0cnVlfVxub3B0aW9ucy50cmFuc2Zvcm0gPSB0cmFuc2Zvcm1cbi8vIGFkZCB0aGUgc3R5bGVzIHRvIHRoZSBET01cbnZhciB1cGRhdGUgPSByZXF1aXJlKFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvbGliL2FkZFN0eWxlcy5qc1wiKShjb250ZW50LCBvcHRpb25zKTtcbmlmKGNvbnRlbnQubG9jYWxzKSBtb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzO1xuLy8gSG90IE1vZHVsZSBSZXBsYWNlbWVudFxuaWYobW9kdWxlLmhvdCkge1xuXHQvLyBXaGVuIHRoZSBzdHlsZXMgY2hhbmdlLCB1cGRhdGUgdGhlIDxzdHlsZT4gdGFnc1xuXHRpZighY29udGVudC5sb2NhbHMpIHtcblx0XHRtb2R1bGUuaG90LmFjY2VwdChcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhLi9zdHlsZXMuY3NzXCIsIGZ1bmN0aW9uKCkge1xuXHRcdFx0dmFyIG5ld0NvbnRlbnQgPSByZXF1aXJlKFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuL3N0eWxlcy5jc3NcIik7XG5cdFx0XHRpZih0eXBlb2YgbmV3Q29udGVudCA9PT0gJ3N0cmluZycpIG5ld0NvbnRlbnQgPSBbW21vZHVsZS5pZCwgbmV3Q29udGVudCwgJyddXTtcblx0XHRcdHVwZGF0ZShuZXdDb250ZW50KTtcblx0XHR9KTtcblx0fVxuXHQvLyBXaGVuIHRoZSBtb2R1bGUgaXMgZGlzcG9zZWQsIHJlbW92ZSB0aGUgPHN0eWxlPiB0YWdzXG5cdG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHsgdXBkYXRlKCk7IH0pO1xufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL3N0eWxlcy5jc3Ncbi8vIG1vZHVsZSBpZCA9IDE3XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanNcIikodW5kZWZpbmVkKTtcbi8vIGltcG9ydHNcblxuXG4vLyBtb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIlxcbmh0bWwge1xcbiAgICBjb2xvcjogd2hpdGU7XFxufVwiLCBcIlwiXSk7XG5cbi8vIGV4cG9ydHNcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIhLi9zcmMvc3R5bGVzLmNzc1xuLy8gbW9kdWxlIGlkID0gMThcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLypcblx0TUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcblx0QXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbi8vIGNzcyBiYXNlIGNvZGUsIGluamVjdGVkIGJ5IHRoZSBjc3MtbG9hZGVyXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKHVzZVNvdXJjZU1hcCkge1xuXHR2YXIgbGlzdCA9IFtdO1xuXG5cdC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblx0bGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuXHRcdHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuXHRcdFx0dmFyIGNvbnRlbnQgPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0sIHVzZVNvdXJjZU1hcCk7XG5cdFx0XHRpZihpdGVtWzJdKSB7XG5cdFx0XHRcdHJldHVybiBcIkBtZWRpYSBcIiArIGl0ZW1bMl0gKyBcIntcIiArIGNvbnRlbnQgKyBcIn1cIjtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdHJldHVybiBjb250ZW50O1xuXHRcdFx0fVxuXHRcdH0pLmpvaW4oXCJcIik7XG5cdH07XG5cblx0Ly8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3Rcblx0bGlzdC5pID0gZnVuY3Rpb24obW9kdWxlcywgbWVkaWFRdWVyeSkge1xuXHRcdGlmKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKVxuXHRcdFx0bW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgXCJcIl1dO1xuXHRcdHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cdFx0Zm9yKHZhciBpID0gMDsgaSA8IHRoaXMubGVuZ3RoOyBpKyspIHtcblx0XHRcdHZhciBpZCA9IHRoaXNbaV1bMF07XG5cdFx0XHRpZih0eXBlb2YgaWQgPT09IFwibnVtYmVyXCIpXG5cdFx0XHRcdGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcblx0XHR9XG5cdFx0Zm9yKGkgPSAwOyBpIDwgbW9kdWxlcy5sZW5ndGg7IGkrKykge1xuXHRcdFx0dmFyIGl0ZW0gPSBtb2R1bGVzW2ldO1xuXHRcdFx0Ly8gc2tpcCBhbHJlYWR5IGltcG9ydGVkIG1vZHVsZVxuXHRcdFx0Ly8gdGhpcyBpbXBsZW1lbnRhdGlvbiBpcyBub3QgMTAwJSBwZXJmZWN0IGZvciB3ZWlyZCBtZWRpYSBxdWVyeSBjb21iaW5hdGlvbnNcblx0XHRcdC8vICB3aGVuIGEgbW9kdWxlIGlzIGltcG9ydGVkIG11bHRpcGxlIHRpbWVzIHdpdGggZGlmZmVyZW50IG1lZGlhIHF1ZXJpZXMuXG5cdFx0XHQvLyAgSSBob3BlIHRoaXMgd2lsbCBuZXZlciBvY2N1ciAoSGV5IHRoaXMgd2F5IHdlIGhhdmUgc21hbGxlciBidW5kbGVzKVxuXHRcdFx0aWYodHlwZW9mIGl0ZW1bMF0gIT09IFwibnVtYmVyXCIgfHwgIWFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcblx0XHRcdFx0aWYobWVkaWFRdWVyeSAmJiAhaXRlbVsyXSkge1xuXHRcdFx0XHRcdGl0ZW1bMl0gPSBtZWRpYVF1ZXJ5O1xuXHRcdFx0XHR9IGVsc2UgaWYobWVkaWFRdWVyeSkge1xuXHRcdFx0XHRcdGl0ZW1bMl0gPSBcIihcIiArIGl0ZW1bMl0gKyBcIikgYW5kIChcIiArIG1lZGlhUXVlcnkgKyBcIilcIjtcblx0XHRcdFx0fVxuXHRcdFx0XHRsaXN0LnB1c2goaXRlbSk7XG5cdFx0XHR9XG5cdFx0fVxuXHR9O1xuXHRyZXR1cm4gbGlzdDtcbn07XG5cbmZ1bmN0aW9uIGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSwgdXNlU291cmNlTWFwKSB7XG5cdHZhciBjb250ZW50ID0gaXRlbVsxXSB8fCAnJztcblx0dmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuXHRpZiAoIWNzc01hcHBpbmcpIHtcblx0XHRyZXR1cm4gY29udGVudDtcblx0fVxuXG5cdGlmICh1c2VTb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgPT09ICdmdW5jdGlvbicpIHtcblx0XHR2YXIgc291cmNlTWFwcGluZyA9IHRvQ29tbWVudChjc3NNYXBwaW5nKTtcblx0XHR2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuXHRcdFx0cmV0dXJuICcvKiMgc291cmNlVVJMPScgKyBjc3NNYXBwaW5nLnNvdXJjZVJvb3QgKyBzb3VyY2UgKyAnICovJ1xuXHRcdH0pO1xuXG5cdFx0cmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbignXFxuJyk7XG5cdH1cblxuXHRyZXR1cm4gW2NvbnRlbnRdLmpvaW4oJ1xcbicpO1xufVxuXG4vLyBBZGFwdGVkIGZyb20gY29udmVydC1zb3VyY2UtbWFwIChNSVQpXG5mdW5jdGlvbiB0b0NvbW1lbnQoc291cmNlTWFwKSB7XG5cdC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bmRlZlxuXHR2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKTtcblx0dmFyIGRhdGEgPSAnc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsJyArIGJhc2U2NDtcblxuXHRyZXR1cm4gJy8qIyAnICsgZGF0YSArICcgKi8nO1xufVxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanNcbi8vIG1vZHVsZSBpZCA9IDE5XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8qXG5cdE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG5cdEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5cbnZhciBzdHlsZXNJbkRvbSA9IHt9O1xuXG52YXJcdG1lbW9pemUgPSBmdW5jdGlvbiAoZm4pIHtcblx0dmFyIG1lbW87XG5cblx0cmV0dXJuIGZ1bmN0aW9uICgpIHtcblx0XHRpZiAodHlwZW9mIG1lbW8gPT09IFwidW5kZWZpbmVkXCIpIG1lbW8gPSBmbi5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuXHRcdHJldHVybiBtZW1vO1xuXHR9O1xufTtcblxudmFyIGlzT2xkSUUgPSBtZW1vaXplKGZ1bmN0aW9uICgpIHtcblx0Ly8gVGVzdCBmb3IgSUUgPD0gOSBhcyBwcm9wb3NlZCBieSBCcm93c2VyaGFja3Ncblx0Ly8gQHNlZSBodHRwOi8vYnJvd3NlcmhhY2tzLmNvbS8jaGFjay1lNzFkODY5MmY2NTMzNDE3M2ZlZTcxNWMyMjJjYjgwNVxuXHQvLyBUZXN0cyBmb3IgZXhpc3RlbmNlIG9mIHN0YW5kYXJkIGdsb2JhbHMgaXMgdG8gYWxsb3cgc3R5bGUtbG9hZGVyXG5cdC8vIHRvIG9wZXJhdGUgY29ycmVjdGx5IGludG8gbm9uLXN0YW5kYXJkIGVudmlyb25tZW50c1xuXHQvLyBAc2VlIGh0dHBzOi8vZ2l0aHViLmNvbS93ZWJwYWNrLWNvbnRyaWIvc3R5bGUtbG9hZGVyL2lzc3Vlcy8xNzdcblx0cmV0dXJuIHdpbmRvdyAmJiBkb2N1bWVudCAmJiBkb2N1bWVudC5hbGwgJiYgIXdpbmRvdy5hdG9iO1xufSk7XG5cbnZhciBnZXRFbGVtZW50ID0gKGZ1bmN0aW9uIChmbikge1xuXHR2YXIgbWVtbyA9IHt9O1xuXG5cdHJldHVybiBmdW5jdGlvbihzZWxlY3Rvcikge1xuXHRcdGlmICh0eXBlb2YgbWVtb1tzZWxlY3Rvcl0gPT09IFwidW5kZWZpbmVkXCIpIHtcblx0XHRcdHZhciBzdHlsZVRhcmdldCA9IGZuLmNhbGwodGhpcywgc2VsZWN0b3IpO1xuXHRcdFx0Ly8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblx0XHRcdGlmIChzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuXHRcdFx0XHR0cnkge1xuXHRcdFx0XHRcdC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG5cdFx0XHRcdFx0Ly8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcblx0XHRcdFx0XHRzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuXHRcdFx0XHR9IGNhdGNoKGUpIHtcblx0XHRcdFx0XHRzdHlsZVRhcmdldCA9IG51bGw7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHRcdG1lbW9bc2VsZWN0b3JdID0gc3R5bGVUYXJnZXQ7XG5cdFx0fVxuXHRcdHJldHVybiBtZW1vW3NlbGVjdG9yXVxuXHR9O1xufSkoZnVuY3Rpb24gKHRhcmdldCkge1xuXHRyZXR1cm4gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpXG59KTtcblxudmFyIHNpbmdsZXRvbiA9IG51bGw7XG52YXJcdHNpbmdsZXRvbkNvdW50ZXIgPSAwO1xudmFyXHRzdHlsZXNJbnNlcnRlZEF0VG9wID0gW107XG5cbnZhclx0Zml4VXJscyA9IHJlcXVpcmUoXCIuL3VybHNcIik7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24obGlzdCwgb3B0aW9ucykge1xuXHRpZiAodHlwZW9mIERFQlVHICE9PSBcInVuZGVmaW5lZFwiICYmIERFQlVHKSB7XG5cdFx0aWYgKHR5cGVvZiBkb2N1bWVudCAhPT0gXCJvYmplY3RcIikgdGhyb3cgbmV3IEVycm9yKFwiVGhlIHN0eWxlLWxvYWRlciBjYW5ub3QgYmUgdXNlZCBpbiBhIG5vbi1icm93c2VyIGVudmlyb25tZW50XCIpO1xuXHR9XG5cblx0b3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG5cblx0b3B0aW9ucy5hdHRycyA9IHR5cGVvZiBvcHRpb25zLmF0dHJzID09PSBcIm9iamVjdFwiID8gb3B0aW9ucy5hdHRycyA6IHt9O1xuXG5cdC8vIEZvcmNlIHNpbmdsZS10YWcgc29sdXRpb24gb24gSUU2LTksIHdoaWNoIGhhcyBhIGhhcmQgbGltaXQgb24gdGhlICMgb2YgPHN0eWxlPlxuXHQvLyB0YWdzIGl0IHdpbGwgYWxsb3cgb24gYSBwYWdlXG5cdGlmICghb3B0aW9ucy5zaW5nbGV0b24gJiYgdHlwZW9mIG9wdGlvbnMuc2luZ2xldG9uICE9PSBcImJvb2xlYW5cIikgb3B0aW9ucy5zaW5nbGV0b24gPSBpc09sZElFKCk7XG5cblx0Ly8gQnkgZGVmYXVsdCwgYWRkIDxzdHlsZT4gdGFncyB0byB0aGUgPGhlYWQ+IGVsZW1lbnRcblx0aWYgKCFvcHRpb25zLmluc2VydEludG8pIG9wdGlvbnMuaW5zZXJ0SW50byA9IFwiaGVhZFwiO1xuXG5cdC8vIEJ5IGRlZmF1bHQsIGFkZCA8c3R5bGU+IHRhZ3MgdG8gdGhlIGJvdHRvbSBvZiB0aGUgdGFyZ2V0XG5cdGlmICghb3B0aW9ucy5pbnNlcnRBdCkgb3B0aW9ucy5pbnNlcnRBdCA9IFwiYm90dG9tXCI7XG5cblx0dmFyIHN0eWxlcyA9IGxpc3RUb1N0eWxlcyhsaXN0LCBvcHRpb25zKTtcblxuXHRhZGRTdHlsZXNUb0RvbShzdHlsZXMsIG9wdGlvbnMpO1xuXG5cdHJldHVybiBmdW5jdGlvbiB1cGRhdGUgKG5ld0xpc3QpIHtcblx0XHR2YXIgbWF5UmVtb3ZlID0gW107XG5cblx0XHRmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlcy5sZW5ndGg7IGkrKykge1xuXHRcdFx0dmFyIGl0ZW0gPSBzdHlsZXNbaV07XG5cdFx0XHR2YXIgZG9tU3R5bGUgPSBzdHlsZXNJbkRvbVtpdGVtLmlkXTtcblxuXHRcdFx0ZG9tU3R5bGUucmVmcy0tO1xuXHRcdFx0bWF5UmVtb3ZlLnB1c2goZG9tU3R5bGUpO1xuXHRcdH1cblxuXHRcdGlmKG5ld0xpc3QpIHtcblx0XHRcdHZhciBuZXdTdHlsZXMgPSBsaXN0VG9TdHlsZXMobmV3TGlzdCwgb3B0aW9ucyk7XG5cdFx0XHRhZGRTdHlsZXNUb0RvbShuZXdTdHlsZXMsIG9wdGlvbnMpO1xuXHRcdH1cblxuXHRcdGZvciAodmFyIGkgPSAwOyBpIDwgbWF5UmVtb3ZlLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHR2YXIgZG9tU3R5bGUgPSBtYXlSZW1vdmVbaV07XG5cblx0XHRcdGlmKGRvbVN0eWxlLnJlZnMgPT09IDApIHtcblx0XHRcdFx0Zm9yICh2YXIgaiA9IDA7IGogPCBkb21TdHlsZS5wYXJ0cy5sZW5ndGg7IGorKykgZG9tU3R5bGUucGFydHNbal0oKTtcblxuXHRcdFx0XHRkZWxldGUgc3R5bGVzSW5Eb21bZG9tU3R5bGUuaWRdO1xuXHRcdFx0fVxuXHRcdH1cblx0fTtcbn07XG5cbmZ1bmN0aW9uIGFkZFN0eWxlc1RvRG9tIChzdHlsZXMsIG9wdGlvbnMpIHtcblx0Zm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXMubGVuZ3RoOyBpKyspIHtcblx0XHR2YXIgaXRlbSA9IHN0eWxlc1tpXTtcblx0XHR2YXIgZG9tU3R5bGUgPSBzdHlsZXNJbkRvbVtpdGVtLmlkXTtcblxuXHRcdGlmKGRvbVN0eWxlKSB7XG5cdFx0XHRkb21TdHlsZS5yZWZzKys7XG5cblx0XHRcdGZvcih2YXIgaiA9IDA7IGogPCBkb21TdHlsZS5wYXJ0cy5sZW5ndGg7IGorKykge1xuXHRcdFx0XHRkb21TdHlsZS5wYXJ0c1tqXShpdGVtLnBhcnRzW2pdKTtcblx0XHRcdH1cblxuXHRcdFx0Zm9yKDsgaiA8IGl0ZW0ucGFydHMubGVuZ3RoOyBqKyspIHtcblx0XHRcdFx0ZG9tU3R5bGUucGFydHMucHVzaChhZGRTdHlsZShpdGVtLnBhcnRzW2pdLCBvcHRpb25zKSk7XG5cdFx0XHR9XG5cdFx0fSBlbHNlIHtcblx0XHRcdHZhciBwYXJ0cyA9IFtdO1xuXG5cdFx0XHRmb3IodmFyIGogPSAwOyBqIDwgaXRlbS5wYXJ0cy5sZW5ndGg7IGorKykge1xuXHRcdFx0XHRwYXJ0cy5wdXNoKGFkZFN0eWxlKGl0ZW0ucGFydHNbal0sIG9wdGlvbnMpKTtcblx0XHRcdH1cblxuXHRcdFx0c3R5bGVzSW5Eb21baXRlbS5pZF0gPSB7aWQ6IGl0ZW0uaWQsIHJlZnM6IDEsIHBhcnRzOiBwYXJ0c307XG5cdFx0fVxuXHR9XG59XG5cbmZ1bmN0aW9uIGxpc3RUb1N0eWxlcyAobGlzdCwgb3B0aW9ucykge1xuXHR2YXIgc3R5bGVzID0gW107XG5cdHZhciBuZXdTdHlsZXMgPSB7fTtcblxuXHRmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcblx0XHR2YXIgaXRlbSA9IGxpc3RbaV07XG5cdFx0dmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG5cdFx0dmFyIGNzcyA9IGl0ZW1bMV07XG5cdFx0dmFyIG1lZGlhID0gaXRlbVsyXTtcblx0XHR2YXIgc291cmNlTWFwID0gaXRlbVszXTtcblx0XHR2YXIgcGFydCA9IHtjc3M6IGNzcywgbWVkaWE6IG1lZGlhLCBzb3VyY2VNYXA6IHNvdXJjZU1hcH07XG5cblx0XHRpZighbmV3U3R5bGVzW2lkXSkgc3R5bGVzLnB1c2gobmV3U3R5bGVzW2lkXSA9IHtpZDogaWQsIHBhcnRzOiBbcGFydF19KTtcblx0XHRlbHNlIG5ld1N0eWxlc1tpZF0ucGFydHMucHVzaChwYXJ0KTtcblx0fVxuXG5cdHJldHVybiBzdHlsZXM7XG59XG5cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudCAob3B0aW9ucywgc3R5bGUpIHtcblx0dmFyIHRhcmdldCA9IGdldEVsZW1lbnQob3B0aW9ucy5pbnNlcnRJbnRvKVxuXG5cdGlmICghdGFyZ2V0KSB7XG5cdFx0dGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnRJbnRvJyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG5cdH1cblxuXHR2YXIgbGFzdFN0eWxlRWxlbWVudEluc2VydGVkQXRUb3AgPSBzdHlsZXNJbnNlcnRlZEF0VG9wW3N0eWxlc0luc2VydGVkQXRUb3AubGVuZ3RoIC0gMV07XG5cblx0aWYgKG9wdGlvbnMuaW5zZXJ0QXQgPT09IFwidG9wXCIpIHtcblx0XHRpZiAoIWxhc3RTdHlsZUVsZW1lbnRJbnNlcnRlZEF0VG9wKSB7XG5cdFx0XHR0YXJnZXQuaW5zZXJ0QmVmb3JlKHN0eWxlLCB0YXJnZXQuZmlyc3RDaGlsZCk7XG5cdFx0fSBlbHNlIGlmIChsYXN0U3R5bGVFbGVtZW50SW5zZXJ0ZWRBdFRvcC5uZXh0U2libGluZykge1xuXHRcdFx0dGFyZ2V0Lmluc2VydEJlZm9yZShzdHlsZSwgbGFzdFN0eWxlRWxlbWVudEluc2VydGVkQXRUb3AubmV4dFNpYmxpbmcpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHR0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xuXHRcdH1cblx0XHRzdHlsZXNJbnNlcnRlZEF0VG9wLnB1c2goc3R5bGUpO1xuXHR9IGVsc2UgaWYgKG9wdGlvbnMuaW5zZXJ0QXQgPT09IFwiYm90dG9tXCIpIHtcblx0XHR0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xuXHR9IGVsc2UgaWYgKHR5cGVvZiBvcHRpb25zLmluc2VydEF0ID09PSBcIm9iamVjdFwiICYmIG9wdGlvbnMuaW5zZXJ0QXQuYmVmb3JlKSB7XG5cdFx0dmFyIG5leHRTaWJsaW5nID0gZ2V0RWxlbWVudChvcHRpb25zLmluc2VydEludG8gKyBcIiBcIiArIG9wdGlvbnMuaW5zZXJ0QXQuYmVmb3JlKTtcblx0XHR0YXJnZXQuaW5zZXJ0QmVmb3JlKHN0eWxlLCBuZXh0U2libGluZyk7XG5cdH0gZWxzZSB7XG5cdFx0dGhyb3cgbmV3IEVycm9yKFwiW1N0eWxlIExvYWRlcl1cXG5cXG4gSW52YWxpZCB2YWx1ZSBmb3IgcGFyYW1ldGVyICdpbnNlcnRBdCcgKCdvcHRpb25zLmluc2VydEF0JykgZm91bmQuXFxuIE11c3QgYmUgJ3RvcCcsICdib3R0b20nLCBvciBPYmplY3QuXFxuIChodHRwczovL2dpdGh1Yi5jb20vd2VicGFjay1jb250cmliL3N0eWxlLWxvYWRlciNpbnNlcnRhdClcXG5cIik7XG5cdH1cbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50IChzdHlsZSkge1xuXHRpZiAoc3R5bGUucGFyZW50Tm9kZSA9PT0gbnVsbCkgcmV0dXJuIGZhbHNlO1xuXHRzdHlsZS5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlKTtcblxuXHR2YXIgaWR4ID0gc3R5bGVzSW5zZXJ0ZWRBdFRvcC5pbmRleE9mKHN0eWxlKTtcblx0aWYoaWR4ID49IDApIHtcblx0XHRzdHlsZXNJbnNlcnRlZEF0VG9wLnNwbGljZShpZHgsIDEpO1xuXHR9XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZVN0eWxlRWxlbWVudCAob3B0aW9ucykge1xuXHR2YXIgc3R5bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG5cblx0b3B0aW9ucy5hdHRycy50eXBlID0gXCJ0ZXh0L2Nzc1wiO1xuXG5cdGFkZEF0dHJzKHN0eWxlLCBvcHRpb25zLmF0dHJzKTtcblx0aW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMsIHN0eWxlKTtcblxuXHRyZXR1cm4gc3R5bGU7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZUxpbmtFbGVtZW50IChvcHRpb25zKSB7XG5cdHZhciBsaW5rID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpbmtcIik7XG5cblx0b3B0aW9ucy5hdHRycy50eXBlID0gXCJ0ZXh0L2Nzc1wiO1xuXHRvcHRpb25zLmF0dHJzLnJlbCA9IFwic3R5bGVzaGVldFwiO1xuXG5cdGFkZEF0dHJzKGxpbmssIG9wdGlvbnMuYXR0cnMpO1xuXHRpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucywgbGluayk7XG5cblx0cmV0dXJuIGxpbms7XG59XG5cbmZ1bmN0aW9uIGFkZEF0dHJzIChlbCwgYXR0cnMpIHtcblx0T2JqZWN0LmtleXMoYXR0cnMpLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuXHRcdGVsLnNldEF0dHJpYnV0ZShrZXksIGF0dHJzW2tleV0pO1xuXHR9KTtcbn1cblxuZnVuY3Rpb24gYWRkU3R5bGUgKG9iaiwgb3B0aW9ucykge1xuXHR2YXIgc3R5bGUsIHVwZGF0ZSwgcmVtb3ZlLCByZXN1bHQ7XG5cblx0Ly8gSWYgYSB0cmFuc2Zvcm0gZnVuY3Rpb24gd2FzIGRlZmluZWQsIHJ1biBpdCBvbiB0aGUgY3NzXG5cdGlmIChvcHRpb25zLnRyYW5zZm9ybSAmJiBvYmouY3NzKSB7XG5cdCAgICByZXN1bHQgPSBvcHRpb25zLnRyYW5zZm9ybShvYmouY3NzKTtcblxuXHQgICAgaWYgKHJlc3VsdCkge1xuXHQgICAgXHQvLyBJZiB0cmFuc2Zvcm0gcmV0dXJucyBhIHZhbHVlLCB1c2UgdGhhdCBpbnN0ZWFkIG9mIHRoZSBvcmlnaW5hbCBjc3MuXG5cdCAgICBcdC8vIFRoaXMgYWxsb3dzIHJ1bm5pbmcgcnVudGltZSB0cmFuc2Zvcm1hdGlvbnMgb24gdGhlIGNzcy5cblx0ICAgIFx0b2JqLmNzcyA9IHJlc3VsdDtcblx0ICAgIH0gZWxzZSB7XG5cdCAgICBcdC8vIElmIHRoZSB0cmFuc2Zvcm0gZnVuY3Rpb24gcmV0dXJucyBhIGZhbHN5IHZhbHVlLCBkb24ndCBhZGQgdGhpcyBjc3MuXG5cdCAgICBcdC8vIFRoaXMgYWxsb3dzIGNvbmRpdGlvbmFsIGxvYWRpbmcgb2YgY3NzXG5cdCAgICBcdHJldHVybiBmdW5jdGlvbigpIHtcblx0ICAgIFx0XHQvLyBub29wXG5cdCAgICBcdH07XG5cdCAgICB9XG5cdH1cblxuXHRpZiAob3B0aW9ucy5zaW5nbGV0b24pIHtcblx0XHR2YXIgc3R5bGVJbmRleCA9IHNpbmdsZXRvbkNvdW50ZXIrKztcblxuXHRcdHN0eWxlID0gc2luZ2xldG9uIHx8IChzaW5nbGV0b24gPSBjcmVhdGVTdHlsZUVsZW1lbnQob3B0aW9ucykpO1xuXG5cdFx0dXBkYXRlID0gYXBwbHlUb1NpbmdsZXRvblRhZy5iaW5kKG51bGwsIHN0eWxlLCBzdHlsZUluZGV4LCBmYWxzZSk7XG5cdFx0cmVtb3ZlID0gYXBwbHlUb1NpbmdsZXRvblRhZy5iaW5kKG51bGwsIHN0eWxlLCBzdHlsZUluZGV4LCB0cnVlKTtcblxuXHR9IGVsc2UgaWYgKFxuXHRcdG9iai5zb3VyY2VNYXAgJiZcblx0XHR0eXBlb2YgVVJMID09PSBcImZ1bmN0aW9uXCIgJiZcblx0XHR0eXBlb2YgVVJMLmNyZWF0ZU9iamVjdFVSTCA9PT0gXCJmdW5jdGlvblwiICYmXG5cdFx0dHlwZW9mIFVSTC5yZXZva2VPYmplY3RVUkwgPT09IFwiZnVuY3Rpb25cIiAmJlxuXHRcdHR5cGVvZiBCbG9iID09PSBcImZ1bmN0aW9uXCIgJiZcblx0XHR0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiXG5cdCkge1xuXHRcdHN0eWxlID0gY3JlYXRlTGlua0VsZW1lbnQob3B0aW9ucyk7XG5cdFx0dXBkYXRlID0gdXBkYXRlTGluay5iaW5kKG51bGwsIHN0eWxlLCBvcHRpb25zKTtcblx0XHRyZW1vdmUgPSBmdW5jdGlvbiAoKSB7XG5cdFx0XHRyZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGUpO1xuXG5cdFx0XHRpZihzdHlsZS5ocmVmKSBVUkwucmV2b2tlT2JqZWN0VVJMKHN0eWxlLmhyZWYpO1xuXHRcdH07XG5cdH0gZWxzZSB7XG5cdFx0c3R5bGUgPSBjcmVhdGVTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG5cdFx0dXBkYXRlID0gYXBwbHlUb1RhZy5iaW5kKG51bGwsIHN0eWxlKTtcblx0XHRyZW1vdmUgPSBmdW5jdGlvbiAoKSB7XG5cdFx0XHRyZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGUpO1xuXHRcdH07XG5cdH1cblxuXHR1cGRhdGUob2JqKTtcblxuXHRyZXR1cm4gZnVuY3Rpb24gdXBkYXRlU3R5bGUgKG5ld09iaikge1xuXHRcdGlmIChuZXdPYmopIHtcblx0XHRcdGlmIChcblx0XHRcdFx0bmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJlxuXHRcdFx0XHRuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJlxuXHRcdFx0XHRuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwXG5cdFx0XHQpIHtcblx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0fVxuXG5cdFx0XHR1cGRhdGUob2JqID0gbmV3T2JqKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0cmVtb3ZlKCk7XG5cdFx0fVxuXHR9O1xufVxuXG52YXIgcmVwbGFjZVRleHQgPSAoZnVuY3Rpb24gKCkge1xuXHR2YXIgdGV4dFN0b3JlID0gW107XG5cblx0cmV0dXJuIGZ1bmN0aW9uIChpbmRleCwgcmVwbGFjZW1lbnQpIHtcblx0XHR0ZXh0U3RvcmVbaW5kZXhdID0gcmVwbGFjZW1lbnQ7XG5cblx0XHRyZXR1cm4gdGV4dFN0b3JlLmZpbHRlcihCb29sZWFuKS5qb2luKCdcXG4nKTtcblx0fTtcbn0pKCk7XG5cbmZ1bmN0aW9uIGFwcGx5VG9TaW5nbGV0b25UYWcgKHN0eWxlLCBpbmRleCwgcmVtb3ZlLCBvYmopIHtcblx0dmFyIGNzcyA9IHJlbW92ZSA/IFwiXCIgOiBvYmouY3NzO1xuXG5cdGlmIChzdHlsZS5zdHlsZVNoZWV0KSB7XG5cdFx0c3R5bGUuc3R5bGVTaGVldC5jc3NUZXh0ID0gcmVwbGFjZVRleHQoaW5kZXgsIGNzcyk7XG5cdH0gZWxzZSB7XG5cdFx0dmFyIGNzc05vZGUgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpO1xuXHRcdHZhciBjaGlsZE5vZGVzID0gc3R5bGUuY2hpbGROb2RlcztcblxuXHRcdGlmIChjaGlsZE5vZGVzW2luZGV4XSkgc3R5bGUucmVtb3ZlQ2hpbGQoY2hpbGROb2Rlc1tpbmRleF0pO1xuXG5cdFx0aWYgKGNoaWxkTm9kZXMubGVuZ3RoKSB7XG5cdFx0XHRzdHlsZS5pbnNlcnRCZWZvcmUoY3NzTm9kZSwgY2hpbGROb2Rlc1tpbmRleF0pO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRzdHlsZS5hcHBlbmRDaGlsZChjc3NOb2RlKTtcblx0XHR9XG5cdH1cbn1cblxuZnVuY3Rpb24gYXBwbHlUb1RhZyAoc3R5bGUsIG9iaikge1xuXHR2YXIgY3NzID0gb2JqLmNzcztcblx0dmFyIG1lZGlhID0gb2JqLm1lZGlhO1xuXG5cdGlmKG1lZGlhKSB7XG5cdFx0c3R5bGUuc2V0QXR0cmlidXRlKFwibWVkaWFcIiwgbWVkaWEpXG5cdH1cblxuXHRpZihzdHlsZS5zdHlsZVNoZWV0KSB7XG5cdFx0c3R5bGUuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuXHR9IGVsc2Uge1xuXHRcdHdoaWxlKHN0eWxlLmZpcnN0Q2hpbGQpIHtcblx0XHRcdHN0eWxlLnJlbW92ZUNoaWxkKHN0eWxlLmZpcnN0Q2hpbGQpO1xuXHRcdH1cblxuXHRcdHN0eWxlLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuXHR9XG59XG5cbmZ1bmN0aW9uIHVwZGF0ZUxpbmsgKGxpbmssIG9wdGlvbnMsIG9iaikge1xuXHR2YXIgY3NzID0gb2JqLmNzcztcblx0dmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cblx0Lypcblx0XHRJZiBjb252ZXJ0VG9BYnNvbHV0ZVVybHMgaXNuJ3QgZGVmaW5lZCwgYnV0IHNvdXJjZW1hcHMgYXJlIGVuYWJsZWRcblx0XHRhbmQgdGhlcmUgaXMgbm8gcHVibGljUGF0aCBkZWZpbmVkIHRoZW4gbGV0cyB0dXJuIGNvbnZlcnRUb0Fic29sdXRlVXJsc1xuXHRcdG9uIGJ5IGRlZmF1bHQuICBPdGhlcndpc2UgZGVmYXVsdCB0byB0aGUgY29udmVydFRvQWJzb2x1dGVVcmxzIG9wdGlvblxuXHRcdGRpcmVjdGx5XG5cdCovXG5cdHZhciBhdXRvRml4VXJscyA9IG9wdGlvbnMuY29udmVydFRvQWJzb2x1dGVVcmxzID09PSB1bmRlZmluZWQgJiYgc291cmNlTWFwO1xuXG5cdGlmIChvcHRpb25zLmNvbnZlcnRUb0Fic29sdXRlVXJscyB8fCBhdXRvRml4VXJscykge1xuXHRcdGNzcyA9IGZpeFVybHMoY3NzKTtcblx0fVxuXG5cdGlmIChzb3VyY2VNYXApIHtcblx0XHQvLyBodHRwOi8vc3RhY2tvdmVyZmxvdy5jb20vYS8yNjYwMzg3NVxuXHRcdGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIgKyBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpICsgXCIgKi9cIjtcblx0fVxuXG5cdHZhciBibG9iID0gbmV3IEJsb2IoW2Nzc10sIHsgdHlwZTogXCJ0ZXh0L2Nzc1wiIH0pO1xuXG5cdHZhciBvbGRTcmMgPSBsaW5rLmhyZWY7XG5cblx0bGluay5ocmVmID0gVVJMLmNyZWF0ZU9iamVjdFVSTChibG9iKTtcblxuXHRpZihvbGRTcmMpIFVSTC5yZXZva2VPYmplY3RVUkwob2xkU3JjKTtcbn1cblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9saWIvYWRkU3R5bGVzLmpzXG4vLyBtb2R1bGUgaWQgPSAyMFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJcbi8qKlxuICogV2hlbiBzb3VyY2UgbWFwcyBhcmUgZW5hYmxlZCwgYHN0eWxlLWxvYWRlcmAgdXNlcyBhIGxpbmsgZWxlbWVudCB3aXRoIGEgZGF0YS11cmkgdG9cbiAqIGVtYmVkIHRoZSBjc3Mgb24gdGhlIHBhZ2UuIFRoaXMgYnJlYWtzIGFsbCByZWxhdGl2ZSB1cmxzIGJlY2F1c2Ugbm93IHRoZXkgYXJlIHJlbGF0aXZlIHRvIGFcbiAqIGJ1bmRsZSBpbnN0ZWFkIG9mIHRoZSBjdXJyZW50IHBhZ2UuXG4gKlxuICogT25lIHNvbHV0aW9uIGlzIHRvIG9ubHkgdXNlIGZ1bGwgdXJscywgYnV0IHRoYXQgbWF5IGJlIGltcG9zc2libGUuXG4gKlxuICogSW5zdGVhZCwgdGhpcyBmdW5jdGlvbiBcImZpeGVzXCIgdGhlIHJlbGF0aXZlIHVybHMgdG8gYmUgYWJzb2x1dGUgYWNjb3JkaW5nIHRvIHRoZSBjdXJyZW50IHBhZ2UgbG9jYXRpb24uXG4gKlxuICogQSBydWRpbWVudGFyeSB0ZXN0IHN1aXRlIGlzIGxvY2F0ZWQgYXQgYHRlc3QvZml4VXJscy5qc2AgYW5kIGNhbiBiZSBydW4gdmlhIHRoZSBgbnBtIHRlc3RgIGNvbW1hbmQuXG4gKlxuICovXG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzcykge1xuICAvLyBnZXQgY3VycmVudCBsb2NhdGlvblxuICB2YXIgbG9jYXRpb24gPSB0eXBlb2Ygd2luZG93ICE9PSBcInVuZGVmaW5lZFwiICYmIHdpbmRvdy5sb2NhdGlvbjtcblxuICBpZiAoIWxvY2F0aW9uKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiZml4VXJscyByZXF1aXJlcyB3aW5kb3cubG9jYXRpb25cIik7XG4gIH1cblxuXHQvLyBibGFuayBvciBudWxsP1xuXHRpZiAoIWNzcyB8fCB0eXBlb2YgY3NzICE9PSBcInN0cmluZ1wiKSB7XG5cdCAgcmV0dXJuIGNzcztcbiAgfVxuXG4gIHZhciBiYXNlVXJsID0gbG9jYXRpb24ucHJvdG9jb2wgKyBcIi8vXCIgKyBsb2NhdGlvbi5ob3N0O1xuICB2YXIgY3VycmVudERpciA9IGJhc2VVcmwgKyBsb2NhdGlvbi5wYXRobmFtZS5yZXBsYWNlKC9cXC9bXlxcL10qJC8sIFwiL1wiKTtcblxuXHQvLyBjb252ZXJ0IGVhY2ggdXJsKC4uLilcblx0Lypcblx0VGhpcyByZWd1bGFyIGV4cHJlc3Npb24gaXMganVzdCBhIHdheSB0byByZWN1cnNpdmVseSBtYXRjaCBicmFja2V0cyB3aXRoaW5cblx0YSBzdHJpbmcuXG5cblx0IC91cmxcXHMqXFwoICA9IE1hdGNoIG9uIHRoZSB3b3JkIFwidXJsXCIgd2l0aCBhbnkgd2hpdGVzcGFjZSBhZnRlciBpdCBhbmQgdGhlbiBhIHBhcmVuc1xuXHQgICAoICA9IFN0YXJ0IGEgY2FwdHVyaW5nIGdyb3VwXG5cdCAgICAgKD86ICA9IFN0YXJ0IGEgbm9uLWNhcHR1cmluZyBncm91cFxuXHQgICAgICAgICBbXikoXSAgPSBNYXRjaCBhbnl0aGluZyB0aGF0IGlzbid0IGEgcGFyZW50aGVzZXNcblx0ICAgICAgICAgfCAgPSBPUlxuXHQgICAgICAgICBcXCggID0gTWF0Y2ggYSBzdGFydCBwYXJlbnRoZXNlc1xuXHQgICAgICAgICAgICAgKD86ICA9IFN0YXJ0IGFub3RoZXIgbm9uLWNhcHR1cmluZyBncm91cHNcblx0ICAgICAgICAgICAgICAgICBbXikoXSsgID0gTWF0Y2ggYW55dGhpbmcgdGhhdCBpc24ndCBhIHBhcmVudGhlc2VzXG5cdCAgICAgICAgICAgICAgICAgfCAgPSBPUlxuXHQgICAgICAgICAgICAgICAgIFxcKCAgPSBNYXRjaCBhIHN0YXJ0IHBhcmVudGhlc2VzXG5cdCAgICAgICAgICAgICAgICAgICAgIFteKShdKiAgPSBNYXRjaCBhbnl0aGluZyB0aGF0IGlzbid0IGEgcGFyZW50aGVzZXNcblx0ICAgICAgICAgICAgICAgICBcXCkgID0gTWF0Y2ggYSBlbmQgcGFyZW50aGVzZXNcblx0ICAgICAgICAgICAgICkgID0gRW5kIEdyb3VwXG4gICAgICAgICAgICAgICpcXCkgPSBNYXRjaCBhbnl0aGluZyBhbmQgdGhlbiBhIGNsb3NlIHBhcmVuc1xuICAgICAgICAgICkgID0gQ2xvc2Ugbm9uLWNhcHR1cmluZyBncm91cFxuICAgICAgICAgICogID0gTWF0Y2ggYW55dGhpbmdcbiAgICAgICApICA9IENsb3NlIGNhcHR1cmluZyBncm91cFxuXHQgXFwpICA9IE1hdGNoIGEgY2xvc2UgcGFyZW5zXG5cblx0IC9naSAgPSBHZXQgYWxsIG1hdGNoZXMsIG5vdCB0aGUgZmlyc3QuICBCZSBjYXNlIGluc2Vuc2l0aXZlLlxuXHQgKi9cblx0dmFyIGZpeGVkQ3NzID0gY3NzLnJlcGxhY2UoL3VybFxccypcXCgoKD86W14pKF18XFwoKD86W14pKF0rfFxcKFteKShdKlxcKSkqXFwpKSopXFwpL2dpLCBmdW5jdGlvbihmdWxsTWF0Y2gsIG9yaWdVcmwpIHtcblx0XHQvLyBzdHJpcCBxdW90ZXMgKGlmIHRoZXkgZXhpc3QpXG5cdFx0dmFyIHVucXVvdGVkT3JpZ1VybCA9IG9yaWdVcmxcblx0XHRcdC50cmltKClcblx0XHRcdC5yZXBsYWNlKC9eXCIoLiopXCIkLywgZnVuY3Rpb24obywgJDEpeyByZXR1cm4gJDE7IH0pXG5cdFx0XHQucmVwbGFjZSgvXicoLiopJyQvLCBmdW5jdGlvbihvLCAkMSl7IHJldHVybiAkMTsgfSk7XG5cblx0XHQvLyBhbHJlYWR5IGEgZnVsbCB1cmw/IG5vIGNoYW5nZVxuXHRcdGlmICgvXigjfGRhdGE6fGh0dHA6XFwvXFwvfGh0dHBzOlxcL1xcL3xmaWxlOlxcL1xcL1xcLykvaS50ZXN0KHVucXVvdGVkT3JpZ1VybCkpIHtcblx0XHQgIHJldHVybiBmdWxsTWF0Y2g7XG5cdFx0fVxuXG5cdFx0Ly8gY29udmVydCB0aGUgdXJsIHRvIGEgZnVsbCB1cmxcblx0XHR2YXIgbmV3VXJsO1xuXG5cdFx0aWYgKHVucXVvdGVkT3JpZ1VybC5pbmRleE9mKFwiLy9cIikgPT09IDApIHtcblx0XHQgIFx0Ly9UT0RPOiBzaG91bGQgd2UgYWRkIHByb3RvY29sP1xuXHRcdFx0bmV3VXJsID0gdW5xdW90ZWRPcmlnVXJsO1xuXHRcdH0gZWxzZSBpZiAodW5xdW90ZWRPcmlnVXJsLmluZGV4T2YoXCIvXCIpID09PSAwKSB7XG5cdFx0XHQvLyBwYXRoIHNob3VsZCBiZSByZWxhdGl2ZSB0byB0aGUgYmFzZSB1cmxcblx0XHRcdG5ld1VybCA9IGJhc2VVcmwgKyB1bnF1b3RlZE9yaWdVcmw7IC8vIGFscmVhZHkgc3RhcnRzIHdpdGggJy8nXG5cdFx0fSBlbHNlIHtcblx0XHRcdC8vIHBhdGggc2hvdWxkIGJlIHJlbGF0aXZlIHRvIGN1cnJlbnQgZGlyZWN0b3J5XG5cdFx0XHRuZXdVcmwgPSBjdXJyZW50RGlyICsgdW5xdW90ZWRPcmlnVXJsLnJlcGxhY2UoL15cXC5cXC8vLCBcIlwiKTsgLy8gU3RyaXAgbGVhZGluZyAnLi8nXG5cdFx0fVxuXG5cdFx0Ly8gc2VuZCBiYWNrIHRoZSBmaXhlZCB1cmwoLi4uKVxuXHRcdHJldHVybiBcInVybChcIiArIEpTT04uc3RyaW5naWZ5KG5ld1VybCkgKyBcIilcIjtcblx0fSk7XG5cblx0Ly8gc2VuZCBiYWNrIHRoZSBmaXhlZCBjc3Ncblx0cmV0dXJuIGZpeGVkQ3NzO1xufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9saWIvdXJscy5qc1xuLy8gbW9kdWxlIGlkID0gMjFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIl0sInNvdXJjZVJvb3QiOiIifQ==