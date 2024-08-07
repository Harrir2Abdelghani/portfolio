import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavBar } from "./components/NavBar";
import { Banner } from "./components/Banner";
import { Skills } from "./components/Skills";
import { Projects } from "./components/Projects";
import Contact from "./components/Contact/Contact";
import { Footer } from "./components/Footer";
import { Qualities } from './components/Qualities';
import { Exp } from './components/Exp'



function App() {
  return (
    <div className="App">
      <NavBar />
      <Banner />
      <Skills />
      <Qualities />
      <Projects />
      <Exp />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
