$(document).ready(function(){
    // pour rendre une barre de navigation fixe après que l'utilisateur a fait défiler la page au-delà 
    // de 20 pixels vers le bas.Si la position de défilement est inférieure ou égale à 20 pixels, la classe
    //  "sticky" est supprimée, rendant la barre de navigation non fixe.
    $(window).scroll(function(){
        if(this.scrollY > 20){
            $('.navbar').addClass("sticky");
        }else{
            $('.navbar').removeClass("sticky");
        }
        // $(window).scrollTop() pour obtenir la position actuelle du défilement vertical de la fenêtre.
        // afficher ou masquer un élément de la page avec la classe "scroll-up-btn" en fonction du défilement
        //  vertical de la page. Si le défilement dépasse 500 pixels, la classe "show" est ajoutée à l'élément,
        //  sinon, la classe "show" est supprimée. Cela est souvent utilisé dans le
        //  contexte d'un bouton de retour en haut qui apparaît lorsque l'utilisateur fait défiler vers le bas 
        //  et disparaît lorsque le défilement est en haut de la page.
        if ($(window).scrollTop() > 500) {
            $('.scroll-up-btn').addClass("show");
        } else {
            $('.scroll-up-btn').removeClass("show");
        }
        
    });

    // slide-up script pour remonter au clic sure le petit 
    //bouton a droite qui a un logo de petite fleche
    $('.scroll-up-btn').click(function(){
        $('html, body').animate({scrollTop: 0}, 'slow');
    });
    
    
    //toggle menu/navbar script
    //pour la gestion du menu hamburger. affichage au clic
    //et fermeture aussi au clic
    $('.menu-btn').click(function(){
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });

    // typing animation script pour la gestion du texte qui change sur le header
    var typed = new Typed(".typing", {
        strings: ["AIAA", "D'automatisation avec L'Intelligence Artificielle."],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });
    var typed = new Typed(".typing-2", {
        strings: ["Univers Automation", " une Agence D'Automatisation avec L'Intelligence Artificielle."],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });


    // owl carousel script pour faire le slide de l'equipe
    $('.carousel').owlCarousel({
        margin: 20,
        loop: true,
        autoplayTimeOut: 2000,
        autoplayHoverPause: true,
        responsive:  {
            0:{
                items: 1,
                nav: false
            },
            600:{
                items: 2,
                nav: false
            },
            1000:{
                items: 3,
                nav: false
            }
        }
     });
});