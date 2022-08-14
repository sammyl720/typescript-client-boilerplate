import { IElement } from "../interfaces/element.interface";
import { IElementFactory } from "../interfaces/factory.interface";


export interface IEditableElement<T extends IElement> {
  component: T;
  properties: StrProp<T, keyof T>[];
}

type StrProp<T, K extends keyof T> = T[K] extends string ? K : never;
type NumProp<T, K extends keyof T> = T[K] extends number ? K : never;

export class Editor implements IElement {
  readonly name = 'Editor';
  private _element: HTMLElement;

  constructor(
    private editableComponent: IEditableElement<IElement>,
    private elFactory: IElementFactory = document
  ) {
    this._element = this.elFactory.createElement('div');
    this._element.innerHTML = this.HTML;
    this.listenToPropChanges(editableComponent);
  }

  get HTML() {
    return `
      <div class='editor'>
        ${this.getForm(this.editableComponent)}
      </editor>
    `;
  }
  get element() {
    return this._element;
  }

  getForm(el: IEditableElement<IElement>) {
    let form = '';
    for (let index = 0; index < el.properties.length; index++) {
      form += this.createInput(el, index);
      form += '\n';
    }
    return form;
  }

  createInput(el: IEditableElement<IElement>, index: number) {
    const prop = el.properties[index];
    const value = el.component[el.properties[index]];
    return `
    <div class="form-group my-2">
      <label style="text-transform: capitalize;" for="${prop}">${prop}</label>
      <input class="form-control" type="text" id="${prop}" name="${prop}" value="${value}" />
    </div>
    `
  }

  listenToPropChanges(el: IEditableElement<IElement>) {
    for (let prop of el.properties) {
      const input = this._element.querySelector(`input#${prop}`) as HTMLInputElement;
      input.addEventListener('input', (e: Event) => {
        if (!!el.component[prop]) {
          el.component[prop] = input.value;
        }
      })
    }
  }
}