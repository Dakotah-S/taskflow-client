import type { Task } from "../types/task";

interface TaskItemProps {
  task: Task;
  onToggle: (id: string) => void;
  onDelete: (id: string) => void;
}

export default function TaskItem({ task, onToggle, onDelete }: TaskItemProps) {
  return (
    <li
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: 8,
      }}
    >
      <span
        onClick={() => onToggle(task.id)}
        style={{
          cursor: "pointer",
          textDecoration: task.completed ? "line-through" : "none",
        }}
      >
        {task.title}
      </span>

      <button
        onClick={() => onDelete(task.id)}
        style={{ marginLeft: 12 }}
      >
        ✕
      </button>
    </li>
  );
}