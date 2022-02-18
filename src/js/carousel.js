$(document).ready(function(){
    $('.carousel__inner').slick(
        {
            autoplay: false,
            autoplaySpeed: 2000,
            prevArrow: '<button type="button" class="slick-prev"><img src="icons/carousel/prev.png"></img></button>',
            nextArrow: '<button type="button" class="slick-next"><img src="icons/carousel/next.png"></img></button>',

            responsive: [
                {
                  breakpoint: 1024,
                  settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                  }
                },
                {
                  breakpoint: 600,
                  settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                  }
                },
                {
                  breakpoint: 480,
                  settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                  }
                }

              ]
        }
    );
  });