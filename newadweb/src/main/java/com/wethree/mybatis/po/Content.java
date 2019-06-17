package com.wethree.mybatis.po;

/**
 * Created by qiyusi on 5/29/19.
 */
public class Content {
    private String content_id;
    private int id;
    private String text;
    private String chatbox_id;

    public Content(){

    }

    public Content(String content_id, int id, String text, String chatbox_id) {
        this.content_id = content_id;
        this.id = id;
        this.text = text;
        this.chatbox_id = chatbox_id;
    }

    public String getContent_id() {
        return content_id;
    }

    public int getId() {
        return id;
    }

    public String getText() {
        return text;
    }

    public String getChatbox_id() {
        return chatbox_id;
    }
}
