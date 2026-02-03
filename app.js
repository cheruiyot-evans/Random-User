import { getElement } from './utils/getElement.js';
import getUser from './utils/fetchUser.js';
import displayUser from './utils/displayUser.js';

const btn = getElement('.btn');

// show user
const showUser = async () => {
  const person = await getUser();
  // get user from api
  displayUser(person);
  // display user
};

window.addEventListener('DOMContentLoaded', showUser);
btn.addEventListener('click', showUser);
