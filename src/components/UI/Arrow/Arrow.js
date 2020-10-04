import React from 'react';

// CSS
import classes from './Arrow.module.css';

const Arrow = (props) => {
    let attachedClasses = [classes.Arrow];

    switch (props.type) {
        case "wideLeft":
            attachedClasses.push(classes.wideLeft);
            break;
        case "wideRight":
            attachedClasses.push(classes.wideRight);
            break;
        case "narrowLeft":
            attachedClasses.push(classes.narrowLeft);
            break;
        case "narrowRight":
            attachedClasses.push(classes.narrowRight);
            break;
        default:
            break;
    }

    if (props.color === "white") {
        attachedClasses.push(classes.white);
    } else {
        attachedClasses.push(classes.gray);
    }

    return (
        <button className={attachedClasses.join(' ')}>{props.children}</button>
    );

};

export default Arrow;