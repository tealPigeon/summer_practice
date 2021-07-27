import React,{Fragment} from 'react';
import classes from "./Section.module.css"

const Section = () =>
{
  return (
    <Fragment>
          <div className={classes.line}/>
          <div className={classes.title}>Принципы UX</div>
          <p id="main-text" className={classes.text}>UX - процесс определения проблем пользователя и решение этих проблем с целью повышения его удовлетворенности. Улучшение взаимодействия между пользователем и приложением на пути пользователя к цели. <br /><br />Ниже описаны принципы, придерживаясь которых, вы сможете спроектировать наилучший пользовательский опыт!
          </p>
    </Fragment>
  )
}

export default Section;