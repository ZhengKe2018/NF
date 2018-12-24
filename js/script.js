// JavaScript Document
$(document).ready(function(e) {
var n=0;
	/*公共部分*/
	$(".subnav .switch").hide()
	$(".subnav .switch:first").show();
	$(".columns .column").hide()
	$(".columns .column:first").show();
	$(".sidebar li").click(
		function(){
			$(".sidebar li").removeClass("current2");
			$(this).addClass("current2");
			$(".sidebar li p").removeClass("current3");
			$(this).find("p").addClass("current3");
			n=$(".sidebar li").index(this);
			$(".columns .column").eq(n).show().siblings(".columns .column").hide();
			$(".subnav .switch").eq(n).show().siblings(".subnav .switch").hide();
	})
});  