import classes from "./InactiveCards.module.css";
import React from "react";

const RightCard = () =>
{return (
          <div className={classes.background_card} style={{marginLeft: '250px'}}>
            <div className={classes.background_card_title}>
              2 Справочная документация
            </div>
            <div className={classes.background_card_text}>
              UX - процесс определения проблем пользователя и решение этих проблем с целью повышения его удовлетворенности. Улучшение взаимодействия между пользователем и приложением на пути пользователя к цели.
              <br /><span style={{fontWeight: 600, fontSize: '18px'}}>Как добиться:</span>
              <ol>
                <li>Недвусмысленные формулировки</li>
                <li>Ссылки ведут себя как ссылки</li>
                <li>Что-то еще</li>
              </ol>
            </div>
          </div>
);
}

export default RightCard;