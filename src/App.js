
import './App.css';
import {Route,Switch} from 'react-router-dom'
import Welcome from './Components/welcome/welcome'
import Clock from './Components/clock/clock'
import Contact from './Components/contact/contact'
import Navigation from './Components/navigation/Navigation';
import NotFound from './Components/notfound/NotFound';
import Jeopardy from './Components/jeopardy/Jeopardy';

function App() {
  return (
    <div className="App">
      <Jeopardy/>
      <Navigation/>
      <Switch>
      <Route 
       exact 
       path="/" 
       render={(props) => <Welcome {...props} name="Davey" />}
        />
      <Route path="/clock" component={Clock}/>
      <Route path ="/contact"component={Contact}/>
      <Route path ="/welcome/:name"component={Welcome}/>
      <Route component={NotFound} />


      </Switch>
    
    </div>
  );
}

export default App;
