import Home from './pages/landingPage'
import Login from './pages/login'
import { BrowserRouter as Router, Route, Routes} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router basename={process.env.PUBLIC_URL}>
        <Routes>
          <Route path="/" exact element={ <Home/> } />
          <Route path="/login" exact element={ <Login/> } />
        </Routes>
      </Router> 
    </div>
  );
}

export default App;
