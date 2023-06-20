import ArticleTemplate from "./articleTemplate";

export default function Jarvis() {
  const projet = {
    title: "Jarvis",
    date: "2020-????",
    technologies: ["python", "speech recognition", "NLP", "Llama"],
    imgPath: "img/projects/robot_turtle_1.jpg",
    contents: [{
      title: "Concept",
      imgPath: "img/projects/robot_turtle_1.jpg",
      text: `Jarvis est une intelligence artificielle de NLP (natural language processing). Jarvis est capable de :`,
      bulletList:[
        "Répondre à des questions via une synthèse vocale",
        "Afficher à l'écran ses réponses",
      ]
    }]
  };

  return (
    <>
      <ArticleTemplate data={projet} />
    </>
  );
}
