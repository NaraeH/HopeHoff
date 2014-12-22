$(document).ready(function(){
	
	
var count= 3;
	
	 /***************************** table에 행만들기. ********************************/
		for(var i=0; i<=count*2; i++){
			$('<tr id=tRow'+i+'>').appendTo($('#dataForm'));
			if(i==0){
				for(var j=0;j<5; j++){
					$('<th class=tableData'+i+'>').html("<input type=\"checkbox\">").appendTo($('#tRow0'));
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
					$('<td class=tableData'+i+'>').html("<input type=\"checkbox\">").appendTo($('#tRow'+i));
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
				 $('<td colspan=\"6\" class=tableShow id=tableContent'+i+' >').html(" <p align=center> 내용 </p> ").appendTo($('#tRow'+i));
			}
		}
		  for(var i=2; i<=count*2; i+=2){
			$('#tableContent'+i).css('display','none');
		} 
			 /***************************** 홀수열 눌렀을때 짝수열 내용보기 ********************************/

			  $('.dataButton').click(function(event){
				  var num =$($(this)[0]).attr("id").split("dataButton")[1]-0;
			
				var status=$('#'+'tableContent'+(num+1)).css('display');
				var tableContents = $('#'+'tableContent'+(num+1));
				console.log(tableContents);
				 if(status=='none')
					 {
					 	$('#'+'tableContent'+(num+1)).css('display','');
					 }
				 else
					 $('#'+'tableContent'+(num+1)).css('display','none');
			 });
			 
		
			
			});
		 
		 //***************************** 삭제 버튼 눌렀을시에********************************//
		 
		
