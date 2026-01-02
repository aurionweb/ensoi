// ===============================
// IDENTIFIANTS VALIDES
// ===============================
const validUsername = "w.moha";
const validPassword = "MOHA_ahmed77";

// ===============================
// ÉLÉMENTS DU DOM
// ===============================
const loginButton = document.getElementById("login-button");
const usernameInput = document.getElementById("username");
const passwordInput = document.getElementById("password");
const errorMessage = document.getElementById("error-message");
const loginContainer = document.getElementById("login-container");
const content = document.getElementById("content");

const menuToggle = document.getElementById("menu-toggle");
const sidebar = document.querySelector(".sidebar");
const menuLinks = document.querySelectorAll(".menu a");

// ===============================
// CONNEXION
// ===============================
loginButton.addEventListener("click", () => {
    const username = usernameInput.value.trim();
    const password = passwordInput.value;

    if (username === validUsername && password === validPassword) {
        loginContainer.style.display = "none";
        content.style.display = "block";

        cacherToutesLesSections();
        document.getElementById("mon-compte-section").style.display = "block";
    } else {
        errorMessage.style.display = "block";
        setTimeout(() => {
            errorMessage.style.display = "none";
        }, 3000);
    }
});

// ===============================
// FONCTION UTILITAIRE
// ===============================
function cacherToutesLesSections() {
    const sections = [
        "mon-compte-section",
        "notes-annee-en-cours",
        "notes-annees-precedentes",
        "absence-section",
        "edt-section",
        "bulletins-section"
    ];

    sections.forEach(id => {
        const el = document.getElementById(id);
        if (el) el.style.display = "none";
    });
}

// ===============================
// NAVIGATION MENU
// ===============================

// Mon compte
document.getElementById("mon-compte-button").addEventListener("click", () => {
    cacherToutesLesSections();
    document.getElementById("mon-compte-section").style.display = "block";
});

// Notes année en cours
document.querySelector('a[href="#notes-annee-en-cours"]').addEventListener("click", (e) => {
    e.preventDefault();
    cacherToutesLesSections();
    document.getElementById("notes-annee-en-cours").style.display = "block";
});

// Notes années précédentes
document.querySelector('a[href="#notes-annees-precedentes"]').addEventListener("click", (e) => {
    e.preventDefault();
    cacherToutesLesSections();
    document.getElementById("notes-annees-precedentes").style.display = "block";
});

// Absences
document.getElementById("absence-button").addEventListener("click", () => {
    cacherToutesLesSections();
    document.getElementById("absence-section").style.display = "block";
});

// Emploi du temps
document.getElementById("edt-button").addEventListener("click", () => {
    cacherToutesLesSections();
    document.getElementById("edt-section").style.display = "block";
});

// Bulletins
document.getElementById("bulletins-button").addEventListener("click", (e) => {
    e.preventDefault();
    cacherToutesLesSections();
    document.getElementById("bulletins-section").style.display = "block";
});

// ===============================
// DÉCONNEXION
// ===============================
document.getElementById("logout-button").addEventListener("click", () => {
    alert("Vous avez été déconnecté.");
    location.reload();
});

// ===============================
// MENU HAMBURGER (MOBILE)
// ===============================
menuToggle.addEventListener("click", () => {
    sidebar.classList.toggle("active");
});

menuLinks.forEach(link => {
    link.addEventListener("click", () => {
        sidebar.classList.remove("active");
    });
});

