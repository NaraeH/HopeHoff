package hopeHoff.domain;

public class Shop {

	protected String businessNo;
	protected String shopName;
	protected String shopIntro;
	protected String shopIntroAddr;
	protected String shopDetailAddr;
	protected String shopArea;
	protected String shopType;
	protected String shopSnack;
	protected String shopMainPhoto;
	protected String shopTime;
	protected String shopPhone;
	protected String shopInfo;
	
	
	@Override
	public String toString() {
		return "Shop [businessNo=" + businessNo + ", shopName=" + shopName
				+ ", shopIntro=" + shopIntro + ", shopIntroAddr="
				+ shopIntroAddr + ", shopDetailAddr=" + shopDetailAddr
				+ ", shopArea=" + shopArea + ", shopType=" + shopType
				+ ", shopSnack=" + shopSnack + ", shopMainPhoto="
				+ shopMainPhoto + ", shopTime=" + shopTime + ", shopPhone="
				+ shopPhone + ", shopInfo=" + shopInfo + "]";
	}
	public String getBusinessNo() {
		return businessNo;
	}
	public void setBusinessNo(String businessNo) {
		this.businessNo = businessNo;
	}
	public String getShopName() {
		return shopName;
	}
	public void setShopName(String shopName) {
		this.shopName = shopName;
	}
	public String getShopIntro() {
		return shopIntro;
	}
	public void setShopIntro(String shopIntro) {
		this.shopIntro = shopIntro;
	}
	public String getShopIntroAddr() {
		return shopIntroAddr;
	}
	public void setShopIntroAddr(String shopIntroAddr) {
		this.shopIntroAddr = shopIntroAddr;
	}
	public String getShopDetailAddr() {
		return shopDetailAddr;
	}
	public void setShopDetailAddr(String shopDetailAddr) {
		this.shopDetailAddr = shopDetailAddr;
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
	public String getShopMainPhoto() {
		return shopMainPhoto;
	}
	public void setShopMainPhoto(String shopMainPhoto) {
		this.shopMainPhoto = shopMainPhoto;
	}
	public String getShopTime() {
		return shopTime;
	}
	public void setShopTime(String shopTime) {
		this.shopTime = shopTime;
	}
	public String getShopPhone() {
		return shopPhone;
	}
	public void setShopPhone(String shopPhone) {
		this.shopPhone = shopPhone;
	}
	public String getShopInfo() {
		return shopInfo;
	}
	public void setShopInfo(String shopInfo) {
		this.shopInfo = shopInfo;
	}
	
	
}
