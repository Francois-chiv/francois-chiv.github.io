import { useEffect, useState } from "react";
import userAPI from '../services/userAPI';

export default function About() {
  const [data, setData] = useState([]);
  const [age, setAge] = useState('');

  useEffect(() => {
    getData();

    const dob = new Date(Date.parse(data.BIRTHDAY, 'dd/MM/yyyy'));
    const dateNow = new Date();
    let ageDt = dateNow.getFullYear() - dob.getFullYear();

    const monthDiff = dateNow.getMonth() - dob.getMonth();
    if (monthDiff < 0 || (monthDiff === 0 && dateNow.getDate() < dob.getDate())) {
      ageDt--;
    }

    setAge(ageDt);
  }, []);

  const getData = async () => {
    try {
      const response = await userAPI.get();
      setData(response.data[0]);
    } catch (error) {
      console.error('Error fetching user data:', error);
    }
  };

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
            <div className="col-lg-4" data-aos="zoom-in">
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
                      <span id="birthday">{data.BIRTHDAY}</span>
                    </li>
                    <li><i className="bi bi-chevron-right"></i> <strong>Site web :</strong>
                      <a href="https://francois-chiv.github.io">Site github</a>
                    </li>
                    <li><i className="bi bi-chevron-right"></i> <strong>Numéro de téléphone :</strong>
                      <span>{data.PHONE_NUMBER}</span>
                    </li>
                    <li><i className="bi bi-chevron-right"></i> <strong>Ville :</strong>
                      <span>{data.ADDRESS}</span>
                    </li>
                  </ul>
                </div>
                <div className="col-lg-6">
                  <ul>
                    <li><i className="bi bi-chevron-right"></i> <strong>Age :</strong> <span id="age">{age}</span></li>
                    <li><i className="bi bi-chevron-right"></i> <strong>Diplôme :</strong> <span>{data.DEGREE}</span>
                    </li>
                    <li><i className="bi bi-chevron-right"></i> <strong>Email :</strong> <span>{data.EMAIL}</span>
                    </li>
                    <li><i className="bi bi-chevron-right"></i> <strong>Disponnibilité :</strong>
                      <span>{data.AVAILABILITY}</span>
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

