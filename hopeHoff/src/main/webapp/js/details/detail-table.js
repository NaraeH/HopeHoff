$(document).ready(function() {
	
	if( isLogin && uType=="user" ){
		//console.log(shopPhone)
		$('#pubPhotoListWrap').css("height","220px");
		$('#reservForm').css('display','block').css("padding","10px");
		$('#reservForm > .userInfo').html(userName + "( " + userPhoneNo + " )" + "님, 예약 하시겠습니까?").css("color","white");
		$('#reservForm > p').css("text-align","center").css("margin-top","10px");
		$('#reservData').attr("placeholder","예약시간과 인원을 입력해주세요.").css("padding-left","5px");
	}else if( isLogin && uType=="boss" ) {
		$('#pubPhotoListWrap').css("height","400px");
		$("#reservBtn").css("display","none");
		$("#boundary").css("display","none");
	}else{
	}
	
	$('#pubPhotoListWrap').naraeWidthSildeAuto();
	$('#menuListWrap').naraeWidthSilde();	
	
});

/*--------------------------Event Listener-----------------------------------*/
$(document).delegate('.reservBtn',"click",function(){
	var shopName = $("#detailsBody .pTitle").text();
	var data = {shopName: shopName}
	
	if(isLogin){
		if( $( reservData ).val() != '' ){ //내용이 있을 경우
			//예약 내용 DB에 저장하기
			$.post('../../json/reservation/addReserv.do'
					,{businessNo: businessNo,
					  reservationContent : $( reservData ).val(),
					  userId  : uId,
					  reservationStatus:rStatus}
					,function(data){
						getConfirmation();
					}, 'json');
			
			//업주에게 예약내용 문자보내기
			Narae.sendSms( callbackFun, "bookMsgToBoss", shopPhone, data );
			if(statusMap.status == 'success') {
				console.log("업주님께 문자메시지가 성공적으로 발송되었습니다.");
			}else {
				console.log("업주님께 문자전송을 실패하였습니다");
			}
			
		}else {  //내용이 없을 경우
			alert( "예약 시간과 인원을 입력해주세요" );
		}
		
	}else {
		alert ("로그인후 사용해주세요");
		location.href = '/hopeHoff/web/login/login.html';
	}
});

$("#btnClose").click(function(){
	$("#detailList").remove();
	$(".box-rotate-up").css("display","none");
});

$('.menu').click(function(event) {
	$("#contentMenu").css('display', 'block');
	$('#contentMap').css('display', 'none');
	$('#contentComments').css('display', 'none');

	$('#menuText').css('color', '#FFB500');
	$('#menuButton').css('background-color', '#FFB500');
	$('#mapText').css('color', '#FFB500');
	$('#mapButton').css('background-color', 'white');
	$('#commentText').css('color', '#FFB500');
	$('#commentButton').css('background-color', 'white');
});

$('.map').click(function(event) {
	$("#contentMenu").css('display', 'none');
	$("#contentMap").css('display', 'block');
	$('#contentComments').css('display', 'none');

	$('#menuText').css('color', '#FFB500');
	$('#menuButton').css('background-color', 'white')
	$('#mapText').css('color', '#FFB500');
	$('#mapButton').css('background-color', '#FFB500');
	$('#commentText').css('color', '#FFB500');
	$('#commentButton').css('background-color', 'white');
	
	loadMap();

});

$('.comment').click(function(event) {
	$("#contentMenu").css('display', 'none');
	$("#contentMap").css('display', 'none');
	$('#contentComments').css('display', 'block');

	$('#menuText').css('color', '#FFB500');
	$('#menuButton').css('background-color', 'white');
	$('#mapText').css('color', '#FFB500');
	$('#mapButton').css('background-color', 'white');
	$('#commentText').css('color', '#FFB500');
	$('#commentButton').css('background-color', '#FFB500');
	
	loadCommnet();
});


/*---------------------------함수-------------------------------------*/
function loadMap(){
	var shopName = $("#detailsBody .pTitle").text();
	var shopAddr = $( $("#detailsBody .pContent")[1] ).text().split("가게주소 : ")[1];
	
	var mapContainer = document.getElementById('contentMap')             // 지도를 표시할 div 
	var mapOption = { center: new daum.maps.LatLng(), // 지도의 중심좌표
					  level: 3// 지도의 확대 레벨
					};
	var marker = new daum.maps.Marker({                //마커 생성
					  position: new daum.maps.LatLng() //마커의 위치
					});
	
	var geocoder = new daum.maps.services.Geocoder();    
	geocoder.addr2coord(shopAddr, function(status, result) {

	    // 정상적으로 검색이 완료됐으면 
	     if (status === daum.maps.services.Status.OK) {

	        var coords = new daum.maps.LatLng(result.addr[0].lat, result.addr[0].lng);
	        map.setCenter(new daum.maps.LatLng(result.addr[0].lat, result.addr[0].lng));  // 지도를 중앙으로
	        
	        // 결과값으로 받은 위치를 마커로 표시합니다
	        marker = new daum.maps.Marker({
	            map: map,
	            position: coords
	        });

	        // 인포윈도우로 장소에 대한 설명을 표시합니다
	        var infowindow = new daum.maps.InfoWindow({
	        	position: coords,
	            content: "<div style='padding:5px;'>" + shopName + "</div>"
	        });
	        
	        infowindow.open(map, marker);
	    } 
	    
	});
	
	var map = new daum.maps.Map(mapContainer, mapOption); // 지도를 생성합니다
	marker.setMap(map); //지도를 생성하고 마커를 지도에 표시
	map.addControl(new daum.maps.ZoomControl(), daum.maps.ControlPosition.RIGHT); //zoom controller 표시( 지도 오른쪽 )
}



function getConfirmation(){
	var retVal = confirm("예약 하시겠습니까?");

	if( retVal == true ){
		alert( "예약 되었습니다. 예약 내용은 상단 '예약정보보기'에서 확인 가능합니다." );
		return true;
	}else{
		alert("예약 취소 하였습니다. 예약 내용을 확인후 다시 이용해 주세요.");
		$("#reservData").val('');
		return false;
	}
}

function loadCommnet(){
	$.post('/hopeHoff/json/commentControl/getComments.do',
			{"businessNo": businessNo},
			function(data){
				console.log(data);
				require(['text!templates/comment-table.html'],function(html){
					var template = Handlebars.compile(html);
					$('#contentComments').html(template(data));
				});
			}, 'json');

}

