package com.example.demo.services;

import com.example.demo.models.Book;
import com.example.demo.models.Genre;
import com.example.demo.repositories.BookRepository;
import com.example.demo.repositories.GenreRepository;
import jakarta.transaction.Transactional;
import org.springframework.stereotype.Service;

import java.util.HashSet;
import java.util.List;
import java.util.Optional;

@Service
public class BookService {

    private final BookRepository bookRepository;
    private final GenreRepository genreRepository;

    public BookService(BookRepository bookRepository, GenreRepository genreRepository) {
        this.bookRepository = bookRepository;
        this.genreRepository = genreRepository;
    }

    public List<Book> getAllBooks() {
        return bookRepository.findAll();
    }

    public Optional<Book> getBookById(Long id) {
        return bookRepository.findById(id);
    }

    //creates a new book and links it to existing genres
    //@param book the book to create
    //@param genreIds the list of genre IDs to link to the book
    //@return the created book including linked genres

    @Transactional
    public Book createBook(Book book, List<Long> genreIds) {
        if (genreIds != null && !genreIds.isEmpty()) {
            List<Integer> genreIdInts = genreIds.stream()
                    .map(Long::intValue)
                    .toList();
            List<Genre> foundGenres = genreRepository.findAllById(genreIdInts);
            book.setGenres(new HashSet<>(foundGenres));
        }
        return bookRepository.save(book);
    }

    //@param id the ID of the book to update
    //@param bookDetails the book details to update
    //@param genreIds the list of genre IDs to link to the book
    //@return optional updated book or empty if not found

    @Transactional
    public Optional<Book> updateBook(Long id, Book bookDetails, List<Long> genreIds) {
        return bookRepository.findById(id).map(existingBook -> {
            existingBook.setTitle(bookDetails.getTitle());
            existingBook.setAuthor(bookDetails.getAuthor());
            existingBook.setNote(bookDetails.getNote());
            existingBook.setName(bookDetails.getName());

            if (genreIds != null && !genreIds.isEmpty()) {
                List<Integer> genreIdInts = genreIds.stream()
                        .map(Long::intValue)
                                .toList();
                List<Genre> foundGenres = genreRepository.findAllById(genreIdInts);
                existingBook.setGenres(new HashSet<>(foundGenres));
            }

            return bookRepository.save(existingBook);
        });
    }

    public void deleteBook(Long id) {
        bookRepository.deleteById(id);
    }
}
