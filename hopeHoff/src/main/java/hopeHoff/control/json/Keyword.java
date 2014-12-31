package hopeHoff.control.json;

import java.io.FileReader;
import java.util.HashMap;

import org.json.simple.JSONArray;
import org.json.simple.JSONObject;
import org.json.simple.parser.JSONParser;
import org.springframework.web.bind.annotation.RequestMapping;

@RequestMapping("json/keyword")
public class Keyword {
	

	@RequestMapping("/keyword")
	public Object keywords(){
		JSONArray region= null;
		
		try{
			JSONParser parser = new JSONParser();            
			String path = Keyword.class.getResource("").getPath();
			JSONObject keyword = (JSONObject) parser.parse(new FileReader(path  + "keyword.json"));
			
			//region = (JSONArray) keyword.get("region");
			
			HashMap<String, Object> keywords = new HashMap<String, Object>();
			keywords.put("region", keyword.get("region"));
			
		}catch(Exception e){
			e.printStackTrace();
		}
		return region;
	}
	
	public static void main(String[] args) {

		Keyword keyword = new Keyword();
		
		System.out.println(keyword.keywords());
		System.out.println();
	}
}
