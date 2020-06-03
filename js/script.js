$(function() {
    const
        links = $('.menu-bar__link'),
        brand = $('.menu-bar__brand'),
        inicio = $('#inicio'),
        menuBar = $('.menu-bar'),
        biografia = $('#biografia'),
        proyectos = $('#proyectos'),
        social = $('#social');
    /*
    
        btnBars = $('.navbar-bars'),
        navbar = $('.navbar'),
        btnBars.on('click', function(e) {
        e.preventDefault();
        navbar.toggleClass('hidden');
    });
    */
    brand.on('click', function() {
        itemScroll(inicio);
    });
    links.on('click', function(e) {
        e.preventDefault();
        if ($(this).text() == 'Biografía') {
            itemScroll(biografia);
        } else if ($(this).text() == 'Proyectos') {
            itemScroll(proyectos);
        } else if ($(this).text() == 'Redes Sociales') {
            itemScroll(social);
        } else if ($(this).text() == 'Inicio') {
            itemScroll(inicio);
        }
    });

    function itemScroll(item) {
        $('html, body').animate({
            scrollTop: item.offset().top
        }, 900);
    }
    AOS.init({
        duration: 1300,
    });
})