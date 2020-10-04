import React from 'react';

// CSS
import classes from './Item.module.css';

// Component
const Item = (props) => (
    <div className={classes.Item}>
        <p>{props.children}</p>
    </div>
);

// Export
export default Item;