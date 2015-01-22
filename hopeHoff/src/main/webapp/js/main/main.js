$(function(){
	//첫 시작시 리스트 로딩
	$("#footer").load("/hopeHoff/web/common/footer.html");
	
	loadKeyword();
	loadContainerList("none");
	
});

var bodyWidth = Narae.removePx($("body").css("width"));
var isMobile = bodyWidth < 769;
var shopAddrText = "가게주소";
var businessNo=null;
var userName = null;
var userPhoneNo = null;
var uId = null;
var isLogin = false;
var uType = null;
var currPageNo;
var shopPhone = null;

//로그아웃버튼 클릭 시- 로그아웃과 동시에 로그인페이지로 ㄱㄱ
$('.logoutBtn').click(function(event){
	  $.getJSON('/hopeHoff/json/auth/logout.do', function(data){
	    location.href = '/hopeHoff/web/main/main.html';
	  });
	});

$('.signUpBtn').click(function(){ 
	$("#back").css("display", "block");
	$("#signUpDiv").css("display", "block");
	$("#signUpDiv").css("margin-left", -( Narae.removePx( $("#signUpDiv").css("width") ) / 2 ));
	
	require(['text!../login/templates/signUp-table.html'],function(html){
	   	var template = Handlebars.compile(html);
	    	$('#signUpDiv').html(template());
		});
	});

//로그인해서 사용자 정보가 main으로 넘어오게됩니당
$.getJSON('/hopeHoff/json/auth/loginUser.do', function(data){
	if (data.status == 'fail') {
		$('.loginBtn').css('display', ''); //로그인실패시 로그인버튼을 살리구
		$('.logoutBtn').css('display', 'none');
		$('.signUpBtn').css('display', '');

		$("#btnMyPage").css('display','none');		   
		$("#btnBook").css('display','none');		   
		$("#btnMyShop").css('display','none');	
		
	} else {
		userName = data.loginUser.uName;
		userPhoneNo = data.loginUser.uPhone;
		uId = data.loginUser.uId;
		uType=data.loginUser.uType;
		isLogin = true;
	
		$('.logoutBtn').css('display', '').css("border", "0px"); //로그인 성공 시 로그아웃버튼 살리구~ 
		$('.loginBtn').css('display', 'none');
		$('.signUpBtn').css('display', 'none');
		
	   if(uType == "user") {
		   
		   $("#btnMyPage").css('display','');		   
			$("#btnBook").css('display','');		   
		    $("#btnMyShop").css('display','none');
		    
		    $('.userName').html(data.loginUser.uName + "님").css("color","#ffb500");
		    
	   } else if(uType == "boss") {
		  
		   $("#btnMyPage").css('display','');		   
			 $("#btnBook").css('display','none');		   
			 $("#btnMyShop").css('display','');
			 
			 $('.userName').html(data.loginUser.uName + " 사장님").css("color","#ffb500");
	   }
	}
});

/*------------------------이벤트 발생시------------------------*/
$(window).resize(function(){
	bodyWidth = Narae.removePx($("body").css("width"));
	isMobile = bodyWidth < 769;
	
	setSmallHeader();
	setKeyword();
});

//스크롤 내릴 때 일정 범위 이상내려가면 smallhader를 보이기
$(window).scroll(function(){
	setSmallHeader();
});


$(".click-myBook").click(function(){
	var height = Narae.removePx($("#mainBody").css("height"));
	var marginLeft = (Narae.removePx($("#mainBody").css("width")) - 600) / 2;
		
	$("#mobileNav").css("display", "none");
	$("#back").css("display", "block").css("height", height);
		
	$("#myBook").css("margin-left", marginLeft + "px").css("display", "block");
	
	loadReservationList(1,uId);
	/*tablerowClick()*/
		/*$.getJSON('../../json/reservation/list.do?pageNo=1', {"uId":uId},
			    function(data){
				yyyyMMddList(data);
				//console.log(data);
			      setPageNo(data.currPageNo, data.maxPageNo);
			    //  var reservations = data.reservations;
			      
			      require(['text!templates/booklist-table.html'],function(html){
			    	  var template = Handlebars.compile(html);
			    	  $('#myBook').html(template(data));
			    	  });
			      });*/
});

