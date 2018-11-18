package qe.service;

import org.jsoup.Connection;
import org.jsoup.Jsoup;
import org.jsoup.nodes.Document;
import org.jsoup.nodes.Element;
import org.jsoup.select.Elements;
import org.springframework.stereotype.Service;
import qe.model.CardsInfo;
import qe.model.CrawReq;
import qe.model.CrawRes;
import qe.model.Token;

import java.io.IOException;

@Service
public class ParseService {

    public CrawRes getParsedContent(CrawReq req){
        Document doc = getdoc(req.getUrl());
        if(doc == null){
            return null;
        }
        CrawRes res = new CrawRes();
        int id = 0;
        for(String keyword:req.getKeyWords()) {
            CardsInfo card = new CardsInfo();
            card.setKeyword(keyword);
            id = extractRes(doc, card, String.format("p:contains(%s)", keyword),id);
            id = extractRes(doc, card, String.format("li:contains(%s)", keyword),id);
            res.getCards().add(card);
        }
        res.setHtml(doc.html());
        return res;
    }

    private int extractRes(Document doc, CardsInfo info, String selector,int id) {
        Elements elements = doc.body().select(selector);
        for(Element element:elements) {
            System.out.println(element.text());
            if(!element.hasAttr("id")) {
                element.attr("style", "background-color:aqua");
                element.attr("id", "anchor" + id);
                info.getTokens().add(new Token("anchor" + id, element.text()));
                id++;
            }else{
                info.getTokens().add(new Token(element.attr("id"),element.text()));
            }
        }
        return id;
    }


    private Document getdoc(String url) {
        try {
            Connection con = Jsoup.connect(url);
            con.header("Accept", "text/html, application/xhtml+xml, */*");
            con.header("Content-Type", "application/x-www-form-urlencoded");
            con.header("User-Agent", "Mozilla/5.0 (compatible; MSIE 9.0; Windows NT 6.1; WOW64; Trident/5.0))");
            return con.get();
        }catch (IOException e){
            e.printStackTrace();
            return null;
        }
    }
}
