/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(1);


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";

	var _H = __webpack_require__(2);

	var _H2 = _interopRequireDefault(_H);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	$(function () {

	    var h5 = new _H2.default();
	    h5.whenAddPage = function () {
	        this.addComponent("slide_up", {
	            bg: "img/footer.png",
	            css: {
	                left: 0,
	                bottom: -20,
	                width: '100vw',
	                height: "6vw",
	                zIndex: 999
	            },
	            animateIn: { opacity: 1, bottom: "0px" },
	            animateOut: {
	                opacity: 0,
	                bottom: "-20px"
	            }
	        });
	    };

	    h5.addPage("face").addComponent("topic", {
	        text: "",
	        width: 395,
	        height: 130,
	        bg: "img/face_logo.png",
	        css: {
	            opacity: 0
	        },
	        center: true,
	        animateIn: { top: 100, opacity: 1 },
	        animateOut: { top: 0, opacity: 0 }
	    }).addComponent("slogan", {
	        center: true,
	        width: 365,
	        height: 99,
	        bg: "img/face_slogan.png",
	        css: { opacity: 0, top: 180 },
	        animateIn: { left: '50%', opacity: 1 },
	        animateOut: { left: "0%", opacity: 0 },
	        delay: 700
	    }).addComponent("face_img_left", {
	        width: 370,
	        height: 493,
	        bg: "img/face_img_left.png",
	        css: { opacity: 0, left: -50, bottom: -20 },
	        animateIn: { opacity: 1, left: 0, bottom: 0 },
	        animateOut: {
	            opacity: 0, left: -50, bottom: 0
	        },
	        delay: 1500
	    }).addComponent("face_img_right", {
	        width: 276,
	        height: 449,
	        bg: "img/face_img_right.png",
	        css: { opacity: 0, right: -50, bottom: -20 },
	        animateIn: { opacity: 1, right: 0, bottom: 0 },
	        animateOut: {
	            opacity: 0, right: -20, bottom: 0
	        },
	        delay: 2000
	    }).addPage("").addComponent("caption", {
	        text: "语言调查"
	    }).addComponent("text", {
	        width: 500,
	        height: 30,
	        center: true,
	        text: "互联网热门语言调查",
	        css: {
	            top: 200,
	            opacity: 0,
	            textAlign: "center",
	            color: "red",
	            fontSize: "26px"
	        },
	        animateIn: {
	            opacity: 1,
	            top: 160
	        },
	        animateOut: {
	            opacity: 0,
	            top: 240
	        }
	    }).addComponent("description", {
	        center: true,
	        width: 481,
	        height: 295,
	        bg: "img/description_bg.gif",
	        text: "TIOBE编程语言社区排行榜是编程语言流行趋势的一个指标，每月更新，这份排行榜排名基于互联网上有经验的程序员、课程和第三方厂商的数量.排名使用著名的搜索引擎（诸如Google、MSN、Yahoo!）进行计算。",
	        css: {
	            opacity: 0,
	            padding: "15px 10px 10px 10px",
	            color: "#fff",
	            fontSize: "15px",
	            lineHeight: "18px",
	            textAlign: "justify",
	            top: 280
	        },
	        animateIn: { opacity: 1, top: 220 },
	        animateOut: { opacity: 0, top: 240 },
	        delay: 1000

	    }).addComponent("people", {
	        center: true,
	        width: 515,
	        height: 305,
	        bg: "img/p1_people.png",
	        css: {
	            opacity: 0,
	            bottom: 60
	        },
	        animateIn: { opacity: 1, bottom: 120 },
	        animateOut: { opacity: 0, bottom: 60 },
	        delay: 500
	    }).addPage("").addComponent("caption", {
	        text: "前端语言方向"
	    }).addComponent("polyLine", {
	        type: "polyline",
	        data: [['ES5', .6, "#ff7676"], ["HTML", .2], ['ES6', .5, "#ff7676"], ['CSS3', .3, "#ff7676"]],
	        width: 530,
	        height: 300,
	        center: true,
	        css: { top: 200, opacity: 0 },
	        animateIn: { opacity: 1, top: 250 },
	        animateOut: { opacity: 0, top: 100 }
	    }).addComponent("message", {
	        text: "ES6的使用率不断增加",
	        css: {
	            opacity: 0, top: 140, textAlign: "center", width: "100%", color: "#ff7676"
	        },
	        animateIn: { opacity: 1 },
	        animateOut: { opacity: 0 },
	        delay: 1000
	    }).addPage("").addComponent("caption", {
	        text: "后端语言分布"
	    }).addComponent("pie", {
	        type: "pie",
	        data: [['Ruby', .2, "#ff7676"], ["Java", .4, "#5ddbd8"], ['Python', .1, "#99c1ff"], ['Clojure', .3, "#ffad69"]],
	        width: 300,
	        height: 300,
	        center: true,
	        css: { top: 200, opacity: 0 },
	        animateIn: { opacity: 1, top: 250 },
	        animateOut: { opacity: 0, top: 100 }
	    }).addComponent("message", {
	        text: "Java具有较大比重",
	        css: {
	            opacity: 0, top: 140, textAlign: "center", width: "100%", color: "#ff7676"
	        },
	        animateIn: { opacity: 1 },
	        animateOut: { opacity: 0 },
	        delay: 2000
	    }).addPage("").addComponent("caption", {
	        text: "前端框架分布"
	    }).addComponent("bar", {
	        type: "bar",
	        data: [['Vue', .4, "#ff7676"], ["React", .5, "#5ddbd8"], ['jQuery', .3, "#99c1ff"], ['angularjs', .5, "#ffad69"], ["React", .5, "#5ddbd8"], ['jQuery', .6, "#99c1ff"]],
	        width: 700,
	        height: 600,
	        center: true,
	        css: { top: 200, opacity: 0 },
	        animateIn: { opacity: 1, top: 250 },
	        animateOut: { opacity: 0, top: 100 }
	    }).addComponent("message", {
	        text: "jQquey使用率第一",
	        css: {
	            opacity: 0, top: 140, textAlign: "center", width: "100%", color: "#ff7676"
	        },
	        animateIn: { opacity: 1 },
	        animateOut: { opacity: 0 },
	        delay: 2000
	    }).addPage("").addComponent("caption", {
	        text: "查看你的技能水平"
	    }).addComponent("rader", {
	        type: "rader",
	        data: [['Vue', .4, "#ff7676"], ["React", .2, "#5ddbd8"], ['jQuery', .3, "#99c1ff"], ['Canvas', .8, "#ffad69"], ["WebGL", .5, "#5ddbd8"], ['Liunx', .1, "#99c1ff"]],
	        width: 500,
	        height: 600,
	        center: true,
	        css: { top: 200, opacity: 0 },
	        animateIn: { opacity: 1, top: 250 },
	        animateOut: { opacity: 0, top: 100 }
	    }).addComponent("message", {
	        text: "继续努力，加油！",
	        css: {
	            opacity: 0, top: 140, textAlign: "center", width: "100%", color: "#ff7676"
	        },
	        animateIn: { opacity: 1 },
	        animateOut: { opacity: 0 },
	        delay: 2000
	    }).addPage("tail").addComponent("logo", {
	        center: true,
	        width: 359,
	        height: 129,
	        bg: "img/tail_logo.png",
	        css: {
	            opacity: 0,
	            top: 210
	        },
	        animateIn: { opacity: 1, top: 210 },
	        animateOut: { opacity: 0, top: 240 },
	        delay: 500
	    }).addComponent("slogan", {
	        center: true,
	        width: 314,
	        height: 46,
	        bg: "img/tail_slogan.png",
	        css: {
	            opacity: 0,
	            top: 280,
	            left: "0%"
	        },
	        animateIn: { opacity: 1, left: "50%" },
	        animateOut: { opacity: 0, left: "0%" },
	        delay: 500
	    }).addComponent("share", {
	        width: 128,
	        height: 120,
	        bg: "img/tail_share.png",
	        css: {
	            opacity: 0,
	            top: 110,
	            right: 110
	        },
	        animateIn: { opacity: 1, top: 10, right: 10 },
	        animateOut: { opacity: 0, top: 110, right: 110 },
	        delay: 500
	    }).addComponent("back", {
	        width: 52,
	        height: 50,
	        bg: "img/tail_back.png",
	        center: true,
	        'onclick': function onclick() {
	            $.fn.fullpage.moveTo(1);
	        }
	    }).H5Loader();

	    window.onload = function () {
	        $("#loading").remove();
	    };

	    //let H5ComPonetText = new H5ComponnetBase({
	    //    "text":"hello",
	    //    "type":"Base",
	    //    "width":"370",
	    //    "height":"493",
	    //    "bg":"../img/face_img_left.png",
	    //    "css":{
	    //        opacity:0
	    //    },
	    //    'center':true,
	    //    'animateIn':{
	    //        bottom:80,
	    //        opacity:1
	    //    },
	    //    'animateOut':{
	    //        bottom:0,
	    //        opacity:0
	    //    }
	    //},"Text")
	    //$(".page3").append(H5ComPonetText);


	    //TODO:回调全部独立成一个组件 需要有一个分发机制
	}); /**
	     * Created by zhang on 7/8/2017.
	     */

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); /**
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * Created by zhang on 7/10/2017.
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      */


	var _H5ComponentBase = __webpack_require__(3);

	var _H5ComponentBase2 = _interopRequireDefault(_H5ComponentBase);

	var _H5ComponentPoint = __webpack_require__(4);

	var _H5ComponentPoint2 = _interopRequireDefault(_H5ComponentPoint);

	var _H5ComponentBar = __webpack_require__(5);

	var _H5ComponentBar2 = _interopRequireDefault(_H5ComponentBar);

	var _H5ComponentPolyline = __webpack_require__(6);

	var _H5ComponentPolyline2 = _interopRequireDefault(_H5ComponentPolyline);

	var _H5ComponentRader = __webpack_require__(7);

	var _H5ComponentRader2 = _interopRequireDefault(_H5ComponentRader);

	var _H5ComponentPie = __webpack_require__(8);

	var _H5ComponentPie2 = _interopRequireDefault(_H5ComponentPie);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var H5 = function () {
	    function H5() {
	        _classCallCheck(this, H5);

	        //创建页面组件的基本形态
	        this.id = ("h5_" + Math.random()).replace(".", "_");
	        this.el = $("<div class=\"h5\" id=\"" + this.id + "\"></div>").hide();
	        $("body").append(this.el);
	        this.page = [];
	    }

	    _createClass(H5, [{
	        key: "addPage",
	        value: function addPage(name, text) {

	            var page = $("<div class=\"h5_page section\"></div>");
	            name && page.addClass("h5_page_" + name);
	            text && page.text(text);

	            this.page.push(page);
	            this.el.append(page);

	            if (typeof this.whenAddPage === "function") {
	                this.whenAddPage();
	            }
	            return this;
	        }
	    }, {
	        key: "addComponent",
	        value: function addComponent(name) {
	            var cfg = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

	            var component = void 0;
	            var targetPage = this.page[this.page.length - 1];
	            cfg = $.extend({
	                type: "base"
	            }, cfg);

	            switch (cfg.type) {
	                case "base":
	                    component = new _H5ComponentBase2.default(cfg, name);
	                    break;
	                case "point":
	                    component = new _H5ComponentPoint2.default(cfg, name);
	                    break;
	                case "bar":
	                    component = new _H5ComponentBar2.default(cfg, name);
	                    break;
	                case "polyline":
	                    component = new _H5ComponentPolyline2.default(cfg, name);
	                    break;
	                case "rader":
	                    component = new _H5ComponentRader2.default(cfg, name);
	                    break;
	                case "pie":
	                    component = new _H5ComponentPie2.default(cfg, name);
	                    break;
	            }

	            targetPage.append(component);
	            return this;
	        }
	    }, {
	        key: "H5Loader",
	        value: function H5Loader(first, load) {
	            var _this = this;

	            this.el.fullpage({
	                onLeave: function onLeave(index, nextIndex, direction) {
	                    $(_this.el).find(".h5_page").eq(index - 1).find(".h5_component").trigger("onLeave");
	                },
	                afterLoad: function afterLoad(nextIndex, index, direction) {
	                    $(_this.el).find(".h5_page").eq(index - 1).find(".h5_component").trigger("onLoad");
	                }
	            });

	            $(this.page)[0].find(".component").trigger("onLoad");

	            this.el.show();
	        }
	    }]);

	    return H5;
	}();

	exports.default = H5;

