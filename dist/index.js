// header

$(".btn-burger").click(function () {
	$(".header__nav-mob").addClass("active");
	$(".popup-nav").addClass("active");
	$("body").addClass("hidden");
});

$(".nav-dropdown").click(function () {
	$(".header__nav-dropdown").slideToggle("slow");
	$(".header__nav-dropdown").toggleClass("active");
	$(".nav-dropdown").toggleClass("active");
});

$(".close-nav-mob").click(function () {
	$(".header__nav-mob").removeClass("active");
	$(".popup-nav").removeClass("active");
	$("body").removeClass("hidden");
});

$(".popup-nav").click(function (e) {
	if ($(e.target).closest(".header__nav-mob").length == 0) {
		$(".header__nav-mob").removeClass("active");
		$(".popup-nav").removeClass("active");
		$("body").removeClass("hidden");
	}
});

// footer

document.getElementById("year").innerHTML = new Date().getFullYear();

// loading

// $(window).on("load", function () {
// 	var $preloader = $(".preloader"),
// 		$svg_anm = $preloader.find(".preloader__content");
// 	$svg_anm.fadeOut();
// 	$preloader.delay(100).fadeOut("slow");
// });

$(window).on("load", function () {
	var $preloader = $(".loader__wrap"),
		$svg_anm = $preloader.find(".loader");
	$svg_anm.fadeOut();
	$preloader.delay(100).fadeOut("slow");
});

// slider

$(document).ready(function () {
	$(".rtl-slider").each(function (key, item) {
		var sliderIdName = "rtl-slider" + key;
		var sliderNavIdName = "rtl-slider-nav" + key;
		this.id = sliderIdName;
		$(".rtl-slider-nav")[key].id = sliderNavIdName;

		var sliderId = "#" + sliderIdName;
		var sliderNavId = "#" + sliderNavIdName;

		$(sliderId).slick({
			slidesToShow: 1,
			slidesToScroll: 1,
			arrows: true,
			fade: true,
			nextArrow: '<i class="fas fa-angle-right slick-next"></i>',
			prevArrow: '<i class="fas fa-angle-left slick-prev"></i>',
			asNavFor: sliderNavId,
		});
		$(sliderNavId).slick({
			slidesToShow: 2,
			slidesToScroll: 1,
			vertical: true,
			asNavFor: sliderId,
			centerMode: false,
			focusOnSelect: true,
			arrows: false,
			responsive: [
				{
					breakpoint: 992,
					settings: {
						vertical: false,
					},
				},
				{
					breakpoint: 768,
					settings: {
						vertical: false,
					},
				},
				{
					breakpoint: 580,
					settings: {
						vertical: false,
						slidesToShow: 2,
					},
				},
				{
					breakpoint: 380,
					settings: {
						vertical: false,
						slidesToShow: 2,
					},
				},
			],
		});
	});
});

// popup-shop

$(".btn-card").click(function () {
	$(".popup-shop").addClass("active");
	$(".popup-shop__content").addClass("active");
	$("body").addClass("hidden");

	// console.log(
	// 	"title--",
	// 	$(".shop-card__item").find(".shop-card__title").text(),
	// );
	const title = $(this)
		.parents(".shop-card__item")
		.find(".shop-card__title")
		.text();
	const img = $(this).parents(".shop-card__item").find("img").attr("src");
	const price = $(this)
		.parents(".shop-card__item")
		.find(".shop-card__price")
		.text();

	$("#order-title").text(title);
	$("#order-img").attr("src", img);
	$("#order-price").text(price);
});

$(".close-popup-shop").click(function () {
	$(".popup-shop__content").removeClass("active");
	$(".popup-shop").removeClass("active");
	$("body").removeClass("hidden");
});

$(".popup-shop").click(function (e) {
	if ($(e.target).closest(".popup-shop__content").length == 0) {
		$(".popup-shop__content").removeClass("active");
		$(".popup-shop").removeClass("active");
		$("body").removeClass("hidden");
	}
});

// wow lib

// (function () {
// 	var Util,
// 		__bind = function (fn, me) {
// 			return function () {
// 				return fn.apply(me, arguments);
// 			};
// 		};

// 	Util = (function () {
// 		function Util() {}

// 		Util.prototype.extend = function (custom, defaults) {
// 			var key, value;
// 			for (key in custom) {
// 				value = custom[key];
// 				if (value != null) {
// 					defaults[key] = value;
// 				}
// 			}
// 			return defaults;
// 		};

// 		Util.prototype.isMobile = function (agent) {
// 			return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
// 				agent,
// 			);
// 		};

// 		return Util;
// 	})();

// 	this.WOW = (function () {
// 		WOW.prototype.defaults = {
// 			boxClass: "wow",
// 			animateClass: "animated",
// 			offset: 0,
// 			mobile: true,
// 		};

// 		function WOW(options) {
// 			if (options == null) {
// 				options = {};
// 			}
// 			this.scrollCallback = __bind(this.scrollCallback, this);
// 			this.scrollHandler = __bind(this.scrollHandler, this);
// 			this.start = __bind(this.start, this);
// 			this.scrolled = true;
// 			this.config = this.util().extend(options, this.defaults);
// 		}

// 		WOW.prototype.init = function () {
// 			var _ref;
// 			this.element = window.document.documentElement;
// 			if (
// 				(_ref = document.readyState) === "interactive" ||
// 				_ref === "complete"
// 			) {
// 				return this.start();
// 			} else {
// 				return document.addEventListener(
// 					"DOMContentLoaded",
// 					this.start,
// 				);
// 			}
// 		};

