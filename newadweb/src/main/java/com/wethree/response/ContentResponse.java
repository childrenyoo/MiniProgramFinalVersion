package com.wethree.response;

import com.wethree.mybatis.po.Content;

import java.util.List;

/**
 * Created by qiyusi on 5/29/19.
 */
public class ContentResponse {
    private String content_id;
    private List<Content> contents_name;

    public ContentResponse(String content_id, List<Content> contents_name){
        this.content_id=content_id;
        this.contents_name=contents_name;
    }

    public String getContent_id() {
        return content_id;
    }

    public List<Content> getContents_name() {
        return contents_name;
    }
}
