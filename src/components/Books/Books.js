import React from 'react';

// Components
import Book from './Book/Book';
import Arrow from '../UI/Arrow/Arrow';
import Button from '../UI/Button/Button';

// CSS
import classes from './Books.module.css';

// Component
const Books = () => (
    <div className={classes.Books}>
        <h1>Knjige</h1>
        <div className={classes.list}>
            <Book/>
            <Book/>
            <Book/>
            <Book/>
            <Book/>
        </div>
        <Arrow type="narrowLeft" color="gray"><i className="fas fa-angle-left"></i></Arrow>
        <Arrow type="narrowRight" color="gray"><i className="fas fa-angle-right"></i></Arrow>
        <Button>Vidi sve knjige</Button>
    </div>
);

// Export
export default Books;