package hopeHoff.service;

import hopeHoff.dao.UserDao;
import hopeHoff.domain.User;

import java.util.HashMap;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class UserService {
  @Autowired UserDao userDao;
  
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

}

