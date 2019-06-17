package com.wethree.controller;

import com.wethree.mybatis.SqlSessionLoader;
import com.wethree.mybatis.po.*;
import com.wethree.request.StuAddCourseRequest;
import com.wethree.response.InforResponse;
import org.apache.ibatis.session.SqlSession;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.ModelAndView;

import java.io.IOException;
import java.util.HashMap;
import java.util.List;

/**
 * Created by qiyusi on 5/29/19.
 */

@RestController
public class CourseController {

    //返回所有课程
    @CrossOrigin(origins = "*")
    @RequestMapping(value="/course", method= RequestMethod.GET)
    public @ResponseBody
    Object allCourses() throws IOException{
        SqlSession sqlSession = SqlSessionLoader.getSqlSession();
        List<Course> courses=sqlSession.selectList("wethree.UserMapper.findAllCourses");
        sqlSession.close();
        return courses;
        //return new CourseResponse(courses);
    }

    //学生添加课程
    @CrossOrigin(origins="*")
    @RequestMapping(value="/student_course",method = RequestMethod.GET)
    public void addCourse(@RequestParam(value = "student_id") String student_id,
                     @RequestParam(value = "course_id") int course_id) throws IOException{
        SqlSession sqlSession = SqlSessionLoader.getSqlSession();
        List<Integer> ids=sqlSession.selectList("wethree.UserMapper.findIdByCourseId",course_id);//contents里面某一个课程的所有章节id

        for(int i=0;i<ids.size();i++) {
            int id = ids.get(i);
            double progress = 0.0;
            int do_homework = 0;
            sqlSession.insert("wethree.UserMapper.studentAddCourse",
                    new StuAddCourseRequest(student_id, course_id, id, progress, do_homework));
            sqlSession.commit();
        }
    }

    @CrossOrigin(origins="*")
    @RequestMapping(value="/find_student_course",method = RequestMethod.GET)
    public @ResponseBody
    Object findStudentCourse(@RequestParam(value = "student_id") String student_id) throws IOException{
        SqlSession sqlSession = SqlSessionLoader.getSqlSession();
        List<Course> courses=sqlSession.selectList("wethree.UserMapper.findStudentCourse",student_id);
        sqlSession.close();
        return courses;
    }


    //宇童
    //根据老师查找课程
    @CrossOrigin(origins = "*")
    @RequestMapping(value = "/teacher_course", method = RequestMethod.GET)
    public @ResponseBody
    Object getCourses(@RequestParam(value = "teacher_name") String teacher_name) throws IOException {
        SqlSession sqlSession = SqlSessionLoader.getSqlSession();
        List<Course> courses = sqlSession.selectList("wethree.UserMapper.findTeacherCourses", teacher_name);

        sqlSession.close();
        return courses;
    }

    //根据课程英文名查找整条课程记录
    @CrossOrigin(origins = "*")
    @RequestMapping(value = "/oneCourse", method = RequestMethod.GET)
    public @ResponseBody
    Object getCourseByContentId(@RequestParam(value = "content_id") String content_id) throws IOException {
        SqlSession sqlSession = SqlSessionLoader.getSqlSession();
        Course course = sqlSession.selectOne("wethree.UserMapper.findCourseByContentId",content_id);
        sqlSession.close();
        return course;
    }

