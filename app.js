import { getElement } from './utils/getElement.js';
import getUser from './utils/fetchUser.js';

const img = getElement('.user-img');
const title = getElement('.user-title');
const value = getElement('.user-value');
const btn = getElement('.btn');
const btns = [...document.querySelectorAll('.icon')];

const displayUser = (person) => {
  img.src = person.image;
  value.textContent = person.name;
  title.textContent = `My name is`;
  btns[0].classList.add('active');
  btns.map((btn) => {
    const label = btn.dataset.label;
    if (label === 'name') {
      btn.addEventListener('click', () => {
        value.textContent = person.name;
      });
    } else if (label === 'email') {
      btn.addEventListener('click', () => {
        value.textContent = person.email;
      });
    } else if (label === 'street') {
      btn.addEventListener('click', () => {
        value.textContent = person.street;
      });
    } else if (label === 'age') {
      btn.addEventListener('click', () => {
        value.textContent = person.age;
      });
    } else if (label === 'phone') {
      btn.addEventListener('click', () => {
        value.textContent = person.phone;
      });
    } else if (label === 'password') {
      btn.addEventListener('click', () => {
        value.textContent = person.password;
      });
    }
  });
};

// show user
const showUser = async () => {
  const person = await getUser();
  // get user from api
  displayUser(person);
  // display user
};

window.addEventListener('DOMContentLoaded', showUser);
btn.addEventListener('click', showUser);
