import { useState, useMemo, useEffect } from 'react';
import axios from 'axios';
import type { BookData } from '../../types';

/**
 * Creates nested arrays of books to represent shelves
 * @param b - The flat array of all books
 * @param booksPerShelf - The number of books to put on each shelf
 * @returns A 2D array representing the shelves
 */

//API base url for books endpoint
const API_URL = 'http://localhost:8080/books';

//creates nested arrays of books to represent shelves
function createShelf(b: BookData[], booksPerShelf: number) : BookData[][] {
    const shelves: BookData[][] = [];
    for (let i = 0; i < b.length; i += booksPerShelf) {
        shelves.push(b.slice(i, i + booksPerShelf));
    }
    return shelves;
}

// hook centralizes state and logic for managing bookshelf
function useBooks() {
    //start with empty array of books
    const [currentBooks, setCurrentBooks] = useState<BookData[]>([]);

    //fetch inital data from API upon mount
    useEffect(() => {
        const fetchBooks = async () => {
            try {
                const response = await axios.get(API_URL);
                setCurrentBooks(response.data);
            } catch (error) {
                console.error("Failed to fetch books from API", error);
            }
        };

        fetchBooks();
    }, []);


    // useMemo recalculates the shelves only when the currentBooks array changes
    const shelves = useMemo<BookData[][]>(() => {
        return createShelf(currentBooks, 6);
    }, [currentBooks]);

    /**
     * Adds a new book or updates an existing one
     * @param book - The book object from the form
     */

    //adds new book by making a POST request
    const addBook = async (newBookData: BookData): Promise<void> => {
        try {
            const response = await axios.post(API_URL, newBookData);
            setCurrentBooks((prevBooks) => [...prevBooks, response.data]);
        } catch (error) {
            console.error("Failed to add book", error);
        }
    };

    // updates book by making a PUT request
    const updateBook = async (updatedBookData: BookData): Promise<void> => {
        try {
            const response = await axios.put(`${API_URL}/${updatedBookData.id}`, updatedBookData);
            //find book in local state and replace with updated book
            setCurrentBooks((prevBooks) =>
                prevBooks.map((book) =>
                    book.id === updatedBookData.id ? response.data : book
                )
            );
        } catch (error) {
            console.error("Failed to update book", error);
        }
    };


    /**************************BEGIN OLD LOGIC************************ */
    // const addOrUpdateBook = (book: BookData): void => {
    //     const bookToSave = { ...book, isEditing: false };

    //     if (!bookToSave.spineColor) {
    //         bookToSave.spineColor = '#6B2F4E'; // Default spine color
        // }

        // Check if a user-added book with the same ID already exists
        // const bookExists = currentBooks.some((b) => b.name && b.id === bookToSave.id);

        // if (bookExists) {
        //     updateBook(bookToSave);
        // } else {
            // Add the new book to the array
    //         setCurrentBooks((prevBooks) => [...prevBooks, bookToSave]);
    //     }
    // };

    /**
     * Updates a specific book in the state
     * @param updatedBook - The book with updated properties
     */
    // const updateBook = (updatedBook: BookData): void => {
    //     setCurrentBooks((prevBooks) =>
    //         prevBooks.map(book =>
    //             book.id === updatedBook.id ? { ...book, ...updatedBook } : book
    //         )
    //     );
    // };
    /**************************END OLD LOGIC************************ */



    // useMemo to find the book currently being edited.
    // Returns the book object or null if no book is being edited.
    const editingBook = useMemo<BookData | null>(() => {
        return currentBooks.find((b) => b.name && b.isEditing) ?? null;
    }, [currentBooks]);

    /**************************BEGIN OLD LOGIC******************************* */
    /**
     * Deletes a book from the state
     * @param bookToDelete - The book object to remove
     */
    // const deleteBook = (bookToDelete: BookData): void => {
    //     setCurrentBooks((prevBooks) =>
    //         prevBooks.filter((b) => b.id !== bookToDelete.id)
    //     );
    // };
    /**************************END OLD LOGIC************************ */

    //delete book by making a DELETE request
    const deleteBook = async (bookToDelete: BookData): Promise<void> => {
        try {
            await axios.delete(`${API_URL}/${bookToDelete.id}`);
            //remove book from local state so UI updates instantly
            setCurrentBooks((prevBooks) =>
                prevBooks.filter((b) => b.id !== bookToDelete.id)
            );
        } catch (error) {
            console.error("Failed to delete book", error);
        }
    };

    
    // Return the state and functions to be used by components
    return {
        currentBooks,
        shelves,
        addBook,
        updateBook,
        editingBook,
        deleteBook,
    };
}

export default useBooks;
