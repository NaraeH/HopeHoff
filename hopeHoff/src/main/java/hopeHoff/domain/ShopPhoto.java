package hopeHoff.domain;

public class ShopPhoto {
	protected String businessNo;
	protected String mainPhoto;
	protected String detailPhoto1;
	protected String detailPhoto2;
	protected String detailPhoto3;
	
	@Override
	public String toString() {
		return "ShopPhoto [businessNo=" + businessNo + ", mainPhoto="
				+ mainPhoto + ", detailPhoto1=" + detailPhoto1
				+ ", detailPhoto2=" + detailPhoto2 + ", detailPhoto3="
				+ detailPhoto3 + "]";
	}

	public String getBusinessNo() {
		return businessNo;
	}

	public void setBusinessNo(String businessNo) {
		this.businessNo = businessNo;
	}

	public String getMainPhoto() {
		return mainPhoto;
	}

	public void setMainPhoto(String mainPhoto) {
		this.mainPhoto = mainPhoto;
	}

	public String getDetailPhoto1() {
		return detailPhoto1;
	}

	public void setDetailPhoto1(String detailPhoto1) {
		this.detailPhoto1 = detailPhoto1;
	}

	public String getDetailPhoto2() {
		return detailPhoto2;
	}

	public void setDetailPhoto2(String detailPhoto2) {
		this.detailPhoto2 = detailPhoto2;
	}

	public String getDetailPhoto3() {
		return detailPhoto3;
	}

	public void setDetailPhoto3(String detailPhoto3) {
		this.detailPhoto3 = detailPhoto3;
	}
	
}
