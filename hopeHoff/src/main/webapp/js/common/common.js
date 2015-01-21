// --------------------------  기존 객체 추가 함수 ---------------------
// Array에서 중간요소 삭제할 때 쓰는 함수
Array.prototype.remove = function(index){
	this.splice(index, 1);
	return this;
}

//----------------------- 기존에 존재하지 않는 객체에 대한 추가함수------------------------------

//Narae => removePx, sendSms
function Narae(){}

//px단위의 값을 px를 떼어내고 숫자로 바꾸어 주는 함수
Narae.prototype.removePx = function(px){
	if(px == 'undefined'){
		console.log("removePx를 할 것이 존재하지 않습니다.");
		return 0;
	}else {
		return px.split("px").splice(0, 1) - 0;
	}
}

/*
 ==> sendSms()
1. 함수 사용방법
	sendSms(callback함수, 메시지 타입, 핸드폰번호, 데이터);
	*메시지 타입: randomNoMsg => 인증번호 발송, bookMsgToBoss => 업주에게 가게 예약 문자 발송, 그밖에 => 원하는 내용으로 발송가능
	*핸드폰 번호: 010-0000-000 로 이루어진 타입이어야 함('-'로 연결되어 있는 스타일)
	*data : 메시지 타입이 randomNoMsg이거나 bookMsgToBoss에서  문자메시지에 추가로 전하고 싶은 내용
 */
var statusMap = {status: "fail", randomNo : 000000};
Narae.prototype.sendSms = function( callback, msgType, phoneNo, data ) {
	var phoneNoArray = phoneNo.split("-");
	var phoneNo= phoneNoArray[0] + phoneNoArray[1] + phoneNoArray[2] //'-'로 연결되있던 핸드폰 번호에서 01000000000로 바꿈
	var randomNo = Math.ceil(Math.random() * 1000000);   //인증번호 랜덤숫자
	var msg = null; //문자 메시지 전송 내용
	
	//문자 메시지 내용
	if( msgType == 'randomNoMsg' ) {
		msg = "HopeHoff 인증번호 [ " + randomNo + " ]";
	}else if( msgType == 'bookMsgToBoss' ){
		msg = "[ " + data.shopName + " ]" + "예약 요청이 있습니다.   " + "자세한내용:hopehoff.com";
	}else {
		msg = msg;   //입력하고 싶은 문자 메시지 내용
	}
	
	if( phoneNo == ''){ //넘어온 번호가 없을시
		return statusMap;
	}else {
		//과금되는 주소: http://link.smsceo.co.kr/sendsms_utf8.php
		//테스트 주소: http://link.smsceo.co.kr/sendsms_test.php
	    $.post('http://link.smsceo.co.kr/sendsms_test.php'
		        , { userkey: "VzYOOg9sB2RSNAQtBmtTOFNwAzRQGFNvUTNSN1I3BzgGLQ==",
					 userid:   "hopeHoff01",
					 msg:      msg,
					 phone:    phoneNo,
					 callback: "0233333333" //문자메시지 보내는 사람번호 
						 }
		        , callbackFun( randomNo )
		        , 'script');
	}
}


//ajax return 값 보낼 수 있도록 처리
function callbackFun( randomNo ){
	statusMap.status = "success";
	statusMap.randomNo = randomNo;
	
	return statusMap;
}

var Narae = new Narae(); 

/*******************************************************************/

function Valid(){}

/*
 1. 함수를 사용하기 위한 구조
  1) 이름 유효성을 검사하기 위한 input 박스와 그밑에 유효성 검사 값을 보여줄 div 필요
     input 박스의 id(또는 클래스등 모두 가능)는 사용자가 지정하고 파라미터로 보내줌
     div는 class를  validNameDiv(이름의 유효성 결과를 나타낼 공간) validDiv(valid에 맞는 CSS)
     
     <input type="text" id="inputName" placeholder="이름">
     <div class="validNameDiv validDiv"></div>

 2. 함수 사용방법
  Valid.name( selector );
  제대로 값이 입력 되었다면 selector의 data-valid 값이 valid => 아니라면 invalid
 
 */
Valid.prototype.name = function(inputNameBox) {
	var validNameDiv = $( inputNameBox ).parent().find( ".validNameDiv" );
	
	$( inputNameBox ).focus(function() {
		 $( inputNameBox ).keyup(function(){
			 if($( inputNameBox ).val().match( /^[가-힝a-zA-Z]{2,}$/) != null){
				
				 $( validNameDiv ).html("멋진 이름이네요!").css("color","green");
				 $( inputNameBox ).css("border","green 2px solid").attr("data-valid", "valid");
	
			 } else {
				 $( validNameDiv ).html("2자 이상의 이름을 입력해 주세요.").css("color","red");
				 $( inputNameBox ).css("border","red 2px solid").attr("data-valid", "invalid");
			 }
		 });
		 
	});
	
	   $( inputNameBox ).focusout(function() {
			
			if( $( inputNameBox ).attr("data-valid") == 'valid' ) {
				$( validNameDiv ).css("display","none");
				
			} else if( $( inputNameBox ).attr("data-valid") == 'invalid'){
				$(validNameDiv ).css("display","");
			}
		});
}

