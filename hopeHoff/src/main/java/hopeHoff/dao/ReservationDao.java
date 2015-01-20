package hopeHoff.dao;

import hopeHoff.domain.Reservation;

import java.util.List;
import java.util.Map;

public interface ReservationDao {
	public List<?> selectList(Map<String,Object> params);
	public void delete(int no);
	public void insert(Reservation reservation);
	public Reservation selectOne(Integer no);
	public int totalSize(String uId);

}
