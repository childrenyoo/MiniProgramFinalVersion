package com.wethree.mybatis.po;

/**
 * Created by qiyusi on 5/29/19.
 */
public class Course {
    private int course_id;
    private String course_name;
    private String content_id;
    private int teacher_id;

    public Course(String course_name, String content_id,int teacher_id){
        this.course_name=course_name;
        this.content_id=content_id;
        this.teacher_id=teacher_id;
    }
    public Course(int course_id,String course_name,String content_id){
        this.course_id=course_id;
        this.course_name=course_name;
        this.content_id=content_id;
    }

    public Course(int course_id, String course_name, String content_id, int teacher_id) {
        this.course_id = course_id;
        this.course_name = course_name;
        this.content_id = content_id;
        this.teacher_id = teacher_id;
    }

    public int getCourse_id() {
        return course_id;
    }

    public void setCourse_id(int course_id) {
        this.course_id = course_id;
    }

    public String getCourse_name() {
        return course_name;
    }

    public void setCourse_name(String course_name) {
        this.course_name = course_name;
    }

    public String getContent_id() {
        return content_id;
    }

    public void setContent_id(String content_id) {
        this.content_id = content_id;
    }

    public int getTeacher_id() {
        return teacher_id;
    }

    public void setTeacher_id(int teacher_id) {
        this.teacher_id = teacher_id;
    }
}
