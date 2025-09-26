import { useState } from "react";
import type { ToDo } from "../types/todo";
import { addTodo } from "../api/mockApis";

interface Props {
  setTodos: React.Dispatch<React.SetStateAction<ToDo[]>>;
}

export default function AddToDoForm({ setTodos }: Props) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!title.trim()) return;

    setLoading(true);
    setError(null);

    try {
      const newTodo = await addTodo({ title, description, completed: false });
      setTodos(prev => [...prev, newTodo]);
      setTitle("");
      setDescription("");
    } catch (err) {
        console.error(err)
      setError("Failed to add todo");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white shadow p-4 rounded-md mb-6">
      <h2 className="text-xl font-semibold mb-2">Add New Task</h2>
      {error && <p className="text-red-500 mb-2">{error}</p>}
      <input 
        type="text"
        placeholder="Title"
        className="w-full border rounded p-2 mb-2"
        value={title}
        onChange={e => setTitle(e.target.value)}
        required
      />
      <textarea
        placeholder="Description"
        className="w-full border rounded p-2 mb-2"
        value={description}
        onChange={e => setDescription(e.target.value)}
        required
      />
      <button
        type="submit"
        disabled={loading}
        className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md transition disabled:opacity-50"
      >
        {loading ? "Adding..." : "Add Task"}
      </button>
    </form>
  );
}
