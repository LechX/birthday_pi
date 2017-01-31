function pullDigits() {

  // send AJAX request and set innerHTML for p element

  // Your birthday is the 108,806,460<sup>th</sup> digit in pi.

  $('.output').css("color", "black");

}



/*

var btn = document.getElementById("calculate");

btn.addEventListener("click",function(){

    var ourRequest = new XMLHttpRequest();

    ourRequest.open("GET", 'https://learnwebcode.github.io/json-example/animals-' + pageCounter + '.json');

    // error function
    ourRequest.onerror = function() {
        console.log("Connection error");
    };

    ourRequest.send();

    ourRequest.onload = function () {

        var ourData = JSON.parse(ourRequest.responseText);

        renderHTML(ourData);

        };

    pageCounter++;

    if (pageCounter > 3) {
        btn.classList.add("hide-me");
    }

});
*/


/**
 * This is a function that will parse JSON objects that are passed in and add HTML
 * @param data
 */
function renderHTML(data) {

    var htmlString = "";

    for (var i = 0; i < data.length; i++) {

        htmlString += "<p>" + data[i].name + " is a " + data[i].species + " that likes to eat ";

        for (var k = 0; k < data[i].foods.likes.length; k++) {
            if (k == 1) {
                htmlString += " and ";
            }
            htmlString += data[i].foods.likes[k];
        }

        htmlString += " but dislikes ";

        for (var j = 0; j < data[i].foods.dislikes.length; j++) {
            if (j == 1) {
                htmlString += " and ";
            }
            htmlString += data[i].foods.dislikes[j];
        }

        htmlString += "." + "</p>";
    }

    contents.insertAdjacentHTML('beforeend',htmlString);

}
