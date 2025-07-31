import Shelf from "./Shelf";
import Form from "./Form";
import { BasicMenu }  from "../../components/BasicMenu";
import React from "react";
import useBooks from "./useBooks";
import '../../index.css';
import type { BookData } from "../../types";
import { useMemo, useState } from "react";

const AVAILABLE_GENRES = ["Adventure Fiction", "Mystery/Thriller", "Historical Fiction", "Romance", "Young Adult", "Autobiography", "Memoir", "Travel", "Exploration", "Natural History", "Survival", "History", "Biography"];

const Bookshelf: React.FC = () => {
    const { shelves, addBook, editingBook, deleteBook, updateBook } = useBooks();
    
    //state for filtering books
    const [filteredGenre, setFilteredGenre] = useState<string[]>([]);

    const handleGenreFilter = (genre: string) => {
        setFilteredGenre(prev =>
            prev.includes(genre)
                ? prev.filter(g => g !== genre)
                : [...prev, genre]
        );
    };

    //useMemo recalculates shelves to display by genre
    const displayedShelves = useMemo(() => {
        if (filteredGenre.length === 0) {
            return shelves;
        } else {
            return shelves.map(shelf =>
                shelf.filter(book =>
                    filteredGenre.some(genre =>
                        book.genres?.includes(genre))
                ));
        }
        }, [shelves, filteredGenre]);



    return (
        <>
            <div className="text-center pr-10 pl-10 pt-10">
                        <h2 className="text-xl font-bold">The Ultimate National Park Bookshelf</h2>
                        <p>Curate your collection by adding books that spark your sense of adventure.</p>

            </div>
            
                <div className="flex flex-wrap justify-center gap-8 p-8">
                    <BasicMenu
                        label="Sort Books By Genre"
                        options={AVAILABLE_GENRES}
                        onSelect={(handleGenreFilter)
                        }
                    />
                </div>
        
                    <div className="p-10 b-black">
                        {/* map over filtered shelves to render */}
                        {displayedShelves.map((shelfBooks: BookData[], index: number) => (
                            <div key={index}
                                className="border-4 bg-almond h-30 border-kobicha flex justify-start items-end"
                            >
                                <Shelf 
                                    books={shelfBooks} 
                                    updateBook={updateBook} 
                                    deleteBook={deleteBook} 
                                />
                            </div>
                        ))}
                    </div>

            /*****************TODO: ADJUST PROPS FOR ADD AND UPDATING BOOK */
                <div className="pl-12 pr-10 pb-10">
                    {editingBook ? (
                        <Form
                            key={editingBook?.id || 'new-book-form'
                            }
                            onFormSubmit={addBook}
                            book={editingBook} />
                    ) : (
                        <Form onFormSubmit={updateBook} />
                    )}
                </div>
        </>
    );
}

export default Bookshelf;
