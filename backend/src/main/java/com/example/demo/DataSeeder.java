package com.example.demo;

import com.fasterxml.jackson.core.type.TypeReference;
import com.example.demo.models.Book;
import com.example.demo.models.Genre;
import com.example.demo.repositories.BookRepository;
import com.example.demo.repositories.GenreRepository;
import com.fasterxml.jackson.databind.ObjectMapper;
import jakarta.annotation.PostConstruct;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Component;

import java.io.InputStream;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

//default national park books
@Component
@RequiredArgsConstructor
public class DataSeeder {

    private final BookRepository bookRepository;
    private final GenreRepository genreRepository;

    @PostConstruct
    public void seedData() {
        seedGenres();
        // Check if the database is empty
        if (bookRepository.count() == 0) {
            try {
                ObjectMapper mapper = new ObjectMapper();
                InputStream inputStream = getClass().getResourceAsStream("/data/books.json");
                List<Book> books = mapper.readValue(inputStream, new TypeReference<>() {});

                for (Book book : books) {
                    Set<Genre> savedGenres = new HashSet<>();
                    for (Genre genre : book.getGenres()) {
                        Genre found = genreRepository.findByName(genre.getName())
                                .orElseGet(() -> genreRepository.save(genre));
                        savedGenres.add(found);
                    }
                    book.setGenres(savedGenres);
                    bookRepository.save(book);
                }

                System.out.println("Books seeded successfully.");
            } catch (Exception e) {
                e.printStackTrace();
            }
        }
    }

    private void seedGenres() {
        System.out.println("Seeding genres...");
        List<String> genreNames = List.of(
                "Adventure Fiction", "Mystery/Thriller", "Historical Fiction", "Romance",
                "Young Adult", "Autobiography", "Memoir", "Travel", "Exploration",
                "Natural History", "Survival", "History", "Biography", "Classics",
                "Cookbooks", "Poetry", "Non-fiction"
        );

        for (String name: genreNames) {
            if (genreRepository.findByName(name).isEmpty()) {
                Genre genre = new Genre();
                genre.setName(name);
                genreRepository.save(genre);
                System.out.println("Genre created: " + name);
            } else {
                System.out.println("Genre already exists: " + name);
            }
        }
    }

}
