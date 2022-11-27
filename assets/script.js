var timeBlockContainer = $('.container');
var timeElement = $('#currentDay');
var saveButton = $('.save');

console.log(dayjs());

// handle displaying the time
function displayTime() {
    var rightNow = dayjs().format('MMM DD, YYYY  hh:mm:ss a');
    timeElement.text(rightNow);
}

saveButton.on('click', function(event) {
    var element = event.target;
    console.log(element.parentNode.dataset.hour);
})

displayTime();
setInterval(displayTime,1000);