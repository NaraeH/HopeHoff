
$(document).ready(function() {
	$.getJSON('/hopeHoff/json/auth/loginUser.do', function(id){
		
			$.post('../../json/myMarketControl/marketList.do'
			        , { userId: id.loginUser.uId}
			        , function(data){
			        	if(data.status == "success") {
			        		$('#shopName').html(data.shopList0.shopName);
			        		
			        		$('<option>').html(data.shopList1.shopName).attr("selected","selected").appendTo($('#selectForm'));
			        		$('<option>').html(data.shopList2.shopName).appendTo($('#selectForm'));
			        		$('.myImgText').html(data.shopList1.shopName);
			        		console.log("data.shopList1.shopName : " + data.shopList1.shopName);
			        		console.log("data.shopList2.shopName : " + data.shopList2.shopName);
			        		$('#time').attr("placeholder",data.shopList1.shopTime);
			        		$('#phone').attr("placeholder",data.shopList1.shopPhone);
			        		$('#addr').attr("placeholder",data.shopList1.shopDetailAddr);
			        		$('#intro').attr("placeholder",data.shopList1.shopIntro);
			        		$('#myPubPhoto1').attr("background-image",'url("/' + data.shopList1.detailPhoto1 + '")');
			        		$('#myPubPhoto2').attr("background-image",'url("/' + data.shopList1.detailPhoto2 + '")');
			        		/*$('#myPubPhoto3').attr("background-image",'url("/' + data.shopList0.detailPhoto3 + '")');*/
			        	
			        	} else {   	console.log(data.status);        	}
			          }
			        , 'json');
			
			$.post('../../json/myMarketControl/marketMenu.do'
			        , { userId: id.loginUser.uId}
			        , function(data){
			        	if(data.status == "success") {
			        	
			        		console.log("fetching menus .. . mission "+data.status); 
			        	} else {   	console.log(data.status);        	}
			          }
			        , 'json');

	});
	
	
	$('#myContentComments').css('display', 'none');
	$('#myMenuText').css('color', '#FFB500');
	$('#myCommentText').css('color', '#FFB500');
	$('#myMenuButton').css('background-color', '#FFB500');
	
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
	});
});

//나래: 왜 여기 있어야 되는지는 모르겠지만, document 다 load된 후 부르면 에러뜸
$('#myPubPhotoListWrap').naraeWidthSildeAuto(1500);
$('#myMenuListWrap').naraeWidthSilde();	

$("#btnMyMarketClose").click(function(){
	$("#myMarket").css("display", "none");
	$("#back").css("display", "none");
});

	/************************************************************************************************/
	
		$('<tr id=tRow0 style="color:white">').appendTo($('#myDataForm'));
		//$('<th class=tableDataNo>').html("No").appendTo($('#tRow0'));
		$('<th class=tableDataName>').html("Name").appendTo($('#tRow0'));
		$('<th class=tableDataComments>').html("Comments").appendTo($('#tRow0'));
		$('<th class=tableDataTime>').html("Time").appendTo($('#tRow0'));
		$('<th class=tableDataButton>');
	
	
		 $('<tr id=tRowNew style="color:white">').appendTo($('#myDataForm')); 
		//$('<td class=tableDataNo>').html("3").appendTo($('#tRow3'));
	    $('<td class=tableDataName>').html("붸연정").appendTo($('#tRowNew'));
		$('<td class=tableDataComments>')
				.append($('<input type="text" placeholder="한줄평을 남겨주세용">'))
				.appendTo($('#tRowNew'));
		$('<td class=tableDataTime>').html("2014-12-18").appendTo($('#tRowNew'));
		$('<td class=tableDataButton>')
				.append($('<button type="button" id="plus" style="color:blue">+</button>'))
				.appendTo($('#tRowNew'));
		
		$('<tr id=tRow2 style="color:white">').appendTo($('#myDataForm')); 
		//$('<td class=tableDataNo>').html("2").appendTo($('#tRow2'));
	    $('<td class=tableDataName>').html("현나뤠").appendTo($('#tRow2'));
		$('<td class=tableDataComments>').html("여기 해물탕 추천이요!!").appendTo($('#tRow2'));
		$('<td class=tableDataTime>').html("2014-12-14").appendTo($('#tRow2'));
		
		$('<tr id=tRow1 style="color:white">').appendTo($('#myDataForm')); 
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
		
		  $('#myDataForm').append($("#myDataForm:nth-child(2)")).append($('<tr id=tRow3>'));
	
  		  $('<td class=tableDataName>').html("붸연정***").appendTo($('#tRow3'));
		  $('<td class=tableDataComments>').html("후기당ㅇㅇㅇ").appendTo($('#tRow3'));
		  $('<td class=tableDataTime>').html("2014-12-18").appendTo($('#tRow3'));
	
		}); 

