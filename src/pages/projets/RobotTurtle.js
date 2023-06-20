import ArticleTemplate from "./articleTemplate";

export default function RobotTurtle() {
  const projet = {
    title: "Robot Turtle",
    date: "2019-2020",
    technologies: ["java", "jeux-vidéos", "POO"],
    imgPath: "img/projects/robot_turtle_1.jpg",
    contents: [{
      title: "Concept",
      imgPath: "img/projects/robot_turtle_1.jpg",
      text: `Robot Turtles est un jeu de plateau conçu pour introduire des notions élémentaires
      de l’algorithmique à des jeunes enfants. Robot Turtles se joue de 2 à
      4 joueurs, et chaque joueur incarne une tortue se déplaçant sur un plateau de
      taille 8 x 8.
      L’objectif de chaque joueur est d’amener sa tortue sur un joyau placé sur le
      plateau en construisant un petit algorithme. Cet algorithme est construit à l’aide
      de cartes qui permettent de faire avancer la tortue ou de la faire tourner d’un
      quart de tour vers la gauche ou la droite. Des cartes supplémentaires permettent
      de créer des obstacles ou de les détruire.`,
      bulletList:[
        "test",
        "test2"
      ]
    }, {
      title: "Démonstration",
      imgPath: "img/projects/robot_turtle_1.jpg",
      text: "Peut-être qu'un jour il y aura une démonstration ... J'ai un peu perdu ce projet donc ce n'est pas sûr"
    }, {
      title: "Ce que j'ai appris",
      text: "Comme j'ai un peu la flemme du textuel voici une liste non exaustive de ce que j'ai appris :",
      bulletList:[
        "Eclipse c'est de la merde",
        "Java"
      ]
    }]
  };

  return (
    <>
      <ArticleTemplate data={projet} />
    </>
  );
}
