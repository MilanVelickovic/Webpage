import React from 'react';

// CSS
import classes from './Button.module.css';

// Component
const Button = (props) => (
    <button className={classes.Button}>{props.children}</button>
);

// Export
export default Button;