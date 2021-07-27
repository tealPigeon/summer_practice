import React from 'react';
import classes from "./Navbar.module.css"
import Polygon from "./Polygon.svg"
import {NavLink} from "react-router-dom";

const Navbar = () =>
{
  return (
    <nav className={classes.menu}>
              <ul>
                <li className={classes.menu__item}>
                  <NavLink to="components" className={classes.menu__item_ref}  id="components" >Компоненты</NavLink>
                  <img style={{width: '7px', height: '7px'}} src={Polygon} />
                  <div className={classes.sub__menu}>
                    <ul>
                      <li className={classes.sub__menu__item} style={{listStyleImage: 'url(components.svg)'}}>
                        <NavLink to="/react_components" style={{fontWeight: 400, color: '#302E2E', fontSize: '16px'}}>Компоненты на React</NavLink>
                      </li>
                      <li className={classes.sub__menu__item} style={{listStyleImage: 'url(templates.svg)'}}>
                        <NavLink to="/templates_in_figma" style={{fontWeight: 400, color: '#302E2E', fontSize: '16px'}}>Шаблоны в Figma</NavLink>
                      </li>
                    </ul>
                  </div>  
                </li>
                <li className={classes.menu__item}>
                  <NavLink to="/patterns" className={classes.menu__item_ref} id="patterns">Паттерны</NavLink>
                </li>
                <li className={classes.menu__item}>
                  <NavLink to="/ux_principles" style={{color: '#00B98A',  cursor: 'pointer'}} id="principles">Принципы UX</NavLink>
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