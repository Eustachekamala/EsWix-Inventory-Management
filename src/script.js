const signUpSection  = document.querySelector("container-sign_up");
const signInSection = document.querySelector("container-sign_in");
const dashBoardSection = document.querySelector("container-dashboard");
const btnSignIn = document.querySelector("btn-sign_in");
const createAccount = document.querySelector("btn-create-account");

function hideSection(){
    signUpSection.classList.remove("hidden");
}

function showSection(){
    signInSection.classList.add("hidden");
    dashBoardSection.classList.remove("hidden");
}

btnSignIn.addEventListener("click",showSection())
createAccount.addEventListener("click", hideSection());
