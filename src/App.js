import React, { Component } from 'react';
import Main_screen from './Main_screen/Main_screen';
import UX_Principles from './UX_Principles/UX_Principles';

import  {Route, BrowserRouter} from "react-router-dom";
import Components from './Components/Components';

const App = () =>{
    return (
        <BrowserRouter>
                <Route path="/" exact component={Main_screen}  />
                <Route path="/summer_practice" exact component={Main_screen}  />
                <Route path="/ux_principles" component={UX_Principles}  />
                <Route path="/components" component={Components}  />
        </BrowserRouter>

    );
}

export default App;