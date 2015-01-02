package hopeHoff.dao;

import hopeHoff.domain.Reservation;

import java.util.List;
import java.util.Map;

public interface ReservationDao {
	public List<?> reservationList(Map<String,Object> params);
	public void delete(int no);
	public void insert(Reservation reservation);
	public Reservation selectOne(int no);
	public int totalSize();

}
