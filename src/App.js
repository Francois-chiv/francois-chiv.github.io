import Sidebar from "./pages/sidebar";
import Cover from "./pages/cover";
import About from "./pages/about";
import Facts from "./pages/facts";
import Resume from "./pages/resume";
import Portfolio from "./pages/portfolio";
import Skills from "./pages/skills";
// import Footer from "./pages/cv/footer";
import RobotTurtle from "./pages/projets/RobotTurtle";
import HomeChef from "./pages/projets/HomeChef"
import Jarvis from "./pages/projets/Jarvis";
import Blog from "./pages/blog/blog";
import AdminDashboard from "./pages/admin/adminDashboard";
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
            <Route path="/RobotTurtle" element={<RobotTurtle />} />
            <Route path="/Jarvis" element={<Jarvis />} />
            <Route path="/HomeChef" element={<HomeChef />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/admin" element={<AdminDashboard />} />
          </Routes>
      </BrowserRouter>
    </>

  );
}

export default App;
