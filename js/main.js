
$('.menu').click(function(){
  $('nav li').toggle();
})

// Get the height of the container
var containerHeight = $('.timeline').height();

if ($(".tester").css("float") == "none" ){
  // Get the height of the div to be shown
  console.log('hello')
  $('.content-1960s').addClass('show-hidden');
  var hiddenHeight = $('.content-1960s').height();
  $('.timeline').height(hiddenHeight);
}


$('.y1960s').click(function(){
  $('.content-1960s').toggleClass('show-hidden');

  if ($(".tester").css("float") == "none" ){
    // Get the height of the div to be shown
    var hiddenHeight = $('.content-1960s').height();
    // Find out if it's visible on the screen
    if ($('.content-1960s').hasClass('show-hidden') && hiddenHeight > containerHeight) {
      // Set the parent container to that height
      $('.timeline').height(hiddenHeight) 
    } else {
      $('.timeline').height(containerHeight);
    }
  }

  $('.content-1970s').removeClass('show-hidden');
  $('.content-1980s').removeClass('show-hidden');
  $('.content-1990s').removeClass('show-hidden');
  $('.content-2000s').removeClass('show-hidden');
  $('.content-2010s').removeClass('show-hidden');
});

$('.y1970s').click(function(){
  var contentHeight = $('.content-1970s').height();
  $('.content-1970s').toggleClass('show-hidden');

    if ($(".tester").css("float") == "none" ){
    // Get the height of the div to be shown
    var hiddenHeight = $('.content-1970s').height();
    // Find out if it's visible on the screen
    if ($('.content-1970s').hasClass('show-hidden') && hiddenHeight > containerHeight) {
      // Set the parent container to that height
      $('.timeline').height(hiddenHeight) 
    } else {
      $('.timeline').height(containerHeight);
    }
  }

  $('.content-1960s').removeClass('show-hidden');
  $('.content-1980s').removeClass('show-hidden');
  $('.content-1990s').removeClass('show-hidden');
  $('.content-2000s').removeClass('show-hidden');
  $('.content-2010s').removeClass('show-hidden');
});

$('.y1980s').click(function(){
  var contentHeight = $('.content-1980s').height();
  $('.content-1980s').toggleClass('show-hidden');
   
    if ($(".tester").css("float") == "none" ){
    // Get the height of the div to be shown
    var hiddenHeight = $('.content-1980s').height();
    // Find out if it's visible on the screen
    if ($('.content-1980s').hasClass('show-hidden') && hiddenHeight > containerHeight) {
      // Set the parent container to that height
      $('.timeline').height(hiddenHeight) 
    } else {
      $('.timeline').height(containerHeight);
    }
  }

  $('.content-1960s').removeClass('show-hidden');
  $('.content-1970s').removeClass('show-hidden');
  $('.content-1990s').removeClass('show-hidden');
  $('.content-2000s').removeClass('show-hidden');
  $('.content-2010s').removeClass('show-hidden');
});

$('.y1990s').click(function(){
  var contentHeight = $('.content-1990s').height();
  $('.content-1990s').toggleClass('show-hidden');

      if ($(".tester").css("float") == "none" ){
    // Get the height of the div to be shown
    var hiddenHeight = $('.content-1990s').height();
    // Find out if it's visible on the screen
    if ($('.content-1990s').hasClass('show-hidden') && hiddenHeight > containerHeight) {
      // Set the parent container to that height
      $('.timeline').height(hiddenHeight) 
    } else {
      $('.timeline').height(containerHeight);
    }
  }

  $('.content-1960s').removeClass('show-hidden');
  $('.content-1970s').removeClass('show-hidden');
  $('.content-1980s').removeClass('show-hidden');
  $('.content-2000s').removeClass('show-hidden');
  $('.content-2010s').removeClass('show-hidden');
});

$('.y2000s').click(function(){
  var contentHeight = $('.content-2000s').height();
  $('.content-2000s').toggleClass('show-hidden');

      if ($(".tester").css("float") == "none" ){
    // Get the height of the div to be shown
    var hiddenHeight = $('.content-2000s').height();
    // Find out if it's visible on the screen
    if ($('.content-2000s').hasClass('show-hidden') && hiddenHeight > containerHeight) {
      // Set the parent container to that height
      $('.timeline').height(hiddenHeight) 
    } else {
      $('.timeline').height(containerHeight);
    }
  }

  $('.content-1960s').removeClass('show-hidden');
  $('.content-1970s').removeClass('show-hidden');
  $('.content-1980s').removeClass('show-hidden');
  $('.content-1990s').removeClass('show-hidden');
  $('.content-2010s').removeClass('show-hidden');
});

$('.y2010s').click(function(){
  var contentHeight = $('.content-2010s').height();
  $('.content-2010s').toggleClass('show-hidden');

      if ($(".tester").css("float") == "none" ){
    // Get the height of the div to be shown
    var hiddenHeight = $('.content-2010s').height();
    // Find out if it's visible on the screen
    if ($('.content-2010s').hasClass('show-hidden') && hiddenHeight > containerHeight) {
      // Set the parent container to that height
      $('.timeline').height(hiddenHeight) 
    } else {
      $('.timeline').height(containerHeight);
    }
  }

  $('.content-1960s').removeClass('show-hidden');
  $('.content-1970s').removeClass('show-hidden');
  $('.content-1980s').removeClass('show-hidden');
  $('.content-1990s').removeClass('show-hidden');
  $('.content-2000s').removeClass('show-hidden');
});