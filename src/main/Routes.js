import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Todo from '../todo/Todo'
import About from '../about/About'


export default props => (

<Router>
<Switch>
  <Route path='/todo' exact={true} component={Todo}/>
  <Route path='/about' exact={true} component={About}/>
</Switch>
</Router>



)
