package hopeHoff.domain;

import java.util.Date;

public class ReservationList {

	protected int reservationNo;
	protected String userPhone;
	protected Date reservationDate;
	protected String reservationStatus;
	
	@Override
	public String toString() {
		return "ReservationList [reservationNo=" + reservationNo
				+ ", userPhone=" + userPhone + ", reservationDate="
				+ reservationDate + ", reservationStatus=" + reservationStatus
				+ "]";
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

	
	
	
}
