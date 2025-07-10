package com.example.demo.models;
import jakarta.persistence.*;
import lombok.Data;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@Entity
@Data

public class Book {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private String title;
    private String author;
    private String spineColor;
    private String status;
    private String description;
    //user submitted book recs
    private String note;
    private String name;
}
