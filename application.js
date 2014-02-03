function addText() {
  var input = document.getElementById('input').value;
  if (input !== "string") {
    alert("Come on, please enter some valid text!");

  }

  var addItem = document.createElement("li");
  var css = "{type: checkbox}";
  var processItem = document.createTextNode(input);
  addItem.appendChild(processItem);
  document.getElementById("todo-list").appendChild(addItem).appendChild(document.cssText(css));
}





