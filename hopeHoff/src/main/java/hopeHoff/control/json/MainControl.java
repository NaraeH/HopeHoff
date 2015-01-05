package hopeHoff.control.json;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class MainControl {
	
	@RequestMapping("/main")
	public String testMain() throws Exception {
		return "main/main";
	}

}