$(".click-myShop").click(function(){
	var height = Narae.removePx($("#mainBody").css("height"));
	var marginLeft = (Narae.removePx($("#mainBody").css("width")) - 750) / 2;
		
	$("#mobileNav").css("display", "none");
	$("#back").css("display", "block").css("height", height);
	$("#myMarket").css("margin-left", marginLeft + "px").css("display", "block");
	
	require(['text!templates/myMarket-table.html'], function(html){
		var template = Handlebars.compile(html);
		$('#myMarket').html( template() );
	});
});

$(".click-myPage").click(function(){
	var height = Narae.removePx($("#mainBody").css("height"));
	var marginLeft = (Narae.removePx($("#mainBody").css("width")) - 600) / 2;
		
	$("#mobileNav").css("display", "none");
	$("#back").css("display", "block").css("height", height);
	$("#myPage").css("margin-left", marginLeft + "px").css("display", "block");
	
	require(['text!templates/myPage-chk-table.html'], function(html){
		var template = Handlebars.compile(html);
		var data = {"userId": uId}
		$('#myPage').html( template(data) );
	});
});

$(document).delegate(".list","mouseover",function(){
	var shopIntroAddr = "#" + $(this).attr("id") + " .shopIntroAddr";
	shopIntroAddrText = $(shopIntroAddr).html();
	
	$(shopIntroAddr).removeClass("shopAddr").addClass("btnDetail").html("상세보기");
});

$(document).delegate(".list","mouseout",function(){
	var btnDetail = "#" + $(this).attr("id") + " .btnDetail";
	$(btnDetail).removeClass("btnDetail").addClass("shopIntroAddr").html(shopIntroAddrText);
});


$(document).delegate(".shopInfo>.btnDetail","click",function(){
		var whichNo = ( Math.floor(Narae.removePx($(this).closest(".list").attr("id").split("shop")[1]) / 4) + 1 ) * 4;
		 businessNo =  $(this).closest(".list").attr("data-shop");
		
		var height = Narae.removePx( $( ".list" ).css("height") ) 
					+ Narae.removePx( $( ".list" ).css("border-top") ) 
					+ Narae.removePx( $( ".list" ).css("border-bottom") )
					+ Narae.removePx( $( ".list" ).css("margin-top") );       //.list의 높이 + .list의 margin값
		var marginTop  = Narae.removePx( $( ".list" ).css("margin-top") );
		var shopInfoHeight = Narae.removePx( $( ".shopInfo" ).css("height") ) 
							+ Narae.removePx( $( ".shopInfo" ).css("margin-top") ) 
							+ Narae.removePx( $( ".shopInfo" ).css("margin-bottom") );
		var smallHeaderHeight = Narae.removePx( $( "#smallHeader" ).css("height") );
		var offset = $( $( "#containerList" ).children()[0] ).offset().top + height * (whichNo / 4) - marginTop - shopInfoHeight - smallHeaderHeight; 
		
		if($("#containerList").children().length < 4) {
			whichNo = $("#containerList").children().length;
		}
		
		if(whichNo > $("#containerList").children().length) {
			whichNo = $("#containerList").children().length - 1;
		}
		
		//이미 .box-rotate-up가 있다면 안보이도록
		if($("#containerList:has(.box-rotate-up)")){
			$(".box-rotate-up").css("display","none");
		} 
		
		//이미 detailList있는지 체크하기
		if($("#containerList:has(#detailList)")){
			$("#detailList").remove();
		}
		
		//화살표 표시 생기도록
		$("#" + $(this).closest(".list").attr("id") + " .box-rotate-up").css("display", "block");
		
		//스크롤 위치 이동
        $( "html, body" ).animate( {scrollTop: offset}, 800);
		
		//클릭했을 때 상세정보(detail) 보이는부분
		$($("#containerList").children()[whichNo - 1]).after(
				$("<div>").attr("id", "detailList")
						 .css("width", "100%")  
						  .css("height", "470px")
						  .css("background", "#333231")
						  .css("margin-top", "15px")
						  .css("display", "inline-block")
						  .css("z-index", "5")
		);
		
		
		$.getJSON(
				'../../main/detail.do', {"businessNo": businessNo},
				function(data){
					require(['text!templates/detail-table.html'], function(html){
				        var template = Handlebars.compile(html);
				        $('#detailList').html( template(data) );
				      });
		});
		
	
		
});	



