var pwdStatus = false;  //수정 버튼 눌렀을 때의 체크를 위함
var randomNo = 0;
var updateUserMap = {password: "fail", phoneNo = "fail"};

$( "#sendBtn" ).click(function(){
	randomNo = Narae.sendSms($("#phoneNo").val());
	console.log("인증번호==>" + randomNo);
});


$('#confirmBtn').click(function(){
	console.log("눌렀음");
	
	if($('#confirmVerCode').val() == randomNo){
		 $('#confirmVerCode').css("border","green 2px solid");
	 } else {
		 $('#confirmVerCode').css("border","red 2px solid");
		 $( ".confimNoValid" ).html("인증번호가 맞지 않습니다").css("color", "red");
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
	
		} else {
			$( ".pwdValid" ).html("문자, 숫자, 특수문자(!,@,#,$,%,^,&,*,?,_,~의 조합으로 6~16자리").css("color","red");
			$( newPwd ).css("border","red 2px solid");
				
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
			pwdStatus = "success"; 

			$( ".pwdConfirmValid" ).html("암호가 일치합니다").css("color", "green");
			$( newPwdConfirm ).css("border","green 2px solid");
		}else {
			$( ".pwdConfirmValid" ).html("암호가 일치하지 않습니다").css("color", "red");
			$( newPwdConfirm ).css("border","red 2px solid");
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
	
	 //$('#phoneNumValid').css("display","");
	 
	 $( phoneNo ).keyup(function(){
		 if( ( phoneNo ).val().match(/[01](0|1|6|7|8|9)[-](\d{4}|\d{3})[-]\d{4}$/) != null){
			 $( ".phoneNoValid" ).html("ok").css("color","green");
			 $( phoneNo ).css("border","green 2px solid");
			// $( "#sendBtn" ).attr("disabled", "false");
			 
		 } else {
			 $( ".phoneNoValid" ).html("유효한 핸드폰 번호가 아닙니다.  예)010-1234-4567").css("color","red");
			 $( phoneNo ).css("border","red 2px solid");
			 //$( "#sendBtn" ).attr("disabled", "true");
		 }
	 });
});

$( "#phoneNo" ).focusout(function() {
	var phoneNo = $( "#phoneNo" );
	console.log("-----------------");
	console.log($( phoneNo ).css("border-color") == "rgb(0, 128, 0)");
	
	if(  $( phoneNo ).css("border-color") == "rgb(0, 128, 0)" ){ //초록색 
		$( ".phoneNoValid" ).css("display","none");
	}
});














