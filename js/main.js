//  LIEN ACTIF NAVBAR

const liens = document.querySelectorAll("#menu a");
const page = window.location.pathname.split("/").pop();

liens.forEach(function(lien){
    if(lien.getAttribute("href") === page){
        lien.classList.add("active");
    }
});

//  MENU HAMBURGER

const menuBtn = document.getElementById("menu-btn");
const menu = document.getElementById("menu");

if(menuBtn){
    menuBtn.addEventListener("click", function(){
        menu.classList.toggle("active");
    });
}
function afficherJour(jour, btn) {
    const jours = document.querySelectorAll(".jour");
    jours.forEach(function (j) {
        j.style.display = "none";
    });

    document.getElementById(jour).style.display = "block";

    const boutons = document.querySelectorAll(".onglets .btn");
    boutons.forEach(function (b) {
        b.classList.remove("active");
    });

    btn.classList.add("active");
}
//   ANIMATIONS AU SCROLL (version simple, sans IntersectionObserver)
   
function initScrollReveal() {
    const items = document.querySelectorAll(".reveal");
    if (!items.length) return;

    function reveal() {
        items.forEach(function (item) {
            const position = item.getBoundingClientRect().top;

            if (position < window.innerHeight - 100) {
                item.classList.add("in-view");
            }
        });
    }

    // On vérifie une première fois au chargement
    reveal();
    window.addEventListener("scroll", reveal);
}


initScrollReveal();

 // MODE SOMBRE
const themeBtn = document.getElementById('theme-btn');
const icon = themeBtn.querySelector('i');

// Au chargement de la page : on applique le thème déjà choisi par l'utilisateur
if (localStorage.getItem('theme') === 'dark') {
    document.body.classList.add('dark');
    icon.classList.replace('fa-moon', 'fa-sun');
}

// Au clic sur le bouton : on bascule le thème et on le mémorise
themeBtn.addEventListener('click', () => {
    document.body.classList.toggle('dark');

    if (document.body.classList.contains('dark')) {
        localStorage.setItem('theme', 'dark');
        icon.classList.replace('fa-moon', 'fa-sun');
    } else {
        localStorage.setItem('theme', 'light');
        icon.classList.replace('fa-sun', 'fa-moon');
    }
});

//  COMPTE A REBOURS

const dateEvenement = new Date("March 20, 2027 09:00:00").getTime();

const elJours = document.getElementById("jours");
const elHeures = document.getElementById("heures");
const elMinutes = document.getElementById("minutes");
const elSecondes = document.getElementById("secondes");

if(elJours && elHeures && elMinutes && elSecondes){

const timer = setInterval(function(){

    const maintenant = new Date().getTime();

    const difference = dateEvenement - maintenant;

    if(difference <=0){

        clearInterval(timer);

        elJours.textContent=0;
        elHeures.textContent=0;
        elMinutes.textContent=0;
        elSecondes.textContent=0;

        return;
    }
    const jours=Math.floor(difference/(1000*60*60*24));

    const heures=Math.floor((difference%(1000*60*60*24))/(1000*60*60));

    const minutes=Math.floor((difference%(1000*60*60))/(1000*60));

    const secondes=Math.floor((difference%(1000*60))/1000);

    elJours.textContent=jours;

    elHeures.textContent=heures;

    elMinutes.textContent=minutes;

    elSecondes.textContent=secondes;

},1000);
}

// ONGLETS PROGRAMME (jour 1 / 2 / 3)

function afficherJour(idJour, bouton){

    document.querySelectorAll(".jour").forEach(function(jour){

        jour.style.display = "none";

    });

    const jourAffiche = document.getElementById(idJour);

    if(jourAffiche){

        jourAffiche.style.display = "block";

    }

    document.querySelectorAll(".onglets .btn").forEach(function(btn){

        btn.classList.remove("active");

    });

    if(bouton){

        bouton.classList.add("active");

    }

}

// COMPTEURS ANIMES

const compteurs = document.querySelectorAll("[data-counter]");

let animationFaite=false;

window.addEventListener("scroll",function(){

    const section=document.querySelector(".stats");

    if(!section) return;

    const position=section.getBoundingClientRect().top;

    if(position<window.innerHeight && !animationFaite){

        animationFaite=true;

        compteurs.forEach(function(compteur){

            const objectif=Number(compteur.dataset.counter);

            let valeur=0;

            const interval=setInterval(function(){

                valeur++;

                compteur.textContent=valeur;

                if(valeur>=objectif){

                    clearInterval(interval);

                }

            },20);

        });

    }

});

window.addEventListener("scroll",function(){

    sections.forEach(function(section){

        const position=section.getBoundingClientRect().top;

        if(position<window.innerHeight-100){

            section.style.opacity=1;

            section.style.transform="translateY(0)";

        }

    });

});

// ANNEE DYNAMIQUE

const annee=document.getElementById("année");

if(annee){

    annee.textContent=new Date().getFullYear();

}

// RETOUR EN HAUT

const topBtn=document.querySelector(".back-to-top");

window.addEventListener("scroll",function(){

    if(window.scrollY>300){
        topBtn.style.display="flex";
    }
    else{
        topBtn.style.display="none";
    }
});

topBtn.addEventListener("click",function(){

    window.scrollTo({
        top:0,
        behavior:"smooth"

    });
});

