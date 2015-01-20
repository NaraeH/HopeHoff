var randomNo = 0;

$(function(){
	$('#btnCancel').click(function(){
		$("input[name='type']").filter("[value='user']").prop("checked",false);
		$("input[name='type']").filter("[value='boss']").prop("checked",false);
		$('#formGroupInputLarge').val('');
		$('#idText').html('');
		$('#inputName').val('');
		$('.validNameDiv').html('');
		$('#inputPwd').val('');
		$('#validPwdDiv').html('');
		$('#checkPassword').val('');
		$('#pwdCheckText').html('');
		$('#phoneNumber').val('');
		$('#phoneNumValid').html('');
		$('#inNumber01').val('');

	});
	
	$('#btnSignUp').click(function(event){
	    $.post('../../json/auth/add.do'
	        , {
	          uType : $(':radio[name="type"]:checked').val(),
	          uId : $('#formGroupInputLarge').val(),
	          uName : $('#inputName').val(),
	          uPwd : $('#inputPwd').val(),
	          uPhone: $('#phoneNumber').val()
	        }
	        , function(data){
	        	 alert("회원가입 성공 ! 이제 로그인 해주세영 >_<");
	        	 location.href = '../../web/login/login.html';
	         }
	        , 'json');
	  });
	
	$( "#btnSignUpClose" ).click(function(){
		var toUrl = location.href.split("/")[5];  //main에서 호출했는지 login에서 호출했는지 찾기
		location.href =  "../../web/" + toUrl + "/" + toUrl + ".html";
	});
	
	
	$("#sendValid").click(function(){
		Narae.sendSms( callbackFun, "randomNoMsg", $("#phoneNumber").val() );

		if(statusMap.status == 'success') {
			randomNo = statusMap.randomNo;
			alert("인증번호가 성공적으로 전송되었습니다");
		}else {
			console.log("문자전송실패");
		}
		
		console.log("인증번호==>" + randomNo);
	});
	
	/*************************유. 효 . 성..... 검 사************************/	

	//-------- ID-------------( input칸에 포커스들어올 때 유효성여부가 나타나지요(밑에 focusout도있습니당)  )
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
			
			if(($('#formGroupInputLarge').val().match(/^[a-z][a-z\d]{2,11}$/) != null)
					 &&(data.result == "사용가능한 아이디입니다.")){
				
				$('#idText').html("ok").css("color","green");
				$('#formGroupInputLarge').css("border","green 2px solid");
	
			 } else { /*중복된 아이디가 있습니다.*/
					$('#idText').html("That's nono").css("color","red");
					$('#formGroupInputLarge').css("border","red 2px solid");
			 } 
				
		}); /*get꺼*/	
	 }); /*keyup꺼*/
	 
	});//focus
	
	
	//V ID input칸에 outfocus면, 유효성숨기기
	$('#formGroupInputLarge').focusout(function() {
		
		if($('#idText').css("color") == "rgb(0, 128, 0)") {
			$('#idText').css("display","none");
		} else if($('#idText').css("color") == "rgb(255, 0, 0)"){
			$('#idText').css("display","");
		}
		
	});
	
	
	Valid.validName("#inputName"); //이름 유효성 검사
	Valid.validPwd("#inputPwd");  //암호 유효성 검사

	/* --------------password 유 효 성--------------- */
