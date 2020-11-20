// $('.owl-carousel').owlCarousel({
//     loop:true,
//     margin: 10,
//     nav: true,
//     dots: false,
//     navText:
//        ["<div class='nav-btn prev-slide'></div>","<div class='nav-btn next-slide'></div>"],
//     responsive:{
//         0:{
//             items: 1,
//             nav: true
//         },
//         600:{
//             items: 3,
//             nav: true
//         },
//         1000:{
//             items: 4
//         }
//     }
// })



let icon = document.querySelector('#icon-menu');
let menu = document.querySelector('#menu');
let span = $('.icon span');

icon.addEventListener('click', function () {
    $(menu).fadeToggle('menu-active');
    $(span).toggleClass('span-active');
})

/* Smooth scrolling para anclas */
$("a.smooth").on("click", function (e) {
    e.preventDefault();
    var $link = $(this);
    var anchor = $link.attr("href");
    $("html, body").stop().animate({
        scrollTop: $(anchor).offset().top - 100 + "px"
    }, 1000);
});
// Funcion para barra de Menu
$(window).scroll(function () {
    let header = $(".navbar");
    if ($(".navbar").offset().top > 500) {
        $(header).css("background", "#fff");
        $('.navbar img').fadeIn();
    } else {
        // $(".navbar").addClass("navbar-expand-lg");
        $(header).css("background", "transparent");
        $('.navbar img').fadeOut()
    }
});

var URLactual = window.location;

if (URLactual == 'http://127.0.0.1:5500/heroes-hero.html') {
  
    let icon = document.querySelectorAll('#icon-menu span');
    icon.forEach(element => {
        element.style.background = "#fff"
    });

    let links = document.querySelectorAll('.smooth');
        links.forEach(element => {
        element.style.color = "#f9f9f9"
        })
    
    let logo = document.querySelector('.logo').style.display = "block";
    let barra = document.querySelector('.heroes').style.background = "#000"
    
    $(window).scroll(function () {  
        if ($(".navbar").offset().top > 500) {
            icon.forEach(element => {
            element.style.background = "#000"
        });
        } else {
            icon.forEach(element => {
                element.style.background = "#fff";
        });        
        }
    });
}

let parrafo  = document.querySelector('.carousel-item p');
primera = parrafo.split(' . ')[0];

console.log(primera)


