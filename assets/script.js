var timeBlockContainer = $('.container');
var timeElement = $('#currentDay');
console.log(dayjs());
// handle displaying the time
function displayTime() {
    var rightNow = dayjs().format('MMM DD, YYYY [at] hh:mm:ss a');
    timeElement.text(rightNow);
}
displayTime();
setInterval(displayTime,1000);