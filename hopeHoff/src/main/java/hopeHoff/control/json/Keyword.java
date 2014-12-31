package hopeHoff.control.json;

import java.io.FileReader;
import java.util.HashMap;

import org.json.simple.JSONObject;
import org.json.simple.parser.JSONParser;
import org.springframework.web.bind.annotation.RequestMapping;

@RequestMapping("json")
public class Keyword {
	

	@RequestMapping("/main.jsp")
	public Object keywords(){
		HashMap<String, Object> keywords= null;
		
		try{
			JSONParser parser = new JSONParser();            
			String path = Keyword.class.getResource("").getPath();
			JSONObject keyword = (JSONObject) parser.parse(new FileReader(path  + "keyword.json"));
			
			keywords = new HashMap<String, Object>();
			keywords.put("region", keyword.get("region"));
			keywords.put("place", keyword.get("place"));
			keywords.put("snack", keyword.get("snack"));
			
		}catch(Exception e){
			e.printStackTrace();
		}
		return keywords;
	}
	
	public static void main(String[] args) {

		Keyword keyword = new Keyword();
		
		System.out.println(keyword.keywords().toString());
		System.out.println();
	}
}
