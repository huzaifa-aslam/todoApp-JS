let newTask = document.getElementById('new-task');
let incompleteTasks = document.getElementById('incomplete-tasks')
let completeTasks = document.getElementById('completed-tasks')
let li = document.createElement("li")
let addTaskButton=document.getElementById("add-task");

addTaskButton.disabled=true

function myButton(text, cls, action) {
  let editButton = document.createElement("button")
  let btnText = document.createTextNode(text)
  editButton.appendChild(btnText)

  editButton.setAttribute('class', cls)
  editButton.setAttribute('onclick', action)
  li.appendChild(editButton)
}

function myFunction(){
  addTaskButton.disabled=false

}

function addTask() {

  if(newTask.value===""){
   return false
  }



  //create check input
  let checkInput = document.createElement("input")
  checkInput.setAttribute('type', 'checkbox')
  li.appendChild(checkInput)

  //create label
  let lbl = document.createElement("label")
  let lblText = document.createTextNode(newTask.value)
 
  lbl.appendChild(lblText)
  li.appendChild(lbl)

//create text input
let textInput = document.createElement("input")
textInput.setAttribute('type', 'text')
li.appendChild(textInput)

  myButton("Edit", "edit","editTask(this)")


  myButton("Delete", "delete", "deleteTask(this)")
  incompleteTasks.appendChild(li)
  //completeTasks.appendChild(li)
  newTask.value = ""
  

}

function deleteTask(e) {
  e.parentNode.remove()
  
}


function editTask(e){
  
  let pro=prompt("enter new value",e.parentNode.childNodes[1].firstChild.nodeValue)
 
e.parentNode.childNodes[1].firstChild.nodeValue=pro
}
