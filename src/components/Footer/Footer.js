import React from "react";

// Components
import Menu from "./Menu/Menu";

// IMAGES
import Logo from "../Header/Logo/Logo";
import paypal from "../../assets/Footer/paypal.png";
import mastercard from "../../assets/Footer/mastercard.png";
import visa from "../../assets/Footer/visa.png";

// CSS
import classes from "./Footer.module.css";

// Component
const Footer = () => (
  <div className={classes.Footer}>
    <div className={classes.topPart}>
      <div className={classes.menus}>
        <Menu>
          <p>Kontakt</p>
          <ul>
            <li>office@novinarnica.net</li>
            <li>+381 11 26 97 573</li>
            <li>Branka Pešića 53</li>
            <li>11080 Zemun, Beograd</li>
          </ul>
        </Menu>
        <Menu>
          <p>Mapa sajta</p>
          <ul>
            <li>O nama</li>
            <li>Pregled izdavača</li>
            <li>Način plaćanja</li>
            <li>Pravilnik</li>
            <li>Pomoć</li>
          </ul>
        </Menu>
        <Menu>
          <p>Mapa sajta</p>
          <ul>
            <li>O nama</li>
            <li>Pregled izdavača</li>
            <li>Način plaćanja</li>
            <li>Pravilnik</li>
            <li>Pomoć</li>
          </ul>
        </Menu>
      </div>
      <div className={classes.creditCards}>
        <Logo />
        <div className={classes.cards}>
          <img src={paypal} alt="Paypal" />
          <img src={mastercard} alt="Mastercard" />
          <img src={visa} alt="Visa" />
        </div>
      </div>
    </div>
    <div className={classes.bottomPart}>
      <p>Novine online &copy; All rights reserved.</p>
    </div>
  </div>
);

// Export
export default Footer;
