const toggleBtn = document.getElementById("btnToggle");
const currentTheme = document.querySelector(".theme");
let darkMode = localStorage.getItem("dark-mode");

const enableDarkMode = () => {
    currentTheme.classList.add("dark-mode");
    toggleBtn.classList.remove("dark-mode");
    localStorage.setItem("dark-mode", "enabled");
}

const disableDarkMode = () => {
    currentTheme.classList.remove("dark-mode");
    toggleBtn.classList.add("dark-mode");
    localStorage.setItem("dark-mode", "disabled");
}

if(darkMode === "enabled"){
    enableDarkMode();
}

toggleBtn.addEventListener("click", (e) => {
    darkMode = localStorage.getItem("dark-mode");
    if(darkMode === "disabled"){
        enableDarkMode();
    } else {
        disableDarkMode();
    }
});