const listContainer = document.getElementById("list-container");

let inputBox = document.getElementById('input-box');

function addTask(){
  if(inputBox.value === ''){
    alert('Add your Task!');
  }
  else{
    let task = document.createElement('li');
    task.textContent = inputBox.value;
    listContainer.appendChild(task)

    let span = document.createElement('span');
    task.appendChild(span)
  }
  inputBox.value = ''
  saveData()
}

listContainer.addEventListener('click', (e) => {
  if(e.target.tagName == 'LI'){
    e.target.classList.toggle('checked')
    saveData()
  }
  else if(e.target.tagName == 'SPAN'){
    e.target.parentElement.remove()
    saveData()
  }
})

function saveData(){
  localStorage.setItem("tasks", listContainer.innerHTML)
}

function showData(){
  listContainer.innerHTML = localStorage.getItem("tasks")
}
showData()