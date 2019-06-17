package com.wethree.request;

/**
 * Created by qiyusi on 5/29/19.
 */
public class StuAddCourseRequest {
    private String student_id;
    private int course_id;
    private int id;
    private double progress;
    private int do_homework;
    private String homework_contents;

    public StuAddCourseRequest(String student_id, int course_id, int id, double progress, int do_homework) {
        this.student_id = student_id;
        this.course_id = course_id;
        this.id = id;
        this.progress = progress;
        this.do_homework = do_homework;
    }
    public StuAddCourseRequest(String student_id, int course_id, int id, double progress, int do_homework,String homework_contents) {
        this.student_id = student_id;
        this.course_id = course_id;
        this.id = id;
        this.progress = progress;
        this.do_homework = do_homework;
        this.homework_contents = homework_contents;
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

    public double getProgress() {
        return progress;
    }

    public int getDo_homework() {
        return do_homework;
    }

    public String getHomework_contents() {
        return homework_contents;
    }
}