/*
1. 함수를 사용하기 위한 구조
 1) 이름 유효성을 검사하기 위한 input 박스와 그밑에 유효성 검사 값을 보여줄 div 필요
    input 박스의 id(또는 클래스등 모두 가능)는 사용자가 지정하고 파라미터로 보내줌
    div는 class를  validPwdDiv(이름의 유효성 결과를 나타낼 공간) validDiv(valid에 맞는 CSS)
    
    <input type="text" id="inputPwd" placeholder="이름">
    <div class="validPwdDiv validDiv"></div>

2. 함수 사용방법
 Valid.pwd( selector1, [ selector2 ] );
 *selector1 : 비밀번호 입력 input 박스의 selector
 *selector2 : 비밀번호 입력 input 박스의 selector
 제대로 값이 입력 되었다면 selector의 data-valid 값이 valid => 아니라면 invalid
*/
Valid.prototype.pwd = function( inputPwdBox, inputConfirmPwdBox ) {
	var validPwdDiv = $( inputPwdBox ).parent().find( ".validPwdDiv" );
	
	$( inputPwdBox ).focus(function() {
		 $( inputPwdBox ).keyup(function(){
			 
			 if( $( inputPwdBox ).attr("data-valid") == 'valid' && $( inputConfirmPwdBox ).attr("data-valid") == 'valid' ){
				 $( inputConfirmPwdBox ).val("").attr("data-valid", "invalid").css("border","red 2px solid");
			 }
			 
			 if(($( inputPwdBox ).val().match(/([a-zA-Z0-9].*[!,@,#,$,%,^,&,*,?,_,~])|([!,@,#,$,%,^,&,*,?,_,~].*[a-zA-Z0-9])/) != null)
					 && (($( inputPwdBox ).val().length >= 6)&&($( inputPwdBox ).val().length <= 16) )){
				
				 $( validPwdDiv ).html("ok").css("color","green");
				 $( inputPwdBox ).css("border","green 2px solid").attr("data-valid", "valid");
	
			 } else {
				 $( validPwdDiv ).html("문자, 숫자, 특수문자(!,@,#,$,%,^,&,*,?,_,~의 조합으로 6~16자리").css("color","red");
				 $( inputPwdBox ).css("border","red 2px solid").attr("data-valid", "invalid");
				
			 }
		 });
	});
	$( inputPwdBox ).focusout(function() {
		
		if( $( inputPwdBox ).attr("data-valid") == 'valid' ) {
			$( validPwdDiv ).css("display","none");
			
		} else if( $( inputPwdBox ).attr("data-valid") == 'invalid' ){
			$( validPwdDiv ).css("display","");
		}
	});
}

/*
1. 함수를 사용하기 위한 구조
 1) 이름 유효성을 검사하기 위한 input 박스와 그밑에 유효성 검사 값을 보여줄 div 필요
    input 박스의 id(또는 클래스등 모두 가능)는 사용자가 지정하고 파라미터로 보내줌
    div는 class를  validConfirmPwdDiv(이름의 유효성 결과를 나타낼 공간) validDiv(valid에 맞는 CSS)
    
    <input type="text" id="inputConfirmPwd" placeholder="이름">
    <div class="validConfirmPwdDiv validDiv"></div>

2. 함수 사용방법
 Valid.confirmPwd( selector1, selector2 );
 *selector1 : 확인하는 비밀번호 입력이 들어가는 input box의 selector
 *selector2 : 비밀번호를 입력하는 공간 input  box의 selector
 제대로 값이 입력 되었다면 selector의 data-valid 값이 valid => 아니라면 invalid
*/
Valid.prototype.confirmPwd = function( inputConfirmPwdBox, inputPwdBox ) {
	var validConfirmPwdDiv = $( inputConfirmPwdBox ).parent().find( ".validConfirmPwdDiv" );
	
	$( inputConfirmPwdBox ).focus(function() {
		
		 $( inputConfirmPwdBox ).keyup(function(){
		
			 if(($( inputPwdBox).val() == $( inputConfirmPwdBox ).val()) && ($( inputPwdBox ).val()!= "")){
				 $( validConfirmPwdDiv ).html("일치합니다.").css("color","green");
				 $( inputConfirmPwdBox ).css("border","green 2px solid").attr("data-valid", "valid");
		
			 } else {
				 $( validConfirmPwdDiv ).html("위 암호와 일치하지 않습니다.").css("color","red");
				 $( inputConfirmPwdBox ).css("border","red 2px solid").attr("data-valid", "invalid");
				 
			 }
		 });
	});
	
	$( inputConfirmPwdBox ).focusout(function() {
		if( $( inputConfirmPwdBox ).attr("data-valid") == "valid" ) {
			$( validConfirmPwdDiv).css("display","none");
			
		} else if( $( inputConfirmPwdBox ).attr("data-valid") == "invalid" ){
			$( validConfirmPwdDiv ).css("display","");
		}
	});
}

/*
1. 함수를 사용하기 위한 구조
 1) 이름 유효성을 검사하기 위한 input 박스와 그밑에 유효성 검사 값을 보여줄 div 필요
    input 박스의 id(또는 클래스등 모두 가능)는 사용자가 지정하고 파라미터로 보내줌
    div는 class를  validPhoneNoDiv(이름의 유효성 결과를 나타낼 공간) validDiv(valid에 맞는 CSS)
    
    <input type="text" id="inputPhoneNo" placeholder="이름">
    <div class="validPhoneNoDiv validDiv"></div>

2. 함수 사용방법
 Valid.phoneNo( selector1, [selector2] );
 *selector1 : 핸드폰을 입력하는 공간
 *selector2 : 핸드폰 인증번호를 입력하는 공간
 제대로 값이 입력 되었다면 selector1의 data-valid 값이 validNoneClick => 아니라면 invalidNoneClick (noneClick은 아직 인증번호 전송 버튼은 안 눌른 상태)
*/
Valid.prototype.phoneNo = function( inputPhoneNoBox, inputConfirmPhoneNoBox ) {
	var validPhoneNoDiv = $( inputPhoneNoBox ).parent().find( ".validPhoneNoDiv" );
	
	$( inputPhoneNoBox ).focus(function() {
		 $( inputPhoneNoBox ).keyup(function(){
			 
			 if( $( inputPhoneNoBox ).attr("data-valid") == 'validClick' && $( inputConfirmPhoneNoBox ).attr("data-valid") == 'valid' ){
				 $( inputConfirmPhoneNoBox ).val("").attr("data-valid", "invalid").css("border","red 2px solid");
			 }
			 
			 if($( inputPhoneNoBox ).val().match(/[01](0|1|6|7|8|9)[-](\d{4}|\d{3})[-]\d{4}$/) != null){
				 $( validPhoneNoDiv ).html("ok").css("color","green");
				 $( inputPhoneNoBox ).css("border","green 2px solid").attr("data-valid", "validNoneClick");

			 } else {
				 $( validPhoneNoDiv).html("예)010-1234-4567").css("color","red");
				 $( inputPhoneNoBox ).css("border","red 2px solid").attr("data-valid", "invalidNoneClick");
			 }
			 
		 });
	});
	
	$( inputPhoneNoBox ).focusout(function() {
		if( $( inputPhoneNoBox ).attr("data-valid") == "valid" ) {
			$( validPhoneNoDiv).css("display","none");
			
		} else if( $( inputPhoneNoBox ).attr("data-valid") == "invalid" ){
			alert("유효한 휴대폰 번호를 입력하세요.");
			$( validPhoneNoDiv ).css("display","");
		}
	});
}

/*
1. 함수를 사용하기 위한 구조
 1) 이름 유효성을 검사하기 위한 input 박스와 그밑에 유효성 검사 값을 보여줄 div 필요
    input 박스의 id(또는 클래스등 모두 가능)는 사용자가 지정하고 파라미터로 보내줌
    div는 class를  validConfirmPhoneNoDiv(이름의 유효성 결과를 나타낼 공간) validDiv(valid에 맞는 CSS)
    
    <input type="text" id="inputConfirmPhoneNo" placeholder="이름">
    <div class="validConfirmPhoneNoDiv validDiv"></div>

2. 함수 사용방법
 Valid.phoneNo( selector1 );
 *selector1 :핸드폰 번호를 입력받는 input box의 selector
 제대로 값이 입력 되었다면 selector1의 data-valid 값이 valid => 아니라면 invalid
*/
Valid.prototype.confirmValidPhoneNo = function( inputConfirmPhoneNoBox ) {
	var validConfirmPhoneNoDiv = $( inputConfirmPhoneNoBox ).parent().find( ".validConfirmPhoneNoDiv" );
	
	$( inputConfirmPhoneNoBox ).focus(function() {
		
		$( inputConfirmPhoneNoBox ).keyup(function(){
			if($( inputConfirmPhoneNoBox ).val() == randomNo){
		
				$( validConfirmPhoneNoDiv ).css("display", "none");
				$( inputConfirmPhoneNoBox ).css("border","green 2px solid").attr("data-valid", "valid");
				 
			 } else {
				 $( validConfirmPhoneNoDiv ).html("인증번호가 맞지 않습니다").css("display", "block").css("color", "red");
				 $( inputConfirmPhoneNoBox ).css("border","red 2px solid").attr("data-valid", "invalid");
			 }
		});
	});
		
	$( inputConfirmPhoneNoBox ).focus(function() {
		if( $( inputConfirmPhoneNoBox ).attr("data-valid") == "valid" ) {
			$( validConfirmPhoneNoDiv ).css("display","none");
			
		} else if( $( inputConfirmPhoneNoBox ).attr("data-valid") == "invalid" ){
			$( validConfirmPhoneNoDiv ).css("display","");
		}
	});
}

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
		$(thisMyPhotoList).css("height", widthSildeWrapMarginSize );
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








