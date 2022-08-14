
import "./assets/styles/style.scss";
import { Card } from "./components/card.component";
import { Editor } from "./components/editor.component";
import { IColumnElementOptions, Row } from "./components/row.component";

const anchor = document.querySelector('.container');

const aboutCard = new Card(
  "Building Websites with typescript",
  "A great starter repository to build client side applications with typescript"
);

const editor = new Editor(
  {
    component: aboutCard,
    properties: ['title', 'body']
  }
)

const columns: IColumnElementOptions = {
  sm: 12,
  md: 12,
  lg: 6
}
const row = new Row(
  [
    {
      columns,
      component: aboutCard
    },
    {
      columns,
      component: editor
    }
  ],
  document
)
anchor?.appendChild(row.element);