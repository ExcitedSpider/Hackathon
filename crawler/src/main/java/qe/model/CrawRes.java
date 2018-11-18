package qe.model;

import java.io.Serializable;
import java.util.ArrayList;
import java.util.List;

public class CrawRes implements Serializable {
    private List<CardsInfo> cards = new ArrayList<>();
    private String html = new String();

    @Override
    public String toString() {
        return "CrawRes{" +
                "cards=" + cards +
                ", html='" + html + '\'' +
                '}';
    }

    public List<CardsInfo> getCards() {
        return cards;
    }

    public void setCards(List<CardsInfo> cards) {
        this.cards = cards;
    }

    public String getHtml() {
        return html;
    }

    public void setHtml(String html) {
        this.html = html;
    }
}
