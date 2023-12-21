import './App.css';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import NavBar from './components/NavBar';
import About from './containers/About';
//import Projects from './containers/Projects';
import Resume from './containers/Resume';
import Contact from './containers/Contact';
import Projects from './containers/Projects';

function App() {
  return (
    <Router>
      <NavBar/>
      <Routes>
        <Route path='/' Component={About}/>
        <Route path='/projects' Component={() => {
          window.location.href = "https://github.com/mmaguilar";
          return null;
        }}/>
        <Route path='/resume' Component={Resume}/>
        <Route path='/contact' Component={Contact}/>
      </Routes>
    </Router>
  )
}

export default App;
