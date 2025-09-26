# React To-Do App (TypeScript + TailwindCSS)

A simple single-page To-Do application built with React, TypeScript, and TailwindCSS.
This project demonstrates frontend skills such as component design, state management, API integration (mock API), and responsive UI.

Features

## Display a list of To-Do items (title, description, completion state)

## Add new To-Dos

## Edit To-Dos

## Mark To-Dos as complete/incomplete

## Delete To-Do's

## Simulated API calls (GET, POST, PUT, DELETE) with loading states & error handling

## Responsive design with TailwindCSS

## Strict TypeScript typing (import type used across project)

Project Structure
src/
 ├─ api/             # Mock API functions (fetch, add, update, delete)
 ├─ components/      # Reusable UI components
 ├─ pages/           # Page components (Home)
 ├─ types/           # TypeScript interfaces
 ├─ App.tsx          # Root component
 ├─ main.tsx         # Entry point
 └─ index.css 

 Steps in Configuring the project

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



      // Alternatively, use this for stricter rules
     
