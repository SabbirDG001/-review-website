import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from './Components/Home/Home';
import Courses from './Components/Courses/Courses';
import Teachers from './Components/Teachers/Teachers';
import About from './Components/About Us/About';
import Header from './Components/Header/Header';
import Notfound from './Components/Not Found/Notfound';
import Footer from './Components/Footer/Footer';

function App() {
  return (
    <div className="App">
      {/* routing */}
      <Router>
        {/* header */}
        <Header></Header>
        <Switch>
          {/* home */}
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/home">
            <Home></Home>
          </Route>
          {/* courses */}
          <Route path="/courses">
            <Courses></Courses>
          </Route>
          {/* teachers */}
          <Route path="/teachers">
            <Teachers></Teachers>
          </Route>
          {/* about page */}
          <Route path="/about">
            <About></About>
          </Route>
          {/* not found page */}
          <Route path="/*">
            <Notfound></Notfound>
          </Route>
        </Switch>
        {/* footer */}
        <Footer></Footer>
      </Router>
    </div>
  );
}

export default App;
