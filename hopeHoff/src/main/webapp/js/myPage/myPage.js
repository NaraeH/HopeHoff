$(function(){

});

$("#btnMyPageClose").click(function(){
	$("#back").css("display", "none");
	$("#myPage").css("display", "none");
});

$("#btnPwdConfirm").click(function(){
	$.getJSON('/hopeHoff/json/auth/chkUser.do', 
			{'userId' : $("#chkUserId").val(),
		'userPwd': $("#chkUserPwd").val() },
			function(data){
			if(data.status == 'success'){
				require(['text!templates/myPage-change-table.html'], function(html){
					var template = Handlebars.compile(html);
					$('#myPageContainer').html( template(data) );
				});
			}else {
				$("#statusMsg").html("비밀번호가 일치하지 않습니다");
			}
	});
})


