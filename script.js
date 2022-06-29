var london = moment.tz("Europe/London").format('MMMM Do YYYY, h:mm:ss a');
var sydney = moment.tz("Australia/Sydney").format('MMMM Do YYYY, h:mm:ss a');
var beijing = moment.tz("China/Beijing").format('MMMM Do YYYY, h:mm:ss a');
var tokyo = moment.tz("Asia/Tokyo").format('MMMM Do YYYY, h:mm:ss a');
var la = moment.tz("America/Los_Angeles").format('MMMM Do YYYY, h:mm:ss a');

$("#london").text(london);
$("#sydney").text(sydney);
$("#beijing").text(beijing);
$("#tokyo").text(tokyo);
$("#la").text(la);

function update() {
    $('#la').html(moment().format('h:mm a'));
    $('#london').html(moment().format('h:mm a'));
    $('#tokyo').html(moment().format('h:mm a'));
    $('#beijing').html(moment().format('h:mm a'));
    $('#sydney').html(moment().format('h:mm a'));
}



setInterval(update, 1000);
