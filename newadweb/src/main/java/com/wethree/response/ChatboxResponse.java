package com.wethree.response;

import com.wethree.mybatis.po.Message;

import java.util.List;

/**
 * Created by qiyusi on 5/29/19.
 */
public class ChatboxResponse {
    private String chatbox_id;
    private String text;
    private List<Message> message;

    public ChatboxResponse(String chatbox_id, String text, List<Message> message) {
        this.chatbox_id = chatbox_id;
        this.text = text;
        this.message = message;
    }

    public String getChatbox_id() {
        return chatbox_id;
    }

    public String getText() {
        return text;
    }

    public List<Message> getMessage() {
        return message;
    }
}
