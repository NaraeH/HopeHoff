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
insert into shop(BBNO,UID,SNAME,SADDR,SPHONE,STIME,SINTRO,SINFO,SAREA,STYPE,SSNACK)

	insert into shop(BBNO,UID,SNAME,SADDR,SPHONE,STIME,SINTRO,SINFO,SAREA,STYPE,SSNACK)
	values('124-86-06376',
		'b01',
		'와라와라',
		'서울 강남구 역삼동 8221번지 강남A타워 지하1층',
		'02-558-1676',
		'15:00 ~ 05:00',
		'술마시고 싶다면 강남 와라와라로 와라와라!',
		'더 세련되어지고 더 아늑해진 우리만의 공간, 고객을 사랑하는 마음으로 기다리겠습니다. 누룽지탕, 해물짬뽕탕, 치즈해물떡볶이 등  맛있어요',
		'강남',
		'퓨전술집',
		'퓨전안주');
		

	insert into shop(BBNO,UID,SNAME,SADDR,SPHONE,STIME,SINTRO,SINFO,SAREA,STYPE,SSNACK)
	values('203-81-63199',
		'b02',
		'준코',
		'서울시 서초구 서초동 1309-5지하 1층',
		'02-595-3235',
		'18:00 ~ 09:00',
		'술마시고 노래하고 춤을춰봐도 가슴안에 하나가득 준코!',
		'더 세련되어지고 더 아늑해진 우리만의 공간, 고객을 사랑하는 마음으로 기다리겠습니다. 소주, 호프, 안주 판매 및 노래방 운영.',
		'강남',
		'룸형식',
		'set메뉴');

		
	insert into shop(BBNO,UID,SNAME,SADDR,SPHONE,STIME,SINTRO,SINFO,SAREA,STYPE,SSNACK)
	values('408-81-28536',
		'b03',
		'한신포차',
		'서울 특별시 강남구 강남대로 8길 11',
		'02-515-3199',
		'18:00 ~ 09:00',
		'한신닭발! 한번먹고 두번먹고 자꾸먹고 싶네~',
		'전국에 누구나 함께 올수 있는 한신포차,세계인의 입맛을 사로잡은 닭발, 대한민국 대표 포장마차,
		 휴무일, 주차여부는 매장 상황에 따라 달라질 수 있으니, 매장에 직접 전화하여 확인해 주시기 바랍니다',
		'강남',
		'포차',
		'닭발');
		
	insert into shop(BBNO,UID,SNAME,SADDR,SPHONE,STIME,SINTRO,SINFO,SAREA,STYPE,SSNACK)
	values('211-87-14784',
		'b04',
		'칠성포차',
		'서울특별시 영등포구 영등포동3가 9-20',
		'02-2068-8480',
		'18:00 ~ 04:00',
		'일이삼사오육칠성포차! 마약찜닭!',
		'고객은 관객처럼 즐기고, 매장은 무대처럼 가꾸고 , 직원은 배우처럼 일하자. 마약찜닭, 주류 판매, 포장마차 입니다 많이 사랑해주세요. ',
		'영등포',
		'포차',
		'퓨전술집');
		
	insert into shop(BBNO,UID,SNAME,SADDR,SPHONE,STIME,SINTRO,SINFO,SAREA,STYPE,SSNACK)
	values('128-31-85241',
		'b04',
		'달동네포차',
		'서울 특별시 영등포구 문래동3가 55-5 로데오왁 1층',
		'02-2676-9911',
		'18:00 ~ 09:00',
		'술래잡기~고무줄놀이~말뚝박기~자치기~말타기~7,80년대  추억 복고풍의 달동네 포차!',
		'7,80년대 드라마에서 나올만한 테마의 술집 ,영등포 최고의 술집이 되겠습니다.든든한 서비스를 챙겨드리겠습니다.',
		'영등포',
		'포차',
		'퓨전술집');


-------------- menu database  --------------------------


