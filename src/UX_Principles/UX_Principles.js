import classes from './UX_Principles.module.css';
import React,{Fragment} from 'react';
import Header from './Header/Header';
import Cards from "./Cards/Cards";
import Section from './Section/Section';

const UX_Principles = () =>{
    document.body.style.backgroundColor = "#ffffff";
  return (
    <Fragment>
        <div className={classes.wrapper}>
        <Header />
        <Section />
        </div>
        <Cards />
    </Fragment>
  );
}



export default UX_Principles;
