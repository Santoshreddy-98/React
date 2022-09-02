import React from 'react';
import {BrowserRouter as Router,Route,Switch} from "react-router-dom"
import Navbar from '../Approutes/Navbar';
import Home from './Home';
import Contact from './Contact';
import Services from '../Approutes/Services';
import Todotask from '../Task/Todotask';
import Team from '../Team/Team';
import Message from '../Message/Message';
import User from '../User1/User';
import Form from '../Form/Form'
import {Provider} from 'react-redux'
import {store} from '../Redux2/store.js'
function Approutes() {
  return (
   <React.Fragment>
   <Provider store={store}>
   <Router>
    <Navbar/>
        <Switch>
            <Route path="/home" component={Home}></Route>
            <Route path="/contact" component={Contact}></Route>
            <Route path="/Services" component={Services}></Route>
            <Route path="/Todo" component={Todotask}></Route>
            <Route path="/Team" component={Team}></Route>
            <Route path="/Message" component={Message}></Route>
            <Route path="/User" component={User}></Route>
            <Route path="/Form" component={Form}></Route>

        </Switch>
    </Router>
    </Provider>
    </React.Fragment>
  )
}

export default Approutes