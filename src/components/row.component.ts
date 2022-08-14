import { IElement } from "../interfaces/element.interface";
import { IElementFactory } from "../interfaces/factory.interface";

export interface IColumnElementOptions {
  sm?: number;
  md?: number;
  lg?: number;
}

export interface IColumnElement {
  component: IElement;
  columns: number | IColumnElementOptions;
}

export class Row implements IElement {
  readonly name = 'Row';
  private _element: HTMLElement;

  constructor(
    private elements: IColumnElement[],
    private elementFactory: IElementFactory = document
  ) {
    this._element = this.elementFactory.createElement('div');
    this._element.classList.add('row');

    for (let col of elements) {
      this.addElement(col);
    }
  }

  get element() {
    return this._element;
  }

  addElement(columnElement: IColumnElement) {
    columnElement.component.element.classList.add(...this.getClassList(columnElement));
    this._element.appendChild(columnElement.component.element);
  }

  getClassList(columnElement: IColumnElement) {
    let classList = []
    if (typeof columnElement.columns === 'number') {
      classList = [`col-${columnElement.columns}`];
    } else {

      classList = Object.entries(columnElement.columns).map(([size, columns]: [string, number]) => `col-${size}-${columns}`);
    }

    return classList;
  }
}