var selectedShop = $("#selectForm option:selected").attr("data-businessNo"); //선택 된 가게의 사업자 번호


$(document).ready(function() {
	//해당 기업회원의 가게가 존재하지 않을 경우
	if( myMarketData.shops.length < 1 ){
		$("#myMarketContainer").html(
				"<div id='myMarketAlert'>[가게등록] 문의사항이 있으시면 아래의 연락처로 연락바랍니다. <br><br>" +
				"Tel: 02) 3333-3333</div>");
	}
	
	$('#myContentComments').css('display', 'none');
	$('#myMenuText').css('color', '#FFB500');
	$('#myCommentText').css('color', '#FFB500');
	$('#myMenuButton').css('background-color', '#FFB500');
	
	$("select").change(function () {
		loadMarket();
	});
	
});

$('#myPubPhotoListWrap').naraeWidthSildeAuto(1500);
$('#myMenuListWrap').naraeWidthSilde();	


$("#btnMyMarketClose").click(function(){
	$("#myMarket").css("display", "none");
	$("#back").css("display", "none");
});

$('.myMenuTabs').click(function(event) {
	$("#myContentMenu").css('display', '');
	$('#myContentComments').css('display', 'none');

	$('#myMenuText').css('color', '#FFB500');
	$('#myMenuButton').css('background-color', '#FFB500');
	$('#myCommentText').css('color', '#FFB500');
	$('#myCommentButton').css('background-color', 'white');
});


$('.myCommentTabs').click(function(event) {
	$("#myContentMenu").css('display', 'none');
	$('#myContentComments').css('display', '');

	$('#myMenuText').css('color', '#FFB500');
	$('#myMenuButton').css('background-color', 'white');
	$('#myCommentText').css('color', '#FFB500');
	$('#myCommentButton').css('background-color', '#FFB500');
	
	loadComment();
});

//수정하기 버튼 눌렀을 때
$(document).delegate("#changeBtn","click", function(){
	var time = $('#time').val();
	var phone = $('#phone').val();
	var addr = $('#addr').val();
	var info = $('#info').val();
	var intro = $('#intro').val();
	
	//selectedShop = $("#selectForm option:selected").attr("data-businessNo");

	if( time == '' ){ time = $("#time").attr("placeholder"); }
	if( phone == '' ){ phone = $("#phone").attr("placeholder"); }
	if( addr == '' ){ addr = $("#addr").attr("placeholder"); }
	if(info == '' ){ info = $("#info").attr("placeholder"); }
	if(intro == ''){ intro = $("#intro").attr("placeholder"); }
	
	$.post('../../json/myMarketControl/marketUpdate.do',
		{"bno": selectedShop,
		"time" :time,
		"phone": phone,
		"addr" : addr,
		"info": info,
		"intro": intro
		}, function(data){
			alert("성공적으로 변경되었습니다.");
			$('#time').attr("placeholder",data.shopInfo.shopTime);
			$('#phone').attr("placeholder",data.shopInfo.shopPhone);
			$('#addr').attr("placeholder",data.shopInfo.shopDetailAddr);
			$('#info').attr("placeholder",data.shopInfo.shopInfo);
			$('#intro').attr("placeholder",data.shopInfo.shopIntro);
			
			$('#time').val('');
			$('#phone').val('');
			$('#addr').val('');
			$('#info').val('');
			$('#intro').val('');
			}, 
		'json');
});


//메뉴 수정하기 버튼 눌렀을 때
$(document).delegate(".changeMenuBtn","click", function(){
	var myOverlayId = $(this).closest(".myOverlay").attr("data-menuId");
	var menuName = $(this).closest(".photoInfoWrap").children()[0];
	var menuPrice = $(this).closest(".photoInfoWrap").children()[1];
	var menuNameVal = $( menuName ).val();
	var menuPriceVal = $( menuPrice ).val();
	
	if( menuNameVal == '' ){ menuNameVal = $( menuName ).attr("placeholder"); }
	if( menuPriceVal == '' ){ menuPriceVal = $( menuPrice ).attr("placeholder"); }
	
	$.post('/hopeHoff/json/myMarketControl/menuUpdate.do',
			{"menuId": myOverlayId,
			 "menuName": menuNameVal,
			 "menuPrice": menuPriceVal
			},
			function(data){
				alert("성공적으로 변경되었습니다.");

				$( menuName ).attr("placeholder",data.menuUpdate.menuName);
				$( menuPrice ).attr("placeholder",data.menuUpdate.menuPrice);
				
				$( menuName ).val("");
				$( menuPrice ).val("");
			}, 'json');
	
	

});

/*-----------------------------------함수들--------------------------------------*/
function setShop(data){
	
	//사진 이동 되었던 것 리셋하기
	$( "#myPubPhotoListWrap ul" ).css("margin-left", "0px");
	$( "#myMenuListWrap ul" ).css("margin-left", "0px");
	
	//가게 사진 바꾸기
	$("#shopPhoto1").attr("src", "../../img/shopPhoto/detail/" + data.shopPhotos.detailPhoto1);
	$("#shopPhoto2").attr("src", "../../img/shopPhoto/detail/" + data.shopPhotos.detailPhoto2);
	$("#shopPhoto3").attr("src", "../../img/shopPhoto/detail/" + data.shopPhotos.detailPhoto3);
	
	//가게 정보 바꾸기
	$('#time').attr("placeholder",data.shopInfo.shopTime);
	$('#phone').attr("placeholder",data.shopInfo.shopPhone);
	$('#addr').attr("placeholder",data.shopInfo.shopDetailAddr);
	$('#info').attr("placeholder",data.shopInfo.shopInfo);
	$('#intro').attr("placeholder",data.shopInfo.shopIntro);

	//메뉴 사진 및 아이디 바꾸기
	for(var i = 0; i < data.shopMenu.length; i++){
		$( "#menu" +i ).attr("src", "../../img/shopPhoto/menu/" + data.shopMenu[i].menuPhoto );
		$( "#menuName" +i ).attr("placeholder", data.shopMenu[i].menuName );
		$( "#menuPrice" +i ).attr("placeholder", data.shopMenu[i].menuPrice );
		$( $( "#menuSlide .myOverlay" )[i] ).attr("data-menuId", data.shopMenu[i].menuId);
	}
	
	loadComment();
}

function loadComment(){
	$.post('/hopeHoff/json/commentControl/getComments.do',
			{"businessNo": selectedShop},
			function(data){
				require(['text!templates/comment-table.html'],function(html){
				   	var template = Handlebars.compile(html);
				    	$('#myContentComments').html(template(data));
					});
			}, 'json');
	
}
function loadMarket() {
		selectedShop = $("#selectForm option:selected").attr("data-businessNo");
		
		$.post('../../json/myMarketControl/marketInfo.do',
				{"businessNo": selectedShop},
				function(data){
					setShop(data);
					
				}, 'json');
}
	