// 		WOW.prototype.start = function () {
// 			var box, _i, _len, _ref;
// 			this.boxes = this.element.getElementsByClassName(
// 				this.config.boxClass,
// 			);
// 			if (this.boxes.length) {
// 				if (this.disabled()) {
// 					return this.resetStyle();
// 				} else {
// 					_ref = this.boxes;
// 					for (_i = 0, _len = _ref.length; _i < _len; _i++) {
// 						box = _ref[_i];
// 						this.applyStyle(box, true);
// 					}
// 					window.addEventListener(
// 						"scroll",
// 						this.scrollHandler,
// 						false,
// 					);
// 					window.addEventListener(
// 						"resize",
// 						this.scrollHandler,
// 						false,
// 					);
// 					return (this.interval = setInterval(
// 						this.scrollCallback,
// 						50,
// 					));
// 				}
// 			}
// 		};

// 		WOW.prototype.stop = function () {
// 			window.removeEventListener("scroll", this.scrollHandler, false);
// 			window.removeEventListener("resize", this.scrollHandler, false);
// 			if (this.interval != null) {
// 				return clearInterval(this.interval);
// 			}
// 		};

// 		WOW.prototype.show = function (box) {
// 			this.applyStyle(box);
// 			return (box.className =
// 				"" + box.className + " " + this.config.animateClass);
// 		};

// 		WOW.prototype.applyStyle = function (box, hidden) {
// 			var delay, duration, iteration;
// 			duration = box.getAttribute("data-wow-duration");
// 			delay = box.getAttribute("data-wow-delay");
// 			iteration = box.getAttribute("data-wow-iteration");
// 			return box.setAttribute(
// 				"style",
// 				this.customStyle(hidden, duration, delay, iteration),
// 			);
// 		};

// 		WOW.prototype.resetStyle = function () {
// 			var box, _i, _len, _ref, _results;
// 			_ref = this.boxes;
// 			_results = [];
// 			for (_i = 0, _len = _ref.length; _i < _len; _i++) {
// 				box = _ref[_i];
// 				_results.push(
// 					box.setAttribute("style", "visibility: visible;"),
// 				);
// 			}
// 			return _results;
// 		};

// 		WOW.prototype.customStyle = function (
// 			hidden,
// 			duration,
// 			delay,
// 			iteration,
// 		) {
// 			var style;
// 			style = hidden
// 				? "visibility: hidden; -webkit-animation-name: none; -moz-animation-name: none; animation-name: none;"
// 				: "visibility: visible;";
// 			if (duration) {
// 				style +=
// 					"-webkit-animation-duration: " +
// 					duration +
// 					"; -moz-animation-duration: " +
// 					duration +
// 					"; animation-duration: " +
// 					duration +
// 					";";
// 			}
// 			if (delay) {
// 				style +=
// 					"-webkit-animation-delay: " +
// 					delay +
// 					"; -moz-animation-delay: " +
// 					delay +
// 					"; animation-delay: " +
// 					delay +
// 					";";
// 			}
// 			if (iteration) {
// 				style +=
// 					"-webkit-animation-iteration-count: " +
// 					iteration +
// 					"; -moz-animation-iteration-count: " +
// 					iteration +
// 					"; animation-iteration-count: " +
// 					iteration +
// 					";";
// 			}
// 			return style;
// 		};

// 		WOW.prototype.scrollHandler = function () {
// 			return (this.scrolled = true);
// 		};

// 		WOW.prototype.scrollCallback = function () {
// 			var box;
// 			if (this.scrolled) {
// 				this.scrolled = false;
// 				this.boxes = function () {
// 					var _i, _len, _ref, _results;
// 					_ref = this.boxes;
// 					_results = [];
// 					for (_i = 0, _len = _ref.length; _i < _len; _i++) {
// 						box = _ref[_i];
// 						if (!box) {
// 							continue;
// 						}
// 						if (this.isVisible(box)) {
// 							this.show(box);
// 							continue;
// 						}
// 						_results.push(box);
// 					}
// 					return _results;
// 				}.call(this);
// 				if (!this.boxes.length) {
// 					return this.stop();
// 				}
// 			}
// 		};

// 		WOW.prototype.offsetTop = function (element) {
// 			var top;
// 			top = element.offsetTop;
// 			while ((element = element.offsetParent)) {
// 				top += element.offsetTop;
// 			}
// 			return top;
// 		};

// 		WOW.prototype.isVisible = function (box) {
// 			var bottom, offset, top, viewBottom, viewTop;
// 			offset = box.getAttribute("data-wow-offset") || this.config.offset;
// 			viewTop = window.pageYOffset;
// 			viewBottom = viewTop + this.element.clientHeight - offset;
// 			top = this.offsetTop(box);
// 			bottom = top + box.clientHeight;
// 			return top <= viewBottom && bottom >= viewTop;
// 		};

// 		WOW.prototype.util = function () {
// 			return this._util || (this._util = new Util());
// 		};

// 		WOW.prototype.disabled = function () {
// 			return (
// 				!this.config.mobile && this.util().isMobile(navigator.userAgent)
// 			);
// 		};

// 		return WOW;
// 	})();
// }.call(this));

// // wow init

// wow = new WOW({
// 	animateClass: "animated",
// 	offset: 100,
// });
// wow.init();
