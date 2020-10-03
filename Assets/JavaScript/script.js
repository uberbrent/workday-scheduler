// work on styling
    // colors will match when time has passed or time still remaining
    // format local date on top of screen
// manual css
    // padding/margin to time field and save button
// javascript
    // refresh page every 1 minute
    // assign class to determine color in bootstrap
    // save button fuctionality to lock in text
    // save tasks to local storage convert textfield back to P

var tasks = {}
var localTime = moment()

// handles saving to local storage
var saveTasks = function() {
    localStorage.setItem("tasks", JSON.stringify(tasks));
};

// sets date to display properly at the top of the page
var localDate = function() {
    var date = localTime.format("MMMM DD, YYYY");
    $("#currentDay").append(date);
};

// checks the current time and updates each hour to shift classes
// var rollingHour = function() {
//     if(localTime)
// };

// saves task in the textfield to local storage
$(".saveBtn").on("click", function() {
    var hour = parseInt($(this).attr("id").split("-")[1]);

    tasks[hour] = $("#task-"+hour).val();

    localStorage.setItem("taskList", JSON.stringify(tasks));
});

localDate();








// setInterval(function() {
    //     $(".col-10 .taskText").each(function (el) {
        //         auditTask(el);
        //     })
// }, 1000);