// script.js
document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Empêche le rechargement de la page

    // Récupération des valeurs du formulaire
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const numero = document.getElementById("numero").value;
    const message = document.getElementById("message").value;


    // Simulation d'envoi du formulaire
    console.log("Nom :", name);
    console.log("Email :", email);
    console.log("Numero :", numero)
    console.log("Message :", message);

    // Affiche une alerte
    alert("Votre message a bien été reçu ! Merci " + name + ".");

    // Réinitialise le formulaire
    document.getElementById("contactForm").reset();
});
