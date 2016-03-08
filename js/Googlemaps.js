/**
 * Created by kikepieraserra on 01/03/2016.
 */
var myCenter=new google.maps.LatLng(51.445836, -0.963173);

function initialize()
{
    var mapProp = {
        center: myCenter,
        zoom:12,
        mapTypeId: google.maps.MapTypeId.ROADMAP
    };

    var map = new google.maps.Map(document.getElementById("googleMap"),mapProp);


    addMarker(51.450773, -0.956063, map, "Reading school", "7 Erleigh Rd", "RG1 5LW", "0118 901 5600", "Steve_kidscoding@hotmail.com");

    addMarker(51.446636, -0.948292, map, "St Josephs College", "Upper Redlands Rd", "RG1 5JT", "0118 966 1000", "Joe_kidscoding@hotmail.com");

    addMarker(51.448575, -0.963856, map, "The Abbey school", "17 Kendrick Rd", "RG1 5DZ", "0118 987 2256", "Amy_kidscoding@hotmail.com");

    addMarker(51.471171, -0.964309, map, "Queen Anne’s School", "6 Henley Rd", "RG4 6DX", "0118 918 7300", "John_kidscoding@hotmail.com");

    addMarker(51.457729, -1.057611, map, "Little Heath School", "Little Heath Rd", "RG31 5TY", "0118 942 7337", "Lorraine_kidscoding@hotmail.com");

    addMarker(51.441749, -0.947975, map, "University of Reading School of Systems Engineering", "The Queen's Dr", "RG6 6AY", "0118 378 7565", "Billy_kidscoding@hotmail.com");

    var icon = {
        url: '../images/location_icon.png',
        scaledSize: new google.maps.Size(50, 50) // scaled size
    };

    //Head office Marker
    var markerSchool = new google.maps.Marker({
        position: new google.maps.LatLng(51.454441, -0.968238),
        icon: icon
    });
    markerSchool.setMap(map);

    addInfoWindow(map, markerSchool, "Head Offices", "Dukesbridge House, 23 Duke Street", "RG1 4SA", "0118 901 5678", "Emilly_kidscoding@hotmail.com")

}

function addMarker(x, y, map, title, streetAddress, postcode, phone, email){
    var markerSchool1 = new google.maps.Marker({
        position: new google.maps.LatLng(x, y),
        title: title
    });

    markerSchool1.setMap(map);

    addInfoWindow(map, markerSchool1, title, streetAddress, postcode, phone, email);

}

function addInfoWindow(map, markerSchool1, title, streetAddress, postcode, phone, email){
    google.maps.event.addListener(markerSchool1, 'click', function() {

        var infowindow = new google.maps.InfoWindow();
        infowindow.setContent('<strong>' + title + '</strong><br />' +
            "Address: " +
                '<span class="street-address">' + streetAddress + '</span>' +
                '<span class="locality">' + " Reading" + '</span>' + "," +
                '<abbr class="region">' + " Berkshire" + '</abbr>' + ";" +
                '<span class="postal-code">' + " " + postcode + '</span>' + "," +
                '<span class="country-name">'+ " UK" + '</span>' +
            '<br />' +
            "Phone: " + '<a href="tel:+44' + phone + '">' + phone + '</a><br />' +
            "Email: " + '<a href="mailto:' + email + '">' + email + '</a>'
        );

        infowindow.open(map,markerSchool1);
    });
}


google.maps.event.addDomListener(window, 'load', initialize);