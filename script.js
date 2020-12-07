var todolistDiv = document.getElementById("todolist")
var input = document.getElementById("input")
var todolist = ["run", "hw"]
render()

function addTodo() {
  todolist.push(input.value)
  render();
}

function removeTodo(index) {
  var newArray = []
  for(var i=0; i < todolist.length; i++) {
    if (i !== index) {
      newArray.push(todolist[i])
    }
  }
  todolist = newArray;
  render();
}

function render() {
    var result = ""
    for (var i = 0; i < todolist.length; i++) {
      result += "<div class='todo'><button onclick='removeTodo(" + i + ")'>刪除</button><div>"+todolist[i]+"</div></div>"
    }
  
    todolistDiv.innerHTML = result
}




function save() {
  localStorage.setItem("todolist", todolist.toString())
}

function getTodoListFromLocalStorage() {
  var todolistStr = localStorage.getItem("todolist")
  return todolistStr.split(",")
}