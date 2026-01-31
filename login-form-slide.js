const container = document.querySelector(".container");
const signUpLink = document.querySelector(".SignUplink");
const loginLink = document.querySelector(".Loginlink");

signUpLink.addEventListener("click", (e) => {
  e.preventDefault();
  container.classList.add("active");
});

loginLink.addEventListener("click", (e) => {
  e.preventDefault();
  container.classList.remove("active");
});
