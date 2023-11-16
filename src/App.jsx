import { useState } from "react";

const App = () => {
  const [count, setCount] = useState(0);

  return (
    <div className="min-h-screen flex gap-12 justify-center items-center text-4xl">
      <button
        className="bg-gray-400 w-12 h-12 text-white rounded-xl flex justify-center items-center"
        onClick={() => setCount(count - 1)}
      >
        -
      </button>
      <div>{count}</div>
      <button
        className="bg-blue-300 w-12 h-12 text-white rounded-xl flex justify-center items-center"
        onClick={() => setCount(count + 1)}
      >
        +
      </button>
    </div>
  );
};

export default App;
