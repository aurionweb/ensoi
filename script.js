// Identifiants valides
const validUsername = "w.moha";
const validPassword = "MOHA_ahmed77";

// Éléments du DOM
const loginButton = document.getElementById("login-button");
const usernameInput = document.getElementById("username");
const passwordInput = document.getElementById("password");
const errorMessage = document.getElementById("error-message");
const loginContainer = document.getElementById("login-container");
const content = document.getElementById("content");

// Gestion du clic sur le bouton de connexion
loginButton.addEventListener("click", () => {
    const username = usernameInput.value.trim();
    const password = passwordInput.value;

    if (username === validUsername && password === validPassword) {
        loginContainer.style.display = "none";
        content.style.display = "block";
    } else {
        errorMessage.style.display = "block";
        setTimeout(() => {
            errorMessage.style.display = "none";
        }, 3000);
    }
});

// Gestion des menus et affichage des sections
document.getElementById("mon-compte-button").addEventListener("click", function() {
    // Cacher toutes les autres sections
    document.getElementById("notes-annee-en-cours").style.display = "none";
    document.getElementById("absence-section").style.display = "none";
    // Afficher la section Mon Compte
    document.getElementById("mon-compte-section").style.display = "block";
});

document.getElementById("absence-button").addEventListener("click", function() {
    document.getElementById("mon-compte-section").style.display = "none";
    document.getElementById("notes-annee-en-cours").style.display = "none";
    document.getElementById("absence-section").style.display = "block";
});
document.getElementById("edt-button").addEventListener("click", function() {
    document.getElementById("mon-compte-section").style.display = "none";
    document.getElementById("notes-annee-en-cours").style.display = "none";
    document.getElementById("absence-section").style.display = "none";
    document.getElementById("edt-section").style.display = "block";
});

document.getElementById("resultats-button").addEventListener("click", function() {
    document.getElementById("mon-compte-section").style.display = "none";
    document.getElementById("absence-section").style.display = "none";
    document.getElementById("notes-annee-en-cours").style.display = "block";
});

// Gestion du bouton de déconnexion
document.getElementById("logout-button").addEventListener("click", function() {
    alert("Vous avez été déconnecté.");
    location.reload();
});
// Sélection des éléments
const menuToggle = document.getElementById("menu-toggle");
const sidebar = document.querySelector(".sidebar");
const menuLinks = document.querySelectorAll(".menu a");

// Toggle menu (ouverture/fermeture)
menuToggle.addEventListener("click", () => {
    sidebar.classList.toggle("active");
});

// Quand on clique sur un lien → fermer le menu
menuLinks.forEach(link => {
    link.addEventListener("click", () => {
        sidebar.classList.remove("active");
    });
});


document.getElementById("bulletins-button").addEventListener("click", function(e) {
    e.preventDefault();

    // Cacher toutes les autres sections
    document.getElementById("mon-compte-section").style.display = "none";
    document.getElementById("notes-annee-en-cours").style.display = "none";
    document.getElementById("absence-section").style.display = "none";
    document.getElementById("edt-section").style.display = "none";

    // Afficher la section Bulletins
    document.getElementById("bulletins-section").style.display = "block";
});
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
