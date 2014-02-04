function addText() {
  var input = document.getElementById('input').value;
  if (input !== "string") {
    alert("Come on, please enter some valid text!");
    return;
  }

  var addItem = document.createElement("li");
  var processItem = document.createTextNode(input);
  addItem.appendChild(processItem);
  document.getElementById("todo-list").appendChild(addItem);
}





