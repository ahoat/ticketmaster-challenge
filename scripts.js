//get user inputs from sign-in.html
const username = document.querySelector(".userEmail");
const password = document.querySelector(".password");
const signInBtn = document.querySelector(".signIn-btn");
const form = document.querySelector(".signIn-form");
const errorMessage = document.querySelectorAll(".error");

console.log(errorMessage);

form.addEventListener("submit", e => {
    e.preventDefault();
    if (username.value === users.email && password.value === users.password) {
        form.submit();
    } else {
        errorMessage.forEach((element) => {
        element.style.visibility = "visible"})
    }
});


signInBtn.addEventListener("click", () => {
    console.log("clicked!");
})

//create test user object

let users = {"email" : "Ahoa@test.com",
            "password" : "123456"
}

console.log(users.email);

//grap input from index.html


