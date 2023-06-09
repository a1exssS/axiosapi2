import Swiper from 'swiper/bundle'
import {Navigation} from 'swiper'
import 'swiper/css/bundle'

const swiper1 = new Swiper('.mySwiper', {
	slidesPerView: 4,
	spaceBetween: 10,
	grid: {
		rows: 2,
	},

	navigation: {
		nextEl: '.employees__swiper-button-next',
		prevEl: '.employees__swiper-button-prev',
	},
})

const swiper2 = new Swiper('.mySwiper2', {
	slidesPerView: 4,
	spaceBetween: 30,
	navigation: {
		nextEl: '.sponsors__swiper-button-next',
		prevEl: '.sponsors__swiper-button-prev',
	},
})
