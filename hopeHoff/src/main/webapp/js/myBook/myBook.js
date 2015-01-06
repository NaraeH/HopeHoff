var currPageNo;
var maxPageNo;
var checkedTable;	

$(function(){
	  
	  loadReservationList(1);
	  
	});
	
	/*//***************************** table에 행만들기. *******************************
	for(var i=0; i<=totalSize*2; i++){
		$('<tr id=tRow'+i+'>').appendTo($('#myBookData'));
		if(i==0){
			for(var j=0;j<5; j++){
				$('<th class=tableData>').html("<input id=checkboxHeader  type=\"checkbox\">").appendTo($('#tRow0'));
				$('<th class=tableData>').html("번호").appendTo($('#tRow0'));
				$('<th class=tableData>').html("전화 번호").appendTo($('#tRow0'));
				$('<th class=tableData>').html("시간").appendTo($('#tRow0'));
				$('<th class=tableData>').html("상태 정보").appendTo($('#tRow0'));
				break;
			}
		}
		else if(i%2!=0){
			for(var j=0;j<5; j++){
				$('<td style=\"width:50px ;\"   id=tableDataCheck'+i+'>').html("<input id=checkbox"+i+"  class=checkedBox type=\"checkbox\">").appendTo($('#tRow'+i));
				$('<td style=\"width:50px ;\" class=tableTitle id=tableDataNo'+i+'>').html("No").appendTo($('#tRow'+i));
				$('<td style=\"width:150px ;\" class=tableTitle id=tableDataPhone'+i+'>').html("Phone-Number").appendTo($('#tRow'+i));
				$('<td style=\"width:100px ;\" class=tableTitle id=tableDataTime'+i+'>').html("Time").appendTo($('#tRow'+i));
				$('<td style=\"width:100px ;\" class=tableTitle id=tableStatus'+i+'>').html("예약 요청중").appendTo($('#tRow'+i));
				break;
			}
		}
		else{
			$('<td colspan=\"6\" class=tableShow id=tableContent'+i+' >')
									.html(" <p align=center> 안녕하세요 저녁 9시에 10명 예약 가능한가요? </p> ")
																		.appendTo($('#tRow'+i));
		}
	}
	for(var i=2; i<=totalSize*2; i+=2){
		$('#tableContent'+i).css('display','none');
	} */

	$('#checkboxHeader').attr('disabled','true');

	//***************************** 홀수열 눌렀을때 짝수열 내용보기 ********************************//

	$('.tableTitle').click(function(event){
		var num =$($(this)[0]).attr("id").split("tableStatus")[1]-0;
		//console.log($($(this)[0]).attr("id");
		//console.log($($(this)[0]).attr("id").split("dataButton"));

		var status=$('#'+'tableContent'+(num+1)).css('display');
		var tableContents = $('#'+'tableContent'+(num+1));
		console.log(tableContents);
		if(status=='none')
		{
			$('#'+'tableContent'+(num+1)).slideDown(1000);
		}
		else
			$('#'+'tableContent'+(num+1)).slideUp(1000);
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
		if(checkedTable == 0){
			return;
		}
		alert("예약 취소 하시겠습니까?");
		$('#'+'tRow'+checkedTable).remove();
	});


	
	//******************** datePicker 설정 하기************************//
	$(function() {
		  $( "#datepicker" ).datepicker({dateFormat: 'yy-mm-dd'});
	});
	
	
	//******************** btnClose 클릭시에 ************************//
	$("#btnMyBookClose").click(function(){
		$("#back").css("display", "none");
		$("#myBook").css("display", "none");
	});
	
	
	function setPageNo(currPageNo, maxPageNo) {
		  window.currPageNo = currPageNo;
		  window.maxPageNo = maxPageNo;
		  
		  $('#pageNo').html(currPageNo);
		  
		  if (currPageNo <= 1) $('#prevBtn').css('display', 'none');
		  else $('#prevBtn').css('display', '');
		  
		  if (currPageNo >= maxPageNo) $('#nextBtn').css('display', 'none');
		  else $('#nextBtn').css('display', '');
		}
	
	function loadReservationList(pageNo) {
		  if (pageNo <= 0) pageNo = currPageNo;
		  
			$.getJSON('../../json/reservation/list.do?pageNo=' + pageNo, 
		    function(data){
				console.log(data);
		      setPageNo(data.currPageNo, data.maxPageNo);
		      var reservations = data.reservations;
		      
		      
		      for (var i = 0; i < reservations.length; i++) {
		        $('<tr>')
		        	.append($('<input type="checkbox">'))
		            .append($('<td>').html(reservations[i].reservationNo))
		            .append($('<td>').html(reservations[i].userPhone))
		            .append($('<td>').html(reservations[i].reservationDate))
		            .append($('<td>').html(reservations[i].reservationStatus))
		            .appendTo('#myBookData')
		      }
		    });
		}

























