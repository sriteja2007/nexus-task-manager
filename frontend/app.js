const API = "http://localhost:5000/tasks";

// Add Task
async function addTask() {
  const title = document.getElementById("title").value;
  const category = document.getElementById("category").value;
  const priority = document.getElementById("priority").value;

  if (!title.trim()) return alert("Enter a task name!");

  await fetch(API, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ title, category, priority, progress: 0 })
  });

  loadTasks();
}

// Load Tasks
async function loadTasks() {
  const res = await fetch(API);
  const tasks = await res.json();

  // Update dashboard stats
  document.getElementById("totalTasks").innerText = tasks.length;
  document.getElementById("completedTasks").innerText =
    tasks.filter(t => t.progress === 100).length;
  document.getElementById("pendingTasks").innerText =
    tasks.filter(t => t.progress < 100).length;

  document.getElementById("taskList").innerHTML = tasks
    .map(task => `
      <div class="task priority-${task.priority.toLowerCase()}">
        <h3>${task.title}</h3>
        <p>${task.category}</p>
        <p>Priority: ${task.priority}</p>

        <!-- PROGRESS BAR -->
        <div class="progress-bar">
          <div class="progress" style="width:${task.progress}%"></div>
        </div>

        <button class="delete-btn" onclick="deleteTask('${task._id}')">Delete</button>
      </div>
    `)
    .join("");
}

// Delete Task
async function deleteTask(id) {
  await fetch(`${API}/${id}`, { method: "DELETE" });
  loadTasks();
}

// Load at start
loadTasks();
