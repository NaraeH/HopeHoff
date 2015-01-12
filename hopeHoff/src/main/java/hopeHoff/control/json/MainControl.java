package hopeHoff.control.json;

import hopeHoff.dao.MenuDao;
import hopeHoff.dao.ShopDao;

import java.io.FileReader;
import java.util.HashMap;

import org.json.simple.JSONObject;
import org.json.simple.parser.JSONParser;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

@Controller
@RequestMapping("/main")
public class MainControl {
	@Autowired ShopDao shopDao;
	@Autowired MenuDao menuDao;
	
	@RequestMapping("/keyword")
	public Object keywords(){
		HashMap<String, Object> resultMap= null;
		
		try{
			JSONParser parser = new JSONParser();            
			String path = MainControl.class.getResource("../../domain/keyword.json").getPath();
			
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
	
	@RequestMapping(value="/list", method=RequestMethod.GET)
	public Object list(String keywordGroup, String keyword ){
		HashMap<String, String> paraMap = new HashMap<String, String>();
		paraMap.put("keywordGroup", keywordGroup);
		paraMap.put("keyword", keyword);

		HashMap<String, Object> resultMap = new HashMap<String, Object>();
		resultMap.put("shops", shopDao.selectList(paraMap));
		
		return resultMap;
	}
	
	@RequestMapping("/detail")
	public Object detail(String businessNo){
		HashMap<String, Object> resultMap = new HashMap<String, Object>();
		resultMap.put("shopDetail", shopDao.selectOne(businessNo));
		resultMap.put("shopPhotos", shopDao.selectPhoto(businessNo));
		resultMap.put("shopMenu", menuDao.selectMenu(businessNo));
		
		return resultMap;
	}
	
	public static void main(String[] args) {
		MainControl mainControl = new MainControl();
		
		System.out.println(mainControl.keywords());
	}

}
