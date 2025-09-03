
const taskList = document.getElementById('taskList');
const popup = document.getElementById('popup');
const plusBtn = document.getElementById('plus');


const sel = document.getElementById('oneToTwelve');
for (let i = 1; i <= 12; i++) {
    sel.innerHTML += `<option value="${i}">${i}</option>`;
}
const sel2 = document.getElementById('zeroToSixty');
for (let i = 0; i < 60; i++) {
    sel2.innerHTML += `<option value="${i}">${i.toString().padStart(2, '0')}</option>`;
}

plusBtn.addEventListener('click', () => { popup.style.display = 'block'; });


let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
renderTasks();

document.getElementById('addTaskBtn').addEventListener('click', () => {
    const taskName = document.getElementById('taskName').value.trim();
    const hour = document.getElementById('oneToTwelve').value;
    const min = document.getElementById('zeroToSixty').value;
    const ampm = document.getElementById('ampm').value;
    const desc = document.getElementById('description').value.trim();
    const priority = document.getElementById('priority').value;

    if (!taskName) { alert("Please enter a task name"); return; }

    const task = { taskName, hour, min, ampm, desc, priority };
    tasks.push(task);
    localStorage.setItem("tasks", JSON.stringify(tasks));

    renderTasks();

    
    document.getElementById('taskName').value = "";
    document.getElementById('oneToTwelve').value = "";
    document.getElementById('zeroToSixty').value = "";
    document.getElementById('description').value = "";
    document.getElementById('priority').value = "";
    popup.style.display = "none";
});


function renderTasks() {
    taskList.innerHTML = "";
    tasks.forEach((task, index) => {
        const div = document.createElement('div');
        div.className = "task";
        div.innerHTML = `
          <h3>${task.taskName} 
            <span class="priority ${task.priority}">${task.priority.replace('-', ' ')}</span>
          </h3>
          <small>${task.hour}:${task.min.toString().padStart(2, '0')} ${task.ampm}</small>
          <p>${task.desc}</p>
          <button class="delete-btn" onclick="deleteTask(${index})">X</button>
        `;
        taskList.appendChild(div);
    });
}

function deleteTask(index) {
    tasks.splice(index, 1);
    localStorage.setItem("tasks", JSON.stringify(tasks));
    renderTasks();
}

window.deleteTask = deleteTask;