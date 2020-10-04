import React from 'react';

// IMAGES
import androidImage from '../../../assets/Application/android.png';
import iPhoneImage from '../../../assets/Application/iphone.png';
import apple from '../../../assets/Application/apple.png';
import playstore from '../../../assets/Application/playstore.png';

// CSS
import classes from './Phone.module.css';

// Component
const Phone = (props) => {

    let phoneImage = null;
    let logo = null;
    let button = [classes.button];

    if (props.type === "androidPhone") {
        phoneImage = androidImage;
        logo = playstore;
        button.push(classes.playstoreButton);
    } else {
        phoneImage = iPhoneImage;
        logo = apple;
        button.push(classes.appleButton);
    }

    return (
        <div className={classes.Phone}>
            <img src={phoneImage} alt="Phone Image"/>
            <button type="button" className={button.join(' ')}>
                <img src={logo}/>&nbsp;Aplikacija
            </button>
        </div>
    );

}

// Export
export default Phone;