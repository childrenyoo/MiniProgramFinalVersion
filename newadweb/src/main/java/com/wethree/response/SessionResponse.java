package com.wethree.response;

public class SessionResponse {
    private int status;
    private String username;
    public SessionResponse(int status,String username){

        this.status = status;
        this.username = username;
    }

    public int getStatus() {
        return status;
    }

    public void setStatus(int status) {
        this.status = status;
    }

    public String getUsername() {
        return username;
    }


    public void setUsername(String username) {
        this.username = username;
    }
}
