package hopeHoff.control.json;

import java.io.FileReader;
import java.util.HashMap;

import org.json.simple.JSONObject;
import org.json.simple.parser.JSONParser;
import org.springframework.web.bind.annotation.RequestMapping;

@RequestMapping("json")
public class Keyword {
	

	@RequestMapping("/keyword")
	public Object keywords(){
		HashMap<String, Object> keywords= null;
		
		try{
			JSONParser parser = new JSONParser();            
			String path = Keyword.class.getResource("../../domain/keyword.json").getPath();
			
			JSONObject keyword = (JSONObject) parser.parse(new FileReader(path));
			
			keywords = new HashMap<String, Object>();
			keywords.put("region", keyword.get("region"));
			keywords.put("place", keyword.get("place"));
			keywords.put("snack", keyword.get("snack"));
			keywords.put("people", keyword.get("people"));
			
		}catch(Exception e){
			e.printStackTrace();
		}
		return keywords;
	}
	
	public static void main(String[] args) {

		Keyword keyword = new Keyword();
		
		System.out.println(keyword.keywords());
		System.out.println();
	}
}
