import './App.css';
import { 
  HashRouter as Router,
  Route,
  Switch
 } from "react-router-dom";
import HomePage from './Forms/HomePage';
import DetailPage from "./Forms/DetailPage";

function App() {
  return (
    <Router basename="/">
      <Switch>
        <Route path='/' exact component={HomePage} />
        <Route path='/:userID' component={DetailPage} />
      </Switch>
    </Router>  
  );
}

export default App;
