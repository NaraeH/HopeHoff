package hopeHoff.domain;

import java.io.Serializable;
import java.util.Date;

public class ReservationListItem implements Serializable {

	private static final long serialVersionUID = 1L;
	
	protected int reservationNo;
	protected String uPhone;
	protected Date reservationDate;
	protected String reservationStatus;
	protected String uId;
	
	@Override
	public String toString() {
		return "ReservationListItem [reservationNo=" + reservationNo
				+ ", uPhone=" + uPhone + ", reservationDate=" + reservationDate
				+ ", reservationStatus=" + reservationStatus + ", uId=" + uId
				+ "]";
	}

	public int getReservationNo() {
		return reservationNo;
	}

	public void setReservationNo(int reservationNo) {
		this.reservationNo = reservationNo;
	}

	public String getuPhone() {
		return uPhone;
	}

	public void setuPhone(String uPhone) {
		this.uPhone = uPhone;
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

	public String getuId() {
		return uId;
	}

	public void setuId(String uId) {
		this.uId = uId;
	}
	
	
}
