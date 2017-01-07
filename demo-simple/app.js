
// // 百度首页交互JS

// var baiDu = {
// 	init: function(){
// 		this.baiduSetting();
// 	},

// 	// 设置下拉菜单和侧边栏的显示与隐藏
// 	baiduSetting: function(){
// 		$('#navMore,#moreProduct').mouseover(function(){
// 			$('#moreProduct').show();
// 		}).mouseout(function(){
// 			$('#moreProduct').hide();
// 		})
// 	}
// }

// // 加载执行
// $(function(){
// 	baiDu.init();
// }) 


$(document).ready(function() {
	$('#navMore,#moreProduct').mouseover(function() {
		$('#moreProduct').show();
	}).mouseout(function() {
		$('#moreProduct').hide();
	});

	$('#s_usersetting_top,#s_user_setting_menu').mouseover(function() {
		$('#s_user_setting_menu').show();
	}).mouseout(function() {
		$('#s_user_setting_menu').hide();
	});

	$('#s_username_top,#s_user_name_menu').mouseover(function() {
		$('#s_user_name_menu').show();
	}).mouseout(function() {
		$('#s_user_name_menu').hide();
	});


	$('#s_menu_mine span,#s_menus_wrapper span').each(function(index) {
		var spanNode = $(this);
		$(this).click(function() {
			$('div.now').removeClass('now');
			$('#s_menu_mine span.current,#s_menus_wrapper span.current').removeClass('current');
			$('.s-content').eq(index).addClass('now');
			spanNode.addClass('current');
		});
	});

	// $("#s_top_feed").click(function () {
 //       		$('body,html').animate({ scrollTop: 0 }, 1000);
 //        	return false;
 // 	});

	$('#s_top_feed').hide();
	$(function() {
		$(window).scroll(function() {
			if ($(window).scrollTop() > 100) {
				$('#s_top_feed').fadeIn(1500);
			}
			else {
				$('#s_top_feed').fadeOut(1000);
			}
		});

		$("#s_top_feed").click(function () {
       		$('body,html').animate({ scrollTop: 0 }, 1000);
        	return false;
 		});
	});

});

