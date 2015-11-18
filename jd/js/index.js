$("#jd_center .jc_left").hover(function(){
	$(this).addClass('top_hover');
},function(){
	$(this).removeClass('top_hover');
})

$("#jd_center_right .myjd").hover(function(){
	if($(this).children('div').length){
		$(this).addClass('myjd_hover');
	}
},function(){
	if($(this).children('div').length){
		$(this).removeClass('myjd_hover');
	}
});

$("#jd_center_right .phone_jd").hover(function(){
	if($(this).children('div').length){
		$(this).addClass('phone_jd_hover');
	}
},function(){
	if($(this).children('div').length){
		$(this).removeClass('phone_jd_hover');
	}
});

$("#jd_center_right .care").hover(function(){
	if($(this).children('dl').length){
		$(this).addClass('care_hover');
	}
},function(){
	if($(this).children('dl').length){
		$(this).removeClass('care_hover');
	}
});

$("#jd_center_right .client").hover(function(){
	if($(this).children('dl').length){
		$(this).addClass('client_hover');
	}
},function(){
	if($(this).children('dl').length){
		$(this).removeClass('client_hover');
	}
});

$("#jd_center_right .web").hover(function(){
	if($(this).children('div').length){
		$(this).addClass('web_hover');
	}
},function(){
	if($(this).children('div').length){
		$(this).removeClass('web_hover');
	}
});

$("#jd_head .shopping").hover(function(){
	if($(this).children('dl').length){
		$(this).addClass('shopping_hover');
	}
},function(){
	if($(this).children('dl').length){
		$(this).removeClass('shopping_hover');
	}
});
// 搜索框开始
$('#jd_head #search #form #rectangle').focus(function() {
	if($(this)[0].value=='遥控落地扇'){
	$(this)[0].value='';
	}
});
$('#jd_head #search #form #rectangle').blur(function() {
	if($(this)[0].value==''){
		$(this).val('遥控落地扇');
	}

});
// 搜索框结束
// 购物车开始
$('jd_head .shopping').hover(function(){
	$('jd_head .shopping').addClass('shopping_hover');
},function(){
	$('jd_head .shopping').removeClass('shopping_hover');
});
// 购物车结束
// 左边导航开始
$('#navgation #navgation_center #navgation_left_bottom li dl').hover(function(){
	if($(this).children('dd').length){
		$(this).siblings('dl').removeClass('nav_activate');
		$(this).addClass('nav_activate');
	}
	},function(){
	if($(this).children('dd').length){
		$(this).removeClass('nav_activate');
	}
})
// 左边导航结束
// 轮播图开始
var index=0;
var slideObj=$('#line_right #slides a');
var xuhaoObj=$('#line_right #slides ul li');
function qiehuan(){
	index++;
	slideObj.eq(index).siblings('a').hide();
	slideObj.eq(index).show();
	xuhaoObj.eq(index).siblings('li').css('background','grey');
	xuhaoObj.eq(index).css('background','red');
	if(index==5){
		index=-1;
	}
}
var slides_timer=setInterval(qiehuan,2000);
function sli_touch(){
	slideObj.eq(index).siblings('a').hide();
	slideObj.eq(index).show();
	xuhaoObj.eq(index).siblings('li').css('background','grey');
	xuhaoObj.eq(index).css('background','red');
	clearInterval(slides_timer);
}
slideObj.hover(sli_touch,function(){
	slides_timer=setInterval(qiehuan,2000);
});
xuhaoObj.hover(function(){
	index=$(this).index();
	sli_touch();
},function(){
	slides_timer=setInterval(qiehuan,2000);
});
function sli_click(x){
	slideObj.eq(index+x).siblings('a').hide();
	slideObj.eq(index+x).show();
	xuhaoObj.eq(index+x).siblings('li').css('background','grey');
	xuhaoObj.eq(index+x).css('background','red');
}
$('#line_right #slides .sli_l').click(function() {
	clearInterval(slides_timer);
	if (index==0) {
		index=6;
	};
	sli_click(-1);
	index--;
});
$('#line_right #slides .sli_r').click(function() {
	clearInterval(slides_timer);
	if (index==5) {
		index=-1;
	};
	sli_click(1);
	index++;
});

// 轮播图结束
// 1F开始
var cindex;
var oCloli=$('#next #clothing #clothing_title #clo_tab li');
var oCloNe=$('#next #clothing .clo_next');
function vary(){
	oCloli.eq(cindex).siblings('li').removeClass('clo_hover');
	oCloli.eq(cindex).addClass('clo_hover');
	oCloNe.eq(cindex).siblings('.clo_next').removeClass('clo_hover');
	oCloNe.eq(cindex).addClass('clo_hover');
}
function primitive(){
	oCloNe.removeClass('clo_hover');
	oCloNe.first().addClass('clo_hover');
	oCloli.eq(cindex).removeClass('clo_hover');
	oCloli.first().addClass('clo_hover');
}
oCloli.hover(function(){
	cindex=$(this).index();
	vary();
},primitive);
oCloNe.hover(vary,primitive);
// 1F结束
// 今日抄底开始
function chaodi(){
	$('#next #chaodi #chaodi_right ul').prepend($('#next #chaodi #chaodi_right ul li').last());
	$('#next #chaodi #chaodi_right ul li').first().css('margin-top','-118px');
	$('#next #chaodi #chaodi_right ul li').first().animate({'margin-top':'0px'},1000);
}
var today_timer=setInterval(chaodi,3000);
$('#next #chaodi #chaodi_right ul li').hover(function(){
	clearInterval(today_timer);
},function(){
	today_timer=setInterval(chaodi,3000);
})
// 今日抄底结束
