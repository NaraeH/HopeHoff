package hopeHoff.domain;

public class Shop {

	protected String businessNo;
	protected String userId;
	protected String shopName;
	protected String shopAddress;
	protected String shopPhone;
	protected String shopTime;
	protected String shopIntro;
	protected String shopPhoto;
	protected String shopArea;
	protected String shopType;
	protected String shopSnack;
	
	
	
	@Override
	public String toString() {
		return "Shop [businessNo=" + businessNo + ", userId=" + userId
				+ ", shopName=" + shopName + ", shopAddress=" + shopAddress
				+ ", shopPhone=" + shopPhone + ", shopTime=" + shopTime
				+ ", shopIntro=" + shopIntro + ", shopPhoto=" + shopPhoto
				+ ", shopArea=" + shopArea + ", shopType=" + shopType
				+ ", shopSnack=" + shopSnack + "]";
	}
	
	public String getBusinessNo() {
		return businessNo;
	}
	public void setBusinessNo(String businessNo) {
		this.businessNo = businessNo;
	}
	public String getUserId() {
		return userId;
	}
	public void setUserId(String userId) {
		this.userId = userId;
	}
	public String getShopName() {
		return shopName;
	}
	public void setShopName(String shopName) {
		this.shopName = shopName;
	}
	public String getShopAddress() {
		return shopAddress;
	}
	public void setShopAddress(String shopAddress) {
		this.shopAddress = shopAddress;
	}
	public String getShopPhone() {
		return shopPhone;
	}
	public void setShopPhone(String shopPhone) {
		this.shopPhone = shopPhone;
	}
	public String getShopTime() {
		return shopTime;
	}
	public void setShopTime(String shopTime) {
		this.shopTime = shopTime;
	}
	public String getShopIntro() {
		return shopIntro;
	}
	public void setShopIntro(String shopIntro) {
		this.shopIntro = shopIntro;
	}
	public String getShopPhoto() {
		return shopPhoto;
	}
	public void setShopPhoto(String shopPhoto) {
		this.shopPhoto = shopPhoto;
	}
	public String getShopArea() {
		return shopArea;
	}
	public void setShopArea(String shopArea) {
		this.shopArea = shopArea;
	}
	public String getShopType() {
		return shopType;
	}
	public void setShopType(String shopType) {
		this.shopType = shopType;
	}
	public String getShopSnack() {
		return shopSnack;
	}
	public void setShopSnack(String shopSnack) {
		this.shopSnack = shopSnack;
	}
	
	
	
}
