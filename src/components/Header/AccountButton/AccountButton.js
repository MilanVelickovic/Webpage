import React from 'react';

// CSS
import classes from './AccountButton.module.css';

// Component
const AccountButton = () => (
    <div className={classes.AccountButtonBackground}>    
        <button className={classes.AccountButton}>Tvoj nalog&nbsp;<i className="fas fa-user"></i></button>
    </div>
);

// Export
export default AccountButton;