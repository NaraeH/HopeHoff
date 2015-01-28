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
values(28,'503-85-21617','오뎅탕','18000','sam-menu4.jpg');

/******************** 시바라구 **********************************/
insert into MENU(MID,BBNO,MNAME,MPRICE,MPHOTO)
values(29,'303-90-56632','계란탕','10000','siba-menu1.jpg');

insert into MENU(MID,BBNO,MNAME,MPRICE,MPHOTO)
values(30,'303-90-56632','나가사키짬뽕','20000','siba-menu2.jpg');

insert into MENU(MID,BBNO,MNAME,MPRICE,MPHOTO)
values(31,'303-90-56632','타코와사비','8000','siba-menu3.jpg');

insert into MENU(MID,BBNO,MNAME,MPRICE,MPHOTO)
values(32,'303-90-56632','해물볶음 우동','18000','siba-menu4.jpg');




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



----------------------------2015.01.15 (DB수정 쿼리)---------------------------------
UPDATE SHOP SET SINTRO='거리도 모인다 우리도 모이자!' WHERE BBNO='503-85-21617';
UPDATE SHOP SET SINTRO='술꾼은 꾼으로 모여라!' WHERE BBNO='220-80-83576';
UPDATE SHOP SET SINTRO='이자카야 주점은 시바라구! 욕 아님' WHERE BBNO='303-90-56632';


----------------------------2015.01.19( 타입수정)---------------------------------
ALTER TABLE RESERVATION CHANGE COLUMN RDATE RDATE DATETIME;
update SHOP set SINTROADDR = '서울시 서초구' where SPHONE='02-535-9065';



---------------------2015.01.21(디비 추가)----------------------------------------

insert into SHOP(BBNO,UID,SNAME,SINTROADDR,SDETAILADDR,SPHONE,STIME,SINTRO,SINFO,SAREA,STYPE,SSNACK)
	values('605-81-38178',
	'b04',
	'오븐에 빠진 닭',
	'서울 영등포구',
	'서울 영등포구 영등포동3가 3-4 1층 102-1호',
	'02-2634-5892',
	'11:30 ~ 02:00',
	'오빠닭! 너도 나한테 빠져볼래?.',
	'대한민국 건강을 생각하는 대표브랜드 맛과 건강을 동시에 생각하는 오븐에 빠진 닭입니다!',
	'영등포',
	'홀',
	'치킨');
	
	insert into SHOP(BBNO,UID,SNAME,SINTROADDR,SDETAILADDR,SPHONE,STIME,SINTRO,SINFO,SAREA,STYPE,SSNACK)
	values('201-86-13140',
	'b01',
	'술선생 잭',
	'서울 영등포구',
	'서울시 영등포구 영등포동3가 4-6  2, 3층',
	'02 -2676-3261',
	'11:30 ~ 02:00',
	'술의 주도는 술선생 잭으로부터!',
	'영등포에 위치하는 룸호프 소주방 메로나주와, 스크류 키스를 직접 만들어 먹을수 있는 장소
		다트 게임도 사용할 수 있습니다.',
	'영등포',
	'룸타입',
	'퓨전술집');

	insert into SHOP(BBNO,UID,SNAME,SINTROADDR,SDETAILADDR,SPHONE,STIME,SINTRO,SINFO,SAREA,STYPE,SSNACK)
	values('303-90-56337',
	'b02',
	'난장',
	'서울 영등포구',
	'서울 영등포구 영등포동3가',
	'02 -2676-3261',
	'11:30 ~ 02:00',
	'이름은 난장이지만 술집 난장은 안되요!',
	'맛있는 요리와 이야기가 있는 포자카야!',
	'영등포',
	'이자카야',
	'퓨전안주');
	
	insert into SHOP(BBNO,UID,SNAME,SINTROADDR,SDETAILADDR,SPHONE,STIME,SINTRO,SINFO,SAREA,STYPE,SSNACK)
	values('130-11-09313',
	'b04',
	'놀란치킨',
	'서울 강남구',
	'서울특별시 서초구 서초동 1327-15 화봉빌딩 1층',
	'02-521-5092',
	'17:00 ~ 03:00',
	'모두들 먹고 한번씩 놀라는 놀란치킨',
	'서울특별시 서초구 서초동 위치, 치킨 전문점 마늘치킨, 양파치킨에 환장하는 맛을 보여드립니다.',
	'강남',
	'홀',
	'치킨');
	
	-------------------------------
	/********************** 오빠닭 ******************************/
insert into MENU(MID,BBNO,MNAME,MPRICE,MPHOTO)
values(32,'605-81-38178','크리스피 베이크','15900','obbadak-menu1.jpg');

insert into MENU(MID,BBNO,MNAME,MPRICE,MPHOTO)
values(33,'605-81-38178','오리지널 로스트','18000','obbadak-menu2.jpg');

insert into MENU(MID,BBNO,MNAME,MPRICE,MPHOTO)
values(34,'605-81-38178','반반세트','18900','obbadak-menu3.jpg');

insert into MENU(MID,BBNO,MNAME,MPRICE,MPHOTO)
values(35,'605-81-38178','오리지널 로스트','18000','obbadak-menu4.jpg');

/********************** 술선생 잭 ********************/

insert into MENU(MID,BBNO,MNAME,MPRICE,MPHOTO)
values(36,'201-86-13140','독일 소세지','18000','sul-menu1.jpg');

insert into MENU(MID,BBNO,MNAME,MPRICE,MPHOTO)
values(37,'201-86-13140','골뱅이','18000','sul-menu2.jpg');

insert into MENU(MID,BBNO,MNAME,MPRICE,MPHOTO)
values(38,'201-86-13140','훈제삼겹부추 ','15500','sul-menu3.jpg');

insert into MENU(MID,BBNO,MNAME,MPRICE,MPHOTO)
values(39,'201-86-13140','닭다리살 샐러드','15000','sul-menu4.jpg');

/*********************** 난장 ******************/

insert into MENU(MID,BBNO,MNAME,MPRICE,MPHOTO)
values(40,'303-90-56337','데리야끼 꼬치','12000','nanjang-menu1.jpg');

insert into MENU(MID,BBNO,MNAME,MPRICE,MPHOTO)
values(41,'303-90-56337','모듬꼬치','18000','nanjang-menu2.jpg');

insert into MENU(MID,BBNO,MNAME,MPRICE,MPHOTO)
values(42,'303-90-56337','짬뽕탕 ','15500','nanjang-menu3.jpg');

insert into MENU(MID,BBNO,MNAME,MPRICE,MPHOTO)
values(43,'303-90-56337','치즈 불닭','18000','nanjang-menu4.jpg');

/******************** 놀란치킨 **************************/
insert into MENU(MID,BBNO,MNAME,MPRICE,MPHOTO)
values(44,'130-11-09313','마늘치킨과골뱅이','18000','nollan-menu1.jpg');

insert into MENU(MID,BBNO,MNAME,MPRICE,MPHOTO)
values(45,'130-11-09313','후라이드치킨','16000','nollan-menu2.jpg');

insert into MENU(MID,BBNO,MNAME,MPRICE,MPHOTO)
values(46,'130-11-09313','어니언치킨 ','18000','nollan-menu3.jpg');

insert into MENU(MID,BBNO,MNAME,MPRICE,MPHOTO)
values(47,'130-11-09313','순살 고추 양념치킨','18000','nollan-menu4.jpg');

-------------------------
insert into SHOPPHOTO(BBNO,MAINPHOTO,DETAILPHOTO1,DETAILPHOTO2,DETAILPHOTO3)
values('605-81-38178','obbadak-main.jpg','obbadak-detail1.jpg','obbadak-detail2.jpg','obbadak-detail3.jpg');

