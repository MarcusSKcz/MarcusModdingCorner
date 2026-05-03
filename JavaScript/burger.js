function toggleMenu() {
    var menu = document.querySelector("nav ul");
    if (menu.style.display === "flex") {
        menu.style.display = "none";
    } else {
        menu.style.display = "flex";
    }
}