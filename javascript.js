$(document).ready(function(){
   setTimeout(function(){
     $('ul').removeClass("disappear");
     $('div').removeClass('snow1');
     $('div').removeClass('snow2');
     
  }, 8000);
  $('#nextpage').click(function(){
    $('#one').attr("src", "images/solar.png");
    $('#text1').text("Solar System");
    $('#link1').attr("href", "https://github.com/wei30/Planets_Orbits_Sun");
    $('#demo1').attr("href", "Planets_Orbits_Sun/index.html")
    $('#two').attr("src", "images/quote.png");
    $('#text2').text("Random Quote");
    $('#link2').attr("href", "https://github.com/wei30/RandomQuote_generator");
    $('#demo2').attr("href", "RandomQuote_generator/index.html");
    $('#three').attr("src", "images/register.png");
    $('#text3').text("Register Form");
    $('#link3').attr("https://github.com/wei30/Register_Form");
    $('#demo3').attr("href", "Register_Form/index.html");
  });

  $('#prepage').click(function(){
    $('#one').attr("src", "images/cal.png");
    $('#text1').text("Basic Calculator");
    $('#link1').attr("href", "https://github.com/wei30/Simple-Calculator");
    $('#demo1').attr("href", "https://codepen.io/wei30/full/XgjvOQ");
    $('#two').attr("src", "images/wiki1.png");
    $('#text2').text("The Game Of TIC TAC TOE");
    $('#link2').attr("href", "https://github.com/wei30/TicTacToe");
    $('#demo2').attr("href", "FinalTic_Tac_Toe/index.html");
    $('#three').attr("src", "images/weather3.png");
    $('#text3').text("Local Weather");
    $('#link3').attr("href", "https://github.com/wei30/wei30.github.io-localweather");
    $('#demo3').attr("href", "Localweather/index.html");
  });
  
});
  
