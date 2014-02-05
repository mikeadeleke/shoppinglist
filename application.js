function addText() {
  var input = document.getElementById('input');
  
  var itemText = input.value;

  if (!itemText || 0 === itemText.length || /^\s*$/.test(itemText)) {
    alert("Come on, please enter some valid text!");
    return false;
  }
  

  var listItem = document.createElement("li");
  listItem.innerText = itemText;

  var list = document.getElementById("todo-list");
  list.appendChild(listItem)

  var checkItem = listItem;
  checkItem.onclick = function() {
    checkItem.setAttribute("id", "checked");
  };

  input.value = "";
}
