document.addEventListener('DOMContentLoaded', () => {
    const inputBox = document.getElementById('input-box');
    const listContainer = document.getElementById('list-container');

    function addTask() {
        const taskText = inputBox.value.trim();
        if (taskText === '') return;

        const listItem = document.createElement('li');
        const taskSpan = document.createElement('span');
        taskSpan.textContent = taskText;

        const editButton = document.createElement('button');
        editButton.textContent = 'Edit';
        editButton.classList.add('edit-btn');
        editButton.onclick = () => editTask(taskSpan, listItem);

        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.classList.add('delete-btn');
        deleteButton.onclick = () => listItem.remove();

        listItem.appendChild(taskSpan);
        listItem.appendChild(editButton);
        listItem.appendChild(deleteButton);
        listContainer.appendChild(listItem);

        inputBox.value = '';
    }

    function editTask(taskSpan, listItem) {
        const newTaskText = prompt('Edit your task', taskSpan.textContent);
        if (newTaskText !== null && newTaskText.trim() !== '') {
            taskSpan.textContent = newTaskText.trim();
        }
    }

    document.querySelector('button').addEventListener('click', addTask);
    inputBox.addEventListener('keypress', (event) => {
        if (event.key === 'Enter') addTask();
    });
});