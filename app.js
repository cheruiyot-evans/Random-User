import { getElement } from './utils/getElement.js';
const URL = 'https://randomuser.me/api/';

const fetchUser = async () => {
  try {
    const response = await fetch(URL);
    const data = await response.json();
    return data;
    console.log(data);
  } catch (error) {
    console.log(error);
  }
};

const displayUser = (list) => {
  const { name, location, picture } = list.results[0];
  const { large: img } = picture;
  const { title, first, last } = name;
  console.log(list.results);
  const user = `
 <img
          src="${img}"
          alt="random user"
          class="user-img"
        />
        <p class="user-title">My name is</p>
        <p class="user-value">${title} ${first} ${last}</p>
        <div class="values-list">
          <!-- single icon -->
          <button class="icon active" data-label="name">
            <span class="far fa-user"></span>
          </button>
          <!-- end of single icon -->
          <button class="icon" data-label="email">
            <span class="far fa-envelope-open"></span>
          </button>
          <!-- single icon -->
          <button class="icon" data-label="age">
            <span class="far fa-calendar-times"></span>
          </button>
          <!-- end of single icon -->
          <!-- single icon -->
          <button class="icon" data-label="street">
            <span class="far fa-map"></span>
          </button>
          <!-- end of single icon -->
          <!-- single icon -->
          <button class="icon active" data-label="phone">
            <span class="fas fa-phone"></span>
          </button>
          <!-- end of single icon -->
          <!-- single icon -->
          <button class="icon active" data-label="password">
            <span class="fas fa-user-lock"></span>
          </button>
 `;
  const container = getElement('.container');
  container.innerHTML = user;
};

const start = async () => {
  const data = await fetchUser();
  displayUser(data);
};

start();
