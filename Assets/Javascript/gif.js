//initial topics and where user input will go
let initialTopics = ["will arnett", "george clooney", "michael keaton", "adam west", "christian bale"];

//display topics as buttons
for (var j = 0; j < initialTopics.length; j++) {
    $("#topicButton").append('<button>' + initialTopics[j] + '</button>');
}

//create batman addition
const batman = " batman";

//array of options - "topics"
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
console.log(topics);

//Giphy api link
//on click event
//call AJAX
//get AJAX response
//limit AJAX responses to 10
//each on click should add an additional 10 gifs, not overwrite (optional)
//gifs should start as non-animated
//create var to push to gifView div
//display rating of each gif
//when user click gif, it plays
//when the click gif again, it pauses
//when user clicks the add button
    //add to topics array
