var currPageNo;
var maxPageNo;
var checkedTable;

/*$(function(){
	  
	  loadReservationList(1);
	  
	});
*/


/*$(document).delegate(".list","mouseover",function(){
	var shopAddr = "#" + $(this).attr("id") + " .shopAddr";
	shopAddrText = $(shopAddr).html();
	
	$(shopAddr).removeClass("shopAddr").addClass("btnDetail").html("상세보기");
});

$(document).delegate(".list","mouseout",function(){
	var btnDetail = "#" + $(this).attr("id") + " .btnDetail";
	$(btnDetail).removeClass("btnDetail").addClass("shopAddr").html(shopAddrText);
});*/


$(document).delegate(".table-tr","click",function(){
	var status = $($('#myBookData').children()[0]).children().hasClass("table-content");
	
	var num = $($(this)[0]).attr("id").split("table-tr")[1]-0;
	console.log(num);
	//$(this).children().eq(4).html("<button id=btnDelete"+num+">삭제</button>");
	
	//status= $('#myBookData').children().hasClass("table-content");
	//console.log($($('#myBookData').children()[0]).children().hasClass("table-content"));
	//console.log($(this).hasClass("table-content"));
	if(!status){
	//status=false;
	$('<tr>').addClass('table-content').attr("id","tableContent"+num)
			 .append($('<td colspan="3">').html("aaaa")).css('text-align','center')
		 .append($('<td>').html("<button id=btnDelete"+num+">삭제</button>"))
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
	$('#btnDelete').click(function(event){
		console.log("Aaa");
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
			loadReservationList(currPageNo - 1);
		}
	});

	$('#nextBtn').click(function(event){
		if (currPageNo < maxPageNo) {
			loadReservationList(currPageNo + 1);
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
	
/*	function loadReservationList(pageNo,uId) {

		if (pageNo <= 0) pageNo = currPageNo;
			$.getJSON('../../json/reservation/list.do?pageNo='+pageNo, {"uId":uId},
		    function(data){
				console.log(data);
				console.log(uId);
				//consele.log(userId);
		      setPageNo(data.currPageNo, data.maxPageNo);
		      var reservations = data.reservations;
		      
		      require(['text!templates/booklist-table.html'],function(html){
		    	  var template = Handlebars.compile(html);
		    	  $('#myBookDataTable').html(template(data));
		    	  });
		      });
		     
		}
*/

























