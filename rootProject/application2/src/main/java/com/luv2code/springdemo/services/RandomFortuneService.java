package com.luv2code.springdemo.services;

import java.util.Random;
import org.springframework.stereotype.Component;

@Component
public class RandomFortuneService implements FortuneService {

    private final String[] data = {"Be aware", "The jorney is the reward", "Diligence is the mother of good luck"};

    @Override
    public String getFortune() {
        Random rnd = new Random();
        return data[rnd.nextInt(data.length)];
    }

}
