	$('#contentComments').css('display','none');
	
	$('.menu').click(function(event){
		$('#menuText').css('color','blue');
		$('#menuButton').css('background-color','blue');
		$('#menuImages').css('display','');
		$('#commentText').css('color','black');
		$('#commentButton').css('background-color','white');
	});
	
	$('.comment').click(function(event){
		$('#menuText').css('color','black');
		$('#menuButton').css('background-color','white');
		$('#menuImages').css('display','none');
		$('#contentComments').css('display','');
		$('#commentText').css('color','blue');
		$('#commentButton').css('background-color','blue');
	});
	
	/************************************************************************************************/
	
		$('<tr id=tRow0>').appendTo($('#dataForm'));
		$('<th class=tableDataNo>').html("No").appendTo($('#tRow0'));
		$('<th class=tableDataName>').html("Name").appendTo($('#tRow0'));
		$('<th class=tableDataComments>').html("Comments").appendTo($('#tRow0'));
		$('<th class=tableDataTime>').html("Time").appendTo($('#tRow0'));
	
		$('<tr id=tRow1>').appendTo($('#dataForm'));
		$('<td class=tableDataNo>').html("No").appendTo($('#tRow1'));
		$('<td class=tableDataName>').html("Name").appendTo($('#tRow1'));
		$('<td class=tableDataComments>').html("Comments").appendTo($('#tRow1'));
		$('<td class=tableDataTime>').html("Time").appendTo($('#tRow1'));
	
	