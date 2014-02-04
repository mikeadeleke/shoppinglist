function addText() {
  var input = document.getElementById('input').value;
  if (!input || 0 === input.length || /^\s*$/.test(input) ) {
    alert("Come on, please enter some valid text!");
    return;
  }
  checkbox = document.createElement('input="checkbox"')
  list_item = document.getElementById("todo-list")
  var addItem = document.createElement("li");
  var processItem = document.createTextNode(input);
  addItem.appendChild(processItem);
  document.getElementById("todo-list").appendChild(addItem);
  addItem.insertBefore(checkbox, list_item)
}