//상단 keyword 선택했을 시, 리스트 다시 뿌리기
$(document).delegate(".has-sub ul a, .selectMenu","click",function(){
	loadContainerList($(this));
});

//예약버튼 눌렀을시 간단예약화면 나타나기
$(document).delegate('.btnSimpleBook',"click",function(){
	var simpleReserv = "#" + $($(this).closest(".list")).attr("id") + " " + ".simpleReserv";
	//console.log(simpleReserv);
	if( isLogin ){
		$( simpleReserv + ">.userInfo").html(userName + "( " + userPhoneNo + " )" + "님,");
		$( simpleReserv ).css("display", "block");
	}else {
		alert ("로그인후 사용해주세요");
		location.href = '/hopeHoff/web/login/login.html';
	}
});

//간단 예약화면에서 X눌렀을 때, 간단예약화면 없애기
$(document).delegate('.btn-close-simpleReserv',"click",function(){
	$( $(this).closest(".simpleReserv") ).css("display", "none");
});

//간단 예약하기
$(document).delegate(".btnBookShop","click",function(){
	 businessNo = $( this ).closest( ".list" ).attr( "data-shop" );                   //해당 가게의 사업자번호
	var bookContent = "#" + $( this ).closest( ".list" ).attr("id") + " .bookContent";   //예약내용
	var shopPhone = $( this ).closest( ".list" ).attr( "data-phone" );                   //해당 가게 전화번호
	var shopName = $( this ).closest( ".list" ).attr( "data-name" );                     //해당 가게 이름
	var data = {shopName: shopName}
	
	if( $( bookContent ).val() != '' ){ //내용이 있을 경우
		//예약 내용 DB에 저장하기
		$.post('../../json/reservation/addReserv.do'
				,{businessNo: businessNo,
				  reservationContent : $( bookContent ).val(),
				  userId  : uId}
				,function(data){
					alert( "예약 되었습니다. 예약 내용은 상단 '예약정보보기'에서 확인 가능합니다." );
				}, 'json');
		
		//업주에게 예약내용 문자보내기
		Narae.sendSms( callbackFun, "bookMsgToBoss", shopPhone, data );
		if(statusMap.status == 'success') {
			console.log("업주님께 문자메시지가 성공적으로 발송되었습니다.");
		}else {
			console.log("업주님께 문자전송을 실패하였습니다");
		}
		
		//간단예약 창 닫기
		$( bookContent ).val('');
		$( this ).closest( ".simpleReserv" ).css("display", "none");
	}else {  //내용이 없을 경우
		alert( "예약 시간과 인원을 입력해주세요" );
	}
	
});


/*--------------------------mobile용 event------------------------------*/

$( "#keywordOpen" ).click(function(){
	if( $( "#keywordOpen" ).text() == "접기 ▲" ){
		$( "#mobileContainerKeyword" ).css("display", "none");
		$( "#keywordOpen" ).text( "검색설정 ▼" );
		$( "#containerTop" ).css("height", "30px");
		$( "#mobileContainerKeyword div" ).removeClass( "mobileKeyword" );
		
	}else if( $( "#keywordOpen" ).text() == "검색설정 ▼" ) {
		$( "#mobileContainerKeyword" ).css("display", "block");
		$( "#keywordOpen ").text( "접기 ▲" );
		$( "#containerTop" ).css("height", "230px");
		$( "#mobileContainerKeyword div" ).addClass( "mobileKeyword" );
	}
});

$("#btnMobileLeftMenu").click(function(){
	$("#mobileNav").css("display", "block");
	$("#back").css("display", "block");
});

$("#moblieNavCancel").click(function(){
	$("#mobileNav").css("display", "none");
	$("#back").css("display", "none");
});

/*------------------------함수------------------------*/

