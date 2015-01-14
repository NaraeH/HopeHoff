------- userTable db 삽입문 ----

insert into USER(UID,UNAME,UTYPE,UPASSWORD,UPHONE)
values('u01','홍길동','user','1111','010-1111-1111');

insert into USER(UID,UNAME,UTYPE,UPASSWORD,UPHONE)
values('u02','임꺽정','user','2222','010-2222-2222');

insert into USER(UID,UNAME,UTYPE,UPASSWORD,UPHONE)
values('u03','유관순','user','3333','010-3333-3333');

insert into USER(UID,UNAME,UTYPE,UPASSWORD,UPHONE)
values('u04','조현권','user','4444','010-9263-9665');


insert into USER(UID,UNAME,UTYPE,UPASSWORD,UPHONE)
values('b01','장길산','boss','5555','010-5555-5555');

insert into USER(UID,UNAME,UTYPE,UPASSWORD,UPHONE)
values('b02','김좌진','boss','6666','010-6666-6666');

insert into USER(UID,UNAME,UTYPE,UPASSWORD,UPHONE)
values('b03','안창호','boss','7777','010-7777-7777');

insert into USER(UID,UNAME,UTYPE,UPASSWORD,UPHONE)
values('b04','염정우','boss','8888','010-8888-8888');




