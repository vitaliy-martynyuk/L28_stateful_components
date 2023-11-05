import { useState } from "react";

import { TodoList } from "./components/todoList";

function App() {
  const [asdasd, setToDos] = useState([
    {
      name: "Todo 1",
      status: "Done",
    },
    {
      name: "Todo 2",
      status: "Done",
    },
    {
      name: "Todo 3",
      status: "Pending",
    },
    {
      name: "Todo 4",
      status: "Done",
    },
    {
      name: "Todo 5",
      status: "Deleted",
    },
  ]);
  const [inputValue, setInputValue] = useState("");

  const onDelete = (id) => {
    setToDos((prevValue) => [...prevValue.filter((_, elId) => elId !== id)]);
  };

  return (
    <>
      <TodoList toDos={asdasd} onDelete={onDelete} />
      <input
        value={inputValue}
        onChange={(e) => {
          setInputValue(e.target.value);
        }}
      />
      <button
        onClick={() => {
          setToDos((prevValue) => {
            return [...prevValue, { name: inputValue, status: "New" }];
          });
          setInputValue("");
        }}
      >
        Add todo
      </button>
    </>
  );
}

export default App;
