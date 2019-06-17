package com.wethree.mybatis.po;

public class Teacher {
    private String teacher_name;
    private String password;
    public Teacher(String teacher_name,String password){
        this.teacher_name = teacher_name;
        this.password = password;
    }

    public void setTeacher_name(String teacher_name) {
        this.teacher_name = teacher_name;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public String getPassword() {
        return password;
    }

    public String getTeacher_name() {
        return teacher_name;
    }
}
