var currPageNo;
var maxPageNo;
var reservationNo;

console.log(currPageNo);
$.getJSON('/hopeHoff/json/auth/loginUser.do', function(id){
	if(uType=="user"){
	$(document).delegate(".type-user","click",function(event){
		
		event.stopImmediatePropagation();
		 
		var num = $($(this)[0]).attr("id").split("tableUser")[1]-0;
		 reservationNo = $("#tableUser"+num+" td:first").html()
		
	  $.post('../../json/reservation/view.do'
		        , {
		          reservationNo: reservationNo
		        }
	        , function(data){
	        	console.log(data);
	        	if(data.status == "success") {
	        		var status = $($('#myBookData').children()[0]).children().hasClass("table-content");
	        		
	        		if(!status){
	        			$('<tr>').addClass('table-content').attr("id","tableContent"+num)
	        					 .append($('<td colspan="3">').html(data.reservation.reservationContent)).css('text-align','center')
	        				 .append($('<td>').html("<button class=btn-delete id=btnDelete"+num+">취소</button>"))
	        					.insertAfter('#'+'tableUser'+num)
	        			}
	        			else 
	        			{
	        				$('#'+'tableContent'+num).remove(); 
	        			}

	        		
	        	} else {   	console.log(data.status);        	}
	          }
	        , 'json');
		
		
		});
	}
	else{
		$(document).delegate(".type-user","click",function(event){
			
			 event.stopImmediatePropagation();
			 
			var num = $($(this)[0]).attr("id").split("tableUser")[1]-0;
			 reservationNo = $("#tableUser"+num+" td:first").html()
			
		  $.post('../../json/reservation/view.do'
			        , {
			          reservationNo: reservationNo
			        }
		        , function(data){
		        	if(data.status == "success") {
		        		var status = $($('#myBookData').children()[0]).children().hasClass("table-content");
		        		
		        		if(!status){
		        			$('<tr>').addClass('table-content').attr("id","tableContent"+num)
		        					 .append($('<td colspan="3">').html(data.reservation.reservationContent)).css('text-align','center')
		        				 .append($('<td>').html("<button class=btn-permission id=btnPermission"+num+">승인</button>"))
		        					.insertAfter('#'+'tableUser'+num)
		        			}
		        			else 
		        			{
		        				$('#'+'tableContent'+num).remove(); 
		        			}
		        	} else {   	console.log(data.status);        	}
		          }
		        , 'json');
		});
		}
});

	//***************************** deleteButton클릭시 행 삭제하기 ********************************//
$(document).delegate(".btn-delete","click",function(event){
	var num = $($(this)[0]).attr("id").split("btnDelete")[1]-0;
	
	 event.stopImmediatePropagation();
	console.log(reservationNo);
	$.post('../../json/reservation/delete.do'
		        , {
		        	reservationNo: reservationNo
		        }
	        , function(data){
	        	if(data.status == "success") {
	        		console.log(data);
	        		$('.table-tr'+num).remove();
	        		loadReservationList(1,uId,uType);
	        	} else {   	console.log(data.status);        	}
	          }
	        , 'json');
	
	
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
		console.log(currPageNo);
			if (currPageNo > 1) {
				loadReservationList(currPageNo - 1,uId,uType);
			}
	});

	$('#nextBtn').click(function(event){
		console.log(currPageNo);
			if (currPageNo > 1) {
				loadReservationList(currPageNo + 1,uId,uType);
			}
	});
	
	
	function setPageNo(currPageNo, maxPageNo) {
		  window.currPageNo = currPageNo;
		  window.maxPageNo = maxPageNo;
		  
		  $('#pageNo').html(currPageNo);
		  console.log("currPageNo",currPageNo);
		  if (currPageNo <= 1) $('#prevBtn').css('display', 'none');
		  else $('#prevBtn').css('display', '');
		  
		  if (currPageNo >= maxPageNo) $('#nextBtn').css('display', 'none');
		  else $('#nextBtn').css('display', '');
		}
	
	function loadReservationList(pageNo,uId,uType) {

		if (pageNo <= 0) pageNo = currPageNo;
			$.getJSON('../../json/reservation/list.do?pageNo='+pageNo, {
					"uId":uId,
					"type":uType},
				    function(data){
					yyyyMMddList(data);
				      setPageNo(data.currPageNo, data.maxPageNo);
				      $(".type-user").remove();
				      
				      require(['text!templates/booklist-table.html'],function(html){
				    	  var template = Handlebars.compile(html);
				    	  $('#myBook').html(template(data));
				    	  });
				      });
	}


























