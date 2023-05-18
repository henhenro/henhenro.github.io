// Create variables
var submit_button = document.getElementById("submit-button");
var copy_button = document.getElementById("copy-button");
var input = document.getElementById("input");
var output = document.getElementById("output");

submit_button.addEventListener("click", transform);

function transform() {
    console.log("Submit button has been clicked");

    var input_text = input.value;

    // create bold_text for output and split the words
    var bold_text = "";
    const words = input_text.split(/\s+/);

    // now format the input_text into bold according to TikTok
    for (let i = 0; i < words.length; i++) {
        curr_word = words[i];

        if (curr_word.length == 1) {
            bold_text += curr_word.substring(0, 1).bold(); // bold 1st letter
        } else if (curr_word.length <= 3) {
            bold_text += curr_word.substring(0, 1).bold(); // bold 1st letter
            bold_text += curr_word.substring(1) // add rest of word
        } else if (curr_word.length <= 4) {
            bold_text += curr_word.substring(0, 2).bold(); // bold first 2 letters
            bold_text += curr_word.substring(2) // add rest of word
        } else if (curr_word.length >= 5) {
            var half_index = Math.ceil(curr_word.length / 2.0)
            bold_text += curr_word.substring(0, half_index).bold(); // bold fist ceil(word.length / 2) words
            bold_text += curr_word.substring(half_index) // add rest of word
        }

        // add space in between words
        if (i < words.length - 1) {
            bold_text += " ";
        }
    }

    output.innerHTML = bold_text;
}

function copyFormattedText(str) {
    function listener(e) {
      e.clipboardData.setData("text/html", str);
      e.clipboardData.setData("text/plain", str);
      e.preventDefault();
    }
    document.addEventListener("copy", listener);
    document.execCommand("copy");
    document.removeEventListener("copy", listener);

    showAlert("Formatted text copied to clipboard!");
  };

function showAlert(message) {
    const notification = document.createElement("div");
    notification.id = "notification";
    notification.textContent = message;
    document.body.appendChild(notification);

    setTimeout(function() {
        notification.remove();
    }, 1000); // Remove after 1 seconds
}

// if input has changed, then clear the output innerHTML
var initial_input_value = input.value;
function inputChanged() {
    if (input.value !== initial_input_value) {
        output.innerHTML = "";
        initial_input_value = input.value
    }
}

// Call the inputChanged function every 50ms
setInterval(inputChanged, 50);

// if input is blank, then put placeholder text in the output innerHTML
function outputPlaceholder() {
    if (input.value == "") {
        output.innerHTML = "<b>Her</b>e's <b>Fan</b>cy <b>Bol</b>ded <b>Te</b>xt</h5>";
    }
}

// Call the outputPlaceholder function every 50ms
setInterval(outputPlaceholder, 50);




// var initial_input_height = input.height;
// var initial_output_height = output.height;

// function checkForChanges() {
//     if (input.height !== initial_input_height) {
//         input.setAttribute("style", "height:" + output.height);
//     } else if (output.height !== initial_output_height) {
//         output.setAttribute("style", "height:" + input.height);
//     }

//     initial_input_height = input.height;
//     initial_output_height = output.height;
// }

// // Call the checkForChanges function at a specific interval
// setInterval(checkForChanges, 50); // Check every 50 ms