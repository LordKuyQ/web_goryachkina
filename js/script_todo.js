document.addEventListener('DOMContentLoaded', function() {
  const todoList = [];

  function renderTodoList(filter = 'all') {
      const olTodo = document.getElementById('ol_todo');
      olTodo.innerHTML = '';

      const filteredList = todoList.filter(item => {
        switch (filter){
            case 'completed':
                return item.completed;
            case 'completed':
                return !item.completed;
            default:
                return true;
        }
      });

      filteredList.forEach(item => {
          const li = document.createElement('li');
          li.textContent = `${item.text}`;
          li.style.textDecoration = item.completed ? 'line-through' : 'none';
          li.addEventListener('click', () => {
              item.completed = !item.completed;
              renderTodoList(filter);
          });
          olTodo.appendChild(li);
      });
  }

  document.getElementById('AddBtn').addEventListener('click', () => {
      const newElementText = document.getElementById('inputNewElement').value;
      if (newElementText.trim() !== '') {
          todoList.push({ text: newElementText, completed: false, createdAt: new Date().toISOString() });
          document.getElementById('inputNewElement').value = '';
          renderTodoList();
      }
  });

  document.getElementById('ClearBtn').addEventListener('click', () => {
      todoList.length = 0;
      renderTodoList();
  });

  document.querySelectorAll('.filterButton').forEach(button => {
      button.addEventListener('click', () => {
          const filter = button.getAttribute('data-filter');
          renderTodoList(filter);
      });
  });

  renderTodoList('all');
});
