$(document).ready(function(){
	
	var totalSize=3;	//총 게시물의 갯수
	
	
	var checkedTable=0;	
	
	
	//***************************** table에 행만들기. ********************************//
	for(var i=0; i<=totalSize*2; i++){
		$('<tr id=tRow'+i+'>').appendTo($('#dataForm'));
		if(i==0){
			for(var j=0;j<5; j++){
				$('<th class=tableData'+i+'>').html("<input id=checkboxHeader  type=\"checkbox\">").appendTo($('#tRow0'));
				$('<th class=tableData'+i+'>').html("번호").appendTo($('#tRow0'));
				$('<th class=tableData'+i+'>').html("전화 번호").appendTo($('#tRow0'));
				$('<th class=tableData'+i+'>').html("인원").appendTo($('#tRow0'));
				$('<th class=tableData'+i+'>').html("시간").appendTo($('#tRow0'));
				$('<th class=tableData'+i+'>').html("비고").appendTo($('#tRow0'));
				break;
			}
		}
		else if(i%2!=0){
			for(var j=0;j<5; j++){
				$('<td class=tableData'+i+'>').html("<input id=checkbox"+i+"  class=\"checkbox\" type=\"checkbox\">").appendTo($('#tRow'+i));
				$('<td class=tableData'+i+'>').html("No").appendTo($('#tRow'+i));
				$('<td class=tableData'+i+'>').html("Phone-Number").appendTo($('#tRow'+i));
				$('<td class=tableData'+i+'>').html("People-Count").appendTo($('#tRow'+i));
				$('<td class=tableData'+i+'>').html("Time").appendTo($('#tRow'+i));
				$('<td class=tableButton'+i+'>').html("<button id=dataButton"+i+" class=\"dataButton\"></button>").appendTo($('#tRow'+i));
				$('.dataButton').css('background-image','url(../../img/common/arrow_down.png)')
				.css('width','25px')
				.css('height','20px')
				.css('background-position','-1260px -5120px');
				break;
			}
		}
		else{
			$('<td colspan=\"6\" class=tableShow id=tableContent'+i+' >')
									.html(" <p align=center> 안녕하세요 저녁 9시에 10명 예약 가능한가요? </p> ")
																		.appendTo($('#tRow'+i));
		}
	}

	$('#checkboxHeader').attr('disabled','true');

	for(var i=2; i<=totalSize*2; i+=2){
		$('#tableContent'+i).css('display','none');
	} 
	//***************************** 홀수열 눌렀을때 짝수열 내용보기 ********************************//

	$('.dataButton').click(function(event){
		var num =$($(this)[0]).attr("id").split("dataButton")[1]-0;
		//console.log($($(this)[0]).attr("id");
		//console.log($($(this)[0]).attr("id").split("dataButton"));

		var status=$('#'+'tableContent'+(num+1)).css('display');
		var tableContents = $('#'+'tableContent'+(num+1));
		console.log(tableContents);
		if(status=='none')
		{
			$('#'+'tableContent'+(num+1)).slideDown(200);
		}
		else
			$('#'+'tableContent'+(num+1)).slideUp(200);
	});

	//***************************** checkbox를 선택했을때 값을 저장하는것. ********************************//
	$("input[type=checkbox]").click(function(){

		if($(this).is(":checked")){
			checkedTable=$($(this)[0]).attr("id").split("checkbox")[1]-0;
			console.log(checkedTable)
		}
	});
	
	//***************************** deleteButton클릭시 행 삭제하기 ********************************//
	$('#btnDelete').click(function(event){
		console.log("aaa");
		$('#'+'tRow'+checkedTable).remove();
	});


	$(function() {
		  $( "#datepicker" ).datepicker({dateFormat: 'yy-mm-dd'});
	});
	

});

//***************************** 삭제 버튼 눌렀을시에********************************//























