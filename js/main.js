( function() {
  var displayAboutMe = function() {
    $( "#aboutme" ).on( "click", function() {
      var content = $( ".content" );
      content.html( "" ); // Clear the content before appending info to it

      var context = $( "<div></div>" ).addClass( "context" ).html( "<p>Hi there and hello!</p><p>Just recently, I finished my Web Development (Immersive) Course at General Assembly in Sydney. I am on the hunt for an adventure in my career as a Web Developer.</p><p>I have a background in software testing and used to be a consultant that heavily focus on programming. Weird ey? I joined Quintiq as a Test Engineer and later transition into an Application Consultant (the one that I mentioned before), due to my joyful excitement in programming.</p><p>Nonetheless, I have passion in Web Development and therefore decided to go on an adventure to pursue on a role as Web Developer.</p><p>I have a deep interest in big data and machine learning. I love to tinker with technology in my spare time and outside of coding, I enjoy strong coffees with toasted banana bread!</p>");

      $( ".content" ).append( context )
    } );
  };

  var displayProjects = function() {
    $( "#projects" ).on( "click", function() {
      var content = $( ".content" );
      content.html( "" ); // Clear the content before appending info to it

      var context = $( "<div></div>" ).addClass( "context" );
      var projectdetails = $( "<div></div>" ).addClass( "project-details" );

      var message = $( "<p></p>" ).html( "Oops! Still under maintenance and will be ready soon!" );

      var notes = $( "<p></p>" ).html( "For projects related, you can go check out my github in my github profile by navigating to contacts section and click on Github." );

      projectdetails.append( message );
      projectdetails.append( notes );
      context.append( projectdetails );
      content.append( context );
    } );
  };

  var displayContacts = function() {
    $( "#contacts" ).on( "click", function() {
      var content = $( ".content" );
      content.html( "" ); // Clear the content before appending info to it

      var contactdetails = $( "<div></div>" ).addClass( "contact-details" );

      var message = $( "<p></p>" ).html( "Let's get in touch and have a chat." );

      var githublink = '<a href="https://github.com/emmafallancy" target="_blank">Github</a>';
      var github = $( "<button></button>" ).html( githublink );

      var linkedinlink = '<a href="https://linkedin.com/in/emmanuelfallancy" target="_blank">LinkedIn</a>'
      var linkedin = $( "<button></button>" ).html( linkedinlink );

      contactdetails.append( message );
      contactdetails.append( github );
      contactdetails.append( $( "<br>" ) );
      contactdetails.append( linkedin );

      var context = $( "<div></div>" ).addClass( "context" );

      context.append( contactdetails );
      content.append( context );

    } );
  };

  var displayGreeting = function() {
    var content = $( ".content" );
    content.html( "" ); // Clear the content before appending info to it

    var date = new Date();
    currentDate = date.getDate();
    currentHours = date.getHours();

    var month = date.getMonth();
    var monthStr = "";

    var year = date.getUTCFullYear();

    switch( month ) {
      case 0:
        monthStr = "Jan";
        break;
      case 1:
        monthStr = "Feb";
        break;
      case 2:
        monthStr = "Mar";
        break;
      case 3:
        monthStr = "Apr";
        break;
      case 4:
        monthStr = "May";
        break;
      case 5:
        monthStr = "Jun";
        break;
      case 6:
        monthStr = "Jul";
        break;
      case 7:
        monthStr = "Aug";
        break;
      case 8:
        monthStr = "Sep";
        break;
      case 9:
        monthStr = "Oct";
        break;
      case 10:
        monthStr = "Nov";
        break;
      case 11:
        monthStr = "Dec";
        break;
      default:
        monthStr = "Something is wrong";
        break;
    }

    var greetings = $( "<div></div>" ).addClass( "greetings" );

    if( currentHours > 0 && currentHours < 6 ) {

      var firstMessage = $( "<p></p>" ).html( "Oh, hello there! You're awake." );

      var secondMessage = $( "<p></p>" ).html( "It's " + currentDate + " " + monthStr + " " + year );

      var thirdMessage = $( "<p></p>" ).html( "Good (early) morning and have a joyful day ahead!" );

      greetings.append( firstMessage );
      greetings.append( secondMessage );
      greetings.append( thirdMessage );

    } else if( currentHours >= 6 && currentHours < 12 ) {

      var firstMessage = $( "<p></p>" ).html( "In case if you are still having hangover, today is Monday and the date?" );

      var secondMessage = $( "<p></p>" ).html( "It's " + currentDate + " " + monthStr + " " + year );

      var thirdMessage = $( "<p></p>" ).html( "Good morning and have an awesome day ahead!" );

      greetings.append( firstMessage );
      greetings.append( secondMessage );
      greetings.append( thirdMessage );

    } else if( currentHours >= 12 && currentHours < 18 ) {

      var firstMessage = $( "<p></p>" ).html( "It's afternoon and you're almost there!" );

      var secondMessage = $( "<p></p>" ).html( "It's " + currentDate + " " + monthStr + " " + year );

      var thirdMessage = $( "<p></p>" ).html( "Good afternoon and don't stop being awesome!" );

      greetings.append( firstMessage );
      greetings.append( secondMessage );
      greetings.append( thirdMessage );

    } else if( currentHours >= 18 && currentHours < 24 ) {

      var firstMessage = $( "<p></p>" ).html( "You've made it through the day!" );

      var secondMessage = $( "<p></p>" ).html( "It's " + currentDate + " " + monthStr + " " + year );

      var thirdMessage = $( "<p></p>" ).html( "Good evening and have a great rest!" );

      greetings.append( firstMessage );
      greetings.append( secondMessage );
      greetings.append( thirdMessage );

    }

    var context = $( "<div></div>" ).addClass( "context" ).html( "" );
    context.append( greetings );
    $( ".content" ).append( context )
  }

  $( document ).ready( function() {
    console.log( 'Ready' );

    displayGreeting();
    displayAboutMe();
    displayProjects();
    displayContacts();
  } );

} )();
