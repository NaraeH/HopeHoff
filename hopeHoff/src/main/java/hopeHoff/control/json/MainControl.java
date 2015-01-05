package hopeHoff.control.json;

import java.io.FileReader;
import java.util.HashMap;

import org.json.simple.JSONObject;
import org.json.simple.parser.JSONParser;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequestMapping("/main")
public class MainControl {
	
	@RequestMapping("/main")
	public String testMain() throws Exception {
		return "main/main";
	}
	
	@RequestMapping("/keyword")
	public Object keywords(){
		HashMap<String, Object> resultMap= null;
		
		try{
			JSONParser parser = new JSONParser();            
			String path = Keyword.class.getResource("../../domain/keyword.json").getPath();
			
			JSONObject keyword = (JSONObject) parser.parse(new FileReader(path));
			
			resultMap = new HashMap<String, Object>();
			resultMap.put("keywordRegion", keyword.get("region"));
			resultMap.put("keywordPlace", keyword.get("place"));
			resultMap.put("keywordSnack", keyword.get("snack"));
			
		}catch(Exception e){
			e.printStackTrace();
		}
		return resultMap;
	}

}
