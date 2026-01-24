const toggleButton = document.getElementById("theme-toggle");
const body = document.body;

toggleButton.addEventListener("click", () => {
  body.classList.toggle("dark");
});

/* DROPDOWNS */
const dropdowns = document.querySelectorAll(".dropdown-btn");

dropdowns.forEach(button => {
  button.addEventListener("click", () => {
    const dropdown = button.parentElement;
    dropdown.classList.toggle("active");
  });
});
