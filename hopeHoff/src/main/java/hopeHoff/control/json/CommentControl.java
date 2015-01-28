package hopeHoff.control.json;

import hopeHoff.service.CommentService;

import java.util.HashMap;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

@Controller
@RequestMapping("/json/commentControl")
public class CommentControl {
	@Autowired CommentService commentService;
	
	@RequestMapping(value="/getComments", method=RequestMethod.POST)
	public Object getComments(String businessNo){
		HashMap<String, Object> resultMap = new HashMap<String, Object>();
		resultMap.put("comments", commentService.commentList(businessNo));
		return resultMap;
	}
	
	@RequestMapping(value="/isComments", method=RequestMethod.POST)
	public Object isComments(String userId){
		HashMap<String, Object> resultMap = new HashMap<String, Object>();
		resultMap.put("comments", commentService.writeCommentList(userId));
		
		return resultMap;
	}

}
