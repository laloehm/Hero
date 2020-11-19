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

//global variables
var items = [];
var startItem = 1;
var position = 0;
var itemCount = $('.box-carousel .carousel li.items').length;
var leftpos = itemCount;
var resetCount = itemCount;

//unused: gather text inside items class
$('.box-carousel li.items').each(function (index) {
    items[index] = $(this).text();
});

//swap images function
function swapp(action) {
    var direction = action;

    //moving carousel backwards
    if (direction == 'counter-clockwise') {
        var leftitem = $('.box-carousel .left-pos').attr('id') - 1;
        if (leftitem == 0) {
            leftitem = itemCount;
        }

        $('.box-carousel .right-pos').removeClass('right-pos').addClass('back-pos');
        $('.box-carousel .main-pos').removeClass('main-pos').addClass('right-pos');
        $('.box-carousel .left-pos').removeClass('left-pos').addClass('main-pos');
        $('#' + leftitem + '').removeClass('back-pos').addClass('left-pos');

        startItem--;
        if (startItem < 1) {
            startItem = itemCount;
        }
    }

    //moving carousel forward
    if (direction == 'clockwise' || direction == '' || direction == null) {
        function pos(positionvalue) {
            if (positionvalue != 'leftposition') {
                //increment image list id
                position++;

                //if final result is greater than image count, reset position.
                if ((startItem + position) > resetCount) {
                    position = 1 - startItem;
                }
            }

            //setting the left positioned item
            if (positionvalue == 'leftposition') {
                //left positioned image should always be one left than main positioned image.
                position = startItem - 1;

                //reset last image in list to left position if first image is in main position
                if (position < 1) {
                    position = itemCount;
                }
            }

            return position;
        }

        $('#' + startItem + '').removeClass('main-pos').addClass('left-pos');
        $('#' + (startItem + pos()) + '').removeClass('right-pos').addClass('main-pos');
        $('#' + (startItem + pos()) + '').removeClass('back-pos').addClass('right-pos');
        $('#' + pos('leftposition') + '').removeClass('left-pos').addClass('back-pos');

        startItem++;
        position = 0;
        if (startItem > itemCount) {
            startItem = 1;
        }
    }
}

//next button click function
$('#next').click(function () {
    swapp('clockwise');
});

//prev button click function
$('#prev').click(function () {
    swapp('counter-clockwise');
});

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


