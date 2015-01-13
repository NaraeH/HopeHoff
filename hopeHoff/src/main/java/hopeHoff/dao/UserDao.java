package hopeHoff.dao;

import hopeHoff.domain.User;

import java.util.List;
import java.util.Map;

public interface UserDao {
  User existUser(Map<String,String> params);
  List<User> selectPhoneList();
  void insert(Map<String,String> params);
}
