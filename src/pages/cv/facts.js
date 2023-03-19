import CountUp from 'react-countup';

export default function Facts() {
  return (
    <>
      <section id="facts" className="facts">
        <div className="container">

          <div className="section-title">
            <h2>Facts</h2>
            <p>

            </p>
          </div>

          <div className="row no-gutters">

            <div className="col-lg-3 col-md-6 d-md-flex align-items-md-stretch" data-aos="fade-up">
              <div className="count-box">
                <i className="bi bi-emoji-smile"></i>
                <CountUp end={2} duration={1} enableScrollSpy />
                <p><strong>Expériences professionelles</strong></p>
              </div>
            </div>

            <div className="col-lg-3 col-md-6 d-md-flex align-items-md-stretch" data-aos="fade-up" data-aos-delay="100">
              <div className="count-box">
                <i className="bi bi-journal-richtext"></i>
                <CountUp end={20} duration={1} enableScrollSpy />
                <p><strong>Projects : </strong>professionels et académiques</p>
                <p><a href="#portfolio">TODO : En savoir plus</a></p>
              </div>
            </div>
          </div>

        </div>
      </section>
    </>
  );
}
