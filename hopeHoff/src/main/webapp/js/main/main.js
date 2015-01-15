$(function(){
	//첫 시작시 리스트 로딩
	$("#footer").load("/hopeHoff/web/common/footer.html");
	
	loadKeyword();
	loadContainerList("none");
	
});

var bodyWidth = Narae.removePx($("body").css("width"));
var isMobile = bodyWidth < 769;
var shopAddrText = "가게주소";
var userName = null;
var userPhoneNo = null;
var userId = null;
var isLogin = false;

//로그아웃버튼 클릭 시- 로그아웃과 동시에 로그인페이지로 ㄱㄱ
$('.logoutBtn').click(function(event){
	  $.getJSON('/hopeHoff/json/auth/logout.do', function(data){
	    location.href = '/hopeHoff/web/main/main.html';
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
		userId = data.loginUser.uId;
		isLogin = true;
	
		//console.log(userId);
		//console.log(userPhoneNo)
		$('.logoutBtn').css('display', '').css("border", "0px"); //로그인 성공 시 로그아웃버튼 살리구~ 
		$('.loginBtn').css('display', 'none');
		$('.signUpBtn').css('display', 'none');
		

	   if(data.loginUser.uType == "user") {
		   
		   $("#btnMyPage").css('display','');		   
			$("#btnBook").css('display','');		   
		    $("#btnMyShop").css('display','none');
		    
		    $('.userName').html(data.loginUser.uName + "님").css("color","#ffb500");
		    
	   } else if(data.loginUser.uType == "boss") {
		  
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
	if(isLogin){
		var height = Narae.removePx($("#mainBody").css("height"));
		var marginLeft = (Narae.removePx($("#mainBody").css("width")) - 600) / 2;
		
		$("#mobileNav").css("display", "none");
		$("#back").css("display", "block")
				  .css("height", height);
		
		$("#myBook").css("margin-left", marginLeft + "px").css("display", "block");
		$("#myBook").load("../myBook/myBook.html");
	}else {
		alert ("로그인후 사용해주세요");
		location.href = '/hopeHoff/web/login/login.html';
	}
});

$(".click-myShop").click(function(){
	if(isLogin){
		var height = Narae.removePx($("#mainBody").css("height"));
		var marginLeft = (Narae.removePx($("#mainBody").css("width")) - 750) / 2;
		
		$("#mobileNav").css("display", "none");
		$("#back").css("display", "block")
				  .css("height", height);
		
		$("#myMarket").css("margin-left", marginLeft + "px").css("display", "block");
		$("#myMarket").load("../myMarket/myMarket.html");
	}else {
		alert ("로그인후 사용해주세요");
		location.href = '/hopeHoff/web/login/login.html';
	}
});

$(".click-myPage").click(function(){
	if(isLogin){
		var height = Narae.removePx($("#mainBody").css("height"));
		var marginLeft = (Narae.removePx($("#mainBody").css("width")) - 600) / 2;
		
		$("#mobileNav").css("display", "none");
		$("#back").css("display", "block")
		  .css("height", height);
		
		$("#myPage").css("margin-left", marginLeft + "px").css("display", "block");
		$("#myPage").load("../myPage/myPage.html");
	}
	else {
		alert ("로그인후 사용해주세요");
		location.href = '/hopeHoff/web/login/login.html';
	}
	

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
		var businessNo =  $(this).closest(".list").attr("data-shop");
		
		if($("#containerList").children().length < 4) {
			whichNo = $("#containerList").children().length;
		}
		
		if(whichNo > $("#containerList").children().length) {
			whichNo = $("#containerList").children().length - 1;
		}
		
		//이미 detailList있는지 체크하기
		if($("#containerList:has(#detailList)")){
			$("#detailList").remove();
		} 
		
		//클릭했을 때 상세정보(detail) 보이는부분
		$($("#containerList").children()[whichNo - 1]).after(
				$("<div>").attr("id", "detailList")
						 .css("width", "100%")  
						  .css("height", "470px")
						  .css("background", "#333231")
						  .css("margin-top", "15px")
						  .css("display", "none")
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
		
		//detail부분 아래로 내려오는 효과
		$( "#detailList" ).slideDown( 1000, function() {
			$("#detailList").css("display", "inline-block");
		  });
});	

//상단 keyword 선택했을 시, 리스트 다시 뿌리기
$(document).delegate(".has-sub ul a","click",function(){
	loadContainerList($(this));
});

//예약버튼 눌렀을시 간단예약화면 나타나기
$(document).delegate('.btnBook',"click",function(){
	var simpleReserv = "#" + $($(this).closest(".list")).attr("id") + " " + ".simpleReserv";
	
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
				//console.log(data);
				require(['text!templates/list-table.html'], function(html){
			        var template = Handlebars.compile(html);
			        $('#containerList').html( template(data) );
			        setContainerSize();
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

function setContainerSize(){
	var containerListWidth =  Narae.removePx( $(".list").css("width") ) 
							  + Narae.removePx( $(".list").css("margin-left") ) 
							  + Narae.removePx( $(".list").css("margin-right") ) + 10;
	
/*	var containerListCountWidth = ( Narae.removePx( $(".list").css("width") ) 
			  + Narae.removePx( $(".list").css("margin-left") ) 
			  + Narae.removePx( $(".list").css("margin-right") )) * 4;  //4 =>한줄에 있는 리스트 개수
	var containerWidth = Narae.removePx( $("#container").css("width") );*/

/*	console.log(containerListWidth);
	console.log(containerListCountWidth);
	console.log(containerListCountWidth > containerWidth);
	
	if(containerListCountWidth > containerWidth ) { containerListCountWidth = containerListWidth * 4; }
	$("#containerList").css("width", ( containerListCountWidth ) + "px");*/
	
	$("#containerList").css("width", ( containerListWidth * 4 ) + "px");
}










