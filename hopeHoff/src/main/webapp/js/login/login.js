	
$(function(){

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
				} else { /*중복된 아이디가 있습니다.*/
					$('#yesno').html(data.result).css("color","red");
					$('#btnSignUp').attr("disabled", true);
				} 
	
			
		}); /*get꺼*/	
	 }); /*keyup꺼*/

	});//focus
	
	
	//V ID input칸에 outfocus면, 유효성숨기기
	$('#formGroupInputLarge').focusout(function() {
		$('#yesno').css("display","none");
	});
	
	
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
});

