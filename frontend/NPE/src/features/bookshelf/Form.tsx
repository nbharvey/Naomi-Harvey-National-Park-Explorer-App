import React, { useEffect, useState } from 'react';
import { CustomButton } from '../../components/CustomButton';
import type { BookData } from '../../types';
import '../../index.css'; 
import type { Genre } from '../../types';
import type { NewBookData } from '../../types';
import type { FormProps } from '../../types';
import axios from 'axios';

const createDefaultBook = () => ({
    title: '',
    author: '',
    note: '',
    name: '',
    description: '',
    spineColor: ''
});

const Form: React.FC<FormProps> = ({ book, onFormSubmit }) => {
    const [formData, setFormData] = useState(createDefaultBook());
    const [allGenres, setAllGenres] = useState<Genre[]>([]);
    const [selectedGenreIds, setSelectedGenreIds] = useState<number[]>([]);

    //fetch all available genres from backend when component loads
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
    
    //pre-populate the form when editing
    useEffect(() => {
        if (book) {
            setFormData({
                title: book.title || '',
                author: book.author || '',
                note: book.note || '',
                name: book.name || '',
                description: book.description || '',
                spineColor: book.spineColor || '',
            });
        } else {
            setSelectedGenreIds(book.genres?.map(genre => genre.id) || []);
        }
    }, [book]);


    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleGenreChange = (genreId: number) => {
        setSelectedGenreIds(prevIds =>
            prevIds.includes(genreId)
                ? prevIds.filter(id => id !== genreId)
                : [...prevIds, genreId]
        );
    };
    
    
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (selectedGenreIds.length === 0) {
            alert('Please select at least one genre.');
            return;
        }
    };

    //object that now matches NewBookData type
    const bookToSubmit: NewBookData = {
        ...formData,
        genreIds: selectedGenreIds,
    };

    onFormSubmit(bookToSubmit);

    //reset form data
    setFormData(createDefaultBook());
    setSelectedGenreIds([]);
};

    return (
        <div>
            <form
                className="border-4 border-kobicha"
                onSubmit={handleSubmit}>
                <div className='text-center'>
                    <h3>Leave a book recommendation for Naomi!</h3>
                    <p>Leave your stamp on my website in the form of a book recommendation!</p>
                </div>

                <div
                    className='border-b-4 border-kobicha'
                >
                    <label htmlFor="title">What is the title of your book rec?<br /></label>
                    <input
                        type="text"
                        id="title"
                        name="title"
                        minLength={3}
                        value={formData.title}
                        onChange={handleChange}
                        required
                        className='bg-almond w-full'
                    />
                </div>

                <div
                    className='border-b-4 border-kobicha'
                    >
                    <label htmlFor="author">Who is the author of the book?<br /></label>
                    <input
                        type="text"
                        id="author"
                        name="author"
                        value={formData.author}
                        onChange={handleChange}
                        required
                        className="bg-almond w-full"
                    />
                </div>
                <div
                    className='border-b-4 border-kobicha p-2'
                    >
                    <label>What is the genre(s) for the book?<br /></label>
                    <div className="flex flex-wrap gap-4 mt-2">
                        {AVAILABLE_GENRES.map((genre) => (
                            <div key={genre}>
                                <input
                                    type="checkbox"
                                    id={genre}
                                    name={genre}
                                    checked={formData.genres.includes(genre)}
                                    onChange={handleChange}
                                    className="mr-2"
                                />
                                <label htmlFor={genre}>{genre}</label>
                            </div>
                        ))}
                    </div>
                    </div>
                

                <div
                    className='border-b-4 border-kobicha'
                    >
                    <label htmlFor="note">Leave a note for Naomi!<br /></label>
                    <textarea
                        id="note"
                        name="note"
                        value={formData.note || ''} // Handle potential undefined value
                        onChange={handleChange}
                        placeholder='I am recommending this book because...'
                        required
                        minLength={3}
                        maxLength={200}
                        className="bg-almond text-kobicha h-full w-full"
                    />
                </div>

                <div
                    className='border-b-4 border-kobicha'
                    >
                    <label htmlFor="name">Enter your name:<br /></label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name || ''} // Handle potential undefined value
                        onChange={handleChange}
                        required
                    />
                </div>

                <div
                    className="bg-kobicha"
                >
                    <CustomButton type="submit">
                        {formData.isEditing ? 'Save Changes' : 'Add Book'}
                    </CustomButton>
                </div>
            </form>
        </div>
    );
}

export default Form;
