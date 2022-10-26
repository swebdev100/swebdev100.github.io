$(document).ready(function () {



	var hamburger = document.querySelector('.hamburger'),
		menu = document.querySelector('.menu'),
		closeElem = document.querySelector('.menu__close');
		



	// hamburger.addEventListener('click', () => {
	// 	menu.classList.add('active');
	// });


	hamburger.onclick = function () {
		menu.classList.add('active');
	};

	closeElem.onclick = function () {
		menu.classList.remove('active');
	};

	menu.onclick = function () {
		menu.classList.remove('active');
	};

	// hamburger.onclick =function () {
	// 	menu.classList.add('active');
	// };


	// closeElem.addEventListener('click', () => {
	// 	menu.classList.remove('active');
	// });

	// closeElem.addEventListener('click', () => {
	// 	menu.classList.remove('active');
	// });

	// hamburger.onclick = function () {
	// 	menu.classList.add('active');
	// };

	// closeElem.onclick = function () {
	// 	menu.classList.remove('active');
	// };

	// closeMenu.onclick = function () {
	// 	menu.classList.remove('active');
	// };

	// hamburger.onclick = function () {
	// 	menu.classList.add('active');
	// };

	// const hamburger = document.querySelector('.hamburger'),
	// 	menu = document.querySelector('.menu'),
	// 	closeElem = document.querySelector('.menu__close'),
	// 	closeMenu = document.querySelector('.menu__close_link');



	// $(".hamburger").on("click", function (event) {
	// 	event.preventDefault();
	// 	document.querySelector('.menu').toggleClass('active');
	// });

	// $(".menu__close").on("click", function (event) {
	// 	event.preventDefault();
	// 	document.querySelector('.menu').removeClass('active');
	// });

	// $("[data-close=menu__close_link]").on("click", function (event) {
	// 	event.preventDefault();
	// 	document.querySelector('.menu').removeClass('active');
	// });





	// close1.addEventListener('click', () => {
	// 	menu.classList.remove('active');
	// });

	// close2.addEventListener('click', () => {
	// 	menu.classList.remove('active');
	// });

	// close4.addEventListener('click', () => {
	// 	menu.classList.remove('active');
	// });

	// close5.addEventListener('click', () => {
	// 	menu.classList.remove('active');
	// });

	// close6.addEventListener('click', () => {
	// 	menu.classList.remove('active');
	// });

	$("#menu__nav").on("click", "a", function (event) {
		event.preventDefault();
		var id = $(this).attr('href'),
			top = $(id).offset().top;
		$('body,html').animate({
			scrollTop: top
		}, 900);
	});

	// const counters = document.querySelectorAll('.skills__ratings-counter'),
	// 	lines = document.querySelectorAll('.skills__ratings-line span');

	// counters.forEach((item, i) => {
	// 	lines[i].style.width = item.innerHTML;
	// });

	$('form').submit(function (e) {
		e.preventDefault();
		$.ajax({
			type: "POST",
			url: "mailer/smart.php",
			data: $(this).serialize()
		}).done(function () {
			$(this).find("input").val("");
			// $('#consultation, #order').fadeOut();
			// $('.overlay, #thanks').fadeIn('slow');

			$('form').trigger('reset');
		});
		return false;
	});

	$("#promo__btns").on("click", "a", function (event) {
		event.preventDefault();
		var id = $(this).attr('href'),
			top = $(id).offset().top;
		$('body,html').animate({
			scrollTop: top
		}, 900);
	});

	$("#about__text").on("click", "a", function (event) {
		event.preventDefault();
		var id = $(this).attr('href'),
			top = $(id).offset().top;
		$('body,html').animate({
			scrollTop: top
		}, 900);
	});


});