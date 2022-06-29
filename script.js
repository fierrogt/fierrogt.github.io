$('#clock').fitText(1.3);

function update() {
  $('#clock1').html(moment().format('h:mm a'));
  $('#clock4').html(moment().tz("America/Los_Angeles").format('h:mm a'));
  $('#clock6').html(moment().tz("Asia/Tel_Aviv").format('h:mm a'));
  $('#clock2').html(moment().tz("America/Chicago").format('h:mm a'));
  $('#clock3').html(moment().tz("America/Denver").format('h:mm a'));
  $('#clock5').html(moment().tz("Europe/London").format('h:mm a')); 
  
  $('#title1').html("Local Time");
  $('#title4').html("Alameda");
  $('#title6').html("Tel Aviv");
  $('#title2').html("Chicago");
  $('#title3').html("Denver");
  $('#title5').html("London");
  

  

  
}

setInterval(update, 1000);