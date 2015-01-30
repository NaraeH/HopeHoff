var currPageNo;
var maxPageNo;
var reservationNo;
var rStatus;
var selectedShop = $("#selectForm option:selected").attr("data-businessNo"); //선택 된 가게의 사업자 번호
var selectedDate = null;


$(function(){
	loadMarket(1);
});

	if(uType=="user"){
	$(document).delegate(".table-tr","click",function(event){
		
		event.stopImmediatePropagation();
		 
		var num = $($(this)[0]).attr("id").split("tableUser")[1]-0;
		reservationNo = $( $( this ).children()[0] ).attr( "data-reservationNo" );
		
		rStatus=$("#tableUser"+num+" td:last").html()
		
	  $.post('../../json/reservation/view.do'
		        , {
		          reservationNo: reservationNo
		        }
	        , function(data){
	        	console.log(data);
	        	if(data.status == "success") {
	        		var hasClass = $($('#myBookData').children()[0]).children().hasClass("table-content");
	        		if(!hasClass){
		        			if(rStatus=="승인"){
		        					$(rStatus).html()
			        				$('<tr>').addClass('table-content').attr("id","tableContent"+num)
			        				.append($('<td colspan="4">').html(data.reservation.reservationContent)).css('text-align','center')
			        				
			        				.insertAfter('#'+'tableUser'+num)
		        			}else{
			        				$('<tr>').addClass('table-content').attr("id","tableContent"+num)
			       					 .append($('<td colspan="3">').html(data.reservation.reservationContent)).css('text-align','center')
			       					 .append($('<td>').html("<button class=btn-delete id=btnDelete"+num+">취소</button>"))
			       					 .insertAfter('#'+'tableUser'+num)
		        			}
	        			}else {
	        				$('#'+'tableContent'+num).remove(); 
	        			}

	        	} else {   	console.log(data.status);        	}
	          }
	        , 'json');
		
		});
	}else{
		$(document).delegate(".table-tr","click",function(event){
			
			 event.stopImmediatePropagation();
			 
			var num = $($(this)[0]).attr("id").split("tableUser")[1]-0;
			reservationNo = $( $( this ).children()[0] ).attr( "data-reservationNo" );
			rStatus=$("#tableUser"+num+" td:last").html()
		  $.post('../../json/reservation/view.do'
			        , {
			          reservationNo: reservationNo
			        }
		        , function(data){
		        	if(data.status == "success") {
		        		var hasClass = $($('#myBookData').children()[0]).children().hasClass("table-content");
		        		
		        		if(!hasClass){
		        			if(rStatus=="승인"){
		        				$('<tr>').addClass('table-content').attr("id","tableContent"+num)
		       					 .append($('<td colspan="4">').html(data.reservation.reservationContent)).css('text-align','center')
		       					 .insertAfter('#'+'tableUser'+num)
		        			}else{
		        				$('<tr>').addClass('table-content').attr("id","tableContent"+num)
		       					 .append($('<td colspan="3">').html(data.reservation.reservationContent)).css('text-align','center')
		       					 .append($('<td>').html("<button class=btn-permission id=btnPermission"+num+">승인</button>"))
		       					 .insertAfter('#'+'tableUser'+num)
		        			}
			        		
		        		} else {
		        			$('#'+'tableContent'+num).remove(); 
		        		}
		        	} else {   	console.log(data.status);        	}
		          }
		        , 'json');
		});
		}

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
	        		loadMarket(1);
	        	} else {   	console.log(data.status);        	}
	          }
	        , 'json');
	
	
	console.log("delete버튼의 값 ===>",num);
	
	console.log("버튼 눌렸다");
	alert("예약을 취소 하시겠습니까?");
});


   //**************************** 승인버튼  **********************************//
	$(document).delegate(".btn-permission","click",function(){
		var num = $($(this)[0]).attr("id").split("btnPermission")[1]-0;
		
		$.post('../../json/reservation/update.do'
		        , {
		        	reservationNo: reservationNo
		        }
	        , function(data){
	        	if(data.status == "success") {
	        		console.log(data);
	        		loadMarket(1);
	        	} else {   	console.log(data.status);        	}
	          }
	        , 'json');
	});
		
	
	//********************* btnComment클릭  *************************//
	$(document).delegate(".btn-comment","click",function(event){
		 event.stopImmediatePropagation();
		 console.log("Aaaa");
		 loadComment();
	});
	
	
	//******************** datePicker 설정 하기************************//
	$(function() {
		  $( "#datepicker" ).datepicker({dateFormat: 'yy-mm-dd'});
	});
	
	
	//******************** btnClose 클릭시에 ************************//
	$(".close").click(function(){
		$("#back").css("display", "none");
		$("#myBook").css("display", "none");
	});
	
	
	
