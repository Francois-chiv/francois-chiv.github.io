import { useState, useEffect } from 'react';
import {HiOutlineHome, HiOutlineUser, HiOutlineAcademicCap, HiOutlineViewGrid, HiOutlineMail, HiOutlineCheckCircle} from "react-icons/hi";

export default function Layout() {
  const [mobileNavActive, setMobileNavActive] = useState(false);
  const [iconClass, setIconClass] = useState('bi-list');

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
    setIconClass(mobileNavActive ? 'bi-list' : 'bi-x');
  }

  return (
    <>
      <button className={`mobile-nav-toggle ${iconClass}`} onClick={handleClick}>
      </button>

      <header id="header">
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
            <ul>
              <ScrollToLink href="#hero" callBack={handleClick}>
                <HiOutlineHome />
                <span>Accueil</span>
              </ScrollToLink>
              <ScrollToLink href="#about" callBack={handleClick}>
                <HiOutlineUser />
                <span>À-propos</span>
              </ScrollToLink>
              <ScrollToLink href="#resume" callBack={handleClick}>
                <HiOutlineAcademicCap />
                <span>Curriculum Vitæ</span>
              </ScrollToLink>
              <ScrollToLink href="#portfolio" callBack={handleClick}>
                <HiOutlineViewGrid />
                <span>Portfolio</span>
              </ScrollToLink>
              <ScrollToLink href="#skills" callBack={handleClick}>
                <HiOutlineCheckCircle />
                <span>Compétences</span>
              </ScrollToLink>
              <ScrollToLink href="#contact" callBack={handleClick}>
                <HiOutlineMail />
                <span>Contact</span>
              </ScrollToLink>
            </ul>
          </nav>
        </div>
      </header>
    </>
  );
}

function ScrollToLink({ href, children, callBack }) {

  function handleClick(e) {
    e.preventDefault();

    const target = document.querySelector(href);
    if (target) {
      let body = document.querySelector('body');
      if (body.classList.contains('mobile-nav-active')) {
        body.classList.remove('mobile-nav-active');
        let navbarToggle = document.querySelector('.mobile-nav-toggle');
        navbarToggle.classList.toggle('bi-list');
        navbarToggle.classList.toggle('bi-x');
        callBack();
      }
      target.scrollIntoView({ behavior: 'smooth' });
      const links = document.querySelectorAll('.nav-link');
      links.forEach(link => {
        link.classList.remove('active');
        link.children[0].style.color = "#a8a9b4";
    });
      e.currentTarget.classList.add('active');
      e.currentTarget.children[0].style.color = "#149ddd";
    }
  }

  return (
    <li>
      <a href={href} className="nav-link scrollto" onClick={handleClick}>
        {children}
      </a>
    </li>
  );
}