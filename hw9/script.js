let urlAPI = 'https://itunes.apple.com/search';
let $carousel = $('#carousel');
let $carouselWrapper = $carousel.find('.carousel-inner');

// disable autoplay for the carousel
$carousel.carousel({interval: 0});

// add event on click 'previous' button of carousel
$carousel.on('click', '.carousel-control-prev', function (e) {
    e.preventDefault();
    $carousel.carousel('prev');
    $carouselWrapper.find('video').trigger('pause');
    setTimeout(() => $carouselWrapper.find('.active video').trigger('play'), 1000);
});

// add event on click 'next' button of carousel
$carousel.on('click', '.carousel-control-next', function (e) {
    e.preventDefault();
    $carousel.carousel('next');
    $carouselWrapper.find('video').trigger('pause');
    setTimeout(() => $carouselWrapper.find('.active video').trigger('play'), 1000);
});

// add event on click 'submit' button of search form
$('#search-form').on('submit', function (e) {
    e.preventDefault();
    let query = $(this).find('#search-term').val();
    $carouselWrapper.empty();
    getVideo(urlAPI, query);
});

// make ajax request
function getVideo(url, term) {
    $.ajax({
        url,
        method: 'GET',
        dataType: 'json',
        data: `limit=10&entity=musicVideo&term=${term}`,
        success(data) {
            data.results.forEach(item => createSlide($carouselWrapper, item));
            $carouselWrapper.find('.carousel-item').first().addClass('active');
        },
        error(error) {
            console.log(error)
        }
    })
}

// create new carousel item element
function createSlide(carousel, data) {
    let slide = $('<div></div>')
        .addClass('carousel-item')
        .appendTo(carousel);

    $('<video></video>')
        .attr('controls', 'controls')
        .attr('src', data.previewUrl)
        .attr('poster', data.artworkUrl)
        .appendTo(slide);
}