/*	$('#inputPwd').focus(function() {
		 $('#validPwdDiv').css("display","");
		 $("#inputPwd").keyup(function(){
			 if(($('#inputPwd').val().match(/([a-zA-Z0-9].*[!,@,#,$,%,^,&,*,?,_,~])|([!,@,#,$,%,^,&,*,?,_,~].*[a-zA-Z0-9])/) != null)
					 && (($('#inputPwd').val().length >= 6)&&($('#inputPwd').val().length <= 16) )){
				
				 $('#validPwdDiv').html("ok").css("color","green");
				 $('#inputPwd').css("border","green 2px solid");
	
			 } else {
				 $('#validPwdDiv').html("문자, 숫자, 특수문자(!,@,#,$,%,^,&,*,?,_,~의 조합으로 6~16자리").css("color","red");
				 $('#inputPwd').css("border","red 2px solid");
				
			 }
		 });
	});
	$('#inputPwd').focusout(function() {
		
		if($('#validPwdDiv').css("color") == "rgb(0, 128, 0)") {
			$('#validPwdDiv').css("display","none");
		} else if($('#validPwdDiv').css("color") == "rgb(255, 0, 0)"){
			$('#validPwdDiv').css("display","");
		}
		

	});*/
	/************패스워드 확인*********/
	$('#checkPassword').focus(function() {
		 $('#pwdCheckText').css("display","");
		
		 $("#checkPassword").keyup(function(){
		
			 if(($('#inputPwd').val() == $('#checkPassword').val()) && ($('#inputPwd').val()!= "")){
				 $('#pwdCheckText').html("일치합니다.").css("color","green");
				 $('#checkPassword').css("border","green 2px solid");
		
			 } else {
				 $('#pwdCheckText').html("위 암호와 일치하지 않습니다.").css("color","red");
				 $('#checkPassword').css("border","red 2px solid");
				 
			 }
		 });
	});
	
	
	$('#checkPassword').focusout(function() {
	
		if($('#pwdCheckText').css("color") == "rgb(0, 128, 0)") {
			$('#pwdCheckText').css("display","none");
		} else if($('#pwdCheckText').css("color") == "rgb(255, 0, 0)"){
			$('#pwdCheckText').css("display","");
		}
		
		
	});
	
	
	/*****PHONE NUMBER******/

	$('#phoneNumber').focus(function() {
		 $('#phoneNumValid').css("display","");
		 $("#phoneNumber").keyup(function(){
			 if($('#phoneNumber').val().match(/[01](0|1|6|7|8|9)[-](\d{4}|\d{3})[-]\d{4}$/) != null){
				
				 $('#phoneNumValid').html("ok").css("color","green");
				 $('#phoneNumber').css("border","green 2px solid");
				 $('#sendValid').attr("disabled",false);
	
			 } else {
				 $('#phoneNumValid').html("예)010-1234-4567").css("color","red");
				 $('#phoneNumber').css("border","red 2px solid");
				 $('#sendValid').attr("disabled",true);
				 
			 }
		 });
	});
	$('#phoneNumber').focusout(function() {
		
		if($('#phoneNumValid').css("color") == "rgb(0, 128, 0)") {
			$('#phoneNumValid').css("display","none");
		} else if($('#phoneNumValid').css("color") == "rgb(255, 0, 0)"){
			alert("유효한 휴대폰 번호를 입력하세요.");
			$('#sendValid').attr("disabled",true);
			$('#phoneNumValid').css("display","");
			
		}
		

	});
	
	/**************핸드폰 번호 인증번호 검사**********************/
	
	$( "#inNumber01" ).focus(function() {
		var inNumber01 = $( "#inNumber01" );
		
		$( inNumber01 ).keyup(function(){
			
			if($( inNumber01 ).val() == randomNo){
				//updateUserMap.phoneNo = $("#phoneNo").val();  //핸드폰 인증까지 만료 하면 변경될 핸드폰 값 넣기
		
				$( inNumber01 ).css("border","green 2px solid");
				$( ".confimNoValid" ).css("display", "none");
				$( inNumber01 ).attr("data-check", "validData");
				 
			 } else {
				 $( inNumber01 ).css("border","red 2px solid");
				 $( ".confimNoValid" ).html("인증번호가 맞지 않습니다").css("display", "block").css("color", "red");
				 $( inNumber01 ).attr("data-check", "invalidData");
			 }
		});
	});
		
	$( "#inNumber01" ).focus(function() {
		var inNumber01 = $( "#inNumber01" );
		
		if(  $( inNumber01 ).css("border-color") == "rgb(0, 128, 0)" ){ //초록색 
			$( ".confimNoValid" ).css("display","none");
		}
	});

});

