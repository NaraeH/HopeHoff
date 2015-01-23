var selectedShop = $("#selectForm option:selected").attr("data-businessNo"); //선택 된 가게의 사업자 번호

$(document).ready(function() {
	
	$('#myContentComments').css('display', 'none');
	$('#myMenuText').css('color', '#FFB500');
	$('#myCommentText').css('color', '#FFB500');
	$('#myMenuButton').css('background-color', '#FFB500');
	
	//선택 된 가게가 바뀔 때
	$("select").change(function () {
		selectedShop = $("#selectForm option:selected").attr("data-businessNo");
		
		$.post('../../json/myMarketControl/marketInfo.do',
				{"businessNo": selectedShop},
				function(data){
					setShop(data);
				}, 'json');
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
	
	loadCommnet();
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

	//메뉴 사진 바꾸기
	for(var i = 0; i < data.shopMenu.length; i++){
		$( "#menu" +i ).attr("src", "../../img/shopPhoto/menu/" + data.shopMenu[i].menuPhoto );
		$( "#menuName" +i ).attr("placeholder", data.shopMenu[i].menuName );
		$( "#menuPrice" +i ).attr("placeholder", data.shopMenu[i].menuPrice );
	}
}

function loadCommnet(){

	$.post('/hopeHoff/json/commentControl/getComments.do',
			{"businessNo": selectedShop},
			function(data){
				require(['text!templates/comment-table.html'],function(html){
				   	var template = Handlebars.compile(html);
				    	$('#myContentComments').html(template(data));
					});
			}, 'json');
	
}
