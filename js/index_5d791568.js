(function() {
	window._bd_share_config={common: {bdText:"百度预测-大数据，知天下",bdDesc:"",bdUrl:"http://trends.baidu.com/",bdPic:""
},share:[ {
	bdSize: 16
}]};

with(document) {
	0[(getElementsByTagName("head")[0]||body).appendChild(createElement("script")).src="http://bdimg.share.baidu.com/static/api/js/share.js?cdnversion="+~(-new Date()/3600000)]
}$(".links_share_btns").on("click",function(e) {
	e.preventDefault();if($(".bdsharebuttonbox").is(":visible")==false){$(".bdsharebuttonbox").show()
}

else {
	$(".bdsharebuttonbox").hide()
}});$(".bxslider").bxSlider( {
	auto: true,prevSelector:$(".top_slide_wrap .op_prev")[0],nextSelector:$(".top_slide_wrap .op_next")[0]
});$(".product_slider").bxSlider( {
	minSlides: 1,maxSlides:7,slideWidth:114,slideMargin:30,infiniteLoop:false,controls:false
});$(document).delegate(".pr_gray","mouseover",function(e) {
	e.preventDefault();$(this).find(".gray_layer_a").css("display","block")
});$(document).delegate(".pr_gray","mouseleave",function(e) {
	e.preventDefault();$(this).find(".gray_layer_a").css("display","none")
})})();