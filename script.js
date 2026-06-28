const themeToggle = document.getElementById("theme-toggle");
const body = document.body;

themeToggle.addEventListener("click", () => {
  body.classList.toggle("dark");
});

/* DROPDOWN TOGGLE WITH AUTO HEIGHT */
const dropdownButtons = document.querySelectorAll(".dropdown-btn");

dropdownButtons.forEach(btn => {
  btn.addEventListener("click", () => {
    const dropdown = btn.parentElement;
    const content = dropdown.querySelector(".dropdown-content");

    if (dropdown.classList.contains("active")) {
      content.style.maxHeight = null;
      dropdown.classList.remove("active");
    } else {
      dropdown.classList.add("active");
      content.style.maxHeight = content.scrollHeight + "px";
    }
  });
});
