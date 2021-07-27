import React, {Fragment} from 'react';
import classes from "./ActiveCardListContent.module.css"

const ActiveCardListContent = (props) =>
{
  return (
      <Fragment>

        <div className={classes.active_card_list_title}>Как добиться:</div>
        <ol>
          <li>Недвусмысленные формулировки</li>
          <li>Ссылки ведут себя как ссылки</li>
          <li>Что-то еще </li>
        </ol>
      </Fragment>
  );
}

export default ActiveCardListContent;