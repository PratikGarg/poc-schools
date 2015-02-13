package com.schooling.publisher.model;

import java.util.Map;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Lob;
import javax.persistence.Table;
import javax.persistence.Transient;

import org.springframework.data.jpa.domain.AbstractAuditable;

@Entity
@Table(name = "listing")
public class Listing extends AbstractAuditable<User, Long> {
	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;
	
	@Column(name = "url")
	private String url;

	public String getUrl() {
		return url;
	}

	public void setUrl(String url) {
		this.url = url;
	}

	public Map<Object,Object>  getContent() {
		return content;
	}

	public void setContent(Map<Object,Object> content) {
		this.content = content;
	}

	@Transient
	private Map<Object,Object> content;
	


	@Lob
	@Column(name="data")
	private String data;

	public String getData() {
		return data;
	}

	public void setData(String data) {
		this.data = data;
	}
	
}
