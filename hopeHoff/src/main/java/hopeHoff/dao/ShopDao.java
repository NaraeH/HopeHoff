package hopeHoff.dao;

import hopeHoff.domain.Shop;
import hopeHoff.domain.ShopPhoto;

import java.util.List;
import java.util.Map;

public interface ShopDao {
	public List<?> selectList(Map<String, String> param);
	public Shop selectOne(String businessNo);
	public ShopPhoto selectPhoto(String businessNo);
}