insert into SHOPPHOTO(BBNO,MAINPHOTO,DETAILPHOTO1,DETAILPHOTO2,DETAILPHOTO3)
values('201-86-13140','sul-main.jpg','sul-detail1.jpg','sul-detail2.jpg','sul-detail3.jpg');

insert into SHOPPHOTO(BBNO,MAINPHOTO,DETAILPHOTO1,DETAILPHOTO2,DETAILPHOTO3)
values('303-90-56337','nanjang-main.jpg','nanjang-detail1.jpg','nanjang-detail2.jpg','nanjang-detail3.jpg');

insert into SHOPPHOTO(BBNO,MAINPHOTO,DETAILPHOTO1,DETAILPHOTO2,DETAILPHOTO3)
values('130-11-09313','nollan-main.jpg','nollan-detail1.jpg','nollan-detail2.jpg','nollan-detail3.jpg');


----------------------------2015.1.22----DB 추가 (오늘 축구 이겼당!!!!!!ㅋㅋㅋㅋㅋ)-------------------------
insert into SHOP(BBNO,UID,SNAME,SINTROADDR,SDETAILADDR,SPHONE,STIME,SINTRO,SINFO,SAREA,STYPE,SSNACK)
	values('555-75-25271',
	'b04',
	'봉구비어 안양1번가점',
	'경기도 안양',
	'경기도 안양시 만안구 안양동 674-22 지하1층',
	'031-900-0909',
	'05:30~02:00',
	'요즘대세 봉구비어!',
	'감튀, 치즈스틱과 크림생맥주의 환상적인 조합을 즐겨보세요!',
	'안양',
	'홀',
	'치킨');
	
insert into SHOP(BBNO,UID,SNAME,SINTROADDR,SDETAILADDR,SPHONE,STIME,SINTRO,SINFO,SAREA,STYPE,SSNACK)
	values('885-39-23464',
	'b01',
	'더후라이팬 안양1번가점',
	'경기도 안양',
	'경기도 안양시 만안구 안양1동 674-68',
	'031-445-7997',
	'PM 05:00 ~ AM 02:00',
	'감자칩과 치맥 짱',
	'여러가지 메뉴보다는 제대로 맛을 낸 메뉴에 집중하여 성업 중에 있습니다. 신선한 재료로 소비자를 감동시킵니다.',
	'안양',
	'홀',
	'치킨');
	
insert into SHOP(BBNO,UID,SNAME,SINTROADDR,SDETAILADDR,SPHONE,STIME,SINTRO,SINFO,SAREA,STYPE,SSNACK)
	values('365-16-54110',
	'b02',
	'수다포차',
	'경기도 안양',
	'경기 안양시 만안구 안양1동 674-97번지 2층',
	'031-449-7773',
	'PM 05:00 ~ AM 05:00',
	'수다로 24시간이 모자라.',
	'테이블 당 라면 하나 서비스! 계란후라이도 직접 해먹는 재미까지^^',
	'안양',
	'룸형식',
	'퓨전안주');

insert into SHOP(BBNO,UID,SNAME,SINTROADDR,SDETAILADDR,SPHONE,STIME,SINTRO,SINFO,SAREA,STYPE,SSNACK)
	values('707-25-96307',
	'b02',
	'피쉬앤그릴',
	'서울 영등포구',
	'서울특별시 영등포구 영등포동 3가 16',
	'02-2068-9943',
	'PM 05:00 ~ AM 04:00',
	'11년째 피쉬앤그릴과 연애중',
	'맛에 대한 상상력 피쉬&그릴이 맛있는 이유입니다. 인기있는 스마일 감자튀김을 만나보세요!',
	'영등포',
	'홀',
	'퓨전안주');
	
	/***************봉구비어****************/
insert into MENU(MID,BBNO,MNAME,MPRICE,MPHOTO)
values(48,'555-75-25271','육덕포','7000','bong9-menu1.jpg');

insert into MENU(MID,BBNO,MNAME,MPRICE,MPHOTO)
values(49,'555-75-25271','감자튀김(큰넘)','5000','bong9-menu2.jpg');

insert into MENU(MID,BBNO,MNAME,MPRICE,MPHOTO)
values(50,'555-75-25271','쉬림프 고로케 ','4000','bong9-menu3.jpg');

insert into MENU(MID,BBNO,MNAME,MPRICE,MPHOTO)
values(51,'555-75-25271','수제 롱치즈스틱','2000','bong9-menu4.jpg');


/********************the FryPan****************/
insert into MENU(MID,BBNO,MNAME,MPRICE,MPHOTO)
values(52,'885-39-23464','안심 후라이드 치킨','16800','frypan-menu1.jpg');

insert into MENU(MID,BBNO,MNAME,MPRICE,MPHOTO)
values(53,'885-39-23464','후팬','7500','frypan-menu2.jpg');

insert into MENU(MID,BBNO,MNAME,MPRICE,MPHOTO)
values(54,'885-39-23464','잭B','14500','frypan-menu3.jpg');

insert into MENU(MID,BBNO,MNAME,MPRICE,MPHOTO)
values(55,'885-39-23464','양념치킨','15800','frypan-menu4.jpg');

/************ suda 포차***************/
insert into MENU(MID,BBNO,MNAME,MPRICE,MPHOTO)
values(56,'365-16-54110','해물누룽지탕','16000','suda-menu1.jpg');

insert into MENU(MID,BBNO,MNAME,MPRICE,MPHOTO)
values(57,'365-16-54110','통두부제육철판','15000','suda-menu2.jpg');

insert into MENU(MID,BBNO,MNAME,MPRICE,MPHOTO)
values(58,'365-16-54110','새우튀김','7500','suda-menu3.jpg');

insert into MENU(MID,BBNO,MNAME,MPRICE,MPHOTO)
values(59,'365-16-54110','쭈꾸미삼겹철판','16000','suda-menu4.jpg');

/************  FISH and GRILL**************/
insert into MENU(MID,BBNO,MNAME,MPRICE,MPHOTO)
values(60,'707-25-96307','치즈불닭','15000','fish-menu1.jpg');

insert into MENU(MID,BBNO,MNAME,MPRICE,MPHOTO)
values(61,'707-25-96307','부타부타2','17000','fish-menu2.jpg');

insert into MENU(MID,BBNO,MNAME,MPRICE,MPHOTO)
values(62,'707-25-96307','별난포테이토콤보','9500','fish-menu3.jpg');

insert into MENU(MID,BBNO,MNAME,MPRICE,MPHOTO)
values(63,'707-25-96307','아시아해물탕','16000','fish-menu4.jpg');
----------------
insert into SHOPPHOTO(BBNO,MAINPHOTO,DETAILPHOTO1,DETAILPHOTO2,DETAILPHOTO3)
values('555-75-25271','bong9-main.jpg','bong9-detail1.jpg','bong9-detail2.jpg','bong9-detail3.jpg');

insert into SHOPPHOTO(BBNO,MAINPHOTO,DETAILPHOTO1,DETAILPHOTO2,DETAILPHOTO3)
values('885-39-23464','frypan-main.jpg','frypan-detail1.jpg','frypan-detail2.jpg','frypan-detail3.jpg');

insert into SHOPPHOTO(BBNO,MAINPHOTO,DETAILPHOTO1,DETAILPHOTO2,DETAILPHOTO3)
values('365-16-54110','suda-main.jpg','suda-detail1.jpg','suda-detail2.jpg','suda-detail3.jpg');

insert into SHOPPHOTO(BBNO,MAINPHOTO,DETAILPHOTO1,DETAILPHOTO2,DETAILPHOTO3)
values('707-25-96307','fish-main.jpg','fish-detail1.jpg','fish-detail2.jpg','fish-detail3.jpg');

