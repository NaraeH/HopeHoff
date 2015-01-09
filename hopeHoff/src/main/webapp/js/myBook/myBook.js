var currPageNo;
var maxPageNo;
var checkedTable;	

$(function(){
	  
	  loadReservationList(1);
	  
	});

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

	//***************************** deleteButton클릭시 행 삭제하기 ********************************//
	$('#btnDelete').click(function(event){
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
	
	
	$('#prevBtn').click(function(event){
		if (currPageNo > 1) {
		  loadProductList(currPageNo - 1);
		}
	});

	$('#nextBtn').click(function(event){
		if (currPageNo < maxPageNo) {
		  loadProductList(currPageNo + 1);
		}
	});
	
	
	
	function setPageNo(currPageNo, maxPageNo) {
		  window.currPageNo = currPageNo;
		  window.maxPageNo = maxPageNo;
		  
		  $('#pageNo').html(currPageNo);
		  console.log(currPageNo);
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
		        $('<tr>').addClass('tableReservationData'+i)
		            .append($('<td class=table-data>').html(reservations[i].reservationNo))
		            .append($('<td class=table-data>').html(reservations[i].uPhone))
		            .append($('<td class=table-data>').html(reservations[i].reservationDate))
		            .append($('<td class=table-data>').html(reservations[i].reservationStatus))
		            .append($('<td class=table-data>').html('<button id=btnDelete>삭제</button>'))
		            .appendTo('#myBookData')
		      }
		    });
		}

























