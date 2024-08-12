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
  atualizarCounter();
  task.value = "";
};

const atualizarCounter = function () {
  const numTarefas = Number(document.querySelectorAll(".tarefa--item").length);
  const counter = document.querySelector(".counter");
  numTarefas <= 0
    ? (counter.textContent = "Tudo Feito 😉")
    : (counter.textContent = `${numTarefas} ${numTarefas === 1 ? "Tarefa" : "Tarefas"
      }`);
};

const alterarEstado = function (element) {
  const estado = element.checked;
  const task = element.parentElement;
  estado ? task.classList.add("concluida") : task.classList.remove("concluida");
};

const limparConcluidas = function () {
  const tarefas = document.querySelectorAll(".tarefa--item");
  for (const tarefa of tarefas) {
    tarefa.classList.contains("concluida") ? tarefa.remove() : null;
  }
  atualizarCounter();
};

const removerFiltros = function () {
  const tarefas = document.querySelectorAll(".tarefa--item");
  tarefas.forEach((t) => {
    t.style.display = "flex";
  });
};

const aplicarFiltro = function (filtro) {
  const tarefas = document.querySelectorAll(".tarefa--item");
  if (filtro === "concluidos") {
    for (const tarefa of tarefas) {
      tarefa.classList.contains("concluida")
        ? (tarefa.style.display = "flex")
        : (tarefa.style.display = "none");
    }
  } else {
    for (const tarefa of tarefas) {
      !tarefa.classList.contains("concluida")
        ? (tarefa.style.display = "flex")
        : (tarefa.style.display = "none");
    }
  }
};

//Event Listeners

document.getElementById("add--tarefa").addEventListener("click", addTask);
document.getElementById("limpar").addEventListener("click", limparConcluidas);
document.getElementById("todas").addEventListener("click", removerFiltros);
document.getElementById("pendentes").addEventListener("click", () => {
  aplicarFiltro("pendentes");
});
document.getElementById("done").addEventListener("click", () => {
  aplicarFiltro("concluidos");
});
document.getElementById("tarefas").addEventListener('click', function (e) {
  const gerador = e.target;
  if (gerador.classList.contains("tarefa--check")) {
    alterarEstado(gerador)
  }
})

atualizarCounter();
