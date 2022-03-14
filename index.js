const email = document.querySelector("#email");
const user = localStorage.getItem("username");

email.setAttribute("value", user);

const emailCheckbox = document.querySelector("#email-check");
const mobileCheckbox = document.querySelector("#mobile-check");
const submitBtn = document.querySelector(".submit-btn");
const error = document.querySelector(".error")
const waitingList = document.querySelector("#waiting-list");

submitBtn.addEventListener("click", (e) => {
    e.preventDefault();
    if (emailCheckbox.checked == false && mobileCheckbox.checked == false) {
        error.style.visibility = "visible";
    } else {
        waitingList.submit();
    }
});