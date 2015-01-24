package hopeHoff.service;

import hopeHoff.dao.ShopDao;
import hopeHoff.domain.Shop;
import hopeHoff.domain.ShopPhoto;

import java.util.HashMap;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class myMarketService {
  @Autowired ShopDao shopDao;
/*   public List<?> showInfo(String userId) {
	    HashMap<String,String> params = new HashMap<>();
	    params.put("userId",userId);
	    System.out.println("shopDao.showInfo(userId):  "+shopDao.showInfo(userId));
		return shopDao.showInfo(userId);
	}*/
   
    public void showUpdate(String bno, String time, String phone, String addr, String info, String intro) {
    	HashMap<String,String> params = new HashMap<>();
    	 params.put("bno", bno);
        params.put("time", time);
        params.put("phone", phone);
        params.put("addr", addr);
        params.put("info", info);
        params.put("intro", intro);
        shopDao.showUpdate(params);
	
    }
    
    
    public Shop selectFirstShop(String userId){
  	  return shopDao.selectFirstShop(userId);
    }
    
    public Shop selectShop(String businessNo){
    	  return shopDao.selectShop(businessNo);
     }
    
    public ShopPhoto selectShopPhoto(String businessNo){
  	  return shopDao.selectPhoto(businessNo);
    }

    public List<?> selectMenu(String businessNo){
    	  return shopDao.selectMenu(businessNo);
      }
    
    public List<?> selectMarketList(String userId){
    	return shopDao.selectMarketList(userId);
    }

   
   /*  public List<?> showList(String userId) {
	   HashMap<String,String> params = new HashMap<>();
	    params.put("userId",userId);
	    System.out.println("shopDao.showList(userId):  "+shopDao.showList(userId));
		return shopDao.showList(userId);
	}

   public List<?> showMenu(String userId) {
	   HashMap<String,String> params = new HashMap<>();
	    params.put("userId",userId);
	    System.out.println("shopDao.showMenu(userId):  "+shopDao.showMenu(userId));
		return shopDao.showMenu(userId);

    }
  
 public User validate(String uId, String uPwd) {
    HashMap<String,String> params = new HashMap<>();
    params.put("uId", uId);
    params.put("uPwd", uPwd);
    return userDao.existUser(params);
  }
  
  public List<User> getList(){
	  return userDao.selectPhoneList();
  }

  public void add(String uType, String uId, String uName, String uPwd, String uPhone) {
	  HashMap<String,String> params = new HashMap<>();
	    params.put("uType",uType);
	    params.put("uId", uId);
	    params.put("uName", uName);
	    params.put("uPwd", uPwd);
	    params.put("uPhone", uPhone);

	    userDao.insert(params);
  }
  
  public Object view(String uId){
	  HashMap<String,String> params = new HashMap<>();
	  params.put("uId", uId);
	  return userDao.selectOne(uId);
  }
  
  public void update(String whichCol, String changeValue, String userId){
	  HashMap<String,String> params = new HashMap<>();
	  params.put("whichCol", whichCol);
	  params.put("changeValue", changeValue);
	  params.put("userid", userId);
	 userDao.updateUser(params);
  }
*/


}

