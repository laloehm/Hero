$('.owl-carousel').owlCarousel({
    loop:true,
    margin: 10,
    nav: true,
    dots: false,
    navText:
       ["<div class='nav-btn prev-slide'></div>","<div class='nav-btn next-slide'></div>"],
    responsive:{
        0:{
            items: 1,
            nav: true
        },
        600:{
            items: 3,
            nav: true
        },
        1000:{
            items: 4
        }
    }
})