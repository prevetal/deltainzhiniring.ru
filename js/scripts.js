WW = window.innerWidth || document.clientWidth || document.getElementsByTagName('body')[0].clientWidth
WH = window.innerHeight || document.clientHeight || document.getElementsByTagName('body')[0].clientHeight
BODY = document.getElementsByTagName('body')[0]


document.addEventListener('DOMContentLoaded', function () {
	// Header menu
	let menuSlider = document.querySelector('header .menu .swiper')

	if (menuSlider) {
		new Swiper('header .menu .swiper', {
			loop: false,
			speed: 500,
			watchSlidesProgress: true,
			slideActiveClass: 'active',
			slideVisibleClass: 'visible',
			slidesPerView: 'auto',
			navigation: {
				nextEl: '.swiper-button-next',
				prevEl: '.swiper-button-prev'
			},
			breakpoints: {
				0: {
					spaceBetween: 28
				},
				1440: {
					spaceBetween: 40
				}
			}
		})
	}


	// Main slider
	let mainSlider = document.querySelector('.main_slider .swiper')

	if (mainSlider) {
		new Swiper('.main_slider .swiper', {
			loop: true,
			speed: 750,
			watchSlidesProgress: true,
			slideActiveClass: 'active',
			slideVisibleClass: 'visible',
			spaceBetween: 0,
			slidesPerView: 1,
			pagination: {
				el: '.swiper-pagination',
				type: 'bullets',
				clickable: true,
				bulletActiveClass: 'active'
			},
			navigation: {
				nextEl: '.swiper-button-next',
				prevEl: '.swiper-button-prev'
			},
			lazy: true
		})
	}


	// Product thumbs slider
	const productThumbsSliders = [],
		productThumbs = document.querySelectorAll('.product .images .swiper')

	productThumbs.forEach((el, i) => {
		el.classList.add('product_thumbs_s' + i)

		let options = {
			loop: false,
			speed: 500,
			nested: true,
			watchSlidesProgress: true,
			slideActiveClass: 'active',
			slideVisibleClass: 'visible',
			lazy: true,
			pagination: {
				el: '.swiper-pagination',
				type: 'bullets',
				clickable: true,
				bulletActiveClass: 'active'
			},
			spaceBetween: 0,
			slidesPerView: 1
		}

		productThumbsSliders.push(new Swiper('.product_thumbs_s' + i, options))
	})


	// Products slider
	const productsSliders = [],
		products = document.querySelectorAll('.products .swiper.main')

	products.forEach((el, i) => {
		el.classList.add('products_s' + i)

		let options = {
			loop: true,
			speed: 500,
			watchSlidesProgress: true,
			slideActiveClass: 'active',
			slideVisibleClass: 'visible',
			navigation: {
				nextEl: '.swiper-button-next',
				prevEl: '.swiper-button-prev'
			},
			lazy: true,
			pagination: {
				el: '.swiper-pagination',
				type: 'bullets',
				clickable: true,
				bulletActiveClass: 'active'
			},
			breakpoints: {
				0: {
					spaceBetween: 13,
					slidesPerView: 2
				},
				768: {
					spaceBetween: 13,
					slidesPerView: 3
				},
				1024: {
					spaceBetween: 6,
					slidesPerView: 3
				},
				1280: {
					spaceBetween: 6,
					slidesPerView: 4
				}
			},
			on: {
				init: swiper => setHeight(swiper.el.querySelectorAll('.product_wrap')),
				resize: swiper => {
					let items = swiper.el.querySelectorAll('.product_wrap')

					items.forEach(el => el.style.height = 'auto')

					setHeight(items)
				}
			}
		}

		productsSliders.push(new Swiper('.products_s' + i, options))
	})


	// Cooperation reviews
	const cooperationReviewsSliders = [],
		cooperationReviews = document.querySelectorAll('.cooperation_reviews .swiper')

	cooperationReviews.forEach((el, i) => {
		el.classList.add('cooperation_reviews_s' + i)

		let options = {
			loop: false,
			speed: 500,
			watchSlidesProgress: true,
			slideActiveClass: 'active',
			slideVisibleClass: 'visible',
			lazy: true,
			navigation: {
				nextEl: '.swiper-button-next',
				prevEl: '.swiper-button-prev'
			},
			pagination: {
				el: '.swiper-pagination',
				type: 'bullets',
				clickable: true,
				bulletActiveClass: 'active'
			},
			spaceBetween: 24,
			slidesPerView: 1
		}

		cooperationReviewsSliders.push(new Swiper('.cooperation_reviews_s' + i, options))
	})


	// Articles slider
	const articlesSliders = [],
		articles = document.querySelectorAll('.articles .swiper')

	articles.forEach((el, i) => {
		el.classList.add('articles_s' + i)

		let options = {
			loop: false,
			speed: 500,
			watchSlidesProgress: true,
			slideActiveClass: 'active',
			slideVisibleClass: 'visible',
			navigation: {
				nextEl: '.swiper-button-next',
				prevEl: '.swiper-button-prev'
			},
			lazy: true,
			breakpoints: {
				0: {
					spaceBetween: 12,
					slidesPerView: 'auto'
				},
				480: {
					spaceBetween: 12,
					slidesPerView: 2
				},
				768: {
					spaceBetween: 12,
					slidesPerView: 3
				},
				1280: {
					spaceBetween: 13,
					slidesPerView: 4
				}
			}
		}

		articlesSliders.push(new Swiper('.articles_s' + i, options))
	})


	// Brands slider
	const brandsSliders = [],
		brands = document.querySelectorAll('.brands .swiper')

	brands.forEach((el, i) => {
		el.classList.add('brands_s' + i)

		let options = {
			loop: false,
			speed: 500,
			watchSlidesProgress: true,
			slideActiveClass: 'active',
			slideVisibleClass: 'visible',
			navigation: {
				nextEl: '.swiper-button-next',
				prevEl: '.swiper-button-prev'
			},
			lazy: true,
			spaceBetween: 13,
			breakpoints: {
				0: {
					slidesPerView: 3
				},
				768: {
					slidesPerView: 4
				},
				1024: {
					slidesPerView: 6
				},
				1280: {
					slidesPerView: 8
				}
			}
		}

		brandsSliders.push(new Swiper('.brands_s' + i, options))
	})


	// Mob. contacts gallery
	let contactsMobGallery = document.querySelector('.contacts_info .mob_gallery .swiper')

	if (contactsMobGallery) {
		new Swiper('.contacts_info .mob_gallery .swiper', {
			loop: true,
			speed: 500,
			watchSlidesProgress: true,
			slideActiveClass: 'active',
			slideVisibleClass: 'visible',
			spaceBetween: 20,
			slidesPerView: 1,
			pagination: {
				el: '.swiper-pagination',
				type: 'bullets',
				clickable: true,
				bulletActiveClass: 'active'
			},
			lazy: true
		})
	}


	// Fancybox
	Fancybox.defaults.autoFocus = false
	Fancybox.defaults.trapFocus = false
	Fancybox.defaults.dragToClose = false
	Fancybox.defaults.placeFocusBack = false
	Fancybox.defaults.l10n = {
		CLOSE: 'Закрыть',
		NEXT: 'Следующий',
		PREV: 'Предыдущий',
		MODAL: 'Вы можете закрыть это модальное окно нажав клавишу ESC'
	}

	Fancybox.defaults.tpl = {
		closeButton: '<button data-fancybox-close class="f-button is-close-btn" title="{{CLOSE}}"><svg><use xlink:href="images/sprite.svg#ic_close"></use></svg></button>',

		main: `<div class="fancybox__container" role="dialog" aria-modal="true" aria-label="{{MODAL}}" tabindex="-1">
			<div class="fancybox__backdrop"></div>
			<div class="fancybox__carousel"></div>
			<div class="fancybox__footer"></div>
		</div>`,
	}


	// Modals
	$('.modal_btn').click(function(e) {
		e.preventDefault()

		Fancybox.close()

		Fancybox.show([{
			src: document.getElementById(e.target.getAttribute('data-modal')),
			type: 'inline'
		}])
	})

	$('.mob_modal_title .close_btn').click(function(e) {
		e.preventDefault()

		Fancybox.close()
	})


	$('body').on('click', '.fancybox__backdrop', function (e) {
		e.preventDefault()

		Fancybox.close()
	})


	// Zoom images
	Fancybox.bind('.fancy_img', {
		Image: {
			zoom: false
		},
		Thumbs: {
			autoStart: false
		}
	})


	// Location
	setTimeout(() => $('header .location .dropdown').fadeIn(300), 1000)

	$('header .location .close_btn, header .location .btn.yes_btn').click(function(e) {
		e.preventDefault()

		$('header .location .dropdown').fadeOut(200)
	})


	// Mob. menu
	$('.mob_header .mob_menu_btn, .mob_header .mob_menu_close_btn').click((e) => {
		e.preventDefault()

		$('.mob_header .mob_menu_btn').toggleClass('active')
		$('body').toggleClass('lock')
		$('.mob_menu').toggleClass('show')
	})


	// Phone input mask
	const phoneInputs = document.querySelectorAll('input[type=tel]')

	if (phoneInputs) {
		phoneInputs.forEach(el => {
			IMask(el, {
				mask: '+{7} ( 000 ) 000 - 00 - 00',
				lazy: false
			})
		})
	}


	$('.form .input, .form textarea').keyup(function() {
		let _self = $(this)

		setTimeout(() => {
			_self.val().length
				?_self.addClass('active')
				: _self.removeClass('active')
		})
	})


	// Focus when clicking on the field name
	const formLabels = document.querySelectorAll('form .label')

	if (formLabels) {
		formLabels.forEach(el => {
			el.addEventListener('click', e => {
				e.preventDefault()

				el.closest('.line').querySelector('.input, textarea').focus()
			})
		})
	}


	// Change the quantity of goods
	$('body').on('click', '.amount .minus', function (e) {
		e.preventDefault()

		const $parent = $(this).closest('.amount'),
			$input = $parent.find('.input'),
			inputVal = parseFloat($input.val()),
			minimum = parseFloat($input.data('minimum')),
			step = parseFloat($input.data('step')),
			unit = $input.data('unit')

		if (inputVal > minimum) $input.val(inputVal - step + unit)
	})

	$('body').on('click', '.amount .plus', function (e) {
		e.preventDefault()

		const $parent = $(this).closest('.amount'),
			$input = $parent.find('.input'),
			inputVal = parseFloat($input.val()),
			maximum = parseFloat($input.data('maximum')),
			step = parseFloat($input.data('step')),
			unit = $input.data('unit')

		if (inputVal < maximum) $input.val(inputVal + step + unit)
	})

	$('.amount .input').keydown(function () {
		const _self = $(this),
			maximum = parseInt(_self.data('maximum'))

		setTimeout(() => {
			if (_self.val() == '' || _self.val() == 0) _self.val(parseInt(_self.data('minimum')))
			if (_self.val() > maximum) _self.val(maximum)
		})
	})


	// Product to cart
	$('.product .buy_btn').click(function(e) {
		e.preventDefault()

		// let product = $(this).closest('.product')

		// $(this).toggleClass('active')
		// product.find('.amount').toggleClass('show')

		// Open modal
		Fancybox.show([{
			src: document.getElementById('cart_add_success_modal'),
			type: 'inline'
		}])
	})


	// Product to favorite
	$('.product .favorite_btn, .product_info .favorite_btn, .fixed_product_info .favorite_btn').click(function(e) {
		e.preventDefault()

		$(this).toggleClass('active')

		// Open modal
		Fancybox.show([{
			src: document.getElementById('favorite_add_success_modal'),
			type: 'inline'
		}])
	})


	// Product to compare
	$('.product .compare_btn, .product_info .compare_btn, .fixed_product_info .compare_btn').click(function(e) {
		e.preventDefault()

		$(this).toggleClass('active')

		// Open modal
		Fancybox.show([{
			src: document.getElementById('compare_add_success_modal'),
			type: 'inline'
		}])
	})


	// Accordion
	$('body').on('click', '.accordion .accordion_item .head', function(e) {
		e.preventDefault()

		let item = $(this).closest('.accordion_item'),
			accordion = $(this).closest('.accordion')

		if (item.hasClass('active')) {
			item.removeClass('active').find('.data').slideUp(300)
		} else {
			accordion.find('.accordion_item').removeClass('active')
			accordion.find('.data').slideUp(300)

			item.addClass('active').find('.data').slideDown(300)
		}
	})


	// Tabs
	var locationHash = window.location.hash

	$('body').on('click', '.tabs .btn', function(e) {
		e.preventDefault()

		if (!$(this).hasClass('active')) {
			let parent = $(this).closest('.tabs_container'),
				activeTab = $(this).data('content'),
				activeTabContent = $(activeTab),
				level = $(this).data('level')

			parent.find('.tabs:first .btn').removeClass('active')
			parent.find('.tab_content.' + level).removeClass('active')

			$(this).addClass('active')
			activeTabContent.addClass('active')
		}
	})

	if (locationHash && $('.tabs_container').length) {
		let activeTab = $(`.tabs button[data-content="${locationHash}"]`),
			activeTabContent = $(locationHash),
			parent = activeTab.closest('.tabs_container'),
			level = activeTab.data('level')

		parent.find('.tabs:first .btn').removeClass('active')
		parent.find('.tab_content.' + level).removeClass('active')

		activeTab.addClass('active')
		activeTabContent.addClass('active')

		$('html, body').stop().animate({ scrollTop: $activeTabContent.offset().top }, 1000)
	}


	// Mini popups
	$('.mini_modal_btn').click(function(e) {
		e.preventDefault()

		const modalId = $(this).data('modal-id')

		if ($(this).hasClass('active')) {
			$(this).removeClass('active')
			$('.mini_modal').removeClass('active')

			if (is_touch_device()) $('body').css('cursor', 'default')
		} else {
			$('.mini_modal_btn').removeClass('active')
			$(this).addClass('active')

			$('.mini_modal').removeClass('active')
			$(modalId).addClass('active')

			if (is_touch_device()) $('body').css('cursor', 'pointer')
		}
	})

	// Close the popup when clicking outside of it
	$(document).click(e => {
		if ($(e.target).closest('.modal_cont').length === 0) {
			$('.mini_modal, .mini_modal_btn').removeClass('active')

			if (is_touch_device()) $('body').css('cursor', 'default')
		}
	})


	// Smooth scrolling to anchor
	const scrollBtns = document.querySelectorAll('.scroll_btn')

	if (scrollBtns) {
		scrollBtns.forEach(element => {
			element.addEventListener('click', e => {
				e.preventDefault()

				let anchor = element.getAttribute('data-anchor')

				document.getElementById(anchor).scrollIntoView({
					behavior: 'smooth',
					block: 'start'
				}, 1000)
			})
		})
	}


	$prepaidRange = $('.credit_order #prepaid_range').ionRangeSlider({
		min: 10,
		max: 90,
		from: 10,
		step: 10,
		postfix: '%',
		onChange: data => {
			$('.credit_order .prepaid_range input').val(data.from + '%')
		},
		onUpdate: data => {
			$('.credit_order .prepaid_range input').val(data.from + '%')
		}
	}).data('ionRangeSlider')


	$termRange = $('.credit_order #term_range').ionRangeSlider({
		values: ['12 мес.', '18 мес.', '24 мес.', '36 мес.', '48 мес.', '60 мес.'],
		step: 1,
		onChange: data => {
			$('.credit_order .term_range input').val(data.from_value)
		},
		onUpdate: data => {
			$('.credit_order .term_range input').val(data.from_value)
		}
	}).data('ionRangeSlider')


	// Checkout
	$('.checkout_info .entity label').click(function(e) {
		if (e.target.nodeName === 'LABEL') {
			$('.checkout_info .entity_info').slideToggle(300)
		}
	})


	// Text spoler
	$('.text_block .spoler_btn').click(function(e) {
		e.preventDefault()

		let parent = $(this).closest('.text_block')

		$(this).toggleClass('active')
		parent.find('.hide').slideToggle(300)
	})


	// Filter
	$('.filter .name').click(function(e) {
		e.preventDefault()

		$(this).toggleClass('active').next('.data').slideToggle(300)
	})

	$('.filter .spoler_btn').click(function(e) {
		e.preventDefault()

		$(this).toggleClass('active').closest('.data').find('.hide').slideToggle(300)
	})

	$priceRange = $('.filter #price_range').ionRangeSlider({
		type: 'double',
		min: 0,
		max: 9999999,
		from: 0,
		to: 9999999,
		step: 1,
		onChange: data => {
			$('.filter .price_range input.from').val(data.from.toLocaleString('ru-RU'))
			$('.filter .price_range input.to').val(data.to.toLocaleString('ru-RU'))
		},
		onUpdate: data => {
			$('.filter .price_range input.from').val(data.from.toLocaleString('ru-RU'))
			$('.filter .price_range input.to').val(data.to.toLocaleString('ru-RU'))
		}
	}).data('ionRangeSlider')

	$('.filter .price_range .input').keyup(function () {
		$priceRange.update({
			from: parseInt($('.filter .price_range input.from').val().replace(/\s/g, '')),
			to: parseInt($('.filter .price_range input.to').val().replace(/\s/g, ''))
		})
	})

	$('.filter_reset_btn').click(function() {
		if($priceRange) {
			$priceRange.reset()
		}

		$('.filter form').get(0).reset()
	})


	// Product page
	if ($('.product_info .images').length) {
		const productThumbs = new Swiper('.product_info .thumbs .swiper', {
			loop: true,
			speed: 500,
			watchSlidesProgress: true,
			slideActiveClass: 'active',
			slideVisibleClass: 'visible',
			spaceBetween: 10,
			lazy: true,
			slidesPerView: 5,
			navigation: {
				nextEl: '.swiper-button-next',
				prevEl: '.swiper-button-prev'
			}
		})

		new Swiper('.product_info .big .swiper', {
			loop: true,
			speed: 500,
			watchSlidesProgress: true,
			slideActiveClass: 'active',
			slideVisibleClass: 'visible',
			spaceBetween: 20,
			slidesPerView: 1,
			lazy: true,
			thumbs: {
				swiper: productThumbs
			},
			pagination: {
				el: '.swiper-pagination',
				type: 'bullets',
				clickable: true,
				bulletActiveClass: 'active'
			}
		})
	}


	// Quike buy
	$('#quike_buy_modal .form .input').focus(function() {
		$('#quike_buy_modal .form .hide').removeClass('hide')
	})

	$('#quike_buy_modal .form').submit(function(e) {
		e.preventDefault()

		let parent = $(this)

		parent.find('.success').addClass('show')
	})


	// Catalog modal
	$('header .catalog .list > *').mouseenter(function() {
		if (!$(this).find('a').hasClass('active')) {
			$('header .catalog .list a').removeClass('active')
			$(this).find('a').addClass('active')

			$('header .catalog .sub').hide()
			$('header .catalog .sub' + ($(this).index() + 1)).fadeIn(300)
		}
	})


	// Order form
	$('.order_form form').submit(function(e) {
		e.preventDefault()

		let parent = $(this).closest('.order_form')

		parent.find('.success').addClass('show')
	})


	// Cookie
	$('.cookie .btn').click(function(e) {
		e.preventDefault()

		$('.cookie').fadeOut(200)
	})


	// Reviews
	$('.reviews .add_btn').click(function(e) {
		e.preventDefault()

		$('.reviews .add_review').fadeIn(300)
	})

	$('.reviews .add_review form').submit(function(e) {
		e.preventDefault()

		let parent = $(this).closest('.add_review')

		parent.find('.form').hide()
		parent.find('.success').fadeIn(300)
	})


	const reviewsSliders = [],
		reviews = document.querySelectorAll('.reviews .swiper')

	reviews.forEach((el, i) => {
		el.classList.add('reviews_s' + i)

		let options = {
			loop: false,
			speed: 500,
			watchSlidesProgress: true,
			slideActiveClass: 'active',
			slideVisibleClass: 'visible',
			navigation: {
				nextEl: '.swiper-button-next',
				prevEl: '.swiper-button-prev'
			},
			spaceBetween: 24,
			slidesPerView: 1
		}

		reviewsSliders.push(new Swiper('.reviews_s' + i, options))
	})


	// Aligning elements in the grid
	document.querySelectorAll('.catalog .row').forEach(el => {
		let styles = getComputedStyle(el)

		catalogHeight(el, parseInt(styles.getPropertyValue('--count')))
	})

	document.querySelectorAll('.products .row').forEach(el => {
		let styles = getComputedStyle(el)

		productsHeight(el, parseInt(styles.getPropertyValue('--count')))
	})


	// Copy btn
	const clipboard = new ClipboardJS('.copy_btn')

	clipboard.on('success', e => {
		$(e.trigger).addClass('copied')

		setTimeout(() => $(e.trigger).removeClass('copied'), 2000)

		e.clearSelection()
	})


	if (is_touch_device()) {
		const subLinks = document.querySelectorAll('header .links .sub_links')

		// Sublinks on the touch screen
		$('header .links a.sub_link').addClass('touch_link')

		$('header .links a.sub_link').click(function (e) {
			let dropdown = $(this).next()

			if (dropdown.css('visibility') === 'hidden') {
				e.preventDefault()

				subLinks.forEach(el => el.classList.remove('show'))
				dropdown.addClass('show')

				BODY.style = 'cursor: pointer;'
			}
		})

		// Close the submenu when clicking outside it
		document.addEventListener('click', e => {
			if ($(e.target).closest('.links').length === 0) {
				subLinks.forEach(el => el.classList.remove('show'))

				BODY.style = 'cursor: default;'
			}
		})
	}


	// Custom select - Nice select
	const selects = document.querySelectorAll('select')

	if (selects) {
		selects.forEach(el => {
			NiceSelect.bind(el, {
				placeholder: el.getAttribute('data-placeholder')
			})

			el.addEventListener('change', () => el.classList.add('selected'))
		})
	}


	// Mob. catalog
	$('#mob_catalog_modal .links a.sub_link').click(function(e) {
		e.preventDefault()

		let sub = $(this).data('sub')

		$('#mob_catalog_modal .' + sub).addClass('show')
	})

	$('#mob_catalog_modal .sub .close_btn').click(function(e) {
		e.preventDefault()

		let parent = $(this).closest('.sub')

		parent.removeClass('show')
	})


	// Clients
	initClientsSliders()

	// Certs
	initCertsSliders()


	// Mob. popular requests
	$('.mob_popular_requests .title').click(function(e) {
		e.preventDefault()

		$(this).toggleClass('active').next().slideToggle(300)
	})


	// Mob. aside links
	$('.mob_aside_links .title').click(function(e) {
		e.preventDefault()

		$(this).toggleClass('active').next().slideToggle(300)
	})
})



