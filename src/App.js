import Sidebar from "./pages/cv/sidebar";
import Cover from "./pages/cv/cover";
import About from "./pages/cv/about";
import Facts from "./pages/cv/facts";
import Resume from "./pages/cv/resume";
import Portfolio from "./pages/cv/portfolio";
import Skills from "./pages/cv/skills";
// import Footer from "./pages/cv/footer";
import Projet1 from "./pages/projets/projet1";
import Blog from "./pages/blog/blog";
import "./index.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import Aos from "aos";
import 'aos/dist/aos.css';
import { useEffect } from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";

function App() {

  useEffect(() => {
    const hash = window.location.hash;
    if (hash && performance.navigation.type !== 1) {
      const targetElement = document.querySelector(hash);
      if (targetElement) {
        const y = targetElement.getBoundingClientRect().top + window.pageYOffset;
        console.log(y);
        window.scrollTo({top: y, behavior: 'instant'});      }
    }
     Aos.init();
  }, []);

  return (
    <>
      <BrowserRouter>
          <Routes>
            <Route path="/" element={ 
              <div className="d-flex">
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
            } />
            <Route path="/projet1" element={<Projet1 />} />
            <Route path="/blog" element={<Blog />} />
          </Routes>
      </BrowserRouter>
    </>

  );
}

export default App;
