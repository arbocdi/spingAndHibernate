package come.luv2code.jackson.json.demo;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.fasterxml.jackson.databind.SerializationFeature;
import java.io.File;

public class Driver {

    public static void main(String[] args) throws Exception {
        ObjectMapper om = new ObjectMapper();
        Student student = om.readValue(new File("data/sample-full.json"), Student.class);
        //formatted printing
        om.enable(SerializationFeature.INDENT_OUTPUT);
        System.out.println(student);
        System.out.println(om.writeValueAsString(student));
    }
}
