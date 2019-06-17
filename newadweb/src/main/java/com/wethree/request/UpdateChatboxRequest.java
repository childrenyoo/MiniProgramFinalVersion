package com.wethree.request;

/**
 * Created by qiyusi on 5/31/19.
 */
public class UpdateChatboxRequest {
    private String student_id;
    private String chatbox_id;
    private double progress;
    private String homework_contents;

    public UpdateChatboxRequest(String student_id, String chatbox_id,double progress,String homework_contents) {
        this.student_id = student_id;
        this.chatbox_id = chatbox_id;
        this.progress= progress;
        this.homework_contents=homework_contents;
    }

    public UpdateChatboxRequest(String student_id, String chatbox_id, double progress) {
        this.student_id = student_id;
        this.chatbox_id = chatbox_id;
        this.progress = progress;
    }

    public UpdateChatboxRequest(String student_id, String chatbox_id, String homework_contents) {
        this.student_id = student_id;
        this.chatbox_id = chatbox_id;
        this.homework_contents=homework_contents;
    }

    public String getStudent_id() {
        return student_id;
    }

    public String getChatbox_id() {
        return chatbox_id;
    }

    public double getProgress(){
        return progress;
    }

    public String getHomework_contents() {
        return homework_contents;
    }
}