window.addEventListener('load', function () {
	// Fix. header
	headerInit = true,
	headerHeight = $('header:not(.no_fixed)').outerHeight()

	$('header:not(.no_fixed)').wrap('<div class="header_wrap"></div>')
	$('.header_wrap').height(headerHeight)

	headerInit && $(window).scrollTop() > headerHeight
		? $('header:not(.no_fixed)').addClass('fixed')
		: $('header:not(.no_fixed)').removeClass('fixed')


	// Set header height
	document.documentElement.style.setProperty('--header_height', headerHeight + 'px')


	// Contacts block
	setHeight(document.querySelectorAll('.contacts_block .label'))
})



window.addEventListener('scroll', function () {
	// Fix. header
	typeof headerInit !== 'undefined' && headerInit && $(window).scrollTop() > headerHeight
		? $('header:not(.no_fixed)').addClass('fixed')
		: $('header:not(.no_fixed)').removeClass('fixed')


	// Fix. product
	$(window).scrollTop() > $(window).outerHeight()
		? $('.fixed_product_info').fadeIn(200)
		: $('.fixed_product_info').fadeOut(100)


	// Set header height
	document.documentElement.style.setProperty('--header_height', $('header').outerHeight() + 'px')
})



window.addEventListener('resize', function () {
	WH = window.innerHeight || document.clientHeight || BODY.clientHeight

	let windowW = window.outerWidth

	if (typeof WW !== 'undefined' && WW != windowW) {
		// Overwrite window width
		WW = window.innerWidth || document.clientWidth || BODY.clientWidth


		// Fix. header
		headerInit = false
		$('.header_wrap').height('auto')

		setTimeout(() => {
			headerInit = true
			headerHeight = $('header').outerHeight()

			$('.header_wrap').height(headerHeight)

			headerInit && $(window).scrollTop() > headerHeight
				? $('header:not(.no_fixed)').addClass('fixed')
				: $('header:not(.no_fixed)').removeClass('fixed')


			// Set header height
			document.documentElement.style.setProperty('--header_height', headerHeight + 'px')
		}, 100)


		// Aligning elements in the grid
		document.querySelectorAll('.catalog .row').forEach(el => {
			let styles = getComputedStyle(el)

			catalogHeight(el, parseInt(styles.getPropertyValue('--count')))
		})

		document.querySelectorAll('.products .row').forEach(el => {
			let styles = getComputedStyle(el)

			productsHeight(el, parseInt(styles.getPropertyValue('--count')))
		})


		// Contacts block
		let contactsLabels = document.querySelectorAll('.contacts_block .label')

		contactsLabels.forEach(label => label.style.height = 'auto')

		setHeight(contactsLabels)


		// Clients
		initClientsSliders()

		// Certs
		initCertsSliders()


		// Mob. version
		if (!fakeResize) {
			fakeResize = true
			fakeResize2 = false

			document.getElementsByTagName('meta')['viewport'].content = 'width=device-width, initial-scale=1, maximum-scale=1'
		}

		if (!fakeResize2) {
			fakeResize2 = true

			if (windowW < 360) document.getElementsByTagName('meta')['viewport'].content = 'width=360, user-scalable=no'
		} else {
			fakeResize = false
			fakeResize2 = true
		}
	}
})



