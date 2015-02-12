package com.schooling.publisher.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Lob;
import javax.persistence.Table;

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

	public String getContent() {
		return content;
	}

	public void setContent(String content) {
		this.content = content;
	}

	@Lob
	@Column(name = "content")
	private String content;
	
}
