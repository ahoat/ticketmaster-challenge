//get user inputs from sign-in.html
const username = document.querySelector(".userEmail");
const password = document.querySelector(".password");
const signInBtn = document.querySelector(".signIn-btn");
const form = document.querySelector(".signIn-form");

form.addEventListener("submit", e => {
    e.preventDefault();
});


signInBtn.addEventListener("click", () => {
    console.log("clicked!");
})

//create test user object

let users = {"email" : "Ahoa@test.com",
            "password" : "123456"
}

