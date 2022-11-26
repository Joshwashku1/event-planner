var timeBlockContainer = $('.container');
var timeElement = $('#currentDay');
var saveButton = $('.submit');

console.log(dayjs());

// handle displaying the time
function displayTime() {
    var rightNow = dayjs().format('MMM DD, YYYY [at] hh:mm:ss a');
    timeElement.text(rightNow);
}

saveButton.on('click', function() {
    console.log(this);
})

displayTime();
setInterval(displayTime,1000);