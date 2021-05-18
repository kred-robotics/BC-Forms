import './App.css';
import { 
  HashRouter as Router,
  Route,
  Switch
 } from "react-router-dom";
import { useSelector } from "react-redux";
import HomePage from './Forms/HomePage';
import DetailPage from "./Forms/DetailPage";
import NotFound from "./Components/404File";

function App() {

  const isLogin  = useSelector(state => state.isLogin)

  return (
    <Router basename="/">
      <Switch>
        {!isLogin && <Route path='/' exact component={HomePage} />}
        {isLogin && <Route path='/:userID' component={DetailPage} />}
        <Route path='*' component = {NotFound}/>
      </Switch>
    </Router>  
  );
}

export default App;
