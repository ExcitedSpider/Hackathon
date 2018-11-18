package qe.service;

import org.junit.Test;
import org.springframework.beans.factory.annotation.Autowired;
import qe.model.CrawReq;

import java.lang.reflect.Array;
import java.util.ArrayList;
import java.util.Arrays;

import static org.junit.Assert.*;

public class ParseServiceTest {

    ParseService service = new ParseService();

    @Test
    public void getParsedContent() {
        CrawReq req = new CrawReq();
        req.setKeyWords(Arrays.asList("删除","隐私"));
        req.setUrl("https://game.qq.com/contract.shtml");
        service.getParsedContent(req);

    }
}