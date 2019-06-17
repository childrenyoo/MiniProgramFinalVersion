package com.wethree.controller;

import com.wethree.mybatis.SqlSessionLoader;
import com.wethree.mybatis.po.Favourite;
import com.wethree.mybatis.po.Student;
import com.wethree.mybatis.po.StudentCourse;
import com.wethree.request.AddFavouriteRequest;
import com.wethree.request.CourseChapterRequest;
import com.wethree.response.ProgressResponse;
import com.wethree.response.ProgressResponse_YT;
import com.wethree.response.WarningResponse;
import org.apache.ibatis.session.SqlSession;
import org.springframework.web.bind.annotation.*;

import java.io.IOException;
import java.util.ArrayList;
import java.util.List;

/**
 * Created by qiyusi on 5/31/19.
 */
@RestController
public class StudentController {
    @CrossOrigin(origins = "*")
    @RequestMapping(value = "/myaccount",method = RequestMethod.GET)
    public Integer addStudent(@RequestParam(value="student_id") String student_id,
                         @RequestParam(value="student_name") String student_name,
                           @RequestParam(value = "email") String email,
                           @RequestParam(value="sex") int sex,
                              @RequestParam(value = "open_id") String open_id) throws IOException {
        SqlSession sqlSession = SqlSessionLoader.getSqlSession();
        Integer exist=sqlSession.selectOne("wethree.UserMapper.findStudentById",student_id);

        if(exist==null){
            sqlSession.insert("wethree.UserMapper.addStudent",new Student(student_id,student_name,email,open_id,sex));
            sqlSession.commit();
            sqlSession.close();
            return 1;//用户不存在，成功添加
        }else{
            return 0;//用户已存在
        }
    }

//    查看学生收藏内容
    @CrossOrigin(origins = "*")
    @RequestMapping(value = "/myfavourite",method = RequestMethod.GET)
    public @ResponseBody
    Object findFavourite(@RequestParam(value = "student_id") String student_id) throws IOException{
        SqlSession sqlSession = SqlSessionLoader.getSqlSession();
        List<Favourite> favouriteList=sqlSession.selectList("wethree.UserMapper.findFavouriteByStudentId",student_id);
        sqlSession.close();
        return favouriteList;
    }

//    根据微信号的Open_id判断是否注册，如果注册返回学生的具体信息，如果未注册则提示注册
    @CrossOrigin(origins = "*")
    @RequestMapping(value = "/getUserInfo",method = RequestMethod.GET)
    public @ResponseBody
    Object getUserInfo(@RequestParam(value = "open_id") String open_id) throws IOException{
        SqlSession sqlSession = SqlSessionLoader.getSqlSession();
        Student student=sqlSession.selectOne("wethree.UserMapper.findUserByOpenId",open_id);

        if(student==null){
            return new WarningResponse("请完善个人信息");
        }else{
            return student;
        }
    }


    //宇童
    //根据课程查找选课学生
    @CrossOrigin(origins = "*")
    @RequestMapping(value = "/course_students", method = RequestMethod.GET)
    public @ResponseBody
    Object getStudentByCourseId(@RequestParam(value = "content_id") String content_id) throws IOException {
        SqlSession sqlSession = SqlSessionLoader.getSqlSession();
        int course_id = sqlSession.selectOne("wethree.UserMapper.findCourseIdByContentId",content_id);
        List<Student> students = sqlSession.selectList("wethree.UserMapper.findStudentsByCourseId", course_id);

        sqlSession.close();
        return students;
    }

    //根据chatbox_id查找学生学习进度
    @CrossOrigin(origins = "*")
    @RequestMapping(value = "/student_progress", method = RequestMethod.GET)
    public @ResponseBody
    Object getProgressByChatBoxId(@RequestParam(value = "chatbox_id") String chatbox_id) throws IOException {
        SqlSession sqlSession = SqlSessionLoader.getSqlSession();
        int courseId = sqlSession.selectOne("wethree.UserMapper.findCourseIdByChatBoxId", chatbox_id);
        int id = sqlSession.selectOne("wethree.UserMapper.findIdByChatBoxId",chatbox_id);
        List<ProgressResponse_YT> progress = new ArrayList<>();
        List<StudentCourse> studentCourse = sqlSession.selectList("wethree.UserMapper.findProgressByCourseId",new CourseChapterRequest(courseId,id));
        for(StudentCourse sc:studentCourse) {
            String studentName = sqlSession.selectOne("wethree.UserMapper.findStudentNameByStudentId", sc.getStudentId());
            progress.add(new ProgressResponse_YT(studentName, sc.getProgress(), sc.getDoHomework()));
        }
        sqlSession.close();
        return progress;
    }




}
