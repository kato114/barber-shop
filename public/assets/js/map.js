var locations = [
    [
        '<div class="infobox"><div class="infoboxtext"><img class="img-responsive alignleft" src="upload/office_01.png" alt=""><h3><a href="#"> Envato INC 22 Elizabeth St.</a></h3></div><a class="btn btn-primary btn-block" href="#">90 987 654 32 10</a></div>',
        -33.890294,
        151.274737,
        1,
    ],
    [
        '<div class="infobox"><div class="infoboxtext"><img class="img-responsive alignleft" src="upload/office_01.png" alt=""><h3><a href="#"> Envato INC 22 Elizabeth St.</a></h3></div><a class="btn btn-primary btn-block" href="#">90 987 654 32 10</a></div>',
        -33.890254,
        151.276737,
        2,
    ],
    [
        '<div class="infobox"><div class="infoboxtext"><img class="img-responsive alignleft" src="upload/office_01.png" alt=""><h3><a href="#"> Envato INC 22 Elizabeth St.</a></h3></div><a class="btn btn-primary btn-block" href="#">90 987 654 32 10</a></div>',
        -33.890254,
        151.272737,
        3,
    ],
];

var map = new google.maps.Map(document.getElementById("map"), {
    zoom: 18,
    scrollwheel: false,
    navigationControl: true,
    mapTypeControl: false,
    scaleControl: false,
    draggable: true,
    styles: [
        {
            featureType: "administrative",
            elementType: "labels.text.fill",
            stylers: [
                {
                    color: "#444444",
                },
            ],
        },
        {
            featureType: "landscape",
            elementType: "all",
            stylers: [
                {
                    color: "#f2f2f2",
                },
            ],
        },
        {
            featureType: "poi",
            elementType: "all",
            stylers: [
                {
                    visibility: "off",
                },
            ],
        },
        {
            featureType: "road",
            elementType: "all",
            stylers: [
                {
                    saturation: -100,
                },
                {
                    lightness: 45,
                },
            ],
        },
        {
            featureType: "road.highway",
            elementType: "all",
            stylers: [
                {
                    visibility: "simplified",
                },
            ],
        },
        {
            featureType: "road.arterial",
            elementType: "labels.icon",
            stylers: [
                {
                    visibility: "off",
                },
            ],
        },
        {
            featureType: "transit",
            elementType: "all",
            stylers: [
                {
                    visibility: "off",
                },
            ],
        },
        {
            featureType: "water",
            elementType: "all",
            stylers: [
                {
                    color: "#bd613f",
                },
                {
                    visibility: "on",
                },
            ],
        },
    ],
    center: new google.maps.LatLng(-33.890294, 151.274737),
    mapTypeId: google.maps.MapTypeId.ROADMAP,
});

var infowindow = new google.maps.InfoWindow();

var marker, i;

for (i = 0; i < locations.length; i++) {
    marker = new google.maps.Marker({
        position: new google.maps.LatLng(locations[i][1], locations[i][2]),
        map: map,
        icon: "images/marker.png",
    });

    google.maps.event.addListener(
        marker,
        "click",
        (function (marker, i) {
            return function () {
                infowindow.setContent(locations[i][0]);
                infowindow.open(map, marker);
            };
        })(marker, i)
    );
}
