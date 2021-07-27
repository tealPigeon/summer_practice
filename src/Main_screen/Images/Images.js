import React,{Fragment} from 'react';
import classes from "./Images.module.css"
import dots from "./dots.svg";
import line1 from "./line1.svg";
import line2 from "./line2.svg"
import line3 from "./line3.svg"
import line4 from "./line4.svg"

const Images = () => 
{
  return (   
    <Fragment>
      <img src={dots} className={classes.dots} />
      <img src={line1} className={classes.line1} />
      <img src={line2} className={classes.line2} />
      <img src={line3} className={classes.line3} />
      <img src={line4} className={classes.line4} />
    </Fragment>     
  );
}
export default Images;