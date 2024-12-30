import React, { useRef, useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import DisplayItems from "./DisplayItems";
import ExportFile from "./ExportFile";

const getFromLocalStorage = () => {
  return localStorage.getItem("todo")
    ? JSON.parse(localStorage.getItem("todo"))
    : [];
};

const Grocery = () => {
  const [itemsData, setItemsData] = useState(() => getFromLocalStorage());
  const inputRef = useRef("");

  const handleAddItem = () => {
    if (inputRef.current.value === "") {
      toast.error("Please Provide Value", { position: "top-center" });
    } else {
      const item = {
        id: Math.random(),
        completed: false,
        name: inputRef.current.value,
        date: new Date().toDateString(),
      };
      inputRef.current.value = "";
      const localStoredData = getFromLocalStorage();
      localStorage.setItem("todo", JSON.stringify([...localStoredData, item]));
      toast.success("Item added to the list", { position: "top-center" });

      setItemsData(getFromLocalStorage());
    }
  };

  const handleItemsUpdate = () => {
    setItemsData(getFromLocalStorage);
  };

  return (
    <>
      <div className='grocery-container'>
        <h2>Grocery Bud</h2>
        <div className='input-container'>
          <input type='text' name='input' ref={inputRef} />
          <button className='add-item-btn' onClick={handleAddItem}>
            Add Item
          </button>
          <ToastContainer />
        </div>
        <DisplayItems items={itemsData} handleItemsUpdate={handleItemsUpdate} />
      </div>
      <ExportFile items={itemsData} />
    </>
  );
};

export default Grocery;
