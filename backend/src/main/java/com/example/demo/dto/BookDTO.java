package com.example.demo.dto;
import lombok.Data;

import java.util.List;

@Data
public class BookDTO {
    private String title;
    private String author;
    private String note;
    private String name;
    private String description;
    private String spineColor;
    private List<Long> genreIds;
}
