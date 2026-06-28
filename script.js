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
    const content = dropdown.querySelector(".dropdown-content");

    dropdown.classList.toggle("active");

    if (dropdown.classList.contains("active")) {
      // Add a little extra space so nothing gets cut off
      content.style.maxHeight = (content.scrollHeight + 100) + "px";
    } else {
      content.style.maxHeight = "0";
    }
  });
});
