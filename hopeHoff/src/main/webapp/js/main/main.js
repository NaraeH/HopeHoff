$(function(){
	
	var count = 0; //for문을 위한 index
	var checkedList = []; //keyword를 담기위한 배열
	
	//첫 시작시 리스트 로딩
	//$("#containerList").load("/hopeHoff/web/main/containerList.html");
	$("#footer").load("/hopeHoff/web/common/footer.html");
	
	loadKeyword();
	loadContainerList();
});


/*------------------------이벤트 발생시------------------------*/

$(window).resize(function(){
	mainBodyWidth = Narae.removePx($("#mainBody").css("width"));
	
	//1132는 하드 코딩된값 => 나중에 동적으로 수정하자!
	if( mainBodyWidth < 1132 ){
		//mobile에서 검색설정 ▼ 누른 채 크기 늘렸다 줄여도 유지 되도록 하기
		if( $( "#keywordOpen" ).text() == "검색설정 ▼" ){
			$( "#containerTop" ).css("height", "30px");
			$( "#containerKeyword" ).css("display", "none");
		}else if( $( "#keywordOpen" ).text() == "접기 ▲" ){
			$( "#containerTop" ).css("height", "230px");
		}
	}else {
		$("#containerTop").css("height", "125px");
		$( "#containerKeyword" ).css("display", "block");
		
	}
});

//스크롤 내릴 때 일정 범위 이상내려가면 smallhader를 보이기
$(window).scroll(function(){
	var headerOffset = Narae.removePx($("#header").css("height"));  //smallHeader고정 시키기 위한 계산 값
	var mainBodyWidth = Narae.removePx($("#mainBody").css("width"));
	
    if ( $( document ).scrollTop() > headerOffset && mainBodyWidth >= 421) {
        $("#smallHeader").css("display", "block")
        				 .css("position", "fixed")
        				 .css("top", "0px")
        				 .css("z-index", "2");
      }
      else {
        $("#smallHeader").css("display", "none");
      }
});



$(":checkbox").click(function() {
	//체크하는 경우
	if ($(this).is(":checked")) {
		checkedList[checkedList.length] = $(this).val();
	}

	//체크를 없애는 겨우
	if(!($(this).is(":checked"))){
		for(count = 0; count<checkedList.length; count++){
			if(checkedList[count] == $(this).val()){
				checkedList.remove(count);
			}  
		}
	} 

	//가게검색내용에 keyword추가하기
	$("#containerList").load("containerList.html", function() {
		for(count = 0; count<checkedList.length; count++){
			$("<div>").attr("class", "listKeywordItem")
			.text(checkedList[count])
			.appendTo($(".listKeywordContainer"));

		}
	});  
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


$( "#keywordOpen" ).click(function(){
	if( $( "#keywordOpen" ).text() == "접기 ▲" ){
		$( "#containerKeyword" ).css("display", "none");
		$( "#keywordOpen" ).text( "검색설정 ▼" );
		$( "#containerTop" ).css("height", "30px");
		$( "#containerKeyword div" ).removeClass( "mobileKeyword" );
		
	}else if( $( "#keywordOpen" ).text() == "검색설정 ▼" ) {
		$( "#containerKeyword" ).css("display", "block");
		$( "#keywordOpen ").text( "접기 ▲" );
		$( "#containerTop" ).css("height", "230px");
		$( "#containerKeyword div" ).addClass( "mobileKeyword" );
	}
});

$("#btnMobileLeftMenu").click(function(){
	$("#mobileNav").css("display", "block");
	$("#back").css("display", "block");
});

$("#moblieNavCancel").click(function(){
	$("#mobileNav").css("display", "none");
	$("#back").css("display", "none");
})


/*------------------------함수------------------------*/

function loadKeyword() {
	$.getJSON(
			'../../main/keyword.do',
			function(data){
				for(var keyword in data) {
					$("<div>").attr("id", keyword)
								.append($("<ul>")
										.append($("<li>")
												.append($("<p>")
												.html(data[keyword][0]))))
								.appendTo($("#containerKeyword"));
					
					for(var i = 1; i < data[keyword].length; i++){
						$("<li>").append($("<input>")
									.attr("type", "checkbox")
									.attr("value", data[keyword][i]))
								 .append($("<p>" + data[keyword][i] + "</p>"))
								 .appendTo("#" + keyword + " ul");
					}
				}
	});
}

function loadContainerList(){
	var presentWidth = ($("#containerList").css("width")).split("px").splice(0, 1) - 0;
	var count = 13;  //list출력개수 현재는 임의로 지정
	
	$.getJSON(
			'../../main/list.do',
			function(data){
				console.log(data);
				
				for (var i = 0; i < count; i++) {
					$($("<div>").attr("class", "list").append($("<div>")
																.attr("class", "listInfo")
																.append($("<div>")
																.attr("class", "listTitle")
																.text("준코"))
											 .append($("<a>")
											 	.attr("href", "#")
											 	.append($("<img>")
												.attr("src", "/hopeHoff/img/details/Wara-Wara01.jpg"))
											 .append($("<div>")
												.attr("class", "pictureBackground")
											    .text("상세보기"))))
											 .append("<hr>")
											 .append($("<div>")
												.attr("class","listKeywordContainer")
												.attr("my-no", i))
							.appendTo("#containerList"));
				}
			});
}












