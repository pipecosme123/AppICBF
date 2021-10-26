import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { RoutersLinks } from '../Constants/RoutersLinks';
import Antecedentes from '../Pages/Antecedentes';

const RouterDom = () => {
   return (
      <Router>
         <Switch>
            <Route exact path={RoutersLinks.antecedentes} component={() => <Antecedentes /> }/>
         </Switch>
      </Router>
   );
};

export default RouterDom;