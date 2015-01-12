	
$(function(){
	
	$("input[type=checkbox]").click(function(){
		console.log(this);
		if($(this).is(":checked")){
			$("#saveDiv>div:first-child").css("background", 'url(../../img/common/pic1_yellow.png) 0px no-repeat')
								.css("background-size","900%")
								.css("background-position","-207px -413px");
								
		} else {
			$("#saveDiv>div:first-child").css("background", 'url(../../img/common/pic1_gray.png) 0px no-repeat')
								.css("background-size","900%")
								.css("background-position","-207px -413px");
		}
	});
	
	
	$("#footer").load("../common/footer.html");

	$('#btnLogin').click(function(event){
	    $.post('../../json/auth/login.do'
	        , {
	          uId : $('#uId').val(),
	          uPwd : $('#uPwd').val(),
	          save : $('#save').is(':checked')
	        }
	        , function(data){
	          if (data.status == 'success') {
	        	 alert("환영합니다 ^_^*");
	        	 location.href = '../../web/main/main.html';
	        
	            
	          } else {
	            alert('로그인 아이디 또는 암호가 맞지 않습니다.');
	            $('#uPwd').val('');
	          }
	        }
	        , 'json');
	  });
	
	
	$('#btnSignUp').click(function(event){
		alert("감사합니다 ~ 이제,로그인 해주세요 !");
       location.href = '../../web/login/login.html';
	});//query insert보내기.  확인alert띠우고 로구인해달라고해. link login페이지로 ㄱ ㄱ
	
	
	
	
	$(".click-signUp").click(function(){
		var height = Narae.removePx($("#mainBody").css("height"));
		var marginLeft = (Narae.removePx($("#mainBody").css("width")) - 600) / 2;
		
		$("#mobileNav").css("display", "none");
		$("#back").css("display", "block")
		  .css("height", height);
		
		$("#myPage").css("margin-left", marginLeft + "px").css("display", "block");
		$("#myPage").load("../myPage/myPage.html");

	});
	
	
	
	/***********************************************유. 효 . 성........ 검 사**************************/	
	var valpoint=0;
	
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
			
			if(($('#formGroupInputLarge').val().match(/^[a-z][a-z\d]{3,11}$/) != null)
					 &&(data.result == "사용가능한 아이디입니다.")){
				
				$('#idText').html("ok").css("color","green");
				$('#colorId').css("border","green 2px solid");
	
			 } else { /*중복된 아이디가 있습니다.*/
					$('#idText').html("That's nono").css("color","red");
					$('#colorId').css("border","red 2px solid");
			 } 
				
		}); /*get꺼*/	
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
				 $('#pwdCheckText').html("불일치합니다.").css("color","red");
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

	/***************************************************************/

	
	
	
	
/*	// 전화번호 앞자리는 2~3자리 숫자, 두번째 자리는 3~4자리 숫자
    // 세번째 자리는 4자리 숫자
	$('#phoneNumber').focus(function() {
		 $('#phoneNumValid').css("display","");
		
		 $("#checkPassword").keyup(function(){
	
           if (!$('#phoneNumber').val().match(/^0(2|1[01679])$/)) {
        	   if (!$('#phoneNumber').val().match(/^[0-9]{3,}$/)) {
        		   if (!$('#phoneNumber').val().match(/^[0-9]{4}$/)){
        			   $('#phoneNumValid').html("ok.").css("color","green");
      				   $('#btnSignUp').attr("disabled", false);
        		   }
        	   }
            } else {
               $('#phoneNumValid').html("앞자리는 2~3자리 숫자, 두번째 자리는 3~4자리 숫자 세번째 자리는 4자리 숫자").css("color","red");
				 $('#btnSignUp').attr("disabled", true);
            	
            }
		 });
	});
	
	$('#phoneNumber').focusout(function() {
		$('#phoneNumValid').css("display","none");
	});*/
	
	/* .............................................*/
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
	
/*	$('#myModal104End').click(function(){
		$('#idText').html('');
		$('#myModal104').dropdown();
		setTimeout(function(){$('#idText').html("아이디를 입력해주세요.");},300);
	});*/
	
	
	
	

	/*
	$(":input").click(function(){
		console.log($(this));
		console.log($(input[type="radio"]).is(":checked"));
	})
	*/
	
	/*
	$("#inlineRadio3").click(function(){
		console.log("check");
	});
	*/
	
	
	
/*    // 이메일 검사
    // 4글자 이상(\w = [a-zA-Z0-9_], [\w-\.]) @가 나오고
    // 1글자 이상(주소). 글자 가 1~3번 반복됨
    if(!chk(/^[\w]{4,}@[\w]+(\.[\w-]+){1,3}$/, email, "이메일 형식에 어긋납니다."))
           return false;
   
    // 아이디 검사
    // 첫 글자는 반드시 영문 소문자, 4~12자로 이루어지고, 숫자가
    // 하나 이상 포함되어야 한다. 영문소문자와 숫자로만 이루어져야한다.
    // \d : [0-9]와 같다.       {n,m} : n에서 m까지 글자수
    if(!chk(/^[a-z][a-z\d]{3,11}$/, id, "첫글자는 영문 소문자, 4~12자 입력할것!"))
           return false;
    if(!chk(/[0-9]/, id, "숫자 하나이상포함!"))
           return false;

    // 비밀번호 확인 검사
    if(pass.value!=pass1.value) {
           alert("비밀번호 확인!");
    }
   
    // 이름 검사
    // 2글자 이상, 한글만
    // 통과하지 못하면 한글로 2글자 이상을 넣으세요~ alert 출력!
    if(!/^[가-힝]{2,}$/, name, "한글로 2글자 이상을 넣으세요~")
           return false;
   
    // 전화번호 검사

    // 전화번호 앞자리는 2~3자리 숫자, 두번째 자리는 3~4자리 숫자
    // 세번째 자리는 4자리 숫자

    if (tel1.value != '') {
           if (!chk(/^0(2|1[01679])$/, tel1, "번호 2자리 이상 입력"))
                   return false;
           if (!chk(/^[0-9]{3,}$/, tel2, "번호 3자리 이상 입력"))
                   return false;
           if (!chk(/^[0-9]{4}$/, tel3, "4자리 번호 입력"))
                   return false;
           }

    }

    function chk(re, e, msg) {
           if (re.test(e.value)) {
                   return true;
           }

           alert(msg);
           e.value = "";
           e.focus();
           return false;
    }*/
});

