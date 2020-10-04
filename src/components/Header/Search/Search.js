import React from 'react';

// CSS
import classes from './Search.module.css';

// Component
const Search = () => (
    <div className={classes.Search}>
        <input type="text" placeholder="Pretraži"/>
        <button type="button"><i className="fas fa-search"></i></button>
    </div>
);

// Export
export default Search;