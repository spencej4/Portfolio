let pageLocation = '';
let mobileMenuRendered = false;


// shows menu 
$('.hamburger_click_me').click(function() {
    console.log('hamburger clicked');
    toggleMobileMenu();
});

function toggleMobileMenu() {
    if (mobileMenuRendered === false){
        mobileMenuRendered = true;
        // $("#main_navbar").animate({
        //     width: "toggle"
        // });
        $(".main_navbar").toggleClass('animate');

        // original
        // $("#main_navbar").animate({left: '0px'});
        $(".side_nav_menu").fadeIn( "fast");
        return
    } 
    else if (mobileMenuRendered === true){
        mobileMenuRendered = false;
        // $("#main_navbar").animate({width: "toggle"});
        $(".main_navbar").toggleClass('animate');

        // original
        // $("#main_navbar").animate({left: '-290px'});
        $("#side_nav_menu").fadeOut( "fast");
        return
        // $("#side_nav_menu").removeClass('slideLeft')
        // $("#full_page_opacity_screen").css('display', 'none');
    }
}

// changes page content based on nav click
    $(function() {
        $('.mobile-link').on('click', function(e) {
            e.preventDefault();
            toggleMobileMenu();
            //hide nav menu
            $('#main_navbar').removeClass('show');
            $('#main_navbar').addClass('hidden');
            //remove opacity screen
            $('#full_page_opacity_screen').removeClass('show');
            $('#full_page_opacity_screen').addClass('hidden')
            //for mobile view, hide menu when link is clicked
            if (window.matchMedia("(max-width: 768px)").matches){
                $('#nav').removeClass('show');
            }
        })
    });

$('.nav-link, .mobile-link').click(function(e) {
    e.preventDefault();
    let id = $(this).attr('id');
    switch(true) {
        case (id ==='home'):
            homepageCheck(true);
            $('#body-container').css('display', 'none');
            break
        case (id === 'about'):
            homepageCheck(false)
            renderPage('about');
            break
        case (id === 'recent-work'):
            homepageCheck(false);
            renderPage('recent');
            break
    }
})

function homepageCheck(boolean) {
    if (boolean === true) {
        // show homepage
        $('body').css('background-image', 'url("https://images.unsplash.com/photo-1478031706604-bb4b7b0b4e9e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80")');
    }if (boolean === false) {
        // don't show homepage
        $('body').css('background-image', 'none');
    }
}

function renderPage(page) {
    if (page === 'about') {
        pageLocation = 'about';
        $('#body-container').css('display', 'block');
        $('#recent-work-container').css('display', 'none');
        $('#about-container').css('display', 'block');
    }
    else if (page === 'recent') {
        pageLocation = 'recent-work';
        $('#body-container').css('display', 'block');
        $('#recent-work-container').css('display', 'block');
        $('#about-container').css('display', 'none');
    }
}

