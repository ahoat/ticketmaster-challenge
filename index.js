const email = document.querySelector("#email");
const user = localStorage.getItem("username");

email.setAttribute("value", user);

