
export interface IComponentMeta {
  selector: `${string}-${string}`;
  styles?: string;
}

export class SelectorValidator {
  constructor(public selector: string) {
  }

  static isValid(selectorValidator: SelectorValidator) {
    return SelectorValidator.SelectorRegex.test(selectorValidator.selector);
  }

  get isValid() {
    return SelectorValidator.isValid(this);
  }

  static SelectorRegex = /^([a-z]+-[a-z]+)+$/
}

function Component(options: IComponentMeta) {

  return (target: CustomElementConstructor): CustomElementConstructor => {
    define(target, options);
    return target;
  }
}

function define(target: CustomElementConstructor, options: IComponentMeta) {
  if (!verifySelector(options.selector)) {
    throw new Error(`Components selector should be lowercase with at least 1 dash (-) in its text`)
  }

  window.customElements.define(options.selector, applyStyles(target, options));
}

function applyStyles(target: CustomElementConstructor, options: IComponentMeta) {
  if (typeof options?.styles !== 'string') {
    return target;
  }

  return class WithStyles extends target {
    constructor(...args: any[]) {
      super();

      const shadowRoot = this.shadowRoot ?? this.attachShadow({ mode: 'open' });
      const styles = document.createElement('style');
      styles.innerText = options.styles as string;
      shadowRoot.prepend(styles);
    }
  }
}

function verifySelector(selector: string) {
  return SelectorValidator.isValid(new SelectorValidator(selector));
}

export {
  Component
}