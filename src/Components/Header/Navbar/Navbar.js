import React from 'react';
import classes from "./Navbar.module.css"
import components from "./components.svg"
import {NavLink} from "react-router-dom";
import templates from "./templates.svg"

const Navbar = () =>
{
  return (
    <nav className={classes.menu}>
              <ul>
                <li className={classes.menu__item}>
                  
                  <NavLink to="components" style={{color: '#00B98A',  cursor: 'pointer'}}  id="components" >Компоненты <span style={{color:"#00B98A", fontSize: "10px"}}>&#9660;</span></NavLink>
                  <div className={classes.sub__menu}>
                    <ul>
                      <li className={classes.sub__menu__item}>
                      <img src={components} style={{marginLeft:'5px'}}  />
                        <NavLink to="/react_components" style={{fontWeight: 400, color: '#302E2E', fontSize: '16px'}}>Компоненты на React</NavLink>
                      </li>
                      <li className={classes.sub__menu__item} >
                      <img src={templates} style={{marginLeft:'10px', marginRight:'7px'}} />
                        <NavLink to="/templates_in_figma" style={{fontWeight: 400, color: '#302E2E', fontSize: '16px'}}>Шаблоны в Figma</NavLink>
                      </li>
                    </ul>
                  </div>  
                </li>
                <li className={classes.menu__item}>
                  <NavLink to="/patterns" className={classes.menu__item_ref} id="patterns">Паттерны</NavLink>
                </li>
                <li className={classes.menu__item}>
                  <NavLink to="/ux_principles" className={classes.menu__item_ref}  id="principles">Принципы UX</NavLink>
                </li>
                <li className={classes.menu__item}>
                  <NavLink to="/researches" className={classes.menu__item_ref}  id="researches" >Исследования</NavLink>
                </li>
                <li className={classes.menu__item}>
                  <NavLink to="/articles" className={classes.menu__item_ref}  id="articles" href="">Статьи</NavLink>
                </li>
              </ul>
            </nav>
  );
}

export default Navbar;