    //根据课程英文名查找整条课程记录
    @CrossOrigin(origins = "*")
    @RequestMapping(value = "/addCourse", method = RequestMethod.GET)
    public @ResponseBody
    Object addCourseForTeacher(@RequestParam(value = "contents") String contents,
                               @RequestParam(value ="courseName") String course_name,
                               @RequestParam(value ="courseEName") String content_id,
                               @RequestParam(value ="chapterName") String text,
                               @RequestParam(value ="chapterEName") String chatbox_id,
                               @RequestParam(value = "teacherName") String teacher_name) throws IOException {
        SqlSession sqlSession = SqlSessionLoader.getSqlSession();
        int teacher_id = sqlSession.selectOne("wethree.UserMapper.findTeacherNameByTeacherId",teacher_name);
        Course course = sqlSession.selectOne("wethree.UserMapper.findCourseByCourseNameOrCourseEName", new Course(course_name, content_id, teacher_id));

        if (course == null) {
            Content content = sqlSession.selectOne("wethree.UserMapper.findContentsByTextAndChatBoxId",new Content(content_id, 1, text, chatbox_id));
            if(content!=null){
                return new InforResponse("该章节已存在",0);
            }
            //List<Student> students = sqlSession.selectList("wethree.UserMapper.findStudentsByCourseId", course_id);
            sqlSession.insert("wethree.UserMapper.teacherAddCourse", new Course(course_name, content_id, teacher_id));
            sqlSession.insert("wethree.UserMapper.addContentsForContents", new Content(content_id, 1, text, chatbox_id));

            sqlSession.commit();
            String[] contentsArr = contents.split("\n");
            for (int i = 0; i < contentsArr.length; i++) {
                String image_url = "";
                String type = "";
                if (i % 2 == 0) {
                    image_url = "http://localhost:5300/assets/images/user-avatar/0592cae6-6af7-11e9-a923-1681be663d3e/iron-man.jpg";
                    type = "teacher";
                } else {
                    image_url = "http://localhost:5300/assets/images/user-avatar/0592cfaa-6af7-11e9-a923-1681be663d3e/spider-man.jpg";
                    type = "student";
                }

                sqlSession.insert("wethree.UserMapper.addContentsForMessage", new Message(contentsArr[i], image_url, type));
                sqlSession.commit();
                int maxUuid = sqlSession.selectOne("wethree.UserMapper.findMaxUuid");
                sqlSession.insert("wethree.UserMapper.addContents",new ChatBoxMessage(chatbox_id,maxUuid));
                sqlSession.commit();
            }
            //sqlSession.commit();
        } else {
            Course course1 = sqlSession.selectOne("wethree.UserMapper.findCourseByCourseNameAndCourseEName", new Course(course_name, content_id, teacher_id));
            if(course1==null){
                return new InforResponse("该课程已存在",0);
            }

            Content content = sqlSession.selectOne("wethree.UserMapper.findContentsByTextAndChatBoxId", new Content(content_id, 1, text, chatbox_id));
            if (content == null) {
                int course_id = sqlSession.selectOne("wethree.UserMapper.findCourseIdByContentId",content_id);
                int id = sqlSession.selectOne("wethree.UserMapper.findMaxId",content_id);
                List<Student> students = sqlSession.selectList("wethree.UserMapper.findStudentsByCourseId", course_id);
                List<Content> allContents = sqlSession.selectList("wethree.UserMapper.findContentsByContentId", new Content(content_id, 1, text, chatbox_id));
                int len = allContents.size();
                sqlSession.insert("wethree.UserMapper.addContentsForContents", new Content(content_id, len + 1, text, chatbox_id));
                String[] contentsArr = contents.split("\n");
                for (int i = 0; i < contentsArr.length; i++) {
                    String image_url = "";
                    String type = "";
                    if (i % 2 == 0) {
                        image_url = "http://localhost:5300/assets/images/user-avatar/0592cae6-6af7-11e9-a923-1681be663d3e/iron-man.jpg";
                        type = "teacher";
                    } else {
                        image_url = "http://localhost:5300/assets/images/user-avatar/0592cfaa-6af7-11e9-a923-1681be663d3e/spider-man.jpg";
                        type = "student";
                    }
                    sqlSession.insert("wethree.UserMapper.addContentsForMessage", new Message(contentsArr[i], image_url, type));
                    sqlSession.commit();
                    int maxUuid = sqlSession.selectOne("wethree.UserMapper.findMaxUuid");
                    sqlSession.insert("wethree.UserMapper.addContents",new ChatBoxMessage(chatbox_id,maxUuid));
                    sqlSession.commit();


                }
                for(Student s:students) {
                    sqlSession.insert("wethree.UserMapper.addStudentCourseIfNewCourse", new StuAddCourseRequest(s.getStudent_id(),course_id,id+1,0,0 ));
                    sqlSession.commit();
                }
            } else {
                String result = "课程已存在";

                return new InforResponse(result,0);
            }

        }
        String result = "添加成功";
        return new InforResponse(result,1);
    }




}
