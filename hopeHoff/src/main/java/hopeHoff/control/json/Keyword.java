package hopeHoff.control.json;

import java.io.FileReader;

import org.json.simple.JSONArray;
import org.json.simple.JSONObject;
import org.json.simple.parser.JSONParser;

public class Keyword {
	

	public Object keywords(){
		JSONArray region= null;
		try{
			JSONParser parser = new JSONParser();            C:\Users\Narae\git\HopeHoff.git\hopeHoff\src\main\java\hopeHoff\control\json\Keyword.java
			JSONObject keyword = (JSONObject) parser.parse(new FileReader("C:/Users/Narae/git/HopeHoff.git/hopeHoff/src/main/java/keyword.json"));
			
			region = (JSONArray) keyword.get("지역");
			
		}catch(Exception e){
			e.printStackTrace();
		}
		return region;
	}
	
	public static void main(String[] args) {
		Keyword keyword = new Keyword();
		
		System.out.println(keyword.keywords());
	}
			
	
	

}
