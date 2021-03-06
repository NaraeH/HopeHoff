package hopeHoff.control.json;

import hopeHoff.domain.Comment;
import hopeHoff.service.CommentService;

import java.io.File;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.HashMap;

import javax.servlet.ServletContext;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.multipart.MultipartFile;

@Controller
@RequestMapping("/json/commentControl")
public class CommentControl {
	@Autowired CommentService commentService;
	@Autowired ServletContext servletContext;
	
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
	
	@RequestMapping(value="/addComment", method=RequestMethod.POST)
	public Object add(String content, MultipartFile commentPhoto, int reservationNo) throws Exception {
		
		
		String path = CommentControl.class.getResource("../../../../../img/comment").getPath();
		      String filename = System.currentTimeMillis() + "_.jpg";
		      File file = new File(path + filename);
		      
		      
		    
		      commentPhoto.transferTo(file);
		      
		      Date date = new Date();
			  SimpleDateFormat sdf = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");
			  String currentTimeString = sdf.format(date);
		     
			  
		      Comment comment = new Comment();
		      comment.setReservationNo(reservationNo);
		      comment.setPhoto(filename);
		      comment.setContent(content);
		      comment.setDate(currentTimeString);
		      
		      commentService.add(comment);
		HashMap<String, Object> resultMap = new HashMap<String, Object>();
		resultMap.put("status", "success");
		return resultMap;
	}
	
	

}
