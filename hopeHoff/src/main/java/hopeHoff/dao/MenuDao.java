package hopeHoff.dao;

import hopeHoff.domain.Menu;

import java.util.HashMap;
import java.util.List;

public interface MenuDao {
	public List<Menu> selectMenu(String businessNo);
	public void updateMenu(HashMap<String, Object> paramMap);
}
