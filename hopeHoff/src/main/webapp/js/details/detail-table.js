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
	
	$(document).delegate('.reservBtn',"click",function(){
		
		if(isLogin){
			if( $( reservData ).val() != '' ){ //내용이 있을 경우
				//예약 내용 DB에 저장하기
				$.post('../../json/reservation/addReserv.do'
						,{businessNo: businessNo,
						  reservationContent : $( reservData ).val(),
						  userId  : uId}
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
	
	$('#contentMap').css('display', 'none');
	$('#contentComments').css('display', 'none');
	$('#menuText').css('color', '#FFB500');
	$('#mapText').css('color', '#FFB500');
	$('#commentText').css('color', '#FFB500');
	$('#menuButton').css('background-color', '#FFB500');
	
	
	$("#btnClose").click(function(){
		$("#detailList").remove();
		$(".box-rotate-up").css("display","none");
	});
	
	$('.menu').click(function(event) {
		$("#contentMenu").css('display', '');
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
		$("#contentMap").css('display', '');
		$('#contentComments').css('display', 'none');

		$('#menuText').css('color', '#FFB500');
		$('#menuButton').css('background-color', 'white')
		$('#mapText').css('color', '#FFB500');
		$('#mapButton').css('background-color', '#FFB500');
		$('#commentText').css('color', '#FFB500');
		$('#commentButton').css('background-color', 'white');
		map.relayout();
	
	});

	$('.comment').click(function(event) {
		$("#contentMenu").css('display', 'none');
		$("#contentMap").css('display', 'none');
		$('#contentComments').css('display', '');

		$('#menuText').css('color', '#FFB500');
		$('#menuButton').css('background-color', 'white');
		$('#mapText').css('color', '#FFB500');
		$('#mapButton').css('background-color', 'white');
		$('#commentText').css('color', '#FFB500');
		$('#commentButton').css('background-color', '#FFB500');
	});
});




//나래: 왜 여기 있어야 되는지는 모르겠지만, document 다 load된 후 부르면 에러뜸
$('#pubPhotoListWrap').naraeWidthSildeAuto();
$('#menuListWrap').naraeWidthSilde();	
		
	var mapContainer = document.getElementById('contentMap'), // 지도를 표시할 div 
	    mapOption = {
	        center: new daum.maps.LatLng(33.450701, 126.570667), // 지도의 중심좌표
	        level: 3// 지도의 확대 레벨
	    };

	var map = new daum.maps.Map(mapContainer, mapOption); // 지도를 생성합니다


	console.log("map.getCenter(): " + map.getCenter());
	

	map.setCenter(new daum.maps.LatLng(37.4986077,127.02851620000001));
	
	//"마커"가 표시될 위치입니다
	/*var markerPosition  = new daum.maps.LatLng(33.450701, 126.570667); */
	
	// 마커를 생성합니다
	var marker = new daum.maps.Marker({
	    position: new daum.maps.LatLng(33.450701, 126.570667)
	  
	});
	// 마커가 지도 위에 표시되도록 설정합니다
	marker.setMap(map);
	
  
	//zoom controller생성합뉘당
	var zoomControl = new daum.maps.ZoomControl();
	// 지도 오른쪽에 줌 컨트롤이 표시되도록 지도에 컨트롤을 추가한다. 맨오른쪽으루 가렴~
	map.addControl(zoomControl, daum.maps.ControlPosition.RIGHT);
	
	
	
	

	// 아래 코드는 지도 위의 마커를 제거하는 코드입니다
	// marker.setMap(null);    
	/************************************************************************************************/
	
		$('<tr id=tRow0 style="color:white">').appendTo($('#dataForm'));
		//$('<th class=tableDataNo>').html("No").appendTo($('#tRow0'));
		$('<th class=tableDataName>').html("Name").appendTo($('#tRow0'));
		$('<th class=tableDataComments>').html("Comments").appendTo($('#tRow0'));
		$('<th class=tableDataTime>').html("Time").appendTo($('#tRow0'));
		$('<th class=tableDataButton>');
	
	
		 $('<tr id=tRowNew style="color:white">').appendTo($('#dataForm')); 
		//$('<td class=tableDataNo>').html("3").appendTo($('#tRow3'));
	    $('<td class=tableDataName>').html("붸연정").appendTo($('#tRowNew'));
		$('<td class=tableDataComments>')
				.append($('<input type="text" placeholder="한줄평을 남겨주세용">'))
				.appendTo($('#tRowNew'));
		$('<td class=tableDataTime>').html("2014-12-18").appendTo($('#tRowNew'));
		$('<td class=tableDataButton>')
				.append($('<button type="button" id="plus" style="color:blue">+</button>'))
				.appendTo($('#tRowNew'));
		
		$('<tr id=tRow2 style="color:white">').appendTo($('#dataForm')); 
		//$('<td class=tableDataNo>').html("2").appendTo($('#tRow2'));
	    $('<td class=tableDataName>').html("현나뤠").appendTo($('#tRow2'));
		$('<td class=tableDataComments>').html("여기 해물탕 추천이요!!").appendTo($('#tRow2'));
		$('<td class=tableDataTime>').html("2014-12-14").appendTo($('#tRow2'));
		
		$('<tr id=tRow1 style="color:white">').appendTo($('#dataForm')); 
	//	$('<td class=tableDataNo>').html("1").appendTo($('#tRow1'));
	    $('<td class=tableDataName>').html("붸연정").appendTo($('#tRow1'));
		$('<td class=tableDataComments>').html("원빈이랑 왔더니 서비스가 좋았음ㅋㅋㅋ").appendTo($('#tRow1'));
		$('<td class=tableDataTime>').html("2014-12-10").appendTo($('#tRow1'));
		$('<td class=tableDataButton>')
				.append($('<button type="button" id="minus" style="color:red">-</button>'))
				.appendTo($('#tRow1'));
				
				
		$('#minus').click(function(event) {
		  $("#tRow1").css('display', 'none');
		
		});
		
		$('#plus').click(function(event) {
		
		  
		$("#dataForm:nth-child(2)")
		  		.append($('<tr id=tRow3>'))
		 		.appendTo($('#dataForm')); 
  		  $('<td class=tableDataName>').html("붸연정***").appendTo($('#tRow3'));
		  $('<td class=tableDataComments>').html("후기당ㅇㅇㅇ").appendTo($('#tRow3'));
		  $('<td class=tableDataTime>').html("2014-12-18").appendTo($('#tRow3'));
	
		}); 
		
		
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

