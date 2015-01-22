package hopeHoff.service;

import hopeHoff.dao.ShopDao;
import hopeHoff.domain.Shop;

import java.util.HashMap;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class myMarketService {
  @Autowired ShopDao shopDao;
   public List<?> showInfo(String userId) {
	    HashMap<String,String> params = new HashMap<>();
	    params.put("userId",userId);
	    System.out.println("shopDao.showInfo(userId):  "+shopDao.showInfo(userId));
		return shopDao.showInfo(userId);
	}
    public void showUpdate(String name, String time, String phone, String addr, String intro) {
    	HashMap<String,String> params = new HashMap<>();
    	 params.put("name", name);
        params.put("time", time);
        params.put("phone", phone);
        params.put("addr", addr);
        params.put("intro", intro);
        shopDao.showUpdate(params);
	
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

