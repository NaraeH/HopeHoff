package hopeHoff.control.json;

import hopeHoff.dao.MenuDao;
import hopeHoff.dao.ShopDao;
import hopeHoff.domain.Shop;
import hopeHoff.service.UserService;
import hopeHoff.service.myMarketService;

import java.util.HashMap;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

@Controller
@RequestMapping("/json/myMarketControl")
public class myMarketControl {
	@Autowired ShopDao shopDao;
	@Autowired MenuDao menuDao;
	@Autowired myMarketService myMarketService;
	
	@RequestMapping(value="/marketList", method=RequestMethod.POST)
	public Object marketList(String userId){
		List<?> shopList = myMarketService.showList(userId);
		
		HashMap<String, Object> resultMap = new HashMap<String, Object>();
		
		if(shopList != null) { 
			for(int index =0; index < shopList.size() ;index++) { 
				System.out.println("shopList.get(index)  :  " + shopList.get(index));
				resultMap.put("shopList"+index, shopList.get(index)); 
			}
			resultMap.put("status", "success");
		} else {
			resultMap.put("status", "fail");
			
		}
		/*resultMap.put("shopDetail", shopDao.selectOne(userId));
		resultMap.put("shopPhotos", shopDao.selectPhoto(userId));
		resultMap.put("shopMenu", menuDao.selectMenu(userId));*/
		
		return resultMap;
	}

	/*@RequestMapping(value="/list", method=RequestMethod.GET)
	public Object list(String keywordGroup, String keyword ){
		HashMap<String, String> paraMap = new HashMap<String, String>();
		paraMap.put("keywordGroup", keywordGroup);
		paraMap.put("keyword", keyword);

		HashMap<String, Object> resultMap = new HashMap<String, Object>();
		resultMap.put("shops", shopDao.selectList(paraMap));
		return resultMap;
	}*/
	
	
	
}
