
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
//  DARK / LIGHT MODE

const themeBtn = document.getElementById("theme-btn");

if(themeBtn){
    themeBtn.addEventListener("click", function(){
        document.body.classList.toggle("dark");
        if(document.body.classList.contains("dark")){
            themeBtn.textContent="☀";
        }else{
            themeBtn.textContent="🌙";
        }
    });
}

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

