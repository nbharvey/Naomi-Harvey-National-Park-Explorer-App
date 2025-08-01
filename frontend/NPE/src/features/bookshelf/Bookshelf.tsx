import Shelf from "./Shelf";
import Form from "./Form";
import { BasicMenu }  from "../../components/BasicMenu";
import useBooks from "./useBooks";
import '../../index.css';
import type { BookData } from "../../types";
import type { NewBookData } from "../../types";
import type {Genre} from "../../types";
import axios from "axios";
import { useMemo, useState, useEffect } from "react";

const Bookshelf: React.FC = () => {
    const { currentBooks, addBook, editingBook, deleteBook, updateBook } = useBooks();
    
    //state for filtering books by genre name
    const [filteredGenres, setFilteredGenres] = useState<string[]>([]);//begin by showing all genres

    //state for all possible genres fetched from API
    const [allGenres, setAllGenres] = useState<Genre[]>([]);

    //fetch all genres from API to populate filter menu
    useEffect(() => {
        const fetchGenres = async () => {
            try {
                const response = await axios.get('http://localhost:8080/genres');
                setAllGenres(response.data);
            } catch (error) {
                console.error('Error fetching genres:', error);
            }
        };
        fetchGenres();
    }, []);

    const handleGenreFilter = (genreName: string) => {
        setFilteredGenres(prev =>
            prev.includes(genreName)
                ? prev.filter(genre => genre !== genre)
                : [...prev, genreName]
        );
    };

    //creates a new list that takes currentBOoks and filters to only included genres from filteredGenres state
    const displayedBooks = useMemo(() => {
        if (filteredGenres.length === 0) {
            return currentBooks;
        }
        return currentBooks.filter(book =>
            filteredGenres.some(filteredGenreName =>
                book.genres.some(bookGenre => bookGenre.name === filteredGenreName)
            )
        );
    }, [currentBooks, filteredGenres]);

    //useMemo recalculates shelves to display by genre
    const displayedShelves = useMemo(() => {
        const shelves: BookData[][] = [];
        for (let i = 0; i < displayedBooks.length; i += 8) {
            shelves.push(displayedBooks.slice(i, i + 8));
        }
        return shelves;
    }, [displayedBooks]);

    //handler for update mode of form
    const handleUpdateBook = (bookFormData: NewBookData) => {
        if (editingBook) {
            const bookToUpdate: BookData = {
                id: editingBook.id,
                title: bookFormData.title,
                author: bookFormData.author,
                note: bookFormData.note,
                name: bookFormData.name,
                description: bookFormData.description,
                spineColor: bookFormData.spineColor,
                genres: allGenres.filter(genre => bookFormData.genreIds.includes(genre.id))
            };
            updateBook(bookToUpdate);
        }
    };
    return (
        <>
            <div className="text-center pr-10 pl-10 pt-10">
                        <h2 className="text-xl font-bold">The Ultimate National Park Bookshelf</h2>
                        <p>Curate your collection by adding books that spark your sense of adventure.</p>

            </div>
            
                <div className="flex flex-wrap justify-center gap-8 p-8">
                    <BasicMenu
                        label="Sort Books By Genre"
                        options={allGenres.map(genre => genre.name)}
                        onSelect={(handleGenreFilter)
                        }
                    />
                </div>
        
                    <div className="p-10 b-black">
                        {/* map over filtered shelves to render */}
                        {displayedShelves.map((shelfBooks, index) => (
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

                <div className="pl-12 pr-10 pb-10">
                    {editingBook ? (
                        <Form
                        key={editingBook?.id}
                        book={editingBook}
                        onFormSubmit={handleUpdateBook}
                        />
                    ) : (
                        <Form onFormSubmit={addBook} />
                    )}
                </div>
        </>
    );
}

export default Bookshelf;
