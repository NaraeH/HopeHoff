package hopeHoff.domain;

import java.io.Serializable;

public class User implements Serializable {
  private static final long serialVersionUID = 1L;
  
  	protected String uId;
	protected String uName;
	protected String uType;
	protected String uPwd;
	protected String uEmail;
	protected String uPhone;
	public String getuId() {
		return uId;
	}
	public void setuId(String uId) {
		this.uId = uId;
	}
	public String getuName() {
		return uName;
	}
	public void setuName(String uName) {
		this.uName = uName;
	}
	public String getuType() {
		return uType;
	}
	public void setuType(String uType) {
		this.uType = uType;
	}
	public String getuPwd() {
		return uPwd;
	}
	public void setuPwd(String uPwd) {
		this.uPwd = uPwd;
	}
	public String getuEmail() {
		return uEmail;
	}
	public void setuEmail(String uEmail) {
		this.uEmail = uEmail;
	}
	public String getuPhone() {
		return uPhone;
	}
	public void setuPhone(String uPhone) {
		this.uPhone = uPhone;
	}
	@Override
	public String toString() {
		return "User [uId=" + uId + ", uName=" + uName + ", uType=" + uType
				+ ", uPwd=" + uPwd + ", uEmail=" + uEmail + ", uPhone="
				+ uPhone + "]";
	}
	
	
	
	
	
	
}
