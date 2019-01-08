let pageLocation = '';
let mobileMenuRendered = false;
let header = document.getElementById("header-container");
let sticky = header.offsetTop;

var intFrameWidth = window.innerWidth;


$(document).ready(function () {
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
function stickyHeader() {
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
        $(".main_navbar").toggleClass('animate');
        $(".side_nav_menu").fadeIn("fast");
        lockScroll();
        return
    } else if (mobileMenuRendered === true) {
        mobileMenuRendered = false;
        $(".main_navbar").toggleClass('animate');
        $("#side_nav_menu").fadeOut("fast");
        lockScroll();
        return
    }
}

// prevents/ enables Y-Scroll 
function lockScroll() {
    if (mobileMenuRendered) {
        $('body').addClass('lock-scroll');
        $('#body-container').addClass('lock-scroll');
    } else if (window.screen.width <= 734) {
        $('body').addClass('lock-scroll');
        $('#body-container').addClass('lock-scroll');
    } else if ($('body').hasClass('lock-scroll')) {
        $('body').removeClass('lock-scroll');
        $('#body-container').removeClass('lock-scroll');
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
        case (id === 'background'):
            homepageCheck(false)
            renderPage('background');
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
        $('body').css('background-image', 'url("https://images.unsplash.com/photo-1478031706604-bb4b7b0b4e9e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80")');
    }
    if (boolean === false) {
        // don't show homepage background image
        $('body').css('background-image', 'none');
        $('body').css('background-color', 'white');
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