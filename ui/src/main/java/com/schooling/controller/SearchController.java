package com.schooling.controller;

import java.util.concurrent.ExecutionException;

import org.elasticsearch.action.get.GetResponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import com.schooling.service.ElasticSearchServiceImpl;


@Controller
@RequestMapping(value = "/in")
public class SearchController {
	
	@Autowired
	ElasticSearchServiceImpl  searchService;

	@RequestMapping("/{region}/{name}")
	@ResponseBody
	public GetResponse printHelloWorld(
			@PathVariable("region") String region,
			@PathVariable("name") String name) throws InterruptedException, ExecutionException {
		System.out.println(region);
		System.out.println(name);
		return searchService.search(1l); 
		
	}
	
	@RequestMapping("/")
	
	public String landingPage() {
		return "hearbeat";
	}
}
