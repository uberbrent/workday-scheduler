// work on styling
    // fonts
    // classes to match time of day
    // colors will match when time has passed or time still remaining
    // format local date on top of screen
// manual css
    // padding/margin to time field and save button
// javascript
    // moment.js to determine time xxx 
    // refresh page every 10 minutes
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
var rollingHour = function() {
    $("#task").removeClass("past", "present", "future")

}

// turns p field into a text box to change tasks
$(".col-10").on("click", function() {
    var text = $(this)
        .text()
        .trim();
    var textInput = $("<textarea>")
        .attr("id", "task")
        .addClass("col-10")
        .val(text);
    $(this).replaceWith(textInput);
    textInput.trigger("focus");
});

// saves task in the textfield to local storage then converts it back into a <p> element
$(".saveBtn").on("click", function() {
    var text = $("#task")
        .text()
        .trim();
    console.log(text);
})

localDate();