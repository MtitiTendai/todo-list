import type { ToDo } from "../types/todo";
import ToDoItem from "./ToDoItem";

interface Props {
  todos: ToDo[];
  setTodos: React.Dispatch<React.SetStateAction<ToDo[]>>;
}

export default function ToDoList({ todos, setTodos }: Props) {
  if (todos.length === 0) {
    return <p className="text-gray-500 text-center">No tasks yet. Add one above 👆</p>;
  }

  return (
    <div className="space-y-4">
      {todos.map(todo => (
        <ToDoItem key={todo.id} todo={todo} setTodos={setTodos} />
      ))}
    </div>
  );
}
