/* DEFINE DOM ELEMENTS */

const toggleButton = document.querySelector("#toggle-button");
const root = document.querySelector(":root");
const storageKey = "color-mode";
const defaultMode = "light-mode";

//load the user's preferred colored mode for local storage

//local storage is the one who remembers the mode

const loadColorMode = () => {
  const colorMode = localStorage.getItem(storageKey);
  root.classList.add(colorMode || defaultMode);
  updateToggleButton();

};

loadColorMode();

//toggle the color mode
toggleButton.addEventListener("click", () => {
  saveColorMode();
}); //listens to the page for an event i.e: clicks;

//save the user's prefrerred color mode to local storage
const saveColorMode = () => {
  //Check if the root element has a class of dark mode. If yes then the current mode is switched to light and viceversa

  const currentMode = root.classList.contains("dark-mode")
    ? "light-mode"
    : "dark-mode";

  root.classList.remove("light-mode", "dark-mode");
  root.classList.add(currentMode);
  localStorage.setItem(storageKey, currentMode);
  updateToggleButton();
};

function updateToggleButton () {
    if (root.classList.contains("dark-mode")) {
      toggleButton.style.backgroundImage = "var(--moon)";
    } else {
      toggleButton.style.backgroundImage = "var(--sun)";
    }
  };
