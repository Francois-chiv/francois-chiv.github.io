import { useState, useEffect } from 'react';
import { Nav } from 'react-bootstrap';
import { HiX, HiMenu, HiOutlineHome, HiOutlineUser, HiOutlineAcademicCap, HiOutlineViewGrid, HiOutlineMail, HiOutlineCheckCircle } from "react-icons/hi";

export default function Sidebar() {
  const [mobileNavActive, setMobileNavActive] = useState(false);
  const [sidebarActive, setSidebarActive] = useState(true);

  useEffect(() => {
    const body = document.querySelector('body');
    if (mobileNavActive) {
      body.classList.add('mobile-nav-active');
    } else {
      body.classList.remove('mobile-nav-active');
    }
  }, [mobileNavActive]);

  function handleClick() {
    setMobileNavActive(!mobileNavActive);
    setSidebarActive(!sidebarActive)
  }

  return (
    <>
      <button className="mobile-nav-toggle" onClick={handleClick}>
        {mobileNavActive ? <HiX /> : <HiMenu />}
      </button>

      {sidebarActive ? <header id="header">
        <div className="d-flex flex-column">

          <div className="profile">
            <img src="img/profile_img.jpg" alt="" className="img-fluid rounded-circle" />
            <h1 className="text-light"><a href="index.html">François CHIV</a></h1>
            <div className="social-links mt-3 text-center">
              <a href="https://www.instagram.com/kya_sama/" className="instagram"><img src="img/icons/instagram.png" alt="" className="img-fluid rounded-circle" /></a>
              <a href="https://www.linkedin.com/in/fran%C3%A7ois-chiv-982737182/" className="linkedin"><img src="img/icons/linkedin.png" alt="" className="img-fluid rounded-circle" />
              </a>
            </div>
          </div>

          <nav id="navbar" className="nav-menu navbar">
            <Nav className="me-auto">
              <ul>
                <Nav.Link href="#hero" className='nav-link'>
                  <HiOutlineHome />
                  <span>Accueil</span>
                </Nav.Link>
                <Nav.Link href="#about" className='nav-link'>
                  <HiOutlineUser />
                  <span>À-propos</span>
                </Nav.Link>
                <Nav.Link href="#resume" className='nav-link'>
                  <HiOutlineAcademicCap />
                  <span>Curriculum Vitæ</span>
                </Nav.Link>
                <Nav.Link href="#portfolio" className='nav-link'>
                  <HiOutlineViewGrid />
                  <span>Portfolio</span>
                </Nav.Link>
                <Nav.Link href="#skills" className='nav-link'>
                  <HiOutlineCheckCircle />
                  <span>Compétences</span>
                </Nav.Link>
                <Nav.Link href="#contact" className='nav-link'>
                  <HiOutlineMail />
                  <span>Contact</span>
                </Nav.Link>
              </ul>
            </Nav>
          </nav>
        </div>
      </header> : ""}
    </>
  );
}