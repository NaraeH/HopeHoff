/*141223 17:28 연흥이가 건든건 ㅂlack을  #FFCD28로 바꾼것 뿐ㅋㅋㅋ*/
		$(document).ready(function() {

			$('#contentMap').css('display', 'none');
			$('#contentComments').css('display', 'none');
			$('#menuText').css('color', '#FFCD28');
			$('#menuButton').css('background-color', '#FFCD28');
			$('#pubPhotoList').NaraeWidthSildeAuto();
			
			$('.menu').click(function(event) {
				$("#contentMenu").css('display', '');
				$('#contentMap').css('display', 'none');
				$('#contentComments').css('display', 'none');
				
				$('#menuText').css('color', '#FFCD28');
				$('#menuButton').css('background-color', '#FFCD28');
				$('#mapText').css('color', '#FFCD28');
				$('#mapButton').css('background-color', 'white');
				$('#commentText').css('color', '#FFCD28');
				$('#commentButton').css('background-color', 'white');

			});

			$('.map').click(function(event) {
				$("#contentMenu").css('display', 'none');
				$("#contentMap").css('display', '');
				$('#contentComments').css('display', 'none');
				
				$('#menuText').css('color', '#FFCD28');
				$('#menuButton').css('background-color', 'white')
				$('#mapText').css('color', '#FFCD28');
				$('#mapButton').css('background-color', '#FFCD28');
				$('#commentText').css('color', '#FFCD28');
				$('#commentButton').css('background-color', 'white');

			});

			$('.comment').click(function(event) {
				$("#contentMenu").css('display', 'none');
				$("#contentMap").css('display', 'none');
				$('#contentComments').css('display', '');
				
				$('#menuText').css('color', '#FFCD28');
				$('#menuButton').css('background-color', 'white');
				$('#mapText').css('color', '#FFCD28');
				$('#mapButton').css('background-color', 'white');
				$('#commentText').css('color', '#FFCD28');
				$('#commentButton').css('background-color', '#FFCD28');
			});
			
/*			$(".leftWrap").hover(function(){
				event.stopPropagation();
				$(".box-rotate-left").hover();
				console.log($(".box-rotate-left").hover());
			});*/
			
			$("#photoToLeft, #pubPhotoList>.leftWrap").click(function(event) {
				event.stopPropagation();
				$("#pubPhotoList").NaraeWidthSilde("left");
			});

			$("#photoToRight, #pubPhotoList>.rightWrap").click(function() {
				event.stopPropagation();
				$("#pubPhotoList").NaraeWidthSilde("right");
			});

			$("#menuToLeft, #menuList>.leftWrap").click(function(event) {
				event.stopPropagation();
				$("#menuList").NaraeWidthSilde("left");
			});

			$("#menuToRight, #menuList>.rightWrap").click(function() {
				event.stopPropagation();
				$("#menuList").NaraeWidthSilde("right");
			});

		});
		
		
		
		
		
	var mapContainer = document.getElementById('contentMap'), // 지도를 표시할 div 
	    mapOption = {
	        center: new daum.maps.LatLng(37.4986077,127.02851620000001), // 지도의 중심좌표
	        level: 3 // 지도의 확대 레벨
	    };

	var map = new daum.maps.Map(mapContainer, mapOption); // 지도를 생성합니다

	// 마커가 표시될 위치입니다
	var markerPosition  = new daum.maps.LatLng(37.4986077,127.02851620000001); 

	// 마커를 생성합니다
	var marker = new daum.maps.Marker({
	    position: markerPosition
	});

	// 마커가 지도 위에 표시되도록 설정합니다
	marker.setMap(map);

	// 아래 코드는 지도 위의 마커를 제거하는 코드입니다
	// marker.setMap(null);    
	/************************************************************************************************/
	
		$('<tr id=tRow0>').appendTo($('#dataForm'));
		//$('<th class=tableDataNo>').html("No").appendTo($('#tRow0'));
		$('<th class=tableDataName>').html("Name").appendTo($('#tRow0'));
		$('<th class=tableDataComments>').html("Comments").appendTo($('#tRow0'));
		$('<th class=tableDataTime>').html("Time").appendTo($('#tRow0'));
		$('<th class=tableDataButton>');
	
	
		 $('<tr id=tRowNew>').appendTo($('#dataForm')); 
		//$('<td class=tableDataNo>').html("3").appendTo($('#tRow3'));
	    $('<td class=tableDataName>').html("붸연정").appendTo($('#tRowNew'));
		$('<td class=tableDataComments>')
				.append($('<input type="text" placeholder="한줄평을 남겨주세용">'))
				.appendTo($('#tRowNew'));
		$('<td class=tableDataTime>').html("2014-12-18").appendTo($('#tRowNew'));
		$('<td class=tableDataButton>')
				.append($('<button type="button" id="plus">+</button>'))
				.appendTo($('#tRowNew'));
		
		$('<tr id=tRow2>').appendTo($('#dataForm')); 
		//$('<td class=tableDataNo>').html("2").appendTo($('#tRow2'));
	    $('<td class=tableDataName>').html("현나뤠").appendTo($('#tRow2'));
		$('<td class=tableDataComments>').html("여기 해물탕 추천이요!!").appendTo($('#tRow2'));
		$('<td class=tableDataTime>').html("2014-12-14").appendTo($('#tRow2'));
		
		$('<tr id=tRow1>').appendTo($('#dataForm')); 
	//	$('<td class=tableDataNo>').html("1").appendTo($('#tRow1'));
	    $('<td class=tableDataName>').html("붸연정").appendTo($('#tRow1'));
		$('<td class=tableDataComments>').html("원빈이랑 왔더니 서비스가 좋았음ㅋㅋㅋ").appendTo($('#tRow1'));
		$('<td class=tableDataTime>').html("2014-12-10").appendTo($('#tRow1'));
		$('<td class=tableDataButton>')
				.append($('<button type="button" id="minus">-</button>'))
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
