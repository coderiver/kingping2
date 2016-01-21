$(document).ready(function() {

	$('.js-menu').click(function(event){
		$(this).toggleClass('is-active');
		$('.header__menu').toggleClass('is-open');
		$('.header__lang').toggleClass('is-hidden');
		$('.header__right').toggleClass('is-menu-open');
	});

	$('.js-slick').slick({
		fade: true,
		arrows: false,
		dots: true
	});

	$('.js-slider').slick({
		arrows: true,
		dots: false,
		slidesToShow: 3,
		slidesToScroll: 1,
		infinite: true,
		responsive: [
		   {
		     breakpoint: 980,
		     settings: {
		       slidesToShow: 2
		     }
		   },
		   {
		     breakpoint: 768,
		     settings: {
		       slidesToShow: 1,
		     }
		   }
		 ]
	});

//inputs focus 

	$('.js-input').focusin(function() {
		$(this).parent('.js-field').addClass('is-active');
	});	
	$('.js-input').focusout(function() {
			$(this).parent('.js-field').removeClass('is-active');	
	});

	//effects
	function visibility(){
		var window_top = $(window).scrollTop();
		var window_height = $(window).height();
		var start_visibility = window_top + window_height;
	  
		$(".js-visibility").each(function(){
		
			var block_position = $(this).offset().top;

			if(start_visibility >= block_position){
				$(this).addClass('is-visible');
			}
		});
	}
	visibility();
	$(window).scroll(function(){
		visibility();
	});
	$(window).load(function(){
		visibility();
	});


	$('.js-nav a').on('click', function() {
        var section = $(this).attr('href');
        $('html, body').animate({
            scrollTop: $(section).offset().top - 10
        }, 500);
        return false;
    });

    //animation

    	//globalMarket


	$('.js-gm').each(function() {

		var item = $(this)
			itemTop = item.offset(),
			itemHeight = item.outerHeight(),
			itemLogo = item.find('.js-gm-item[data-animation="logo"]'),
			itemFirst = item.find('.js-gm-item[data-animation="gmfirst"]'),
			itemSecond = item.find('.js-gm-item[data-animation="gmsecond"]'),
			itemThird = item.find('.js-gm-item[data-animation="gmthird"]');

		//arrows
		var arrChina = $('.js-arr-china'),
			arrChinaOne = arrChina.find('.js-path[data-id="1"]'),
			arrChinaTwo = arrChina.find('.js-path[data-id="2"]'),
			arrChinaThree = arrChina.find('.js-path[data-id="3"]'),
			arrChinaFour = arrChina.find('.js-path[data-id="4"]');

		var arrKronet = $('.js-arr-kronet'),
			arrKronetOne = arrKronet.find('.js-path[data-id="1"]'),
			arrKronetTwo = arrKronet.find('.js-path[data-id="2"]'),
			arrKronetThree = arrKronet.find('.js-path[data-id="3"]'),
			arrKronetFour = arrKronet.find('.js-path[data-id="4"]'),
			arrKronetFive = arrKronet.find('.js-path[data-id="5"]'),
			arrKronetSix = arrKronet.find('.js-path[data-id="6"]');

		var arrMobinizer = $('.js-arr-mobinizer'),
			arrMobinizerOne = arrMobinizer.find('.js-path[data-id="1"]'),
			arrMobinizerTwo = arrMobinizer.find('.js-path[data-id="2"]'),
			arrMobinizerThree = arrMobinizer.find('.js-path[data-id="3"]'),
			arrMobinizerFour = arrMobinizer.find('.js-path[data-id="4"]'),
			arrMobinizerFive = arrMobinizer.find('.js-path[data-id="5"]');

		var arrConvert = $('.js-arr-convertlab'),
			arrConvertOne = arrConvert.find('.js-path[data-id="1"]'),
			arrConvertTwo = arrConvert.find('.js-path[data-id="2"]'),
			arrConvertThree = arrConvert.find('.js-path[data-id="3"]'),
			arrConvertFour = arrConvert.find('.js-path[data-id="4"]');

		var arrMobi = $('.js-arr-mobi'),
			arrMobiOne = arrMobi.find('.js-path[data-id="1"]'),
			arrMobiTwo = arrMobi.find('.js-path[data-id="2"]'),
			arrMobiThree = arrMobi.find('.js-path[data-id="3"]'),
			arrMobiFour = arrMobi.find('.js-path[data-id="4"]'),
			arrMobiFive = arrMobi.find('.js-path[data-id="5"]'),
			arrMobiSix = arrMobi.find('.js-path[data-id="6"]'),
			arrMobiSeven = arrMobi.find('.js-path[data-id="7"]'),
			arrMobiEight = arrMobi.find('.js-path[data-id="8"]'),
			arrMobiNine = arrMobi.find('.js-path[data-id="9"]'),
			arrMobiTen = arrMobi.find('.js-path[data-id="10"]'),
			arrMobiEleven = arrMobi.find('.js-path[data-id="11"]');

		function gmMain() {
			itemLogo.addClass('is-visible');
		}
		function gmFirst() {
			itemFirst.addClass('is-visible');
		}
		function gmSecond() {
			itemSecond.addClass('is-visible');
		}
		function gmThird() {
			itemThird.addClass('is-visible');
		}

		var globalMarket = new TimelineMax({ paused: true });

		globalMarket
			.fromTo(itemLogo, 0.7, {
				scale: 0.5,
				opacity: 0
			}, {
				scale: 1,
				opacity: 1,
			})
			.add(gmMain)
			.staggerFrom([arrChinaOne, arrChinaTwo, arrChinaThree, arrChinaFour], 0.2,
			{
				opacity: 0
			}, 0.1)
			.staggerFrom([arrKronetOne, arrKronetTwo, arrKronetThree, arrKronetFour, arrKronetFive, arrKronetSix], 0.1,
			{
				opacity: 0
			}, 0.1, "-=0.6")
			.fromTo(itemFirst, 0.6, {
				scale: 0.5,
				opacity: 0
			}, {
				scale: 1,
				opacity: 1
			})
			.add(gmFirst, "-=0.2")
			.staggerFrom([arrMobinizerOne, arrMobinizerTwo, arrMobinizerThree, arrMobinizerFour, arrMobinizerFive], 0.1,
			{
				opacity: 0
			}, 0.1)
			.staggerFrom([arrConvertOne, arrConvertTwo, arrConvertThree, arrConvertFour], 0.1,
			{
				opacity: 0
			}, 0.1, "-=0.4")
			.fromTo(itemSecond, 0.6, {
				scale: 0.5,
				opacity: 0
			}, {
				scale: 1,
				opacity: 1
			})
			.add(gmSecond, "-=0.2")
			.staggerFrom([arrMobiOne, arrMobiTwo, arrMobiThree, arrMobiFour, arrMobiFive, arrMobiSix, arrMobiSeven, arrMobiEight, arrMobiNine, arrMobiTen, arrMobiEleven], 0.03,
			{
				opacity: 0
			}, 0.05)
			.fromTo(itemThird, 0.6, {
				scale: 0.5,
				opacity: 0
			}, {
				scale: 1,
				opacity: 1
			})
			.add(gmThird, "-=0.2");

		$(window).scroll(function() {
			var windowTop = $(window).scrollTop(),
				windowHeight = $(window).height();

			if (windowTop + windowHeight >= itemTop.top + (itemHeight/2)) {
				globalMarket.play();
			};
		});
		$(window).load(function() {
			var windowTop = $(window).scrollTop(),
				windowHeight = $(window).height();

			if (windowTop + windowHeight >= itemTop.top + (itemHeight/2)) {
				globalMarket.play();
			};
		});
	});

	//smart tds

	$('.js-smart').each(function() {
		var item = $(this)
			smartTop = item.offset(),
			smartHeight = item.outerHeight();

		//ppls

		var pplOne = item.find('.js-smart-man[data-id="1"]'),
			pplTwo = item.find('.js-smart-man[data-id="2"]'),
			pplThree = item.find('.js-smart-man[data-id="3"]');

		//arrs
		var arrOne = item.find('.js-path[data-id="1"]'),
			arrTwo = item.find('.js-path[data-id="2"]'),
			arrThree = item.find('.js-path[data-id="3"]'),
			arrFour = item.find('.js-path[data-id="4"]'),
			arrFive = item.find('.js-path[data-id="5"]'),
			arrSix = item.find('.js-path[data-id="6"]'),
			arrSeven = item.find('.js-path[data-id="7"]');

		//server box
		var boxOne = item.find('.js-smart-box[data-id="1"]'),
			boxTwo = item.find('.js-smart-box[data-id="2"]'),
			boxThree = item.find('.js-smart-box[data-id="3"]'),
			boxFour = item.find('.js-smart-box[data-id="4"]');


		function serverClass() {
			item.addClass('is-visible');
			setTimeout(function() {
				item.find('.js-server').attr('fill', '#E0E4E7');
			}, 1200);			
		}

		//counter
		var counter = item.find('.js-smart-counter');

		//chart
		var circleOne = item.find('.js-chart-circle[data-id="1"]'),
			circleTwo = item.find('.js-chart-circle[data-id="2"]'),
			circleThree = item.find('.js-chart-circle[data-id="3"]');

		var lineOne = item.find('.js-chart-line[data-id="1"]'),
			lineTwo = item.find('.js-chart-line[data-id="2"]'),
			lineThree = item.find('.js-chart-line[data-id="3"]');

		var chartCard = item.find('.js-chart-card');

		var lineOneWidth = lineOne.data('width'),
			lineTwoWidth = lineTwo.data('width'),
			lineThreeWidth = lineThree.data('width');

		var rowOne = item.find('.js-chart-row[data-id="1"]'),
			rowTwo = item.find('.js-chart-row[data-id="2"]'),
			rowThree = item.find('.js-chart-row[data-id="3"]'),
			rowFour = item.find('.js-chart-row[data-id="4"]'),
			rowFive = item.find('.js-chart-row[data-id="5"]');

		var colOne = item.find('.js-chart-col[data-id="1"]'),
			colTwo = item.find('.js-chart-col[data-id="2"]'),
			colThree = item.find('.js-chart-col[data-id="3"]'),
			colFour = item.find('.js-chart-col[data-id="4"]'),
			colFive = item.find('.js-chart-col[data-id="5"]');

		var colOneHeight = colOne.data('height'),
			colTwoHeight = colTwo.data('height'),
			colThreeHeight = colThree.data('height'),
			colFourHeight = colFour.data('height'),
			colFiveHeight = colFive.data('height');

		var chartMoney = item.find('.js-chart-money');

		var smart = new TimelineMax({ paused: true });

		smart
			.staggerFrom([pplOne, pplTwo, pplThree], 0.5,
			{
				opacity: 0
			}, 0.3)
			.staggerFrom([arrOne, arrTwo, arrThree, arrFour, arrFive, arrSix, arrSeven], 0.2,
			{
				opacity: 0
			}, 0.1)
			.add(serverClass)
			.staggerFrom([boxOne, boxTwo, boxThree, boxFour], 0.3,
			{
				opacity: 0
			}, 0.2, "+=1.3")
			.from(counter, 0.5, {
				opacity: 0
			})
			.from(circleOne, 0.2, {
				opacity: 0
			})
			.to(lineOne, 0.3, {
				width: lineOneWidth
			}, "-=0.15")
			.from(circleTwo, 0.2, {
				opacity: 0
			})
			.to(lineTwo, 0.3, {
				width: lineTwoWidth
			}, "-=0.15")
			.from(circleThree, 0.2, {
				opacity: 0
			})
			.to(lineThree, 0.3, {
				width: lineThreeWidth
			}, "-=0.15")
			.from(chartCard, 0.3, {
				opacity: 0,
				y: -10
			}, "-=0.7")
			.from(rowOne, 0.1, {
				opacity: 0
			}, "-=1")
			.to(colOne, 0.3, {
				height: colOneHeight
			}, "-=0.8")
			.from(rowTwo, 0.1, {
				opacity: 0
			}, "-=0.8")
			.to(colTwo, 0.3, {
				height: colTwoHeight
			}, "-=0.5")
			.from(rowThree, 0.1, {
				opacity: 0
			}, "-=0.5")
			.to(colThree, 0.3, {
				height: colThreeHeight
			}, "-=0.2")
			.from(rowFour, 0.1, {
				opacity: 0
			}, "-=0.2")
			.to(colFour, 0.3, {
				height: colFourHeight
			})
			.from(rowFive, 0.1, {
				opacity: 0
			})
			.to(colFive, 0.3, {
				height: colFiveHeight
			})
			.from(chartMoney, 0.3, {
				opacity: 0,
				y: -15
			}, "-=0.3");
		$(window).scroll(function() {
			var windowTop = $(window).scrollTop(),
				windowHeight = $(window).height();

			if (windowTop + windowHeight >= smartTop.top + (smartHeight/2)) {
				smart.play();
			};
		});
		$(window).load(function() {
			var windowTop = $(window).scrollTop(),
				windowHeight = $(window).height();
			if (windowTop + windowHeight >= smartTop.top + (smartHeight/2)) {
				smart.play();
			};
		});
	});
 
});