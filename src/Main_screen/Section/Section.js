import React,{Fragment} from 'react';
import classes from "./Section.module.css"

const Section = () =>
{
  return (
    <Fragment>
          <div className={classes.line} />
          <div className={classes.title}>Дизайн-система</div>
          <p className={classes.text}>Эффективный инструмент для разработки и развития цифровых продуктов. Она содержит в себе библиотеку компонентов, информацию об используемых паттернах, проводимых исследованиях и т.д. </p>
          <div className={classes.main_screen_title}>
            <span style={{color: '#00D29D'}}>Что /</span><br />
            <span style={{color: '#EFEFEF'}}>зачем /</span><br />
            как<br />
            это ?
          </div>
    </Fragment>
  )
}

export default Section;