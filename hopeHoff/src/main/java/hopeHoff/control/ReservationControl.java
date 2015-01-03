package hopeHoff.control;

import hopeHoff.dao.ReservationDao;
import hopeHoff.domain.Reservation;
import hopeHoff.service.ReservationService;

import java.util.HashMap;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;

@Controller("ReservationControl")
@RequestMapping("/reservation")
public class ReservationControl {
	

	static final int PAGE_DEFAULT_SIZE = 3;
	
	@Autowired ReservationDao reservationDao;
	
	  ReservationService     reservationService = new ReservationService();
	  /*@Autowired ServletContext 	servletContext;*/


	 /*
	@RequestMapping(value = "/add", method = RequestMethod.POST)
	// POST요청일 때 이것을 사용하라고 하는
	public Object add(Reservation reservation) throws Exception {

		if(reservation.getPhotofile() != null 
		   &&  !product.getPhotofile().isEmpty()){
			
			String fileuploadRealpath = 
					servletContext.getRealPath("/fileupload");
			String filename = System.currentTimeMillis() + "_";
			File file = new File(fileuploadRealpath + "/" + filename);
			 
			product.getPhotofile().transferTo(file);
			product.setPhoto(filename);

		}
		
		 reservationService.add(reservation);
		HashMap<String, Object> resultMap = new HashMap<String, Object>();
		resultMap.put("status", "success");
		
		return resultMap;
	}
	*/

	/*@RequestMapping("/delete")
	public Object delete(int no) throws Exception {
		
		reservationService.delete(no);
		
		HashMap<String, Object> resultMap = new HashMap<>();
		resultMap.put("status", "success");
		
		return resultMap;

	}*/

	@RequestMapping("/list")
	public Object list(
			@RequestParam(defaultValue = "1") int pageNo,
			@RequestParam(defaultValue = "3") int pageSize)throws Exception {

		if (pageSize <= 0) {
			pageSize = PAGE_DEFAULT_SIZE;
		}

		System.out.println("11");
		System.out.println(pageSize);
		int maxPageNo = reservationService.getMaxPageNo(pageSize);

		if (pageNo <= 0) pageNo = 1;
		
		if (pageNo > maxPageNo)	pageNo = maxPageNo;

		HashMap<String, Object> resultMap = new HashMap<>();
		resultMap.put("status", "success");
		resultMap.put("currPageNo", pageNo);
		resultMap.put("maxPageNo", maxPageNo);
		resultMap.put("reservations", 
				reservationService.getList(pageNo, pageSize));
		return resultMap;
	}


	@RequestMapping("/view")
	public Object view(int no, Model model) throws Exception {
		//Reservation reservation= reservationService.get(no);
		
		Reservation reservation = reservationDao.selectOne(no);
		
		HashMap<String, Object> resultMap = new HashMap<>();
		resultMap.put("status", "success");
		resultMap.put("reservation", reservation);
		
		return resultMap;
	}

}
