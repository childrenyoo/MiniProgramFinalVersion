package com.wethree.controller;

import com.wethree.mybatis.SqlSessionLoader;
import com.wethree.mybatis.po.Student;
import com.wethree.mybatis.po.Teacher;
import com.wethree.request.RegLoginRequest;
import com.wethree.response.SessionResponse;
import org.apache.ibatis.session.SqlSession;
import org.springframework.web.bind.annotation.*;

import java.io.IOException;
import java.util.List;
@RestController
public class RegisterLoginController {
    @CrossOrigin(origins = "*")
    @RequestMapping(value = "/login", method = RequestMethod.GET)
    public @ResponseBody
    Object login(@RequestParam(value = "username") String username,
                                @RequestParam(value = "password") String password) throws IOException {
        SqlSession sqlSession = SqlSessionLoader.getSqlSession();
         Teacher teacher = sqlSession.selectOne("wethree.UserMapper.login",new RegLoginRequest(username,password));
         sqlSession.close();
         if(teacher==null)
             return new SessionResponse(0," ");
         else
             return new SessionResponse(1,teacher.getTeacher_name());
    }


    @CrossOrigin(origins = "*")
    @RequestMapping(value = "/register", method = RequestMethod.GET)
    public @ResponseBody
    Object register(@RequestParam(value = "username") String username,
                    @RequestParam(value = "password") String password) throws IOException {
        SqlSession sqlSession = SqlSessionLoader.getSqlSession();
        Teacher teacher = sqlSession.selectOne("wethree.UserMapper.preRegister",new RegLoginRequest(username,password));
        if(teacher==null){
            sqlSession.insert("wethree.UserMapper.register",new RegLoginRequest(username,password));
            sqlSession.commit();
            sqlSession.close();
            return new SessionResponse(1,username);
        }
        else{
            sqlSession.close();
            return new SessionResponse(0,"");

        }
    }
}
