// ================================
// CONSTANTEN
// ================================
const menuButton = document.querySelector("header button"); // hamburger knop
const deNav = document.querySelector("header nav");          // navigatie menu
const ageMenu = document.getElementById("ageMenu");          // dialog venste voor leeftijdscheck
const submitBtn = document.getElementById("submitDob");      // knop om geboortedatum te bevestigen
const dobInput = document.getElementById("dob");             // inputveld voor geboortedatum
const checkbox = document.querySelector('.drunkmode');

// ================================
// LET VARIABELEN
// ================================
let userAge = 0; // leeftijd van de gebruiker

// ================================
// FUNCTIONS
// ================================

// Functie om het menu open/dicht te doen
function toggleMenu() {
    deNav.classList.toggle("is_open");
}

// Leeftijd op basis van de datum berekenen
// ChatGPT: Hoe kan ik een leeftijd berekenen aan de hand van een date input? en kan je de code uitleggen?
function calculateAge(dobValue) {
    const today = new Date();
    const dob = new Date(dobValue);

    let age = today.getFullYear() - dob.getFullYear();
    const monthDiff = today.getMonth() - dob.getMonth();

    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < dob.getDate())) {
        age--;
    }

    return age;
}

// age checker
function checkAge() {
    const dobValue = dobInput.value;

    if (!dobValue) {
        alert("Please enter your date of birth.");
        return;
    }

    userAge = calculateAge(dobValue);

    if (userAge >= 18) {
        ageMenu.close();
        ageMenu.parentNode.removeChild(ageMenu); // ChatGPT: Wrm verwijdert hij alleen de Backdrop?
    } else {
        window.location.href = "https://www.trimbos.nl/kennis/alcohol/alcohol-en-jongeren/"; //stackoverflow.com/questions/67229313/open-link-in-new-window
    }
}

// Drunkmode wave
function setWave(on) {
    const h2s = document.querySelectorAll('h2');

    if (on) {
        h2s.forEach(h2 => h2.style.animation = 'wave 2s ease-in-out infinite');
    } else {
        h2s.forEach(h2 => h2.style.animation = '');
    }
}

// ================================
// LISTENERS
// ================================

// ChatGPT: Wrm sluit de dialog niet?
if (ageMenu) {
    ageMenu.showModal();
}

if (menuButton && deNav) {
    menuButton.addEventListener('click', toggleMenu);
}

if (submitBtn) {
    submitBtn.addEventListener("click", checkAge);
}



if (checkbox) {
    setWave(checkbox.checked);

    checkbox.addEventListener('change', () => {
        setWave(checkbox.checked);
    });
}






