package hopeHoff.dao;

import java.util.List;
import java.util.Map;


public interface ShopDao {
	public List<?> selectList();
	public Map<String, Object> selectOne(String name);
	public Map<String, Object> selectPhoto(String name);

}
