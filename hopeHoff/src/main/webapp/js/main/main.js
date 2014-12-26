$(document).ready(function(){
	
	var count = 0; //for문을 위한 index
	var checkedList = []; //keyword를 담기위한 배열
	var headerOffset = Narae.removePx($("#header").css("height"));  //smallHeader고정 시키기 위한 계산 값
	
	//첫 시작시 리스트 로딩
	$("#containerList").load("containerList.html");
	$("#footer").load("../common/footer.html");
	
	//스크롤 내릴 때 일정 범위 이상내려가면 smallhader를 보이기
	$(window).scroll(function(){
        if ( $( document ).scrollTop() > headerOffset) {
            $("#smallHeader").css("display", "block")
            				 .css("position", "fixed")
            				 .css("top", "0px")
            				 .css("z-index", "2");
          }
          else {
            $("#smallHeader").css("display", "none");
          }
	});
	
	$("#btnBook").click(function(){
		var height = Narae.removePx($("#mainBody").css("height"));
		var marginLeft = (Narae.removePx($("#mainBody").css("width")) - 600) / 2;
		
		console.log("zz=>" + marginLeft);
		console.log(Narae.removePx($("#myBook").css("width")));
		
		$("#back").css("display", "block")
				  .css("height", height);
		
		$("#myBook").css("margin-left", marginLeft + "px").css("display", "block");
		$("#myBook").load("../myBook/myBook.html");
		
		
	

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

	$("#btnMyPage").click(function(){
		location.href="#";
		console.log("zz");
	});
});