----------shopTable insert문-----------------------
insert into SHOP(BBNO,UID,SNAME,SADDR,SPHONE,STIME,SINTRO,SINFO,SAREA,STYPE,SSNACK)

	insert into SHOP(BBNO,UID,SNAME,SINTROADDR,SDETAILADDR,SPHONE,STIME,SINTRO,SINFO,SAREA,STYPE,SSNACK)
	values('124-86-06376',
		'b01',
		'와라와라',
		'서울시 강남구',
		'서울 강남구 역삼동 8221번지 강남A타워 지하1층',
		'02-558-1676',
		'15:00 ~ 05:00',
		'강남 와라와라로 와라와라!',
		'더 세련되어지고 더 아늑해진 우리만의 공간, 고객을 사랑하는 마음으로 기다리겠습니다. 누룽지탕, 해물짬뽕탕, 치즈해물떡볶이 등  맛있어요',
		'강남',
		'퓨전술집',
		'퓨전안주');
		

	insert into SHOP(BBNO,UID,SNAME,SINTROADDR,SDETAILADDR,SPHONE,STIME,SINTRO,SINFO,SAREA,STYPE,SSNACK)
	values('203-81-63199',
		'b02',
		'준코',
		'서울시 서초구',
		'서울시 서초구 서초동 1309-5지하 1층',
		'02-595-3235',
		'18:00 ~ 09:00',
		'술마시고 노래하고 춤을춰! 하나가득 준코!',
		'더 세련되어지고 더 아늑해진 우리만의 공간, 고객을 사랑하는 마음으로 기다리겠습니다. 소주, 호프, 안주 판매 및 노래방 운영.',
		'강남',
		'룸형식',
		'퓨전안주');

		
	insert into SHOP(BBNO,UID,SNAME,SINTROADDR,SDETAILADDR,SPHONE,STIME,SINTRO,SINFO,SAREA,STYPE,SSNACK)
	values('408-81-28536',
		'b03',
		'한신포차',
		'서울시 강남구',
		'서울 특별시 강남구 강남대로 8길 11',
		'02-515-3199',
		'18:00 ~ 09:00',
		'한번먹고 두번먹고 자꾸먹고 싶네~',
		'전국에 누구나 함께 올수 있는 한신포차,세계인의 입맛을 사로잡은 닭발, 대한민국 대표 포장마차,
		 휴무일, 주차여부는 매장 상황에 따라 달라질 수 있으니, 매장에 직접 전화하여 확인해 주시기 바랍니다',
		'강남',
		'포차',
		'퓨전안주');
		
	insert into SHOP(BBNO,UID,SNAME,SINTROADDR,SDETAILADDR,SPHONE,STIME,SINTRO,SINFO,SAREA,STYPE,SSNACK)
	values('211-87-14784',
		'b04',
		'칠성포차',
		'서울시 영등포구',
		'서울특별시 영등포구 영등포동3가 9-20',
		'02-2068-8480',
		'18:00 ~ 04:00',
		'일이삼사오육칠성포차! 마약찜닭!',
		'고객은 관객처럼 즐기고, 매장은 무대처럼 가꾸고 , 직원은 배우처럼 일하자. 마약찜닭, 주류 판매, 포장마차 입니다 많이 사랑해주세요. ',
		'영등포',
		'포차',
		'퓨전안주');
		
	insert into SHOP(BBNO,UID,SNAME,SINTROADDR,SDETAILADDR,SPHONE,STIME,SINTRO,SINFO,SAREA,STYPE,SSNACK)
	values('128-31-85241',
		'b04',
		'달동네포차',
		'서울시 영등포구',
		'서울 특별시 영등포구 문래동3가 55-5 로데오왁 1층',
		'02-2676-9911',
		'18:00 ~ 09:00',
		'7,80년대 추억 복고풍의 달동네 포차!',
		'7,80년대 드라마에서 나올만한 테마의 술집 ,영등포 최고의 술집이 되겠습니다.든든한 서비스를 챙겨드리겠습니다.',
		'영등포',
		'포차',
		'퓨전안주');
		
	insert into SHOP(BBNO,UID,SNAME,SINTROADDR,SDETAILADDR,SPHONE,STIME,SINTRO,SINFO,SAREA,STYPE,SSNACK)
	values('220-80-83576',
	'b01',
	'꾼(KKUNNORI)',
	'서울시 강남구',
	'서울시 서초구 서초동 1907-29번지 수호빌딩',
	'02-535-9065',
	'18:00 ~ 09:00',
	'진정한 술꾼은 꾼으로 모여라!',
	'테이블마다 각각의 독립된 공간에서 즐기는 룸타입의 호텔식 퓨전주점 꾼노리입니다.',
	'강남',
	'룸형식',
	'퓨전안주');

	insert into SHOP(BBNO,UID,SNAME,SINTROADDR,SDETAILADDR,SPHONE,STIME,SINTRO,SINFO,SAREA,STYPE,SSNACK)
	values('503-85-21617',
	'b02',
	'삼거리포차',
	'서울시 강남구',
	'서울특별시 서초구 서초동 1308-4 실버타운',
	'02-532-1904',
	'19:00 ~ 06:00',
	'거리도 모인다 우리도 모이자 삼거리포차!',
	'80s와 90s을 오묘하게 이어놓은 촬영장 컨셉의 삼거리포차입니다.',
	'강남',
	'포차',
	'퓨전안주');
	
	insert into SHOP(BBNO,UID,SNAME,SINTROADDR,SDETAILADDR,SPHONE,STIME,SINTRO,SINFO,SAREA,STYPE,SSNACK)
	values('303-90-56632',
	'b03',
	'시바라구',
	'서울시 강남구',
	'서울 특별시 서초구 서초4동 1317-11',
	'02-3477-0777',
	'11:30 ~ 02:00',
	'이자카야 주점은 시바라구! 욕 아니에요.',
	'시바라구는 수제 해산물 전문 주점으로써 매일 싱싱한 재료를 이용하여 최상의 서비스를 제공하고 있습니다. 
	  단체고객을 위한 넓은 좌석이 마련되어 있사오니 많은 이용 부탁드립니다',
	'강남',
	'이자카야',
	'퓨전안주');


		
		


-------------- menu database  --------------------------


/********************한신포차***********************/
insert into MENU(MID,BBNO,MNAME,MPRICE,MPHOTO)
values(1,'408-81-28536','한신닭발','15000','hansin-menu1.jpg');

insert into MENU(MID,BBNO,MNAME,MPRICE,MPHOTO)
values(2,'408-81-28536','한신통닭','10000','hansin-menu2.jpg');

insert into MENU(MID,BBNO,MNAME,MPRICE,MPHOTO)
values(3,'408-81-28536','해물모둠볶음','18000','hansin-menu3.jpg');

insert into MENU(MID,BBNO,MNAME,MPRICE,MPHOTO)
values(4,'408-81-28536','해물떡볶이','15000','hansin-menu4.jpg');

/********************준코***********************/

insert into MENU(MID,BBNO,MNAME,MPRICE,MPHOTO)
	values(5,'203-81-63199','꿔바로탕수육','26500','junco-menu1.jpg');
	
	insert into MENU(MID,BBNO,MNAME,MPRICE,MPHOTO)
	values(6,'203-81-63199','닭모래통마늘구이','24500','junco-menu2.jpg');
	
	insert into MENU(MID,BBNO,MNAME,MPRICE,MPHOTO)
	values(7,'203-81-63199','삼겹두부김치','24500','junco-menu3.jpg');
	
	insert into MENU(MID,BBNO,MNAME,MPRICE,MPHOTO)
	values(8,'203-81-63199','수제모듬꼬치어묵','27500','junco-menu4.jpg');

