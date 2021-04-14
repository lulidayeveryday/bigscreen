package com.hollycrm.hollyv8.local.api.rest;
import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.io.OutputStreamWriter;
import java.net.MalformedURLException;
import java.net.URISyntaxException;
import java.net.URL;
import java.net.URLConnection;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.apache.http.HttpEntity;
import org.apache.http.client.methods.CloseableHttpResponse;
import org.apache.http.client.methods.HttpGet;
import org.apache.http.client.utils.URIBuilder;
import org.apache.http.impl.client.CloseableHttpClient;
import org.apache.http.impl.client.HttpClients;
import org.apache.http.util.EntityUtils;

import com.alibaba.fastjson.JSON;
import com.alibaba.fastjson.JSONArray;
import com.alibaba.fastjson.JSONObject;

public class APIServerUtil {
	
	//移网营销数据接口地址
	private static String urlY = "http://133.128.186.45:9080/api/router/open-api/gojmp/riyaQzaa";
	//固网营销数据接口地址
	private static String urlG = "http://133.128.186.45:9080/api/router/open-api/gojmp/7vuEBjaa";
	//token获取地址
	private static String tokenUrl = "http://133.128.186.45:9080/api/router/open-api/oau/token/refresh";
	//移网营销API唯一标识
	private static String itemNoY = "694853040721072128";
	//固网营销API唯一标识
	private static String itemNoG = "694853057485705216";
	//原始token
	private static String tokenY = "eyJhbGciOiJIUzUxMiIsInppcCI6IkRFRiJ9.eNo8jEEOgjAQRe8yS0OTmelMaTkMSQvFoAkYCkZjvLtl4_a9__4HbvsMHagkHUTJxAmtEQrZxMGSGbUdNOSR2zRBA-VIdeyCMKISO7GeQ-uwv_RU9VxK1ft6z4speXvm7YRxh47UqyqjYgP59fgDd4K4vMf1eqb1UDB4K440IDN6-P4AAAD__w.TYmZ_Yyx2koqk4nlaHDY1zI3goTDAhkC8IKOckpGR40W5hhwlIGeH_unVtuO4r-6r0o2gBdEKSrlqgyr8YjOkg";
	//账户
	private static String account = "hollycrm";
	//密码
	private static String password=  "3edc#EDC";
	//token刷新频率
	private static String refreshPeriodTime = "300";
	
	/**
	 * 
	 * @param type 1:移网用户 2：固网用户
	 * @param current 设置当前页
	 * @param size 设置每页显示个数
	 * @param serviceNo 用户号码
	 * @return List<Map>
	 */
	public static List<Map> getCustInfo(String type,String current,String size,String serviceNo){
		List<Map> list = new ArrayList<Map>();
		Map<String, String> paramMap = new HashMap<String, String>();
		paramMap.put("current", current );
		paramMap.put("size", size);
		paramMap.put("DEVICE_NUMBER", serviceNo);
		Map<String, String> headerMap = new HashMap<String, String>();
		try{
			String token = getToken(tokenUrl);
			if(!token.equals("")){
				headerMap.put("e-app-token",token);
				String body = "";
				if("1".equals(type)){
					paramMap.put("e-item-no", itemNoY);
					body = sendGet(urlY, headerMap, paramMap, "utf-8");
				}else if("2".equals(type)){
					paramMap.put("e-item-no", itemNoG);
					body = sendGet(urlG, headerMap, paramMap, "utf-8");
				}
		        JSONObject jsonobject = JSONObject.parseObject(body);
		        String data = jsonobject.getString("data");
		        jsonobject = JSONObject.parseObject(data);
		        JSONArray jsonArray = jsonobject.getJSONArray("list");
		        if(jsonArray.size()>0){
		        	for(int i =0;i<jsonArray.size();i++){
		                jsonobject =jsonArray.getJSONObject(i);
		                Map maps = (Map)JSON.parse(jsonobject.toString());
		                list.add(maps);
		        	}
		        }
			}else{
				list = null;
			}
		}catch(Exception e){
			e.printStackTrace();
		}
		return list;
	}
	public static String sendGet(String url, Map<String, String> headerMap, Map<String, String> paramMap, String encoding) throws IOException, URISyntaxException {
		String body = "";
		CloseableHttpClient client = HttpClients.createDefault();
		URIBuilder uriBuilder = new URIBuilder(url);
		for(String key : paramMap.keySet()){
			uriBuilder.addParameter(key, paramMap.get(key));
		}
		HttpGet httpGet = new HttpGet(uriBuilder.build());
		httpGet.setHeader("Content-type", "application/json");
		for(String key : headerMap.keySet()){
			httpGet.setHeader(key, headerMap.get(key));
		}
		CloseableHttpResponse response = client.execute(httpGet);
		HttpEntity entity = response.getEntity();
		if (entity != null) {
			body = EntityUtils.toString(entity, encoding);
		}
		EntityUtils.consume(entity);
		response.close();
		return body;
	}
	public static String getToken(String urlStr) {
		String token="";
		try {
			URL url = new URL(urlStr);
			URLConnection con = url.openConnection();
			con.setDoOutput(true);
			con.setRequestProperty("Pragma:", "no-cache");
			con.setRequestProperty("Cache-Control", "no-cache");
			con.setRequestProperty("Content-Type", "application/json"); 
			
			OutputStreamWriter out = new OutputStreamWriter(con.getOutputStream());
			Map<String, Object> m1=new HashMap<String, Object>();;
		 	m1.put("token", tokenY);
		 	m1.put("account", account);
		 	m1.put("password", password);
		 	m1.put("refreshPeriodTime", refreshPeriodTime);
			String jsInfo = JSON.toJSONString(m1);
			
			out.write(new String(jsInfo.getBytes("utf-8")));
			out.flush();
			out.close();
			BufferedReader br = new BufferedReader(new InputStreamReader(con.getInputStream()));
			String line = "";
			for (line = br.readLine(); line != null; line = br.readLine()) {
                JSONObject jsonobject = JSONObject.parseObject(line);
                token = jsonobject.getString("data");
			}
		} catch (MalformedURLException e) {
			e.printStackTrace();
		} catch (IOException e) {
			e.printStackTrace();
		}
		return token;
	}

	public static void main(String[] args){
//		List<Map> list = getCustInfo("2", "1", "20", "035900607721");
		List<Map> list = getCustInfo("1", "1", "20", "");
		if(list.size()>0){
			System.out.println(list.get(0));
			System.out.println(list.get(0).get("CITY_DESC"));
        }
	}
}