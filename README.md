# React To-Do App (TypeScript + TailwindCSS)

A simple single-page To-Do application built with React, TypeScript, and TailwindCSS.
This project demonstrates frontend skills such as component design, state management, API integration (mock API), and responsive UI.

## Features

 a. Display a list of To-Do items (title, description, completion state)

 b. Add new To-Dos

 c. Edit To-Dos

 d. Mark To-Dos as complete/incomplete

 e. Delete To-Do's

 f. Simulated API calls (GET, POST, PUT, DELETE) with loading states & error handling

 g. Responsive design with TailwindCSS

 h. Strict TypeScript typing (import type used across project)

## Project Structure <br>
src/ <br>
 ├─ api/             # Mock API functions (fetch, add, update, delete) <br>
 ├─ components/      # Reusable UI components <br>
 ├─ pages/           # Page components (Home) <br>
 ├─ types/           # TypeScript interfaces <br>
 ├─ App.tsx          # Root component <br>
 ├─ main.tsx         # Entry point <br>
 └─ index.css <br>

## Steps in Configuring the project

1.) Creating vite project - Initialize a new React + TypeScript project using Vite
    command - npm create vite@latest todo-app
    
2.) Installing dependencies - Install all required project dependencies
    command - npm install

3.) Installing and configuring tailwindcss - Install TailwindCSS and its peer dependencies, then initialize config files
    command - npm install -D tailwindcss postcss autoprefixer
              npx tailwindcss init -p

    Update tailwind.config.cjs - content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],

   Add Tailwind directives to src/index.css
    @tailwind base;
    @tailwind components;
    @tailwind utilities;


4.) Run the development server - Start the dev server and open in browser (default http://localhost:5173/)
   command - npm run dev



     
     
