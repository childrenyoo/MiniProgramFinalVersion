package com.wethree.mybatis.po;

/**
 * Created by qiyusi on 5/31/19.
 */
public class Student {
    private String student_id;
    private String student_name;
    private String email;
    private int sex;//0为男，1为女
    private String open_id;


    public Student(String student_id, String student_name, String email, int sex) {
        this.student_id = student_id;
        this.student_name = student_name;
        this.email = email;
        this.sex = sex;
    }

    public Student(String student_id, String student_name, String email,String open_id,int sex) {
        this.student_id = student_id;
        this.student_name = student_name;
        this.email = email;
        this.sex = sex;
        this.open_id = open_id;
    }

    public Student(String student_id, String student_name, int sex) {
        this.student_id = student_id;
        this.student_name = student_name;
        this.sex = sex;
    }

    public String getStudent_id() {
        return student_id;
    }

    public String getStudent_name() {
        return student_name;
    }

    public String getEmail() {
        return email;
    }

    public int getSex() {
        return sex;
    }

    public String getOpen_id() {
        return open_id;
    }
}