----------후기 추가욤-------
insert into BOARD(RNO,BCONTENT,BDATE,BPHOTO)
values(4,'양이 별로...없어...','2015-01-20','boardPhoto1.jpg');
insert into BOARD(RNO,BCONTENT,BDATE,BPHOTO)
values(5,'위생이 엉망이구만!! 근데 맛있음 ㅋㅋㅋ','2015-01-21','boardPhoto2.jpg');
insert into BOARD(RNO,BCONTENT,BDATE,BPHOTO)
values(6,'제가 원했던 맛입니다!!!!!','2015-01-22','boardPhoto3.jpg');


update SHOP set SINTRO="모두들 먹고 한번씩 놀란 그 치킨" where SNAME="놀란치킨";
update SHOP set SINTRO="너도 오빠닭에 빠져볼래?" where SNAME="오븐에 빠진 닭";

--------------------( 2015. 1. 23  DB update~)---------------------
insert into BOARD(RNO,BCONTENT,BDATE,BPHOTO)
values(7,'분위가 굿굿 넘 좋앙','2015-01-22','boardPhoto1.jpg');
insert into BOARD(RNO,BCONTENT,BDATE,BPHOTO)
values(8,'여자화장실 넘 더러워요..','2015-01-23','boardPhoto2.jpg');
insert into BOARD(RNO,BCONTENT,BDATE,BPHOTO)
values(9,'최악이다-_-','2015-01-23','boardPhoto3.jpg');
insert into BOARD(RNO,BCONTENT,BDATE,BPHOTO)
values(10,'자주 와야겠네요 ^*^.','2015-01-23','boardPhoto1.jpg');
insert into BOARD(RNO,BCONTENT,BDATE,BPHOTO)
values(11,'조명이 넘 어두워요 밝혀줭!','2015-01-23','boardPhoto2.jpg');
insert into BOARD(RNO,BCONTENT,BDATE,BPHOTO)
values(12,'무난하네요 ~ 직원분들도 친절하시구요^^굿','2015-01-23','boardPhoto3.jpg');
insert into BOARD(RNO,BCONTENT,BDATE,BPHOTO)
values(13,'깔끔하이 좋구만~~','2015-01-23','boardPhoto1.jpg');
insert into BOARD(RNO,BCONTENT,BDATE,BPHOTO)
values(14,'배불리 먹다 갑니다*.*','2015-01-23','boardPhoto2.jpg');
insert into BOARD(RNO,BCONTENT,BDATE,BPHOTO)
values(15,'너무 춥네여... 온도조절좀...','2015-01-23','boardPhoto3.jpg');
insert into BOARD(RNO,BCONTENT,BDATE,BPHOTO)
values(16,'인테리어가 좋아요ㅎㅎㅎ','2015-01-23','boardPhoto1.jpg');
insert into BOARD(RNO,BCONTENT,BDATE,BPHOTO)
values(17,'너무 짜네요...','2015-01-23','boardPhoto2.jpg');
insert into BOARD(RNO,BCONTENT,BDATE,BPHOTO)
values(18,'잘 먹다 갑니다~~ 또올게욤','2015-01-23','boardPhoto3.jpg');
insert into BOARD(RNO,BCONTENT,BDATE,BPHOTO)
values(19,'다음 회식은 또 요기다!!!','2015-01-23','boardPhoto3.jpg');
insert into BOARD(RNO,BCONTENT,BDATE,BPHOTO)
values(20,'술이 오래됐는지 쓰네요;_;','2015-01-23','boardPhoto3.jpg');




-------------------------------------------reservation 추가------------------------------
INSERT INTO  RESERVATION(RNO, BBNO, RDATE, RCONTENT, UID) VALUES(21, '124-86-06376', '2015-01-23 19:00:00', '오늘 오후 8시 5명 예약 가능한가요?', 'U03');
INSERT INTO  RESERVATION(RNO, BBNO, RDATE, RCONTENT, UID) VALUES(22, '124-86-06376', '2015-01-23 19:01:00', '오늘 오후 8시 5명 예약 가능한가요?', 'U04');
INSERT INTO  RESERVATION(RNO, BBNO, RDATE, RCONTENT, UID) VALUES(23, '124-86-06376', '2015-01-23 19:02:00', '오늘 오후 8시 5명 예약 가능한가요?', 'U02');
INSERT INTO  RESERVATION(RNO, BBNO, RDATE, RCONTENT, UID) VALUES(24, '124-86-06376', '2015-01-23 19:03:00', '오늘 오후 8시 5명 예약 가능한가요?', 'U01');
INSERT INTO  RESERVATION(RNO, BBNO, RDATE, RCONTENT, UID) VALUES(25, '124-86-06376', '2015-01-23 19:04:00', '오늘 오후 8시 5명 예약 가능한가요?', 'U02');
INSERT INTO  RESERVATION(RNO, BBNO, RDATE, RCONTENT, UID) VALUES(26, '124-86-06376', '2015-01-23 19:05:00', '오늘 오후 8시 5명 예약 가능한가요?', 'U03');
INSERT INTO  RESERVATION(RNO, BBNO, RDATE, RCONTENT, UID) VALUES(27, '124-86-06376', '2015-01-23 19:05:00', '오늘 오후 8시 5명 예약 가능한가요?', 'U02');
INSERT INTO  RESERVATION(RNO, BBNO, RDATE, RCONTENT, UID) VALUES(28, '124-86-06376', '2015-01-23 19:05:00', '오늘 오후 8시 5명 예약 가능한가요?', 'U02');

INSERT INTO BOARD(RNO, BCONTENT, BDATE, BPHOTO) VALUES(21, '와라와라 듣던대로 맛나욤', '2015-01-23', 'boardPhoto1.jpg');
INSERT INTO BOARD(RNO, BCONTENT, BDATE, BPHOTO) VALUES(22, '와라와라 안주가 좋네요', '2015-01-23', 'boardPhoto1.jpg');
INSERT INTO BOARD(RNO, BCONTENT, BDATE, BPHOTO) VALUES(23, '매니저 번호 쫌..', '2015-01-23', 'boardPhoto1.jpg');
INSERT INTO BOARD(RNO, BCONTENT, BDATE, BPHOTO) VALUES(24, '우와!', '2015-01-23', 'boardPhoto1.jpg');
INSERT INTO BOARD(RNO, BCONTENT, BDATE, BPHOTO) VALUES(25, '맛남', '2015-01-23', 'boardPhoto1.jpg');
INSERT INTO BOARD(RNO, BCONTENT, BDATE, BPHOTO) VALUES(26, '맛없어요', '2015-01-23', 'boardPhoto1.jpg');
INSERT INTO BOARD(RNO, BCONTENT, BDATE, BPHOTO) VALUES(27, '오돌뼈가 오들오들', '2015-01-23', 'boardPhoto1.jpg');
INSERT INTO BOARD(RNO, BCONTENT, BDATE, BPHOTO) VALUES(28, '크림치즈 통닭 또 생각나네요', '2015-01-23', 'boardPhoto1.jpg');


----------------------------update 주소수정------------
UPDATE SHOP SET SDETAILADDR ='서울특별시 서초구 서초4동 1309-8 서울빌딩 2층' WHERE BBNO='124-86-06376';

