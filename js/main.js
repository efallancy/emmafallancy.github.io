( function() {

console.log( "Hey! You've found me in the console." );
console.log( "There are a few projects that I made throughout my Web Development Immersive course, plus more which are not listed." );
console.log( "If you're interested in getting in touch with me:" );
console.log( "Email: emmanuel.fallancy@gmail.com" );
console.log( "Twitter: @fancyfallancy" );
console.log( "LinkedIn: linkedin.com/in/emmanuelfallancy" );

// image preload
var contactsImg = new Image();
var aboutImg = new Image();
var projectsImg = new Image();
contactsImg.src = "assets/images/contacts_1.gif";
aboutImg.src = "assets/images/about_1.gif";
projectsImg.src = "assets/images/projects_1.gif";

$( document ).ready( function() {

  // Contact me section
  $( ".span-contacts" ).hover( function() {

    $( "body" ).css( {
      "background-image": "url( 'assets/images/contacts_1.gif' )",
      "background-repeat": "no-repeat",
      "background-size": "100% 100%"
    } );

    $( ".span-contacts" ).css( "opacity", "1" );
    $( ".span-contacts a" ).css( {
      "font-size": "42px",
      "color": "#dcdcdc",
      "text-shadow": "2px 2px #000000",
      "font-style": "italic",
      "text-decoration": "none",
      "font-weight": "900"
    } );

    $( ".span-contacts a" ).html( "\"Coffee? Contact me.\"" );
    $( ".span-about" ).css( "opacity", "0" );
    $( ".span-projects" ).css( "opacity", "0" );
    $( ".span-linkedin" ).css( "opacity", "0" );
    $( ".span-opac" ).css( "opacity", "0" );
    $( ".nav a" ).css( {
      "font-weight": "900",
      "color": "#dcdcdc",
      "text-shadow": "2px 2px #000000",
    } );

  }, function() {
    $( "body" ).css( {
      "background-image": "",
      "background-repeat": "",
      "background-size": ""
    } );

    $( ".span-contacts a" ).html( "coffee and banana bread" );
    $( ".span-contacts a" ).css( {
      "font-size": "",
      "color": "",
      "text-shadow": "",
      "font-style": "",
      "text-decoration": "",
      "font-weight": ""
    } );
    $( ".span-about" ).css( "opacity", "1" );
    $( ".span-projects" ).css( "opacity", "1" );
    $( ".span-opac" ).css( "opacity", "1" );
    $( ".nav a" ).css( {
      "color": "",
      "font-weight": "",
      "text-shadow": ""
    } );

  } );

  // About section
  $( ".span-about" ).hover( function() {
    $( "body" ).css( {
      "background-image": "url( 'assets/images/about_1.gif' )",
      "background-repeat": "no-repeat",
      "background-size": "cover"
    } );

    $( ".span-about" ).css( "opacity", "1" );
    $( ".span-about a" ).css( {
      "font-size": "42px",
      "color": "#dcdcdc",
      "text-shadow": "2px 2px #000000",
      "font-style": "italic",
      "text-decoration": "none",
      "font-weight": "900"
    } );

    $( ".span-about a" ).html( "Get to know me." );
    $( ".span-contacts" ).css( "opacity", "0" );
    $( ".span-projects" ).css( "opacity", "0" );
    $( ".span-linkedin" ).css( "opacity", "0" );
    $( ".span-opac" ).css( "opacity", "0" );

    $( ".nav a" ).css( {
      "color": "#dcdcdc",
      "font-weight": "900",
      "text-shadow": "2px 2px #000000"
    } );

  }, function() {
    $( "body" ).css( {
      "background-image": "",
      "background-repeat": "",
      "background-size": ""
    } );

    $( ".span-about a" ).html( "Emmanuel" );
    $( ".span-about a" ).css( {
      "font-size": "",
      "color": "",
      "text-shadow": "",
      "font-style": "",
      "text-decoration": "",
      "font-weight": ""
    } );
    $( ".span-contacts" ).css( "opacity", "1" );
    $( ".span-projects" ).css( "opacity", "1" );
    $( ".span-opac" ).css( "opacity", "1" );

    $( ".nav a" ).css( {
      "color": "",
      "font-weight": "",
      "text-shadow": ""
    } );

  });

  // Projects section
  $( ".span-projects" ).hover( function() {
    $( "body" ).css( {
      "background-image": "url( 'assets/images/projects_1.gif' )",
      "background-repeat": "no-repeat",
      "background-size": "100% 100%"
    } );

    $( ".span-projects" ).css( "opacity", "1" );
    $( ".span-projects a" ).css( {
      "font-size": "42px",
      "color": "#dcdcdc",
      "text-shadow": "2px 2px #000000",
      "font-style": "italic",
      "text-decoration": "none",
      "font-weight": "900"
    } );

    $( ".span-projects a" ).html( "See my work." );
    $( ".span-contacts" ).css( "opacity", "0" );
    $( ".span-about" ).css( "opacity", "0" );
    $( ".span-linkedin" ).css( "opacity", "0" );
    $( ".span-opac" ).css( "opacity", "0" );

    $( ".nav a" ).css( {
      "color": "#ffffff",
      "font-weight": "900",
      "text-shadow": "2px 2px #000000"
    } );

  }, function() {
    $( "body" ).css( {
      "background-image": "",
      "background-repeat": "",
      "background-size": ""
    } );

    $( ".span-projects a" ).html( "Web Developer" );
    $( ".span-projects a" ).css( {
      "font-size": "",
      "color": "",
      "text-shadow": "",
      "font-style": "",
      "text-decoration": "",
      "font-weight": ""
    } );
    $( ".span-contacts" ).css( "opacity", "1" );
    $( ".span-about" ).css( "opacity", "1" );
    $( ".span-opac" ).css( "opacity", "1" );

    $( ".nav a" ).css( {
      "color": "",
      "font-weight": "",
      "text-shadow": ""
    } );

  });
});

})();
