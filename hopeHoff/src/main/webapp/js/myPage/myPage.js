$(function(){
	//******************** btnClose 클릭시에 ************************//
	$("#btnMyPageClose").click(function(){
		$("#back").css("display", "none");
		$("#myPage").css("display", "none");
	});

});

/*$.getJSON('/hopeHoff/json/auth/loginUser.do', function(data){
   //console.log("what the f***"+data.status);
	if (data.status == "fail") {
		console.log("fail..");
	} else { //success
		$(".userId").attr("placeholder"," "+data.loginUser.uId);
		$(".userName").attr("placeholder"," "+data.loginUser.uName);
	}
});*/


$("#btnPwdConfirm").click(function(){
	$.getJSON('/hopeHoff/json/auth/chkUser.do', 
			{'userId' : $("#chkUserId").val(),
		'userPwd': $("#chkUserPwd").val() },
			function(data){
			console.log(data);
			
			if(data.status == 'success'){
				require(['text!templates/myPage-table.html'], function(html){
					var template = Handlebars.compile(html);
					$('#myPageContainer').html( template(data) );
				});
			}else {
				$("#statusMsg").html("비밀번호가 일치하지 않습니다");
			}
	});
})