/********************한신포차***********************/
insert into menu(MID,BBNO,MNAME,MPRICE,MPHOTO)
values(1,'408-81-28536','한신닭발','15000','hansin-menu1.jpg');

insert into menu(MID,BBNO,MNAME,MPRICE,MPHOTO)
values(2,'408-81-28536','한신통닭','10000','hansin-menu2.jpg');

insert into menu(MID,BBNO,MNAME,MPRICE,MPHOTO)
values(3,'408-81-28536','해물모둠볶음','18000','hansin-menu3.jpg');

insert into menu(MID,BBNO,MNAME,MPRICE,MPHOTO)
values(4,'408-81-28536','해물떡볶이','15000','hansin-menu4.jpg');

/********************준코***********************/

insert into menu(MID,BBNO,MNAME,MPRICE,MPHOTO)
values(5,'203-81-63199','꿔바로탕수육','26500','junco-menu1.jpg');

insert into menu(MID,BBNO,MNAME,MPRICE,MPHOTO)
values(6,'203-81-63199','닭모래통마늘구이','24500','junco-menu2.jpg');

insert into menu(MID,BBNO,MNAME,MPRICE,MPHOTO)
values(7,'203-81-63199','삼겹두부김치','24500','junco-menu3.jpg');

insert into menu(MID,BBNO,MNAME,MPRICE,MPHOTO)
values(8,'203-81-63199','수제모듬꼬치어묵','27500','junco-menu4.jpg');

/*********************와라와라**********************/
insert into menu(MID,BBNO,MNAME,MPRICE,MPHOTO)
values(9,'124-86-06376','꼬치어묵전골','18500','warawara-menu1.jpg');

insert into menu(MID,BBNO,MNAME,MPRICE,MPHOTO)
values(10,'124-86-06376','알마니오돌뼈','19800','warawara-menu2.jpg');

insert into menu(MID,BBNO,MNAME,MPRICE,MPHOTO)
values(11,'124-86-06376','크림치즈퐁닭','17500','warawara-menu3.jpg');

insert into menu(MID,BBNO,MNAME,MPRICE,MPHOTO)
values(12,'124-86-06376','해물짬뽕탕','19800','warawara-menu4.jpg');

/*********************칠성포차**********************/

insert into menu(MID,BBNO,MNAME,MPRICE,MPHOTO)
values(13,'211-87-14784','오돌뼈주먹밥','15000','seven-menu4.jpg');

insert into menu(MID,BBNO,MNAME,MPRICE,MPHOTO)
values(14,'211-87-14784','치즈에퐁닭','16500','seven-menu1.jpg');

insert into menu(MID,BBNO,MNAME,MPRICE,MPHOTO)
values(15,'211-87-14784','마약찜닭','21000','seven-menu2.jpg');

insert into menu(MID,BBNO,MNAME,MPRICE,MPHOTO)
values(16,'211-87-14784','돼지껍데기','16000','seven-menu3.jpg');

/****************달동네***************************/

insert into menu(MID,BBNO,MNAME,MPRICE,MPHOTO)
values(17,'128-31-85241','치즈등갈비','22000','moon-menu1.jpg');

insert into menu(MID,BBNO,MNAME,MPRICE,MPHOTO)
values(18,'128-31-85241','육사시미','17000','moon-menu2.jpg');

insert into menu(MID,BBNO,MNAME,MPRICE,MPHOTO)
values(19,'128-31-85241','해물파전','12000','moon-menu3.jpg');

insert into menu(MID,BBNO,MNAME,MPRICE,MPHOTO)
values(20,'128-31-85241','찜닭','17000','moon-menu4.jpg');




------------------ board data --------------------------------
insert into board(RNO,BCONTENT,BDATE,BPHOTO)
values(1,'닭발맛이 정말 맛있어용 헤헤헤헤','2014-12-24','boardPhoto1.jpg');
insert into board(RNO,BCONTENT,BDATE,BPHOTO)
values(2,'사장님도 친절하고 서비스도 짱짱맨!','2014-12-26','boardPhoto2.jpg');
insert into board(RNO,BCONTENT,BDATE,BPHOTO)
values(3,'사진과는 많이 다릅니다 맛도 별로에요.','2014-12-30','boardPhoto3.jpg');


