
import Header from './Components/Header/Header';
import Home from './Pages/Home';
import About from './Pages/About';
import Tyres from './Pages/Tyres';
import Services from './Pages/Services';
import BookOnline from './Pages/BookOnline';
import Footer from './Components/Footer/Footer';


import './index.css';
import {
    BrowserRouter as Router,
    Switch,
    Route,
  } from "react-router-dom";
//import Container from 'react-bootstrap/Container';

function App() {
  return (
  <> 
    <Router>
      <Header/>
      <div>
          <Switch>
            <Route path="/" component={Home} exact/>      
            <Route path="/about" component={About}/>          
            <Route path="/tyres" component={Tyres}/>
            <Route path="/service" component={Services}/>
            <Route path="/bookonline" component={BookOnline}/>                                
        </Switch>
      </div>
    </Router>



    
    <Footer />
  </>
  );
}

export default App;
