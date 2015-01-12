package hopeHoff.dao;

import hopeHoff.domain.Shop;
import hopeHoff.domain.ShopPhoto;

import java.util.List;

public interface ShopDao {
	public List<?> selectList();
	public Shop selectOne(String businessNo);
	public ShopPhoto selectPhoto(String businessNo);
}
