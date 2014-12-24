
		$(document).ready(function() {

			$('#contentComments').css('display', 'none');
			$('#menuText').css('color', 'black');
			$('#menuButton').css('background-color', 'black');
			
			$('.menu').click(function(event) {
				$("#contentMenu").css('display', '');
				$('#contentComments').css('display', 'none');
				
				$('#menuText').css('color', 'black');
				$('#menuButton').css('background-color', 'black');
				$('#commentText').css('color', 'black');
				$('#commentButton').css('background-color', 'white');
			});

			
			$('.comment').click(function(event) {
				$("#contentMenu").css('display', 'none');
				$('#contentComments').css('display', '');
				
				$('#menuText').css('color', 'black');
				$('#menuButton').css('background-color', 'white');
				$('#commentText').css('color', 'black');
				$('#commentButton').css('background-color', 'black');
			});

			$("#btnToLeft").hover(function() {
				myWidthSilde("#menuList", 170, 1000);
			});

			$("#btnToRight").hover(function() {
				myWidthSilde("#myShopList", -275, 1000);
			});

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
