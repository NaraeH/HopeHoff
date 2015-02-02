package hopeHoff.control.json;

import hopeHoff.domain.Shop;
import hopeHoff.service.myMarketService;

import java.util.HashMap;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

@Controller
@RequestMapping("/json/myMarketControl")
public class myMarketControl {
	@Autowired myMarketService myMarketService;
	
	@RequestMapping(value="/marketInfo", method=RequestMethod.POST)
	public Object marketInfo(String userId, String businessNo){
		
		if(businessNo == null){
			Shop shop = myMarketService.selectFirstShop(userId);
			
			if(shop == null) {
				businessNo =  null;
			}else {
				businessNo = myMarketService.selectFirstShop(userId).getBusinessNo();
			}
		}
		
		HashMap<String, Object> resultMap = new HashMap<String, Object>();
		
		resultMap.put("shops", myMarketService.selectMarketList(userId));
		resultMap.put("shopInfo", myMarketService.selectShop(businessNo));
		resultMap.put("shopPhotos", myMarketService.selectShopPhoto(businessNo));
		resultMap.put("shopMenu", myMarketService.selectMenu(businessNo));
		
/*		System.out.println("shops : " + myMarketService.selectMarketList(userId));
		System.out.println("shopInfo : " + myMarketService.selectShop(businessNo));
		System.out.println("shopPhotos : " + myMarketService.selectShopPhoto(businessNo));
		System.out.println("shopMenu : " + myMarketService.selectMenu(businessNo));
		System.out.println(resultMap);*/
		
		resultMap.put("status", "success");
		
		return resultMap;
	}
	
	@RequestMapping(value="/marketUpdate", method=RequestMethod.POST)
	public Object marketUpdate(String bno, String time, String phone, String addr, String info, String intro){
		HashMap<String, Object> resultMap = new HashMap<String, Object>();
		
		myMarketService.showUpdate(bno, time, phone,addr,info, intro);
		
		resultMap.put("shopInfo", myMarketService.selectShop(bno));
		
		return resultMap;
	}
	
	@RequestMapping(value="/menuUpdate", method=RequestMethod.POST)
	public Object menuUpdate(int menuId, String menuName, int menuPrice){
		HashMap<String, Object> resultMap = new HashMap<String, Object>();
		
		myMarketService.menuUpdate(menuId, menuName, menuPrice);
		
		resultMap.put("menuUpdate", myMarketService.showMenu(menuId));
		
		return resultMap;
	}
	
	@RequestMapping(value="/marketList", method=RequestMethod.POST)
	public Object marketList(String userId){
		HashMap<String, Object> resultMap = new HashMap<String, Object>();
		resultMap.put("shopList", myMarketService.selectMarketList(userId));
		
		return resultMap;
	}
	
}
