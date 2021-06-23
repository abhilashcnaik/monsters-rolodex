import React from 'react';

import './search-box.styles.css';

export const Searchbox = ({placeholder, handleChange}) => {
    return (
        <input className='search' placeholder={placeholder} onChange={handleChange} />
    )
    
}