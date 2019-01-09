package com.luv2code.springdemo;

import java.util.Random;

public class RandomFortuneService implements FortuneService {

    private String[] fortunes = {"U are going to win today.", "You are best player", "Everything is awesome."};

    @Override
    public String getFortune() {
        Random rnd = new Random();
        return fortunes[rnd.nextInt(fortunes.length)];
    }

}
