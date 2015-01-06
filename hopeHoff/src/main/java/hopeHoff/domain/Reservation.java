package hopeHoff.domain;

import java.io.Serializable;
import java.util.Date;

public class Reservation implements Serializable {

	private static final long serialVersionUID = 1L;
	
	protected int reservationNo;
	protected String businessNo;
	protected Date reservationDate;
	protected String reservationContent;
	protected String userId;
	protected String reservationStatus;
	
	
	@Override
	public String toString() {
		return "Reservation [reservationNo=" + reservationNo + ", businessNo="
				+ businessNo + ", reservationDate=" + reservationDate
				+ ", reservationContent=" + reservationContent + ", userId="
				+ userId + ", reservationStatus=" + reservationStatus + "]";
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


	public String getReservationStatus() {
		return reservationStatus;
	}


	public void setReservationStatus(String reservationStatus) {
		this.reservationStatus = reservationStatus;
	}
	
	
}
