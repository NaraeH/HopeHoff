/*
1. 구조
wrapDiv안에 ul있는 구조
wrapDiv를 아래와 같이 css를 주면 아래의 함수 적용했을 시 깔끔하게 나옴
			
#wrapDiv ul {
	list-style-type:none;
	padding-left: 0px;
	display: inline-block;
}

#wrapDiv li {
	display:inline;
	padding: 0px 10px 0px 10px;
}
			
2. 사용방법
myWidthSilde(wrapDiv이름, 움직이고 싶은거리, [움직이는 속도]);
* 움직이고 싶은거리:(-:왼쪽으로이동, +:오른쪽으로이동)
* 움직이는 속도: 숫자가 작을수록 이동속도 빠름

*/
function myWidthSilde(wrapDiv, moveWidth, speed) {

	var children = $(wrapDiv).children()[2];                // 해당 division의 직속자식인 ul
	var width = ($(wrapDiv).width()); ;                    //해당 division의 가로
	var moveWidth = moveWidth;                           //가로로 이동하고 싶은 정도 (-:왼쪽으로이동, +:오른쪽으로이동)
	var moveWidthPx = moveWidth + "px";
	var margin = (($(wrapDiv).children()).css("margin-left")).split("px").splice(0, 1) - 0;
	var speed = (speed == undefined) ? 1500 : speed;     //움직이는 속도 (입력안되었을 경우 default=1500)
	
	
	console.log($(wrapDiv).children()[0]);
	console.log($(wrapDiv).children()[1]);
	console.log($(wrapDiv).children()[2]);
	
	console.log("--------------");
	console.log(children);
	console.log(wrapDiv);
	console.log(moveWidth);
	console.log(speed);
	
	if (moveWidth < 0) {  //오른쪽으로 움직일 경우
		moveWidth = margin + moveWidth;
		if ((margin <= 0) && (-width < margin)) {
			$(children).animate({
				marginLeft : moveWidthPx
			}, speed);
		}
	}
	
	console.log("--------------------------");
	console.log(moveWidth);
	console.log(margin);
	//click시 이상있음 추후 수정하기 -narae
	if((moveWidth >= 0) ){  //왼쪽으로 움직일 경우
		console.log("왼쪽으로 움직일꺼야");
		
/*		if((moveWidth + margin) >= 0) {
			moveWidth = 0;
		}else if( moveWidth - margin > 0){
			moveWidth = 0;
		}else{
			moveWidth = margin + moveWidth;
		}
		moveWidthPx = moveWidth + "px"*/
		
		moveWidthPx = moveWidth + "px"
		
		console.log(moveWidth);
		
			$(children).animate({
				/*marginLeft : moveWidthPx*/
				marginLeft : "-170px"
			}, speed);
	}
}
$.prototype.myWidthSildee = function(moveWidth, speed) {

	var children = $(this).children()[2];                // 해당 division의 직속자식인 ul
	var width = ($(this).width()); ;                    //해당 division의 가로
	var moveWidth = moveWidth;                           //가로로 이동하고 싶은 정도 (-:왼쪽으로이동, +:오른쪽으로이동)
	var moveWidthPx = moveWidth + "px";
	var margin = (($(this).children()).css("margin-left")).split("px").splice(0, 1) - 0;
	var speed = (speed == undefined) ? 1500 : speed;     //움직이는 속도 (입력안되었을 경우 default=1500)
	
	
	console.log($(this).children()[0]);
	console.log($(this).children()[1]);
	console.log($(this).children()[2]);
	
	console.log("--------------");
	console.log(children);
	console.log(this);
	console.log(moveWidth);
	console.log(speed);
	
	if (moveWidth < 0) {  //오른쪽으로 움직일 경우
		moveWidth = margin + moveWidth;
		if ((margin <= 0) && (-width < margin)) {
			$(children).animate({
				marginLeft : moveWidthPx
			}, speed);
		}
	}
	
	console.log("--------------------------");
	console.log(moveWidth);
	console.log(margin);
	//click시 이상있음 추후 수정하기 -narae
	if((moveWidth >= 0) ){  //왼쪽으로 움직일 경우
		console.log("왼쪽으로 움직일꺼야");
		
/*		if((moveWidth + margin) >= 0) {
			moveWidth = 0;
		}else if( moveWidth - margin > 0){
			moveWidth = 0;
		}else{
			moveWidth = margin + moveWidth;
		}
		moveWidthPx = moveWidth + "px"*/
		
		moveWidthPx = moveWidth + "px"
		
		console.log(moveWidth);
		
			$(children).animate({
				/*marginLeft : moveWidthPx*/
				marginLeft : "-170px"
			}, speed);
	}
}

/*
 Array에서 중간요소 삭제할 때 쓰는 함수
 */
Array.prototype.remove = function(index){
	this.splice(index, 1);
	return this;
}