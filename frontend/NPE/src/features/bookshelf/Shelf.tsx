import React, { useState } from 'react';
import type { BookData } from '../../types';
import Book from './Book';
import type { ShelfProps } from '../../types';


const Shelf: React.FC<ShelfProps> = ({ books, setEditingState, updateBook, deleteBook }) => {
    // state for the currently open modal is typed to be either a BookData object or null
    const [modal, setModal] = useState<BookData | null>(null);

    /**
     * Toggles modal display for a specific book
     * If the same book's spine is clicked again, the modal closes
     * @param book - book object to display in the modal, or null to close
     */
    const toggleModal = (book: BookData | null) => {
        // If a modal is already open and its book is the same as the one being clicked, close the modal
        if (modal && book && modal.id === book.id) {
            setModal(null);
        } else {
            // Otherwise, open the modal for the clicked book
            setModal(book);
        }
    };

    return (
        <>
            {/* Renders a collection of books. 
              The `isOpen` prop is calculated by checking if the currently open modal's ID
              matches the ID of the book being rendered.
            */}
            {books.map((book) => (
                <Book
                    key={book.id}
                    book={book}
                    toggleModal={toggleModal}
                    isOpen={modal?.id === book.id}
                    setEditingState={setEditingState}
                    updateBook={updateBook}
                    deleteBook={deleteBook}
                />
            ))}
        </>
    );
}

export default Shelf;
