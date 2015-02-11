/*
 * To change this license header, choose License Headers in Project Properties. To change this
 * template file, choose Tools | Templates and open the template in the editor.
 */
package com.schooling.publisher.config;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.Profile;

import com.mangofactory.swagger.configuration.SpringSwaggerConfig;
import com.mangofactory.swagger.plugin.EnableSwagger;
import com.mangofactory.swagger.plugin.SwaggerSpringMvcPlugin;
import com.wordnik.swagger.model.ApiInfo;

/**
 *
 * @author hantsy
 */
@Configuration
@EnableSwagger
// Loads the spring beans required by the framework
@Profile(value = { "dev", "staging" })
public class SwaggerConfig {

    private SpringSwaggerConfig springSwaggerConfig;

    /**
     * Required to autowire SpringSwaggerConfig
     */
    @Autowired
    public void setSpringSwaggerConfig(SpringSwaggerConfig springSwaggerConfig) {
        this.springSwaggerConfig = springSwaggerConfig;
    }

    /**
     * Every SwaggerSpringMvcPlugin bean is picked up by the swagger-mvc
     * framework - allowing for multiple swagger groups i.e. same code base
     * multiple swagger resource listings.
     */
    @Bean
    public SwaggerSpringMvcPlugin customImplementation() {
        return new SwaggerSpringMvcPlugin(this.springSwaggerConfig)
                .apiVersion("V1.0")//
                .apiInfo(apiInfo())//
               // .includePatterns(".*api.*")
                .build();
        
    }

    private ApiInfo apiInfo() {
        ApiInfo apiInfo = new ApiInfo(//
                "CRM RESTful API",//
                "CRM RESTful APIs for developers", //
                "CRM API terms of service",//
                "hantsy@gmail.com",//
                "Commericial Lisence", //
                "lisence URL");
        return apiInfo;
    }

}