------------------ reservation data --------------------------
/*--------------------------------------------------*/
insert into reservation(BBNO,RDATE,RCONTENT,UID)
values('124-86-06376','2014-12-28','오늘 오후 8시 5명 예약 가능한가요?','U01');
insert into reservation(BBNO,RDATE,RCONTENT,UID)
values('203-81-63199','2014-12-28','오늘 오후 8시 5명 예약 가능한가요?','U01');
insert into reservation(BBNO,RDATE,RCONTENT,UID)
values('408-81-28536','2014-12-28','오늘 오후 8시 5명 예약 가능한가요?','U01');
insert into reservation(BBNO,RDATE,RCONTENT,UID)
values('211-87-14784','2014-12-28','오늘 오후 8시 5명 예약 가능한가요?','U01');
insert into reservation(BBNO,RDATE,RCONTENT,UID)
values('128-31-85241','2014-12-28','오늘 오후 8시 5명 예약 가능한가요?','U01');



/*--------------------------------------------------*/

insert into reservation(RDATE,RCONTENT,UID)
values('124-86-06376','2014-12-28','오늘 오후 8시 5명 예약 가능한가요?','U02');
insert into reservation(BBNO,RDATE,RCONTENT,UID)
values('203-81-63199','2014-12-28','오늘 오후 8시 5명 예약 가능한가요?','U02');
insert into reservation(BBNO,RDATE,RCONTENT,UID)
values('408-81-28536','2014-12-28','오늘 오후 8시 5명 예약 가능한가요?','U02');
insert into reservation(BBNO,RDATE,RCONTENT,UID)
values('211-87-14784','2014-12-28','오늘 오후 8시 5명 예약 가능한가요?','U02');
insert into reservation(BBNO,RDATE,RCONTENT,UID)
values('128-31-85241','2014-12-28','오늘 오후 8시 5명 예약 가능한가요?','U02');


/*--------------------------------------------------*/
insert into reservation(BBNO,RDATE,RCONTENT,UID)
values('124-86-06376','2014-12-28','오늘 오후 8시 5명 예약 가능한가요?','U03');
insert into reservation(BBNO,RDATE,RCONTENT,UID)
values('203-81-63199','2014-12-28','오늘 오후 8시 5명 예약 가능한가요?','U03');
insert into reservation(BBNO,RDATE,RCONTENT,UID)
values('408-81-28536','2014-12-28','오늘 오후 8시 5명 예약 가능한가요?','U03');
insert into reservation(BBNO,RDATE,RCONTENT,UID)
values('211-87-14784','2014-12-28','오늘 오후 8시 5명 예약 가능한가요?','U03');
insert into reservation(BBNO,RDATE,RCONTENT,UID)
values('128-31-85241','2014-12-28','오늘 오후 8시 5명 예약 가능한가요?','U03');


/*----------------------------------------------------*/
insert into reservation(BBNO,RDATE,RCONTENT,UID)
values('124-86-06376','2014-12-28','오늘 오후 8시 5명 예약 가능한가요?','U04');
insert into reservation(BBNO,RDATE,RCONTENT,UID)
values('203-81-63199','2014-12-28','오늘 오후 8시 5명 예약 가능한가요?','U04');
insert into reservation(BBNO,RDATE,RCONTENT,UID)
values('408-81-28536','2014-12-28','오늘 오후 8시 5명 예약 가능한가요?','U04');
insert into reservation(BBNO,RDATE,RCONTENT,UID)
values('211-87-14784','2014-12-28','오늘 오후 8시 5명 예약 가능한가요?','U04');
insert into reservation(BBNO,RDATE,RCONTENT,UID)
values('128-31-85241','2014-12-28','오늘 오후 8시 5명 예약 가능한가요?','U04');
