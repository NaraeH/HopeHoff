package hopeHoff.domain;

public class Menu {

	protected int menuId;
	protected String BusinessNo;
	protected String menuName;
	protected int menuPrice;
	protected String menuPhoto;
	
	
	@Override
	public String toString() {
		return "Menu [menuId=" + menuId + ", BusinessNo=" + BusinessNo
				+ ", menuName=" + menuName + ", menuPrice=" + menuPrice
				+ ", menuPhoto=" + menuPhoto + "]";
	}


	public int getMenuId() {
		return menuId;
	}


	public void setMenuId(int menuId) {
		this.menuId = menuId;
	}


	public String getBusinessNo() {
		return BusinessNo;
	}


	public void setBusinessNo(String businessNo) {
		BusinessNo = businessNo;
	}


	public String getMenuName() {
		return menuName;
	}


	public void setMenuName(String menuName) {
		this.menuName = menuName;
	}


	public int getMenuPrice() {
		return menuPrice;
	}


	public void setMenuPrice(int menuPrice) {
		this.menuPrice = menuPrice;
	}


	public String getMenuPhoto() {
		return menuPhoto;
	}


	public void setMenuPhoto(String menuPhoto) {
		this.menuPhoto = menuPhoto;
	}
	
	
}
