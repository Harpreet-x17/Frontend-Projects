import React, { useState } from "react";

const Todo2 = () => {
  const [todos, settodos] = useState([]);
  const [input, setinput] = useState("");

  const handleSubmit = () => {
    if (!input.trim()) return;
    settodos((todos) => [...todos, { text: input, id: Date.now() }]);
    setinput("");
  };

  const handleRemove = (e) => {
    settodos((todos) => todos.filter((todo) => todo.id !== e));
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <div className="w-full max-w-md bg-white rounded-xl shadow-lg p-6">
        <h1 className="text-2xl font-bold text-center text-gray-800 mb-4">
          Todo App
        </h1>
        <div className="flex gap-2 mb-4  ">
          <input
            spellCheck="false"
            type="text"
            placeholder="Enter a new Todo"
            value={input}
            onChange={(e) => setinput(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") handleSubmit();
            }}
            className="flex-grow border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <button
            onClick={handleSubmit}
            className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition"
          >
            ADD
          </button>
        </div>
        <ul className="space-y-2">
          {todos.map(({ text, id }) => (
            <li
              key={id}
              className="flex justify-between items-center bg-gray-100 rounded-lg px-4 py-2 shadow-sm"
            >
              <span className="text-gray-800">{text}</span>
              <button
                onClick={() => handleRemove(id)}
                className="text-red-500 hover:text-red-700 font-semibold"
              >
                ✕
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Todo2;
