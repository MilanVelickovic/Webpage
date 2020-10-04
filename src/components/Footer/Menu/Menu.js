import React from 'react';

// CSS
import classes from './Menu.module.css';

// Component
const Menu = (props) => (
    <div className={classes.Menu}>{props.children}</div>
);

// Export
export default Menu;