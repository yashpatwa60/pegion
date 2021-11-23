import Home from './pages/landingPage'
import Login from './pages/login'
import { Route, Switch} from "react-router-dom";

function App() {
  return (
    <div className="App">
        <Switch>
          <Route path="/" exact component={ () => <Home /> } />
          <Route path="/login" exact component={ () => <Login /> } />
        </Switch>
    </div>
  );
}

export default App;
