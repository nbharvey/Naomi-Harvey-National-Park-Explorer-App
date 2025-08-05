import React from 'react';
import type { BookData } from '../../types';

interface UserDataProps {
    data: BookData;
}

const UserData: React.FC<UserDataProps> = ({ data }) => {

    return (
        <div>
            <ul>
                <li><h2 id="user-book-header" className="font-heading">{data.title}</h2></li>
                <li><p className="p-2" id='author'>Author: {data.author}</p></li>
                <li><p className="p-2" id='genre'>Genre: {data.genres.map(genre => genre.name).join(', ')}</p></li>
                {/* Only render the note if it exists */}
                {data.note && <li><p className="p-2" id='note'>My note: {data.note}</p></li>}
                {/* Only render the recommender's name if it exists */}
                {data.name && <li><p className="p-2" id='rec'>This recommendation is from {data.name}.</p></li>}
            </ul>
        </div>
    );
}

export default UserData;
