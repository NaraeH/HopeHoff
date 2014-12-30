$(document).ready(function(){
	//******************** btnClose 클릭시에 ************************//
	$("#btnMyPageClose").click(function(){
		$("#back").css("display", "none");
		$("#myPage").remove();
	});

});