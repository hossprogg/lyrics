import React,{Component,Fragment} from 'react';
import {BrowserRouter as  Router,Route,Switch} from 'react-router-dom';
import Nav from './components/layout/Navbar'
import Index from './components/layout/index'

import { Provider } from '../src/context'


//using context api => little project instead of redux 
class  App extends Component {
  render(){
    return (
    <Provider>
      <Router>    
        <Fragment>
          <Nav/>
          <div className="container">
            <Switch>
              <Route exact path = "/" component={Index}/>  
            </Switch>
          </div>
        </Fragment>
      </Router>
      </Provider>
    );
  }
}

export default App;