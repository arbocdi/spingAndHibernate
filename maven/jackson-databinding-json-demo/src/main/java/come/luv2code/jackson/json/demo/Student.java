package come.luv2code.jackson.json.demo;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import lombok.Data;

@Data
//игнорировать неизвестные свойства при десериализации
@JsonIgnoreProperties(ignoreUnknown = true)
public class Student {

    private int id;
    private String firstName, lastName;
    private boolean active;
    private String[] languages;
    private Address address;

}
