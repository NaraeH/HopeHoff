$(document).ready(function(){
	
	$("#footer").load("../common/footer.html");
	
	$('#leftImg01').innerfade({
			animationtype :'fade',
			speed : 750,
			timeout: 2000,
			type : 'random',
			containerheight : '130px'
		});
		
	$('#leftImg02').innerfade({
		animationtype :'fade',
		speed : 750,
		timeout: 2000,
		type : 'random',
		containerheight : '130px'
	});
	
	$('#leftImg03').innerfade({
		animationtype :'fade',
		speed : 750,
		timeout: 2000,
		type : 'random',
		containerheight : '130px'
	});
	
});