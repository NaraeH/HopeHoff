package hopeHoff.domain;

public class User {
	
	protected String userId;
	protected String userName;
	protected String userType;
	protected String userPassWord;
	protected String userEmail;
	protected String userPhone;
	
	
	
	
	@Override
	public String toString() {
		return "User [userId=" + userId + ", userName=" + userName
				+ ", userType=" + userType + ", userPassWord=" + userPassWord
				+ ", userEmail=" + userEmail + ", userPhone=" + userPhone + "]";
	}
	public String getUserId() {
		return userId;
	}
	public void setUserId(String userId) {
		this.userId = userId;
	}
	public String getUserName() {
		return userName;
	}
	public void setUserName(String userName) {
		this.userName = userName;
	}
	public String getUserType() {
		return userType;
	}
	public void setUserType(String userType) {
		this.userType = userType;
	}
	public String getUserPassWord() {
		return userPassWord;
	}
	public void setUserPassWord(String userPassWord) {
		this.userPassWord = userPassWord;
	}
	public String getUserEmail() {
		return userEmail;
	}
	public void setUserEmail(String userEmail) {
		this.userEmail = userEmail;
	}
	public String getUserPhone() {
		return userPhone;
	}
	public void setUserPhone(String userPhone) {
		this.userPhone = userPhone;
	}
	
	

}
