	
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
	
	$("#signUp").click(function(){
		$('#yesno').html("아이디를 입력해주세요.");
	})

	/*
	 사업자 번호 받았을때의 사라지게 하는 함수였음.
	$("#inlineRadio4").click(function(){
		$("#bNum").css('display',"");
		console.log("display:true");
	}); */
	
	// Node.js랑 연결되어있다. 아이디 중복체크임
	// 키를 눌렀다가 내 손에 모든게 떨어졌을때
	$("#formGroupInputLarge").keyup(function(){
		
		$.get("http://192.168.0.125:3000/loginCheck",{
			// 겟 요청의 파라미터를 이것을 전달하겠다. 이위에꺼  //겟터
			id : $('#formGroupInputLarge').val()
		}, function(data){
			//노드에 서버에 응답까지 성공하면  //세터
			//이렇게 응답하겠다.(이렇게 이벤트발생하겠다.)
			$('#yesno').html(data.result);
		});
		
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

