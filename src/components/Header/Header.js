import React from 'react';

// Components
import Logo from './Logo/Logo';
import Search from './Search/Search';
import Links from './Links/Links';
import AccountButton from './AccountButton/AccountButton';

// CSS
import classes from './Header.module.css';

// Component
const Header = () => (
    <div className={classes.Header}>
        <Logo/>
        <Search/>
        <Links/>
        <AccountButton/>
    </div>
);

// Export
export default Header;