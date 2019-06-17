package com.wethree.controller;

import com.wethree.mybatis.SqlSessionLoader;
import com.wethree.mybatis.po.Content;
import com.wethree.mybatis.po.Course;
import com.wethree.request.ProgressRequest;
import com.wethree.response.ContentResponse;
import com.wethree.response.ProgressResponse;
import org.apache.ibatis.session.SqlSession;
import org.springframework.web.bind.annotation.*;

import java.io.IOException;
import java.util.ArrayList;
import java.util.List;

/**
 * Created by qiyusi on 5/29/19.
 */
@RestController
public class ContentController {

    ///根据content_id找到所有章节
    @CrossOrigin(origins = "*")
    @RequestMapping(value="/contents", method= RequestMethod.GET)
    public @ResponseBody
    Object findContents(@RequestParam(value = "content_id") String content_id) throws IOException {
        SqlSession sqlSession = SqlSessionLoader.getSqlSession();
        List<Content> contents=sqlSession.selectList("wethree.UserMapper.findContentsByContentId",content_id);
        sqlSession.close();

        return new ContentResponse(content_id,contents);
    }

    //得到学生上的某门课所有的章节和进度
    @CrossOrigin(origins = "*")
    @RequestMapping(value = "/contents_progress",method = RequestMethod.GET)
    public @ResponseBody
    Object findProgress(@RequestParam(value="content_id") String content_id,
                        @RequestParam(value="course_id") int course_id,
                        @RequestParam(value="student_id") String student_id) throws IOException{
        SqlSession sqlSession = SqlSessionLoader.getSqlSession();
        List<Content> contents=sqlSession.selectList("wethree.UserMapper.findContentsByContentId",content_id);
        List<ProgressResponse> progressResponses=new ArrayList<>();

        for(int i=0;i<contents.size();i++){
            int id=contents.get(i).getId();
            String chatbox_id=contents.get(i).getChatbox_id();
            double progress=sqlSession.selectOne("wethree.UserMapper.findProgressById",new ProgressRequest(student_id,course_id,id));
            progressResponses.add(new ProgressResponse(chatbox_id,progress));
        }
        return progressResponses;
    }

    //宇童
    //根据课程查找章节
    @CrossOrigin(origins = "*")
    @RequestMapping(value = "/course_chapters", method = RequestMethod.GET)
    public @ResponseBody
    Object getChapterByCourseId(@RequestParam(value = "content_id") String content_id) throws IOException {
        SqlSession sqlSession = SqlSessionLoader.getSqlSession();
        List<Content> chapters = sqlSession.selectList("wethree.UserMapper.findChaptersByCourseId", content_id);

        sqlSession.close();
        return chapters;
    }


}
