import { useEffect, useState } from "react";
import type { ToDo } from "../types/todo";
import AddToDoForm from "../componets/AddToDoForm";
import ToDoList from "../componets/ToDoList";
import { fetchTodos } from "../api/mockApis";

export default function Home() {
  const [todos, setTodos] = useState<ToDo[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetchTodos()
      .then(data => setTodos(data))
      .catch(() => setError("Failed to load todos"))
      .finally(() => setLoading(false));
  }, []);

  return (
    <div className="max-w-2xl mx-auto p-6">
      <h1 className="text-3xl font-bold text-center mb-6">📝 To-Do App</h1>
      <AddToDoForm setTodos={setTodos} />
      {loading ? (
        <p className="text-gray-500 text-center mt-4 animate-pulse">Loading...</p>
      ) : error ? (
        <p className="text-red-500 text-center mt-4">{error}</p>
      ) : (
        <ToDoList todos={todos} setTodos={setTodos} />
      )}
    </div>
  );
}
