package hopeHoff.service;

import hopeHoff.dao.ReservationDao;
import hopeHoff.dao.UserDao;
import hopeHoff.domain.Reservation;

import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.HashMap;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Propagation;
import org.springframework.transaction.annotation.Transactional;

/* Service 컴포넌트의 역할
 * => 비즈니스 로직 수행
 * => 트랜잭션 관리
 */

@Service
public class ReservationService {
  @Autowired
  ReservationDao reservationDao;
  @Autowired UserDao userDao;
  @Autowired myMarketService 	myMarketService;
  
  
  public List<?> getList(int pageNo, int pageSize,String uId,String type,String businessNo, String date) {
	  HashMap<String,Object> paramMap = new HashMap<>();
	  
	  if(type.equals("user")){
			paramMap.put("uId", uId);
			
	  }else if(type.equals("boss")) {
		    //businessNo = (businessNo == null)? "": businessNo;
		  
//		  if( businessNo == null ){
//			  businessNo = "";
//		  }else if( businessNo.equals("all") ){
//			  businessNo = null;
//		  }
			paramMap.put("uId", null);
			paramMap.put("businessNo",businessNo);
	  }
	  
	  if( date != ""){ 
		  paramMap.put("date", date + "%"); 
	  }else{
		  paramMap.put("date", null);
	  }
	  
	if(pageNo ==0){
		pageNo=1;
	}

	paramMap.put("startIndex", ((pageNo - 1) * pageSize));
	paramMap.put("pageSize", pageSize);
	
    return reservationDao.selectList(paramMap);
  }
  
  public int getMaxPageNo(int pageSize,String uId, String type, String businessNo, String date) {
	  HashMap<String,Object> paramMap = new HashMap<>();
	
	if(type.equals("user")){
		 paramMap.put("uId", uId);

	}else if(type.equals("boss")) {
		paramMap.put("businessNo", businessNo);
		paramMap.put("uId", null);
	}

	if( date != null){ paramMap.put("date", date + "%"); }
	int totalSize = reservationDao.totalSize(paramMap);

	int maxPageNo = totalSize / pageSize;
    if ((totalSize % pageSize) > 0) maxPageNo++;
    
    return maxPageNo;
  }
  
  @Transactional(
      rollbackFor=Exception.class, 
      propagation=Propagation.REQUIRED)
  public void delete(int reservationNo) {
    reservationDao.delete(reservationNo);
  }
  
  @Transactional(
	      rollbackFor=Exception.class, 
	      propagation=Propagation.REQUIRED)
	  public void update(int reservationNo) {
	    reservationDao.update(reservationNo);
	  }
  
  public Reservation get(Integer reservationNo) {
	
	Reservation reservation = reservationDao.selectOne(reservationNo);
	
    return reservation;
  }
  
  public String getBossPhoneNo(String businessNo){
	  return reservationDao.selectBossPhone(businessNo);
  }
  
  /* @Transactional 선언
   * => 메서드 안의 입력/변경/삭제(manipluation) 작업을 하나의 작업을 묶는다.
   * => 모든 작업이 성공했을 때만 서버에 반영한다. 
   */
  @Transactional(
      rollbackFor=Exception.class, 
      propagation=Propagation.REQUIRED)
  public void add(Reservation reservation) {
	  //오늘 날짜 지정
	  Date date = new Date();
	  
	  System.out.println("data====>"+date);
	  SimpleDateFormat sdf = new SimpleDateFormat("yyyy-MM-dd hh:mm:ss");
	  System.out.println("sdf=====>"+sdf);
	  String currentTimeString = sdf.format(date);
	  reservation.setReservationDate(currentTimeString);
	  
	  System.out.println("currentTimeString===>"+currentTimeString);
	  
	  reservationDao.insert(reservation);
  }
}
















