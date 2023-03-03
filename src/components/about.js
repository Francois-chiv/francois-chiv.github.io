import { useEffect, useState } from "react";
export default function Cover() {
  const [age, setAge] = useState('');
  const birthday = "7 Octobre 1999"

  useEffect(() => {
    const dob = new Date(Date.parse(birthday, 'dd MMMM yyyy'));
    const dateNow = new Date();
    let ageDt = dateNow.getFullYear() - dob.getFullYear();

    const monthDiff = dateNow.getMonth() - dob.getMonth();
    if (monthDiff < 0 || (monthDiff === 0 && dateNow.getDate() < dob.getDate())) {
      ageDt--;
    }

    setAge(ageDt);
    
  }, [age]);

  return (
    <>
      <section id="about" className="about">
        <div className="container">

          <div className="section-title">
            <h2>À-propos</h2>
            <p>Passioné depuis toujours de la technique, je suis depuis mon plus jeune âge en pérpétuel
              quête de connaissances. J'aime comprendre les choses qui m'entourent dans ma vie quotidienne,
              c'est pourquoi je me suis tourné tout naturellement vers l'informatique.
            </p>
          </div>

          <div className="row">
            <div className="col-lg-4" data-aos="fade-right">
              <img src="img/profile_img.jpg" className="img-fluid" alt="" />
            </div>
            <div className="col-lg-8 pt-4 pt-lg-0 content" data-aos="fade-left">
              <h3>Ingénieur logiciel</h3>
              <p className="fst-italic">
                J'ai obtenu dans le cadre de mes études un masteur d'ingénieur logiciel. Néanmoins, je souhaite continuer
                mon
                apprentissage en autodidacte dans les divers domaines techniques comme l'électronique, l'intelligence
                artificielle ou encore d'autre dans d'autre domaine
                comme la maçonnerie ou la construction en général.
              </p>
              <div className="row">
                <div className="col-lg-6">
                  <ul>
                    <li><i className="bi bi-chevron-right"></i> <strong>Date de naissance :</strong>
                      <span id="birthday">{birthday}</span>
                    </li>
                    <li><i className="bi bi-chevron-right"></i> <strong>Site web :</strong>
                      <a href="https://francois-chiv.github.io">Site github</a>
                    </li>
                    <li><i className="bi bi-chevron-right"></i> <strong>Numéro de téléphone :</strong>
                      <span>+33 6 21 87 96 80</span>
                    </li>
                    <li><i className="bi bi-chevron-right"></i> <strong>Ville :</strong>
                      <span>Paris, France</span>
                    </li>
                  </ul>
                </div>
                <div className="col-lg-6">
                  <ul>
                    <li><i className="bi bi-chevron-right"></i> <strong>Age :</strong> <span id="age">{age}</span></li>
                    <li><i className="bi bi-chevron-right"></i> <strong>Diplôme :</strong> <span>Master en ingénieur
                      logiciel</span>
                    </li>
                    <li><i className="bi bi-chevron-right"></i> <strong>Email :</strong> <span>francois.chiv@gmail.com</span>
                    </li>
                    <li><i className="bi bi-chevron-right"></i> <strong>Disponnibilité :</strong>
                      <span>Available</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>
    </>
  );
}

