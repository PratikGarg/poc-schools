package com.schooling.publisher.controller;

import java.util.Iterator;

import javax.servlet.http.HttpServletResponse;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.multipart.MultipartHttpServletRequest;

import com.schooling.publisher.constant.Constants;

@RestController
@RequestMapping(value = Constants.URI_API)
public class FileUploadController {

	@RequestMapping(value = "/document", method = RequestMethod.POST)
	public void UploadFile(MultipartHttpServletRequest request,
			HttpServletResponse response) {
		Iterator<String> itr = request.getFileNames();
		MultipartFile file = request.getFile(itr.next());
		String fileName = file.getOriginalFilename();
		System.out.println(fileName);
	}

	@RequestMapping(value = "/document/{id}", method = RequestMethod.GET)
	@ResponseBody
	public String getFile() {
		return "Hello";
	}

}
