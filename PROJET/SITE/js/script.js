console.log('Script JS chargé');

function quizAlert() {
    alert("Vous êtes sur le point de commencer le quiz !");
    quizConfirm();
}

function quizConfirm() {
    const nom = document.getElementById("nom").value.trim();
    const prenom = document.getElementById("prenom").value.trim();
    const anniv = document.getElementById("anniv").value.trim();
    const mail = document.getElementById("mail").value.trim();

    if (!nom || !prenom || !anniv || !mail) {
        alert("Veuillez remplir tous les champs !");
        return;
    }

    var res = confirm("Etes-vous sûr de vouloir continuer ?");
    if (res == true) {
        alert("Le quiz va commencer dans 3 secondes !");
        // Ajouter un décompte de 3 secondes
        var timer = 3;
        // Créer un élément p pour afficher le message
        var confirmation = document.createElement("p");
        confirmation.textContent = timer + " secondes";
        // Style du message
        confirmation.style.color = "#f4a261";
        confirmation.style.fontSize = "1.5em";
        confirmation.style.fontWeight = "bold";
        confirmation.style.textAlign = "center";
        // Ajouter le message à la page à la suite du bouton d'id start
        var start = document.getElementById("informations");
        start.appendChild(confirmation);

        // Utiliser la fonction setInterval qui s'exécute toutes les secondes
        var interval = setInterval(function () {
            // Décrémenter le décompte
            timer--;
            // On l’affiche également dans la console
            console.log(timer);
            // Afficher le décompte dans l’élément p créé
            confirmation.textContent = timer + " secondes";
            // Si le décompte est terminé
            if (timer == 0) {
                clearInterval(interval); // Stop le décompte
                confirmation.textContent = "C'est parti ! Bonne chance !";
                document.getElementsByClassName("quiz")[0].style.display = "block";
                document.getElementsByClassName("quiz")[1].style.display = "block";

                // Désactiver le formulaire
                const fieldset = document.getElementById("informations");
                fieldset.disabled = true; // Désactive tous les champs dans le fieldset

                // Cacher le bouton "Commencer le quiz"
                const startButton = document.querySelector('input[value="Commencer le quiz"]');
                if (startButton) {
                    startButton.style.display = "none";
                }
            }
        }, 1000);
    } else {
        alert("Vous allez être redirigé vers la page d'accueil !");
        window.location.href = "accueil.html";
    }
}


let attemptCount = 0; // Variable pour compter les essais

function submitQuiz() {
    let score = 0; // Initialiser le score
    attemptCount++; // Incrémenter le nombre d'essais

    // Vérification de la réponse à la question 1 (taille du gorille)
    const question1 = document.querySelector('input[name="gorille_taille"]:checked');
    if (question1 && question1.value === "a") {
        score += 4; // Bonne réponse
    }

    // Vérification des réponses à la question 2 (habitats du panda roux)
    const pandaHabitat1 = document.getElementById("panda_habitat1").checked;
    const pandaHabitat2 = document.getElementById("panda_habitat2").checked;
    const pandaHabitat3 = document.getElementById("panda_habitat3").checked;

    if (pandaHabitat1) score += 3; // Bonne réponse
    if (pandaHabitat2) score -= 2; // Mauvaise réponse
    if (pandaHabitat3) score += 3; // Bonne réponse

    // Vérification de la réponse à la question 3 (aliments de la tortue luth)
    const tortueDiet = document.querySelector('input[name="tortue_diet"]:checked');
    if (tortueDiet && tortueDiet.value === "a") {
        score += 4; // Bonne réponse
    }

    // Vérification de la réponse à la question 4 (menace pour l'ours polaire)
    const oursMenace = document.getElementById("ours_menace").value.toLowerCase();
    if (oursMenace.includes("fonte") || oursMenace.includes("climat") || oursMenace.includes("pollution")) {
        score += 5; // Bonne réponse si un mot-clé est présent
    }

    // Vérification de la réponse à la question 5 (aliments de la baleine bleue)
    const baleineDiet = document.querySelector('input[name="baleine_diet"]:checked');
    if (baleineDiet && baleineDiet.value === "a") {
        score += 4; // Bonne réponse
    }

    // Vérification de la réponse à la question 6 (Quel est cet animal ?)
    const animalQuiz = document.querySelector('input[name="animal"]:checked');
    if (animalQuiz && animalQuiz.value === "a") {
        score += 5; // Bonne réponse
    }

    // Afficher le score
    alert(`Votre score est : ${score} / 25`);

    // Réinitialiser le formulaire après chaque tentative
    resetQuiz();

    // Désactiver le bouton après 3 tentatives
    if (attemptCount >= 3) {
        const submitButton = document.getElementById("envoyer");
        submitButton.disabled = true; // Désactiver le bouton
        submitButton.style.backgroundColor = "grey"; // Modifier le style pour indiquer la désactivation
        alert("Vous avez atteint le nombre maximal de tentatives !");
    }
}



function resetQuiz() {
    // Réinitialiser les radios
    const radios = document.querySelectorAll('input[type="radio"]');
    radios.forEach((radio) => {
        radio.checked = false;
    });

    // Réinitialiser les checkboxes
    const checkboxes = document.querySelectorAll('input[type="checkbox"]');
    checkboxes.forEach((checkbox) => {
        checkbox.checked = false;
    });

    // Réinitialiser les inputs text
    const inputs = document.querySelectorAll('input[type="text"]');
    inputs.forEach((input) => {
        input.value = '';
    });

    console.log("Le quiz a été réinitialisé !");
}

// 
window.addEventListener('scroll', function () {
    const navBar = document.querySelector('.nav-bar');
    const header = document.querySelector('.main-header');
    const headerHeight = header.offsetHeight;

    if (window.scrollY > headerHeight) {
        if (!navBar.classList.contains('shrink')) {
            navBar.classList.add('shrink');
        }
    } else {
        if (navBar.classList.contains('shrink')) {
            navBar.classList.remove('shrink');
        }
    }
});


function redirectionWWF() {
    window.open('https://faireundon.wwf.fr/', '_blank') ; 
}

function redirectionUICN() {
    window.open('https://www.helloasso.com/associations/comite-francais-de-l-uicn/formulaires/2/widget', '_blank');
}

function redirectionRA() {
    window.open('https://www.rainforest-alliance.org/fr/get-involved/', '_blank');
}


