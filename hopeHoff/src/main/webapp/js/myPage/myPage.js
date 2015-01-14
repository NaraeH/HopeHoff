$(function(){
	//******************** btnClose 클릭시에 ************************//
	$("#btnMyPageClose").click(function(){
		$("#back").css("display", "none");
		$("#myPage").css("display", "none");
	});

});

$.getJSON('/hopeHoff/json/auth/loginUser.do', function(data){
   //console.log("what the f***"+data.status);
	if (data.status == "fail") {
		console.log("fail..");
	} else { //success
		$(".userId").attr("placeholder"," "+data.loginUser.uId);
		$(".userName").attr("placeholder"," "+data.loginUser.uName);
	}
});


