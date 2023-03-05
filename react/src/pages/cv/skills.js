import { Badge, Form } from "react-bootstrap";
import { useState } from "react";

export default function Skills() {
  const [query, setQuery] = useState('');

  const handleQueryChange = (event) => {
    setQuery(event.target.value);
  };

  const filteredCompetences = competences.filter((competence) =>
    competence.title.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <>
      <section id="skills" className="skills section-bg">
        <div className="container">
          <div className="section-title">
            <h2>Compétences</h2>
            <p>J'ai pu développer au cours de mon expérience professionnelle et académique des compétences variés
              dans plusieurs domaines du développement informatique</p>
          </div>

          <Form.Control type="text" className="m-2" value={query} onChange={handleQueryChange} placeholder="Filtrer sur les compétences" />
          <div className="row skills-content" data-aos="fade-right">
            {filteredCompetences.map((data) => (
              <Competence data={data} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

function Competence({ data }) {

  const levelColor = () => {
    switch (data.level) {
      case 'intermediate':
        return 'primary';
      case 'advanced':
        return 'success';
      case 'expert':
        return 'danger';
      default:
        return 'secondary';
    }
  }

  return (
    <div key={data.id} className="col-lg-1 d-flex flex-column align-items-center skill-item">
      <Badge className="m-1 p-1">{data.title}</Badge>
      <img src={data.icon} alt={data.title} width="64px" height="64px" />
      <Badge className={`skill-level ${data.level}`} bg={levelColor()}>{data.level}</Badge>
    </div>
  )
}

const competences = [
  {
    title: "PHP",
    icon: "img/icons/php.png",
    level: "intermediate"
  }, {
    title: "C#",
    icon: "img/icons/c-sharp.png",
    level: "intermediate"
  }, {
    title: "CSS",
    icon: "img/icons/css-3.png",
    level: "advanced"
  }, {
    title: "HTML",
    icon: "img/icons/html-5.png",
    level: "advanced"
  }, {
    title: "Java",
    icon: "img/icons/java.png",
    level: "intermediate"
  }, {
    title: "JavaScript",
    icon: "img/icons/js.png",
    level: "advanced"
  }, {
    title: "MySQL",
    icon: "img/icons/mysql.png",
    level: "advanced"
  }, {
    title: "Python",
    icon: "img/icons/python.png",
    level: "beginner"
  }, {
    title: "SQL Server",
    icon: "img/icons/sql-server.png",
    level: "advanced"
  }, {
    title: "SourceTree",
    icon: "img/icons/sourcetree.png",
    level: "intermediate"
  }, {
    title: "GIT",
    icon: "img/icons/GIT.png",
    level: "advanced"
  }, {
    title: "Trello",
    icon: "img/icons/trello.png",
    level: "intermediate"
  }, {
    title: "Jira",
    icon: "img/icons/jira.png",
    level: "intermediate"
  }, {
    title: "IntelliJ",
    icon: "img/icons/IntelliJ.png",
    level: "intermediate"
  }, {
    title: "React",
    icon: "img/icons/react.png",
    level: "intermediate"
  }, {
    title: "Bootstrap",
    icon: "img/icons/Bootstrap.png",
    level: "advanced"
  }, {
    title: "Laravel",
    icon: "img/icons/Laravel.png",
    level: "intermediate"
  }, {
    title: "Visual studio",
    icon: "img/icons/visual_studio.png",
    level: "advanced"
  }, {
    title: "Github",
    icon: "img/icons/github.png",
    level: "advanced"
  }, {
    title: "Android",
    icon: "img/icons/android.png",
    level: "beginner"
  }, {
    title: "Dotnet",
    icon: "img/icons/dotnet.png",
    level: "intermediate"
  }, {
    title: "Bitbucket",
    icon: "img/icons/bitbucket.png",
    level: "advanced"
  }, {
    title: "Visual studio code",
    icon: "img/icons/visual_studio_code.png",
    level: "intermediate"
  }
];
