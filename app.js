const addForm = document.querySelector(".add");
const list = document.querySelector(".todos");
const search = document.querySelector(".search input");

const generateTemplate = (todo) => {
  const html = `
  <li
  class="list-group-item d-flex justify-content-between align-items-center">
  <span>${todo}</span>
  <i class="far fa-trash-alt delete"></i>
</li>`;

  list.innerHTML += html; // adding new todo in the ul list
};
//add todos
addForm.addEventListener("submit", (e) => {
  e.preventDefault(); // for stop default reload
  const todo = addForm.add.value.trim();
  todo.length ? (generateTemplate(todo), addForm.reset()) : false; // Ternary Operator with Multiple Statements
});

//delete todos
list.addEventListener("click", (e) => {
  e.target.classList.contains("delete")
    ? e.target.parentElement.remove()
    : false;
});

//filter todos
const filterTodos = (term) => {
  Array.from(list.children)
    .filter((todo) => !todo.textContent.toLowerCase().includes(term))
    .forEach((todo) => todo.classList.add("filtered"));

  Array.from(list.children)
    .filter((todo) => todo.textContent.toLowerCase().includes(term))
    .forEach((todo) => todo.classList.remove("filtered"));
};

//keyup event
search.addEventListener("keyup", () => {
  const term = search.value.trim().toLowerCase();
  filterTodos(term);
});
