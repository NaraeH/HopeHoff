/*
1. 함수를 사용하기 위한 구조
wrapDiv안에 ul있는 구조
wrapDiv를 아래와 같이 css를 주면 아래의 함수 적용했을 시 깔끔하게 나옴

wrap내부에는 왼쪽화살표 오른쪽화살표 ul이 차례대로 있음 (화살표와 ul순서바뀌면 안됨)
<div id="wrapDiv">
	<span class="box-rotate-left"></span>
	<span class="box-rotate-right"></span>
	<ul> ... </ul>
</div>

* 아래의 css반드시 적용하여야 함.
#wrapDiv ul {
	list-style-type:none;
	padding-left: 0px;
	display: inline-block;
}

#wrapDiv li {
	display:inline;
	padding: 0px 10px 0px 10px;
}
			
2. 함수 사용방법
$(wrap이름).NaraeWidthSilde(direction, [움직이고 싶은거리], [움직이는 속도]);
* 움직이고 싶은거리
* 움직이는 속도: 숫자가 작을수록 이동속도 빠름

*/
$.prototype.NaraeWidthSilde = function(direction, moveWidth, speed) {

	var children = $(this).children()[2];                // 해당 division의 직속자식인 ul
	var width = ($(this).width());                      //해당 division의 가로
	var moveWidth = (moveWidth == undefined) ? ($(children).children().css("width")).split("px").splice(0, 1) - 0 : moveWidth; //가로로 이동하고 싶은 정도 (-:왼쪽으로이동, +:오른쪽으로이동)
	var margin = ($(($(this).children()[2])).css("margin-left")).split("px").splice(0, 1) - 0; //현재 ul의 margin
	var speed = (speed == undefined) ? 1000 : speed;     //움직이는 속도 (입력안되었을 경우 default=1500)
	var childrenCount = $($(this).children()[2]).children().size();  //ul의 총 자식수
	var widthCount = Math.floor(width / ($(children).children().css("width")).split("px").splice(0, 1) - 0); //$(this) 디비젼에 들어가 있는 li(item)의 개수
	var moveWidthPx = "0px";
	
	//오른쪽으로 움직일 경우
	if (direction == "right") {  
		moveWidthPx = (margin + moveWidth) + "px";
		console.log("---right-----");
		
		//moveCount = 1; //임시방편 => 나중에 리스트 디비젼에 몇개 들어가있는지 계산하고 moveCount(몇번 움직일 수 있는지)주기
		if( (-(moveWidth * (childrenCount - widthCount)) < margin) && (margin < 0)){
			
			$(children).animate({
				marginLeft : moveWidthPx
			}, speed);
		}else {
			alert("더이상 메뉴가 존재하지 않습니다.");
		}
	}
	
	//왼쪽으로 움직일 경우
	if(direction == "left"){  
		moveWidthPx = (margin - moveWidth) + "px";
		console.log("---left-----");
		
		//moveCount = 1; //임시방편 => 나중에 리스트 디비젼에 몇개 들어가있는지 계산하고 moveCount(몇번 움직일 수 있는지)주기
		if( (margin - moveWidth) >= -(moveWidth * (childrenCount - widthCount))){
			$(children).animate({
				marginLeft : moveWidthPx
			}, speed);
			
		}else {
			alert("더이상 메뉴가 존재하지 않습니다.");
		}
	}
}

/*
 Array에서 중간요소 삭제할 때 쓰는 함수
 */
Array.prototype.remove = function(index){
	this.splice(index, 1);
	return this;
}