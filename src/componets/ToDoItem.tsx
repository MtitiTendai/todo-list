import { useState } from "react";
import type { ToDo } from "../types/todo";
import { updateTodo, deleteTodo } from "../api/mockApis";

interface Props {
  todo: ToDo;
  setTodos: React.Dispatch<React.SetStateAction<ToDo[]>>;
}

export default function ToDoItem({ todo, setTodos }: Props) {
  const [isEditing, setIsEditing] = useState(false);
  const [title, setTitle] = useState(todo.title);
  const [description, setDescription] = useState(todo.description);
  const [loading, setLoading] = useState(false);

  const toggleComplete = async () => {
    setLoading(true);
    const updated = await updateTodo(todo.id, { completed: !todo.completed });
    setTodos(prev => prev.map(t => (t.id === todo.id ? updated : t)));
    setLoading(false);
  };

  const handleSave = async () => {
    setLoading(true);
    const updated = await updateTodo(todo.id, { title, description });
    setTodos(prev => prev.map(t => (t.id === todo.id ? updated : t)));
    setIsEditing(false);
    setLoading(false);
  };

  const handleDelete = async () => {
    setLoading(true);
    await deleteTodo(todo.id);
    setTodos(prev => prev.filter(t => t.id !== todo.id));
    setLoading(false);
  };

  return (
    <div className="bg-gray-50 shadow p-4 rounded-md flex flex-col gap-2 transition hover:shadow-md">
      {isEditing ? (
        <>
          <input
            className="border rounded p-2"
            value={title}
            onChange={e => setTitle(e.target.value)}
          />
          <textarea
            className="border rounded p-2"
            value={description}
            onChange={e => setDescription(e.target.value)}
          />
          <button
            onClick={handleSave}
            disabled={loading}
            className="bg-green-500 hover:bg-green-600 text-white px-3 py-1 rounded-md transition"
          >
            {loading ? "Saving..." : "Save"}
          </button>
        </>
      ) : (
        <>
          <div className="flex items-center justify-between">
            <h3
              className={`font-semibold ${todo.completed ? "line-through text-gray-400" : ""}`}
            >
              {todo.title}
            </h3>
            <input
              type="checkbox"
              checked={todo.completed}
              onChange={toggleComplete}
              className="w-5 h-5 accent-blue-500"
            />
          </div>
          <p className={`text-sm ${todo.completed ? "line-through text-gray-400" : ""}`}>
            {todo.description}
          </p>
          <div className="flex gap-2 mt-2">
            <button
              onClick={() => setIsEditing(true)}
              className="bg-yellow-500 hover:bg-yellow-600 text-white px-3 py-1 rounded-md"
            >
              Edit
            </button>
            <button
              onClick={handleDelete}
              className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded-md"
            >
              Delete
            </button>
          </div>
        </>
      )}
    </div>
  );
}
