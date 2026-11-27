
const link = document.querySelector("#palette");
const readingStyle = document.querySelector("#reading-style");

const themeButton = document.querySelector("#theme");
const readingButton = document.querySelector("#reading");

// Dark mode
themeButton.addEventListener("click", function () {
  const dark = link.getAttribute("href") === "dark.css";

  link.setAttribute("href", dark ? "light.css" : "dark.css");

  themeButton.textContent = dark ? "Dark mode" : "Light mode";
});

// Reading mode
readingButton.addEventListener("click", function () {
  const readingMode = !readingStyle.disabled;

  readingStyle.disabled = readingMode;

  readingButton.textContent = readingMode ? "Reading mode" : "Normal font";
});