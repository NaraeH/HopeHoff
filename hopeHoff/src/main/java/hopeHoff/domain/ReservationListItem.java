package hopeHoff.domain;

import java.io.Serializable;
import java.util.Date;

public class ReservationListItem implements Serializable {

	private static final long serialVersionUID = 1L;
	
	protected int reservationNo;
	protected Date reservationDate;
	protected String userName;
	protected String shopName;
	protected String reservationStatus;
	protected String uId;
	
	
		
	@Override
	public String toString() {
		return "ReservationListItem [reservationNo=" + reservationNo
				+ ", reservationDate=" + reservationDate + ", userName="
				+ userName + ", shopName=" + shopName + ", reservationStatus="
				+ reservationStatus + ", uId=" + uId + "]";
	}
	
	
	public int getReservationNo() {
		return reservationNo;
	}
	public void setReservationNo(int reservationNo) {
		this.reservationNo = reservationNo;
	}
	public Date getReservationDate() {
		return reservationDate;
	}
	public void setReservationDate(Date reservationDate) {
		this.reservationDate = reservationDate;
	}
	public String getUserName() {
		return userName;
	}
	public void setUserName(String userName) {
		this.userName = userName;
	}
	public String getShopName() {
		return shopName;
	}
	public void setShopName(String shopName) {
		this.shopName = shopName;
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
