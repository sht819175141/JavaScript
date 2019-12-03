// 大背景切换
$(function(){
	$('.banner .banner01,.wrap ul .bg01').show();
	
	var timer01 = null;
	var num = 0;
	var timerFn = function(){
		num++
		if(num > 3){
			num = 0;
		};
		$('.wrap ul li').eq(num).stop().fadeIn(2000).siblings().stop().fadeOut(2000);
		$('.olList li').eq(num).addClass('current').siblings().removeClass('current');
		$('.ulList .uBg .ucurrent').stop().animate({'left': num*251 +'px'});
		$('.banner li').eq(num).stop().fadeIn().siblings().stop().fadeOut();
	};
	
	//自动播放
	timer01 = setInterval(timerFn,5000);
	//底部列表切换
	$('.ulList li').hover(function(){
		clearInterval(timer01);
		timer01 = null;
		var num = $(this).index();
		$('.ulList .uBg .ucurrent').stop().animate({'left': num*251 +'px'});
		$('.olList li').eq(num).addClass('current').siblings().removeClass('current');
		$('.banner li').eq(num).show().siblings().hide();
		$('.wrap ul li').eq(num).stop().fadeIn().siblings().stop().fadeOut();
	},function(){
		timer01 = setInterval(timerFn,5000);	
		num++;
	});
	//圆点点击切换；
	$('.olList li').click(function(){
		var num = $(this).index();
		$(this).addClass('current').siblings().removeClass('current');
		$('.ulList .uBg .ucurrent').stop().animate({'left': num*251 +'px'});
		$('.banner li').eq(num).show().siblings().hide();
		$('.wrap ul li').eq(num).stop().fadeIn().siblings().stop().fadeOut();
		num++;
	});
	$('.olList li').hover(function(){
		var num = $(this).index();
		clearInterval(timer01);
		timer01 = null;		
	},function(){		
		timer01 = setInterval(timerFn,5000);	
		num=num;
	});
	//左右箭头切换效果
	$('.banner,.left,.right,.wrap,.more,.olList, .erWeima').hover(function(e) {
        $('.left,.right').stop().fadeIn();
    },function(){
		$('.left,.right').hide();
	});
	
	$('.right').click(function(){
		num++;
		if(num > 3){
			num = 0;
		};
		$(this).addClass('current').siblings().removeClass('current');
		$('.ulList .uBg .ucurrent').stop().animate({'left': num*251 +'px'});
		$('.banner li').eq(num).show().siblings().hide();
		$('.wrap ul li').eq(num).stop().fadeIn().siblings().stop().fadeOut();
	});
	$('.left').click(function(){
		num--;
		if(num < 0){
			num = 3;
		};
		$(this).addClass('current').siblings().removeClass('current');
		$('.ulList .uBg .ucurrent').stop().animate({'left': num*251 +'px'});
		$('.banner li').eq(num).show().siblings().hide();
		$('.wrap ul li').eq(num).stop().fadeIn().siblings().stop().fadeOut();
	});
	$('.olList li,.left,.right').hover(function(e) {
        clearInterval(timer01);
		timer01 = null;
    },function(){
		clearInterval(timer01);
		timer01 = setInterval(timerFn,5000);
	});
	
	$('.con05ul_box .img02').hide();
	$('.con05ul_li .con05ul_box').hover(function(){
		$(this).children('.img01').stop().fadeOut();
		$(this).children('.img02').stop().fadeIn();
	},function(){
		$(this).children('.img02').stop().fadeOut();
		$(this).children('.img01').stop().fadeIn();
		
	});
})
//鼠标滚动的时候 出现的功能
$(function(){ 
	var con01Top = document.getElementById('con01').offsetTop;
	var con02Top = document.getElementById('con02').offsetTop;
	var con03Top = document.getElementById('con03').offsetTop;
	var con04Top = document.getElementById('con04').offsetTop;
	var con05Top = document.getElementById('con05').offsetTop;
	var con06Top = document.getElementById('con06').offsetTop;
	var navFlowLi = $('.navFlow ul li');
	var i = 0;
	function bgColor(){ 
		for(i = 0;i<navFlowLi.length;i++)
		{ 
			navFlowLi[i].className = '';
		}
	}
	
	for(i = 0;i<navFlowLi.length;i++)
	{ 
		document.onscroll = function()
		{ 
			
			var sTop = document.body.scrollTop;
			if(sTop>=con06Top)
			{ 
				bgColor();
				navFlowLi[5].className = 'toTop';
			}else if(sTop>=con05Top)
			{ 
				bgColor();
				navFlowLi[4].className = 'toTop';
			}else if(sTop>=con04Top)
			{ 
				bgColor();
				navFlowLi[3].className = 'toTop';
			}else if(sTop>=con03Top)
			{ 
				bgColor();
				navFlowLi[2].className = 'toTop';
			}else if(sTop>=con02Top)
			{ 
				bgColor();
				navFlowLi[1].className = 'toTop';
			}else if(sTop>=0)
			{ 
				bgColor();
				navFlowLi[0].className = 'toTop';
			}
			
		}
	}
})