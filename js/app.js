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
    if ($(".navbar").offset().top > 400) {
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

// Carousel causas

$('.owl-carousel').owlCarousel({
    loop: true,
    margin: 10,
    responsiveClass: true,
    responsive: {
        0: {
            items: 1,
            nav: true,
            dots: false
        },
        767: {
            items: 3,
            nav: true,
            dots: false
        },
        1000: {
            items: 3,
            nav: true,
            dots: false
        }
    }
})

if (screen.width < 767) {
    let next = $('.owl-next');
    let prev = $('.owl-prev');
    let activo = $('.owl-item.active');
    $(activo[0]).css({'transform':'scale(.9)', 'opacity': 1 });

    $(next).on('click', function () {
        let activos = $('.owl-item.active');
        $(activos[0]).css({ 'transform': 'scale(.9)', 'opacity': 1 });
    });
    $(prev).on('click', function () {
        let activos = $('.owl-item.active');
        $(activos[0]).css({'transform':'scale(.9)', 'opacity': 1 });
    })
} else if (screen.width < 1024){
    let next = $('.owl-next');
    let prev = $('.owl-prev');
    let activo = $('.owl-item.active');
    $(activo[0]).css({'transform':'scale(1)', 'opacity': 1 });

    $(next).on('click', function () {
        let activos = $('.owl-item.active');
        $(activos[0]).css({'transform':'scale(1)', 'opacity': 1 });
    });
    $(prev).on('click', function () {
        let activos = $('.owl-item.active');
        $(activos[0]).css({'transform':'scale(1)', 'opacity': 1 });
    })
    
}
else {
        let next = $('.owl-next');
        let prev = $('.owl-prev');
        let activo = $('.owl-item.active');
        $(activo).css({ 'transform': 'scale(.75)', 'opacity': .2 });
        $(activo[1]).css({'transform':'scale(1.1)', 'opacity': 1 });
        let name = $('.owl-item.active .name');
        $(name[1]).css('display', 'flex');

        $(next).on('click', function () {
            let activos = $('.owl-item.active');
            let name = $('.owl-item.active .name');
            $(activos).css({'transform' : 'scale(.75)','opacity' : .2});
            $(activos[1]).css({'transform':'scale(1.1)', 'opacity': 1 });
            $(name).css('display', 'none')
            $(name[1]).css('display', 'flex');
            console.log(activos)
        });
        $(prev).on('click', function () {
            let activos = $('.owl-item.active');
            let name = $('.owl-item.active .name');
            $(activos).css({'transform' : 'scale(.75)','opacity' : .2});
            $(activos[1]).css({'transform':'scale(1.1)', 'opacity': 1 });
            $(name).css('display', 'none')
            $(name[1]).css('display', 'flex');
            console.log(activos)
        })
}
    
// let btnmodalpromocion = document.querySelector('#btnmodalpromocion img');

// btnmodalpromocion.addEventListener('clic', ()=> {
//     document.querySelector('#modalPromocion').style.display = 'none'
// })
     