import React from 'react';
import Navbar from "./Navbar/Navbar";
import classes from "./Header.module.css"

const Header = () =>
{
  return (
    <div className={classes.header__wrapper}>
        <div className={classes.logo} id="logo"><a style={{color: '#00D29D', marginRight: '10px',  cursor: 'pointer'}}>UDV</a> Дизайн-система</div>  
        <Navbar />
    </div>
  );
}

export default Header;