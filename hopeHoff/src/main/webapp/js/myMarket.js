$('#contentComments').css('display','none');
	
	$('.menu').click(function(event){
		$('#menuText').css('color','blue');
		$('#menuButton').css('background-color','blue');
		$('#contentMenu').css('display','');
		$('#contentComments').css('display','none');
		$('#commentText').css('color','black');
		$('#commentButton').css('background-color','white');
		
	});
	
	$('.comment').click(function(event){
		$('#menuText').css('color','black');
		$('#menuButton').css('background-color','white');
		$('#contentMenu').css('display','none');
		$('#contentComments').css('display','');
		$('#commentText').css('color','blue');
		$('#commentButton').css('background-color','blue');
	});
	
	
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
	