/*********************와라와라**********************/
insert into MENU(MID,BBNO,MNAME,MPRICE,MPHOTO)
values(9,'124-86-06376','꼬치어묵전골','18500','warawara-menu1.jpg');

insert into MENU(MID,BBNO,MNAME,MPRICE,MPHOTO)
values(10,'124-86-06376','알마니오돌뼈','19800','warawara-menu2.jpg');

insert into MENU(MID,BBNO,MNAME,MPRICE,MPHOTO)
values(11,'124-86-06376','크림치즈퐁닭','17500','warawara-menu3.jpg');

insert into MENU(MID,BBNO,MNAME,MPRICE,MPHOTO)
values(12,'124-86-06376','해물짬뽕탕','19800','warawara-menu4.jpg');

/*********************칠성포차**********************/

insert into MENU(MID,BBNO,MNAME,MPRICE,MPHOTO)
values(13,'211-87-14784','오돌뼈주먹밥','15000','seven-menu4.jpg');

insert into MENU(MID,BBNO,MNAME,MPRICE,MPHOTO)
values(14,'211-87-14784','치즈에퐁닭','16500','seven-menu1.jpg');

insert into MENU(MID,BBNO,MNAME,MPRICE,MPHOTO)
values(15,'211-87-14784','마약찜닭','21000','seven-menu2.jpg');

insert into MENU(MID,BBNO,MNAME,MPRICE,MPHOTO)
values(16,'211-87-14784','돼지껍데기','16000','seven-menu3.jpg');

/****************달동네***************************/

insert into MENU(MID,BBNO,MNAME,MPRICE,MPHOTO)
values(17,'128-31-85241','치즈등갈비','22000','moon-menu1.jpg');

insert into MENU(MID,BBNO,MNAME,MPRICE,MPHOTO)
values(18,'128-31-85241','육사시미','17000','moon-menu2.jpg');

insert into MENU(MID,BBNO,MNAME,MPRICE,MPHOTO)
values(19,'128-31-85241','해물파전','12000','moon-menu3.jpg');

insert into MENU(MID,BBNO,MNAME,MPRICE,MPHOTO)
values(20,'128-31-85241','찜닭','17000','moon-menu4.jpg');

/****************** 꾼노리 *******************************/

insert into MENU(MID,BBNO,MNAME,MPRICE,MPHOTO)
values(21,'220-80-83576','데리야끼치킨','17000','kkun-menu1.jpg');

insert into MENU(MID,BBNO,MNAME,MPRICE,MPHOTO)
values(22,'220-80-83576','칠리탕수육','16000','kkun-menu2.jpg');

insert into MENU(MID,BBNO,MNAME,MPRICE,MPHOTO)
values(23,'220-80-83576','제육볶음','16000','kkun-menu3.jpg');

insert into MENU(MID,BBNO,MNAME,MPRICE,MPHOTO)
values(24,'220-80-83576','까르보나라치킨','17000','kkun-menu4.jpg');

/********************* 삼거리포차 **********************************/

insert into MENU(MID,BBNO,MNAME,MPRICE,MPHOTO)
values(25,'503-85-21617','골뱅이무침','19000','sam-menu1.jpg');

insert into MENU(MID,BBNO,MNAME,MPRICE,MPHOTO)
values(26,'503-85-21617','두부김치','18000','sam-menu2.jpg');

insert into MENU(MID,BBNO,MNAME,MPRICE,MPHOTO)
values(27,'503-85-21617','매콤한오돌뼈','20000','sam-menu3.jpg');

insert into MENU(MID,BBNO,MNAME,MPRICE,MPHOTO)
values(28,'503-85-21617','오뎅탕','18000','sam-menu4.jpg')

/******************** 시바라구 **********************************/
insert into MENU(MID,BBNO,MNAME,MPRICE,MPHOTO)
values(29,'303-90-56632','계란탕','10000','siba-menu1.jpg');

insert into MENU(MID,BBNO,MNAME,MPRICE,MPHOTO)
values(30,'303-90-56632','나가사키짬뽕','20000','siba-menu2.jpg');

