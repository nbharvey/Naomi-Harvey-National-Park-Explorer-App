import React from 'react';
import type { BookData } from '../../types';

interface UserDataProps {
    data: BookData;
}

const UserData: React.FC<UserDataProps> = ({ data }) => {

    return (
        <div
            // className={styles.bookContent}
        >
            <ul
                // className={styles.ulBookStyle}
            >
                <li><h2 id="user-book-header">{data.title}</h2></li>
                <li><p id='author'>Author: {data.author}</p></li>
                {/* Only render the note if it exists */}
                {data.note && <li><p id='note'>My note: {data.note}</p></li>}
                {/* Only render the recommender's name if it exists */}
                {data.name && <li><p id='rec'>This recommendation is from {data.name}.</p></li>}
            </ul>
        </div>
    );
}

export default UserData;
