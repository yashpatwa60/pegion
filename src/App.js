import Home from './pages/landingPage'
import Login from './pages/login'
import { Route, Routes} from "react-router-dom";

function App() {
  return (
    <div className="App">
        <Routes>
          <Route path="/" exact element={ <Home/> } />
          <Route path="/login" exact element={ <Login/> } />
        </Routes>
    </div>
  );
}

export default App;
