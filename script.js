$('#main_clock').fitText(1.3);
$('#clock1').fitText(1.3);
$('#clock2').fitText(1.3);
$('#clock3').fitText(1.3);
function update() {
  $('#main_clock').html(moment().format('H:mm a'));
  $('#clock1').html(moment().tz('America/Los_Angeles').format('H:mm a'));
  $('#clock2').html(moment().tz('Europe/London').format('H:mm a'));
}

setInterval(update, 1000);
