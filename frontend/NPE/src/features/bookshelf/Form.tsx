import React, { useEffect, useState } from 'react';
import '../../index.css'; 
import type { Genre } from '../../types';
import type { NewBookData } from '../../types';
import type { FormProps } from '../../types';
import axios from 'axios';
import { CustomButton } from '../../components/CustomButton';

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
        if (book?.id) {
            setFormData({
                title: book.title || '',
                author: book.author || '',
                note: book.note || '',
                name: book.name || '',
                description: book.description || '',
                spineColor: book.spineColor || '',
            });
            setSelectedGenreIds(book.genres?.map(genre => genre.id) || []);
        } else {
            //reset form
            setFormData(createDefaultBook());
            setSelectedGenreIds([]);
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
        //object that now matches NewBookData type
        const bookToSubmit: NewBookData = {
            ...formData,
            genreIds: selectedGenreIds,
         };

        console.log("Form is calling onFormSubmit with:", bookToSubmit);
        onFormSubmit(bookToSubmit);

        //reset form data
        setFormData(createDefaultBook());
        setSelectedGenreIds([]);
};

    return (
        <div>
            <form
                className="border-4 border-kobicha bg-almond p-4"
                onSubmit={handleSubmit}>
                <div className='text-center text-sm'>
                    <p className="border-b-white border-b-2 border-dotted p-2">Have you ever read a memorable adventure story and it just stuck with you?<br /></p>
                    <p className="border-b-white border-b-2 border-dotted p-2">Leave your book recommendation on this website so that other people can enjoy it too!<br /></p>
                </div>

                <div
                    className='border-b-4 border-kobicha text-xs p-2 text-center'
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
                        className='bg-mossGreen w-full'
                    />
                </div>

                <div
                    className='border-b-4 border-kobicha text-xs p-2 text-center'
                    >
                    <label htmlFor="author">Who is the author of the book?<br /></label>
                    <input
                        type="text"
                        id="author"
                        name="author"
                        value={formData.author}
                        onChange={handleChange}
                        required
                        className="bg-mossGreen w-full"
                    />
                </div>
                <div
                    className='border-b-4 border-kobicha p-2 text-xs text-center'
                    >
                    <label>What is the genre(s) for this book?<br /></label>
                    <div className="flex flex-wrap mt-2  p-1 gap-1 text-xs">
                        {allGenres.map((genre) => (
                            <div key={genre.id}>
                                <input
                                    type="checkbox"
                                    id={`genre-${genre.id}`}
                                    checked={selectedGenreIds.includes(genre.id)}
                                    onChange={() => handleGenreChange(genre.id)}
                                    className="mr-2"
                                />
                                <label htmlFor={`genre-${genre.id}`}>{genre.name}</label>
                            </div>
                        ))}
                    </div>
                    </div>
                

                <div
                    className='border-b-4 border-kobicha text-xs p-2 text-center'
                    >
                    <label htmlFor="note">Why are you recommending this book?<br /></label>
                    <textarea
                        id="note"
                        name="note"
                        value={formData.note || ''} // Handle potential undefined value
                        onChange={handleChange}
                        placeholder='I am recommending this book because...'
                        required
                        minLength={3}
                        maxLength={200}
                        className="bg-mossGreen text-black h-full w-full"
                    />
                </div>

                <div
                    className='border-b-4 border-kobicha text-xs p-2 text-center'
                    >
                    <label htmlFor="name">Enter your name:<br /></label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name || ''} // Handle potential undefined value
                        onChange={handleChange}
                        required
                        className="bg-mossGreen text-kobicha h-full w-full"

                    />
                </div>

                <div
                    className="bg-mossGreen justify-center text-center"
                >
                    <CustomButton type="submit">
                        {book?.id ? 'Save Changes' : 'Add Book'}
                    </CustomButton>
                </div>
            </form>
        </div>
    );
}

export default Form;