function loadKeyword() {
	$.getJSON(
			'../../main/keyword.do',
			function(data){
				var i = 0;
				
				//mobileContainerKeyword
				for(var keyword in data) {
					$("<div>").attr("id", keyword)
								.append($("<ul>")
										.append($("<li>")
												.append($("<p>")
												.html(data[keyword][i++]))))
								.appendTo($("#mobileContainerKeyword"));
					
					for(var j = 1; j < data[keyword].length; j++){
						$("<li>").append($("<input>")
									.attr("type", "checkbox")
									.attr("value", data[keyword][j]))
								 .append($("<p>" + data[keyword][j] + "</p>"))
								 .appendTo("#" + keyword + " ul");
					}
				}
		
				for(var keyword in data){
					//keyword group
					$("<li>").addClass("has-sub")
					 		 .append($("<a>").attr("href", "#")
					 				 		 .append($("<span>").html(data[keyword][0])))
					 		 .append($("<ul>").attr("id", data[keyword][0]))
					 .appendTo("#webKeyword");
					
					//keyword item
					var keywordGroup= data[keyword];
					var keywordUl = $("#WebContainerKeyword>ul>li ul" + "#" + data[keyword][0]);
					for(var i = 1; i < keywordGroup.length; i++){
						$("<li>")
						 		.append($("<a>").attr("href", "#")
									     		.append($("<span>").html(keywordGroup[i])))
						.appendTo(keywordUl);
					}
				}
	});
}

function loadContainerList(that){
	var ulId = $(that).closest("ul").attr("id");
	var keyword = $($(that).children()[0]).html();
	var keywordGroup = null;
	
	if( ulId == "지역" ){ 
		keywordGroup = "SAREA";
	}else if( ulId == "장소타입" ){
		keywordGroup = "STYPE";
	}else if( ulId == "안주류" ){
		keywordGroup = "SSNACK";
	}else {
		keywordGroup = "none";
	}
	
	if(keyword == "undefined" ){ keyword = "all" }
	
	$.getJSON(
			'../../main/list.do', {"keywordGroup":keywordGroup, "keyword": keyword},
			function(data){
				require(['text!templates/list-table.html'], function(html){
			        var template = Handlebars.compile(html);
			        $('#containerList').html( template(data) );
			        setListAlign( data.shops.length );
			      });
			});
}

//스크롤 내릴 때 일정 범위 이상내려가면 smallhader를 보이는 함수
function setSmallHeader(){
	var headerOffset = Narae.removePx($("#header").css("height"));  //smallHeader고정 시키기 위한 계산 값
	
    if ( $( document ).scrollTop() > headerOffset && !( isMobile ) ) {
        $("#smallHeader").css("display", "block")
        				 .css("position", "fixed")
        				 .css("top", "0px")
        				 .css("z-index", "2");
      }
      else {
        $("#smallHeader").css("display", "none");
      }
}


function setKeyword() {
	var keywordState = {
			webHeight    : "50px",
			mobileHeightClose : "30px",
			mobileHeightOpen : "230px"
	}
	
	if(isMobile) {
		if( $( "#keywordOpen" ).text() == "검색설정 ▼" ){
			$( "#containerTop" ).css("height", keywordState.mobileHeightClose);
		}else if( $( "#keywordOpen" ).text() == "접기 ▲" ){
			$( "#containerTop" ).css("height", keywordState.mobileHeightOpen);
			$( "#mobileContainerKeyword" ).css("display", "block");
		}
	}else {
		$( "#containerTop" ).css("height", keywordState.webHeight);
		$( "#mobileContainerKeyword" ).css("display", "none");
	}
}

function setListAlign( listLength ){
	var list = $( "#containerList" ).children();
	var containerWidth = Narae.removePx( $( "#container" ).css( "width" ) );
	var containerListWidth =  Narae.removePx( $(".list").css("width") ) 
	  							+ Narae.removePx( $(".list").css("margin-left") ) 
	  							+ Narae.removePx( $(".list").css("margin-right") ) 
	  							+ Narae.removePx( $(".list").css("border-right") )
	  							+ Narae.removePx( $(".list").css("border-left") )
	  							;
	var marginLeft = ( containerWidth - containerListWidth * 4 ) / 2;
	
	for(var i = 0; i < listLength; i++ ){
		if(i % 4 == 0){
			$( list[i] ).css("margin-left", marginLeft );
		}
	} 
}

