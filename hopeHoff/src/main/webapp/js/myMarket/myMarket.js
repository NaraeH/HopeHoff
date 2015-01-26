var selectedShop = $("#selectForm option:selected").attr("data-businessNo"); //선택 된 가게의 사업자 번호


$(document).ready(function() {
	
	$('#myContentComments').css('display', 'none');
	$('#myMenuText').css('color', '#FFB500');
	$('#myCommentText').css('color', '#FFB500');
	$('#myMenuButton').css('background-color', '#FFB500');
	
	$("select").change(function () {
		loadMarket();
	});
	
});

//나래: 왜 여기 있어야 되는지는 모르겠지만, document 다 load된 후 부르면 에러뜸
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
	var menuName = $( $(this).closest(".photoInfoWrap").children()[0] ).val();
	var menuPrice = $( $(this).closest(".photoInfoWrap").children()[1] ).val();
	
	if( menuName == '' ){ menuName = $( $(this).closest(".photoInfoWrap").children()[0] ).attr("placeholder"); }
	if( menuPrice == '' ){ menuPrice = $( $(this).closest(".photoInfoWrap").children()[1] ).attr("placeholder"); }
	
	$.post('/hopeHoff/json/myMarketControl/menuUpdate.do',
			{"menuId": myOverlayId,
			 "menuName": menuName,
			 "menuPrice": menuPrice
			},
			function(data){
				 console.log("되었다");
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

	//메뉴 사진 바꾸기
	for(var i = 0; i < data.shopMenu.length; i++){
		$( "#menu" +i ).attr("src", "../../img/shopPhoto/menu/" + data.shopMenu[i].menuPhoto );
		$( "#menuName" +i ).attr("placeholder", data.shopMenu[i].menuName );
		$( "#menuPrice" +i ).attr("placeholder", data.shopMenu[i].menuPrice );
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
	console.log(selectedShop);
		selectedShop = $("#selectForm option:selected").attr("data-businessNo");
		
		$.post('../../json/myMarketControl/marketInfo.do',
				{"businessNo": selectedShop},
				function(data){
					setShop(data);
					
				}, 'json');
}
	
