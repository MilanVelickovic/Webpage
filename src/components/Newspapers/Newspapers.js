import React from 'react';

// Components
import Newspaper from './Newspaper/Newspaper';
import Arrow from '../UI/Arrow/Arrow';
import Button from '../UI/Button/Button';

// CSS
import classes from './Newspapers.module.css';

// Component
const Newspapers = () => (
    <div className={classes.Newspapers}>
        <h1>Dnevne novine</h1>
        <div className={classes.list}>
            <Newspaper/>
            <Newspaper/>
            <Newspaper/>
            <Newspaper/>
            <Newspaper/>
        </div>
        <Arrow type="narrowLeft" color="gray"><i className="fas fa-angle-left"></i></Arrow>
        <Arrow type="narrowRight" color="gray"><i className="fas fa-angle-right"></i></Arrow>
        <Button>Vidi sve novine</Button>
        <hr width="96%"/>
    </div>
);

// Export
export default Newspapers;