package com.wethree.mybatis.po;

public class ChatBoxMessage {
    private String chatbox_id;
    private int uuid;
    public ChatBoxMessage(String chatBoxId,int uuid){
        this.chatbox_id = chatBoxId;
        this.uuid = uuid;
    }

    public void setChatbox_id(String chatbox_id) {
        this.chatbox_id = chatbox_id;
    }

    public String getChatbox_id() {
        return chatbox_id;
    }

    public void setUuid(int uuid) {
        this.uuid = uuid;
    }

    public int getUuid() {
        return uuid;
    }
}
