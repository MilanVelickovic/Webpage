import React from 'react';

// CSS
import classes from './Links.module.css';

// Component
const Links = () => (
    <ul className={classes.Links}>
        <li className={classes.Link}>Novine</li>
        <li className={classes.Link}>Knjige</li>
    </ul>
);

// Export
export default Links;