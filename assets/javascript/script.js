let pageLocation = '';

$('.nav-link').click(function(e) {
    e.preventDefault();
    let id = $(this).attr('id');
    console.log(`Nav Link ID: ${id}`);
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
        $('body').css('background-image', 'url("./assets/images/background.jpg")');
    }if (boolean === false) {
        // don't show homepage
        $('body').css('background-image', 'none');
    }
}

function renderPage(page) {
    console.log(`page: ${page}`);
    if (page === 'about') {
        pageLocation = 'about';
        console.log(`Page Location: ${pageLocation}`);
        $('#body-container').css('display', 'block');
        $('#recent-work-container').css('display', 'none');
        $('#about-container').css('display', 'block');
    }
    else if (page === 'recent') {
        pageLocation = 'recent-work';
        console.log(`Page Location: ${pageLocation}`);
        $('#body-container').css('display', 'block');
        $('#recent-work-container').css('display', 'block');
        $('#about-container').css('display', 'none');
    }
}