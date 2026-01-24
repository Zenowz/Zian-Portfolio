const themeToggle = document.getElementById("theme-toggle");
const body = document.body;

themeToggle.addEventListener("click", () => {
  body.classList.toggle("dark");
});

/* DROPDOWN TOGGLE */
const dropdownButtons = document.querySelectorAll(".dropdown-btn");

dropdownButtons.forEach(btn => {
  btn.addEventListener("click", () => {
    const dropdown = btn.parentElement;
    dropdown.classList.toggle("active");
  });
});
