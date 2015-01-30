package hopeHoff.domain;

public class Comment {
	int reservationNo;
	String businessNo;
	String date;
	String content;
	String userId;
	String photo;
	
	
	@Override
	public String toString() {
		return "Comment [reservationNo=" + reservationNo + ", businessNo="
				+ businessNo + ", date=" + date + ", content=" + content
				+ ", userId=" + userId + ", photo=" + photo + "]";
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
	public String getDate() {
		return date;
	}
	public void setDate(String date) {
		this.date = date;
	}
	public String getContent() {
		return content;
	}
	public void setContent(String content) {
		this.content = content;
	}
	public String getUserId() {
		return userId;
	}
	public void setUserId(String userId) {
		this.userId = userId;
	}
	public String getPhoto() {
		return photo;
	}
	public void setPhoto(String photo) {
		this.photo = photo;
	}
	
	
	
}
