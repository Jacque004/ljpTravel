// script.js
document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Empêche le rechargement de la page

    // Récupération des valeurs du formulaire
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const numero = document.getElementById("numero").value;
    const message = document.getElementById("message").value;

    // Validation du formulaire de contact
    const validation = validateForm(name, email, numero, message);

    if (!validation.isValid) {
        alert(validation.errors.join('\n'));
        return;
    }

    // Simulation d'envoi du formulaire
    console.log("Nom :", name);
    console.log("Email :", email);
    console.log("Numero :", numero)
    console.log("Message :", message);

    // Simulation d'envoi avec feedback visuel
    const submitButton = this.querySelector('input[type="submit"]');
    submitButton.disabled = true;
    submitButton.value = "Envoi en cours...";

    setTimeout(() => {
        alert("Votre message a bien été reçu ! Merci " + name + ".");
        this.reset();
        submitButton.disabled = false;
        submitButton.value = "Envoyer";
    }, 1000);
});

// Validation du formulaire de contact
function validateForm(name, email, numero, message) {
    let isValid = true;
    const errors = [];

    if (!name || name.trim().length < 2) {
        errors.push("Le nom doit contenir au moins 2 caractères");
        isValid = false;
    }

    if (!email || !email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) {
        errors.push("Veuillez entrer une adresse email valide");
        isValid = false;
    }

    if (!numero || !numero.match(/^[0-9]{10}$/)) {
        errors.push("Veuillez entrer un numéro de téléphone valide (10 chiffres)");
        isValid = false;
    }

    if (!message || message.trim().length < 10) {
        errors.push("Le message doit contenir au moins 10 caractères");
        isValid = false;
    }

    return { isValid, errors };
}

// Gestion du formulaire de recherche
document.querySelector('.find_trip form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const pays = document.getElementById('pays').value;
    const ville = document.getElementById('ville').value;
    const region = document.getElementById('region').value;

    if (pays === 'select' || ville === 'select' || region === 'select') {
        alert('Veuillez sélectionner toutes les destinations');
        return;
    }

    // Simulation de recherche
    alert(`Recherche de voyages vers ${ville}, ${region}, ${pays}`);
});

// Gestion du header scroll
const header = document.querySelector('header');
let lastScroll = 0;

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll > 100) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
    
    lastScroll = currentScroll;
});

// Animation des éléments au scroll
const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.1
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('fade-in');
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Observer les éléments à animer
document.querySelectorAll('.box, .img-desc, .title').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(el);
});

// Ajouter la classe fade-in
document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.fade-in').forEach(el => {
        el.style.opacity = '1';
        el.style.transform = 'translateY(0)';
    });
});

// Gestion du formulaire de recherche avec feedback visuel
const searchForm = document.querySelector('.find_trip form');
const searchInputs = searchForm.querySelectorAll('select');

searchInputs.forEach(input => {
    input.addEventListener('change', () => {
        if (input.value !== 'select') {
            input.style.borderColor = 'var(--primary-color)';
        } else {
            input.style.borderColor = '#ddd';
        }
    });
});

// Amélioration du menu mobile
const menuToggle = document.getElementById('menu-toggle');
const responsiveMenu = document.getElementById('responsive-menu');
let isMenuOpen = false;

menuToggle.addEventListener('click', (e) => {
    e.stopPropagation();
    isMenuOpen = !isMenuOpen;
    
    if (isMenuOpen) {
        responsiveMenu.style.display = 'flex';
        setTimeout(() => {
            responsiveMenu.style.opacity = '1';
            responsiveMenu.style.transform = 'translateY(0)';
        }, 10);
    } else {
        responsiveMenu.style.opacity = '0';
        responsiveMenu.style.transform = 'translateY(-100%)';
        setTimeout(() => {
            responsiveMenu.style.display = 'none';
        }, 300);
    }
    
    menuToggle.classList.toggle('active');
});

// Fermeture du menu au clic en dehors
document.addEventListener('click', (e) => {
    if (isMenuOpen && !responsiveMenu.contains(e.target) && !menuToggle.contains(e.target)) {
        isMenuOpen = false;
        responsiveMenu.style.opacity = '0';
        responsiveMenu.style.transform = 'translateY(-100%)';
        setTimeout(() => {
            responsiveMenu.style.display = 'none';
        }, 300);
        menuToggle.classList.remove('active');
    }
});

// Gestion du chargement des images
document.querySelectorAll('img').forEach(img => {
    img.addEventListener('load', () => {
        img.classList.add('loaded');
    });
    
    if (img.complete) {
        img.classList.add('loaded');
    }
});

// Amélioration des formulaires
document.querySelectorAll('form').forEach(form => {
    const inputs = form.querySelectorAll('input, textarea, select');
    
    inputs.forEach(input => {
        // Ajout de la classe active quand l'input est rempli
        input.addEventListener('input', () => {
            if (input.value.trim() !== '') {
                input.classList.add('active');
            } else {
                input.classList.remove('active');
            }
        });
        
        // Gestion du focus
        input.addEventListener('focus', () => {
            input.parentElement.classList.add('focused');
        });
        
        input.addEventListener('blur', () => {
            input.parentElement.classList.remove('focused');
        });
    });
});
