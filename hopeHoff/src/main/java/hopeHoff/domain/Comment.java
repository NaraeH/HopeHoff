package hopeHoff.domain;

public class Comment {
	int reserNo;
	String businessNo;
	String date;
	String content;
	String userId;
	String photo;
	
	@Override
	public String toString() {
		return "Comment [reserNo=" + reserNo + ", businessNo=" + businessNo
				+ ", date=" + date + ", content=" + content + ", userId="
				+ userId + ", photo=" + photo + "]";
	}

	public int getReserNo() {
		return reserNo;
	}

	public void setReserNo(int reserNo) {
		this.reserNo = reserNo;
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
