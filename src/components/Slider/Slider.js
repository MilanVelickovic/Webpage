import React from 'react';

// Components
import Arrow from '../UI/Arrow/Arrow';

// IMAGE
import wallpaper from '../../assets/Slider/original.jpg';

// CSS
import classes from './Slider.module.css';

// Component
const Slider = () => (
    <div className={classes.Slider}>
        <img src={wallpaper} alt="Wallpaper"/>
        <Arrow type="wideLeft" color="white"><i className="fas fa-angle-left"></i></Arrow>
        <Arrow type="wideRight" color="white"><i className="fas fa-angle-right"></i></Arrow>
        <div className={classes.dots}>
            <i class="fas fa-circle"></i>
            <i class="fas fa-circle"></i>
            <i class="fas fa-circle"></i>
            <i class="fas fa-circle"></i>
        </div>
    </div>
);

// Export
export default Slider;