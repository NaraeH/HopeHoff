	
$(function(){

	
	
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
	            console.log("failllll");
	          }
	        }
	        , 'json');
	  });
	
	
	
	
	
	
	
	
	
	
	
	$("#footer").load("../common/footer.html");
	
	$('#leftImg01').innerfade({
			animationtype :'fade',
			speed : 750,
			timeout: 2000,
			type : 'random',
			containerheight : '130px'
	});
		
	$('#leftImg02').innerfade({
		animationtype :'fade',
		speed : 750,
		timeout: 2000,
		type : 'random',
		containerheight : '130px'
	});
	
	$('#leftImg03').innerfade({
		animationtype :'fade',
		speed : 750,
		timeout: 2000,
		type : 'random',
		containerheight : '130px'
	});
	
	$("#inlineRadio3").click(function(){
		$("#bNum").css('display',"none");
		console.log("display:none");
	});
	
   /*
	 사업자 번호 받았을때의 사라지게 하는 함수였음.
	$("#inlineRadio4").click(function(){
		$("#bNum").css('display',"");
		console.log("display:true");
	}); */
	
	
	/**********************************************************************유. 효 . 성........ 검 사**************************/	
	var valpoint=0;
	
	//V ID input칸에 포커스들어올 때 유효성여부가 나타나지요(밑에 focusout도있습니당)
	$('#formGroupInputLarge').focus(function() {
	 $('#yesno').css("display","");
		
		// Node.js랑 연결되어있다. 아이디 중복체크임
		// 키를 눌렀다가 내 손에 모든게 떨어졌을때
	 $("#formGroupInputLarge").keyup(function(){
		
		$.get("http://192.168.0.205:3000/loginCheck",{
			// 겟 요청의 파라미터를 이것을 전달하겠다. 이위에꺼  //겟터
			id : $('#formGroupInputLarge').val()
		}, function(data){
			//노드에 서버에 응답까지 성공하면  //세터
			//이렇게 응답하겠다.(이렇게 이벤트발생하겠다.)
			
				if(data.result == "사용가능한 아이디입니다."){
					$('#yesno').html(data.result).css("color","green");
					
					/*	$(".has-feedback").append("<span class='glyphicon glyphicon-ok form-control-feedback' aria-hidden='true'></span>");*/
					
					/*$(".has-feedback").attr("class","has-success");*/
					   /*.append("<span id='inputSuccess4Status' class='sr-only'>(success)</span>");*/
				} else { /*중복된 아이디가 있습니다.*/
					$('#yesno').html(data.result).css("color","red");
					$(".has-feedback").attr("class","has-error");					
				} 
	       }
	  ); /*get꺼*/	
	 }); /*keyup꺼*/
	 
	});//focus
	
	
	//V ID input칸에 outfocus면, 유효성숨기기
	$('#formGroupInputLarge').focusout(function() {
		$('#yesno').css("display","none");
		if($('#yesno').css("color") == "rgb(0, 128, 0)") {
			valpoint++;
			console.log(valpoint);
		}
	});
	/* ----------------------------- */
	$('#inputPassword3').focus(function() {
		 $('#pwdValid').css("display","");
		 $("#inputPassword3").keyup(function(){
			 if(($('#inputPassword3').val().match(/([a-zA-Z0-9].*[!,@,#,$,%,^,&,*,?,_,~])|([!,@,#,$,%,^,&,*,?,_,~].*[a-zA-Z0-9])/) != null)
					 && (($('#inputPassword3').val().length >= 6)&&($('#inputPassword3').val().length <= 16) )){
				
				 $('#pwdValid').html("ok").css("color","green");
	
			 } else {
				 $('#pwdValid').html("문자, 숫자, 특수문자(!,@,#,$,%,^,&,*,?,_,~의 조합으로 6~16자리").css("color","red");
				
			 }
		 });
	});
	$('#inputPassword3').focusout(function() {
		$('#pwdValid').css("display","none");
		if($('#pwdValid').css("color") == "rgb(0, 128, 0)") {
			valpoint++;
			console.log(valpoint);
		}
	});
	/*********************/
	$('#checkPassword').focus(function() {
		 $('#pwdCheckText').css("display","");
		
		 $("#checkPassword").keyup(function(){
		
			 if(($('#inputPassword3').val() == $('#checkPassword').val()) && ($('#inputPassword3').val()!= "")){
				 $('#pwdCheckText').html("일치합니다.").css("color","green");
	
		
			 } else {
				 $('#pwdCheckText').html("불일치ㅠ_ㅠ").css("color","red");
				 
			 }
		 });
	});
	
	
	$('#checkPassword').focusout(function() {
		$('#pwdCheckText').css("display","none");
		if($('#pwdCheckText').css("color") == "rgb(0, 128, 0)") {
			valpoint++;
			console.log(valpoint);
		}
		
	});
	/*************email 유효성검사ㅏㅏㅏㅏㅏㅏ***************/

	$('#inputEmail3').focus(function() {
		 $('#emailValid').css("display","");
		 $("#inputEmail3").keyup(function(){
			 if($('#inputEmail3').val().match(/^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/) != null) {
				
				 $('#emailValid').html("ok").css("color","green");
				 
		   
			 } else {
				 $('#emailValid').html("이메일 형식으로 입력해 주세요.").css("color","red");
				 
			 }
		 });
	});
	$('#inputEmail3').focusout(function() {
		$('#emailValid').css("display","none");
		if($('#emailValid').css("color") == "rgb(0, 128, 0)") {
			valpoint++;
			console.log(valpoint);
		}
		

		if(valpoint == 4) {	
			$('#btnSignUp').attr("class", "btn btn-success");
			$('#btnSignUp').attr("disabled", false);

		} 

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
		$('#yesno').html('');
		$('#formGroupInputSmall').val('');
		$('#inputPassword3').val('');
		$('#checkPassword').val('');
		$('#phoneNumber').val('');
		$('#checkPassword').val('');
		$('#inNumber01').val('');
		$('#inputEmail3').val('');
		
	});
	
	$('#myModal104End').click(function(){
		$('#yesno').html('');
		$('#myModal104').dropdown();
		setTimeout(function(){$('#yesno').html("아이디를 입력해주세요.");},300);
	});
	
	
	
	

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

