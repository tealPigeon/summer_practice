import React,{Fragment} from 'react';
import Main_screen from './Main_screen/Main_screen';
import UX_Principles from './UX_Principles/UX_Principles';

import  {Route, BrowserRouter} from "react-router-dom";

const App = () =>{
    return (
        <BrowserRouter>
            <Fragment>
                <Route path="/" exact component={Main_screen}  />
                <Route path="/ux_principles" component={UX_Principles}  />
            </Fragment>
        </BrowserRouter>

    );
}

export default App;