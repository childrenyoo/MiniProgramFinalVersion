package com.wethree.response;

import com.wethree.mybatis.po.Course;

import java.util.List;

/**
 * Created by qiyusi on 5/29/19.
 */
public class CourseResponse {
    private List<Course> courses;
    public CourseResponse(List<Course> courses){
        this.courses=courses;
    }

    public List<Course> getCourses() {
        return courses;
    }
}