insert into MENU(MID,BBNO,MNAME,MPRICE,MPHOTO)
values(31,'303-90-56632','타코와사비','8000','siba-menu3.jpg');

insert into MENU(MID,BBNO,MNAME,MPRICE,MPHOTO)
values(32,'303-90-56632','해물볶음 우동','18000','siba-menu4.jpg')




------------------ board data --------------------------------
insert into BOARD(RNO,BCONTENT,BDATE,BPHOTO)
values(1,'닭발맛이 정말 맛있어용 헤헤헤헤','2014-12-24','boardPhoto1.jpg');
insert into BOARD(RNO,BCONTENT,BDATE,BPHOTO)
values(2,'사장님도 친절하고 서비스도 짱짱맨!','2014-12-26','boardPhoto2.jpg');
insert into BOARD(RNO,BCONTENT,BDATE,BPHOTO)
values(3,'사진과는 많이 다릅니다 맛도 별로에요.','2014-12-30','boardPhoto3.jpg');


------------------ reservation data --------------------------
/*--------------------------------------------------*/
insert into RESERVATION(BBNO,RDATE,RCONTENT,UID)
values('124-86-06376','2014-12-28','오늘 오후 8시 5명 예약 가능한가요?','u01');
insert into RESERVATION(BBNO,RDATE,RCONTENT,UID)
values('203-81-63199','2014-12-28','오늘 오후 8시 5명 예약 가능한가요?','u01');
insert into RESERVATION(BBNO,RDATE,RCONTENT,UID)
values('408-81-28536','2014-12-28','오늘 오후 8시 5명 예약 가능한가요?','u01');
insert into RESERVATION(BBNO,RDATE,RCONTENT,UID)
values('211-87-14784','2014-12-28','오늘 오후 8시 5명 예약 가능한가요?','u01');
insert into RESERVATION(BBNO,RDATE,RCONTENT,UID)
values('128-31-85241','2014-12-28','오늘 오후 8시 5명 예약 가능한가요?','u01');


/*--------------------------------------------------*/

insert into RESERVATION(RDATE,RCONTENT,UID)
values('124-86-06376','2014-12-28','오늘 오후 8시 5명 예약 가능한가요?','u02');
insert into RESERVATION(BBNO,RDATE,RCONTENT,UID)
values('203-81-63199','2014-12-28','오늘 오후 8시 5명 예약 가능한가요?','u02');
insert into RESERVATION(BBNO,RDATE,RCONTENT,UID)
values('408-81-28536','2014-12-28','오늘 오후 8시 5명 예약 가능한가요?','u02');
insert into RESERVATION(BBNO,RDATE,RCONTENT,UID)
values('211-87-14784','2014-12-28','오늘 오후 8시 5명 예약 가능한가요?','u02');
insert into RESERVATION(BBNO,RDATE,RCONTENT,UID)
values('128-31-85241','2014-12-28','오늘 오후 8시 5명 예약 가능한가요?','u02');


/*--------------------------------------------------*/
insert into RESERVATION(BBNO,RDATE,RCONTENT,UID)
values('124-86-06376','2014-12-28','오늘 오후 8시 5명 예약 가능한가요?','u03');
insert into RESERVATION(BBNO,RDATE,RCONTENT,UID)
values('203-81-63199','2014-12-28','오늘 오후 8시 5명 예약 가능한가요?','u03');
insert into RESERVATION(BBNO,RDATE,RCONTENT,UID)
values('408-81-28536','2014-12-28','오늘 오후 8시 5명 예약 가능한가요?','u03');
insert into RESERVATION(BBNO,RDATE,RCONTENT,UID)
values('211-87-14784','2014-12-28','오늘 오후 8시 5명 예약 가능한가요?','u03');
insert into RESERVATION(BBNO,RDATE,RCONTENT,UID)
values('128-31-85241','2014-12-28','오늘 오후 8시 5명 예약 가능한가요?','u03');


