import React from 'react';
import Navbar from "./Navbar/Navbar";
import classes from "./Header.module.css"
import {NavLink} from "react-router-dom";

const Header = () =>
{
  return (
    <div className={classes.header__wrapper}>
        <div id="logo"><NavLink to="./" className={classes.logo} >UDV</NavLink> Дизайн-система</div>
        <Navbar />
    </div>
  );
}

export default Header;