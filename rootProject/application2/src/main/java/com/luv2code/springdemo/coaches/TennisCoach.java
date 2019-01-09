package com.luv2code.springdemo.coaches;

import com.luv2code.springdemo.services.FortuneService;
import javax.annotation.PostConstruct;
import javax.annotation.PreDestroy;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.context.annotation.Scope;
import org.springframework.stereotype.Component;

//@Component("thatSillyCoach")
@Component()//beanname = tennisCoach
@Scope("singleton")
public class TennisCoach implements Coach {
    
    @Autowired
    @Qualifier("randomFortuneService")
    private FortuneService fortuneService;

    /**
     * Можно убрать аннотацию @Autowired если бин имеет только один конструктор.
     *
     * @param fortuneService
     */
//    public TennisCoach(@Autowired FortuneService fortuneService) {
//        this.fortuneService = fortuneService;
//    }
    
    public TennisCoach() {
        System.out.println("TennisCoach: iside no-args constructor");
    }
    /**
     * setter method
     * @param fortuneService 
     */
//    @Autowired
//    public void setFortuneService(FortuneService fortuneService) {
//        System.out.println("TennisCoach: inside setFortuneService method ");
//        this.fortuneService = fortuneService;
//    }
    /**
     * Inject into any method
     * @param fortuneService 
     */
//    @Autowired
//    public void doSomeCrazyStuff(FortuneService fortuneService) {
//        System.out.println("TennisCoach: inside doSomeCrazyStuff method ");
//        this.fortuneService = fortuneService;
//    }
    
    //define init method
    @PostConstruct
    public void doMyStartupStuff(){
        System.out.println("TennisCoach: inside doMyStartupStuff");
    }
    //define destroy method
    @PreDestroy
    public void doMyCleanupStuff(){
        System.out.println("TennsiCoach: inside doMyCleanupStuff");
    }

    @Override
    public String getDailyWorkout() {
        return "Practise tennis";
    }

    @Override
    public String getDailyFortune() {
        return fortuneService.getFortune();
    }

}
