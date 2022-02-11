// replace function
function replace() {
    var oldText = document.getElementById("Input-TextArea").value;
    //console.log(oldText);
    var findText = document.getElementById("find-text").value;
    var replaceText = document.getElementById("replace-text").value;
    var newText = oldText.replaceAll(findText, replaceText)
    //console.log(newText);
    document.getElementById("Output-TextArea").value = newText;
}

// about function
function about() {
    alert("This is a website which helps you to replace the one text with another text in paragraph.");
}