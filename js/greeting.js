const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");

const HIDDEN_CLASSNAME = "hidden";
const USER_NAME = "username";

function onLoginSubmit(event) {
  event.preventDefault();
  const username = loginInput.value;
  localStorage.setItem(USER_NAME, username);
  loginForm.classList.add(HIDDEN_CLASSNAME);
  //greeting.innerText = "Hello "+username;
  paintGreetings(username);
}

function paintGreetings(username) {
  greeting.innerText = `Hello, ${username}`;
  greeting.classList.remove(HIDDEN_CLASSNAME);
}

const saveusername = localStorage.getItem(USER_NAME);

if (saveusername === null) {
  loginForm.classList.remove(HIDDEN_CLASSNAME);
  loginForm.addEventListener("submit", onLoginSubmit);
  //show form
} else {
  //gretting
  paintGreetings(saveusername);
}
