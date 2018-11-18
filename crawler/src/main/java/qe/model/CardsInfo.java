package qe.model;

import java.io.Serializable;
import java.util.ArrayList;
import java.util.List;

public class CardsInfo implements Serializable {
    private String keyword;
    private List<Token> tokens = new ArrayList<>();

    @Override
    public String toString() {
        return "CardsInfo{" +
                "tokens=" + tokens +
                ", keyword='" + keyword + '\'' +
                '}';
    }

    public List<Token> getTokens() {
        return tokens;
    }

    public void setTokens(List<Token> tokens) {
        this.tokens = tokens;
    }

    public String getKeyword() {
        return keyword;
    }

    public void setKeyword(String keyword) {
        this.keyword = keyword;
    }
}
