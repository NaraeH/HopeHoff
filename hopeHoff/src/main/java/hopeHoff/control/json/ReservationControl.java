package hopeHoff.control.json;

import hopeHoff.domain.Reservation;
import hopeHoff.service.ReservationService;
import hopeHoff.service.UserService;
import hopeHoff.service.myMarketService;

import java.util.HashMap;

import javax.servlet.ServletContext;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;

@Controller("json.reservationControl")
@RequestMapping("/json/reservation")
public class ReservationControl {
  static final int PAGE_DEFAULT_SIZE = 3;
  
  @Autowired ReservationService     reservationService;
  @Autowired UserService 			userService;
  @Autowired myMarketService		myMarketService;	
  @Autowired ServletContext servletContext;

  @RequestMapping("/delete")
  public Object delete(Integer reservationNo ) throws Exception {
    reservationService.delete(reservationNo);
    
    HashMap<String,Object> resultMap = new HashMap<>();
    resultMap.put("status", "success");
    
    return resultMap;
  }
  
  @RequestMapping("/update")
  public Object update(Integer reservationNo ) throws Exception {
    reservationService.update(reservationNo);
    
    HashMap<String,Object> resultMap = new HashMap<>();
    resultMap.put("status", "success");
    
    return resultMap;
  }
  
  @RequestMapping(value="/list", method=RequestMethod.POST )
  public Object list(
      @RequestParam(defaultValue="1") int pageNo,
     @RequestParam(defaultValue="3") int pageSize ,String uId, String type, String businessNo, String date) throws Exception {
    if (pageSize <= 0) pageSize = PAGE_DEFAULT_SIZE;

    int maxPageNo = reservationService.getMaxPageNo(pageSize,uId,type, businessNo, date);
    
    if (pageNo <= 0) pageNo = 1;
    if (pageNo > maxPageNo) pageNo = maxPageNo;
    
    HashMap<String,Object> resultMap = new HashMap<>();
    
    resultMap.put("status", "success");
    resultMap.put("shops", myMarketService.selectMarketList(uId));
    resultMap.put("currPageNo", pageNo);
    resultMap.put("maxPageNo", maxPageNo);
    //resultMap.put("startIndex", ((pageNo - 1) * pageSize)+1);
    resultMap.put("reservations", reservationService.getList(pageNo, pageSize,uId, type,businessNo, date));
    
    return resultMap;
  }
  
  @RequestMapping("/view")
  public Object view(Integer reservationNo) throws Exception {
   Reservation reservation = reservationService.get(reservationNo);
   
   HashMap<String,Object> resultMap = new HashMap<>();
    resultMap.put("status", "success");
    resultMap.put("reservation", reservation);
    
   // System.out.println("View resultMap=====>"+resultMap);
   return resultMap;
  }
  
	@RequestMapping(value="/addReserv", method=RequestMethod.POST)
	public Object addReserv(Reservation reservation) {
		reservationService.add(reservation);

		HashMap<String, Object> resultMap = new HashMap<String, Object>();
		resultMap.put("status", "success");
		resultMap.put("bossPhoneNo", reservationService.getBossPhoneNo(reservation.getBusinessNo()));
		return resultMap;
	}
}











