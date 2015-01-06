package hopeHoff.domain;

import java.io.Serializable;
import java.util.Date;

public class ReservationListItem implements Serializable {

	private static final long serialVersionUID = 1L;
	
	protected int reservationNo;
	protected String userPhone;
	protected Date reservationDate;
	protected String reservationStatus;
	protected String userId;
	
	
	@Override
	public String toString() {
		return "ReservationList [reservationNo=" + reservationNo
				+ ", userPhone=" + userPhone + ", reservationDate="
				+ reservationDate + ", reservationStatus=" + reservationStatus
				+ ", userId=" + userId + "]";
	}
	
	
	public int getReservationNo() {
		return reservationNo;
	}
	public void setReservationNo(int reservationNo) {
		this.reservationNo = reservationNo;
	}
	public String getUserPhone() {
		return userPhone;
	}
	public void setUserPhone(String userPhone) {
		this.userPhone = userPhone;
	}
	public Date getReservationDate() {
		return reservationDate;
	}
	public void setReservationDate(Date reservationDate) {
		this.reservationDate = reservationDate;
	}
	public String getReservationStatus() {
		return reservationStatus;
	}
	public void setReservationStatus(String reservationStatus) {
		this.reservationStatus = reservationStatus;
	}
	public String getUserId() {
		return userId;
	}
	public void setUserId(String userId) {
		this.userId = userId;
	}
	
}