-------(2015.01.27 사진커밋하면서 이름도 바꾸는 쿼뤼~ by.연흥)--------
update BOARD set BPHOTO="1.jpg" where RNO=1;
update BOARD set BPHOTO="2.jpg" where RNO=2;
update BOARD set BPHOTO="3.jpg" where RNO=3;
update BOARD set BPHOTO="4.jpg" where RNO=4;
update BOARD set BPHOTO="5.jpg" where RNO=5;
update BOARD set BPHOTO="6.jpg" where RNO=6;
update BOARD set BPHOTO="7.jpg" where RNO=7;
update BOARD set BPHOTO="8.jpg" where RNO=8;
update BOARD set BPHOTO="9.jpg" where RNO=9;
update BOARD set BPHOTO="10.jpg" where RNO=10;
update BOARD set BPHOTO="11.jpg" where RNO=11;
update BOARD set BPHOTO="12.jpg" where RNO=12;
update BOARD set BPHOTO="13.jpg" where RNO=13;
update BOARD set BPHOTO="14.jpg" where RNO=14;
update BOARD set BPHOTO="15.jpg" where RNO=15;
update BOARD set BPHOTO="16.jpg" where RNO=16;
update BOARD set BPHOTO="17.jpg" where RNO=17;
update BOARD set BPHOTO="18.jpg" where RNO=18;
update BOARD set BPHOTO="19.jpg" where RNO=19;
update BOARD set BPHOTO="20.jpg" where RNO=20;
update BOARD set BPHOTO="21.jpg" where RNO=21;
update BOARD set BPHOTO="22.jpg" where RNO=22;
update BOARD set BPHOTO="23.jpg" where RNO=23;
update BOARD set BPHOTO="24.jpg" where RNO=24;
update BOARD set BPHOTO="25.jpg" where RNO=25;
update BOARD set BPHOTO="26.jpg" where RNO=26;
update BOARD set BPHOTO="27.jpg" where RNO=27;
update BOARD set BPHOTO="28.jpg" where RNO=28;

------- reservation추가(나래)--------
INSERT INTO RESERVATION(RNO, BBNO, RDATE, RCONTENT, UID) VALUES('30', '130-11-09313', '2015-01-24 19:05:00', '9시 15명', 'u04');
INSERT INTO RESERVATION(RNO, BBNO, RDATE, RCONTENT, UID) VALUES('31', '130-11-09313', '2015-01-24 19:55:00', '9시 15명', 'u04');
INSERT INTO RESERVATION(RNO, BBNO, RDATE, RCONTENT, UID) VALUES('32', '130-11-09313', '2015-01-24 20:05:00', '10시 15명', 'u04');
INSERT INTO RESERVATION(RNO, BBNO, RDATE, RCONTENT, UID) VALUES('33', '130-11-09313', '2015-01-25 19:05:00', '20시 15명', 'u04');
INSERT INTO RESERVATION(RNO, BBNO, RDATE, RCONTENT, UID) VALUES('34', '130-11-09313', '2015-01-25 19:05:01', '21시 15명', 'u04');
INSERT INTO RESERVATION(RNO, BBNO, RDATE, RCONTENT, UID) VALUES('35', '130-11-09313', '2015-01-25 19:05:02', '새벽 2시 15명', 'u04');

INSERT INTO RESERVATION(RNO, BBNO, RDATE, RCONTENT, UID) VALUES('36', '201-86-13140', '2015-01-26 2:05:00', '9시 15명', 'u03');
INSERT INTO RESERVATION(RNO, BBNO, RDATE, RCONTENT, UID) VALUES('37', '201-86-13140', '2015-01-26 19:55:00', '9시 15명', 'u03');
INSERT INTO RESERVATION(RNO, BBNO, RDATE, RCONTENT, UID) VALUES('38', '201-86-13140', '2015-01-26 20:05:00', '10시 15명', 'u03');
INSERT INTO RESERVATION(RNO, BBNO, RDATE, RCONTENT, UID) VALUES('39', '201-86-13140', '2015-01-26 21:05:00', '9시 15명', 'u03');
INSERT INTO RESERVATION(RNO, BBNO, RDATE, RCONTENT, UID) VALUES('40', '201-86-13140', '2015-01-26 21:55:00', '9시 15명', 'u03');
INSERT INTO RESERVATION(RNO, BBNO, RDATE, RCONTENT, UID) VALUES('41', '201-86-13140', '2015-01-26 22:05:00', '10시 15명', 'u03');

INSERT INTO RESERVATION(RNO, BBNO, RDATE, RCONTENT, UID) VALUES('42', '220-80-83576', '2015-01-26 10:05:00', '9시 12명', 'u02');
INSERT INTO RESERVATION(RNO, BBNO, RDATE, RCONTENT, UID) VALUES('43', '220-80-83576', '2015-01-26 10:06:00', '9시 13명', 'u02');
INSERT INTO RESERVATION(RNO, BBNO, RDATE, RCONTENT, UID) VALUES('44', '220-80-83576', '2015-01-26 10:07:00', '9시 14명', 'u02');
INSERT INTO RESERVATION(RNO, BBNO, RDATE, RCONTENT, UID) VALUES('45', '220-80-83576', '2015-01-26 10:08:00', '10시 15명', 'u02');
INSERT INTO RESERVATION(RNO, BBNO, RDATE, RCONTENT, UID) VALUES('46', '220-80-83576', '2015-01-26 10:09:00', '11시 15명', 'u02');
INSERT INTO RESERVATION(RNO, BBNO, RDATE, RCONTENT, UID) VALUES('47', '220-80-83576', '2015-01-26 10:10:00', '12시 15명', 'u02');

INSERT INTO RESERVATION(RNO, BBNO, RDATE, RCONTENT, UID) VALUES('48', '303-90-56632', '2015-01-26 10:11:00', '9시 22명', 'u02');
INSERT INTO RESERVATION(RNO, BBNO, RDATE, RCONTENT, UID) VALUES('49', '303-90-56632', '2015-01-26 10:12:00', '9시 23명', 'u02');
INSERT INTO RESERVATION(RNO, BBNO, RDATE, RCONTENT, UID) VALUES('50', '303-90-56632', '2015-01-26 10:13:00', '9시 24명', 'u02');
INSERT INTO RESERVATION(RNO, BBNO, RDATE, RCONTENT, UID) VALUES('51', '303-90-56632', '2015-01-26 10:14:00', '10시 25명', 'u02');
INSERT INTO RESERVATION(RNO, BBNO, RDATE, RCONTENT, UID) VALUES('52', '303-90-56632', '2015-01-26 10:15:00', '11시 25명', 'u02');
INSERT INTO RESERVATION(RNO, BBNO, RDATE, RCONTENT, UID) VALUES('53', '303-90-56632', '2015-01-26 10:16:00', '12시 25명', 'u02');

INSERT INTO RESERVATION(RNO, BBNO, RDATE, RCONTENT, UID) VALUES('54', '365-16-54110', '2015-01-26 10:17:00', '9시 22명', 'u03');
INSERT INTO RESERVATION(RNO, BBNO, RDATE, RCONTENT, UID) VALUES('55', '365-16-54110', '2015-01-26 10:18:00', '9시 23명', 'u03');
INSERT INTO RESERVATION(RNO, BBNO, RDATE, RCONTENT, UID) VALUES('56', '365-16-54110', '2015-01-26 10:19:00', '9시 24명', 'u03');
INSERT INTO RESERVATION(RNO, BBNO, RDATE, RCONTENT, UID) VALUES('57', '365-16-54110', '2015-01-26 10:20:00', '10시 25명', 'u03');
INSERT INTO RESERVATION(RNO, BBNO, RDATE, RCONTENT, UID) VALUES('58', '365-16-54110', '2015-01-26 10:21:00', '11시 25명', 'u03');
INSERT INTO RESERVATION(RNO, BBNO, RDATE, RCONTENT, UID) VALUES('59', '365-16-54110', '2015-01-26 10:22:00', '12시 25명', 'u03');

