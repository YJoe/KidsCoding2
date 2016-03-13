$(function() {
    var mynavbar = $("#navbar"); //cache it
    $.get("Navbar.html")
        .done(function( data ) {
            mynavbar.html(data);

            // remove any current active if found in markup:
            mynavbar.find('ul.nav li').removeClass('active');

            var url = window.location.href;// get location

            // add the active class to current url detected href
            // Will work for absolute hrefs, might have to adjust for others
            mynavbar.find('ul.nav li').find('a').filter(function() {
                return (url.indexOf(this.href) != -1);
            }).parent().addClass('active');


        });

    // put the click handler for the navigation in place
    mynavbar.on('click', 'ul.nav li', function() {
        var myhref = $(this).find('a').attr('href');
        alert("proceed to: " + myhref);
        window.location = myhref;
    });
});
