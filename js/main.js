/* global $, JQuery */

$(function() {
	'use strict';

	/*
	Initialization highlight Js
	------------------------ */

	$('pre code').each(function(i, block) {
		hljs.highlightBlock(block);
	});

	/*
	Toggel Show Menus Sidebar Whin Click On ( Basic - Advanced )
	--------------------------------------------------------- */

	var basic = $('#basic'),
		advanced = $('#advanced'),
		basicList = $('.list-docs.basic'),
		advancedList = $('.list-docs.Advanced');

	function showBasicList() {
		advancedList.fadeOut(200);
		basicList.delay(500).fadeIn(200);
		basic.addClass('active-show');
		advanced.removeClass('active-show');
	};

	function showAdvancedList() {
		basicList.fadeOut(200);
		advancedList.delay(500).fadeIn(200);
		advanced.addClass('active-show');
		basic.removeClass('active-show');
	};

	basic.on('click', function() {
		showBasicList();
	});

	advanced.on('click', function() {
		showAdvancedList();
	});

	/*
	Make Background On Ancor Win Scroll It Section
	------------------------------------------- */

	var navLinks = $('.sidebar-fixed a'),
		section = $('.content .box'),
		decumentEle = $(document);

	navLinks.on('click', function() {
		navLinks.removeClass('active-link');
		$(this).addClass('active-link');
	});

	decumentEle.on('scroll', function() {
		var currentScrollPos = decumentEle.scrollTop();

		section.each(function() {

			var that = $(this);

			if ( that.offset().top < currentScrollPos && currentScrollPos < (that.offset().top + that.outerHeight()) ) {
				var targetHref = '#' + that.attr('id');

				navLinks.removeClass('active-link');
				$('a[href="' + targetHref + '"]').addClass('active-link');
			}
			
		});
	});

	/*
	Toggel Menu Sidebar When Scroll Section Bacis / Advanced
	----------------------------------------------------- */

	var startAdvanced = $('#start-advanced-section'),
		startAdvancedOffsetTop = startAdvanced.offset().top;

	decumentEle.on('scroll', function() {

		var currentScrollPos_1 = decumentEle.scrollTop();

		if (currentScrollPos_1 > startAdvancedOffsetTop) {
			console.log('Advanced');
		} else {
			console.log('Basic');
		}
		
	});

	/*
	Add Toggele Slide Icon To Box
	-------------------------- */

	var theBox= $('.content .box h2');

	theBox.prepend('<i id="slideDown" class="icon-plus4"></i>');
	theBox.prepend('<i id="slideUp" class="icon-minus5"></i>');

	$('i#slideUp').click(function() {
		$(this).parent().parent().find('section').slideUp(200);
		$(this).fadeOut(200);
		$(this).parent().find('#slideDown').delay(400).fadeIn(200);
	});

	$('i#slideDown').click(function() {
		$(this).parent().parent().find('section').slideDown(200);
		$(this).fadeOut(200);
		$(this).parent().find('#slideUp').delay(400).fadeIn(200);
	}); 

});