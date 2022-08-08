import { useState, useEffect} from 'react'
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import About from './pages/About';
import Project from './pages/Project';
import data from './data.json';

function App() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    setProjects(data);
  }, [])

  function turnOnBackground() {
    document.body.classList.add('color-switch');
  }

  function turnOffBackground() {
    document.body.classList.remove('color-switch');
  }

  return (
    <div className="App">
      <Header turnOffBackground={turnOffBackground}/>
        <Routes>
          <Route exact path="/" element={<Home projects={projects} turnOnBackground={turnOnBackground}/>}/>
          <Route path="/about" element = {<About />}/>
          <Route path="/project/:projectId" element = {<Project projects={projects}/>}/>
        </Routes>
    </div>
  );
}

export default App;
