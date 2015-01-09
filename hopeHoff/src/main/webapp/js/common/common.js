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
   class는 common.js에 정의되어 있음

<div id= "Wrap" class="width-silde-wrap">
	<div class="myLeftWrap">
		<div><span id="toLeft" class="box-rotate-left"></span></div>
	</div>
	<div class="myRightWrap">
		<div><span id="tooRight" class="box-rotate-right"></span></div>
	</div>

	<ul>
		<li>
			<div id="pubPhoto1" class="myPhotoList"></div>
		</li>
		<li>
			<div id="pubPhoto2" class="myPhotoList"></div>
		</li>
		....
</div>
			
2. 함수 사용방법
$("#wrapDiv").NaraeWidthSilde([움직이고 싶은거리], [움직이는 속도]);
* 움직이고 싶은거리 : default => li(item)의 width 만큼 움직임
* 움직이는 속도: 숫자가 작을수록 이동속도 빠름, default => 500

*/
$.prototype.naraeWidthSilde = function(moveWidth, speed) {
	setSizeSilde($(this), "existMargin");
	clickSilde($(this));
	
	return this;
}

/*
1. 함수를 사용하기 위한 구조

1) wrapDiv 내부에는 왼쪽화살표 오른쪽화살표 ul이 차례대로 있음 (화살표와 ul순서 뒤바뀌면 안됨) 
   class는 common.js에 정의되어 있음
 
 <div id= "Wrap" class="width-silde-wrap">
	<div class="myLeftWrap">
		<div><span id="toLeft" class="box-rotate-left"></span></div>
	</div>
	<div class="myRightWrap">
		<div><span id="tooRight" class="box-rotate-right"></span></div>
	</div>

	<ul>
		<li>
			<div id="pubPhoto1" class="myPhotoList">
				<div class="myImgText"> 사진이름 (1/3) <br> ●○○ </div>
			</div>
		</li>
		<li>
			<div id="pubPhoto2" class="myPhotoList">
				<div class="myImgText"> 사진이름 (2/3) <br> ○●○ </div>
			</div>
		</li>
		....
</div>
			
2. 함수 사용방법
$("#wrapDiv").NaraeWidthSilde([시간], [움직이는 속도], [움직이고 싶은거리]);
* 움직이고 싶은거리 : default => li(item)의 width 만큼 움직임
* 움직이는 속도: 숫자가 작을수록 이동속도 빠름, default => 500
* 시간 : 몇 초마다 이벤트 발생하는지, default => 3000ms

*/
$.prototype.naraeWidthSildeAuto = function(time, speed, moveWidth){
	setSizeSilde($(this) , "noMargin");
	clickSilde($(this));
	
	var myChildren = $(this).children()[2];                                         // 해당 division의 직속자식인 ul
	var liWidth = Narae.removePx($(myChildren).children().css("width"));            // li의 width
	var liPadding = Narae.removePx($(myChildren).children().css("padding-left")) +  Narae.removePx($(myChildren).children().css("padding-right"));
	var liMargin = Narae.removePx($(myChildren).children().css("margin-left")) +  Narae.removePx($(myChildren).children().css("margin-right"))
	var moveWidth = (moveWidth == undefined)? (liWidth + liPadding + liMargin) : moveWidth;               //가로로 이동하고 싶은 정도 (-:왼쪽으로이동, +:오른쪽으로이동), default=li의 width
	var margin = Narae.removePx(($(myChildren).css("margin-left"))); //현재 ul의 margin
	var speed = (speed == undefined) ? 500 : speed;                               //움직이는 속도 (입력안되었을 경우 default=500)
	var childrenCount = $(myChildren).children().size();                          //ul의 총 자식수
	var time = (time == undefined)? 3000 : time;                                  //몇 초마다 이벤트 발생하는지
	var count = 0;
	
	setInterval(function(){
		count = (count < 2)? count + 1: 0;
		
		$(myChildren).animate({
			marginLeft : (margin - (moveWidth * count)) + "px"
		}, speed);
	}, time);
	
	return this;
}

