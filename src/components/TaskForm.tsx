import { useState, FormEvent } from "react";

interface TaskFormProps {
  onAdd: (title: string) => void;
}

export default function TaskForm({ onAdd }: TaskFormProps) {
  const [title, setTitle] = useState("");

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    const trimmed = title.trim();
    if (!trimmed) return;
    onAdd(trimmed);
    setTitle("");
  }

  return (
    <form onSubmit={handleSubmit} style={{ marginTop: 16 }}>
      <input
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Add a task..."
        style={{
          padding: "8px 12px",
          width: "70%",
          marginRight: 8,
          borderRadius: 8,
          border: "1px solid #555",
          background: "#111",
          color: "#fff"
        }}
      />
      <button type="submit">Add</button>
    </form>
  );
}