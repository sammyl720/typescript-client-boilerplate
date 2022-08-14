
import "./assets/styles/style.scss";
import { Card } from "./components/card.component";

const anchor = document.querySelector('.container');

const aboutCard = new Card(
  "Building Websites with typescript",
  "A great starter repository to build client side applications with typescript"
);

anchor?.appendChild(aboutCard.element);