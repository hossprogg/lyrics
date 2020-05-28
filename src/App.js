import React,{Component,Fragment} from 'react';
import {BrowserRouter as  Router,Route,Switch} from 'react-router-dom';
import Nav from './components/layout/Navbar'
import Index from './components/layout/index'

//using context api => little project instead of redux 
class  App extends Component {
  render(){
    return (
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
    );
  }
}

export default App;
