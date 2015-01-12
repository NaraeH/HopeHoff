package hopeHoff.dao;

import hopeHoff.domain.Menu;

import java.util.List;

public interface MenuDao {
	public List<Menu> selectMenu(String businessNo);
}
