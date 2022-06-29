$('#clock').fitText(1.3);

function update() {
  $('#clock').html(moment().format('H:mm a'));
}

setInterval(update, 1000);
