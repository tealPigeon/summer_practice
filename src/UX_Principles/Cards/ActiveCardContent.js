import React from 'react';
import classes from "./ActiveCardContent.module.css"
import image from "./image_for_card.svg";
import ActiveCardListContent from './ActiveCardListContent';

const ActiveCardContent = (props) =>
{
  return (
    <div className={classes.active_card}>
    <div id="title" className={classes.active_card_title}>
      {props.card_title}
    </div>
    <div id="text" className={classes.active_card_text}>
      {props.card_text}
      <ActiveCardListContent />
      <img className={classes.image_for_active_card} src={image} />

    </div>
  </div>
  );
}

export default ActiveCardContent;