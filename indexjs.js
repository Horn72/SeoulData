$('.card-picture').on('click', function(){
    event.preventDefault();
    $('.black-bg').addClass('show-modal')
})

$('.black-bg').on('click', function(){
    $('.black-bg').removeClass('show-modal');
});

$('.slide-2').on('click', function(){
    $('.slide-container').css('transform', 'translateX(-1200px)');
})

$('.slide-3').on('click', function(){
    $('.slide-container').css('transform', 'translateX(-2400px)');
})

$('.slide-1').on('click', function(){
    $('.slide-container').css('transform', 'translateX(0px)');
})

$(window).on('scroll', function(){
    console.log($(window).scrollTop())
})