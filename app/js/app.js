// // Import vendor jQuery plugin example
// import '~/app/libs/mmenu/dist/mmenu.js'
import { Swiper, Parallax, Mousewheel, Pagination, Scrollbar, Navigation, Controller} from 'swiper'
Swiper.use([ Parallax, Mousewheel, Pagination, Scrollbar, Navigation, Controller ])
document.addEventListener('DOMContentLoaded', () => {

	const swiperIMG = new Swiper('.partnership--slider', {
		loop: false,
		speed: 2000,
		parallax: true,
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
	// const swiperText =new Swiper('.partnership__slider--text', {
	// 	loop: false,
	// 	speed: 2000,
	// }) 

	// swiperIMG.controller.control = swiperText;
	// swiperText.controller.control = swiperIMG;


})
