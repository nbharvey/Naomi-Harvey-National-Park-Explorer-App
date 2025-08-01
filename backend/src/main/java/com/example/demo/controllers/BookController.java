package com.example.demo.controllers;

import com.example.demo.dto.BookDTO;
import com.example.demo.models.Book;
import com.example.demo.services.BookService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.bind.annotation.CrossOrigin;

import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;

@CrossOrigin(origins = "http://localhost:5173")
@RestController
@RequestMapping("/books")
public class BookController {

    private BookService bookService;

    public BookController(BookService bookService) {
        this.bookService = bookService;
    }

    @GetMapping
    public List<Book> getAllBooks() {
        return bookService.getAllBooks();
    }

    @GetMapping("/{id}")
    public ResponseEntity<Book> getBookById(@PathVariable Long id) {
        return bookService.getBookById(id)
                .map(ResponseEntity::ok)
                .orElse(ResponseEntity.notFound().build());
    }

    @PostMapping
    @ResponseStatus(HttpStatus.CREATED)
    public Book createBook(@RequestBody BookDTO bookRequest) {
        Book book = new Book();
        //get all data from DTO
        book.setTitle(bookRequest.getTitle());
        book.setAuthor(bookRequest.getAuthor());
        book.setName(bookRequest.getName());
        book.setNote(bookRequest.getNote());
        book.setDescription(bookRequest.getDescription());
        book.setSpineColor(bookRequest.getSpineColor());

        return bookService.createBook(book, bookRequest.getGenreIds());
    }

    @PutMapping("/{id}")
    public ResponseEntity<Book> updateBook(@PathVariable Long id, BookDTO bookRequest) {
        Book bookDetails = new Book();
        bookDetails.setTitle(bookRequest.getTitle());
        bookDetails.setAuthor(bookRequest.getAuthor());
        bookDetails.setName(bookRequest.getName());
        bookDetails.setNote(bookRequest.getNote());
        bookDetails.setDescription(bookRequest.getDescription());
        bookDetails.setSpineColor(bookRequest.getSpineColor());

        return bookService.updateBook(id, bookDetails, bookRequest.getGenreIds())
                .map(ResponseEntity::ok)
                .orElse(ResponseEntity.notFound().build());
    }

    @DeleteMapping("/{id}")
    @ResponseStatus(HttpStatus.NO_CONTENT)
    public void deleteBook(@PathVariable Long id) {
        bookService.deleteBook(id);
    }
}
