package com.wethree.controller;

import com.wethree.mybatis.SqlSessionLoader;
import com.wethree.mybatis.po.Content;
import com.wethree.mybatis.po.Message;
import com.wethree.mybatis.po.Student;
import com.wethree.request.AddFavouriteRequest;
import com.wethree.request.HomeworkRequest;
import com.wethree.request.ProgressRequest;
import com.wethree.request.UpdateChatboxRequest;
import com.wethree.response.ChatboxResponse;
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
public class ChatboxController {

    //根据chatbox_id找到所有对话信息
    @CrossOrigin(origins = "*")
    @RequestMapping(value="/chatbox", method= RequestMethod.GET)
    public @ResponseBody
    Object findMessage(@RequestParam(value = "chatbox_id") String chatbox_id) throws IOException {
        SqlSession sqlSession = SqlSessionLoader.getSqlSession();
        List<Message> messages=sqlSession.selectList("wethree.UserMapper.findMessageByChatboxId",chatbox_id);
        String text=sqlSession.selectOne("wethree.UserMapper.findTextByChatboxId",chatbox_id);
        sqlSession.close();
        return new ChatboxResponse(chatbox_id,text,messages);
    }

    @CrossOrigin(origins = "*")
    @RequestMapping(value="/update_chatbox", method= RequestMethod.GET)
    public void updateProgress(@RequestParam(value = "student_id") String student_id,
                               @RequestParam(value="chatbox_id") String chatbox_id,
                               @RequestParam(value="progress") double progress) throws IOException{
        SqlSession sqlSession = SqlSessionLoader.getSqlSession();
        sqlSession.update("wethree.UserMapper.updateProgress",new UpdateChatboxRequest(student_id,chatbox_id,progress));
        sqlSession.commit();
        sqlSession.close();

    }

    @CrossOrigin(origins = "*")
    @RequestMapping(value="/update_homework", method= RequestMethod.GET)
    public void updateHomework(@RequestParam(value = "student_id") String student_id,
                               @RequestParam(value="chatbox_id") String chatbox_id,
                               @RequestParam(value = "homework_contents") String homework_contents) throws IOException{
        SqlSession sqlSession = SqlSessionLoader.getSqlSession();
        sqlSession.update("wethree.UserMapper.updateHomework",new UpdateChatboxRequest(student_id,chatbox_id,homework_contents));
        sqlSession.commit();
        sqlSession.close();
    }


    @CrossOrigin(origins = "*")
    @RequestMapping(value = "/chatbox_homework",method = RequestMethod.GET)
    public @ResponseBody
    Integer findProgress(@RequestParam(value="chatbox_id") String chatbox_id,
                        @RequestParam(value="student_id") String student_id) throws IOException{
        SqlSession sqlSession = SqlSessionLoader.getSqlSession();
        Integer do_homework=sqlSession.selectOne("wethree.UserMapper.findDoHomework",new HomeworkRequest(student_id,chatbox_id));
        sqlSession.close();
        return do_homework;
    }

    @CrossOrigin(origins = "*")
    @RequestMapping(value = "/add_favourite",method = RequestMethod.GET)
    public String addFavourite(@RequestParam(value="student_id") String student_id,
                               @RequestParam(value = "uuid") int uuid) throws IOException{
        SqlSession sqlSession = SqlSessionLoader.getSqlSession();


        Integer exist=sqlSession.selectOne("wethree.UserMapper.findUuidByStudentIdAndUuid",new AddFavouriteRequest(student_id,uuid));

        if(exist==null){
            sqlSession.insert("wethree.UserMapper.addFavourite",new AddFavouriteRequest(student_id,uuid));
            sqlSession.commit();
            sqlSession.close();
            return "添加收藏成功";//用户未收藏
        }else{
            return "收藏已存在";//收藏已存在
        }

    }

    @CrossOrigin(origins = "*")
    @RequestMapping(value = "/delete_favourite",method = RequestMethod.GET)
    public void deleteFavourite(@RequestParam(value="student_id") String stufent_id,
                                @RequestParam(value="uuid")int uuid)throws IOException{
        SqlSession sqlSession = SqlSessionLoader.getSqlSession();
        sqlSession.delete("wethree.UserMapper.deleteFavourite",new AddFavouriteRequest(stufent_id,uuid));
        sqlSession.commit();
        sqlSession.close();
    }

    //宇童
    //根据chatbox_id找message
    @CrossOrigin(origins = "*")
    @RequestMapping(value="/messages", method= RequestMethod.GET)
    public @ResponseBody
    Object findMessages(@RequestParam(value = "chatbox_id") String chatbox_id) throws IOException {
        SqlSession sqlSession = SqlSessionLoader.getSqlSession();
        List<Message> messages=sqlSession.selectList("wethree.UserMapper.findMessageByChatboxId",chatbox_id);
        //String text=sqlSession.selectOne("wethree.UserMapper.findTextByChatboxId",chatbox_id);
        sqlSession.close();
        return messages;
    }
}
