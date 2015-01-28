package hopeHoff.dao;

import java.util.List;

public interface CommentDao {
	
	public List<?> selectCommentList(String businessNo);
	public List<?> toDoCommentList(String userId);

}
