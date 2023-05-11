//Création d’un DarkMode, qui varie en mode jour ou nuit l’ensemble du style sur votre page
function DarkMode() {
    const body = document.body;
    const button = document.getElementById('modeSombre');

    button.addEventListener('click', () => {
        body.style.backgroundColor = body.style.backgroundColor === 'black' ? 'white' : 'black';
    });
}

//tableau de citation
const citations = [
    "Le football est un sport simple, rendu compliqué par les gens qui n'y connaissent rien",
    "La meilleure manière de rendre une personne heureuse est de la faire rire !",
    "Homme politique, c'est une profession où il est plus utile d'avoir des relations que des remords.",
    "Le football emploie un langage, le langage du mouvement",
    "Pauvres de nous ! Nous croyons nuire à notre prochain alors que nous travaillons dans le sens même du destin.",
    "La vie n'est supportable que lorsque le corps et l'âme vivent en parfaite harmonie, qu'il existe un équilibre naturel entre eux, et qu'ils ont, l'un pour l'autre, un respect réciproque."
];

//recuperer une citation aleatoirement
function citationAleatoire() {
    const index = Math.floor(Math.random() * citations.length);
    return citations[index];
}
//afficher une citation dans le popup
function afficherCitation() {
    const citation = citationAleatoire();
    const popUp = document.createElement("div");
    popUp.classList.add("popup");
    popUp.innerHTML = `
      <div class="popup-content">
        <p>${citation}</p>
        <button onclick="fermerPopup()">Fermer</button>
      </div>
    `;
    document.body.appendChild(popUp);
}
//fermer le popup
function fermerPopup() {
    const popUp = document.querySelector(".popup");
    document.body.removeChild(popUp);
}


//Création d’un générateur de mot de passe complexe
function generatePassword(taille) {
    var charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+~`|}{[]:;?><,./-=";
    var password = "";
    for (var i = 0; i < taille; i++) {
      var randomChar = charset.charAt(Math.floor(Math.random() * charset.length));
      password = password + randomChar;
    }
    return password;
}
function handleSubmit(event) {
    event.preventDefault();
    var taille = document.getElementById("longueurPassword").value;
    var password = generatePassword(taille);
    document.getElementById("password").value = password;
}

//Crée un burger menu, qui au click de son icon s’ouvre et se referme
function menuBurger() {
    var menu = document.getElementById("joueurs");

    if (menu.style.display === "block") {
        menu.style.display = "none";
    } else {
        menu.style.display = "block";
    }
}  






  
  


  