// Alignment of categories
function catalogHeight(context, step) {
	let start = 0,
		finish = step,
		items = [...context.querySelectorAll('.category')],
		itemsName = context.querySelectorAll('.name'),
		itemsSub = context.querySelectorAll('.sub'),
		i = 0

	itemsName.forEach(el => el.style.height = 'auto')
	itemsSub.forEach(el => el.style.height = 'auto')

	items.forEach(el => {
		items.slice(start, finish).forEach(el => el.setAttribute('nodeList', i))

		setHeight(context.querySelectorAll('[nodeList="' + i + '"] .name'))
		setHeight(context.querySelectorAll('[nodeList="' + i + '"] .sub'))

		start = start + step
		finish = finish + step
		i++
	})
}


// Alignment of products
function productsHeight(context, step) {
	let start = 0,
		finish = step,
		items = [...context.querySelectorAll('.product_wrap')],
		i = 0

	items.forEach(el => el.style.height = 'auto')

	items.forEach(el => {
		items.slice(start, finish).forEach(el => el.setAttribute('nodeList', i))

		setHeight(context.querySelectorAll('[nodeList="' + i + '"]'))

		start = start + step
		finish = finish + step
		i++
	})
}



// Clients
clientsSliders = []

function initClientsSliders() {
	if ($(window).width() > 767) {
		if ($('.clients .row').length) {
			$('.clients .row > *').addClass('swiper-slide')
			$('.clients .row').addClass('swiper-wrapper').removeClass('row')

			$('.clients .swiper').each(function (i) {
				$(this).addClass('clients_s' + i)

				let options = {
					loop: true,
					watchSlidesProgress: true,
					slideActiveClass: 'active',
					slideVisibleClass: 'visible',
					spaceBetween: 13,
					slidesPerView: 'auto',
					speed: 500,
					// centeredSlides: true,
					// speed: 6000,
					// autoplay: {
					// 	delay: 1,
					// 	disableOnInteraction: false
					// },
					// allowTouchMove: false
				}

				clientsSliders.push(new Swiper('.clients_s' + i, options))
			})
		}
	} else {
		clientsSliders.forEach(element => element.destroy(true, true))

		clientsSliders = []

		$('.clients .swiper-wrapper').addClass('row').removeClass('swiper-wrapper')
		$('.clients .row > *').removeClass('swiper-slide')
	}
}



