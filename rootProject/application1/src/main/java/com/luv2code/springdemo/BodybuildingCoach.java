
package com.luv2code.springdemo;


public class BodybuildingCoach implements Coach{

    @Override
    public String getDailyWorkout() {
        return "Train hard for 2 hours";
    }

    @Override
    public String getDailyFortune() {
        throw new UnsupportedOperationException("Not supported yet."); //To change body of generated methods, choose Tools | Templates.
    }
    
    public void init(){
        System.out.println("BodybuildingCoach: init method called");
    }
    public void close(){
        System.out.println("BodybuildingCoach: close method called");
    }

}
