const taskInput = document.querySelector(".taskInput");
const taskTemplate = document.querySelector("#taskTemplate").content;
const taskContainer = document.querySelector(".tasks");
// Функция для добавления задачи
function createTask(name) {
  const newTask = taskTemplate.querySelector(".taskItem").cloneNode(true);
  newTask.querySelector(".taskText").textContent = name;
  taskInput.value = "";
  newTask.querySelector(".removeButton").addEventListener('click',function(evt) {
    evt.target.closest('.taskItem').remove()
  });
  const checkbox = newTask.querySelector('.checkmark');
  checkbox.addEventListener('change', function() {
    const taskText = newTask.querySelector('.taskText');
    taskText.classList.toggle('completed');
  });
  return newTask;
}

function addTask (evt) {
    evt.preventDefault();
    taskContainer.append(createTask(taskInput.value));
}

// Навешиваем обработчик события на кнопку "Добавить"
document.querySelector(".addTaskBtn").addEventListener("click", addTask);
