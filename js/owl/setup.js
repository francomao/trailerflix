var owl = $('.owl-carousel');
owl.owlCarousel({
    loop: true,
    nav: false,
    margin: 10,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 3
        },
        960: {
            items: 6
        },
        1200: {
            items: 6
        }
    }
});