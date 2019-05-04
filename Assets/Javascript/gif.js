//initial topics and where user input will go
let initialTopics = ["will arnett", "george clooney", "michael keaton", "christian bale"];

//create batman addition
const batman = " batman";

//array of topics with "batman" added
var topics = [];

//create variable to place combined strings in
var combineStrings = " ";

var results;

//function to add to array
function userAdditions() {
    //prevent duplicate topics
    topics = [];
    // add "batman" to the end of each string and push to topics array
    for (var i = 0; i < initialTopics.length; i++) {
        //add "batman" to the end of each string in initialTopics array
        combineStrings = initialTopics[i].concat(batman);
        //add new string to "topics array"
        topics.push(combineStrings);
    };
}
userAdditions();

//function to display buttons
function buttonSetUp() {
    //prevent duplicate buttons
    $("#topicButton").empty();
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
    }
}
//call buttonSetUp function
buttonSetUp();

//add user input to initial topics array
$("#add-gif").on("click", function (event) {
    //prevent form from submitting itself
    event.preventDefault();
    //grab text from input box
    var userInput = $("#gif-input").val().trim();
    //add value from textbox to topics array
    initialTopics.push(userInput);
    //reinitialize userAdditions function
    userAdditions();
    //reinitialize buttonSetUp function
    buttonSetUp();
});

//on click event
$(document.body).on("click", ".topic", function () {
    //clear gifs on button click
    $("#gifView").empty();
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

        // After the data comes back from the API
        .then(function (response) {
            // Storing an array of results in the results variable
            results = response.data;

            // Looping over every result item
            for (var q = 0; q < results.length; q++) {

                // Push to html
                var gifDiv = $("#gifView");

                // Storing the result item's rating
                var rating = results[q].rating;

                // Creating a paragraph tag with the result item's rating
                var p = $("<p>").text("Rating: " + rating);

                // Creating an image tag
                var personImage = $("<img>");

                // Giving the image tag an src attribute of a proprty pulled off the
                // result item
                personImage.attr("src", results[q].images.fixed_height.url);

                // Appending the paragraph and personImage we created to the "gifDiv" div we created
                gifDiv.append(p);
                gifDiv.append(personImage);

                // Prepending the gifDiv to the "#gifs-appear-here" div in the HTML
                $("#gifs-appear-here").prepend(gifDiv);
            }
        });

});

//gifs should start as non-animated
//when user click gif, it plays
//when the click gif again, it pauses
