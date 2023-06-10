import Swiper from 'swiper/bundle'
import 'swiper/css/bundle'

const swiper1 = new Swiper('.mySwiper', {
	slidesPerView: getslidesPerView(),
	spaceBetween: 10,

	navigation: {
		nextEl: '.employees__swiper-button-next',
		prevEl: '.employees__swiper-button-prev',
	},
	grid: {
		rows: 2,
	},
})

const swiper2 = new Swiper('.mySwiper2', {
	slidesPerView: getslidesPerView2(),
	spaceBetween: 30,
	navigation: {
		nextEl: '.sponsors__swiper-button-next',
		prevEl: '.sponsors__swiper-button-prev',
	},
})

function getslidesPerView() {
	if (window.innerWidth <= 1450 && window.innerWidth > 1024) {
		return 3
	} else if (window.innerWidth <= 1024 && window.innerWidth > 768) {
		return 2
	} else if (window.innerWidth <= 768) {
		return 1
	} else {
		return 4
	}
}
function getslidesPerView2() {
	if (window.innerWidth <= 1100 && window.innerWidth > 920) {
		return 3
	} else if (window.innerWidth <= 920 && window.innerWidth > 576) {
		return 2
	} else if (window.innerWidth <= 576) {
		return 1
	} else {
		return 4
	}
}

window.addEventListener('resize', () => {
	try {
		if (swiper1) {
			swiper1.params.slidesPerView = getslidesPerView()
			swiper1.update()
		}
	} catch (err) {}
	try {
		if (swiper2) {
			swiper2.params.slidesPerView = getslidesPerView2()
			swiper2.update()
		}
	} catch (err) {}
})
