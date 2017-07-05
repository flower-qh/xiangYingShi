
//菜单栏的隐藏和出现
$(function(){
	$(".btn").click(function(){
		$(".nav").slideToggle()
	})
})

//回到顶部及图表从第二屏是出现
$(function(){
	$(window).scroll(function(){
		var t=$(this).scrollTop();
		if(t>200){
			$(".top").stop().fadeIn(300)
		}else{
			
			$(".top").stop().fadeOut(300)
		}
	
	})
	
	
	$(".top").click(function(){
		$("body,html").animate({
			scrollTop:0
		},800)
	})
})

//banner自动轮播

$(".banner_img img").eq(0).show();
$(".click i").click(function() {
	$(this).addClass("on").siblings().removeClass("on")

	var index = $(this).index();
	i = index;
	
//	alert(index)  //获取索引值

	$(".banner_img img").eq(index).stop().fadeIn(300).siblings().stop().fadeOut(300);
})
var i = 0;
var t = setInterval(move, 3000)
$(".banner_img img").eq(0).show();

function move() {
	i++;
	if(i == 3) {
		i = 0;
	}

	$(".banner_img img").eq(i).fadeIn(300).siblings().fadeOut()
	$(".click i").eq(i).addClass("on").siblings().removeClass("on")
}
//向左运动函数
function moveL() {
	i--;
	if(i == 0) {
		i = 3;
	}
	$(".banner_img img").eq(i).addClass("home-slide-i").siblings().removeClass()
	$(".click i").eq(i).fadeIn(300).siblings().fadeOut(300)
}
//定时器的开始与结束
$(".banner").hover(function() {
	clearInterval(t);
}, function() {
	t = setInterval(move, 1500);
})


//内容随屏幕滚动逐次加载
$(function(){
	//获取当前屏幕高度(可视区域高度)
	var win_h = $(window).height() * 0.7;
//	alert(win_h);
	
	//获取当前对象距离顶端的高度
	var ser_h = $(".ser_head").offset().top
//	alert(ser_h)

	var aboutT_h = $(".about_head").offset().top
//	var team_h = $(".team_head").offset().top
	var gall_h = $(".gall_head").offset().top
	var pri_h = $(".pri_head").offset().top
	var cont_h = $(".cont_head").offset().top
//	var teamB_h = $(".team_btm_head").offset().top
	var primB_h = $(".priBtm_head").offset().top
	var row_h = $(".row_main").offset().top
	var aboutI_h = $(".aboutImg").offset().top
	var aboutF_h = $(".aboutFont").offset().top
//	var teamT_h = $(".teamTop_m").offset().top
	var pricing_h = $(".priTop_m").offset().top	

	$(window).scroll(function() {
		//获取获取滚动条高度
			var top = $(window).scrollTop();
			//  头部
//			alert(top);
			if(top > ser_h - win_h) {
				$(".ser_head").addClass("on")
			}
			if(top > aboutT_h - win_h) {
				$(".about_head").addClass("on")
			}
//			if(top > team_h- win_h) {
//				$(".team_head").addClass("on")
//			}
			if(top > gall_h - win_h) {
				$(".gall_head").addClass("on")
			}
			if(top > pri_h- win_h) {
				$(".pri_head").addClass("on")
			}
			if(top > cont_h - win_h) {
				$(".cont_head").addClass("on")
			}
//			if(top > teamB_h - win_h) {
//				$(".team_btm_head").addClass("on")
//			}
			if(top > primB_h - win_h) {
				$(".priBtm_head").addClass("on")
			}
			
//			service动画
			if(top > row_h - win_h) {
				$(".row_main").addClass("on")
			}
			//about us 动画
			if(top > aboutI_h - win_h) {
				$(".aboutImg").addClass("on")
			}
			if(top > aboutF_h - win_h) {
				$(".aboutFont").addClass("on")
			}
//			team动画
//			if(top > teamT_h - win_h) {
//				$(".teamTop_m").addClass("on")
//			}
			//pricing动画
			if(top > pricing_h - win_h) {
				$(".priTop_m").addClass("on")
			}			
})	
})

window.onload=function(){
	var navsLi = document.getElementById("list").getElementsByTagName("li");
for(var i=0;i<navsLi.length;i++){
	navsLi[i].onclick = function(){
	for(var i=0;i<navsLi.length;i++){
		navsLi[i].className = ""
	}
	this.className = "action";
}
}

}





