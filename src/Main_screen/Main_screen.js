import classes from "./Main_screen.module.css"
import React,{Fragment} from 'react';
import Header from './Header/Header';
import Footer from './Footer/Footer';
import Images from './Images/Images';
import Items from './Items/Items';
import Section from './Section/Section';

const Main_screen = () =>{
    document.body.style.backgroundColor = "#302E2E";
  return (
    <Fragment>
        <div className={classes.wrapper}>      
          <Images />
          <Items /> 
          <Header />
          <Section />
          <Footer />
      </div>
    </Fragment>
  );
}

document.body.style.backgroundColor = "#302E2E";

export default Main_screen;
