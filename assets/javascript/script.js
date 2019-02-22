let pageLocation = '';
let mobileMenuRendered = false;
let header = document.getElementById("header-container");
let sticky = header.offsetTop;
let btnContainer = document.getElementById("nav-items");
let btns = btnContainer.getElementsByClassName("nav-link");


// $(document).ready(function () {
$(window).on("load",function(){
    // animates loader off screen
    $(".loading").fadeOut("slow");;
});

window.onscroll = function () {
    if(!mobileMenuRendered){
        stickyHeader();
    }else {
        return
    }
};

// sets header to fixed on Y axis scroll
stickyHeader = function() {
    if (window.pageYOffset > sticky) {
        header.classList.add("sticky");
        $('.pseudo-layer').css('display', 'inline-block');
    } else {
        header.classList.remove("sticky");
        $('.pseudo-layer').css('display', 'none');
    }
}

// shows menu 
$('.hamburger_click_me').click(function () {
    toggleMobileMenu();
});

// slides mobile menu in and out
function toggleMobileMenu() {
    if (mobileMenuRendered === false) {
        mobileMenuRendered = true;
        $(".main_navbar, .mobile-link").toggleClass('animate');
        $(".side_nav_menu").fadeIn("fast");
        lockScroll();
        $('.bar1, .bar2, .bar3').css('background-color', 'white');
        return
    } else if (mobileMenuRendered === true) {
        mobileMenuRendered = false;
        $(".main_navbar, .mobile-link").toggleClass('animate');
        $("#side_nav_menu").fadeOut("fast");
        lockScroll();
        $('.bar1, .bar2, .bar3').css('background-color', 'rgba(1, 1, 1, .9)');
        return
    }
}

// prevents/ enables Y-Scroll 
function lockScroll() {
    if (mobileMenuRendered) {
        $('body').addClass('lock-scroll');
        // $('#body-container').addClass('lock-scroll');
    } else if (window.screen.width <= 734) {
        $('body').addClass('lock-scroll');
        // $('#body-container').addClass('lock-scroll');
    } else if ($('body').hasClass('lock-scroll')) {
        $('body').removeClass('lock-scroll');
        // $('#body-container').removeClass('lock-scroll');
    }
}


// changes page content based on nav click
$(function () {
    $('.mobile-link').on('click', function (e) {
        e.preventDefault();
        toggleMobileMenu();
        //hide nav menu
        $('#main_navbar').removeClass('show');
        $('#main_navbar').addClass('hidden');
        //remove opacity screen
        $('#full_page_opacity_screen').removeClass('show');
        $('#full_page_opacity_screen').addClass('hidden')
        //for mobile view, hide menu when link is clicked
        if (window.matchMedia("(max-width: 768px)").matches) {
            $('#nav').removeClass('show');
        }
    })
});

// grabs id of links clicked/ calls renderPage with param
$('.nav-link, .mobile-link').click(function (e) {
    e.preventDefault();
    let id = $(this).attr('id');
    switch (true) {
        case (id === 'home'):
            homepageCheck(true);
            $('#body-container').css('display', 'none');
            break;
        case (id === 'about'):
            homepageCheck(false)
            renderPage('about');
            break;
        case (id === 'recent-work'):
            homepageCheck(false);
            renderPage('recent');
            break;
        case (id === 'contact'):
            homepageCheck(false);
            renderPage('contact');
            break;
    }
})


// shows/ hides homepage background image
function homepageCheck(boolean) {
    if (boolean === true) {
        // show homepage
        $('body').css('background-color', 'black');
        $('body').css('background-image', 'url("./assets/images/bg-view.jpeg")');
        $('#header-container').css('background-color', 'rgba(53, 59, 72, 0.5)');
    }
    if (boolean === false) {
        // don't render homepage background image
        $('body').css('background-image', 'none');
        $('body').css('background-color', 'white');
        $('.cd-intro').css('display', 'none');
        $('#header-container').css('background-color', 'rgba(86,96,117,0.8)');
    }
}

// accept param, updates 'page' displayed in body container
function renderPage(page) {
    if (page === 'about') {
        pageLocation = 'about';
        $('#body-container').css('display', 'block');
        $('#recent-work-container').css('display', 'none');
        $('#about-container').css('display', 'block');
        $('#contact-container').css('display', 'none');
    } else if (page === 'recent') {
        pageLocation = 'recent-work';
        $('#body-container').css('display', 'block');
        $('#recent-work-container').css('display', 'block');
        $('#about-container').css('display', 'none');
        $('#contact-container').css('display', 'none');
    } else if (page === 'contact') {
        pageLocation = 'contact';
        $('#body-container').css('display', 'block');
        $('#recent-work-container').css('display', 'none');
        $('#about-container').css('display', 'none');
        $('#contact-container').css('display', 'block');
    }
}

// adds active class to links when clicked
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function() {
    var current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
  });
}