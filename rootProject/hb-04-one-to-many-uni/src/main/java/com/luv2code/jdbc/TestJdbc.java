package com.luv2code.jdbc;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.SQLException;

public class TestJdbc {

    public static void main(String[] args) throws SQLException {
        //specifying schema when connecting
        String jdbcUrl = "jdbc:postgresql://127.0.0.1:5432/hb_student_tracker?currentSchema=hb_01_one_to_one_uni";
        String user = "postgres";
        String password = "postgres";

        Connection conn = DriverManager.getConnection(jdbcUrl, user, password);
        System.out.println("Connection successfull");
        conn.close();

    }
}