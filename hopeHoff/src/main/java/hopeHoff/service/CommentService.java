package hopeHoff.service;

import java.util.List;

import hopeHoff.dao.CommentDao;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class CommentService {
	@Autowired CommentDao commentDao;
	
	public List<?> commentList(String businessNo){
		return commentDao.selectCommentList(businessNo);
	}
}
