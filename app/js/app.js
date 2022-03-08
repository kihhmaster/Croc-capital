// // Import vendor jQuery plugin example
// import '~/app/libs/mmenu/dist/mmenu.js'
import { Swiper, Parallax, Mousewheel, Pagination, Scrollbar, Navigation, Controller} from 'swiper'
Swiper.use([ Parallax, Mousewheel, Pagination, Scrollbar, Navigation, Controller ])
document.addEventListener('DOMContentLoaded', () => {

	const swiperIMG = new Swiper('.partnership--slider', {
		loop: false,
		speed: 2000,
		// mousewheel: {
		// 	invert: false,
		// },
		pagination: {
			el: '.swiper-pagination',
			clickable: true,
			type: 'bullets',
		},
		scrollbar: {
			el: '.swiper-scrollbar',
			draggable: true,
		},
		navigation: {
			nextEl: '.swiper-button-next',
			prevEl: '.swiper-button-prev',
		},
	})
	const swiperAbout = new Swiper('.about__slider', {
		loop: false,
		speed: 2000,
		pagination: {
			el: '.swiper-pagination',
			clickable: true,
			type: 'bullets',
		},
		scrollbar: {
			el: '.swiper-scrollbar',
			draggable: true,
		},
		navigation: {
			nextEl: '.swiper-button-next',
			prevEl: '.swiper-button-prev',
		},
	})



})
