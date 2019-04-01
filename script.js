// 1. Create the button
var button = document.createElement("button");
button.innerHTML = "Answer";

// 2. Append somewhere
var body = document.getElementsByTagName("body")[0];
body.appendChild(button);

// 3. Add event handler
button.addEventListener ("click", function() {
  alert("I'm not telling you, silly. Who knows what Mom and Dad would say?     <(-_-|||)>");
});
