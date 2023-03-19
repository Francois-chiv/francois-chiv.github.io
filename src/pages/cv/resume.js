export default function Resume() {

  return (
    <>
      <section id="resume" className="resume">
        <div className="container">

          <div className="section-title">
            <h2>Curriculum Vitæ</h2>
            <p>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint
              consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia
              fugiat sit in iste officiis commodi quidem hic quas.</p>
          </div>

          <div className="row">
            <div className="col-lg-6" data-aos="fade-right">
              <Element data={resume} key="1"/>
              <Element data={education} key="2"/>
            </div>
            <div className="col-lg-6" data-aos="fade-left" data-aos-delay="100">
              <Element data={experience} key="3"/>
            </div>
          </div>

        </div>
      </section>
    </>
  );
}

function Element({ data }) {
  return (
    <>
      <h3 className="resume-title">{data.title}</h3>
       {data.Content.map((item) => (
        <div className="resume-item">
          <h4>{item.title}</h4>
          {item.period && <h5>{item.period}</h5>}
          {item.address && <p><em>{item.address}</em></p>}
          {item.description && <p>{item.description}</p>}
          <ul>
            {item.list && item.list.map((point) => (
              <li key={point.id}>{point}</li>
            ))}
          </ul>
        </div>
      ))} 
    </>
  );
}

const resume = {
  title: "Résumé",
  Content: [
    {
      title: "FRANÇOIS CHIV",
      description: "Développeur informatique avec plus 3 ans d'expérience dans le développement web en fullstack, polyvant et formé à construire une application depuis la compréhension des besoins métier au déploiement de l'application",
      list: [
        "test1",
        "test2"
      ]
    }]
};

const education = {
  title: "Education",
  Content: [
    {
      title: "MASTER D’INGÉNIEUR LOGICIEL (BAC+5) | ISEP",
      period: "2022 - 2019",
      address: "Isep, Paris, France",
      description: "Cycle ingénieur en apprentissage à Paris Partners Softwares, spécialisation en logiciel, notion en IA"
    }, {
      title: "CYCLE PRÉPARATOIRE ASSOCIÉES MPSI ET PSI",
      period: "2017 - 2019",
      address: "Isep | Lycée Stanislas, Paris, France",
      description: "Cycle préparatoire associée au lycée Stanislas, apprentissage des notions avancés de l'algèbre, l'analyse et la géométrie"
    }, {
      title: "DIPLÔME NATIONAL DU BACCALAURÉAT GÉNÉRAL",
      period: "2014 - 2017",
      address: "Lycée Pierre-Gilles de Gennes | ENCPB",
      description: "Baccalauréat scientifique mention bien, Option ISN"
    }]
};

const experience = {
    title: "Expérience professionnelles",
    Content: [
      {
        title: "FULLSTACK DEVELOPPER",
        period: "2019 - 2022",
        address: "Paris Partners Softwares, Paris, France",
        list: [
          "Récolte des besoins clients",
          "Développement d’un PGI",
          "Formation et supervisation de stagiaires"
        ]
      }, {
        title: "PROJETS MULTIPLES",
        period: "2019 - 2022",
        address: "Isep, Paris, France",
        description: "Développement d’une multitude de projet informatique au sein de l’Isep, en totale autonomie ou bien encadré",
        list: [
          "Implémentation",
          "Revue de code",
          "Respect d'un cahier des charges",
          "Conception de modules électronique",
          "Collaboration en équipe"
        ]
      }]
  };