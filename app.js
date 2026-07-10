// Initial JavaScript file
const navLinks = document.querySelectorAll("nav a");

navLinks.forEach(link => {
    link.addEventListener("click", () => {
        console.log("Navigation link clicked");
    });
});
const sidebarLinks = document.querySelectorAll("aside a");

sidebarLinks.forEach(link => {
    link.addEventListener("click", () => {
        console.log("Sidebar link selected");
    });
});