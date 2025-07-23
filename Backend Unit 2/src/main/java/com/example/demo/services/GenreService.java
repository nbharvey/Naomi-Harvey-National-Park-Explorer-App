package com.example.demo.services;

import com.example.demo.models.Genre;
import com.example.demo.repositories.GenreRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class GenreService {

    private final GenreRepository genreRepository;
    public GenreService(GenreRepository genreRepository) {
        this.genreRepository = genreRepository;
    }
// Retrieves all genres from the database.
// @return a list of all genres.

    public List<Genre> getAllGenres() {
        return genreRepository.findAll();
    }
}
