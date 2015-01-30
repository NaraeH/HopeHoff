package hopeHoff.dao;

import hopeHoff.domain.Comment;

import java.util.List;

public interface CommentDao {
	
	public List<?> selectCommentList(String businessNo);
	public List<?> toDoCommentList(String userId);
	public void insert(Comment comment);

}
