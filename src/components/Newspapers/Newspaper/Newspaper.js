import React from 'react';

// IMAGE
import NewspaperImage from '../../../assets/Newspapers/newspaper.jpeg';

// CSS
import classes from './Newspaper.module.css';

// Component
const Newspaper = () => (
    <div className={classes.Newspaper}>
        <img src={NewspaperImage} alt="Newspaper"/>
    </div>
);

// Export
export default Newspaper;