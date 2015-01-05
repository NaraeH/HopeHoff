package hopeHoff.service;

import hopeHoff.dao.UserDao;
import hopeHoff.domain.User;

import java.util.HashMap;

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

}

