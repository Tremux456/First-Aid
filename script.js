// Function to toggle the menu on small screens
function toggleMenu() {
    const menuBar = document.getElementById('menu-bar');
    menuBar.classList.toggle('show'); // Toggle the 'show' class
}

// Close the menu when a link is clicked
const navLinks = document.querySelectorAll('#menu-bar ul li a');
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        const menuBar = document.getElementById('menu-bar');
        if (menuBar.classList.contains('show')) {
            menuBar.classList.remove('show'); // Hide menu
        }
    });
});

// List of HTML files to search
function openpage() {
    var x = document.getElementById("searchBar").value.toLowerCase(); // Convert input to lowercase

    var pages = {
        "cut": "cut.html",
        "cpr": "cpr.html",
        "burn": "burn.html",
        "choking": "choking.html",
        "second degree burn": "Second-Degree Burns.html",
        "fainting": "fainting.html",
        "third-degree burns": "Third-Degree Burn.html",
        "chemical burn": "Chemical Burns.html"
    };

    if (pages[x]) {
        window.open(pages[x]);
    } else {
        alert("No matching page found.");
    }
}
