package qe.model;

import java.io.Serializable;

public class Token implements Serializable {

    String id;
    String sentence;

    @Override
    public String toString() {
        return "Token{" +
                "id='" + id + '\'' +
                ", sentence='" + sentence + '\'' +
                '}';
    }

    public Token(String id, String sentence) {
        this.id = id;
        this.sentence = sentence;
    }

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getSentence() {
        return sentence;
    }

    public void setSentence(String sentence) {
        this.sentence = sentence;
    }
}
