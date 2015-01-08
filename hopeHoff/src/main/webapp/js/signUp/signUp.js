	
$(function(){

/*	$("#btnSignUpClose").click(function(){
		$("#back").css("display", "none");
		$("#myPage").css("display", "none");
	});
	*/
	$('#btnCancel').click(function(){
		$("input[name='inlineRadioOptions']").filter("[value='option1']").prop("checked",false);
		$("input[name='inlineRadioOptions']").filter("[value='option2']").prop("checked",false);
		$('#formGroupInputLarge').val('');
		$('#idText').html('');
		$('#formGroupInputSmall').val('');
		$('#inputPassword3').val('');
		$('#checkPassword').val('');
		$('#phoneNumber').val('');
		$('#checkPassword').val('');
		$('#inNumber01').val('');

	});
	
	$('#btnSignUp').click(function(event){
		alert("감사합니다 ~ 이제,로그인 해주세요 !");
       location.href = '../../web/login/login.html';
	});//query insert보내기.  확인alert띠우고 로구인해달라고해. link login페이지로 ㄱ ㄱ
	
	
	
	
	
	/*************************유. 효 . 성..... 검 사************************/	
	var valpoint=0;
	
	//V ID input칸에 포커스들어올 때 유효성여부가 나타나지요(밑에 focusout도있습니당)
	$('#formGroupInputLarge').focus(function() {
	 $('#idText').css("display","");
		
		// Node.js랑 연결되어있다. 아이디 중복체크임
		// 키를 눌렀다가 내 손에 모든게 떨어졌을때
	 $("#formGroupInputLarge").keyup(function(){
		
		$.get("http://192.168.0.150:3000/loginCheck",{
			// 겟 요청의 파라미터를 이것을 전달하겠다. 이위에꺼  //겟터
			id : $('#formGroupInputLarge').val()
		}, function(data){
			//노드에 서버에 응답까지 성공하면  //세터
			//이렇게 응답하겠다.(이렇게 이벤트발생하겠다.)
			
				if(data.result == "사용가능한 아이디입니다."){
					$('#idText').html(data.result).css("color","green");
					$('#colorId').css("border","green");
					
				} else { /*중복된 아이디가 있습니다.*/
					$('#idText').html(data.result).css("color","red");
					$('#colorId').css("border","red");
				} 
	       }
	  ); /*get꺼*/	
	 }); /*keyup꺼*/
	 
	});//focus
	
	
	//V ID input칸에 outfocus면, 유효성숨기기
	$('#formGroupInputLarge').focusout(function() {
		
		if($('#idText').css("color") == "rgb(0, 128, 0)") {
			$('#idText').css("display","none");
			valpoint++;
			console.log(valpoint);
		} else if($('#idText').css("color") == "rgb(128, 0, 0)"){
			$('#idText').css("display","");
		}
		
		if(valpoint == 6) {	
			$('#btnSignUp').css("border", "green");
			$('#btnSignUp').attr("disabled", false);

		} else {
			$('#btnSignUp').attr("disabled", true);
		}
	});
	/* --------------password 유 효 성--------------- */
	$('#inputPassword3').focus(function() {
		 $('#pwdValid').css("display","");
		 $("#inputPassword3").keyup(function(){
			 if(($('#inputPassword3').val().match(/([a-zA-Z0-9].*[!,@,#,$,%,^,&,*,?,_,~])|([!,@,#,$,%,^,&,*,?,_,~].*[a-zA-Z0-9])/) != null)
					 && (($('#inputPassword3').val().length >= 6)&&($('#inputPassword3').val().length <= 16) )){
				
				 $('#pwdValid').html("ok").css("color","green");
				 $('#colorPwd').css("border","green");
	
			 } else {
				 $('#pwdValid').html("문자, 숫자, 특수문자(!,@,#,$,%,^,&,*,?,_,~의 조합으로 6~16자리").css("color","red");
				 $('#colorPwd').css("border","red");
				
			 }
		 });
	});
	$('#inputPassword3').focusout(function() {
		
		if($('#pwdValid').css("color") == "rgb(0, 128, 0)") {
			$('#pwdValid').css("display","none");
			valpoint++;
			console.log(valpoint);
		} else if($('#pwdValid').css("color") == "rgb(128, 0, 0)"){
			$('#pwdValid').css("display","");
		}
		
		if(valpoint == 6) {	
			$('#btnSignUp').css("border","green");
			$('#btnSignUp').attr("disabled", false);

		} else {
			$('#btnSignUp').attr("disabled", true);
		}
	});
	/************Password  다시 누르는거 확인*********/
	$('#checkPassword').focus(function() {
		 $('#pwdCheckText').css("display","");
		
		 $("#checkPassword").keyup(function(){
		
			 if(($('#inputPassword3').val() == $('#checkPassword').val()) && ($('#inputPassword3').val()!= "")){
				 $('#pwdCheckText').html("일치합니다.").css("color","green");
				 $('#colorPwdCheck').css("border","green");
		
			 } else {
				 $('#pwdCheckText').html("불일치ㅠ_ㅠ").css("color","red");
				 $('#colorPwdCheck').css("border","red");
				 
			 }
		 });
	});
	
	
	$('#checkPassword').focusout(function() {
	
		if($('#pwdCheckText').css("color") == "rgb(0, 128, 0)") {
			valpoint++;
			console.log(valpoint);
			$('#pwdCheckText').css("display","none");
		} else if($('#pwdCheckText').css("color") == "rgb(128, 0, 0)"){
			$('#pwdCheckText').css("display","");
		}
		
		if(valpoint == 6) {	
			$('#btnSignUp').css("border","green");
			$('#btnSignUp').attr("disabled", false);

		} else {
			$('#btnSignUp').attr("disabled", true);
		}
	});
	
	
	/*****focus만-------Name  / Phone  / 인증******/
	$('#formGroupInputSmall').focus(function() {
		$('#colorName').css("border","green");
		valpoint++;
	});
	
	$('#phoneNumber').focus(function() {
		$('#colorPhone').css("border","green");
		valpoint++;
	});
	
	$('#inNumber01').focus(function() {
		$('#colorValid').css("border","green");
		valpoint++;
	});

});

