$(document).ready(function(){
	
	var count = 0; //for문을 위한 index
	var checkedList = []; //keyword를 담기위한 배열
	
	/*{
		//처음시작시 window의 size 계산하여서 wrap의 사이즈 지정
		var width = window.innerWidth
		|| document.documentElement.clientWidth
		|| document.body.clientWidth;
	
		var hight = window.innerHeight
		|| document.documentElement.clientHeight
		|| document.body.clientHeight;
		
		//console.log(width-18);
		//console.log(hight);
		
		$("#wrap").css("width", width-18);
		$("#wrap").css("height", hight);
	}
*/
	//첫 시작시 리스트 로딩
	$("#containerList").load("containerList.html");
	$("#footer").load("../common/footer.html");

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

/*	$("#btnToLeft").hover(function(){
		myWidthSilde("#myShopList", 275, 1000);
	});

	$("#btnToRight").hover(function(){
		myWidthSilde("#myShopList", -275, 1000);
	});
	*/
	
	$("#btnMyPage").click(function(){
		location.href="#";
		console.log("zz");
	});
	



});












