package hopeHoff.control.json;

import hopeHoff.domain.Reservation;
import hopeHoff.service.ReservationService;
import hopeHoff.service.UserService;

import java.util.HashMap;

import javax.servlet.ServletContext;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;

@Controller("json.reservationControl")
@RequestMapping("/json/reservation")
public class ReservationControl {
  static final int PAGE_DEFAULT_SIZE = 3;
  
  @Autowired ReservationService     reservationService;
  @Autowired UserService 			userService;
  @Autowired ServletContext servletContext;
 
/*  @RequestMapping(value="/add", method=RequestMethod.POST)
  public Object add(Reservation reservation) throws Exception {  
    
    reservationService.add(reservation);
    
    HashMap<String,Object> resultMap = new HashMap<>();
    resultMap.put("status", "success");
    
    return resultMap;
  }*/

  /*
  @RequestMapping("/delete")
  public Object delete(int no) throws Exception {
    reservationService.delete(no);
    
    HashMap<String,Object> resultMap = new HashMap<>();
    resultMap.put("status", "success");
    
    return resultMap;
  }*/
  
  @RequestMapping("/list")
  public Object list(
      @RequestParam(defaultValue="1") int pageNo,
      @RequestParam(defaultValue="3") int pageSize) throws Exception {
    
    if (pageSize <= 0)
      pageSize = PAGE_DEFAULT_SIZE;
    
    int maxPageNo = reservationService.getMaxPageNo(pageSize);
    
    if (pageNo <= 0) pageNo = 1;
    if (pageNo > maxPageNo) pageNo = maxPageNo;
    System.out.println("maxPageNo"+maxPageNo);
    System.out.println("pageNo"+pageNo);
    
    HashMap<String,Object> resultMap = new HashMap<>();
    resultMap.put("status", "success");
    resultMap.put("currPageNo", pageNo);
    resultMap.put("maxPageNo", maxPageNo);
    resultMap.put("reservations", 
        reservationService.getList(pageNo, pageSize));
    
    System.out.println(resultMap);
    
    
    return resultMap;
  }
  
  @RequestMapping("/view")
  public Object view(int no) throws Exception {
    Reservation reservation = reservationService.get(no);
    
    HashMap<String,Object> resultMap = new HashMap<>();
    resultMap.put("status", "success");
    resultMap.put("reservation", reservation);
    return resultMap;
  }
}