INSERT INTO RESERVATION(RNO, BBNO, RDATE, RCONTENT, UID) VALUES('60', '503-85-21617', '2015-01-26 10:23:00', '9시 22명', 'u03');
INSERT INTO RESERVATION(RNO, BBNO, RDATE, RCONTENT, UID) VALUES('61', '503-85-21617', '2015-01-26 10:24:00', '9시 23명', 'u03');
INSERT INTO RESERVATION(RNO, BBNO, RDATE, RCONTENT, UID) VALUES('62', '503-85-21617', '2015-01-26 10:25:00', '9시 24명', 'u03');
INSERT INTO RESERVATION(RNO, BBNO, RDATE, RCONTENT, UID) VALUES('63', '503-85-21617', '2015-01-26 10:26:00', '10시 25명', 'u03');
INSERT INTO RESERVATION(RNO, BBNO, RDATE, RCONTENT, UID) VALUES('64', '503-85-21617', '2015-01-26 10:27:00', '11시 25명', 'u03');
INSERT INTO RESERVATION(RNO, BBNO, RDATE, RCONTENT, UID) VALUES('65', '503-85-21617', '2015-01-26 10:28:00', '12시 25명', 'u03');

INSERT INTO RESERVATION(RNO, BBNO, RDATE, RCONTENT, UID) VALUES('66', '555-75-25271', '2015-01-26 10:29:00', '9시 22명', 'u03');
INSERT INTO RESERVATION(RNO, BBNO, RDATE, RCONTENT, UID) VALUES('67', '555-75-25271', '2015-01-26 10:30:00', '9시 23명', 'u03');
INSERT INTO RESERVATION(RNO, BBNO, RDATE, RCONTENT, UID) VALUES('68', '555-75-25271', '2015-01-26 10:31:00', '9시 24명', 'u03');
INSERT INTO RESERVATION(RNO, BBNO, RDATE, RCONTENT, UID) VALUES('69', '555-75-25271', '2015-01-26 10:32:00', '10시 25명', 'u03');
INSERT INTO RESERVATION(RNO, BBNO, RDATE, RCONTENT, UID) VALUES('70', '555-75-25271', '2015-01-26 10:33:00', '11시 25명', 'u03');
INSERT INTO RESERVATION(RNO, BBNO, RDATE, RCONTENT, UID) VALUES('71', '555-75-25271', '2015-01-26 10:34:00', '12시 25명', 'u03');

INSERT INTO RESERVATION(RNO, BBNO, RDATE, RCONTENT, UID) VALUES('72', '605-81-38178', '2015-01-26 10:35:00', '9시 22명', 'u03');
INSERT INTO RESERVATION(RNO, BBNO, RDATE, RCONTENT, UID) VALUES('73', '605-81-38178', '2015-01-26 10:36:00', '9시 23명', 'u03');
INSERT INTO RESERVATION(RNO, BBNO, RDATE, RCONTENT, UID) VALUES('74', '605-81-38178', '2015-01-26 10:37:00', '9시 24명', 'u03');

INSERT INTO RESERVATION(RNO, BBNO, RDATE, RCONTENT, UID) VALUES('75', '707-25-96307', '2015-01-26 10:38:00', '10시 25명', 'u03');
INSERT INTO RESERVATION(RNO, BBNO, RDATE, RCONTENT, UID) VALUES('76', '707-25-96307', '2015-01-26 10:39:00', '11시 25명', 'u03');
INSERT INTO RESERVATION(RNO, BBNO, RDATE, RCONTENT, UID) VALUES('77', '707-25-96307', '2015-01-26 10:40:00', '12시 25명', 'u03');

INSERT INTO RESERVATION(RNO, BBNO, RDATE, RCONTENT, UID) VALUES('78', '885-39-23464', '2015-01-26 10:41:00', '10시 25명', 'u03');
INSERT INTO RESERVATION(RNO, BBNO, RDATE, RCONTENT, UID) VALUES('79', '885-39-23464', '2015-01-26 10:42:00', '11시 25명', 'u03');
INSERT INTO RESERVATION(RNO, BBNO, RDATE, RCONTENT, UID) VALUES('80', '885-39-23464', '2015-01-26 10:43:00', '12시 25명', 'u03');

INSERT INTO BOARD(RNO, BCONTENT, BDATE, BPHOTO) VALUES('30', '쫌 더럽네요', '2014-01-01', '30.jpg');
----------------------(2015.01.27 사진커밋2 by.연흥)-------------------------
INSERT INTO BOARD(RNO, BCONTENT, BDATE, BPHOTO) VALUES('31', '어니언치킨쩔어', '2014-01-01', '31.jpg');
INSERT INTO BOARD(RNO, BCONTENT, BDATE, BPHOTO) VALUES('32', '마늘순살치킨이 진리', '2014-01-01', '32.jpg');
INSERT INTO BOARD(RNO, BCONTENT, BDATE, BPHOTO) VALUES('33', '양파 양보소?', '2014-01-01', '33.jpg');
INSERT INTO BOARD(RNO, BCONTENT, BDATE, BPHOTO) VALUES('34', '여기 생맥 역대급', '2014-01-01', '34.jpg');
INSERT INTO BOARD(RNO, BCONTENT, BDATE, BPHOTO) VALUES('35', '사람이 읎..어', '2014-01-01', '35.jpg');

INSERT INTO BOARD(RNO, BCONTENT, BDATE, BPHOTO) VALUES('36', '다트놀이잼', '2014-01-01', '36.jpg');
INSERT INTO BOARD(RNO, BCONTENT, BDATE, BPHOTO) VALUES('37', '기본안주치고괜춘', '2014-01-01', '37.jpg');
INSERT INTO BOARD(RNO, BCONTENT, BDATE, BPHOTO) VALUES('38', '술집에 아스크림있어 신세계', '2014-01-01', '38.jpg');
INSERT INTO BOARD(RNO, BCONTENT, BDATE, BPHOTO) VALUES('39', '벽좀 깎아주세요..', '2014-01-01', '39.jpg');
INSERT INTO BOARD(RNO, BCONTENT, BDATE, BPHOTO) VALUES('40', '스크류바+소주반+사이다반', '2014-01-01', '40.jpg');
INSERT INTO BOARD(RNO, BCONTENT, BDATE, BPHOTO) VALUES('41', '무슨 술집에 고양이가 있엌ㅋㅋㅋ', '2014-01-01', '41.jpg');

INSERT INTO BOARD(RNO, BCONTENT, BDATE, BPHOTO) VALUES('42', '과일안주는 사랑입니다<3', '2014-01-01', '42.jpg');
INSERT INTO BOARD(RNO, BCONTENT, BDATE, BPHOTO) VALUES('43', '왕돈까스가 왕이 아니었다.', '2014-01-01', '43.jpg');
INSERT INTO BOARD(RNO, BCONTENT, BDATE, BPHOTO) VALUES('44', '치즈닭갈비에 치즈가 더 있었으면...', '2014-01-01', '44.jpg');
INSERT INTO BOARD(RNO, BCONTENT, BDATE, BPHOTO) VALUES('45', '토실토실한 소시지~', '2014-01-01', '45.jpg');
INSERT INTO BOARD(RNO, BCONTENT, BDATE, BPHOTO) VALUES('46', '대기하라고 의자까지..ㅋㅋ', '2014-01-01', '46.jpg');
INSERT INTO BOARD(RNO, BCONTENT, BDATE, BPHOTO) VALUES('47', '오코노미야끼 무슨 계란빈대떡인줄ㅡㅡ', '2014-01-01', '47.jpg');

