//initial topics and where user input will go
let initialTopics = ["will arnett", "george clooney", "michael keaton", "adam west", "christian bale"];

//create batman addition
const batman = " batman";

//array of options with "batman" added
var topics = [];

//create variable to place combined strings in
var combineStrings = " ";

// add "batman" to the end of each string and push to topics array
for (var i = 0; i < initialTopics.length; i++) {
    //add "batman" to the end of each string in initialTopics array
    combineStrings = initialTopics[i].concat(batman);
    //add new string to "topics array"
    topics.push(combineStrings);
};
//display topics as buttons
for (var j = 0; j < topics.length; j++) {
    //generate button for each item in array
    var a = $("<button>");
    //add a class
    a.addClass("topic");
    //add a data attribute with the value of the topic
    a.attr("data-person", topics[j]);
    //add text to button with value of the topic
    a.text(topics[j]);
    //add button to HTML
    $("#topicButton").append(a);
    // $("#topicButton").append('<button>' + topics[j] + '</button>').val(topics[j]);
}

//on click event
$("button").on("click", function () {
    //create variable based on attribute of which button was pressed
    var person = $(this).attr("data-person");
    //create url with name of the person
    var queryURL = "https://api.giphy.com/v1/gifs/search?q=" +
        //attach api key and the person variable
        //limit AJAX responses to 10
        person + "&api_key=oZLjfolRARt1FqSzbHu9yHOboMpJ0CT7&limit=10";

    // cal AJAX method and send URL to giphy
    $.ajax({
        url: queryURL,
        method: "GET"
    })
});


//each on click should add an additional 10 gifs, not overwrite (optional)
//gifs should start as non-animated
//create var to push to gifView div
//display rating of each gif
//when user click gif, it plays
//when the click gif again, it pauses
//when user clicks the add button
    //add to topics array
