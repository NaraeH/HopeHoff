var randomNo = 0;                                          //핸드폰 인증번호
var userId = $( ".userId" ).val();                         //user 아이디
var updateUserMap = {password: "none", phoneNo: "none"};   //회원정보 수정될 값 저장

$( "#sendBtn" ).click(function(){
	Narae.sendSms( callbackFun, "randomNoMsg", $("#phoneNo").val() );

	if(statusMap.status == 'success') {
		randomNo = statusMap.randomNo;
		alert("인증번호가 성공적으로 전송되었습니다");
	}else {
		console.log("문자전송실패");
	}
	
	$( phoneNo ).attr("data-check", "validDataClick");
	console.log("인증번호==>" + randomNo);
});


$( "#btnPwdChange" ).click(function() {
	var dataCheckNewPwd = $( "#newPwd" ).attr("data-check");
	var dataCheckNewPwdConfirm = $( "#newPwdConfirm" ).attr("data-check");
	
	if( ( dataCheckNewPwd == 'validData' ) && ( dataCheckNewPwdConfirm == 'validData' ) && ( updateUserMap.password != 'none' )){
	    $.post('../../json/auth/updateUser.do'
		        , { userId: userId,
		        	password: updateUserMap.password }
		        , function(data){
		        	if(data.status) {
		        		alert("암호가 성공적으로 변경되었습니다.");
		        	}else {
		        		alert("암호가 변경에 실패하셨습니다.")
		        	}
		        }, 'json');
	}else {
		
		if( ( dataCheckNewPwd == 'none' ) && ( dataCheckNewPwdConfirm == 'none' ) ){
			alert("바꾸실 정보가 없습니다.");
		}else if ( dataCheckNewPwd == 'invalidData' ){
			alert("암호의 형식이 맞지 않습니다");
			$( "#newPwd" ).focus();
		}else if( ( dataCheckNewPwd == 'validData' ) && ( dataCheckNewPwdConfirm == 'none' ) ){
			alert("암호를 다시 한번 입력해주세요");
			$( "#newPwdConfirm" ).focus();
		}else if( ( dataCheckNewPwd == 'validData' ) && ( dataCheckNewPwdConfirm == 'invalidData' ) ){
			alert( "암호가 일치하지 않습니다 ");
			$( "#newPwdConfirm" ).focus();
		}else {
			alert( "암호입력이 바르지 않습니다" );
		}
	}
});

