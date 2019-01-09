package com.luv2code.springdemo.services;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.Arrays;
import java.util.Random;
import javax.annotation.PostConstruct;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Component;

@Component
public class RandomFileFortuneService implements FortuneService {

    private String[] fortuneArray;

//    public RandomFileFortuneService(@Value("${fortunes}") String fortunes) {
//        fortuneArray = fortunes.split(",");
//    }
    
    @PostConstruct
    public void readFortunesFromFile() throws IOException{
        try(BufferedReader reader = new BufferedReader(new InputStreamReader(this.getClass().getResourceAsStream("/fortune.txt")))){
            fortuneArray = reader.readLine().split(",");
        }
        
    }

    @Override
    public String getFortune() {
        Random rnd = new Random();
        return fortuneArray[rnd.nextInt(fortuneArray.length)];
    }

}
