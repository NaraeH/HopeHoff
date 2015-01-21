	
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
	
	$("#signUpText").click(function(data){
		$("#back").css("display", "block");
		$("#signUpDiv").css("display", "block");
		$("#signUpDiv").css("margin-left", -( Narae.removePx( $("#signUpDiv").css("width") ) / 2 ));

		require(['text!templates/signUp-table.html'],function(html){
	    	  var template = Handlebars.compile(html);
	    	  $('#signUpDiv').html(template(data));
	    	  });
	});
});

