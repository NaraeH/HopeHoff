var randomNo = 0;                                          //핸드폰 인증번호
var userId = $( ".userId" ).val();                         //user 아이디
var updateUserMap = {password: "none", phoneNo: "none"};   //회원정보 수정될 값 저장
var Valid = new Valid();

$( "#sendBtn" ).click(function(){
	
	if( $( "#inputNewPhoneNo" ).attr("data-valid") == 'validNoneClick' ){
		Narae.sendSms( callbackFun, "randomNoMsg", $("#inputNewPhoneNo").val() );
		
		if(statusMap.status == 'success') {
			randomNo = statusMap.randomNo;
			alert("인증번호가 성공적으로 전송되었습니다");
		}else {
			console.log("문자전송실패");
		}
		
	}else if( $( "#inputNewPhoneNo" ).attr("data-valid") == 'validClick' ) {
		alert("이미 발송되었습니다");
	}else {
		randomNo = 0;
		alert("유효하지 않은 번호입니다");
	}
	
	$( "#inputNewPhoneNo" ).attr("data-valid", "validClick");
	console.log("인증번호==>" + randomNo);
});


$( "#btnPwdChange" ).click(function() {
	var newPwdValid = $( "#inputNewPwd" ).attr("data-valid");
	var newPwdConfirmValid = $( "#inputNewPwdConfirm" ).attr("data-valid");
	
	if( ( newPwdValid == 'valid' ) && ( newPwdConfirmValid == 'valid' ) ){
		updateUserMap.password = $( "#inputNewPwdConfirm" ).val();
	}
	
	if( updateUserMap.password != 'none' ){
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
		
		if( ( newPwdValid == 'none' ) && ( newPwdConfirmValid == 'none' ) ){
			alert("바꾸실 정보가 없습니다.");
		}else if ( newPwdValid == 'invalid' ){
			alert("암호의 형식이 맞지 않습니다");
			$( "#inputNewPwd" ).focus();
		}else if( ( newPwdValid == 'valid' ) && ( newPwdConfirmValid == 'none' ) ){
			alert("암호를 다시 한번 입력해주세요");
			$( "#inputNewPwdConfirm" ).focus();
		}else if( ( newPwdValid == 'valid' ) && ( newPwdConfirmValid == 'invalid' ) ){
			alert( "암호가 일치하지 않습니다 ");
			$( "#inputNewPwdConfirm" ).focus();
		}else {
			alert( "암호입력이 바르지 않습니다" );
		}
	}
});

$( "#btnPhoneNoChange" ).click(function() {
	var dataCheckPhoneNo = $( "#inputNewPhoneNo" ).attr("data-valid");
	var dataCheckConfirmVerCode = $( "#inputNewConfirmPhoneNo" ).attr("data-valid");
	
	if( ( dataCheckPhoneNo == 'validClick' ) && ( dataCheckConfirmVerCode == 'valid' ) ){
		updateUserMap.phoneNo = $( "#inputNewPhoneNo" ).val();
	}
	
	if ( updateUserMap.phoneNo != 'none' ){
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
		}else if ( dataCheckPhoneNo == 'invalid' ){
			alert("핸드폰번호의 형식이 맞지 않습니다");
			$( "#inputNewPhoneNo" ).focus();
		}else if ( dataCheckPhoneNo == 'validNoneClick' ){
			alert("인증번호 전송버튼을 눌러주세요");
		}else if( ( dataCheckPhoneNo == 'validClick' ) && ( dataCheckConfirmVerCode == 'none' ) ){
			alert("인증번호를 입력해주세요");
			$( "#inputNewConfirmPhoneNo" ).focus();
		}else if( ( dataCheckPhoneNo == 'validClick' ) && ( dataCheckConfirmVerCode == 'invalid' ) ){
			alert( "인증번호가 일치하지 않습니다 ");
			$( "#inputNewConfirmPhoneNo" ).focus();
		}else {
			alert( "암호입력이 바르지 않습니다" );
		}
	}
});


Valid.pwd( "#inputNewPwd", "#inputNewPwdConfirm" );          //암호 유효성 검사
Valid.confirmPwd( "#inputNewPwdConfirm", "#inputNewPwd");    //암호확인  검사
Valid.phoneNo( "#inputNewPhoneNo", "#inputNewConfirmPhoneNo" );                       //암호 유효성 검사
Valid.confirmValidPhoneNo( "#inputNewConfirmPhoneNo" );    //핸드폰 인증번호 검사








