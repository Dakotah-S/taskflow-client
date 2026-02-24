import { useMemo, useState } from "react";
import TaskForm from "./components/TaskForm";
import TaskItem from "./components/TaskItem";
import { useLocalStorage } from "./hooks/useLocalStorage";
import type { Task, TaskFilter } from "./types/task";

const STORAGE_KEY = "taskflow.tasks.v1";

export default function App() {
  const [tasks, setTasks] = useLocalStorage<Task[]>(STORAGE_KEY, []);
  const [filter, setFilter] = useState<TaskFilter>("all");

  const filteredTasks = useMemo(() => {
    if (filter === "active") return tasks.filter((t) => !t.completed);
    if (filter === "completed") return tasks.filter((t) => t.completed);
    return tasks;
  }, [tasks, filter]);

  function addTask(title: string) {
    const newTask: Task = {
      id: crypto.randomUUID(),
      title,
      completed: false,
      createdAt: new Date().toISOString(),
    };

    setTasks([newTask, ...tasks]);
  }

  function toggleTask(id: string) {
    setTasks(
      tasks.map((t) =>
        t.id === id ? { ...t, completed: !t.completed } : t
      )
    );
  }

  function deleteTask(id: string) {
    setTasks(tasks.filter((t) => t.id !== id));
  }

  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background: "#0f0f0f",
        color: "#fff",
        fontFamily: "system-ui, sans-serif",
        padding: "40px 20px",
      }}
    >
      <div
        style={{
          width: "100%",
          maxWidth: 520,
        }}
      >
        <header
          style={{
            marginBottom: 24,
            textAlign: "center",
          }}
        >
          <h1 style={{ margin: 0, fontSize: 36 }}>TaskFlow</h1>
          <span style={{ opacity: 0.6, fontSize: 14 }}>
            React + TypeScript
          </span>
        </header>

        <section
          style={{
            padding: 24,
            borderRadius: 16,
            background: "#1b1b1b",
            boxShadow: "0 10px 40px rgba(0,0,0,0.5)",
          }}
        >
          <p style={{ marginTop: 0, opacity: 0.8, textAlign: "center" }}>
            {tasks.length} total •{" "}
            {tasks.filter((t) => !t.completed).length} active
          </p>

          <TaskForm onAdd={addTask} />

          <div
            style={{
              display: "flex",
              justifyContent: "center",
              gap: 8,
              marginTop: 16,
            }}
          >
            <button onClick={() => setFilter("all")} disabled={filter === "all"}>
              All
            </button>
            <button
              onClick={() => setFilter("active")}
              disabled={filter === "active"}
            >
              Active
            </button>
            <button
              onClick={() => setFilter("completed")}
              disabled={filter === "completed"}
            >
              Completed
            </button>
          </div>

          <ul style={{ marginTop: 20, paddingLeft: 0, listStyle: "none" }}>
            {filteredTasks.length === 0 ? (
              <li style={{ opacity: 0.6, textAlign: "center" }}>
                No tasks yet.
              </li>
            ) : (
              filteredTasks.map((task) => (
                <TaskItem
                  key={task.id}
                  task={task}
                  onToggle={toggleTask}
                  onDelete={deleteTask}
                />
              ))
            )}
          </ul>
        </section>
      </div>
    </div>
  );
}