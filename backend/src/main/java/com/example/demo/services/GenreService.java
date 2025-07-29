package com.example.demo.services;

import com.example.demo.models.Genre;
import com.example.demo.repositories.GenreRepository;
import jakarta.transaction.Transactional;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

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
    }public Genre createGenre(Genre genre) {
        return genreRepository.save(genre);
    }

    public Genre getGenreById(Integer id) {
        return genreRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Genre not found with id: " + id));
    }

    @Transactional
    public Optional<Genre> updateGenre(Integer id, Genre genreDetails) {
        return genreRepository.findById(id)
                .map(existingGenre -> {
                    existingGenre.setName(genreDetails.getName());
                    return genreRepository.save(existingGenre);
                });
    }

    public void deleteGenre(Integer id) {
        if (!genreRepository.existsById(id)) {
            throw new RuntimeException("Genre not found with id: " + id);
        }
        genreRepository.deleteById(id);
    }


}