/*----------------------------------------------------*/
insert into RESERVATION(BBNO,RDATE,RCONTENT,UID)
values('124-86-06376','2014-12-28','오늘 오후 8시 5명 예약 가능한가요?','u04');
insert into RESERVATION(BBNO,RDATE,RCONTENT,UID)
values('203-81-63199','2014-12-28','오늘 오후 8시 5명 예약 가능한가요?','u04');
insert into RESERVATION(BBNO,RDATE,RCONTENT,UID)
values('408-81-28536','2014-12-28','오늘 오후 8시 5명 예약 가능한가요?','u04');
insert into RESERVATION(BBNO,RDATE,RCONTENT,UID)
values('211-87-14784','2014-12-28','오늘 오후 8시 5명 예약 가능한가요?','u04');
insert into RESERVATION(BBNO,RDATE,RCONTENT,UID)
values('128-31-85241','2014-12-28','오늘 오후 8시 5명 예약 가능한가요?','u04');



------------------ shopPhoto data --------------------------
insert into SHOPPHOTO(BBNO,MAINPHOTO,DETAILPHOTO1,DETAILPHOTO2,DETAILPHOTO3)
values('408-81-28536','hansin-main.jpg','hansin-back1.jpg','hansin-back2.jpg','hansin-back3.jpg');

insert into SHOPPHOTO(BBNO,MAINPHOTO,DETAILPHOTO1,DETAILPHOTO2,DETAILPHOTO3)
values('203-81-63199','junco-main.jpg','junco-detail1.jpg','junco-detail2.jpg','junco-detail3.jpg');

insert into SHOPPHOTO(BBNO,MAINPHOTO,DETAILPHOTO1,DETAILPHOTO2,DETAILPHOTO3)
values('124-86-06376','wara-main.jpg','wara-detail1.jpg','wara-detail2.jpg','wara-detail3.jpg');

insert into SHOPPHOTO(BBNO,MAINPHOTO,DETAILPHOTO1,DETAILPHOTO2,DETAILPHOTO3)
values('211-87-14784','seven-main.jpg','seven-detail1.jpg','seven-detail2.jpg','seven-detail3.jpg');

insert into SHOPPHOTO(BBNO,MAINPHOTO,DETAILPHOTO1,DETAILPHOTO2,DETAILPHOTO3)
values('128-31-85241','moon-main.jpg','moon-detail1.jpg','moon-detail2.jpg','moon-detail3.jpg');

insert into SHOPPHOTO(BBNO,MAINPHOTO,DETAILPHOTO1,DETAILPHOTO2,DETAILPHOTO3)
values('220-80-83576','kkun-main.jpg','kkun-detail1.jpg','kkun-detail2.jpg','kkun-detail3.jpg');

insert into SHOPPHOTO(BBNO,MAINPHOTO,DETAILPHOTO1,DETAILPHOTO2,DETAILPHOTO3)
values('503-85-21617','sam-main.jpg','sam-detail1.jpg','sam-detail2.jpg','sam-detail3.jpg');

insert into SHOPPHOTO(BBNO,MAINPHOTO,DETAILPHOTO1,DETAILPHOTO2,DETAILPHOTO3)
values('303-90-56632','siba-main.jpg','siba-detail1.jpg','siba-detail2.jpg','siba-detail3.jpg');






------------------------------데이터 수정---------------------------

update hopehoff.shop set sintro='추억 복고풍의 달동네 포차!' where bbno='128-31-85241';
update hopehoff.shop set sintro='술마시고 노래해! 하나가득 준코!' where bbno='203-81-63199';



----------------------------2015.01.14 (DB수정 쿼리)---------------------------------
ALTER TABLE SHOP CHANGE COLUMN SADDR SDETAILADDR VARCHAR(255);
ALTER TABLE SHOP ADD COLUMN SINTROADDR VARCHAR(255);

UPDATE SHOP SET SINTROADDR = '서울시 강남구' WHERE BBNO = '124-86-06376';
UPDATE SHOP SET SINTROADDR = '서울시 서초구' WHERE BBNO = '203-81-63199';
UPDATE SHOP SET SINTROADDR = '서울시 강남구' WHERE BBNO = '408-81-28536';
UPDATE SHOP SET SINTROADDR = '서울시 영등포구' WHERE BBNO = '211-87-14784';
UPDATE SHOP SET SINTROADDR = '서울시 영등포구' WHERE BBNO = '128-31-85241';
UPDATE SHOP SET SINTROADDR = '서울시 강남구' WHERE BBNO = '220-80-83576';
UPDATE SHOP SET SINTROADDR = '서울시 강남구' WHERE BBNO = '503-85-21617';
UPDATE SHOP SET SINTROADDR = '서울시 강남구' WHERE BBNO = '303-90-56632';

