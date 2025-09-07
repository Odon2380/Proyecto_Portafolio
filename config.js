const boton = document.getElementById('boton')
const themelink = document.getElementById('theme_link')

boton.addEventListener("click", () => {
    if (themelink.getAttribute("href") === "light.css") {
        themelink.setAttribute("href", "dark.css");
    } else {
        themelink.setAttribute("href", "light.css");
    }
});