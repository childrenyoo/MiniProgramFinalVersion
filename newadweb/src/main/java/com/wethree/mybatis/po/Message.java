package com.wethree.mybatis.po;

/**
 * Created by qiyusi on 5/29/19.
 */
public class Message {
    private int uuid;
    private String text;
    private String image_url;
    private String type;//teacher/student

    public Message() {
    }

    public Message(int uuid, String text, String image_url, String type) {
        this.uuid = uuid;
        this.text = text;
        this.image_url = image_url;
        this.type = type;
    }

    public Message(String text, String image_url, String type) {
        this.text = text;
        this.image_url = image_url;
        this.type = type;
    }

    public int getUuid() {
        return uuid;
    }

    public String getText() {
        return text;
    }

    public String getImage_url() {
        return image_url;
    }

    public String getType() {
        return type;
    }
}