INSERT INTO BOARD(RNO, BCONTENT, BDATE, BPHOTO) VALUES('48', '카라이 짬뽕탕 추천이요', '2014-01-01', '48.jpg');
INSERT INTO BOARD(RNO, BCONTENT, BDATE, BPHOTO) VALUES('49', '마약파닭 넘 마시쪙 ㅠ.ㅠ', '2014-01-01', '49.jpg');
INSERT INTO BOARD(RNO, BCONTENT, BDATE, BPHOTO) VALUES('50', '수제고로케 존맛b', '2014-01-01', '50.jpg');
INSERT INTO BOARD(RNO, BCONTENT, BDATE, BPHOTO) VALUES('51', '불초밥 불쇼!!!', '2014-01-01', '51.jpg');
INSERT INTO BOARD(RNO, BCONTENT, BDATE, BPHOTO) VALUES('52', '노멀했어요 돼지고기숙주볶음', '2014-01-01', '52.jpg');
INSERT INTO BOARD(RNO, BCONTENT, BDATE, BPHOTO) VALUES('53', '봄바라 휘날리며~ 흩날리는', '2014-01-01', '53.jpg');

INSERT INTO BOARD(RNO, BCONTENT, BDATE, BPHOTO) VALUES('54', '달걀2개랑 진라면이 꽁짜라니 소오름', '2014-01-01', '54.jpg');
INSERT INTO BOARD(RNO, BCONTENT, BDATE, BPHOTO) VALUES('55', '매운데 계란으로 승화ㅋㄲㄲㅋㅋㅋ', '2014-01-01', '55.jpg');
INSERT INTO BOARD(RNO, BCONTENT, BDATE, BPHOTO) VALUES('56', '서비스로 받은 새우튀김~ 사장님 사랑합니다~', '2014-01-01', '56.jpg');
INSERT INTO BOARD(RNO, BCONTENT, BDATE, BPHOTO) VALUES('57', '뤠알먹방찍음', '2014-01-01', '57.jpg');
INSERT INTO BOARD(RNO, BCONTENT, BDATE, BPHOTO) VALUES('58', '해물누룽지 껄죽한 국물이 일품이네용', '2014-01-01', '58.jpg');
INSERT INTO BOARD(RNO, BCONTENT, BDATE, BPHOTO) VALUES('59', '4000깐풍기 조금매워요!조..금..', '2014-01-01', '59.jpg');

INSERT INTO BOARD(RNO, BCONTENT, BDATE, BPHOTO) VALUES('60', '골뱅이무침 늙은이 입맛이지만 굿', '2014-01-01', '60.jpg');
INSERT INTO BOARD(RNO, BCONTENT, BDATE, BPHOTO) VALUES('61', '추운날 삼거리포차 인증!', '2014-01-01', '61.jpg');
INSERT INTO BOARD(RNO, BCONTENT, BDATE, BPHOTO) VALUES('62', '사람 꽉차있어요 ㅎㄷㄷ', '2014-01-01', '62.jpg');
INSERT INTO BOARD(RNO, BCONTENT, BDATE, BPHOTO) VALUES('63', 'DJ박스 노래선곡쩔어요!', '2014-01-01', '63.jpg');
INSERT INTO BOARD(RNO, BCONTENT, BDATE, BPHOTO) VALUES('64', '오뎅탕 개짜-- 소금국이냐', '2014-01-01', '64.jpg');
INSERT INTO BOARD(RNO, BCONTENT, BDATE, BPHOTO) VALUES('65', '통오징어 떡볶이..떡볶이를 2만원 주고 먹은건 또 첨이네', '2014-01-01', '65.jpg');

INSERT INTO BOARD(RNO, BCONTENT, BDATE, BPHOTO) VALUES('66', '초록색이 꿀꽐라맥준데 칵테일삘?임', '2014-01-01', '66.jpg');
INSERT INTO BOARD(RNO, BCONTENT, BDATE, BPHOTO) VALUES('67', '감튀 칠리+바베큐 조합 쩔어욤', '2014-01-01', '67.jpg');
INSERT INTO BOARD(RNO, BCONTENT, BDATE, BPHOTO) VALUES('68', '굴러 떨어질뻔...계단조심!!', '2014-01-01', '68.jpg');
INSERT INTO BOARD(RNO, BCONTENT, BDATE, BPHOTO) VALUES('69', '치즈스틱 넘 귀여웤ㅋㅋㅋ', '2014-01-01', '69.jpg');
INSERT INTO BOARD(RNO, BCONTENT, BDATE, BPHOTO) VALUES('70', '감튀 큰넘은 담아주네요^^', '2014-01-01', '70.jpg');
INSERT INTO BOARD(RNO, BCONTENT, BDATE, BPHOTO) VALUES('71', '튀김쥐포 완전먹고싶었는데 개꿀 >_<', '2014-01-01', '71.jpg');

INSERT INTO BOARD(RNO, BCONTENT, BDATE, BPHOTO) VALUES('72', '요거닭 신세계네요...', '2014-01-01', '72.jpg');
INSERT INTO BOARD(RNO, BCONTENT, BDATE, BPHOTO) VALUES('73', '치느님은 반반이지 ㅇㅇ', '2014-01-01', '73.jpg');
INSERT INTO BOARD(RNO, BCONTENT, BDATE, BPHOTO) VALUES('74', '맛있는데 입냄새는 비밀', '2014-01-01', '74.jpg');

INSERT INTO BOARD(RNO, BCONTENT, BDATE, BPHOTO) VALUES('75', '그냥 그래요', '2014-01-01', '75.jpg');
INSERT INTO BOARD(RNO, BCONTENT, BDATE, BPHOTO) VALUES('76', '부타부타 사진이 참...ㅈㅅ', '2014-01-01', '76.jpg');
INSERT INTO BOARD(RNO, BCONTENT, BDATE, BPHOTO) VALUES('77', '살찌는 이맛 좋다ㅋㅋㅋㅋ', '2014-01-01', '77.jpg');

