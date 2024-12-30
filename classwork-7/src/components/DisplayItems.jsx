import React from "react";
import { toast } from "react-toastify";

const DisplayItems = ({ items, handleItemsUpdate }) => {
  const handleChecked = (itemId) => {
    const updatedItems = items.map((item) => {
      if (item.id === itemId) {
        return { ...item, completed: !item.completed };
      }
      return item;
    });
    localStorage.setItem("todo", JSON.stringify(updatedItems));
    handleItemsUpdate();
  };

  const handleItemDelete = (itemId) => {
    const filteredItems = items.filter((item) => item.id !== itemId);
    localStorage.setItem("todo", JSON.stringify(filteredItems));
    handleItemsUpdate();

    toast.success("Item Deleted", { position: "top-center" });
  };

  return (
    <div className='items'>
      {items.map((item) => (
        <div className='single-item' key={item.id}>
          <input
            type='checkbox'
            name='item'
            id='item'
            onChange={() => handleChecked(item.id)}
          />
          <p
            style={{ textDecoration: item.completed ? "line-through" : "none" }}
          >
            {item.name}
          </p>
          <button
            className='delete-btn'
            onClick={() => handleItemDelete(item.id)}
          >
            Delete
          </button>
        </div>
      ))}
    </div>
  );
};

export default DisplayItems;
