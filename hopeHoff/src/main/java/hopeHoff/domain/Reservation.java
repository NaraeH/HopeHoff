package hopeHoff.domain;

import java.util.Date;

public class Reservation {

	protected int reservationNo;
	protected String businessNo;
	protected Date reservationDate;
	protected String reservationContent;
	protected String userId;
	
	@Override
	public String toString() {
		return "Reservation [reservationNo=" + reservationNo + ", businessNo="
				+ businessNo + ", reservationDate=" + reservationDate
				+ ", reservationContent=" + reservationContent + ", userId="
				+ userId + "]";
	}
	
	public int getReservationNo() {
		return reservationNo;
	}
	public void setReservationNo(int reservationNo) {
		this.reservationNo = reservationNo;
	}
	public String getBusinessNo() {
		return businessNo;
	}
	public void setBusinessNo(String businessNo) {
		this.businessNo = businessNo;
	}
	public Date getReservationDate() {
		return reservationDate;
	}
	public void setReservationDate(Date reservationDate) {
		this.reservationDate = reservationDate;
	}
	public String getReservationContent() {
		return reservationContent;
	}
	public void setReservationContent(String reservationContent) {
		this.reservationContent = reservationContent;
	}
	public String getUserId() {
		return userId;
	}
	public void setUserId(String userId) {
		this.userId = userId;
	}
	
	
}