// Certs
certsSliders = []

function initCertsSliders() {
	if ($(window).width() > 767) {
		if ($('.certs .row').length) {
			$('.certs .row > *').addClass('swiper-slide')
			$('.certs .row').addClass('swiper-wrapper').removeClass('row')

			$('.certs .swiper').each(function (i) {
				$(this).addClass('certs_s' + i)

				let options = {
					loop: true,
					speed: 500,
					watchSlidesProgress: true,
					slideActiveClass: 'active',
					slideVisibleClass: 'visible',
					navigation: {
						nextEl: '.swiper-button-next',
						prevEl: '.swiper-button-prev'
					},
					lazy: true,
					breakpoints: {
						0: {
							spaceBetween: 13,
							slidesPerView: 2
						},
						480: {
							spaceBetween: 20,
							slidesPerView: 2
						},
						768: {
							spaceBetween: 24,
							slidesPerView: 3
						},
						1024: {
							spaceBetween: 24,
							slidesPerView: 4
						},
						1280: {
							spaceBetween: 36,
							slidesPerView: 6
						}
					}
				}

				certsSliders.push(new Swiper('.certs_s' + i, options))
			})
		}
	} else {
		certsSliders.forEach(element => element.destroy(true, true))

		certsSliders = []

		$('.certs .swiper-wrapper').addClass('row').removeClass('swiper-wrapper')
		$('.certs .row > *').removeClass('swiper-slide')
	}
}