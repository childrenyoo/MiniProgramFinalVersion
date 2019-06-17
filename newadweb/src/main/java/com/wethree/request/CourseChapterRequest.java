package com.wethree.request;

public class CourseChapterRequest {
    private int course_id;
    private int id;
    public CourseChapterRequest(int courseId,int id){
        this.course_id = courseId;
        this.id = id;
    }

    public int getCourse_id() {
        return course_id;
    }

    public void setCourse_id(int course_id) {
        this.course_id = course_id;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }
}
