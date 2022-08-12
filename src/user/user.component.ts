import Icon from '../assets/images/person-male.png';
import { Component } from '../decorators/index';

let styles = `
.user {
  padding: 8px;
  box-shadow: 1px 4px 12px -6px rgba(0,12,82,0.24);
  margin: 8px auto;
  border-radius: 6px;
  background: #2A0944dd;
  color: #E8F9FD;
  display: grid;
  grid-template-columns: 1fr 2fr;
  max-width: 400px;
}
.user-img {
  background: lightblue;
  width: 100%;
  border-radius: 6px;
}
.user-info {
  margin-left: 18px;
  display:flex;
  flex-direction: column;
  gap: 18px;
  font-size: 24px;
}
`;
@Component({
  selector: 'user-info',
  styles
})
export class UserComponent extends HTMLElement {
  constructor() {
    super();
    const shadowRoot = this.shadowRoot ?? this.attachShadow({ mode: 'open' });

    const user = document.createElement('div');
    user.classList.add('user');

    const img = document.createElement('img');
    img.src = this.getAttribute('src') ?? Icon;
    img.classList.add('user-img');

    const info = document.createElement('div');
    info.classList.add('user-info');

    const userName = this.getAttribute('name') ?? 'No Name';

    const userInfo = this.getAttribute('info') ?? 'No Info';

    info.innerHTML = `
      <div class="user-info__name">${userName}</div>
      <div class="user-info__about">${userInfo}</div>
    `;

    user.appendChild(img);
    user.appendChild(info);

    shadowRoot.appendChild(user);
  }
}
