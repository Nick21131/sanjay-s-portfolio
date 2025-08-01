import './App.css'
import About from "./components/about.jsx";
import Contacts from "./components/contacts.jsx";
import Exp from "./components/exp.jsx";
import Hello from "./components/Hello.jsx";
import Nav from "./components/nav.jsx";
import Projects from "./components/projects.jsx";

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
