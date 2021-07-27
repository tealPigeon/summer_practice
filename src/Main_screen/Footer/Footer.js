import React from 'react';
import classes from "./Footer.module.css"

const Footer = () =>
{
  return (
          <div className={classes.footer}>
            <div className={classes.text} style={{float: 'left'}}>По любым вопросам о проектировании интерфейса можно связаться с командой дизайн-системы:</div>
            <div className={classes.text} style={{float: 'left', marginLeft: '67px'}}><span style={{color: '#00D29D'}}>Юля Минуллина</span> / продуктовый дизайнер</div>
          </div>
  );
}

export default Footer;