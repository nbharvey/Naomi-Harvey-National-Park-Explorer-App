import { CustomButton } from "../../components/CustomButton";
import UserData from "./UserData";
import React from 'react';
import type {BookProps} from '../../types';
import { GalleryWithCarousel } from "../../components/GalleryWithCarousel";

const Book: React.FC<BookProps> = ({ book, isOpen, toggleModal, setEditingState, deleteBook }) => {

    const handleEdit = () => {
        setEditingState(book);
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

    const displayTitle = book.title.split(/[:–-]/)[0].trim();


    return (
        <div>
            <div
                onClick={() => toggleModal(book)}
                style={{
                    backgroundColor: book.spineColor,
                    borderLeftColor: 'rgba(0, 0, 0, 0.2)',
                    borderBottomColor: 'rgba(0, 0, 0, 0.2)'
                }}
                className="border-l-2 border-b-2 mr-0.5 overflow-hidden w-10 max-w-15 flex items-center justify-center hover:-rotate-6 hover:scale-90 max-h-36 rounded-tr"
                >
                  
                  <p className="p-2 text-center text-xs writing-vertical-rl break-words">
                    {displayTitle}
                </p>
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
                        <GalleryWithCarousel />
                    </div>
                </div>
            )}
        </div>
    );
}

export default Book;