function setPageNo(currPageNo, maxPageNo) {
	  window.currPageNo = currPageNo;
	  window.maxPageNo = maxPageNo;
	  
	  $('#pageNo').html(currPageNo);
	  if (currPageNo <= 1) $('#prevBtn').css('display', 'none');
	  else $('#prevBtn').css('display', '');
	  
	  if (currPageNo >= maxPageNo) $('#nextBtn').css('display', 'none');
	  else $('#nextBtn').css('display', '');
	}



function yyyyMMddList(reservation) {
	if (reservation) {
		// 현재날짜
		var currentDate = new Date();
	//	console.log("현재날짜 :" + currentDate);
		//console.log(reservation);
		//console.log(reservation.reservations[0].reservationDate);

		
		var str;
		for ( var i in reservation.reservations) {
			// 데이터베이스 날짜
			var dbDate = new Date(reservation.reservations[i].reservationDate);
			
			//console.log(dbDate);
			str = "";
			if (!compareDate(currentDate, dbDate)) {
				str = dbDate.getFullYear() + '/';

				if (dbDate.getMonth() < 9)
					str += '0';
				str += (dbDate.getMonth() + 1) + '/';

				if (dbDate.getDate() < 10)
					str += '0';
				str += dbDate.getDate();
			} else {
				if (dbDate.getHours() < 10)
					str += '0';
				str += dbDate.getHours() + ":";

				if (dbDate.getMinutes() < 10)
					str += '0';
				str += dbDate.getMinutes();
			}

			 //console.log("이전 : " + reservation.reservations[i].reservationDate);
			// console.log(str);
			 reservation.reservations[i].reservationDate = str;
			// console.log("이전 : 이후" +boards[board].date);

		}
	} else {
		return '';
	}
}

function compareDate(currentDate, dbDate) {
	if (yyyyMMdd(currentDate) == yyyyMMdd(dbDate))
		return true;
	else
		false;
}

function yyyyMMdd(date) {
	if (date) {
		var date = new Date(date);
		var str = date.getFullYear();

		if (date.getMonth() < 9)
			str += '0';
		str += (date.getMonth() + 1);

		if (date.getDate() < 10)
			str += '0';
		str += date.getDate();

		return str;

	} else {
		return '';
	}
}

function loadReservationList(pageNo,uId) {
	if (pageNo <= 0) pageNo = currPageNo;
		$.getJSON('../../json/reservation/list.do?pageNo='+pageNo, {"uId":uId},
			    function(data){
				yyyyMMddList(data);
				//console.log(data.currPageNo);
				//console.log(data.startIndex);
			      setPageNo(data.currPageNo, data.maxPageNo);
			    //  var reservations = data.reservations;
			      $('.table-tr').remove();
			      
			      require(['text!templates/booklist-table.html'],function(html){
			    	  var template = Handlebars.compile(html);
			    	  $('#myBook').html(template(data));
			    	  });
			      });
	}


/*function tablerowClick(){
	$(document).delegate(".table-tr","click",function(event){
	    $.post('../../json/reservation/view.do'
		        , {
		          resevationNo: $('#test').val()
		        }
		        , function(data){
		          if (data.status == 'success') {
		        	 alert("환영합니다 ^_^*");
		        
		            
		          } else {
		        	  console.log("시부랄")
		          }
		        }
		        , 'json');
		
		$.getJSON('../../json/reservation/view.do',{"resevationNo":reservationNo},
			function(data){
			if(data.status=="success"){
				var status = $($('#myBookData').children()[0]).children().hasClass("table-content");
				console.log("처음",status);
				var num = $($(this)[0]).attr("id").split("table-tr")[1]-0;
				//console.log(num);
				if(!status){
				//status=false;
					console.log("다음",status);
				$('<tr>').addClass('table-content').attr("id","tableContent"+num)
						 .append($('<td id=tableContent colspan="3">').html(data.reservationContent)).css('text-align','center')
					 .append($('<td>').html("<button class=btn-delete id=btnDelete"+num+">취소</button>"))
						.insertAfter('#'+'table-tr'+num)
						console.log("aaaa");
				}
				else 
				{
					console.log("bbbbb");
					$('#'+'tableContent'+num).remove(); 
				}
				
			}
			else{
				console.log("fail");
			}
		});
		
		
	
	});
}		*/	