function setSizeSilde(obj, isMargin) {
	var thisMyPhotoList = "#" + $(obj).attr("id") + " " +".myPhotoList";
	var thisMyRightWrap = "#" + $(obj).attr("id") + " " +".myRightWrap";
	var widthSildeWrapSize = $(obj).css("width");
	var widthSildeWrapMarginSize = Narae.removePx($(obj).css("height")) - 30 + "px";
	var myLeftWrapWidth = Narae.removePx($(".myLeftWrap").css("width"));
	
	if(isMargin == "noMargin"){
		$(thisMyPhotoList).css("background-size", widthSildeWrapSize + " " + widthSildeWrapSize);
		$(thisMyPhotoList).css("width", widthSildeWrapSize);
		$(thisMyRightWrap).css("margin-left", Narae.removePx(widthSildeWrapSize) - myLeftWrapWidth );
	
	}else if(isMargin == "existMargin"){
		var photoListMargin = ( Narae.removePx(widthSildeWrapSize) / 3 - Narae.removePx(widthSildeWrapMarginSize) ) /2;

		$(thisMyPhotoList).css("background-size", widthSildeWrapMarginSize + " " + widthSildeWrapMarginSize);
		$(thisMyPhotoList).css("width", widthSildeWrapMarginSize );
		$(thisMyPhotoList).css("margin", photoListMargin );
		$(thisMyRightWrap).css("margin-left", Narae.removePx(widthSildeWrapSize) - myLeftWrapWidth );
		 
	}
}

function clickSilde(obj){
	var myChildren = $(obj).children()[2];                                         // 해당 division의 직속자식인 ul
	var liWidth = Narae.removePx($(myChildren).children().css("width"));            // li의 width
	var liPadding = Narae.removePx($(myChildren).children().css("padding-left")) +  Narae.removePx($(myChildren).children().css("padding-right"));
	var liMargin = Narae.removePx($(myChildren).children().css("margin-left")) +  Narae.removePx($(myChildren).children().css("margin-right"))
	var moveWidth = (moveWidth == undefined) ? (liWidth + liPadding + liMargin) : moveWidth;               //가로로 이동하고 싶은 정도 (-:왼쪽으로이동, +:오른쪽으로이동), default=li의 width , 6=> ul자체에 있는 마진 조정
	var margin = Narae.removePx(($(myChildren).css("margin-left"))); //현재 ul의 margin
	var speed = (speed == undefined) ? 500 : speed;                               //움직이는 속도 (입력안되었을 경우 default=500)
	var liCount = $(myChildren).children().length
	var widthCount = Math.ceil($(obj).width() / moveWidth);                       //$(this) 디비전에 들어가 있는 li(item)의 개수
	
	var myLeftWrap = "#" + $(obj).attr("id") + " " +".myLeftWrap";
	var myRightWrap = "#" + $(obj).attr("id") + " " +".myRightWrap";

	$(myLeftWrap).click(function(){
		margin = Narae.removePx(($(myChildren).css("margin-left")));
		
		if( margin < 0 && margin >= ( -moveWidth ) * ( liCount - widthCount ) ){
			$(myChildren).animate({
				marginLeft : (margin + moveWidth) + "px"
			}, speed);
		}else {
			alert("더이상 메뉴가 존재하지 않습니다.");
		}
	});
	
	$(myRightWrap).click(function(){
		margin = Narae.removePx(($(myChildren).css("margin-left")));
		
		if( margin <= 0 && margin > ( -moveWidth ) * ( liCount - widthCount ) ){
			$(myChildren).animate({
				marginLeft : (margin - moveWidth) + "px"
			}, speed);
			
		}else {
			alert("더이상 메뉴가 존재하지 않습니다.");
		}
	});
}








