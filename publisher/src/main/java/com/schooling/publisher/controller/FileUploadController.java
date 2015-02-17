package com.schooling.publisher.controller;

import java.io.BufferedInputStream;
import java.io.File;
import java.io.FileInputStream;
import java.io.FileOutputStream;
import java.io.InputStream;
import java.io.OutputStream;
import java.util.Iterator;

import javax.servlet.ServletOutputStream;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.apache.commons.io.IOUtils;
import org.springframework.web.bind.annotation.PathVariable;
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
	@ResponseBody
	public String UploadFile(MultipartHttpServletRequest request,
			HttpServletResponse response) {
		Iterator<String> itr = request.getFileNames();
		MultipartFile file = request.getFile(itr.next());
		String fileName = file.getOriginalFilename();
		String id = request.getParameter("id");

		try {

			InputStream inputStream = null;
			OutputStream outputStream = null;

			File imgDir = new File("/home/pratik/Work/poc/temp/images/" + id);
			if (!imgDir.exists()) {
				imgDir.mkdir();
			}

			if (file.getSize() > 0) {
				inputStream = file.getInputStream();
				outputStream = new FileOutputStream(
						"/home/pratik/Work/poc/temp/images/" + id + "/"
								+ fileName);
				int readBytes = 0;
				byte[] buffer = new byte[8192];
				while ((readBytes = inputStream.read(buffer, 0, 8192)) != -1) {
					outputStream.write(buffer, 0, readBytes);
				}
				outputStream.close();
				inputStream.close();
			}
		} catch (Exception e) {
			e.printStackTrace();
		}

		return "/api/document/" + id + "/" + fileName + "";
	}

	@RequestMapping(value = "/document/{fileName}/{id}", method = RequestMethod.GET)
	public void downLoadFile(HttpServletRequest request, HttpServletResponse response, @PathVariable("id") String id,
			@PathVariable("fileName") String fileName) {
	    try {
	        File file = new File(
					"/home/pratik/Work/poc/temp/images/" + id + "/" + fileName);
	        InputStream in = new BufferedInputStream(new FileInputStream(file));
	        response.setContentType("image/jpeg");
	        ServletOutputStream out = response.getOutputStream();
	        IOUtils.copy(in, out);
	        response.flushBuffer();
	    } catch (Exception e) {
	        e.printStackTrace();
	    }
	}
}
