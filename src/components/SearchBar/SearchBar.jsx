import { useState } from "react";
import toast from "react-hot-toast";

export default function SearchBar({ onSubmit }) {
  const [input, setInput] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    if (input.trim() === "") {
      toast.error("Введіть запит для пошуку!");
      return;
    }
    onSubmit(input);
  }

  return (
    <header className="mb-4">
      <form onSubmit={handleSubmit} className="flex">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Search images and photos"
          className="flex-1 border p-2 rounded-l"
          autoComplete="off"
          autoFocus
        />
        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-r">
          Search
        </button>
      </form>
    </header>
  );
}