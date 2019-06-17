package com.wethree.controller;
import org.springframework.core.io.ClassPathResource;
import org.springframework.core.io.Resource;
import org.springframework.http.MediaType;
import org.springframework.stereotype.Controller;
import org.springframework.util.FileCopyUtils;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import java.io.File;
import java.io.FileInputStream;
import java.io.IOException;
import java.io.InputStream;
import java.net.URL;

@Controller
@RequestMapping(value = "/image")
public class ImageController {
    @RequestMapping(value = "/background",produces = MediaType.IMAGE_JPEG_VALUE)
    @ResponseBody
    public byte[] getBackgroundImage() throws IOException {
        String path="src/main/resources/static/img/background.jpeg";
        File file = new File(path);
        FileInputStream inputStream = new FileInputStream(file);
        byte[] bytes = new byte[inputStream.available()];
        inputStream.read(bytes, 0, inputStream.available());
        return bytes;
    }

    @RequestMapping(value = "/course",produces = MediaType.IMAGE_JPEG_VALUE)
    @ResponseBody
    public byte[] getCourseImage(@RequestParam(value="index")String index) throws IOException {
        String path="src/main/resources/static/img/course"+index+".png";
        File file = new File(path);
        FileInputStream inputStream = new FileInputStream(file);
        byte[] bytes = new byte[inputStream.available()];
        inputStream.read(bytes, 0, inputStream.available());
        return bytes;
    }

}
