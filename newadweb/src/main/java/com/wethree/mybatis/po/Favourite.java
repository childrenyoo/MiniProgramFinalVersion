package com.wethree.mybatis.po;

/**
 * Created by qiyusi on 6/3/19.
 */
public class Favourite {
    private int uuid;
    private String text;
    private String chatbox_id;

    public Favourite(int uuid, String text, String chatbox_id) {
        this.uuid = uuid;
        this.text = text;
        this.chatbox_id = chatbox_id;
    }

    public int getUuid() {
        return uuid;
    }

    public String getChatbox_id() {
        return chatbox_id;
    }

    public String getText() {
        return text;
    }
}
