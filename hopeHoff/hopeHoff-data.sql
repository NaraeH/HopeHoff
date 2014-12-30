------- userTable db 삽입문 ----

insert into USER(UID,UNAME,UTYPE,UPASSWORD,UEMAIL,UPHONE)
values('u01','홍길동','user','1111','u01@test.com','010-1111-1111');

insert into USER(UID,UNAME,UTYPE,UPASSWORD,UEMAIL,UPHONE)
values('u02','임꺽정','user','2222','u02@test.com','010-2222-2222');

insert into USER(UID,UNAME,UTYPE,UPASSWORD,UEMAIL,UPHONE)
values('u03','유관순','user','3333','u03@test.com','010-3333-3333');

insert into USER(UID,UNAME,UTYPE,UPASSWORD,UEMAIL,UPHONE)
values('b01','장길산','boss','4444','b01@test.com','010-4444-4444');

insert into USER(UID,UNAME,UTYPE,UPASSWORD,UEMAIL,UPHONE)
values('b02','김좌진','boss','5555','b02@test.com','010-5555-5555');

insert into USER(UID,UNAME,UTYPE,UPASSWORD,UEMAIL,UPHONE)
values('b03','안창호','boss','6666','b03@test.com','010-6666-6666');




----------shopTable insert문-----------------------
insert into shop(BBNO,UID,SNAME,SADDR,SPHONE,STIME,SINTRO,SPHOTO,SAREA,STYPE,SSNACK)

insert into shop(BBNO,UID,SNAME,SADDR,SPHONE,STIME,SINTRO,SPHOTO,SAREA,STYPE,SSNACK)
values('124-86-06376',
	'b01',
	'와라와라',
	'서울 강남구 역삼동 8221번지 강남A타워 지하1층',
	'02-558-1676',
	'15:00 ~ 05:00',
	'강남 와라와라입니다.많이 찾아주세요',
	'wrara.jpg',
	'강남',
	'퓨전술집',
	'소시지');


insert into shop(BBNO,UID,SNAME,SADDR,SPHONE,STIME,SINTRO,SPHOTO,SAREA,STYPE,SSNACK)
 values('203-81-63199',
	'b02',
	'준코',
	'서울시 서초구 서초동 1309-5지하 1층',
	'02-595-3235',
	'18:00 ~ 09:00',
	'룸형식 퓨전술집입니다.',
	'junco.jpg',
	'강남',
	'룸형식',
	'set메뉴');

insert into shop(BBNO,UID,SNAME,SADDR,SPHONE,STIME,SINTRO,SPHOTO,SAREA,STYPE,SSNACK)
 values('408-81-28536',
	'b03',
	'한신포차',
	'서울 특별시 강남구 강남대로 8길 11',
	'02-515-3199',
	'18:00 ~ 09:00',
	'42테이블 210석의 큰좌석 닭발이 짱짱.',
	'hansin.jpg',
	'강남',
	'퓨전술집',
	'닭발');

-------------- menu database  --------------------------



insert into menu(MID,BBNO,MNAME,MPRICE,MPHOTO)
values(1,'408-81-28536','한신닭발','15000','hansin1.jpg');

insert into menu(MID,BBNO,MNAME,MPRICE,MPHOTO)
values(2,'408-81-28536','한신통닭','10000','hansin2.jpg');

insert into menu(MID,BBNO,MNAME,MPRICE,MPHOTO)
values(3,'408-81-28536','해물모둠볶음','18000','hansin3.jpg');


insert into menu(MID,BBNO,MNAME,MPRICE,MPHOTO)
values(4,'408-81-28536','해물떡볶이','15000','hansin4.jpg');





insert into menu(MID,BBNO,MNAME,MPRICE,MPHOTO)
values(5,'203-81-63199','꿔바로탕수육','26500','junco1.jpg');

insert into menu(MID,BBNO,MNAME,MPRICE,MPHOTO)
values(6,'203-81-63199','닭모래통마늘구이','24500','junco2.jpg');

insert into menu(MID,BBNO,MNAME,MPRICE,MPHOTO)
values(7,'203-81-63199','삼겹두부김치','24500','junco3.jpg');


insert into menu(MID,BBNO,MNAME,MPRICE,MPHOTO)
values(8,'203-81-63199','수제모듬꼬치어묵','27500','junco4.jpg');



insert into menu(MID,BBNO,MNAME,MPRICE,MPHOTO)
values(9,'124-86-06376','꼬치어묵전골','18500','warawara1.jpg');

insert into menu(MID,BBNO,MNAME,MPRICE,MPHOTO)
values(10,'124-86-06376','알마니오돌뼈','19800','warawara2.jpg');

insert into menu(MID,BBNO,MNAME,MPRICE,MPHOTO)
values(11,'124-86-06376','크림치즈퐁닭','17500','warawara3.jpg');


insert into menu(MID,BBNO,MNAME,MPRICE,MPHOTO)
values(12,'124-86-06376','해물짬뽕탕','19800','warawara4.jpg');


------------------ board data --------------------------------
insert into board(RNO,BCONTENT,BDATE,BPHOTO)
values(1,'닭발맛이 정말 맛있어용 헤헤헤헤','2014-12-24','boardPhoto1.jpg');
insert into board(RNO,BCONTENT,BDATE,BPHOTO)
values(2,'사장님도 친절하고 서비스도 짱짱맨!','2014-12-26','boardPhoto2.jpg');
insert into board(RNO,BCONTENT,BDATE,BPHOTO)
values(3,'사진과는 많이 다릅니다 맛도 별로에요.','2014-12-30','boardPhoto3.jpg');


------------------ reservation data --------------------------
insert into reservation(RNO,BBNO,RDATE,RCONTENT,UID)
values(1,'124-86-06376','2014-12-28','오늘 오후 8시 5명 예약 가능한가요?','U01');
insert into reservation(RNO,BBNO,RDATE,RCONTENT,UID)
values(2,'203-81-63199','2014-12-28','오늘 오후 8시 5명 예약 가능한가요?','U01');
insert into reservation(RNO,BBNO,RDATE,RCONTENT,UID)
values(3,'408-81-28536','2014-12-28','오늘 오후 8시 5명 예약 가능한가요?','U01');

insert into reservation(RNO,BBNO,RDATE,RCONTENT,UID)
values(4,'124-86-06376','2014-12-28','오늘 오후 8시 5명 예약 가능한가요?','U02');
insert into reservation(RNO,BBNO,RDATE,RCONTENT,UID)
values(5,'203-81-63199','2014-12-28','오늘 오후 8시 5명 예약 가능한가요?','U02');
insert into reservation(RNO,BBNO,RDATE,RCONTENT,UID)
values(6,'408-81-28536','2014-12-28','오늘 오후 8시 5명 예약 가능한가요?','U02');

insert into reservation(RNO,BBNO,RDATE,RCONTENT,UID)
values(7,'124-86-06376','2014-12-28','오늘 오후 8시 5명 예약 가능한가요?','U03');
insert into reservation(RNO,BBNO,RDATE,RCONTENT,UID)
values(8,'203-81-63199','2014-12-28','오늘 오후 8시 5명 예약 가능한가요?','U03');
insert into reservation(RNO,BBNO,RDATE,RCONTENT,UID)
values(9,'408-81-28536','2014-12-28','오늘 오후 8시 5명 예약 가능한가요?','U03');

