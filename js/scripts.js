// green bar under navigation menu

$('ul#desktop-menu > li > a').mouseenter(function() {
    $(this).children('hr').css('display','block');
    $(this).children('hr').animate({
        width: '100%'
    });
});
$('ul#desktop-menu > li > a').mouseleave(function() {
    $(this).children('hr').stop();
    $(this).children('hr').css('width', '0');
    $(this).children('hr').css('display','none');
});

// buttons

$('.btn-more').mouseenter(function() {
    $(this).css('background-color','#5ab438');
});
$('.btn-more').mouseleave(function() {
    $(this).css('background-color','#00adef');
});

$('.generator-button').mouseenter(function() {
    $(this).css('background-color','#5ab438');
    $(this).css('color','#ffffff');
});
$('.generator-button').mouseleave(function() {
    $(this).css('background-color','buttonface');
    $(this).css('color','gray');
});

// links

$('ul.wyniki>li>a').mouseenter(function() {
    $(this).css('text-decoration','underline');
});
$('ul.wyniki>li>a').mouseleave(function() {
    $(this).css('text-decoration','none');
});

// sticky navigation menu during scrolling

window.onscroll = function() {
    stickNavi()
};
var navig = document.getElementById("navi");
var sticky = navig.offsetTop;

function stickNavi() {
    if (window.pageYOffset >= sticky) {
        navig.classList.add("sticky");
        document.getElementById("first-content").classList.add("under-sticky");
    } else {
        navig.classList.remove("sticky");
        document.getElementById("first-content").classList.remove("under-sticky");
    }
}

// smooth scrolling

$('a[href*="#"]') // Select all links with hashes
    .not('[href="#"]') // Remove links that don't actually link to anything
    .not('[href="#0"]')
    .click(function(event) {
        if ( // On-page links
            location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') &&
            location.hostname == this.hostname
        ) { // Figure out element to scroll to
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) { // Does a scroll target exist?
                event.preventDefault(); // Only prevent default if animation is actually gonna happen
                $('html, body').animate({
                    scrollTop: target.offset().top
                }, 1000, function() {
                    // Callback after animation
                    // Must change focus!
                    var $target = $(target);
                    $target.focus();
                    if ($target.is(":focus")) { // Checking if the target was focused
                        return false;
                    } else {
                        $target.attr('tabindex', '-1'); // Adding tabindex for elements not focusable
                        $target.focus(); // Set focus again
                    };
                });
            }
        }
    });

// scrolling spy

$('body').scrollspy({
    target: '#navi',
    offset: 150
});

// google maps

function myMap() {
    var mapProp1 = {
        center: new google.maps.LatLng(54.472483, 18.496746),
        zoom: 14,
        zoomControl: true,
        scaleControl: true
    };
    var mapProp2 = {
        center: new google.maps.LatLng(54.364344, 18.604787),
        zoom: 14,
        zoomControl: true,
        scaleControl: true
    };
    var mapProp3 = {
        center: new google.maps.LatLng(54.567340, 18.412987),
        zoom: 14,
        zoomControl: true,
        scaleControl: true
    };
    var map1 = new google.maps.Map(document.getElementById("googleMap1"), mapProp1);
    var marker1 = new google.maps.Marker({
        position: new google.maps.LatLng(54.470383, 18.496746),
        icon: "img/favicon.ico",
        animation: google.maps.Animation.BOUNCE,
        map: map1,
        title: 'LABANA'
    });
    var infowindow1 = new google.maps.InfoWindow({
        content: "<span style='font-size: 70%'>parking przed budynkiem<br>przystanek - 100m<br>obok Tino Pizza</span>"
    });
    infowindow1.open(map1,marker1);
    var map2 = new google.maps.Map(document.getElementById("googleMap2"), mapProp2);
    var marker2 = new google.maps.Marker({
        position: new google.maps.LatLng(54.362244, 18.604787),
        icon: "img/favicon.ico",
        animation: google.maps.Animation.BOUNCE,
        map: map2,
        title: 'LABANA'
    });
    var infowindow2 = new google.maps.InfoWindow({
        content: "<span style='font-size: 70%'>parking przed budynkiem<br>przystanek - 150m<br>centrum zdrowia SWISSMED</span>"
    });
    infowindow2.open(map2,marker2);
    var map3 = new google.maps.Map(document.getElementById("googleMap3"), mapProp3);
    var marker3 = new google.maps.Marker({
        position: new google.maps.LatLng(54.565240, 18.412987),
        icon: "img/favicon.ico",
        animation: google.maps.Animation.BOUNCE,
        map: map3,
        title: 'LABANA'
    });
    var infowindow3 = new google.maps.InfoWindow({
        content: "<span style='font-size: 70%'>parking przed budynkiem<br>przystanek - 50m<br>obok przychodnia</span>"
    });
    infowindow3.open(map3,marker3);
}

// animate on scroll library

AOS.init({
    disable: window.innerWidth < 769
});

// form validation

$('#generator-zgody').submit(function() {
    if ($.trim($("#nazwa").val()) === "" || $.trim($("#email").val()) === "" || $.trim($("#pesel").val()) === "" || $.trim($("#miejscowosc").val()) === "") {
        var alert_text = "Nie podano następujących elementów: ";
        if ($.trim($("#nazwa").val()) === "") alert_text += "imię i&nbsp;nazwisko, ";
        if ($.trim($("#email").val()) === "") alert_text += "adres e-mail, ";
        if ($.trim($("#pesel").val()) === "") alert_text += "PESEL, ";
        if ($.trim($("#miejscowosc").val()) === "") alert_text += "miejscowość. ";
        alert_text = alert_text.substring(0, alert_text.length - 2);
        alert_text += ".";
        $('#generator-warning').html(alert_text);
        return false;
    }
});

// mobile menu

$( "#hamburger" ).click(function() {
  $( "#mobile-menu" ).slideToggle( "slow", function() {
  });
});
$( "#menu" ).click(function() {
  $( "#mobile-menu" ).slideToggle( "slow", function() {
  });
});
$( "#mobile-menu" ).click(function() {
  $( "#mobile-menu" ).slideToggle( "slow", function() {
  });
});
