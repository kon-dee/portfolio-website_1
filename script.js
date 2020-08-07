/*burger*/
const burger = document.querySelector(".burger");
const iconBurger = document.querySelector(".fa-bars");
const iconX = document.querySelector(".fa-times");
const column = document.querySelector("aside");


burger.addEventListener("click", function() {
    iconBurger.classList.toggle("show");
    iconX.classList.toggle("show");
    column.classList.toggle("show");
    
    
})


$('a').on('click', function () {
    $('body, html').animate({
        scrollTop: $('nav').offset().top
    }, 1000)
})

$('a.about').on('click', function () {
    $('body, html').animate({
        scrollTop: $('section.contact').offset().top

    }, 1000)
})

$('a.portfolio').on('click', function () {
    $('body, html').animate({
        scrollTop: $('section.portfolio').offset().top
    }, 1000)
})

$('a.contact').on('click', function () {
    $('body, html').animate({
        scrollTop: $('footer').offset().top
    }, 1000)
})

$('a.blog').on('click', function () {
    $('body, html').animate({
        scrollTop: $('section.goal').offset().top
    }, 1000)
})

$(document).on('scroll', function () {
    const $image = $(document.querySelectorAll('img'));
    const $chart = $('.container');
    const FromTopImg = $image.offset().top;
    const scrollNr = $(this).scrollTop();
    const imgHeight = $image.height();
    const windowHeight = $(window).height();
    const X = $(document.querySelectorAll('div.container :after '));

    if (scrollNr > FromTopImg + imgHeight - windowHeight) {
        $image.addClass('show');
        $chart.css("transform", "translateX(0)");
    } else {
        $image.removeClass('show');
        $chart.css("transform", "translateX(-100vw)");
        // $chart.css(function () {
        //     window.location.reload()
        // })

    }

})

$(document).on('scroll', function () {

    const $projects = $('.projects');
    const $projects2 = $('.projects2');
    const projectsFromTop = $projects.offset().top;

    const scrollNr = $(this).scrollTop();
    const projHeight = $projects.height();
    const windowHeight = $(window).height();

    if (scrollNr > projectsFromTop + projHeight - windowHeight) {
        $projects.addClass('active');
        $projects2.addClass('active');
    }
    if (scrollNr < 900) {
        $projects.removeClass('active');
        $projects2.removeClass('active');
    }
})
//pararemetrs
let activeElement = 0;

/*slider banner*/
const colorImages = ['img2/s1.png',
    'img2/s2.png', 'img2/s3.png'];
const grayImages = ['img2/s1a.png',
    'img2/s2a.png', 'img2/s3a.png'];
const professions = ['UX Designer',
    'Fron-End Developer', 'Back-End Developer'];
const devNames = ['Sandra',
    'Robert', 'Franek'];

const colorImageHtml = document.querySelector('.color');
const grayImageHtml = document.querySelector('.gray');
const h1html = document.querySelector('.member h1');
const h2html = document.querySelector('.member h2');

/*function declaration*/
function changeElement() {
    activeElement++;
    if(activeElement == 3) {
        activeElement = 0;
    }
    colorImageHtml.src = colorImages[activeElement];
    grayImageHtml.src = grayImages[activeElement];
    h1html.textContent = devNames[activeElement];
    h2html.textContent = professions[activeElement];
}

setInterval(changeElement, 5000)
 