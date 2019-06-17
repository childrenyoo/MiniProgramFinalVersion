package com.wethree.response;

public class InforResponse {
    private int state;
    private String infor;
    public InforResponse(String infor,int state){
        this.infor = infor;
        this.state = state;
    }

    public String getInfor() {
        return infor;
    }

    public void setInfor(String infor) {
        this.infor = infor;
    }

    public int getState() {
        return state;
    }

    public void setState(int state) {
        this.state = state;
    }


}
