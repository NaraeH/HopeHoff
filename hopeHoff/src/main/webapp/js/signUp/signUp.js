var randomNo = 0;
var Valid = new Valid();
//var Narae = new Narae();

$(function(){});

$('#btnSignUp').click(function(event){
	var inputStatus = isInputComplete();
	console.log(inputStatus);
	
	if( inputStatus ){
		$.post('../../json/auth/add.do'
				, {
					uType : $(':radio[name="type"]:checked').val(),
					uId : $('#formGroupInputLarge').val(),
					uName : $('#inputName').val(),
					uPwd : $('#inputPwd').val(),
					uPhone: $('#inputPhoneNo').val()
				}
				, function(data){
					alert("회원가입 성공 ! 이제 로그인 해주세영 >_<");
					location.href = '../../web/login/login.html';
				}
				, 'json');
	}else {
		alert( "입력되지 않은 값이 있습니다" );
	}
});

function isInputComplete(){
	if( ( $('#formGroupInputLarge').attr("data-valid") == "valid" ) &&
		( $('#inputName').attr("data-valid") == "valid" ) &&
		( $('#inputPwd').attr("data-valid") == "valid" ) &&
		( $('#inputConfirmPwd').attr("data-valid") == "valid" ) &&
		( $('#inputPhoneNo').attr("data-valid") == "validClick" )  &&
		( $('#inputConfirmPhoneNo').attr("data-valid") == "valid" )){

		return true;
	}else {
		return false;
	}
}
	
$( "#btnSignUpClose" ).click(function(){
	var toUrl = location.href.split("/")[5];  //main에서 호출했는지 login에서 호출했는지 찾기
	location.href =  "../../web/" + toUrl + "/" + toUrl + ".html";
});


$("#sendConfirmPhoneNo").click(function(){
	if( $( "#inputPhoneNo" ).attr("data-valid") == 'validNoneClick' ){
		Narae.sendSms( callbackFun, "randomNoMsg", $("#inputPhoneNo").val() );

		if(statusMap.status == 'success') {
			$( "#inputPhoneNo" ).attr("data-valid", "validClick"); 
			randomNo = statusMap.randomNo;
			console.log("인증번호==>" + randomNo);

			alert("인증번호가 성공적으로 전송되었습니다");
		}else {
			console.log("문자전송실패");
		}

	}else if( $( "#inputPhoneNo" ).attr("data-valid") == 'validClick' ){
		alert("이미 발송되었습니다");
	}else if( $( "#inputPhoneNo" ).attr("data-valid") == 'invalidNoneClick' ){
		randomNo = 0;
		alert( "유효한 휴대폰 번호를 입력하세요" );
		$( "#inputPhoneNo" ).focus();
	}else {
		randomNo = 0;
		alert( "핸드폰 번호를 확인하세요 ");
	}
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
				$('#formGroupInputLarge').css("border","green 2px solid").attr("data-valid", "valid");

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


Valid.name( "#inputName" );                             //이름 유효성 검사
Valid.pwd( "#inputPwd", "#inputConfirmPwd" );                               //암호 유효성 검사
Valid.confirmPwd( "#inputConfirmPwd", "#inputPwd" );    //암호확인  검사
Valid.phoneNo( "#inputPhoneNo", "#inputConfirmPhoneNo" );                       //암호 유효성 검사
Valid.confirmValidPhoneNo( "#inputConfirmPhoneNo" );    //핸드폰 인증번호 검사




