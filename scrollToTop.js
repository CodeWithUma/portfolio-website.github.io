$(document).ready(function () {
    // When the user scrolls down 20px from the top of the document, show the button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 20) {
            $('#scrollTopBtn').fadeIn();
        } else {
            $('#scrollTopBtn').fadeOut();
        }
    });

    // When the user clicks on the button, scroll to the top of the document
    $('#scrollTopBtn').click(function () {
        // $('html, body').animate({ scrollTop: 0 }, 300);
        $('html, body').animate({ scrollTop: 0 }, 300, 'linear'); // Try 'linear' for a constant speed
        return false;
    });
});

