<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0, user-scalable=no" />

<title>HopeHoff</title>

<link rel="stylesheet" href="http://code.jquery.com/ui/1.11.2/themes/smoothness/jquery-ui.css">
<link rel='stylesheet' href='../../css/myBook/jquery-ui.css'>

<link rel='stylesheet' href="../../css/common/common.css">
<link rel='stylesheet' href="../../css/main/main.css">
<link rel="stylesheet" type="text/css" href="../../css/details/details.css">
<link rel="stylesheet" type="text/css" href="../../css/details/overlay.css">
<link rel='stylesheet' type="text/css" href='../../css/myBook/myBook.css'>
<link rel="stylesheet" type="text/css" 	href="../../css/myMarket/myMarket.css">
<link rel='stylesheet' type="text/css" href='../../css/myPage/myPage.css'>

</head>
<body>
	<div id="back"></div>
	<div id="mainBody">
		<div id="wrap">
			<div id="header">
				<div id="mobileMenu">
					<div id="mobileLeftMenu"></div>
					<a href="main.html">HopeHoff</a>
				</div>
				<div id="headerLeft">
					<div id="headerLeftTopMenu">
						<div id="btnMyPage" title="My Page"></div>
						<div id="btnBook" title="Book"></div>
						<div id="btnRecommandPlace" title="Recommand place"></div>
						<div id="btnMyShop" title="My Shop"></div>
					</div>
					<div id="headerLeftBottomMenu">[이름][사장]님께서 로그인하셨습니다.</div>
				</div>
				<div id="headerMiddle">
					<a href="main.html"><img src="../../img/main/mainLogo.png">HopeHoff</a>
				</div>
				<div id="headerRight">
					<div id="headerTopMenu" class="width-ul-style">
						<ul>
							<li><a href="#">로그아웃</a></li>
							<li><a href="../login/login.html">로그인</a></li>
							<li><a href="#">회원가입</a></li>
						</ul>
					</div>
				</div>
			</div>
			<div id="smallHeader">
				<div id="leftSmallHeader">
					<a href="main.html"><img src="../../img/main/mainLogo.png">HopeHoff</a>
				</div>
				<div id="rightSmallHeader" class="width-ul-style">
					<div class="width-ul-style">
						<ul>
								<li>[이름][사장]님</li>
								<li><a href="#">로그아웃</a></li>
								<li><a href="#" >로그인</a></li>
								<li><a href="#">회원가입</a></li>
						</ul>
					</div>
				</div>
			</div>
			
			<div id="container">
				<div id="adv">
					광고입니다
				</div>
				<div id="containerTop">
					<p id="keywordOpen">검색설정 ▼</p>
					<div id="containerKeyword">
						<div id="keywordRegion">
							<ul>
								<li><p>지역</p></li>
								<li><input type="checkbox" value="영등포" >영등포</li> 
								<li><input type="checkbox" value="강남">강남</li>
								<li><input type="checkbox" value="안양">안양</li>
							</ul>
						</div>

						<div id="keywordPlace">
							<ul>
								<li><p>장소타입</p></li>
								<li><input type="checkbox" value="룸형식">룸형식</li>
								<li><input type="checkbox" value="노래방">노래방</li>
								<li><input type="checkbox" value="포장마차">포장마차</li>
							</ul>
						</div>

						<div id="keywordPeole">
							<ul>
								<li><p>인원</p></li>
								<li><input type="checkbox" value="4인~10인">4인 ~ 10인</li>
								<li><input type="checkbox" value="10인~15명">10인 ~ 15명</li>
								<li><input type="checkbox" value="15인이상">15인 이상</li>
							</ul>
						</div>

						<div id="keywordFood">
							<ul>
								<li><p>안주류</p></li>
								<li><input type="checkbox" value="치킨">치킨 </li>
								<li><input type="checkbox" value="삼겹살">삼겹살</li>
								<li><input type="checkbox" value="족발">족발 </li>
								<!-- <li><input type="checkbox" value="회">회</li>
								<li><input type="checkbox" value="곱창">곱창</li>
								<li><input type="checkbox" value="과일">과일</li> -->
							</ul>
						</div>
					</div>
				</div>

				<div id="containerList"></div>
			</div>
			
			<div id="footer"></div>
			<div id="test" style="width:100%; height:100px">${keywords}</div>
		</div>
	</div>
	<div id="myPage"></div>
	<div id="myBook"></div>
	<div id="myMarket"></div>
	
	<script src='../../js/jquery-2.1.1.min.js'></script>
	<script src='../../js/common/common.js'></script>
	<script src='../../js/main/main.js'></script>
	<script src="../../js/jquery-ui.min.js"></script>
	
<script type="text/javascript" src="http://apis.daum.net/maps/maps3.js?apikey=d4d9b75720036a3beb504b5419e4327529360b24"></script>


</body>
</html>