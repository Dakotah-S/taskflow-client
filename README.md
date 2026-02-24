# TaskFlow

A minimal task management app built with React, TypeScript, and Vite.

## Overview

TaskFlow is a lightweight task management application demonstrating modern React development practices with strong typing and component separation.

It includes local persistence using the browser’s LocalStorage API and a clean, centered UI layout.

---

## Features

- Add tasks
- Toggle completed state
- Delete tasks
- Filter by All / Active / Completed
- Persistent storage (LocalStorage)
- Fully typed with TypeScript
- Component-based architecture

---

## Tech Stack

- React
- TypeScript
- Vite
- LocalStorage API

---

## Project Structure

```
src/
  components/
    TaskForm.tsx
    TaskItem.tsx
  hooks/
    useLocalStorage.ts
  types/
    task.ts
  App.tsx
```

---

## Run Locally

Clone the repository:

```bash
git clone https://github.com/Dakotah-S/taskflow-client.git
cd taskflow-client
npm install
npm run dev
```

---

## Why This Project?

This project demonstrates:

- React state management
- TypeScript typing patterns
- Custom hooks
- Clean component separation
- Local data persistence
- Modern Vite development workflow

---

## Future Improvements

- Drag-and-drop reordering
- Due dates
- Backend persistence (Node/Express or Supabase)
- User authentication
- Dark/light theme toggle

---

Built as a portfolio project to showcase modern frontend development skills.
