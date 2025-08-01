import './App.css'
import About from "./components/About.jsx";
import Contacts from "./components/Contacts.jsx";
import Exp from "./components/Exp.jsx";
import Hello from "./components/Hello.jsx";
import Nav from "./components/Nav.jsx";
import Projects from "./components/Projects.jsx";

function App() {

  return (
    <>
      <Nav/>
      <Hello/>
      <About/>
      <Exp/>
      <Projects/>
      <Contacts/>
    </>
  )
}

export default App
