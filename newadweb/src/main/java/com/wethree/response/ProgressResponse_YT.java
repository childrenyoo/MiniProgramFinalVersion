package com.wethree.response;

public class ProgressResponse_YT {
    private String studentName;
    private double progress;
    private int doHomework;
    public ProgressResponse_YT(String studentName, double progress, int doHomework){
        this.studentName = studentName;
        this.progress = progress;
        this.doHomework = doHomework;

    }

    public double getProgress() {
        return progress;
    }

    public void setProgress(double progress) {
        this.progress = progress;
    }

    public String getStudentName() {
        return studentName;
    }

    public void setStudentName(String studentName) {
        this.studentName = studentName;
    }

    public int getDoHomework() {
        return doHomework;
    }

    public void setDoHomework(int doHomework) {
        this.doHomework = doHomework;
    }
}
