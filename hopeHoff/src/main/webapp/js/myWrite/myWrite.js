	var count= 3;
		for(var i=0; i<=count*2; i++){
			$('<tr id=tRow'+i+'>').appendTo($('#dataForm'));
			if(i==0){
				for(var j=0;j<5; j++){
					$('<th class=tableData'+i+'>').html("<input type=\"checkbox\">").appendTo($('#tRow0'));
					$('<th class=tableData'+i+'>').html("No").appendTo($('#tRow0'));
					$('<th class=tableData'+i+'>').html("Phone-Number").appendTo($('#tRow0'));
					$('<th class=tableData'+i+'>').html("People-Count").appendTo($('#tRow0'));
					$('<th class=tableData'+i+'>').html("Time").appendTo($('#tRow0'));
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
					break;
				}
			}
			else{
				 $('<td colspan=\"5\" class=tableShow id=tableContent'+i+' >').html(" <p align=center> 내용 </p> ").appendTo($('#tRow'+i));
			}
		}
		  for(var i=2; i<=count*2; i+=2){
			$('#tableContent'+i).css('display','none');
		} 
		
		 for(var i=1; i<=count*2; i+=2){
			 
			 if(i==1){
			 $('#tRow1').click(function(event){
					 var status=$('#tableContent2').css('display');
				 if(status=='none')
					 {
					 	$('#tableContent2').css('display','');
					 }
				 else
					$('#tableContent2').css('display','none');
			 });
			}
			 
			 if(i==3){
			 $('#tRow3').click(function(event){
				 var status=$('#tableContent4').css('display');
				 if(status=='none')
					 {
					 	$('#tableContent4').css('display','');
					 }
				 else
					$('#tableContent4').css('display','none');
			 });
			}
			 
			 if(i==5){
				 $('#tRow5').click(function(event){
					 var status=$('#tableContent6').css('display');
					 if(status=='none')
						 {
						 	$('#tableContent6').css('display','');
						 }
					 else
						$('#tableContent6').css('display','none');
				 });
				}
		 }
		 
		 