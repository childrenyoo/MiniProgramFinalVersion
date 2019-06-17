package com.wethree.request;

/**
 * Created by qiyusi on 5/30/19.
 */
public class ProgressRequest {
    private String student_id;
    private int course_id;
    private int id;

    public ProgressRequest(String student_id, int course_id, int id) {
        this.student_id = student_id;
        this.course_id = course_id;
        this.id = id;
    }

    public String getStudent_id() {
        return student_id;
    }

    public int getCourse_id() {
        return course_id;
    }

    public int getId() {
        return id;
    }
}
