package com.luv2code.utils;

import java.util.Collection;

public class CommonUtils {

    public static void printCollection(Collection<?> coll) {
        System.out.println("########PRINTING OBJECTS############");
        if (coll == null) {
            System.out.println("null");
        }
        for (Object elem : coll) {
            System.out.println(elem);
        }
    }
}
