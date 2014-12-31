package hopeHoff.domain;

import java.util.Date;

public class Board {

	protected int reservationNo;
	protected String boardContent;
	protected Date boardDate;
	protected String boardPhoto;
	
	
	@Override
	public String toString() {
		return "Board [reservationNo=" + reservationNo + ", boardContent="
				+ boardContent + ", boardDate=" + boardDate + ", boardPhoto="
				+ boardPhoto + "]";
	}


	public int getReservationNo() {
		return reservationNo;
	}


	public void setReservationNo(int reservationNo) {
		this.reservationNo = reservationNo;
	}


	public String getBoardContent() {
		return boardContent;
	}


	public void setBoardContent(String boardContent) {
		this.boardContent = boardContent;
	}


	public Date getBoardDate() {
		return boardDate;
	}


	public void setBoardDate(Date boardDate) {
		this.boardDate = boardDate;
	}


	public String getBoardPhoto() {
		return boardPhoto;
	}


	public void setBoardPhoto(String boardPhoto) {
		this.boardPhoto = boardPhoto;
	}
	
	
	
	
	
	
}
