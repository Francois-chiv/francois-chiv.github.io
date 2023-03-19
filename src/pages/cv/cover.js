import Typed from 'react-typed/dist/react-typed';

export default function Cover() {
  return (
    <>
      <section id="hero" className="d-flex flex-column justify-content-center align-items-center">
        <div className="hero-container" data-aos="fade-in">
          <h1>François CHIV</h1>
          <p>Je suis <span>
            <Typed
              className="text-light"
              strings={[
                'Développeur',
                'Artiste',
                'Scientifique']}
              typeSpeed={40}
              backSpeed={50}
              loop >
            </Typed>
          </span>
          </p>
        </div>
      </section>
    </>
  );
}
