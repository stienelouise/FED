// JavaScript Document
const menuButton = document.querySelector("header button");
const deNav = document.querySelector("header nav");

menuButton.onclick = toggleMenu;

// stap 2: laat de menu-button luisteren naar kliks en voer dan een functie uit


// stap 3: voeg in de functie een class toe aan de nav

function toggleMenu() {
    deNav.classList.toggle("is_open");
}



// Hier heeft chatgpt me bij geholpen
document.addEventListener('DOMContentLoaded', () => {
    
    const checkbox = document.querySelector('ul li input[type="checkbox"]');

    if (!checkbox) return; // geen checkbox gevonden -> niets doen

    const h2s = document.querySelectorAll('h2');

    function setWave(on) {
        if (on) {
            h2s.forEach(h2 => h2.style.animation = 'wave 2s ease-in-out infinite');
        } else {
            h2s.forEach(h2 => h2.style.animation = '');
        }
    }


    setWave(checkbox.checked);


    checkbox.addEventListener('change', () => {
        setWave(checkbox.checked);
    });
});



