import React, { useEffect } from 'react';
import './app.css';
import './reset.css';

const App: React.FC = () => {
  useEffect(() => {
    const input = document.querySelector(".search_input") as HTMLInputElement;
    const addButton = document.querySelector(".search_add") as HTMLButtonElement;
    const toDoList = document.querySelector(".todo-list") as HTMLUListElement;

    async function downloadData() {
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/todos?_limit=5');

        const todos = await response.json();
        dataOutput(todos);

      } catch (error) {
        alert('Не удалось загрузить задачи');
      }
    }

    function dataOutput(todos: any[]) {
      todos.forEach(todo => {
        const listItem = document.createElement("li");
        listItem.className = "todo-item";

        listItem.innerHTML = `
                <span class="task-text ${todo.completed ? 'completed' : ''}">${todo.title}</span>
                <img src="./trash.svg" alt="Удалить" class="delete-btn">
            `;

        toDoList.appendChild(listItem);
      })
    }

    function addToDo() {
      const taskText = input.value.trim();

      if (taskText === "") {
        return;
      }

      const listItem = document.createElement("li");
      listItem.className = "todo-item";

      listItem.innerHTML = `
            <span class="task-text">${taskText}</span>
            <img src="./trash.svg" alt="Удалить" class="delete-btn">
        `;

      toDoList.prepend(listItem);
      input.value = "";
      input.focus();
    }

    function toggleTodo(event: Event) {
      const target = event.target as HTMLElement;
      if (target.classList.contains("task-text")) {
        target.classList.toggle("completed");
        console.log('Current classes:', target.className);

      }
    }

    function deleteTodo(event: Event) {
      const target = event.target as HTMLElement;
      if (target.classList.contains("delete-btn")) {
        const listItem = target.closest(".todo-item");

        if (listItem) {
          listItem.remove();
        }
      }
    }

    input.addEventListener("keydown", (e: KeyboardEvent) => {
      if (e.key === "Enter") {
        e.preventDefault();
        addToDo();
      }
    })

    addButton.addEventListener("click", addToDo);
    toDoList.addEventListener("click", toggleTodo);
    toDoList.addEventListener("click", deleteTodo);
    downloadData();
  }, []);

  return (
    <div className="app">
      <header>
        <h1 className="title">TODO LIST</h1>
        <form className="search">
          <input className="search_input" placeholder="Введите новую задачу..." />
          <button className="search_add" type="button">Добавить</button>
        </form>
      </header>

      <main className="main">
        <ul className="todo-list" key={Date.now()}>
          {/* отображение созданных задач */}
        </ul>
      </main>

      <footer>
        <p className="copyright">© 2025</p>
      </footer>
    </div>
  );
};

export default App;