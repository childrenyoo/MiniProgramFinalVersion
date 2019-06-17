package com.wethree.mybatis.po;

public class StudentCourse {
    private String studentId;
    private int courseId;
    private int id;
    private double progress;
    private int doHomework;
    public StudentCourse(String studentId,int courseId,int id, double progress,int doHomework){
        this.studentId = studentId;
        this.courseId = courseId;
        this.id = id;
        this.doHomework = doHomework;
        this.progress = progress;

    }

    public void setStudentId(String studentId) {
        this.studentId = studentId;
    }

    public String getStudentId() {
        return studentId;
    }

    public void setCourseId(int courseId) {
        this.courseId = courseId;
    }

    public int getCourseId() {
        return courseId;
    }

    public void setId(int id) {
        this.id = id;
    }

    public int getId() {
        return id;
    }

    public void setDoHomework(int doHomework) {
        this.doHomework = doHomework;
    }

    public int getDoHomework() {
        return doHomework;
    }

    public double getProgress() {
        return progress;
    }

    public void setProgress(double progress) {
        this.progress = progress;
    }
}
