import type { ToDo } from "../types/todo";

let todos: ToDo[] = [
  { id: 1, title: "Learn React", description: "Practice hooks and components", completed: false },
  { id: 2, title: "Build To-Do App", description: "With React + TypeScript + Tailwind", completed: false },
];

function simulateNetwork<T>(data: T, fail = false): Promise<T> {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (fail && Math.random() < 0.2) {
        reject("Simulated API error ❌");
      } else {
        resolve(data);
      }
    }, 800);
  });
}

export const fetchTodos = () => simulateNetwork(todos);

export const addTodo = (todo: Omit<ToDo, "id">) => {
  const newTodo: ToDo = { id: Date.now(), ...todo };
  todos.push(newTodo);
  return simulateNetwork(newTodo);
};

export const updateTodo = (id: number, updates: Partial<ToDo>) => {
  todos = todos.map(t => (t.id === id ? { ...t, ...updates } : t));
  return simulateNetwork(todos.find(t => t.id === id)!);
};

export const deleteTodo = (id: number) => {
  todos = todos.filter(t => t.id !== id);
  return simulateNetwork({ success: true });
};
