package com.wethree.request;

/**
 * Created by qiyusi on 5/31/19.
 */
public class HomeworkRequest {
    private String student_id;
    private String chatbox_id;

    public HomeworkRequest(String student_id, String chatbox_id) {
        this.student_id = student_id;
        this.chatbox_id = chatbox_id;
    }

    public String getStudent_id() {
        return student_id;
    }

    public String getChatbox_id() {
        return chatbox_id;
    }
}
