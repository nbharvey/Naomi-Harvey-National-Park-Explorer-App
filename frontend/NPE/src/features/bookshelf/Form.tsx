import React, { useState } from 'react';
import { CustomButton } from '../../components/CustomButton';
import type { BookData } from '../../types';
import '../../index.css'; 
import type { Genre } from '../../types';




interface FormProps {
    book?: BookData; 
    onFormSubmit: (bookData: BookData) => void;
}

const createDefaultBook = (): BookData => ({
    title: '',
    author: '',
    note: '',
    name: '',
    description: '',
    spineColor: ''
});

// const AVAILABLE_GENRES = ["Adventure Fiction", "Mystery/Thriller", "Historical Fiction", "Romance", "Young Adult", "Autobiography", "Memoir", "Travel", "Exploration", "Natural History", "Survival", "History", "Biography"];


const Form: React.FC<FormProps> = ({ book = createDefaultBook(), onFormSubmit }) => {
    const [formData, setFormData] = useState<BookData>(() => {
        return book || createDefaultBook();
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value, type } = e.target;
        if (type === 'checkbox') {
            const { checked } = e.target as HTMLInputElement;
            setFormData(prevState => {
                const newGenres = checked ? [...prevState.genres, name] : prevState.genres.filter(genre => genre !== name);
                return { ...prevState, genres: newGenres };
                });
        } else {
            setFormData(prevState => ({
                ...prevState,
                [name]: value,
            }));
        }
    };


    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (formData.genres.length === 0) { 
            alert('Please select at least one genre.');
            return;
        }
        onFormSubmit(formData);
        setFormData(createDefaultBook());
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
