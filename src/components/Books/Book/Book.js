import React from 'react';

// IMAGE
import BookImage from '../../../assets/Books/book.jpg';

// CSS
import classes from './Book.module.css';

// Component
const Book = () => (
    <div className={classes.Book}>
        <img src={BookImage} alt="Book"/>
    </div>
);

// Export
export default Book;