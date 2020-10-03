// work on styling
    // classes to match time of day
    // colors will match when time has passed or time still remaining
    // format local date on top of screen
// manual css
    // padding/margin to time field and save button
// javascript
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
$(".taskText").on("click", function() {
    var text = $(this)
        .text()
        .trim();
    var textInput = $("<textarea>")
        .attr("id", "textInput")
        .addClass("col-10")
        .val(text);
    $(this).replaceWith(textInput);
    textInput.trigger("focus");
});

$("#task").on("blur", "textarea", function() {
    var text = $(this)
        .val()
        .trim();
    var taskDiv = $("<p>")
        .addClass("task-text")
        .text(text);
    $(this).replaceWith(taskDiv);
});

// saves task in the textfield to local storage then converts it back into a <p> element
$(".saveBtn").on("click", function() {
    var text = $(".row")
        .children("textarea")
        .val()
        .trim();
    console.log(text);
})

localDate();