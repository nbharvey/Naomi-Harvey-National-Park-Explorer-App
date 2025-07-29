import { CustomButton } from "../../components/CustomButton";
import UserData from "./UserData";
import React from 'react';
import type { BookData } from '../../types';

interface BookProps {
    book: BookData;
    isOpen: boolean;
    toggleModal: (book: BookData | null) => void;
    updateBook: (book: BookData) => void;
    deleteBook: (book: BookData) => void;
}

const Book: React.FC<BookProps> = ({ book, isOpen, toggleModal, updateBook, deleteBook }) => {

    const handleEdit = () => {
        updateBook({ ...book, isEditing: true });
        toggleModal(null);
    };

    const handleDelete = () => {
        deleteBook(book);
        toggleModal(null);
    };

    // The onClick handler for the modal overlay closes the modal
    const handleOverlayClick = () => {
        toggleModal(null);
    };
    
    // This stops the click from propagating to the overlay and closing the modal
    const handleModalContentClick = (e: React.MouseEvent) => {
        e.stopPropagation();
    };

    return (
        <div>
            <div
                onClick={() => toggleModal(book)}
                style={{ backgroundColor: book.spineColor }}
                className="h-40 w-10 overflow-hidden"
            >
                <p className="p-2 text-sm writing-vertical-rl">{book.title}</p>
            </div>

            {isOpen && (
                <div onClick={handleOverlayClick}>
                    <div className="bg-almond border-4 border-kobicha items-center text-center fixed inset-20"
                        onClick={handleModalContentClick}>

                        {/* If there is no book.name, display the book's details. */}
                        {!book.name && (
                            <ul>
                                <li><h2>{book.title}</h2></li>
                                <br />
                                <li><p>Author: {book.author}</p></li>
                                <li><p>Genre: {book.genres.join(', ')}</p></li>
                                <li><p>Summary: {book.description}</p></li>
                            </ul>
                        )}

                        {/* If there is a book.name, it's a user recommendation. */}
                        {book.name && (
                            <>
                                <UserData data={book} /> 
                                <div>
                                    <CustomButton onClick={handleEdit}>
                                        Edit book rec 
                                    </CustomButton>
                                    <CustomButton onClick={handleDelete}>
                                        Delete book
                                    </CustomButton>
                                </div>
                            </>
                        )}
                        <div>
                            <CustomButton onClick={() => toggleModal(null)}>
                                Return book
                            </CustomButton>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

export default Book;