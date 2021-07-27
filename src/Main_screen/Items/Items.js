import React,{Fragment} from 'react';
import classes from "./Items.module.css"

const Items = () =>
{
  return (
    <Fragment>
      <div className={classes.item}>
          <div className={classes.num} style={{left: '1340px', top: '293px', color: '#6B6B6B'}}>01</div>
          <div className={classes.text_num} style={{left: '1412px', top: '305px'}}>Ускорение <br />разработки продукта</div>
          <div className={classes.item__text} style={{left: '1453px', top: '356px'}}>Все компоненты готовы, разработчик не тратит время <br />на его создание. Каждый компонент легко изменять<br /> и переиспользовать.</div>
        </div>
        <div className={classes.item}>
          <div className={classes.num} style={{left: '1219px', top: '441px', color: '#7D7D7D'}}>02</div>
          <div className={classes.text_num} style={{left: '1221px', top: '501px'}}>Продуманный<br />пользовательский<br /> опыт</div>
          <div className={classes.item__text} style={{left: '1351px', top: '452px'}}>Наши продукты консистентны - спроектированы в одном стиле,<br /> с использованием одниковых паттернов. Это делает продукт <br />удобным и интуитивно понятным. А еще все знают, что это - UDV!</div>
        </div>
        <div className={classes.item}>
          <div className={classes.num} style={{left: '1494px', top: '557px', color: '#5A5A5A'}}>03</div>
          <div className={classes.text_num} style={{left: '1508px', top: '591px'}}>   Вся информация<br />в быстром доступе</div>
          <div className={classes.item__text} style={{left: '1362px', top: '640px'}}>Если возникает потребность спроектировать часть интерфейса<br /> без дизайнера - сделать это становится значительно проще.</div>
        </div>
        <div className={classes.item}>
          <div className={classes.num} style={{left: '1232px', top: '668px', color: '#7B7B7B'}}>04</div>
          <div className={classes.text_num} style={{left: '1128px', top: '740px'}}>Ускорение обучения и повыешения <br />общей компетентности</div>
          <div className={classes.item__text} style={{left: '1342px', top: '767px'}}>Ускоряется обучение новых сотрудников и введение в курс дела<br /> подрядчиков. Повышается общая компетентность команды<br /> разработки - среди нас появляются новые T-shaped специалисты.</div>
        </div>
    </Fragment>
        
  );
}

export default Items;