/***/ }),
/* 3 */
/***/ (function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	/**
	 * Created by zhang on 7/9/2017.
	 */

	var H5ComponentBase = function H5ComponentBase() {
	    var cfg = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
	    var name = arguments[1];

	    _classCallCheck(this, H5ComponentBase);

	    var clsType = " h5_component" + cfg.type;
	    var myName = " h5_component_name_" + name;
	    var id = ("id_" + Math.random()).replace(".", "_");

	    var component = $("<div class=\"h5_component " + clsType + " " + myName + "\" id=\"" + id + "\"></div>");

	    cfg.text && component.text(cfg.text);
	    cfg.width && component.width(cfg.width / 2);
	    cfg.height && component.height(cfg.height / 2);

	    cfg.css && component.css(cfg.css);
	    cfg.bg && component.css("backgroundImage", "url(" + cfg.bg + ")");
	    cfg.center && component.css({
	        left: "50%",
	        marginLeft: cfg.width / 4 * -1 + "px"
	    });

	    if (typeof cfg.onclick === "function") {
	        component.click(cfg.onclick);
	    }

	    //触发事件
	    component.on("onLeave", function () {

	        setTimeout(function () {
	            component.addClass(clsType + "_leave").removeClass(clsType + "_load");
	            cfg.animateOut && component.animate(cfg.animateOut);
	        }, cfg.delay || 0);
	        return false;
	    });
	    component.on("onLoad", function () {
	        setTimeout(function () {
	            component.addClass(clsType + "_load").removeClass(clsType + "_leave");
	            cfg.animateIn && component.animate(cfg.animateIn);
	        }, cfg.delay || 0);

	        return false;
	    });

	    return component;
	};

	exports.default = H5ComponentBase;

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _H5ComponentBase = __webpack_require__(3);

	var _H5ComponentBase2 = _interopRequireDefault(_H5ComponentBase);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } } /**
	                                                                                                                                                           * Created by zhang on 7/10/2017.
	                                                                                                                                                           */
	/**
	 * Created by zhang on 7/9/2017.
	 */


	var H5ComponentPoint = function H5ComponentPoint() {
	    var cfg = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
	    var name = arguments[1];

	    _classCallCheck(this, H5ComponentPoint);

	    var component = new _H5ComponentBase2.default(cfg, name);
	    var base = cfg.data[0][1];

	    // a points add to component
	    $.each(cfg.data, function (idx, item) {
	        var point = $("<div class=\"point point_" + idx + "\"></div>");
	        var per = item[1] / base * 100 + "%";
	        var color = item[2];
	        var postionX = item[3];
	        var postionY = item[4];
	        var name = $("<div class=\"name\">" + item[0] + "</div>");
	        var rate = $("<div class=\"per\">" + (item[1] * 100 + "%") + "</div>");

	        name.append(rate);
	        point.append(name);
	        point.width(per).height(per);
	        color && point.css({ backgroundColor: color });
	        if (postionX !== undefined && postionY) {
	            point.css("left", postionX).css("top", postionY);
	        }
	        component.append(point);
	    });

	    return component;
	};

	exports.default = H5ComponentPoint;

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _H5ComponentBase = __webpack_require__(3);

	var _H5ComponentBase2 = _interopRequireDefault(_H5ComponentBase);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } } /**
	                                                                                                                                                           * Created by zhang on 7/10/2017.
	                                                                                                                                                           */

	var H5ComponentBar = function H5ComponentBar(cfg, name) {
	    _classCallCheck(this, H5ComponentBar);

	    var component = new _H5ComponentBase2.default(cfg, name);

	    //遍历所有项目 添加到容器之中
	    $.each(cfg.data, function (idx, item) {
	        var width = item[1] * 80 + "%";
	        var line = $("<div class=\"line\"></div>");
	        var name = $("<div class=\"name\"></div>");
	        var rate = $("<div class=\"rate\"></div>");
	        var peer = $("<div class=\"peer\"></div>");
	        rate.css("width", width);

	        var bgStyle = void 0;
	        if (item[2]) {
	            bgStyle = "style=\"background-color:" + item[2] + "\"";
	        }
	        rate.html("<div class='bg' " + bgStyle + "></div>");
	        name.text(item[0]);
	        peer.text(width);
	        line.append(name).append(rate).append(peer);
	        component.append(line);
	    });

	    return component;
	};

	exports.default = H5ComponentBar;

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _H5ComponentBase = __webpack_require__(3);

	var _H5ComponentBase2 = _interopRequireDefault(_H5ComponentBase);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } } /**
	                                                                                                                                                           * Created by zhang on 7/11/2017.
	                                                                                                                                                           */
	/**
	 * Created by zhang on 7/10/2017.
	 */
	/**
	 * Created by zhang on 7/9/2017.
	 */


	var H5ComponentPolyline = function H5ComponentPolyline() {
	    var cfg = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
	    var name = arguments[1];

	    _classCallCheck(this, H5ComponentPolyline);

	    var component = new _H5ComponentBase2.default(cfg, name);
	    var w = cfg.width;
	    var h = cfg.height;
	    var canvas = document.createElement("canvas");
	    var ctx = canvas.getContext("2d");
	    canvas.width = ctx.width = w;
	    canvas.height = ctx.height = h;
	    var canvas2 = document.createElement("canvas");
	    var ctx2 = canvas2.getContext("2d");
	    canvas2.width = ctx2.width = w;
	    canvas2.height = ctx2.height = h;
	    var polylineItems = cfg.data.length;

	    //画图部分 per是一个百分百数
	    function draw(per) {
	        if (per >= 1) {
	            component.find(".text").css("opacity", 1);
	        }
	        if (per <= 0) {
	            component.find(".text").css("opacity", 0);
	        }
	        ctx2.clearRect(0, 0, w, h);
	        var step = 10;
	        ctx.beginPath();
	        ctx.lineWidth = 3;
	        ctx.strokeStyle = "#aaaaaa";

	        //横线
	        for (var i = 0; i <= step; i++) {
	            var currentY = i * (h / step);
	            ctx.moveTo(0, currentY);
	            ctx.lineTo(w, currentY);
	        }
	        //竖线
	        for (var _i = 0; _i <= polylineItems + 1; _i++) {
	            var currentX = _i * (w / (polylineItems + 1));
	            ctx.moveTo(currentX, 0);
	            ctx.lineTo(currentX, h);
	        }

	        ctx.stroke();

	        //折线图
	        ctx2.beginPath();
	        ctx2.lineWidth = 5;
	        ctx2.strokeStyle = "#ff8878";
	        var x = 0;
	        var y = 0;
	        var itemWidth = w / (polylineItems + 1);
	        ctx2.font = "25px Georgia";

	        //画圆和数值
	        var polylineStrokeTMP = {};
	        for (var _i2 = 0; _i2 < polylineItems; _i2++) {
	            var item = cfg.data[_i2];
	            x = _i2 * itemWidth + 1 * itemWidth;
	            y = h - item[1] * h * per;
	            if (_i2 === 0) {
	                polylineStrokeTMP.x = x;
	                polylineStrokeTMP.y = y;
	            }
	            ctx2.moveTo(x, y);
	            ctx2.arc(x, y, 5, 0, 2 * Math.PI);
	            ctx2.fillStyle = item[2] ? item[2] : "#ff8878";
	            ctx2.fillText(item[1] * 100 + "%", x - 18, y - 30);
	        }

	        //画折线
	        ctx2.moveTo(polylineStrokeTMP.x, polylineStrokeTMP.y);
	        for (var _i3 = 0; _i3 < polylineItems; _i3++) {
	            var _item = cfg.data[_i3];
	            x = _i3 * itemWidth + 1 * itemWidth;
	            y = h - _item[1] * h * per;
	            ctx2.lineTo(x, y);
	        }
	        ctx2.stroke();

	        ctx2.lineWidth = "1";
	        ctx2.lineTo(x, h);
	        ctx2.lineTo(polylineStrokeTMP.x, h);
	        ctx2.fillStyle = "rgba(255, 136, 120, 0.37)";
	        ctx2.fill();

	        ctx2.stroke();
	    }

	    for (var i = 0; i < polylineItems; i++) {
	        var text = $("<div class=\"text\"></div>");
	        var left = (i * (w / (polylineItems + 1)) + 1 * (w / (polylineItems + 1))) / 2;
	        text.text(cfg.data[i][0]);
	        text.css("bottom", "-20px").css("left", left + "px").css("width", "80px").css("marginLeft", "-40px");
	        component.append(text);
	    }

	    ctx.stroke();

	    draw(.0);

	    //画图结束

	    component.append(canvas);
	    component.append(canvas2);

	    //生长动画
	    var animaPer = 0;
	    var stop = void 0;
	    component.on("onLoad", function f() {
	        if (animaPer > 1) {
	            return;
	        }
	        animaPer += 0.01;
	        draw(animaPer);
	        stop = window.requestAnimationFrame(f);
	    });

	    component.on("onLeave", function f() {
	        if (animaPer <= 0) {
	            return;
	        }
	        animaPer -= 0.02;
	        draw(animaPer);
	        stop = window.requestAnimationFrame(f);
	    });

	    return component;
	};

	exports.default = H5ComponentPolyline;

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _H5ComponentBase = __webpack_require__(3);

	var _H5ComponentBase2 = _interopRequireDefault(_H5ComponentBase);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } } /**
	                                                                                                                                                           * Created by zhang on 7/12/2017.
	                                                                                                                                                           */
	/**
	 * Created by zhang on 7/11/2017.
	 */
	/**
	 * Created by zhang on 7/10/2017.
	 */
	/**
	 * Created by zhang on 7/9/2017.
	 */


	var H5ComponentRader = function H5ComponentRader() {
	    var cfg = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
	    var name = arguments[1];

	    _classCallCheck(this, H5ComponentRader);

	    var component = new _H5ComponentBase2.default(cfg, name);
	    var w = cfg.width;
	    var h = cfg.height;
	    var canvas = document.createElement("canvas");
	    var ctx = canvas.getContext("2d");
	    canvas.width = ctx.width = w;
	    canvas.height = ctx.height = h;
	    var canvas2 = document.createElement("canvas");
	    var ctx2 = canvas2.getContext("2d");
	    canvas2.width = ctx2.width = w;
	    canvas2.height = ctx2.height = h;
	    var raderItems = cfg.data.length;
	    var r = w / 2;
	    ctx.lineWidth = 0;
	    ctx.fillStyle = "#f1f9ff";

	    //基本图形绘制
	    var isblue = false;
	    for (var s = 10; s > 0; s--) {
	        ctx.beginPath();
	        for (var i = 0; i < raderItems; i++) {
	            var rad = 2 * Math.PI / 360 * (360 / raderItems) * i;
	            var x = r + Math.sin(rad) * r * (s / 10);
	            var y = r + Math.cos(rad) * r * (s / 10);
	            ctx.lineTo(x, y);
	        }
	        ctx.closePath();
	        ctx.fillStyle = (isblue = !isblue) ? "#99c0ff" : "#f1f9ff";
	        ctx.fill();
	    }
	    ctx.closePath();

	    for (var _i = 0; _i < raderItems; _i++) {
	        var _rad = 2 * Math.PI / 360 * (360 / raderItems) * _i;
	        var _x2 = r + Math.sin(_rad) * r;
	        var _y = r + Math.cos(_rad) * r;

	        ctx.moveTo(_x2, _y);
	        ctx.lineTo(r, r);

	        var text = $("<div class='Text'>" + cfg.data[_i][0] + "</div>");
	        if (_x2 > w / 2) {
	            text.css("left", _x2 / 2);
	        } else {
	            text.css("right", (w - _x2) / 2);
	        }

	        if (_y > h / 2) {
	            text.css("top", _y / 2);
	        } else {
	            text.css("bottom", (h - _y) / 2);
	        }

	        if (cfg.data[_i][2]) {
	            text.css("color", cfg.data[_i][2]);
	        }

	        text.css("transition", "all 1s " + _i * 0.5 + "s");

	        component.append(text);
	    }
	    ctx.strokeStyle = "#e0e0e0";
	    ctx.stroke();

	    //数据层
	    ctx2.strokeStyle = "#f00";
	    function draw(per) {
	        if (per >= 1) {
	            component.find(".Text").css("opacity", 1);
	        } else {
	            component.find(".Text").css("opacity", 0);
	        }
	        ctx2.clearRect(0, 0, w, h);
	        ctx2.beginPath();
	        for (var _i2 = 0; _i2 < raderItems; _i2++) {
	            var itemRate = cfg.data[_i2][1] * per;
	            var _rad2 = 2 * Math.PI / 360 * (360 / raderItems) * _i2;
	            var _x3 = r + Math.sin(_rad2) * r * itemRate;
	            var _y2 = r + Math.cos(_rad2) * r * itemRate;
	            if (_i2 === 0) {
	                ctx2.moveTo(_x3, _y2);
	            }
	            ctx2.lineTo(_x3, _y2);
	        }

	        ctx2.closePath();
	        ctx2.stroke();

	        ctx2.fillStyle = "#f00";
	        for (var _i3 = 0; _i3 < raderItems; _i3++) {
	            var _itemRate = cfg.data[_i3][1] * per;
	            var _rad3 = 2 * Math.PI / 360 * (360 / raderItems) * _i3;
	            var _x4 = r + Math.sin(_rad3) * r * _itemRate;
	            var _y3 = r + Math.cos(_rad3) * r * _itemRate;
	            ctx2.beginPath();
	            ctx2.arc(_x4, _y3, 5, 0, 2 * Math.PI);
	            ctx2.fill();
	            ctx2.closePath();
	        }

	        ctx2.stroke();
	    }

	    //ctx.stroke()


	    //画线 中心部分
	    //ctx.beginPath()
	    //for(let i=0 ;i<raderItems;i++){
	    //    let rad = (2*Math.PI/360) * (360 / raderItems) * i
	    //    let x = r + Math.sin(rad) * r;
	    //    let y = r + Math.cos(rad) * r
	    //
	    //    ctx.moveTo(x,y)
	    //
	    //    ctx.lineTo(r,r)
	    //    if(i === raderItems-1){
	    //        ctx.lineTo(raderLineUpTMP.x,raderLineUpTMP.y)
	    //    }
	    //}
	    //ctx.stroke()
	    //画图部分 per是一个百分百数


	    draw(0.5);

	    //画图结束

	    component.append(canvas);
	    component.append(canvas2);

	    //生长动画 退场
	    var animaPer = 0;
	    var stop = void 0;
	    component.on("onLoad", function f() {
	        if (animaPer > 1) {
	            return;
	        }
	        animaPer += 0.01;
	        draw(animaPer);
	        stop = window.requestAnimationFrame(f);
	    });

	    component.on("onLeave", function f() {
	        if (animaPer <= 0) {
	            return;
	        }
	        animaPer -= 0.02;
	        draw(animaPer);
	        stop = window.requestAnimationFrame(f);
	    });

	    return component;
	};

	exports.default = H5ComponentRader;

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _H5ComponentBase = __webpack_require__(3);

	var _H5ComponentBase2 = _interopRequireDefault(_H5ComponentBase);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } } /**
	                                                                                                                                                           * Created by zhang on 7/13/2017.
	                                                                                                                                                           */
	/**
	 * Created by zhang on 7/11/2017.
	 */
	/**
	 * Created by zhang on 7/10/2017.
	 */
	/**
	 * Created by zhang on 7/9/2017.
	 */


	var H5ComponentPie = function H5ComponentPie() {
	    var cfg = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
	    var name = arguments[1];

	    _classCallCheck(this, H5ComponentPie);

	    var component = new _H5ComponentBase2.default(cfg, name);
	    var w = cfg.width;
	    var h = cfg.height;
	    //底层
	    var canvas = document.createElement("canvas");
	    var ctx = canvas.getContext("2d");
	    canvas.width = ctx.width = w;
	    canvas.height = ctx.height = h;
	    //数据层
	    var canvas2 = document.createElement("canvas");
	    var ctx2 = canvas2.getContext("2d");
	    canvas2.width = ctx2.width = w;
	    canvas2.height = ctx2.height = h;
	    //遮罩层
	    var canvas3 = document.createElement("canvas");
	    var ctx3 = canvas3.getContext("2d");
	    canvas3.width = ctx3.width = w;
	    canvas3.height = ctx3.height = h;

	    var pieItems = cfg.data.length;
	    var r = w / 2;

	    //底层

	    ctx.beginPath();
	    ctx.fillStyle = "#eee";
	    ctx.strokeStyle = "#eee";
	    ctx.lineWidth = 1;
	    ctx.arc(r, r, r, 0, 2 * Math.PI);
	    ctx.fill();
	    ctx.stroke();

	    //数据层

	    var colors = ["red", "green", "blue", "orange", "gray"];
	    var sAngel = 1.5 * Math.PI;
	    var eAngel = 0;
	    var aangel = Math.PI * 2;

	    for (var i = 0; i < pieItems; i++) {
	        var item = cfg.data[i];

	        var color = item[2];
	        eAngel = sAngel + aangel * item[1];

	        ctx2.beginPath();
	        ctx2.fillStyle = color;
	        ctx2.strokeStyle = color;
	        ctx2.lineWidth = 1;

	        ctx2.moveTo(r, r);
	        ctx2.arc(r, r, r, sAngel, eAngel);
	        ctx2.fill();
	        ctx2.stroke();

	        sAngel = eAngel;

	        //加入文本

	        var text = $("<div class=\"text\">" + item[0] + "</div>");
	        var per = $("<div class=\"per\">" + (item[1] * 100 + "%") + "</div>");
	        text.append(per);

	        var x = r + Math.sin(.6 * Math.PI - sAngel) * r;
	        var y = r + Math.cos(.6 * Math.PI - sAngel) * r;

	        if (x > w / 2) {
	            text.css("left", x / 2);
	        } else {
	            text.css("right", (w - x) / 2);
	        }

	        if (y > h / 2) {
	            text.css("top", y / 2);
	        } else {
	            text.css("bottom", (h - y) / 2);
	        }

	        if (item[2]) {
	            text.css("color", item[2]);
	        }

	        text.css("opacity", 0);
	        text.css("transition", "all 1s " + i * 0.5 + "s");

	        component.append(text);
	    }

	    //遮罩动画层
	    ctx3.fillStyle = "#fff";
	    ctx3.strokeStyle = "#fff";
	    function draw(per) {
	        if (per >= 1) {
	            component.find(".text").css("opacity", 1);
	        }
	        if (per <= 0.01) {
	            component.find(".text").css("opacity", 1);
	        }
	        ctx3.clearRect(0, 0, w, h);
	        ctx3.beginPath();
	        ctx3.moveTo(r, r);
	        if (per <= 0) {
	            ctx3.arc(r, r, r + 5, sAngel, sAngel + 2 * Math.PI * per);
	        } else {
	            ctx3.arc(r, r, r + 5, sAngel, sAngel + 2 * Math.PI * per, true);
	        }

	        ctx3.fill();

	        if (per >= 1) {
	            component.find(".text").css("opacity", 1);
	        }
	        if (per <= 0.01) {
	            component.find(".text").css("opacity", 0);
	        }
	    }

	    draw(1);

	    //画图结束

	    component.append(canvas);
	    component.append(canvas2);
	    component.append(canvas3);

	    //生长动画
	    var animaPer = 0.01;
	    var stop = void 0;
	    component.on("onLoad", function f() {
	        if (animaPer > 1) {
	            return;
	        }
	        animaPer += 0.01;
	        draw(animaPer);
	        stop = window.requestAnimationFrame(f);
	    });

	    component.on("onLeave", function f() {
	        if (animaPer <= 0) {
	            return;
	        }
	        animaPer -= 0.02;
	        draw(animaPer);
	        stop = window.requestAnimationFrame(f);
	    });

	    return component;
	};

	exports.default = H5ComponentPie;

/***/ })
/******/ ]);