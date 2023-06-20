import ArticleTemplate from "./articleTemplate";

export default function HomeChef() {
  const projet = {
    title: "HomeChef",
    date: "2020-????",
    technologies: ["react-native", "node.js"],
    imgPath: "img/projects/robot_turtle_1.jpg",
    contents: [{
      title: "Concept",
      imgPath: "img/projects/robot_turtle_1.jpg",
      text: `HomeChef est une application mobile permettant d'archiver ses recettes de cuisine 
          mais également planifier ses courses de la semaine et le menu de la semaine.`,
    }]
  };

  return (
    <>
      <ArticleTemplate data={projet} />
    </>
  );
}
