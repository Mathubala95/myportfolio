import logo from './logo.svg';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './style.css';
import Navbar from './Navbar';
import Home from './Home';
import About from './About';
import Skill from './Skill';
import Project from './Project';
import Blog from './Blog';
import Contact from './Contact';

function App() {
  return (
    <div className="App">
     <Navbar/>
     <Home/>
     <About/>
     <Skill/>
     <Project/>
     {/* <Blog/> */}
     <Contact/>
    </div>
  );
}

export default App;
