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
  
  
  public List<?> getList(int pageNo, int pageSize,String uId,String type,String businessNo) {
	  HashMap<String,Object> paramMap = new HashMap<>();
	  
	  if(type.equals("user")){
			paramMap.put("uId", uId);
			
	  }else if(type.equals("boss")) {
			paramMap.put("uId", null);
			paramMap.put("businessNo",businessNo);
	  }
	  
	if(pageNo ==0){
		pageNo=1;
	}

	paramMap.put("startIndex", ((pageNo - 1) * pageSize));
	paramMap.put("pageSize", pageSize);
	
	System.out.println("paramMap" + paramMap);
   
    return reservationDao.selectList(paramMap);
  }
  
  public int getMaxPageNo(int pageSize,String uId, String type, String businessNo) {
	  
	  HashMap<String,Object> paramMap = new HashMap<>();
	  
	  System.out.println("uId===> " + uId);
	  System.out.println("type----------------------->"+type);
	
	int totalSize = 0;
	if(type.equals("user")){
		  paramMap.put("uId", uId);
		 totalSize = reservationDao.totalSize(paramMap);		 
		 System.out.println("totalSize user"+totalSize);
			
	}else if(type.equals("boss")) {
		//paramMap.put("businessNo", myMarketService.selectFirstShop(uId).getBusinessNo());
		paramMap.put("businessNo", businessNo);
		paramMap.put("uId", null);
		
		System.out.println("ppppppp==>" + paramMap);
		 totalSize = reservationDao.totalSize(paramMap);
		 System.out.println("totalSize boss"+totalSize);
	}
    int maxPageNo = totalSize / pageSize;
    if ((totalSize % pageSize) > 0) maxPageNo++;
    
    System.out.println("totalSize=====>"+totalSize);
    
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
	  SimpleDateFormat sdf = new SimpleDateFormat("yyyy-MM-DD HH:mm:ss");
	  String currentTimeString = sdf.format(date);
	  reservation.setReservationDate(currentTimeString);
	  
	  reservationDao.insert(reservation);
  }
}
















