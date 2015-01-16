package hopeHoff.control.json;

import hopeHoff.domain.User;
import hopeHoff.service.UserService;

import java.util.HashMap;

import javax.servlet.http.Cookie;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

@Controller("json.authControl") 
@RequestMapping("/json/auth") 
public class AuthControl {
   //UserService userService = new UserService();
	@Autowired UserService userService;

	@RequestMapping(value="/loginUser", method=RequestMethod.GET)
  public Object loginUser(HttpSession session) throws Exception {
    HashMap<String,Object> resultMap = new HashMap<>();
    
    if (session.getAttribute("loginUser") != null) {
      resultMap.put("status", "success");
      resultMap.put("loginUser", session.getAttribute("loginUser"));
      System.out.println("session.getAttribute('loginUser')"+session.getAttribute("loginUser"));
      System.out.println("resultMap:"+resultMap);
      
    } else {
      resultMap.put("status", "fail");
    }
    
    return resultMap;
  }
	
	@RequestMapping(value="/chkUser", method=RequestMethod.GET)
	  public Object chkUser(String userId, String userPwd) throws Exception {
		HashMap<String, Object> resultMap = new HashMap<String, Object>();
		User user =  userService.validate(userId, userPwd);
		
		if(user != null) {
			resultMap.put("status", "success");
			resultMap.put("user", user);
		}else {
			resultMap.put("status", "fail");
		}
	    return resultMap;
	  }
	
  @RequestMapping(value="/login", method=RequestMethod.POST)
  public Object login(
      String uId, 
      String uPwd, 
      boolean save,
      String requestUrl, /* 세션에 저장된 값을 달라고 하려면?*/
      HttpServletResponse response,
      HttpSession session) throws Exception {

    if (save) { // 쿠키로 아이디 저장
      Cookie cookie = new Cookie("uId", uId);
      cookie.setMaxAge(60 * 60 * 24 * 15);
      response.addCookie(cookie);
    } else {
      Cookie cookie = new Cookie("uId", "");
      cookie.setMaxAge(0); // 무효화시킴
      response.addCookie(cookie);
    }
    
    User user = userService.validate(uId, uPwd);
    
    HashMap<String,Object> resultMap = new HashMap<>();
    
    if (user != null) {
      resultMap.put("status", "success");
      session.setAttribute("loginUser", user);
      
      System.out.println("id:"+user.getuId());
     
    } else {
      session.invalidate();
      resultMap.put("status", "fail");
    }
    
    return resultMap;
  }
  
  @RequestMapping("/logout")
  public Object execute(HttpSession session) throws Exception {
    session.invalidate();
    HashMap<String,Object> resultMap = new HashMap<>();
    resultMap.put("status", "success");
    return resultMap;
  }

  @RequestMapping(value="/add", method=RequestMethod.POST)
  public void add(
      String uType,
      String uId,
      String uName,
      String uPwd,
      String uPhone
      ) throws Exception {
	  userService.add(uType,uId,uName,uPwd,uPhone);
	  
  }
  
  @RequestMapping(value="/view")
  public Object view(String uId){
	  HashMap<String, Object> resultMap = new HashMap<String, Object>();
	  resultMap.put("User", userService.view(uId));
	  
	  return resultMap;
  }
  
  @RequestMapping(value="/updateUser", method=RequestMethod.POST)
  public Object updateUser(String userid, String password, String phoneNo) {
	  System.out.println("userid==>" + userid);
	  System.out.println("password==>" + password);
	  System.out.println("phoneNo==>" + phoneNo);
	  
	  if(password != null){
		  userService.update("UPASSWORD", password, userid);
	  }
	  
	  if(phoneNo != null){
		  userService.update("UPHONE", phoneNo, userid);
	  }
	  
	  HashMap<String, Object> resultMap = new HashMap<String, Object>();
	  resultMap.put("status", "success");
    return resultMap;
  }
  
}
















