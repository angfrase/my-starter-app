
import './App.css';
import {Route,Switch} from 'react-router-dom'
import Welcome from './Components/welcome/welcome'
import Clock from './Components/clock/clock'
import Contact from './Components/contact/contact'
import Navigation from './Components/navigation/Navigation';
// import NotFound from './Components/notfound/NotFound';
import Jeopardy from './Components/jeopardy/Jeopardy';

function App() {
  return (
    <div className="App">
      <Navigation/>
      <Switch>
      <Route 
       exact 
       path="/" 
       render={(props) => <Welcome {...props} name=" " />}
        />
      <Route path="/clock" component={Clock}/>
      <Route path ="/contact"component={Contact}/>
      <Route path ="/welcome/:name"component={Welcome}/>
      {/* <Route component={NotFound} /> */}
      <Route path="/jeopardy" component={Jeopardy}/>


      </Switch>
    
    </div>
  );
}

export default App;
