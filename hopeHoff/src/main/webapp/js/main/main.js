$(document).ready(function(){
	
	var count = 0; //for문을 위한 index
	var checkedList = []; //keyword를 담기위한 배열
	var headerOffset = Narae.removePx($("#header").css("height"));  //smallHeader고정 시키기 위한 계산 값
	var mainBodyWidth = Narae.removePx($("#mainBody").css("width"));
	
	//첫 시작시 리스트 로딩
	$("#containerList").load("containerList.html");
	$("#footer").load("../common/footer.html");
	
	$(window).resize(function(){
		mainBodyWidth = Narae.removePx($("#mainBody").css("width"));
		
		
		if( mainBodyWidth >= 421 ){
			$( "#containerKeyword" ).css("display", "block");
			$("#containerTop").css("height", "125px");
			
			/*$("#containerKeyword input" ).after( "<br>" ); */
			/*console.log($("#containerKeyword input" ));*/
		}else {
			
			//mobile에서 검색설정 ▼ 누른 채 크기 늘렸다 줄여도 유지 되도록 하기
			if( $( "#keywordOpen" ).text() == "접기 ▲" ){
				$( "#containerTop" ).css("height", "230px");
			}else{
				$( "#containerTop" ).css("height", "30px");
			}
			
			//mobile용에서는 input으로 되어있는 키워드가 가로 정렬 되도록 설정
			/*$( "#containerKeyword br" ).remove()*/
		}
	});
	
	//스크롤 내릴 때 일정 범위 이상내려가면 smallhader를 보이기
	$(window).scroll(function(){
        if ( $( document ).scrollTop() > headerOffset && mainBodyWidth >= 421) {
        	console.log("==>" + mainBodyWidth);
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
	
	$("#btnBook").click(function(){
		var height = Narae.removePx($("#mainBody").css("height"));
		var marginLeft = (Narae.removePx($("#mainBody").css("width")) - 600) / 2;
		
		$("#back").css("display", "block")
				  .css("height", height);
		
		$("#myBook").css("margin-left", marginLeft + "px").css("display", "block");
		$("#myBook").load("../myBook/myBook.html");
		
	});

	$(".my-market").click(function(){
		var height = Narae.removePx($("#mainBody").css("height"));
		var marginLeft = (Narae.removePx($("#mainBody").css("width")) - 750) / 2;
		
		$("#back").css("display", "block")
				  .css("height", height);
		
		$("#myMarket").css("margin-left", marginLeft + "px").css("display", "block");
		$("#myMarket").load("../myMarket/myMarket.html");
	});
	
	$("#btnMyPage").click(function(){
		var height = Narae.removePx($("#mainBody").css("height"));
		var marginLeft = (Narae.removePx($("#mainBody").css("width")) - 600) / 2;
		
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
			
		}else {
			$( "#containerKeyword" ).css("display", "block");
			$( "#keywordOpen ").text( "접기 ▲" );
			$( "#containerTop" ).css("height", "230px");
			$( "#containerKeyword div" ).addClass( "mobileKeyword" );
		}
	});
	
	

	
});












