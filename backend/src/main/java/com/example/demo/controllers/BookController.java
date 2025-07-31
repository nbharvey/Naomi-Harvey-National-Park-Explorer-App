package com.example.demo.controllers;

import com.example.demo.models.Book;
import com.example.demo.services.BookService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;

@CrossOrigin(origins = "http://localhost:3000")
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
    public Book createBook(@RequestBody Map<String, Object> payload) {
        Book book = new Book();
        book.setTitle((String) payload.get("title"));
        book.setAuthor((String) payload.get("author"));
        // Extract other book fields as needed...

        List<Integer> genreIdsAsInt = (List<Integer>) payload.get("genreIds");
        List<Long> genreIds = genreIdsAsInt.stream().map(Long::valueOf).collect(Collectors.toList());

        return bookService.createBook(book, genreIds);
    }

    @PutMapping("/{id}")
    public ResponseEntity<Book> updateBook(@PathVariable Long id, @RequestBody Map<String, Object> payload) {
        Book bookDetails = new Book();
        bookDetails.setTitle((String) payload.get("title"));
        bookDetails.setAuthor((String) payload.get("author"));
        // Extract other book fields...

        List<Integer> genreIdsAsInt = (List<Integer>) payload.get("genreIds");
        List<Long> genreIds = genreIdsAsInt != null ?
                genreIdsAsInt.stream().map(Long::valueOf).collect(Collectors.toList()) : null;

        return bookService.updateBook(id, bookDetails, genreIds)
                .map(ResponseEntity::ok)
                .orElse(ResponseEntity.notFound().build());
    }

    @DeleteMapping("/{id}")
    @ResponseStatus(HttpStatus.NO_CONTENT)
    public void deleteBook(@PathVariable Long id) {
        bookService.deleteBook(id);
    }
}
