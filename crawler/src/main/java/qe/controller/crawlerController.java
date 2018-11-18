package qe.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import qe.model.CrawReq;
import qe.model.CrawRes;
import qe.service.ParseService;

import javax.servlet.http.HttpServletResponse;
import java.io.IOException;

@RestController
public class crawlerController {

    @Autowired
    ParseService service;

    @RequestMapping("/curl")
    public CrawRes getBody(@RequestBody CrawReq req, HttpServletResponse res) throws IOException {
        System.out.println(req);
        return service.getParsedContent(req);
    }

}
