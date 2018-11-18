package qe.model;

import java.io.Serializable;
import java.util.List;

public class CrawReq implements Serializable {

    String url;
    List<String> keyWords;


    @Override
    public String toString() {
        return "CrawReq{" +
                "url='" + url + '\'' +
                ", keyWords=" + keyWords +
                '}';
    }

    public CrawReq() {
    }

    public CrawReq(String url, List<String> keyWords) {
        this.url = url;
        this.keyWords = keyWords;
    }

    public String getUrl() {
        return url;
    }

    public void setUrl(String url) {
        this.url = url;
    }

    public List<String> getKeyWords() {
        return keyWords;
    }

    public void setKeyWords(List<String> keyWords) {
        this.keyWords = keyWords;
    }
}
