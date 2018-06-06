var enviarTweet = function (event) {
    event.preventDefault();
    //console.log(event);

    //1. obtener el textArea
    var textArea = document.getElementById("tweet-area");
    var tweetContainer = document.getElementById("tweets");
    console.log(textArea.value);

    var valTextArea = textArea.value;
    var tweet = document.createElement("p");
    var textTweet = document.createTextNode(valTextArea);
    
    tweet.appendChild(textTweet);
    tweetContainer.appendChild(tweet);
    textArea.value = "";
}

var checkTextArea = function () {
    var textArea = document.getElementById("tweet-area");
    var tweetContainer = document.getElementById("tweets");
    if (textArea.value == "")  {
        btnTweet.disabled = true;
    } else{
        btnTweet.disabled = false;
    }
    
}

//se agrego el evento al btn de tweet
var btnTweet = document.getElementById("btn-tweet");
console.log(btnTweet);

btnTweet.addEventListener("focus", )
btnTweet.addEventListener("click", enviarTweet);