$( "#btnPhoneNoChange" ).click(function() {
	var dataCheckPhoneNo = $( "#phoneNo" ).attr("data-check");
	var dataCheckConfirmVerCode = $( "#confirmVerCode" ).attr("data-check");
	
	if ( ( dataCheckPhoneNo == 'validDataClick' ) && ( dataCheckConfirmVerCode == 'validData' ) && ( updateUserMap.phoneNo != 'none' )){
	    $.post('../../json/auth/updateUser.do'
		        , { userId: userId,
		        	phoneNo: updateUserMap.phoneNo }
		        , function(data){
		        	if(data.status) {
		        		alert("핸드폰번호가 성공적으로 변경되었습니다.");
		        	}else {
		        		alert("핸드폰번호 변경에 실패하셨습니다.")
		        	}
		        }
		        , 'json');
	}else {
		if( ( dataCheckPhoneNo == 'none' ) && ( dataCheckConfirmVerCode == 'none' ) ){
			alert("바꾸실 정보가 없습니다.");
		}else if ( dataCheckPhoneNo == 'invalidData' ){
			alert("핸드폰번호의 형식이 맞지 않습니다");
			$( "#phoneNo" ).focus();
		}else if ( dataCheckPhoneNo == 'validDataNoneClick' ){
			alert("인증번호 전송버튼을 눌러주세요");
		}else if( ( dataCheckPhoneNo == 'validDataClick' ) && ( dataCheckConfirmVerCode == 'none' ) ){
			alert("인증번호를 입력해주세요");
			$( "#confirmVerCode" ).focus();
		}else if( ( dataCheckPhoneNo == 'validDataClick' ) && ( dataCheckConfirmVerCode == 'invalidData' ) ){
			alert( "인증번호가 일치하지 않습니다 ");
			$( "#confirmVerCode" ).focus();
		}else {
			alert( "암호입력이 바르지 않습니다" );
		}
	}
});
/* --------------password 유 효 성--------------- */
$( '#newPwd' ).focus( function() {
	var newPwd = $( "#newPwd" );
	$('.pwdValid').css("display","");
	
	$( newPwd ).keyup(function(){
		if(($(newPwd ).val().match(/([a-zA-Z0-9].*[!,@,#,$,%,^,&,*,?,_,~])|([!,@,#,$,%,^,&,*,?,_,~].*[a-zA-Z0-9])/) != null)
					 && (($( newPwd).val().length >= 6)&&($( newPwd ).val().length <= 16) )){
			$( ".pwdValid" ).html("ok").css("color","green");
			$( newPwd ).css("border","green 2px solid");
			$( newPwd ).attr("data-check", "validData");
	
		} else {
			$( ".pwdValid" ).html("문자, 숫자, 특수문자(!,@,#,$,%,^,&,*,?,_,~의 조합으로 6~16자리").css("color","red");
			$( newPwd ).css("border","red 2px solid");
			$( newPwd ).attr("data-check", "invalidData");
		}
	});
});

$( '#newPwd' ).focusout( function() {
	var newPwd = $( "#newPwd" );
	
	if(  $( newPwd ).css("border-color") == "rgb(0, 128, 0)"){ //초록색 
		$( ".pwdValid" ).css("display","none");
	}
});

$( "#newPwdConfirm" ).focus( function() {
	var newPwdConfirm = $( "#newPwdConfirm" );
	
	$( newPwdConfirm ).keyup(function() {
		if( newPwdConfirm.val() == $( "#newPwd" ).val() ){
			updateUserMap.password = newPwdConfirm.val(); //암호 일치까지 확인하면 변경될 암호 넣기

			$( ".pwdConfirmValid" ).html("암호가 일치합니다").css("color", "green");
			$( newPwdConfirm ).css("border","green 2px solid");
			$( newPwdConfirm ).attr("data-check", "validData");
		}else {
			$( ".pwdConfirmValid" ).html("암호가 일치하지 않습니다").css("color", "red");
			$( newPwdConfirm ).css("border","red 2px solid");
			$( newPwdConfirm ).attr("data-check", "invalidData");
		}
	})
});

$( "#newPwdConfirm" ).focusout( function() {
	var newPwdConfirm = $( "#newPwdConfirm" );
	
	if(  $( newPwdConfirm ).css("border-color") == "rgb(0, 128, 0)"){ //초록색 
		$( ".pwdConfirmValid" ).css("display","none");
	}
});


/*--------------------핸드폰 번호 유효성 검사-----------------*/
$( "#phoneNo" ).focus(function() {
	var phoneNo = $( "#phoneNo" );
	
	 $( phoneNo ).keyup(function(){
		 if( ( phoneNo ).val().match(/[01](0|1|6|7|8|9)[-](\d{4}|\d{3})[-]\d{4}$/) != null){
			 $( ".phoneNoValid" ).html("ok").css("color","green");
			 $( phoneNo ).css("border","green 2px solid");
			 $( phoneNo ).attr("data-check", "validDataNoneClick");
			 
		 } else {
			 $( ".phoneNoValid" ).html("유효한 핸드폰 번호가 아닙니다.  예)010-1234-4567").css("color","red");
			 $( phoneNo ).css("border","red 2px solid");
			 $( phoneNo ).attr("data-check", "invalidDataNoneClick");
		 }
	 });
});

$( "#phoneNo" ).focusout(function() {
	var phoneNo = $( "#phoneNo" );
	
	if(  $( phoneNo ).css("border-color") == "rgb(0, 128, 0)" ){ //초록색 
		$( ".phoneNoValid" ).css("display","none");
	}
});

/*--------------------핸드폰 번호 인증번호 검사-----------------*/

$( "#confirmVerCode" ).focus(function() {
	var confirmVerCode = $( "#confirmVerCode" );
	
	$( confirmVerCode ).keyup(function(){
		
		if($( confirmVerCode ).val() == randomNo){
			updateUserMap.phoneNo = $("#phoneNo").val();  //핸드폰 인증까지 만료 하면 변경될 핸드폰 값 넣기
	
			$( confirmVerCode ).css("border","green 2px solid");
			$( ".confimNoValid" ).css("display", "none");
			$( confirmVerCode ).attr("data-check", "validData");
			 
		 } else {
			 $( confirmVerCode ).css("border","red 2px solid");
			 $( ".confimNoValid" ).html("인증번호가 맞지 않습니다").css("display", "block").css("color", "red");
			 $( confirmVerCode ).attr("data-check", "invalidData");
		 }
	});
});
	
$( "#confirmVerCode" ).focus(function() {
	var confirmBtn = $( "#confirmBtn" );
	
	if(  $( confirmBtn ).css("border-color") == "rgb(0, 128, 0)" ){ //초록색 
		$( ".confimNoValid" ).css("display","none");
	}
});










