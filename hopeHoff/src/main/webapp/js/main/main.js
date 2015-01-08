$(function(){
	//첫 시작시 리스트 로딩
	//$("#containerList").load("/hopeHoff/web/main/containerList.html"); => 나중에 containerList.html지우기
	$("#footer").load("/hopeHoff/web/common/footer.html");
	
	loadKeyword();
	loadContainerList();
	
});

var bodyWidth = Narae.removePx($("body").css("width"));
var isMobile = bodyWidth < 769;

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
	$("#back").css("display", "block")
			  .css("height", height);
	
	$("#myBook").css("margin-left", marginLeft + "px").css("display", "block");
	$("#myBook").load("../myBook/myBook.html");
	
});

$(".click-myShop").click(function(){
	var height = Narae.removePx($("#mainBody").css("height"));
	var marginLeft = (Narae.removePx($("#mainBody").css("width")) - 750) / 2;
	
	$("#mobileNav").css("display", "none");
	$("#back").css("display", "block")
			  .css("height", height);
	
	$("#myMarket").css("margin-left", marginLeft + "px").css("display", "block");
	$("#myMarket").load("../myMarket/myMarket.html");
});

$(".click-myPage").click(function(){
	var height = Narae.removePx($("#mainBody").css("height"));
	var marginLeft = (Narae.removePx($("#mainBody").css("width")) - 600) / 2;
	
	$("#mobileNav").css("display", "none");
	$("#back").css("display", "block")
	  .css("height", height);
	
	$("#myPage").css("margin-left", marginLeft + "px").css("display", "block");
	$("#myPage").load("../myPage/myPage.html");

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

$(document).delegate(".list","click",function(){
		console.log("list호출zz");
		
		var presentWidth = Narae.removePx($("#containerList").css("width"));
		var presentHeight = Narae.removePx($("#containerList").css("height"));
		var listWidth = Narae.removePx($(".list").css("width"));
		var marginWidth = Narae.removePx(($(".list").css("margin-left")));
		var widthCount = parseInt(presentWidth/(listWidth + marginWidth));  //한 줄에 몇개 있는지
		var childNo = $(".list").index(this);                               //지금 선택된 요소가 몇번째 자식인지
		var whichNo =  (Math.ceil( (childNo + 1) / widthCount))* widthCount;          //어떤 요소 다음에 추가 될지 번호
		var lastNo = $(".list").index($(".list:last-child"));
		
		//이미 detailList있는지 체크하기
		if($("#containerList:has(#detailList)")){
			$("#detailList").remove();
		} 
				 
		//클릭했을 때 상세정보(detail) 보이는부분
		$($("#containerList").children()[whichNo]).after(
				$("<div>").attr("id", "detailList")
						 .css("width", "100%")  
						  .css("height", "470px")
						  .css("background", "#333231")
						  .css("margin-top", "15px")
						  .css("display", "none")
						  .css("z-index", "5")
		);
		
		$("#detailList").load("../details/details.html"); 

		//detail부분 아래로 내려오는 효과
		$( "#detailList" ).slideDown( 1000, function() {
			$("#detailList").css("display", "inline-block");
		  });
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
				
				//webContainerKeyword
				var ul = $("<ul>").appendTo("#WebContainerKeyword");
				
				for(var keyword in data){
					//keyword group
					$("<li>").addClass("has-sub")
					 		 .append($("<a>").attr("href", "#")
					 				 		 .append($("<span>").html(data[keyword][0])))
					 		 .append($("<ul>").attr("id", data[keyword][0]))
					 .appendTo(ul);
					
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

function loadContainerList(){
	$.getJSON(
			'../../main/list.do',
			function(data){
				
				for (var i = 0; i < data.shops.length; i++) {
					var shopId = "#shop" + i;
					
					$($("<div>").addClass("list")
							    .append($("<div>").addClass("shopPhoto")
							    				  .append($("<img>").attr("src", "/hopeHoff/img/details/Wara-Wara01.jpg"))
							    				  .append($("<div>").addClass("btnBook")
							    						  			.attr("id", "book" + i)
							    						  			.html("예약하기")))
							    .append($("<div>").addClass("shopInfo")
							    				  .append($("<span>").addClass("shopTilte")
							    						  			 .html("[ " + data.shops[i].shopName + " ]"))
							    				  .append($("<span>").addClass("shopIntro")
							    						  			 .html(data.shops[i].shopIntro))
							    				  .append($("<div>").addClass("shopAddr")
							    						  			.html(data.shops[i].shopAddr))))
							    				  /*.text("[" + data.shops[i].shopName + "]" + data.shops[i].shopIntro)))*/
					.appendTo("#containerList");
					
						
				}
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











