console.log( "Hey! You've found me in the console." );
console.log( "There are a few projects that I made throughout my Web Development Immersive course, plus more which are not listed." );
console.log( "If you're interested in getting in touch with me:" );
console.log( "Email: emmanuel.fallancy@gmail.com" );
console.log( "Twitter: @fancyfallancy" );
console.log( "LinkedIn: linkedin.com/in/emmanuelfallancy" );

$( document ).ready( function() {

  $( ".span-contacts" ).hover( function() {

    $( "body" ).css( {
      "background-image": "url( 'assets/images/contacts_5.gif' )",
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
      "color": "#ffffff",
      "font-weight": "900",
      // "text-shadow": "2px 2px #000000",
      "background-color": "rgba( 0,0,0, 0.45)"
      // "text-decoration": "underline"
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
    $( ".span-linkedin" ).css( "opacity", "1" );
    $( ".span-opac" ).css( "opacity", "1" );
    $( ".nav a" ).css( {
      "color": "",
      "font-weight": "",
      "text-shadow": "",
      // "text-decoration": "",
      "background-color": "",
    } );

  } );

});
