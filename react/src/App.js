import Sidebar from "./components/sidebar";
import Cover from "./components/cover";
import About from "./components/about";
import Facts from "./components/facts";
import Resume from "./components/resume";
import Portfolio from "./components/portfolio";
import Skills from "./components/skills";
import Footer from "./components/footer";
import "./index.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import Aos from "aos";
import 'aos/dist/aos.css';
import { useEffect } from "react";

function App() {
  useEffect(() => {
    Aos.init();
  }, [])

  return (
    <>
    <div className = "d-flex">
          <div className="sidebar">
        <Sidebar />
      </div>
      <div className="main-content" >
        <Cover />
        <About />
        <Facts />
        <Resume />
        <Portfolio />
        <Skills />
        
      </div>
    </div>

    </>

  );
}

export default App;
