package com.wethree.response;

/**
 * Created by qiyusi on 5/30/19.
 */
public class ProgressResponse {
    private String chatbox_id;
    private double progress;

    public ProgressResponse(String chatbox_id, double progress) {
        this.chatbox_id = chatbox_id;
        this.progress = progress;
    }

    public String getChatbox_id() {
        return chatbox_id;
    }

    public double getProgress() {
        return progress;
    }
}
