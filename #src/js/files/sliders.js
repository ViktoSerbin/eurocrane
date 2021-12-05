//BildSlider
let sliders = document.querySelectorAll('._swiper');
if (sliders) {
	for (let index = 0; index < sliders.length; index++) {
		let slider = sliders[index];
		if (!slider.classList.contains('swiper-bild')) {
			let slider_items = slider.children;
			if (slider_items) {
				for (let index = 0; index < slider_items.length; index++) {
					let el = slider_items[index];
					el.classList.add('swiper-slide');
				}
			}
			let slider_content = slider.innerHTML;
			let slider_wrapper = document.createElement('div');
			slider_wrapper.classList.add('swiper-wrapper');
			slider_wrapper.innerHTML = slider_content;
			slider.innerHTML = '';
			slider.appendChild(slider_wrapper);
			slider.classList.add('swiper-bild');

			if (slider.classList.contains('_swiper_scroll')) {
				let sliderScroll = document.createElement('div');
				sliderScroll.classList.add('swiper-scrollbar');
				slider.appendChild(sliderScroll);
			}
		}
		if (slider.classList.contains('_gallery')) {
			//slider.data('lightGallery').destroy(true);
		}
	}
	sliders_bild_callback();
}

function sliders_bild_callback(params) { }

let sliderScrollItems = document.querySelectorAll('._swiper_scroll');
if (sliderScrollItems.length > 0) {
	for (let index = 0; index < sliderScrollItems.length; index++) {
		const sliderScrollItem = sliderScrollItems[index];
		const sliderScrollBar = sliderScrollItem.querySelector('.swiper-scrollbar');
		const sliderScroll = new Swiper(sliderScrollItem, {
			observer: true,
			observeParents: true,
			direction: 'vertical',
			slidesPerView: 'auto',
			freeMode: true,
			scrollbar: {
				el: sliderScrollBar,
				draggable: true,
				snapOnRelease: false
			},
			mousewheel: {
				releaseOnEdges: true,
			},
		});
		sliderScroll.scrollbar.updateSize();
	}
}


function sliders_bild_callback(params) { }

function addZero(num){
	return (num > 9) ? num : '0' + num;
}

let slider_main = new Swiper('.slider-main__body', {
	observer: true,
	observeParents: true,
	slidesPerView: 1,
	spaceBetween: 0,
	autoHeight: true,
	speed: 800,
	loop: true,
	breakpoints: {
		768: {
			navigation: {
				nextEl: '.main-slider__body .slider-arrow_next',
				prevEl: '.main-slider__body .slider-arrow_prev',
			},
			pagination: {
				el: '.slider-main__pagination',
				type: 'fraction',
				formatFractionCurrent: addZero,
				formatFractionTotal: addZero
			},
		},
	},
	on: {
		lazyImageReady: function () {
			ibg();
		},
	}
});

let sliderTehniqueImg = new Swiper('.image-technique__slider', {
	observer: true,
	observeParents: true,
	slidesPerView: 1,
	spaceBetween: 0,
	effect: "fade",
	autoHeight: false,
	speed: 800,
	on: {
		lazyImageReady: function () {
			ibg();
		},
	}
});

let sliderTehniqueText = new Swiper('.text-technique__slider', {
	observer: true,
	observeParents: true,
	slidesPerView: 1,
	spaceBetween: 0,
	autoHeight: false,
	speed: 800,
	breakpoints: {
		768: {
			navigation: {
				nextEl: '.sliders-technique__arrows .slider-arrow_next',
				prevEl: '.sliders-technique__arrows .slider-arrow_prev',
			},
		},
	},
	scrollbar: {
		el: ".sliders-technique__scrollbar",
		draggable: true,
	},
	on: {
		lazyImageReady: function () {
			ibg();
		},
	}
});

sliderTehniqueImg.controller.control = sliderTehniqueText;
sliderTehniqueText.controller.control = sliderTehniqueImg;

let readyProjectSlidertop = new Swiper('.readyproject__slidertop', {
	observer: true,
	observeParents: true,
	slidesPerView: 8,
	spaceBetween: 30,
	autoHeight: false,
	freeMode: true,
	watchSlidesProgress: true,
	speed: 800,
	breakpoints: {
		320: {
			slidesPerView: 1.5,
		},
		370: {
			slidesPerView: 2,
		},
		480:{
			slidesPerView: 3,
		},
		640:{
			slidesPerView: 4,
		},
		768: {
			slidesPerView: 5,
		},
		992: {
			slidesPerView: 8,
		},
	},
	on: {
		lazyImageReady: function () {
			ibg();
		},
	}
});

let readyProjectSliderbig = new Swiper('.readyproject__sliderbig', {
	observer: true,
	observeParents: true,
	slidesPerView: 1,
	spaceBetween: 0,
	autoHeight: false,
	speed: 800,
	breakpoints: {
		768: {
			navigation: {
				nextEl: '.readyproject__slidertop-arrows .slider-arrow_next',
				prevEl: '.readyproject__slidertop-arrows .slider-arrow_prev',
			},
		},
	},
	scrollbar: {
		el: ".readyproject__slidertop-scrollbar",
		draggable: true,
	},
	thumbs: {
		swiper: readyProjectSlidertop,
	},
	on: {
		lazyImageReady: function () {
			ibg();
		},
	}
});