import { observable } from "../core/observable";
import { IElement, IElementFactory, ISubscriber } from "../interfaces/index";

export class Card extends observable implements IElement {
  readonly name = 'Card';
  private _element: HTMLElement;

  constructor(
    private _title: string,
    private _body: string,
    private elementFactory: IElementFactory = new CardElementFactory(),
    subscribers: ISubscriber[] = []
  ) {
    super(subscribers);
    this._element = this.buildElement();
  }

  private get HTML() {
    return `
      <div class="card-header">
        <h3 class="card-title">${this.title}</h3>
      </div>
      <div class="card-body">
        <p>
          ${this.body}
        </p>
      </div>
    `;
  }

  private buildElement() {
    return this.elementFactory.createElement(this.HTML);
  }

  get element() {
    if (!this._element) {
      this._element = this.buildElement()
    }
    return this._element;
  }

  set title(value: string) {
    if (this._title != value) {
      this._title = value;
      this.update();
    }
  }

  get title() {
    return this._title;
  }

  set body(value: string) {
    if (this._body != value) {
      this._body = value;
      this.update();
    }
  }

  get body() {
    return this._body;
  }

  private update() {
    this._element.innerHTML = this.HTML;
    this.notifySubscribers();
  }
}

export class CardElementFactory implements IElementFactory {
  createElement(html: string) {
    const element = document.createElement('div');
    element.innerHTML = html;
    element.classList.add('card');
    return element;
  }
}
