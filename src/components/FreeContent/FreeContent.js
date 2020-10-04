import React from 'react';

// Components
import Item from './Item/Item';

// CSS
import classes from './FreeContent.module.css';

// Component
const FreeContent = () => (
    <div className={classes.FreeContent}>
        <div className={classes.items}>
            <Item>Besplatne novine</Item>
            <Item>Besplatne knjige</Item>
            <Item>Besplatni primerci</Item>
        </div>
    </div>
);

// Export
export default FreeContent;