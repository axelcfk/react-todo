import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Form from "./components/Form";
import TodoList from "./components/TodoList";
import Stats from "./components/Stats";

export default function App() {
  const [items, setItems] = useState([]);

  const [input, setInput] = useState("");
  const [quantity, setQuantity] = useState(1);

  function handleAddItems(item) {
    console.log(item);
    setItems((currentItems) => [...currentItems, item]);
  }

  function handleDeleteItems(id) {
    console.log(id);
    setItems((currentItems) => currentItems.filter((item) => item.id !== id));
  }

  function handleToggleItem(id) {
    console.log(id);
    setItems((currentItems) =>
      currentItems.map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : item
      )
    );
  }

  return (
    <div className="app">
      <div className="container">
        <Header />
        <Form
          handleAddItems={handleAddItems}
          input={input}
          setInput={setInput}
          quantity={quantity}
          setQuantity={setQuantity}
        />
        <TodoList
          items={items}
          handleDeleteItems={handleDeleteItems}
          handleToggleItem={handleToggleItem}
        />
        <Stats items={items} />
      </div>
    </div>
  );
}
