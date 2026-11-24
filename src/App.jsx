import { useState } from "react";
import "./App.css";

function App() {
  const [tasks, setTasks] = useState([]);
  const [text, setText] = useState("");

  const addTask = () => {
    if (text.trim() === "") return;
    setTasks([...tasks, { name: text, done: false }]);
    setText("");
  };

  const toggleTask = (index) => {
    const temp = [...tasks];
    temp[index].done = !temp[index].done;
    setTasks(temp);
  };

  const deleteTask = (index) => {
    setTasks(tasks.filter((_, i) => i !== index));
  };

  return (
    <div className="todo-card">
      <h2>React TODO Application</h2>

      <div className="input-group">
        <input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && addTask()}
          placeholder="Enter Task"
        />
        <button className="add-btn" onClick={addTask}>
          Add Task
        </button>
      </div>

      <ul>
        {tasks.map((task, index) => (
          <li key={index}>
            <input
              type="checkbox"
              checked={task.done}
              onChange={() => toggleTask(index)}
            />
            <span
              className={task.done ? "done" : ""}
              style={{
                textDecoration: task.done ? "line-through" : "none",
              }}
            >
              {task.name}
            </span>
            <button className="delete-btn" onClick={() => deleteTask(index)}>
              Delete
            </button>
          </li>
        ))}
      </ul>

      {tasks.length === 0 && (
        <p className="empty-msg">No tasks yet. Add one above!</p>
      )}
    </div>
  );
}

export default App;
