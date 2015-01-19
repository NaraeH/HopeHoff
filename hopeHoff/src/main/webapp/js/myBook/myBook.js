var currPageNo;
var maxPageNo;


$(document).delegate(".table-tr","click",function(){
	var status = $($('#myBookData').children()[0]).children().hasClass("table-content");
	
	console.log("처음",status);
	var num = $($(this)[0]).attr("id").split("table-tr")[1]-0;
	//console.log(num);
	if(!status){
	//status=false;
		console.log("다음",status);
	$('<tr>').addClass('table-content').attr("id","tableContent"+num)
			 .append($('<td colspan="3">').html("aaaa")).css('text-align','center')
		 .append($('<td>').html("<button class=btn-delete id=btnDelete"+num+">취소</button>"))
			.insertAfter('#'+'table-tr'+num)
			console.log("aaaa");
	}
	else 
	{
		console.log("bbbbb");
		$('#'+'tableContent'+num).remove();
	}
});
		

	//***************************** deleteButton클릭시 행 삭제하기 ********************************//
$(document).delegate(".btn-delete","click",function(){
	var num = $($(this)[0]).attr("id").split("btnDelete")[1]-0;
	
	console.log("delete버튼의 값 ===>",num);
	
	console.log("버튼 눌렸다");
	alert("예약을 취소 하시겠습니까?");
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
			$(".table-tr0").remove();
			loadReservationList(currPageNo - 1,uId);
		}
	});

	$('#nextBtn').click(function(event){
		if (currPageNo < maxPageNo) {
			$(".table-tr0").remove();
			loadReservationList(currPageNo + 1,uId);
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
	
/*	function loadReservationList(pageNo) {

		if (pageNo <= 0) pageNo = currPageNo;
			$.getJSON('../../json/reservation/list.do?pageNo=' + pageNo, 
		    function(data){
				console.log(data);
		      setPageNo(data.currPageNo, data.maxPageNo);
		      var reservations = data.reservations;
		      
		      $('.table-tr').remove();
		      
		      
		      for (var i = 0; i < reservations.length; i++) {
		        $('<tr>').addClass('table-tr').attr('id','table-tr'+(i+1))
		            .append($('<td class=table-data>').html(reservations[i].reservationNo))
		            .append($('<td class=table-data>').html(reservations[i].uPhone))
		            .append($('<td class=table-data>').html(reservations[i].reservationDate))
		            .append($('<td class=table-data>').html(reservations[i].reservationStatus))
		            .append($('<td class=table-data>'))
		            .appendTo('#myBookData')
		      }
		    });
		}*/
	
	function loadReservationList(pageNo,uId) {

		if (pageNo <= 0) pageNo = currPageNo;
			$.getJSON('../../json/reservation/list.do?pageNo='+pageNo, {"uId":uId},
				    function(data){
					yyyyMMddList(data);
					console.log(data.startIndex);
				      setPageNo(data.currPageNo, data.maxPageNo);
				    //  var reservations = data.reservations;
				      
				      require(['text!templates/booklist-table.html'],function(html){
				    	  var template = Handlebars.compile(html);
				    	  $('#myBook').html(template(data));
				    	  });
				      });
		}


























