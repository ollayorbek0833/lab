package com.example.demo.config;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Configuration;

@Configuration
public class ApiConfig {

    @Value("${api.basePath}")
    private String basePath;

    @Value("${api.timeout}")
    private int timeout;

    public String getBasePath() {
        return basePath;
    }

    public int getTimeout() {
        return timeout;
    }
}
