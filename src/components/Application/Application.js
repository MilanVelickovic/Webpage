import React from 'react';

// Components
import Phone from './Phone/Phone';
import Button from './Button/Button';

// CSS
import classes from './Application.module.css';

// Component
const Application = () => (
    <div className={classes.Application}>
        <div className={classes.backgroundImage}>
            <Phone type="iPhone"/>
            <Phone type="androidPhone"/>
        </div>
        <div className={classes.buttons}>
            <Button type="credit">Dopuni kredit</Button>
            <Button type="vaucher">Promo vaučer</Button>
        </div>
    </div>
);

// Export
export default Application;