INSERT INTO BOARD(RNO, BCONTENT, BDATE, BPHOTO) VALUES('78', '700cc맥주-커플끼리 마시기 좋을듯^ㅡ^', '2014-01-01', '78.jpg');
INSERT INTO BOARD(RNO, BCONTENT, BDATE, BPHOTO) VALUES('79', '감자췹에 소스 냠냠~~', '2014-01-01', '79.jpg');
INSERT INTO BOARD(RNO, BCONTENT, BDATE, BPHOTO) VALUES('80', '샐러드 5시 전 꽁짜래요!!!개굿', '2014-01-01', '80.jpg');
----*-*-*-*-*(1월 28일 ^-^ 연흥ㅎ)*-*-*-*-*-*----
insert into USER(UID,UNAME,UTYPE,UPASSWORD,UPHONE) values('u05','배연흥','user','5555','010-6250-7778');
insert into USER(UID,UNAME,UTYPE,UPASSWORD,UPHONE) values('u06','나래신','user','6666','010-5665-7172');
insert into USER(UID,UNAME,UTYPE,UPASSWORD,UPHONE) values('u07','김도진','user','7777','010-9707-4345');
insert into USER(UID,UNAME,UTYPE,UPASSWORD,UPHONE) values('u08','김태평','user','8888','010-4236-8426');
insert into USER(UID,UNAME,UTYPE,UPASSWORD,UPHONE) values('u09','김소미','user','9999','010-2990-1050');
insert into USER(UID,UNAME,UTYPE,UPASSWORD,UPHONE) values('u10','이지영','user','0000','010-2703-4062');
insert into USER(UID,UNAME,UTYPE,UPASSWORD,UPHONE) values('u11','임지현','user','1111','010-9169-3524');
insert into USER(UID,UNAME,UTYPE,UPASSWORD,UPHONE) values('u12','노경민','user','2222','010-9983-0123');
insert into USER(UID,UNAME,UTYPE,UPASSWORD,UPHONE) values('u13','정다운','user','3333','010-7357-9969');
insert into USER(UID,UNAME,UTYPE,UPASSWORD,UPHONE) values('u14','양오연','user','4444','010-3776-0326');
insert into USER(UID,UNAME,UTYPE,UPASSWORD,UPHONE) values('u15','손다인','user','5555','010-9055-1524');
insert into USER(UID,UNAME,UTYPE,UPASSWORD,UPHONE) values('u16','한표현','user','6666','010-3154-6985');
----*-*-*-*-*(1월 28일 연흥2^^  다시 업데이트 시키시면 됩니다 (+예약거절 추가됨)-*-*-*-*-*----
update RESERVATION set RDATE="2014-12-28 00:01:33", RCONTENT="지금 당장 4명 되나요?", UID="u01", RSTATUS="예약승인" where RNO=1;
update RESERVATION set RDATE="2014-12-28 00:03:58", RCONTENT="1시 3명이요", UID="u02", RSTATUS="예약신청" where RNO=2;
update RESERVATION set RDATE="2014-12-28 00:15:18", RCONTENT="1시 반에 4명 되져~?", UID="u03", RSTATUS="예약신청"  where RNO=3;
update RESERVATION set RDATE="2014-12-28 00:16:17", RCONTENT="1시 6명이요!!", UID="u04", RSTATUS="예약신청"  where RNO=4;
update RESERVATION set RDATE="2014-12-28 00:25:40", RCONTENT="1:20쯤 3명 ", UID="u05", RSTATUS="예약거절"  where RNO=5;
update RESERVATION set RDATE="2014-12-28 01:03:10", RCONTENT="1시반 5명이요", UID="u06", RSTATUS="예약신청"  where RNO=6;
update RESERVATION set RDATE="2014-12-28 01:09:13", RCONTENT="2시 7명요", UID="u07", RSTATUS="예약승인"  where RNO=7;
update RESERVATION set RDATE="2014-12-28 01:33:04", RCONTENT="2시 6명", UID="u08", RSTATUS="예약신청"  where RNO=8;
update RESERVATION set RDATE="2014-12-28 01:45:04", RCONTENT="2시20분 4명", UID="u09", RSTATUS="예약신청"  where RNO=9;
update RESERVATION set RDATE="2014-12-29 15:43:44", RCONTENT="5시 8명!", UID="u10", RSTATUS="예약거절"  where RNO=10;
update RESERVATION set RDATE="2014-12-29 16:04:59", RCONTENT="5시 4명 되져?", UID="u11", RSTATUS="예약신청"  where RNO=11;
update RESERVATION set RDATE="2014-12-29 16:30:10", RCONTENT="5시반 7명 제발ㅋㅋ", UID="u12", RSTATUS="예약승인"  where RNO=12;
update RESERVATION set RDATE="2014-12-29 16:34:07", RCONTENT="5시30분 8명^^", UID="u13", RSTATUS="예약신청"  where RNO=13;
update RESERVATION set RDATE="2014-12-29 17:20:19", RCONTENT="6시 10명....", UID="u14", RSTATUS="예약승인"  where RNO=14;
update RESERVATION set RDATE="2014-12-29 18:45:59", RCONTENT="8시 7명 되져?????", UID="u15", RSTATUS="예약거절"  where RNO=15;
update RESERVATION set RDATE="2014-12-29 19:22:13", RCONTENT="8시 5명:)", UID="u16", RSTATUS="예약신청"  where RNO=16;
update RESERVATION set RDATE="2014-12-29 20:51:14", RCONTENT="10시 7명", UID="u01", RSTATUS="예약거절"  where RNO=17;
update RESERVATION set RDATE="2014-12-29 21:34:50", RCONTENT="11시 7명", UID="u02", RSTATUS="예약승인"  where RNO=18;
update RESERVATION set RDATE="2014-12-29 21:38:01", RCONTENT="11시 6명", UID="u03", RSTATUS="예약승인"  where RNO=19;
update RESERVATION set RDATE="2014-12-29 22:11:13", RCONTENT="11시 7명", UID="u04", RSTATUS="예약거절" where RNO=20;
update RESERVATION set RDATE="2014-12-29 22:59:55", RCONTENT="12시 9명이요~", UID="u05", RSTATUS="예약신청"  where RNO=21;
update RESERVATION set RDATE="2014-12-30 00:09:14", RCONTENT="1시 4명이용~<3", UID="u06" , RSTATUS="예약승인" where RNO=22;
update RESERVATION set RDATE="2014-12-30 00:55:42", RCONTENT="1시반 8명이", UID="u07", RSTATUS="예약신청"  where RNO=23;
update RESERVATION set RDATE="2014-12-30 01:10:44", RCONTENT="2시 16명 가려고 하는데요", UID="u08" , RSTATUS="예약승인" where RNO=24;
update RESERVATION set RDATE="2014-12-30 16:11:37", RCONTENT="6시 9명입니다", UID="u09" , RSTATUS="예약승인" where RNO=25;
update RESERVATION set RDATE="2014-12-30 17:00:01", RCONTENT="6시 반 4명이요", UID="u10" , RSTATUS="예약거절" where RNO=26;
update RESERVATION set RDATE="2014-12-30 17:39:41", RCONTENT="6시 반 9명 가능한가요?", UID="u11", RSTATUS="예약승인"  where RNO=27;
update RESERVATION set RDATE="2014-12-30 18:17:31", RCONTENT="7시 30분 혹시 20명 됩니까..", UID="u12", RSTATUS="예약승인"  where RNO=28;
update RESERVATION set RDATE="2014-12-30 18:58:58", RCONTENT="8시10분 12명이요~~~~~", UID="u13", RSTATUS="예약신청"  where RNO=29;
update RESERVATION set RDATE="2014-12-30 19:44:32", RCONTENT="9시 3명요", UID="u14", RSTATUS="예약신청"  where RNO=30;
update RESERVATION set RDATE="2014-12-30 20:01:11", RCONTENT="10시 24명요", UID="u15", RSTATUS="예약승인"  where RNO=31;
update RESERVATION set RDATE="2014-12-30 20:04:37", RCONTENT="사장님,10시 7명 되지요~?", UID="u16", RSTATUS="예약승인"  where RNO=32;
update RESERVATION set RDATE="2014-12-30 22:00:07", RCONTENT="10시 30분 6명 예약 가능한가윰", UID="u01", RSTATUS="예약신청"  where RNO=33;
update RESERVATION set RDATE="2014-12-30 22:42:44", RCONTENT="12시 정각에 갈게요~6명!!", UID="u02", RSTATUS="예약거절"  where RNO=34;
update RESERVATION set RDATE="2014-12-31 00:07:04", RCONTENT="1시30분 예약이요! 5명", UID="u03", RSTATUS="예약신청"  where RNO=35;
update RESERVATION set RDATE="2014-12-31 09:55:27", RCONTENT="5시에 10명 예약 하려고 합니다~^0^", UID="u04", RSTATUS="예약신청"  where RNO=36;
update RESERVATION set RDATE="2014-12-31 11:01:14", RCONTENT="오늘 4시반 8명이용", UID="u05" , RSTATUS="예약승인" where RNO=37;
update RESERVATION set RDATE="2014-12-31 13:00:12", RCONTENT="오늘5시9명예약이염", UID="u06", RSTATUS="예약신청"  where RNO=38;
update RESERVATION set RDATE="2014-12-31 13:07:45", RCONTENT="5시30분 20명..부탁드려요", UID="u07" , RSTATUS="예약승인" where RNO=39;
update RESERVATION set RDATE="2014-12-31 14:30:36", RCONTENT="5시에 예약 다 찼나요?ㅠㅠ 7명가려그여!", UID="u08", RSTATUS="예약승인"  where RNO=40;
update RESERVATION set RDATE="2014-12-31 15:40:34", RCONTENT="6시 9명이요", UID="u09", RSTATUS="예약거절"  where RNO=41;
update RESERVATION set RDATE="2014-12-31 15:52:05", RCONTENT="6시 6명 66ㅋㅋ", UID="u10" , RSTATUS="예약신청" where RNO=42;
update RESERVATION set RDATE="2014-12-31 16:16:14", RCONTENT="6시30분 5명 되는지요", UID="u11" , RSTATUS="예약신청" where RNO=43;
update RESERVATION set RDATE="2014-12-31 17:07:00", RCONTENT="7시7명가요!", UID="u12" , RSTATUS="예약승인" where RNO=44;
update RESERVATION set RDATE="2014-12-31 18:18:18", RCONTENT="8시 10명여", UID="u13", RSTATUS="예약신청"  where RNO=45;
update RESERVATION set RDATE="2014-12-31 19:00:01", RCONTENT="8:30 5명 가능한가요?", UID="u14", RSTATUS="예약승인"  where RNO=46;
update RESERVATION set RDATE="2014-12-31 20:19:15", RCONTENT="12시 4명 갈게요", UID="u15", RSTATUS="예약신청"  where RNO=47;
update RESERVATION set RDATE="2014-12-31 23:07:27", RCONTENT="12시 5명 예약이엽!", UID="u16" , RSTATUS="예약승인" where RNO=48;
update RESERVATION set RDATE="2015-01-01 09:05:29", RCONTENT="저녁 7시 11명 예약ㅎ!", UID="u01" , RSTATUS="예약거절" where RNO=49;
update RESERVATION set RDATE="2015-01-01 14:41:36", RCONTENT="6시 13명ㅋㅋㅋ!", UID="u02", RSTATUS="예약신청"  where RNO=50;
update RESERVATION set RDATE="2015-01-01 15:11:02", RCONTENT="6시반 12명 가능?", UID="u03" , RSTATUS="예약신청" where RNO=51;
update RESERVATION set RDATE="2015-01-01 16:22:52", RCONTENT="6시 7명ㄱㄱ", UID="u04" , RSTATUS="예약신청" where RNO=52;
update RESERVATION set RDATE="2015-01-01 17:15:27", RCONTENT="7시 30분 5명이요", UID="u05", RSTATUS="예약거절"  where RNO=53;
update RESERVATION set RDATE="2015-01-01 17:16:00", RCONTENT="8시에 예약하고 싶습니다.", UID="u06" , RSTATUS="예약승인" where RNO=54;
update RESERVATION set RDATE="2015-01-01 18:11:02", RCONTENT="20:00 9명.", UID="u07" , RSTATUS="예약승인" where RNO=55;
update RESERVATION set RDATE="2015-01-01 19:41:36", RCONTENT="9시 8명", UID="u08", RSTATUS="예약거절"  where RNO=56;
update RESERVATION set RDATE="2015-01-01 21:55:08", RCONTENT="11시 6명요", UID="u09" , RSTATUS="예약신청" where RNO=57;
update RESERVATION set RDATE="2015-01-02 14:00:13", RCONTENT="오늘 7시 15명!", UID="u10", RSTATUS="예약승인"  where RNO=58;
update RESERVATION set RDATE="2015-01-02 15:55:08", RCONTENT="6시 4명 예약할래욤>3<", UID="u11", RSTATUS="예약신청"  where RNO=59;
update RESERVATION set RDATE="2015-01-02 16:52:04", RCONTENT="오늘 8시 8명~", UID="u12", RSTATUS="예약거절"  where RNO=60;
update RESERVATION set RDATE="2015-01-02 17:00:14", RCONTENT="한시간후 6시에 14명 예약이요", UID="u13", RSTATUS="예약승인"  where RNO=61;
update RESERVATION set RDATE="2015-01-02 16:52:04", RCONTENT="오늘 8시 8명~", UID="u14", RSTATUS="예약승인"  where RNO=62;
update RESERVATION set RDATE="2015-01-02 17:00:14", RCONTENT="오늘 8시30분에 4명예약이요", UID="u15", RSTATUS="예약신청"  where RNO=63;
update RESERVATION set RDATE="2015-01-02 17:20:53", RCONTENT="7시 6명 되나요??", UID="u16", RSTATUS="예약신청"  where RNO=64;
update RESERVATION set RDATE="2015-01-02 17:38:07", RCONTENT="8시 3명 ", UID="u01", RSTATUS="예약신청"  where RNO=65;
update RESERVATION set RDATE="2015-01-02 19:07:10", RCONTENT="9시 30분 9명 부탁해영^^", UID="u02", RSTATUS="예약거절"  where RNO=66;
update RESERVATION set RDATE="2015-01-02 20:10:10", RCONTENT="9시 6명 ", UID="u03", RSTATUS="예약승인"  where RNO=67;
update RESERVATION set RDATE="2015-01-02 21:44:44", RCONTENT="11시 5명 제발 ㅜ_ㅜ", UID="u04", RSTATUS="예약승인"  where RNO=68;
update RESERVATION set RDATE="2015-01-02 22:23:22", RCONTENT=" 12시 ! 4명이요", UID="u05", RSTATUS="예약신청"  where RNO=69;
update RESERVATION set RDATE="2015-01-03 12:41:04", RCONTENT="오늘 5시 8명 되나욤?~", UID="u06", RSTATUS="예약승인"  where RNO=70;
update RESERVATION set RDATE="2015-01-03 13:00:42", RCONTENT="오늘 7시 3명요~", UID="u07", RSTATUS="예약거절"  where RNO=71;
update RESERVATION set RDATE="2015-01-03 16:52:04", RCONTENT="6시에 6명 갈게요", UID="u08", RSTATUS="예약신청"  where RNO=72;
update RESERVATION set RDATE="2015-01-03 18:04:00", RCONTENT="7시 7명 예약가능한가요", UID="u09", RSTATUS="예약승인"  where RNO=73;
update RESERVATION set RDATE="2015-01-03 19:41:04", RCONTENT="8시 4명 제발!!!!사좡님 젭알!", UID="u10", RSTATUS="예약신청"  where RNO=74;
update RESERVATION set RDATE="2015-01-03 20:00:42", RCONTENT="9시30분 6명이용", UID="u11", RSTATUS="예약승인"  where RNO=75;
update RESERVATION set RDATE="2015-01-03 21:53:04", RCONTENT="11시 9명예약 가능한가요", UID="u12", RSTATUS="예약신청"  where RNO=76;
update RESERVATION set RDATE="2015-01-04 10:04:25", RCONTENT="오늘 6시 예약이요 4명입니다.", UID="u13", RSTATUS="예약거절"  where RNO=77;
update RESERVATION set RDATE="2015-01-04 14:17:57", RCONTENT="오늘 7시 30분 8명 예약하고싶습니다.", UID="u14", RSTATUS="예약거절"  where RNO=78;
update RESERVATION set RDATE="2015-01-04 15:15:50", RCONTENT="오늘 5명 6시20분까지 갈게요!", UID="u15", RSTATUS="예약신청"  where RNO=79;
update RESERVATION set RDATE="2015-01-04 17:00:13", RCONTENT="오늘 7시 4명 예약좀할게여.", UID="u16", RSTATUS="예약신청"  where RNO=80;