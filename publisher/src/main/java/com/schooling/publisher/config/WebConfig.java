package com.schooling.publisher.config;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

import javax.inject.Inject;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.ComponentScan.Filter;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.FilterType;
import org.springframework.data.web.config.SpringDataWebConfiguration;
import org.springframework.http.MediaType;
import org.springframework.http.converter.HttpMessageConverter;
import org.springframework.http.converter.json.MappingJackson2HttpMessageConverter;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.HandlerExceptionResolver;
import org.springframework.web.servlet.config.annotation.ContentNegotiationConfigurer;
import org.springframework.web.servlet.config.annotation.DefaultServletHandlerConfigurer;
import org.springframework.web.servlet.config.annotation.EnableWebMvc;
import org.springframework.web.servlet.config.annotation.ResourceHandlerRegistry;
import org.springframework.web.servlet.config.annotation.ViewControllerRegistry;
import org.springframework.web.servlet.mvc.method.annotation.ExceptionHandlerExceptionResolver;
import org.springframework.web.servlet.view.InternalResourceViewResolver;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.schooling.publisher.constant.Constants;

@Configuration
@EnableWebMvc
@ComponentScan(basePackages = { "com.schooling.publisher.controller" }, basePackageClasses = { Constants.class }, includeFilters = { @Filter(type = FilterType.ANNOTATION, value = {
		RestController.class, ControllerAdvice.class }) })
public class WebConfig extends SpringDataWebConfiguration {

	@Inject
	private ObjectMapper objectMapper;

	@Override
	public void addResourceHandlers(ResourceHandlerRegistry registry) {
		registry.addResourceHandler("css/", "images/", "lib/", "swagger-ui.js")//
				.addResourceLocations("classpath:META-INF/resources/")//
				.setCachePeriod(0);
	}

	@Bean
	public InternalResourceViewResolver getInternalResourceViewResolver() {
		InternalResourceViewResolver resolver = new InternalResourceViewResolver();
		resolver.setPrefix("classpath:/resources/");
		resolver.setSuffix(".jsp");
		return resolver;
	}

	@Override
	public void addViewControllers(ViewControllerRegistry registry) {
		// super.addViewControllers(registry);
	}

	@Override
	public void configureHandlerExceptionResolvers(
			List<HandlerExceptionResolver> exceptionResolvers) {
		exceptionResolvers.add(exceptionHandlerExceptionResolver());
	}

	@Override
	public void configureDefaultServletHandling(
			DefaultServletHandlerConfigurer configurer) {
		configurer.enable();
	}

	@Override
	public void configureContentNegotiation(
			ContentNegotiationConfigurer configurer) {
		configurer.favorParameter(false);
		configurer.favorPathExtension(false);
	}

	@Override
	public void configureMessageConverters(
			List<HttpMessageConverter<?>> converters) {
		List<HttpMessageConverter<?>> messageConverters = messageConverters();
		converters.addAll(messageConverters);
	}

	@Bean
	public ExceptionHandlerExceptionResolver exceptionHandlerExceptionResolver() {
		ExceptionHandlerExceptionResolver exceptionHandlerExceptionResolver = new ExceptionHandlerExceptionResolver();
		exceptionHandlerExceptionResolver
				.setMessageConverters(messageConverters());

		return exceptionHandlerExceptionResolver;
	}

	private List<HttpMessageConverter<?>> messageConverters() {
		List<HttpMessageConverter<?>> messageConverters = new ArrayList<>();
		MappingJackson2HttpMessageConverter jackson2Converter = new MappingJackson2HttpMessageConverter();
		jackson2Converter.setSupportedMediaTypes(Arrays
				.asList(MediaType.APPLICATION_JSON));
		jackson2Converter.setObjectMapper(objectMapper);
		messageConverters.add(jackson2Converter);
		return messageConverters;
	}

}
