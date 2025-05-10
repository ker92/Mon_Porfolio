document.addEventListener('DOMContentLoaded', () => {
    const texteElement = document.getElementById('texte');
    const phrases = [
        "Bienvenue sur mon portfolio",
        "Développeur full stack .",

    ];
    let indexPhrase = 0;
    let indexLettre = 0;
    let effacer = false;

    function afficherTexte() {
        let texteActuel = phrases[indexPhrase].substring(0, indexLettre);
        texteElement.textContent = texteActuel;

        if (!effacer) {
            if (indexLettre < phrases[indexPhrase].length) {
                indexLettre++;
            } else {
                effacer = true;
                setTimeout(afficherTexte, 1500);
                return;
            }
        } else {
            if (indexLettre > 0) {
                indexLettre--;
            } else {
                effacer = false;
                indexPhrase = (indexPhrase + 1) % phrases.length;
            }
        }

        setTimeout(afficherTexte, 100);
    }

    afficherTexte();
});
function toggleSidebar() {
    let sidebar = document.getElementById("sidebar");
    let barre = document.querySelector(".barre");

    if (sidebar.style.width === "250px") {
        sidebar.style.width = "0";
        barre.classList.remove("hidden");
    } else {
        sidebar.style.width = "250px";
        barre.classList.add("hidden");
    }
}

    $(document).ready(function() {
    // On commence avec le texte légèrement décalé vers le haut et invisible (opacity: 0)
    $(".description").css({
        position: "relative", // Permet le déplacement
        top: "-50px", // Décale le texte vers le haut
        opacity: 0    // Rend le texte invisible au début
    })
        .animate({
            top: "0px", // Descend à sa position normale
            opacity: 1  // Rend le texte visible
        }, 1000, "swing"); // Animation en 1 seconde avec effet fluide
});


