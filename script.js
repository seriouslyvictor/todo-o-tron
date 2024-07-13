const addTask = function (e) {
  e.preventDefault();
  const task = document.getElementById("criar--tarefa");
  const tarefaDiv = document.getElementById("tarefas");
  if (!task.value) {
    task.classList.add("atencao");
    setTimeout(() => {
      task.classList.remove("atencao");
    }, 1000);
    return;
  }
  const newTask = document.createElement("article");
  newTask.classList.add("tarefa--item");
  newTask.innerHTML = `<input type="checkbox" class="tarefa--check" name="concluido">
  <h2 class="tarefa--titulo">${task.value}</h2>`;

  tarefaDiv.prepend(newTask);
  alert("Tarefa Adicionada!");
}

const add = document.querySelector("#add--tarefa")
add.addEventListener("click", addTask)