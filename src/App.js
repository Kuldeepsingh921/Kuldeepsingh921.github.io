import logo from './logo.svg';
import './App.css';
import Homepage from './Homepage';
import { Projects } from './project';
import ChakraNavbar from './chakraNavbar';
import Contact from './Components/Contact';

function App() {
  return (
    <div className="App">
      <ChakraNavbar />
      <Homepage />
      <Projects />
      <Contact/>
    </div>
  );
}

export default App;
