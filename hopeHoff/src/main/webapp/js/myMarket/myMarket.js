$(document).ready(function() {
	$.getJSON('/hopeHoff/json/auth/loginUser.do', function(id){
		
			$.post('../../json/myMarketControl/marketInfo.do'
			        , { userId: id.loginUser.uId}
			        , function(data){
			        	if(data.status == "success") {
			        		$('<option>').html(data.shopInfo0[0].shopName).attr("selected","selected").appendTo($('#selectForm'));
			        		$('<option>').html(data.shopInfo1[0].shopName).appendTo($('#selectForm'));
			        	
			        		//shop information 맨위 가게이름
			        		$('#shopName').html(data.shopInfo0[0].shopName);
			        		//shop information - 영업시간/ 전화번호/ 주소/인삿말.
			        		$('#time').attr("placeholder",data.shopInfo0[0].shopTime);
			        		$('#phone').attr("placeholder",data.shopInfo0[0].shopPhone);
			        		$('#addr').attr("placeholder",data.shopInfo0[0].shopDetailAddr);
			        		$('#intro').attr("placeholder",data.shopInfo0[0].shopIntro);
			        		
			        		//가게 사진위에 나오는 가게이름
			        		$('.myImgText').html(data.shopInfo0[0].shopName);
			        		
			        		//가게 내부 전경사진
			        		$('#myPubPhoto1').css("background-image",'url("../../img/shopPhoto/detail/' + data.shopInfo0[0].detailPhoto1 + '")');
			        		$('#myPubPhoto2').css("background-image",'url("../../img/shopPhoto/detail/' + data.shopInfo0[0].detailPhoto2 + '")');
			        		$('#myPubPhoto3').css("background-image",'url("../../img/shopPhoto/detail/' + data.shopInfo0[0].detailPhoto3 + '")');
			        		
			        		$('#menu1').attr("src","../../img/shopPhoto/menu/"+data.shopInfo0[0].menuPhoto);
				        	$('#menu2').attr("src","../../img/shopPhoto/menu/"+data.shopInfo0[1].menuPhoto);
				        	$('#menu3').attr("src","../../img/shopPhoto/menu/"+data.shopInfo0[2].menuPhoto);
				        	$('#menu4').attr("src","../../img/shopPhoto/menu/"+data.shopInfo0[3].menuPhoto);
			        		
			        		/************select에 따라 DB에서 가져오는게 달리지죠**************/
			        		$("select").change(function () {
			        		    var str = "";
			        		    $( "select option:selected" ).each(function() {
			        		      str += $( this ).text() + "";
			        		    });
			        		    console.log("selected box is changed to -> "+ str);
			        		   
			        		    
			        		    if(data.shopInfo1[0].shopName == str) {
			        		    	$('#shopName').html(data.shopInfo1[0].shopName);
					        		//shop information - 영업시간/ 전화번호/ 주소/인삿말.
					        		$('#time').attr("placeholder",data.shopInfo1[0].shopTime);
					        		$('#phone').attr("placeholder",data.shopInfo1[0].shopPhone);
					        		$('#addr').attr("placeholder",data.shopInfo1[0].shopDetailAddr);
					        		$('#intro').attr("placeholder",data.shopInfo1[0].shopIntro);
					        		
					        		//가게 사진위에 나오는 가게이름
					        		$('.myImgText').html(data.shopInfo1[0].shopName);
					        		//가게 내부 전경사진
					        		$('#myPubPhoto1').css("background-image",'url("../../img/shopPhoto/detail/' + data.shopInfo1[0].detailPhoto1 + '")');
					        		$('#myPubPhoto2').css("background-image",'url("../../img/shopPhoto/detail/' + data.shopInfo1[0].detailPhoto2 + '")');
					        		$('#myPubPhoto3').css("background-image",'url("../../img/shopPhoto/detail/' + data.shopInfo1[0].detailPhoto3 + '")');
					        		
					        		/*for(var i=0; i< shopInfo1[0].size(); i++){
				        		    	$('#menu'+i).attr("src","../../img/shopPhoto/menu/"+data.shopInfo1[i].menuPhoto);
			        		    	}*/
			        		    	$('#menu1').attr("src","../../img/shopPhoto/menu/"+data.shopInfo1[0].menuPhoto);
						        	$('#menu2').attr("src","../../img/shopPhoto/menu/"+data.shopInfo1[1].menuPhoto);
						        	$('#menu3').attr("src","../../img/shopPhoto/menu/"+data.shopInfo1[2].menuPhoto);
						        	$('#menu4').attr("src","../../img/shopPhoto/menu/"+data.shopInfo1[3].menuPhoto);
						        	
			        		    } else if(data.shopInfo0[0].shopName == str) {
			        		    	$('#shopName').html(data.shopInfo0[0].shopName);
					        		//shop information - 영업시간/ 전화번호/ 주소/인삿말.
					        		$('#time').attr("placeholder",data.shopInfo0[0].shopTime);
					        		$('#phone').attr("placeholder",data.shopInfo0[0].shopPhone);
					        		$('#addr').attr("placeholder",data.shopInfo0[0].shopDetailAddr);
					        		$('#intro').attr("placeholder",data.shopInfo0[0].shopIntro);
					        		
					        		//가게 사진위에 나오는 가게이름
					        		$('.myImgText').html(data.shopInfo0[0].shopName);
					        		//가게 내부 전경사진
					        		$('#myPubPhoto1').css("background-image",'url("../../img/shopPhoto/detail/' + data.shopInfo0[0].detailPhoto1 + '")');
					        		$('#myPubPhoto2').css("background-image",'url("../../img/shopPhoto/detail/' + data.shopInfo0[0].detailPhoto2 + '")');
					        		$('#myPubPhoto3').css("background-image",'url("../../img/shopPhoto/detail/' + data.shopInfo0[0].detailPhoto3 + '")');
			        		     
					        		$('#menu1').attr("src","../../img/shopPhoto/menu/"+data.shopInfo0[0].menuPhoto);
						        	$('#menu2').attr("src","../../img/shopPhoto/menu/"+data.shopInfo0[1].menuPhoto);
						        	$('#menu3').attr("src","../../img/shopPhoto/menu/"+data.shopInfo0[2].menuPhoto);
						        	$('#menu4').attr("src","../../img/shopPhoto/menu/"+data.shopInfo0[3].menuPhoto);	
			        		    
			        		    } else {
			        		    	 console.log("Thats nono");
			        		     }
			        		    
			        	
			        		  });
			        	
			        	} else {
			        		console.log("-->" + data.status);			        		
			        	}

			          }
			        , 'json');
			
	

	});    /* ready()  끝 쪽 */



/*$(document).ready(function() {
	$.getJSON('/hopeHoff/json/auth/loginUser.do', function(id){
		
			$.post('../../json/myMarketControl/marketList.do'
			        , { userId: id.loginUser.uId}
			        , function(data){
	
			        		$('<option>').html(data.shopList0.shopName).attr("selected","selected").appendTo($('#selectForm'));
			        		$('<option>').html(data.shopList1.shopName).appendTo($('#selectForm'));
			        	
			        		if(data.shopList0 != null) {console.log("$('#selectForm').val() : "+$('#selectForm').val());}			        		
			        		console.log("data.shopList0.shopName : " + data.shopList0.shopName);
			        		console.log("data.shopList1.shopName : " + data.shopList1.shopName);
			        		
			        		
			        		//shop information 맨위 가게이름
			        		$('#shopName').html(data.shopList0.shopName);
			        		//shop information - 영업시간/ 전화번호/ 주소/인삿말.
			        		$('#time').attr("placeholder",data.shopList0.shopTime);
			        		$('#phone').attr("placeholder",data.shopList0.shopPhone);
			        		$('#addr').attr("placeholder",data.shopList0.shopDetailAddr);
			        		$('#intro').attr("placeholder",data.shopList0.shopIntro);
			        		
			        		//가게 사진위에 나오는 가게이름
			        		$('.myImgText').html(data.shopList0.shopName);
			        		//가게 내부 전경사진
			        		$('#myPubPhoto1').css("background-image",'url("../../img/shopPhoto/detail/' + data.shopList0.detailPhoto1 + '")');
			        		$('#myPubPhoto2').css("background-image",'url("../../img/shopPhoto/detail/' + data.shopList0.detailPhoto2 + '")');
			        		$('#myPubPhoto3').css("background-image",'url("../../img/shopPhoto/detail/' + data.shopList0.detailPhoto3 + '")');
			        		
			        		
			        		
			   *//**************************select에 따라 DB에서 가져오는게 달리지죠********************************//*
			        		$("select").change(function () {
			        		    var str = "";
			        		    $( "select option:selected" ).each(function() {
			        		      str += $( this ).text() + "";
			        		    });
			        		    console.log("selected box is changed to -> "+ str);
			        		    var str2 = data.shopList1.shopName;
			        		    console.log("          str2             -> "+ str2);
			        		    
			        		    if(data.shopList1.shopName == str) {
			        		    	$('#shopName').html(data.shopList1.shopName);
					        		//shop information - 영업시간/ 전화번호/ 주소/인삿말.
					        		$('#time').attr("placeholder",data.shopList1.shopTime);
					        		$('#phone').attr("placeholder",data.shopList1.shopPhone);
					        		$('#addr').attr("placeholder",data.shopList1.shopDetailAddr);
					        		$('#intro').attr("placeholder",data.shopList1.shopIntro);
					        		
					        		//가게 사진위에 나오는 가게이름
					        		$('.myImgText').html(data.shopList1.shopName);
					        		//가게 내부 전경사진
					        		$('#myPubPhoto1').css("background-image",'url("../../img/shopPhoto/detail/' + data.shopList1.detailPhoto1 + '")');
					        		$('#myPubPhoto2').css("background-image",'url("../../img/shopPhoto/detail/' + data.shopList1.detailPhoto2 + '")');
					        		$('#myPubPhoto3').css("background-image",'url("../../img/shopPhoto/detail/' + data.shopList1.detailPhoto3 + '")');
					        		
			        		    } else if(data.shopList0.shopName == str) {
			        		    	$('#shopName').html(data.shopList0.shopName);
					        		//shop information - 영업시간/ 전화번호/ 주소/인삿말.
					        		$('#time').attr("placeholder",data.shopList0.shopTime);
					        		$('#phone').attr("placeholder",data.shopList0.shopPhone);
					        		$('#addr').attr("placeholder",data.shopList0.shopDetailAddr);
					        		$('#intro').attr("placeholder",data.shopList0.shopIntro);
					        		
					        		//가게 사진위에 나오는 가게이름
					        		$('.myImgText').html(data.shopList0.shopName);
					        		//가게 내부 전경사진
					        		$('#myPubPhoto1').css("background-image",'url("../../img/shopPhoto/detail/' + data.shopList0.detailPhoto1 + '")');
					        		$('#myPubPhoto2').css("background-image",'url("../../img/shopPhoto/detail/' + data.shopList0.detailPhoto2 + '")');
					        		$('#myPubPhoto3').css("background-image",'url("../../img/shopPhoto/detail/' + data.shopList0.detailPhoto3 + '")');
			        		     } else {
			        		    	 console.log("Thats nono");
			        		     }
			        		    
			        		  });

			          }
			        , 'json');
			
			$.post('../../json/myMarketControl/marketMenu.do'
			        , { userId: id.loginUser.uId}
			        , function(data){
			        	$('#menu1').attr("src","../../img/shopPhoto/menu/"+data.shopMenu0[0].menuPhoto);
			        	$('#menu2').attr("src","../../img/shopPhoto/menu/"+data.shopMenu0[1].menuPhoto);
			        	$('#menu3').attr("src","../../img/shopPhoto/menu/"+data.shopMenu0[2].menuPhoto);
			        	$('#menu4').attr("src","../../img/shopPhoto/menu/"+data.shopMenu0[3].menuPhoto);
			        		
			        		$("select").change(function () {
			        		    var str = "";
			        		    $( "select option:selected" ).each(function() {
			        		      str += $( this ).text() + "";
			        		    });
			        		    
			        		    if(str == "와라와라"){
			        		    	$('#menu1').attr("src","../../img/shopPhoto/menu/"+data.shopMenu0[0].menuPhoto);
						        	$('#menu2').attr("src","../../img/shopPhoto/menu/"+data.shopMenu0[1].menuPhoto);
						        	$('#menu3').attr("src","../../img/shopPhoto/menu/"+data.shopMenu0[2].menuPhoto);
						        	$('#menu4').attr("src","../../img/shopPhoto/menu/"+data.shopMenu0[3].menuPhoto);	        		    
			        		    } else if(str == "꾼(KKUNNORI)"){
			        		    	for(var i=0; i< shopMenu1.size(); i++){
				        		    	$('#menu'+i).attr("src","../../img/shopPhoto/menu/"+data.shopMenu1[i].menuPhoto);
			        		    	}
			        		    	$('#menu1').attr("src","../../img/shopPhoto/menu/"+data.shopMenu1[0].menuPhoto);
						        	$('#menu2').attr("src","../../img/shopPhoto/menu/"+data.shopMenu1[1].menuPhoto);
						        	$('#menu3').attr("src","../../img/shopPhoto/menu/"+data.shopMenu1[2].menuPhoto);
						        	$('#menu4').attr("src","../../img/shopPhoto/menu/"+data.shopMenu1[3].menuPhoto);
			        		    }
			        		  
			        		});
			        		    
			        		
			        
			          }
			        , 'json');

	});     ready()  끝 쪽 
*/
	
	
		
	
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

	/*****************************tab - comment 달리는거..임시로한거에욤*************************************************/
	
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

