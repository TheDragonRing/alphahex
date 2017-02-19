/*
  Alphahex by TheDragonRing (thedragonring.me)
  Copyright © 2017 TheDragonRing - Creative Commons Attribution 4.0 International License
*/

$(document).ready(function(){

  var $fadeIn = $('[fadeIn]');
  $fadeIn.removeAttr('fadeIn');
  $fadeIn.hide();
  $fadeIn.fadeIn(500);

  $('[scrollToTop]').click(function(){
    event.preventDefault();
    $('html, body').animate({
        scrollTop: 0
    }, 500);
  });

  $('a').each(function(){
    if($(this).attr('href') === ''){
      $(this).click(function(){
        event.preventDefault();
      });
    }
  });

  $.get('https://api.github.com/repos/thedragonring/alphahex/releases/latest', function(data){
    $('#alphahex #download').attr('href', data.zipball_url);
  });

  $('[name=subject]').keypress(function(event){
    if(event.which === 13){
      $('[name=message]').focus();
    }
  });
  $('#submit').hover(function(){
    var $subject = $('[name=subject]').val();
    var $body = $('[name=message]').val();
    var $url = 'mailto:hello@thedragonring.me?subject=' + $subject + '&body=' + $body;
    $(this).attr('href', $url);
  });
  $('#submit').click(function(){
    if($(this).attr('href') === '#'){
      event.preventDefault();
    }
  });
  $('#reset').click(function(){
    event.preventDefault();
    $('[name=subject]').val('');
    $('[name=message]').val('');
  });

  function getYear(){
    var year = new Date().getFullYear();
    if(year === 2017){
      return year;
    }else{
      return '2017 - ' + year;
    }
  }
  $('#copyright').html('<a href="http://thedragonring.me/alphahex">Content: &copy; ' + getYear() + ' Alphahex</a>' + ' <a href="https://thedragonring.me">Design: &copy; ' + getYear() + ' TheDragonRing</a>');

});
