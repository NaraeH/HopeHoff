var photoListLiWidth = Narae.removePx($("#pubPhotoList").css("width"));

$(document).ready(function() {
	$('#contentComments').css('display', 'none');
	$('#menuText').css('color', '#FFB500');
	$('#commentText').css('color', '#FFB500');
	$('#menuButton').css('background-color', '#FFB500');
	$("#pubPhotoList ul li div").css("width", photoListLiWidth);
	
	$('.menu').click(function(event) {
		$("#contentMenu").css('display', '');
		$('#contentComments').css('display', 'none');

		$('#menuText').css('color', '#FFB500');
		$('#menuButton').css('background-color', '#FFB500');
		$('#commentText').css('color', '#FFB500');
		$('#commentButton').css('background-color', 'white');
	});

	
	$('.comment').click(function(event) {
		$("#contentMenu").css('display', 'none');
		$('#contentComments').css('display', '');

		$('#menuText').css('color', '#FFB500');
		$('#menuButton').css('background-color', 'white');
		$('#commentText').css('color', '#FFB500');
		$('#commentButton').css('background-color', '#FFB500');
	});

	$("#photoToLeft, #pubPhotoList>.leftWrap").click(function(event) {
		event.stopPropagation();
		$("#pubPhotoList").naraeWidthSilde("left");
	});

	$("#photoToRight, #pubPhotoList>.rightWrap").click(function() {
		event.stopPropagation();
		$("#pubPhotoList").naraeWidthSilde("right");
	});

	$("#menuToLeft, #menuList>.leftWrap").click(function(event) {
		event.stopPropagation();
		$("#menuList").naraeWidthSilde("left");
	});

	$("#menuToRight, #menuList>.rightWrap").click(function() {
		event.stopPropagation();
		$("#menuList").naraeWidthSilde("right");
	});
});

//나래: 왜 여기 있어야 되는지는 모르겠지만, document 다 load된 후 부르면 에러뜸
$('#pubPhotoList').naraeWidthSildeAuto();
		

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
