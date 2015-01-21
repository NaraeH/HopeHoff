package hopeHoff.dao;

import hopeHoff.domain.Shop;
import hopeHoff.domain.ShopPhoto;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

public interface ShopDao {
	public List<?> selectList(Map<String, String> param);
	public Shop selectOne(String businessNo);
	public ShopPhoto selectPhoto(String businessNo);
	/*public List<?> showList(String userId);
	public List<?> showMenu(String userId);*/
	public List<?> showInfo(String userId);
	public void showUpdate(HashMap<String, String> params);
}
