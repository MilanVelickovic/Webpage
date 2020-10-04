import React from 'react';

// IMAGES
import coins from '../../../assets/Application/coins.png';
import vaucher from '../../../assets/Application/vaucher.png';

// CSS
import classes from './Button.module.css';

// Component
const Button = (props) => {

    let attachedClasses = [classes.Button];
    let icon = null;

    if (props.type === "credit") {
        attachedClasses.push(classes.credit);
        icon = coins;
    } else {
        attachedClasses.push(classes.vaucher);
        icon = vaucher;
    }

    return (
        <button type="button" className={attachedClasses.join(' ')}><img src={icon}/>&nbsp;&nbsp;{props.children}</button>
    );
}

// Export
export default Button;