// --------------------------  기존 객체 추가 함수 ---------------------
// Array에서 중간요소 삭제할 때 쓰는 함수
Array.prototype.remove = function(index){
	this.splice(index, 1);
	return this;
}

//----------------------- 기존에 존재하지 않는 객체에 대한 추가함수------------------------------
function Narae(){}

//px단위의 값을 px를 떼어내고 숫자로 바꾸어 주는 함수
Narae.prototype.removePx = function(px){
	return px.split("px").splice(0, 1) - 0;
}
var Narae = new Narae();


//---------------------------------복잡한 함수(?)-------------------------------
/*
1. 함수를 사용하기 위한 구조

1) wrapDiv 내부에는 왼쪽화살표 오른쪽화살표 ul이 차례대로 있음 (화살표와 ul순서 뒤바뀌면 안됨)
 <div id="wrapDiv">
     <span class="box-rotate-left"></span>
 	 <span class="box-rotate-right"></span>
	 <ul> ... </ul>
 </div>

2) 아래의 css반드시 적용하여야 함.
 #wrapDiv ul {
 	list-style-type:none;
	padding-left: 0px;
	display: inline-block;
	overflow: hidden;
 }

 #wrapDiv li {
	display:inline;
	padding: 0px 10px 0px 10px;
 }
			
2. 함수 사용방법
$("#wrapDiv").NaraeWidthSilde(direction, [움직이고 싶은거리], [움직이는 속도]);
* 움직이고 싶은거리 : default => li(item)의 width 만큼 움직임
* 움직이는 속도: 숫자가 작을수록 이동속도 빠름, default => 1000

*/
$.prototype.NaraeWidthSilde = function(direction, moveWidth, speed) {

	var children = $(this).children()[2];                                         // 해당 division의 직속자식인 ul
	var liWidth = Narae.removePx($(children).children().css("width"));            // li의 width
	var moveWidth = (moveWidth == undefined) ? liWidth : moveWidth;               //가로로 이동하고 싶은 정도 (-:왼쪽으로이동, +:오른쪽으로이동), default=li의 width
	var margin = Narae.removePx(($(($(this).children()[2])).css("margin-left"))); //현재 ul의 margin
	var speed = (speed == undefined) ? 500 : speed;                               //움직이는 속도 (입력안되었을 경우 default=500)
	var childrenCount = $($(this).children()[2]).children().size();               //ul의 총 자식수
	var widthCount = Math.floor($(this).width() / liWidth);                       //$(this) 디비전에 들어가 있는 li(item)의 개수
	
	//오른쪽으로 움직일 경우
	if (direction == "left") {  
		console.log("---left-----");
		
		if( (-(moveWidth * (childrenCount - widthCount)) < margin) && (margin < 0)){
			$(children).animate({
				marginLeft : (margin + moveWidth) + "px"
			}, speed);
		}else {
			alert("더이상 메뉴가 존재하지 않습니다.");
		}
	}
	
	//왼쪽으로 움직일 경우
	if(direction == "right"){  
		console.log("---right-----");
		
		if( (margin - moveWidth) >= -(moveWidth * (childrenCount - widthCount))){
			$(children).animate({
				marginLeft : (margin - moveWidth) + "px"
			}, speed);
			
		}else {
			alert("더이상 메뉴가 존재하지 않습니다.");
		}
	}
	return this;
}

