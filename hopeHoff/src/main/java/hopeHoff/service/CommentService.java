package hopeHoff.service;

import hopeHoff.dao.CommentDao;
import hopeHoff.domain.Comment;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Propagation;
import org.springframework.transaction.annotation.Transactional;

@Service
public class CommentService {
	@Autowired CommentDao commentDao;
	
	public List<?> commentList(String businessNo){
		return commentDao.selectCommentList(businessNo);
	}
	
	public List<?> writeCommentList(String userId){
		return commentDao.toDoCommentList(userId);
	}
	 @Transactional(
		      rollbackFor=Exception.class, 
		      propagation=Propagation.REQUIRED)
		  public void add(Comment comment) {
			  //오늘 날짜 지정
			  commentDao.insert(comment);
		  }
}
