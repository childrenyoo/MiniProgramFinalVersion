package com.wethree.request;

/**
 * Created by qiyusi on 6/3/19.
 */
public class AddFavouriteRequest {
    private String student_id;
    private int uuid;

    public AddFavouriteRequest(String student_id, int uuid) {
        this.student_id = student_id;
        this.uuid = uuid;
    }

    public int getUuid() {
        return uuid;
    }

    public String getStudent_id() {
        return student_id;
    }
}
