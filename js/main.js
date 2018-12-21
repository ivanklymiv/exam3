$(document).ready(function(){
  $('.slider').slick({
   "slidesToShow": 1, "slidesToScroll": 1,
   infinite: true,
   dots: true,
   arrows: true,
   autoplay: true,
   autoplaySpeed: 6000,
   slide: 'img',
   responsive: [
    {
      breakpoint: 768,
      settings: {
        arrows: false,
      }
    },
  ]
  });

  $('.slider2').slick({
   "slidesToShow": 3, "slidesToScroll": 1,
   infinite: true,
   dots: false,
   autoplay: true,
   autoplaySpeed: 4000,
   slide: 'div',
   responsive: [
    {
      breakpoint: 768,
      settings: {
        arrows: false,
        dots: false,
        slidesToShow: 1
      }
    },
  ]
  });

  $("#back2Top").click(function(event) {
        event.preventDefault();
        $("html, body").animate({ scrollTop: 0 }, "slow");
        return false;
    });
});

$(window).scroll(function() {
    var height = $(window).scrollTop();
    if (height > 100) {
        $('#back2Top').fadeIn();
    } else {
        $('#back2Top').fadeOut();
    }
});


function initMap() {
        // Styles a map in night mode.
        var map = new google.maps.Map(document.getElementById('map'), {
          center: {lat: -34.397, lng: 150.644},
          zoom: 8,
          disableDefaultUI: true
        });

    marker = new google.maps.Marker({
		  map: map,
		  draggable: false,
		  icon: "img/marker.svg",
		  animation: google.maps.Animation.DROP,
		  position: {lat: -34.397, lng: 150.644}
		});
}   

initMap();




//# sourceMappingURL=../sourcemaps/main.js.map

//# sourceMappingURL=../sourcemaps/main.js.map