//************************** 앞으로 가기 뒤로가기 버튼 ************************************//
	$(document).delegate("#prevBtn","click",function(){
		
		if( $( "#pageNo" ).html() > 1 ){
			loadMarket(currPageNo - 1);
		}
	});

	$(document).delegate("#nextBtn","click",function(){
		if( $( "#pageNo" ).html() < maxPageNo){
			loadMarket(currPageNo + 1);
		}else {
			alert( "마지막 페이지 입니다" );
		}
	});
	
	$(document).delegate("#btnSearch","click",function(){
		selectedDate = $( "#datepicker" ).val();
		loadMarket(1);
	});
	
	$("select").change(function () {
		selectedShop = $("#selectForm option:selected").attr("data-businessNo");
		selectedDate = null;
		loadMarket(1);
	});
	
	$("#btnRegister").click(function(){
		
		$('#commentForm').ajaxForm({
	         dataType:'json',
	             beforeSubmit: function (data, frm, opt) {
	                             alert("전송전!!");
	                             
	                             return true;
	                           },
	             success: function(responseText, statusText){
	               alert("전송 성공");
	               
	                 console.log(responseText);
	             } ,
	             error: function(){
	                 alert("에러발생!!");
	             }        
	           });
		
	});
	
	
	
	//***************************** 함수모음집 ************************************//
	function setPageNo(currPageNo, maxPageNo) {
		  window.currPageNo = currPageNo; 
		  window.maxPageNo = maxPageNo;
		  
		  $('#pageNo').html(currPageNo);
		  if (currPageNo == 1){
			  $('#prevBtn').css('display', 'none');
		  } 
		  else $('#prevBtn').css('display', '');
		  
		  if (currPageNo >= maxPageNo) $('#nextBtn').css('display', 'none');
		  else $('#nextBtn').css('display', '');
	}
	
	function loadMarket(pageNo) {
			
			$.post('../../json/reservation/list.do',
					{
					 "pageNo": pageNo,
					 "businessNo":selectedShop,
					 "type": uType,
					 "uId":uId,
					 "date": selectedDate
					 },
					function(data){
						 var bookNo = ( data.currPageNo - 1) * 3 + 1  //3: pageSize

						 yyyyMMddList(data);
						 setPageNo(data.currPageNo, data.maxPageNo);
					
						require(['text!templates/booklist-body-table.html'],function(html){
							var template = Handlebars.compile(html);
							$('#myBookContainer').html(template(data));
							
							var dataChange = $(".data-change");

							for(var i = 0; i < 3; i++ ){
								$( "#bookNo" + i ).html( bookNo ++ );
							}
							
							if(uType == 'boss'){
								$( ".header-shopName" ).html("예약자 이름");
								$(".type-user").css("display","none");
								for(var i = 0; i< data.reservations.length; i++){
									$( dataChange[i] ).html( data.reservations[i].userName);
								}
							}
							if(uType == "user"){
								$(".type-boss").css("display","none");
							}
	
						});
			     }, 'json');
	}
	
	function loadComment(){
		var data = {"reservationNo":reservationNo};

					require(['text!templates/comment-write.html'],function(html){
						var template = Handlebars.compile(html);
						$('#myBookContainer').html(template(data));
						
						$('#myBookHeaderTitle').html("후기 작성");
						$('#myBookContainer').css('height','400px');
						$('.type-boss').css("display","none");
					});
		     }



























